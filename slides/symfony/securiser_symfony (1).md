# Sécuriser une application Symfony — Mode d’emploi

---

## Qu'est-ce que l'OWASP ?

L'**OWASP** (Open Web Application Security Project) est une organisation à but non lucratif dédiée à l'amélioration de la sécurité des applications web.

### Mission et objectifs

- **Sensibiliser** développeurs et organisations aux risques de sécurité
- **Fournir des ressources gratuites** : guides, outils, documentation
- **Établir des standards** reconnus mondialement
- **Créer une communauté** d'experts en sécurité

--

### Le fameux "Top 10"

Publié tous les 3-4 ans, le **Top 10 OWASP** recense les vulnérabilités web les plus critiques et répandues :

- Basé sur l'**analyse de données réelles** d'incidents de sécurité
- **Référence mondiale** pour développeurs, auditeurs et RSSI
- Guide les **priorités de sécurisation** des projets web

--

### Les 10 failles de sécurité web les plus critiques selon l’OWASP :

--

1. ### A01 – Broken Access Control
   Contrôles d’accès mal implémentés → accès non autorisés.  
    _Exemple : un utilisateur modifie un paramètre URL pour accéder aux données d’un autre._

--

2. ### A02 – Cryptographic Failures
   Mauvaise gestion du chiffrement (mots de passe en clair, SSL faible).

--

3. ### A03 – Injection

   Exécution de code non prévu (SQLi, NoSQLi, LDAPi, Command Injection).

   _Exemple : un champ de recherche non sécurisé permet d'injecter `'; DROP TABLE users; --`_

   _Aller plus loin : https://www.php.net/manual/fr/security.database.sql-injection.php_

--

4. ### A04 – Insecure Design
   Architecture non pensée pour la sécurité (pas de validations, absence de séparation).

--

5. ### A05 – Security Misconfiguration
   Configurations par défaut, messages d’erreur trop verbeux, services inutiles exposés.

--

6. ### A06 – Vulnerable & Outdated Components

   Librairies obsolètes non mises à jour.

   _utiliser composer audit et composer update_

--

7. ### A07 – Identification & Authentication Failures
   Authentification faible (mots de passe trop simples, absence de 2FA).

--

8. ### A08 – Software & Data Integrity Failures
   Absence de vérification d’intégrité (packages compromis, CI/CD non sécurisé).

--

9. ### A09 – Security Logging & Monitoring Failures

   Manque de logs pertinents → attaques non détectées.

   _Documentation symfony : https://symfony.com/doc/current/logging.html_

--

10. ### A10 – Server-Side Request Forgery (SSRF)
    App web forcée à envoyer des requêtes vers des ressources internes non prévues.

---

# Les bonnes pratiques dans symfony

---

## 1) Mettre à jour Symfony & dépendances

**Pourquoi ?** Corriger failles et bugs rapidement.

--

**Comment ?**

- Vérifie ta version :
  ```bash
  composer show symfony/* | grep -E 'symfony/|versions'
  ```
- Mets à jour mineur/patch :
  ```bash
  composer update symfony/* --with-all-dependencies
  ```
- Surveille les avis de sécu :
  - `composer audit` (Composer ≥2.4)
  - https://symfony.com/blog/category/security
- Verrouille les versions (semver) dans `composer.json`, ex :
  ```json
  "symfony/framework-bundle": "^7.1"
  ```

---

## 2) Protéger les fichiers sensibles

**Pourquoi ?** Éviter la fuite de secrets.

--
**Comment ?**

- **Ne pas** committer `.env.local`, clés, dumps DB.

--

- Utilise les **secrets Symfony** en prod :
  ```bash
  symfony console secrets:set MAILER_DSN --env=prod
  symfony console secrets:list --env=prod
  ```

--

- Variables d’env via `APP_ENV`, `DATABASE_URL` :
  - Prod : configure les vraies variables sur le serveur (ou Docker).
- Droits système :

  ```bash
  chmod -R o-rwx var/ vendor/
  ```

- Bloque l’accès direct au répertoire projet (serveur web pointant vers `public/` **uniquement**).

---

## 3) Authentification & rôles/ACL

**Pourquoi ?** Contrôler qui fait quoi.  
**Comment ?**

- Génère la sécurité :
  ```bash
  symfony console make:user
  symfony console make:auth
  ```

--

- Config minimal `config/packages/security.yaml` :

  ```yaml
  security:
    password_hashers:
      Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface: "auto"

    providers:
      app_user_provider:
        entity:
          class: App\Entity\User
          property: email

    firewalls:
      main:
        lazy: true
        provider: app_user_provider
        form_login:
          login_path: app_login
          check_path: app_login
        logout:
          path: app_logout
        remember_me:
          secret: "%kernel.secret%"

    access_control:
      - { path: ^/admin, roles: ROLE_ADMIN }
      - { path: ^/profile, roles: ROLE_USER }
  ```

--

- Utilise des **Voters** pour la logique fine :
  ```php
  // src/Security/ArticleVoter.php
  protected function voteOnAttribute($attribute, $subject, TokenInterface $token): bool {
    $user = $token->getUser();
    if (!$user) return false;
    return $attribute === 'ARTICLE_EDIT' && $subject->getAuthor() === $user;
  }
  ```

---

## 4) Protection CSRF (formulaires & actions sensibles)

**Pourquoi ?** Empêcher les requêtes forgées.  
**Comment ?**

- Activer globalement (déjà par défaut) :
  ```yaml
  # config/packages/framework.yaml
  framework:
    csrf_protection: true
  ```

--

- Dans un formulaire Twig :
  ```twig
  <input type="hidden" name="_token" value="{{ csrf_token('delete' ~ article.id) }}">
  ```

--

- Vérifier côté contrôleur :
  ```php
  if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->request->get('_token'))) {
      // OK, effectuer la suppression
  }
  ```

--

- Pour **API** : préfère **JWT/Session** + **SameSite=Lax/Strict** et vérifie l’en-tête `Origin/Referer`.

---

## 5) XSS : échapper avec Twig (et nettoyer les entrées)

**Pourquoi ?** Bloquer l’injection de script côté client.  
**Comment ?**

- Twig **échappe par défaut** : `{{ variable }}` ✅  
  (Évite `|raw` — ou limite-le à du contenu **sanitisé**.)
- Pour du HTML utilisateur : passe par une lib de sanitization (ex. `HTMLPurifier`) côté serveur.
- Évite d’injecter des données dans du **JS inline**. Préfère :
  ```twig
  <script>
    const config = {{ { apiUrl: path('api_me') }|json_encode|raw }};
  </script>
  ```

---

## 6) En-têtes HTTP (CSP, HSTS, etc.)

**Pourquoi ?** Réduire la surface d’attaque au niveau navigateur.  
**Comment ?**

- En production : Active le HTTPS partout + **HSTS** :
  ```nginx
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  ```

--

- **CSP** restrictive (ex. via NelmioSecurityBundle) :

  ```yaml
  # config/packages/nelmio_security.yaml
  nelmio_security:
    content_security_policy:
      report_only: false
      hosts: []
      content_types: []
      directives:
        default_src: ['self']
        script_src: ['self']
        style_src: ['self' 'https://fonts.googleapis.com']
        img_src: ['self' 'data:']
        font_src: ['self' 'https://fonts.gstatic.com' 'data:']
  ```

--

- Autres en-têtes utiles :
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: no-referrer-when-downgrade`
  - `Permissions-Policy: geolocation=(), camera=(), microphone=()`

---

## 7) Désactiver le Profiler en prod

**Pourquoi ?** Le profiler expose des infos sensibles.  
**Comment ?**

- Dans `config/bundles.php`, ne charge **WebProfilerBundle** qu’en `dev` :
  ```php
  return [
    Symfony\Bundle\WebProfilerBundle\WebProfilerBundle::class => ['dev' => true, 'test' => true],
  ];
  ```
- Vérifie :
  ```env
  APP_ENV=prod
  APP_DEBUG=0
  ```

---

## 8) SSTI (Server-Side Template Injection)

**Pourquoi ?** Empêcher l’exécution de templates contrôlés par l’utilisateur.  
**Comment ?**

- **N’injecte jamais** un nom de template provenant de l’utilisateur :
  ```php
  // Éviter:
  return $this->render($request->get('tpl').'.html.twig');
  // Préférer liste blanche :
  $tpl = $request->get('tpl');
  $allowed = ['card', 'table'];
  if (!in_array($tpl, $allowed, true)) throw $this->createNotFoundException();
  return $this->render("partials/_${tpl}.html.twig");
  ```

---

## 9) Host Header Poisoning

**Pourquoi ?** Empêcher la prise de contrôle de l’host.  
**Comment ?**

- Configure des **hôtes de confiance** :
  ```yaml
  framework:
    trusted_hosts: ['^example\.com$', '^www\.example\.com$']
  ```

---

## 10) Rate Limiting

**Pourquoi ?** Limiter brute-force et abus.  
**Comment ?**

- Active le **RateLimiter** :
  ```yaml
  framework:
    rate_limiter:
      login_ip:
        policy: "fixed_window"
        limit: 5
        interval: "1 minute"
  ```
- Contrôleur :
  ```php
  public function login(Request $request, RateLimiterFactory $loginIpLimiter) {
    $limiter = $loginIpLimiter->create($request->getClientIp());
    if (!$limiter->consume(1)->isAccepted()) {
      throw new TooManyRequestsHttpException();
    }
    // suite du login...
  }
  ```

---

## 11) Logging (Monolog)

**Pourquoi ?** Tracer et alerter.  
**Comment ?**

- Config **Monolog** :
  ```yaml
  monolog:
    handlers:
      main:
        type: stream
        path: "%kernel.logs_dir%/%kernel.environment%.log"
        level: info
        formatter: monolog.formatter.json
      nested:
        type: rotating_file
        path: "%kernel.logs_dir%/security.log"
        level: notice
        max_files: 10
  ```

---

## OWASP Top 10 → Symfony

- **A01** : utiliser `access_control` + voters.
- **A02** : mots de passe hashés avec bcrypt/argon2.
- **A03** : Doctrine + requêtes préparées (éviter concat SQL).
- **A05** : config serveur `prod` + `APP_DEBUG=0`.
- **A06** : `composer audit` + MAJ régulières.
- **A07** : gestion stricte des rôles + CSRF activé.
- **A09** : config Monolog + alertes.
- **A10** : valider les URLs en entrée, bloquer accès internes.

--

## Ressources

- Article Drosalys : [Sécuriser une application Symfony](https://drosalys.fr/securiser-une-application-symfony-les-meilleures-pratiques-pour-proteger-votre-site/)
- Article Vaadata : [Symfony security best practices](https://www.vaadata.com/blog/symfony-security-best-practices-vulnerabilities-and-attacks/)
- Documentation Symfony :
  - [Sécurité](https://symfony.com/doc/current/security.html)
  - [CSRF Protection](https://symfony.com/doc/current/security/csrf.html)
  - [RateLimiter](https://symfony.com/doc/current/rate_limiter.html)
  - [Best Practices](https://symfony.com/doc/current/best_practices.html)
  - [Secrets management](https://symfony.com/doc/current/configuration/secrets.html)
  - [NelmioSecurityBundle](https://github.com/nelmio/NelmioSecurityBundle)

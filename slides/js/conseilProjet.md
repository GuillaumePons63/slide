# Cycle de développement d’une application web

---

# Objectif

## Montrer que vous êtes capable de développer une application web sécurisée

---

## Vue d’ensemble des étapes

1. **Cadrage & expression du besoin**

   - Personas, objectifs, user stories, critères d’acceptation
   - Parcours utilisateur, maquettes

--

2. **Conception de la base de données**

   - **MCD → MPD**, dictionnaire de données
   - Contraintes (NOT NULL, UNIQUE, CHECK), **index** et **jeu d’essai**
   - Stratégie d’accès (**Doctrine ORM**, requêtes SQL), **migrations**

--

3. **Mise en place de l’environnement**

   - PHP, Composer, Symfony CLI, serveur local (Symfony server)
   - Linter/formatter, Git (branches)
   - Docker

--

4. **Développement Front**

   - **Front** : Twig, HTML sémantique, CSS, JS léger (Stimulus/Alpine)
   - Formulaires, gestion d’état si besoin

--

5. **Développement Back (Symfony)**

   - Entités, **repositories Doctrine**, services métier, contrôleurs
   - Sécurité : **auth** (Security, PasswordHasher), rôles
   - **API** (routes JSON, Serializer, validation), gestion erreurs/logs

--

6. **Intégration & tests**

   - **Tests** unitaires/functional (PHPUnit), tests HTTP (WebTestCase), tests JS si Front app
   - ## Fixtures/seed, CI minimale

--

7. **Qualité, sécurité & performance**

   - OWASP (XSS, CSRF, injections, headers), rate‑limit, CORS si API
   - ## Profilage (Symfony Profiler), cache HTTP, opcache, assets minifiés

---

# Échéancier type (4 semaines) — Projet Symfony

---

## Semaine 1 — Cadrage & conception

- User stories + critères d’acceptation, backlog priorisé
- Maquettes (Accueil, Liste, Détail, Formulaire)
- **MCD → MPD**, dictionnaire de données, FK, contraintes, **jeu d’essai**
- Choix architecture (Twig vs SPA)
  **Jalons** : MCD/MPD validés, dépôt Git, plan technique validé

---

## Semaine 2 — Environnement & squelettes

- **Symfony new** + bundles essentiels, **Doctrine** configuré
- **Migrations** initiales, **fixtures/seed** de base
- **Back** : entités/repositories, contrôleurs squelette
- **Front** : layout Twig, pages skeleton, formulaires maquettes  
  **Jalons** : schéma SQL en place, routes clés accessibles, pages skeleton

---

## Semaine 3 — Fonctionnel & intégration

- **Back** : cas d’usage CRUD, services métier, validations
- **Front** : intégration formulaires/retours d’erreur, appels API/fetch
- Tests unitaires & fonctionnels, correctifs, données seed réalistes  
  **Jalons** : parcours utilisateurs clés OK, tests verts

---

## Semaine 4 — Recette, sécurité & déploiement

- Recette utilisateur, corrections
- Durcissement sécurité (CSRF, Voter, input validation, headers)
- Build assets, **migrations** en prod, sauvegardes planifiées
- Rédaction du dossier de projet et préparation orale
  **Jalons** : MVP livrable, Dossier prêt

---

# Rappel **DWWM** — Compétences à valider

- **C1. Installer et configurer son environnement de travail**  
  Préparer l’outillage de développement (IDE, gestion de versions, dépendances, scripts), configurer et vérifier le bon fonctionnement du projet local et des outils associés.

- **C2. Maquetter des interfaces utilisateur**  
  Produire et faire évoluer des maquettes et prototypes conformes au besoin (ergonomie, accessibilité, responsive) et préparer les éléments pour l’intégration.

- **C3. Réaliser des interfaces utilisateur**  
  Intégrer les maquettes en interfaces fonctionnelles (HTML/CSS/JS/Twig), en respectant la sémantique, l’accessibilité et la cohérence graphique.

- **C4. Développer la partie dynamique des interfaces utilisateur**  
  Mettre en œuvre les interactions côté client (validation, formulaires, navigation, appels asynchrones) et assurer la cohérence des données affichées.

- **C5. Mettre en place une base de données relationnelle**  
  Concevoir le schéma (MCD/MPD), définir les contraintes et index, créer la base et les **migrations**, réaliser un **jeu d’essai** et vérifier l’intégrité des données.

- **C6. Développer des composants d’accès aux données**  
  Implémenter la persistance via ORM/requêtes (Doctrine), gérer les transactions, la pagination, les filtres et l’optimisation des accès (index, requêtes).

- **C7. Développer des composants métier**  
  Implémenter la logique applicative dans des services/contrôleurs, exposer des **API** si nécessaire, gérer la sécurité (auth, rôles), les erreurs et la traçabilité.

- **C8. Documenter le déploiement d’une application dynamique web ou web mobile**  
  Préparer et exécuter le **déploiement** (build, variables d’environnement, migrations en prod), rédiger la documentation technique et d’exploitation, organiser la supervision et les sauvegardes.

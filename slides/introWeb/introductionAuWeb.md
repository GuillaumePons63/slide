# Introduction au Web

Découvrez les bases du fonctionnement du Web : sites, navigateurs, serveurs et protocoles.

---

## Qu’est-ce qu’un site web ?

Un **site web** est un ensemble de **pages reliées entre elles**, accessibles via une **adresse (URL)**.

---

### Sites statiques

- Contenu **fixe**, rarement mis à jour.
- Construit avec **HTML, CSS** et parfois un peu de JavaScript.
- Exemples : site vitrine, CV en ligne.

---

### Sites dynamiques

- Contenu **interactif et personnalisé**.
- Utilise des langages côté serveur (PHP, Node.js, Python…).
- Relié à une base de données.
- Exemples : e-commerce, blog, réseau social.

---

## Les navigateurs

---

### Qu’est-ce qu’un navigateur ?

Logiciel qui permet d’afficher les pages web.  
Exemples : **Chrome**, **Firefox**, **Safari**, **Edge**.

---

### Rôle du navigateur

1. **Requête** → envoie une demande au serveur.
2. **Réception** → reçoit les fichiers (HTML, CSS, JS…).
3. **Interprétation** → comprend le code.
4. **Affichage** → montre la page à l’utilisateur.

---

## Les serveurs

---

### Qu’est-ce qu’un serveur web ?

Ordinateur **connecté en permanence** qui :

- héberge les fichiers des sites,
- répond aux requêtes des navigateurs 24/7.

---

### Types de serveurs

- **Mutualisé** → partagé entre plusieurs sites.
- **Dédié** → réservé à un seul projet.
- **Cloud** → ressources à la demande.

Logiciels courants : **Apache**, **Nginx**, **IIS**, **Node.js**.

---

## Les protocoles HTTP / HTTPS

---

### HTTP – Le langage du Web

**HTTP (HyperText Transfer Protocol)** permet la communication entre :

- le **navigateur (client)**
- et le **serveur (hébergeur)**.

---

### Les principales requêtes HTTP

| Méthode    | Rôle                             |
| ---------- | -------------------------------- |
| **GET**    | Récupérer une ressource          |
| **POST**   | Envoyer des données (formulaire) |
| **PUT**    | Mettre à jour une ressource      |
| **DELETE** | Supprimer une ressource          |

---

### Cycle Requête ↔ Réponse

1. L’utilisateur saisit une **URL**.
2. Le navigateur envoie une **requête** au serveur.
3. Le serveur **traite** la demande.
4. Le serveur renvoie une **réponse**.
5. Le navigateur **affiche** la page.

---

### HTTP vs HTTPS

| HTTP                  | HTTPS                            |
| --------------------- | -------------------------------- |
| Non sécurisé          | Sécurisé (certificat SSL)        |
| Données en clair      | Données chiffrées                |
| Risque d’interception | Protection contre le vol d’infos |

> HTTPS est **indispensable** pour la banque, l’e-commerce et tout site manipulant des données sensibles.

---

## Conclusion

Le Web repose sur trois piliers :

1. **Le navigateur** (client)
2. **Le serveur** (hébergeur)
3. **Le protocole HTTP/HTTPS** (communication)

👉 Ensemble, ils permettent d’afficher et d’interagir avec les pages du monde entier.

---

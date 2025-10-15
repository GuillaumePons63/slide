# Les protocoles HTTP / HTTPS

---

## HTTP — HyperText Transfer Protocol

- Protocole de **communication** entre le **navigateur (client)** et le **serveur web**.
- Utilisé pour **transférer des pages web, images, scripts, styles...**
- Fonctionne sur le **port 80**.

---

### Cycle HTTP classique

1. Le navigateur envoie une **requête HTTP** au serveur.
2. Le serveur **traite** la demande.
3. Il renvoie une **réponse HTTP** contenant :
   - un **code d’état** (200, 404, 500...),
   - des **en-têtes** (headers),
   - et le **contenu** (HTML, JSON, image...).

---

### Exemple de requête HTTP (simplifié)

```http
GET /index.html HTTP/1.1
Host: www.example.com
User-
---

## Les limites de HTTP

- ❌ Les données circulent **en clair** (non chiffrées).
- ❌ Une personne malveillante peut **intercepter** ou **modifier** les échanges (attaque de type _man-in-the-middle_).
- ❌ Impossible de garantir l’**authenticité** du site.

---

## HTTPS — HTTP Secure

- Version **sécurisée** de HTTP.
- Fonctionne via un **chiffrement SSL/TLS**.
- Utilise le **port 443**.

---

### Comment ça fonctionne ?

1. Le navigateur se connecte au serveur via **HTTPS**.
2. Le serveur présente un **certificat SSL** prouvant son identité.
3. Un **canal chiffré** est établi :
   - toutes les données échangées sont **cryptées**,
   - personne ne peut les lire ni les modifier.

---

### Exemple visuel

| Étape                | HTTP            | HTTPS              |
| -------------------- | --------------- | ------------------ |
| Envoi de la requête  | Texte visible   | Données chiffrées  |
| Lecture par un tiers | Possible        | Impossible         |
| Vérification du site | Aucune garantie | Certificat vérifié |
| Port utilisé         | 80              | 443                |

---

## Pourquoi HTTPS est indispensable

- 🔒 **Sécurité** : empêche l’espionnage et la falsification.
- ✅ **Confiance** : le cadenas 🔐 dans la barre d’adresse rassure l’utilisateur.
- 🚀 **SEO** : Google favorise les sites en HTTPS.
- 💳 **Obligatoire** pour les sites avec formulaires, paiements ou données sensibles.

---

### En résumé

| Aspect             | HTTP       | HTTPS               |
| ------------------ | ---------- | ------------------- |
| Sécurité           | Aucune     | Chiffrement SSL/TLS |
| Port               | 80         | 443                 |
| Certificat         | Non requis | Obligatoire         |
| Données visibles ? | Oui        | Non                 |
| Recommandé ?       | Non        | ✅ Oui (toujours)   |

---

> Aujourd’hui, **tous les sites modernes utilisent HTTPS**.
> Il garantit la confidentialité, la fiabilité et la sécurité des échanges entre le navigateur et le serveur.

---
```

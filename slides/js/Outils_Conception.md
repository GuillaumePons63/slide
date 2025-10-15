# Outils de conception

---

## 1. User Story

### Définition

Une **User Story** est une description courte et simple d’un besoin exprimé du point de vue de l’utilisateur.

--

### Format classique

> En tant que **[acteur]**, je veux **[action]**, afin de **[bénéfice]**.

### Exemple

- En tant qu’utilisateur, je veux me connecter afin d’accéder à mon espace personnel.

--

### Objectif

- Capturer le **besoin utilisateur** sans entrer dans les détails techniques.
- Utilisé en **méthodologie Agile / Scrum**.

---

## 2. Use Case (Cas d’utilisation UML)

### Définition

--

## Un **cas d’utilisation** décrit la manière dont un **acteur** interagit avec le système pour atteindre un objectif.

--

### Représentation

- **Diagramme UML** : acteurs (bonhommes), cas d’utilisation (ovales), système (rectangle).

- **Fiche descriptive** : scénario principal + scénarios alternatifs.

--

### Exemple : Connexion

- Acteur : Utilisateur
- Scénario principal : saisir identifiants → vérifier → créer session → accès autorisé
- Scénario alternatif : identifiants invalides → message d’erreur

--

### Objectif

- Décrire les **interactions système/utilisateur** de façon structurée.
- Communiquer avec les équipes techniques et métier.

---

## 3. MCD – Modèle Conceptuel de Données

### Définition

Le **MCD** est une représentation conceptuelle des **entités** et de leurs **relations**.  
Il répond à la question : **quelles données gérer ?**
--

### Caractéristiques

- Indépendant de toute technologie (pas de notion de tables).
- ## Montre les cardinalités (1..1, 0..\*, etc.).

--

### Exemple (ASCII simplifié)

```
[Utilisateur] 1 ----- 0..* [Commande]
```

---

## 4. MLD – Modèle Logique de Données

### Définition

Le **MLD** traduit le MCD en une vision plus proche des bases relationnelles.  
Il répond à la question : **quelles tables et clés prévoir ?**
--

### Caractéristiques

- Tables, clés primaires (PK), clés étrangères (FK).
- ## Toujours indépendant du SGBD choisi.

--

### Exemple

```
UTILISATEUR(idUtilisateur PK, nom, email)
COMMANDE(idCommande PK, date, montant, idUtilisateur FK)
```

---

## 5. MPD – Modèle Physique de Données

### Définition

Le **MPD** est la version technique du MLD adaptée à un SGBD spécifique.  
Il répond à la question : **comment stocker concrètement les données ?**
--

### Caractéristiques

- Types de données (`VARCHAR`, `INT`, `DATE` …).
- Contraintes (NOT NULL, UNIQUE, CHECK).
- ## Index, gestion des relations, performances.

### Exemple (SQL Server)

```sql
CREATE TABLE Utilisateur (
    idUtilisateur INT PRIMARY KEY IDENTITY,
    nom NVARCHAR(100) NOT NULL,
    email NVARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Commande (
    idCommande INT PRIMARY KEY IDENTITY,
    dateCommande DATE NOT NULL,
    montant DECIMAL(10,2) NOT NULL,
    idUtilisateur INT NOT NULL,
    FOREIGN KEY (idUtilisateur) REFERENCES Utilisateur(idUtilisateur)
);
```

---

# 📝 Résumé visuel

- **User Story** → besoin utilisateur en une phrase.
- **Use Case** → interaction détaillée entre acteur et système.
- **MCD** → données et relations (conceptuel).
- **MLD** → tables et clés (logique).
- **MPD** → implémentation SQL (physique).

---

# Symfony — Que se passe-t-il quand je lance `make:entity` ?

---

## 1) Pré-requis & rappel

- Commande fournie par **symfony/maker-bundle** (dev only).
- Utilisée avec Doctrine ORM (via **symfony/orm-pack**).
- Objectif : **créer/modifier une Entity** (classe PHP mappée sur une table SQL).

```bash
composer require --dev symfony/maker-bundle
composer require symfony/orm-pack
```

---

## 2) Lancement de l’assistant interactif

```bash
symfony console make:entity
# ou
php bin/console make:entity
```

Tu indiques :
- **Nom de l’Entity** (ex. `User`).
- **Champs** (nom, type, options).
- **Relations** (ManyToOne, OneToMany, ManyToMany, OneToOne).

L’assistant te pose des questions : longueur, nullable, unique, valeur par défaut, etc.

---

## 3) Fichiers créés/modifiés

### Cas A — Nouvelle entité
- **`src/Entity/Foo.php`** : classe Entity avec attributs Doctrine `#[ORM\...]`.
- **`src/Repository/FooRepository.php`** (si demandé/nécessaire) : repository dédié.

### Cas B — Entité existante
- **`src/Entity/Foo.php`** est **modifiée** :
  - Ajout/suppression de **propriétés** (`#[ORM\Column(...)]`).
  - Ajout/suppression des **getters/setters**.
  - Ajout des **méthodes utilitaires** pour les relations (ex. `addBar()`, `removeBar()`).
  - Ajout des **use** nécessaires (Collections, `ArrayCollection`, etc.).
  - Initialisation des **collections** dans le constructeur pour `OneToMany`/`ManyToMany`.

*(Aucun changement immédiat côté base de données tant que tu n’as pas créé/migré la migration.)*

---

## 4) Mapping Doctrine généré

Dans l’Entity, Maker ajoute :
- `#[ORM\Entity(repositoryClass: FooRepository::class)]`
- Colonnes : `#[ORM\Column(type: '...', length: ..., nullable: ..., unique: ...)]`
- Identifiant : `#[ORM\Id] #[ORM\GeneratedValue] #[ORM\Column]`
- Relations :
  - `#[ORM\ManyToOne(targetEntity: ... , inversedBy: ...)]`
  - `#[ORM\OneToMany(mappedBy: ..., targetEntity: ... , orphanRemoval: ...)]`
  - `#[ORM\ManyToMany(targetEntity: ... , inversedBy/mappedBy: ...)]`
  - `#[ORM\OneToOne(cascade: [...])]`
- Méthodes **add/remove** pour synchroniser les 2 côtés des relations bidirectionnelles.

---

## 5) Cycle complet après `make:entity`

1. **Génération/modification** de l’Entity (→ *fichiers PHP*).
2. **Diff Doctrine** → création d’une **migration** :
   ```bash
   symfony console make:migration
   ```
   - Génère un fichier `migrations/VersionYYYYMMDDHHMMSS.php`  
     contenant le SQL à exécuter (création/altération de tables, FK, index, uniques…).

3. **Application en base** :
   ```bash
   symfony console doctrine:migrations:migrate
   ```
   - Exécute le SQL généré → **synchronise la BDD** avec le code.

---

## 6) Relations : ce que fait exactement Maker

- **ManyToOne** : ajoute une colonne FK côté *Many* + méthodes getter/setter.
- **OneToMany** : ajoute une **Collection** côté *One* + `addX/removeX` + synchro du côté inverse.
- **ManyToMany** : crée une table de jointure + **Collections** des deux côtés.
- **OneToOne** : crée une FK unique + setter/getter (et potentiels `cascade`).

Maker :
- Ajoute les **use** (ex. `use Doctrine\Common\Collections\ArrayCollection;`).
- Initialise les collections dans `__construct()` :
  ```php
  public function __construct() {
      $this->articles = new ArrayCollection();
  }
  ```

---

## 7) Options typiques proposées par l’assistant

- **Types** : string, text, integer, float, boolean, datetime_immutable, json, etc.
- **Contraintes** : `length`, `nullable`, `unique`, `precision/scale`, `options` SQL.
- **Valeurs par défaut** (via code PHP, pas toujours au niveau SQL selon le choix).
- **Index/Unique** : souvent gérés au niveau colonne, les index complexes se gèrent via **`#[ORM\Index]`** en annotation de classe ou via **migrations**.

---

## 8) Commandes utiles associées

- (Re)générer les **getters/setters** si besoin :
  ```bash
  symfony console make:entity --regenerate App\\Entity\\User
  ```
- Vérifier la **métadonnée Doctrine** :
  ```bash
  symfony console doctrine:mapping:info
  ```
- Voir le **diff SQL** sans exécuter :
  ```bash
  symfony console doctrine:schema:update --dump-sql
  # (À préférer : utiliser les migrations, pas update --force)
  ```

---

## 9) Bonnes pratiques

- Toujours passer par **migrations** (traçabilité, rollback).
- Bien définir **nullabilité** et **unicité** dès la création (évite les refactor douloureux).
- Pour les **relations bidirectionnelles**, laisser Maker générer les méthodes **add/remove** et **synchroniser** les côtés.
- Initialiser les **collections** dans le constructeur.
- Garder les Entities **pures** (pas de logique métier lourde dedans → préfèrer des **Services**).

---

## 10) En bref

- `make:entity` **ne touche pas la base** directement.
- Il **génère/édite** l’Entity (+ Repository si demandé) et le **mapping Doctrine**.
- Tu **crées une migration** puis tu **la migres** pour appliquer les changements SQL.
- Pour les relations, Maker crée **les colonnes, la table de jointure**, et **les méthodes utilitaires**.

➡ C’est la **porte d’entrée** pour faire évoluer ton **modèle de données** de manière propre et traçable.

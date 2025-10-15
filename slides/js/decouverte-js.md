# JavaScript

Bases du langage

---

## La syntaxe

--

### Les commentaires

Les commentaires sont :

- ignorés lors de l'exécution
- un très bon moyen de commencer à `coder sans coder` !oO
- **indispensables**
  - baliser un code,
  - laisser des explications
  - annoter une intention, ...

```js
// Commentaire sur une seule ligne

/*
  Commentaire
  sur
  plusieurs
  lignes
*/
```

--

### Les variables

#### Kezako ?

<p class="fragment">
C'est ce qui va stocker l'information
</p>

<p class="fragment small">
Comme une boîte dans laquelle on vient ranger quelque chose
</p>

--

#### Déclaration

Pour déclarer une variable, on utilise les mot clés `let` et `const`

```js
let age = 33;

const userName = "John";
```

<div class="fragment">

On privilégiera `const` **autant que possible**.

</div>

<div class="fragment">

On se servira de `let` **uniquement** lorsque la **valeur initiale** doit être **modifiée** au cours de l'exécution.

</div>

--

#### Modification

Pour modifier une variable existante

```js
let age = 33;

// ...

age = 34;
```

--

### Les instructions

Une instruction par ligne

```js
const age = 33;
const taille = 185;
```

<div class="fragment small">

Les `;` ne sont pas obligatoires en JS, si on passe à la ligne.

</div>

<div class="fragment">

Ce qu'il ne faut pas faire

```
age = 33
taille = 185
```

</div>

---

## Quelques types de données

--

### Les nombres

```js
// Number

14;
14.5;
```

--

### Les booléens

```js
// Boolean

true;
false;
```

--

### Les chaînes de caractères

```js
// String

'Coucou la promo avec des apostrophes (quotes)';

"Un coucou avec des guillemets (double quotes)";

// Oh un petit train : '  '+'  '+'  '
"Un coucou avec" + " de la " + "concaténation";

const text = "Un coucou avec" + " de la " + "concaténation";
```

<div class="fragment small">

Attention à la concaténation : le symbole `+` est utilisé pour une autre opération... <strong class="fragment"> l'addition</strong>

</div>
<div class="fragment">
  
```js
'1' + '1'; // '11'
1 + 1; // 2
```

</div>

---

## Quelques opérations de base

--

### Les additions / soustractions

```js
const price = 100;
const tax = 20;
const total = price + tax;
```

```js
const currentYear = 2019;
const birthYear = 1983;
const myAge = currentYear - birthYear;
```

--

### Multiplication / division

```js
const price = 50;
const quantity = 4;
const total = price * quantity;
```

```js
const myCake = 1000;
const friendsCount = 5;
const gramsPerPerson = myCake / friendsCount;
```

---

## Un peu de pratique !

--

### Les outils

Liste des outils dont on a besoin :

<p class="fragment small">Un navigateur</p>
<p class="fragment">C'est tout...</p>

--

### La console

On y affiche ce qu'on veut :

<div class="fragment">

```js
console.log("ce que je veux...");

console.log("coucou", "ça va ?");
```

</div>

<div class="fragment">

Même des variables

```js
const text = "Mon super texte de la mort !";

console.log(text);
```

</div>

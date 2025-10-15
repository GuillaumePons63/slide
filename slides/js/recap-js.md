# JS

Un petit récap

---

## À quoi ça sert ?</h2>

<p class="fragment">JS = interactions</p>
<p class="fragment small">Événements, création et modification d'élément...</p>

---

## Comment faire pour ...

--

### ... récupérer un élément ?

<div class="fragment">

```js
const element = document.getElementById("hello");
```

</div>

<div class="fragment">

alternative avec `querySelector`

```js
const element = document.querySelector("#hello");
```

</div>

--

### ... modifier le contenu d'un élément ?

<div class="fragment">

```js
element.textContent = "Hello!";
```

</div>

<div class="fragment">

alternative avec `innerHTML`

```js
element.innerHTML = "<strong>Hello!</strong>";
```

Attention, le fonctionnement change. `innerHTML` interprète le code HTML.

</div>

--

### ... modifier les attributs d'un élément ?

<div class="fragment">

```js
// Récupérer l'élément...
const element = document.getElementById("link");

// ...puis ajouter des attributs
element.id = "link-contact";
element.href = "https://oclock.io";
element.className = "navigation-link";
```

</div>

--

### ... créer un élément ?

<div class="fragment">

```js
const element = document.createElement("div");
```

</div>

<p class="fragment">Et l'ajouter au DOM ?</p>
<div class="fragment">

```js
const target = document.getElementById("container");

target.appendChild(element);
```

</div>

--

### ... réagir à une interaction ?

<div class="fragment">

```js
// event : 'click', 'submit', 'keyup', 'DOMContentLoaded'...
// handler : fonction exécutée quand l'événement survient
element.addEventListener(event, handler);
```

</div>

--

### ... stocker de l'information ?

<div class="fragment">

```js
const player = {
  name: "Link",
  alive: true,
  level: 3,
  inventory: ["sword", "shield", "boomerang"],
  move: function () {
    // ...
  },
};
```

</div>

--

### ... organiser son code ?

<div class="fragment">

```js
const app = {
  init: function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", app.handleSubmit);
  },

  handleSubmit: function () {
    // ...
  },
};

document.addEventListener("DOMContentLoaded", app.init);
```

</div>

---

## Spécificités

--

### Outils

```js
// Afficher en console
console.log(myVar);
console.info(myVar);
console.warn(myVar);
console.error(myVar);

// Lancer le debugger
debugger;
```

--

### Attention aux types

```js
// 12
const number1 = prompt("Tapez un nombre");

// 50
const number2 = prompt("Tapez un nombre");

// 1250
console.log(number1 + number2);
```

---

## Boucles et conditions

```js
// Boucle for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

--

```js
// boucle while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

--

```js
//boucle for...of
const array = ["pomme", "banane", "cerise"];
for (const fruit of array) {
  console.log(fruit);
}
```

```js
//boucle for...in avec objet
const player = { name: "Link", level: 3, alive: true };
for (const key in player) {
  console.log(key, player[key]);
}
```

--

```js
// Condition if
const age = 20;
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
```

--

### Fonctions

```js
function greet(name) {
  return "Hello " + name + "!";
}
console.log(greet("Link"));
```

Fonctions fléchées (ES6)

```js
const greet = (name) => "Hello " + name + "!";
console.log(greet("Link"));
```

---

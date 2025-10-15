# L’asynchrone en JavaScript

---

## Qu’est-ce que l’asynchrone ?

JavaScript est un **langage mono-thread** :  
→ il exécute **une seule tâche à la fois**.

Mais certaines opérations (ex. accès réseau, fichiers, API) sont **longues**.  
👉 On les exécute **de façon asynchrone** pour ne pas bloquer le reste du code.

---

### Exemple concret

```js
console.log("Début");

setTimeout(() => {
  console.log("Tâche longue terminée");
}, 2000);

console.log("Fin");
```

---

### Résultat

```
Début
Fin
Tâche longue terminée
```

> Même si le `setTimeout` dure 2 secondes,  
> le reste du code continue de s’exécuter.

---

## Le principe de l’Event Loop

- Le **call stack** (pile d’exécution) exécute le code **synchronement**.
- Les tâches asynchrones (timeout, fetch, events...) passent par la **file d’attente (queue)**.
- L’**Event Loop** surveille :  
  quand la pile est vide → elle exécute la tâche suivante.

---

![event-loop](/slides/js/asset/callStack.webp)

---

## Les fonctions asynchrones classiques

---

### `setTimeout`

```js
setTimeout(() => {
  console.log("Ceci s'affiche après 3 secondes");
}, 3000);
```

---

### `setInterval`

```js
setInterval(() => {
  console.log("Je s'affiche toutes les secondes");
}, 1000);
```

> Ces fonctions **planifient** des actions dans le futur.

---

## Les callbacks

Avant l’arrivée des Promises,  
on utilisait des **fonctions de rappel** (callbacks).

---

### Exemple

```js
function getData(callback) {
  setTimeout(() => {
    const data = "Données reçues !";
    callback(data);
  }, 2000);
}

getData((resultat) => {
  console.log(resultat);
});
```

---

### Problème : le Callback Hell 😵

Quand les callbacks s’enchaînent :

```js
login(user, (res) => {
  getProfile(res.id, (profile) => {
    getPosts(profile.name, (posts) => {
      console.log(posts);
    });
  });
});
```

> Difficile à lire, à maintenir et à déboguer.

---

## Les Promises ✨

Une **Promise** représente une opération **asynchrone**  
qui **se résoudra plus tard** (succès ou échec).

---

### Exemple simple

```js
const maPromesse = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) {
    resolve("Succès !");
  } else {
    reject("Erreur !");
  }
});

maPromesse
  .then((message) => console.log(message))
  .catch((err) => console.error(err));
```

---

### Chaînage des Promises

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => {
    console.log("Titre :", data.title);
  })
  .catch((error) => console.error("Erreur :", error));
```

> Chaque `.then()` attend que le précédent soit terminé.

---

## `async` et `await` 😍

Depuis ES2017,  
on peut écrire du code asynchrone **comme du code synchrone**.

---

### Exemple basique

```js
async function chargerDonnees() {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await reponse.json();
  console.log("Utilisateur :", user.name);
}

chargerDonnees();
```

---

### Gestion des erreurs avec `try...catch`

```js
async function chargerPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Nombre de posts :", data.length);
  } catch (error) {
    console.error("Erreur de chargement :", error);
  }
}

chargerPosts();
```

---

### Exemple combiné

```js
async function init() {
  console.log("Chargement en cours...");
  const [uRes, pRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
  ]);

  const user = await uRes.json();
  const posts = await pRes.json();

  console.log(`${user.name} a écrit ${posts.length} articles.`);
}

init();
```

> `Promise.all()` permet d’exécuter plusieurs requêtes **en parallèle**.

---

## En résumé

| Concept         | Description                       | Exemple                |
| --------------- | --------------------------------- | ---------------------- |
| **Callback**    | Fonction appelée plus tard        | `setTimeout(fn, 1000)` |
| **Promise**     | Résultat futur (succès/erreur)    | `fetch(...).then()`    |
| **async/await** | Syntaxe moderne pour les Promises | `await fetch(...)`     |

---

## Bonnes pratiques

- Toujours gérer les **erreurs** (`try...catch` ou `.catch()`).
- Préférer **async/await** à la chaîne de `.then()`.
- Utiliser `Promise.all()` pour exécuter plusieurs appels ensemble.
- Éviter le **callback hell**.
- Bien comprendre le **flux d’exécution** (Event Loop).

---

## Ressources utiles

- [MDN – L’asynchrone en JavaScript](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous)
- [JavaScript.info – Promises et async/await](https://fr.javascript.info/async)
- [Animation Event Loop (Philip Roberts)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---

> L’asynchrone permet à JavaScript d’être **fluide et réactif**,  
> même quand certaines tâches prennent du temps.

---

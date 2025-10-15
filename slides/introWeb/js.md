---

### Introduction au JavaScript (JS)
JavaScript est un langage de programmation côté client utilisé principalement pour rendre les sites web interactifs. Il permet d'ajouter des éléments dynamiques comme des boutons cliquables, des formulaires interactifs, et bien plus encore.

--

#### Points abordés :
- Présentation de JavaScript et de son rôle dans le développement front-end.
- Intégration de JS dans une page HTML via la balise `<script>`.

---

### Interaction avec le HTML

JavaScript interagit directement avec le HTML à travers le **DOM (Document Object Model)**, une interface de programmation qui permet à JavaScript de manipuler le contenu, la structure et le style des pages HTML.

---

#### Manipuler des éléments HTML

## Vous pouvez sélectionner et manipuler des éléments HTML de plusieurs façons, notamment en utilisant des sélecteurs CSS dans JavaScript.

1. **Sélectionner un élément HTML avec `querySelector` :**

   ```js
   let element = document.querySelector("#myElement");
   element.textContent = "Nouveau texte"; // Change le contenu de l'élément
   element.style.color = "blue"; // Change la couleur de l'élément
   ```

   --

2. **Modifier le style d'un élément :**
   Vous pouvez modifier directement les propriétés CSS des éléments HTML à travers JavaScript.

   ```js
   let button = document.querySelector("button");
   button.style.backgroundColor = "green";
   ```

   --

3. **Ajouter des éléments HTML :**
   JavaScript permet de créer et d'insérer de nouveaux éléments dans une page.

   ```js
   let newElement = document.createElement("p");
   newElement.textContent = "Ceci est un nouvel élément";
   document.body.appendChild(newElement); // Insère l'élément dans le body
   ```

   --

4. **Écouter des événements sur des éléments HTML :**
   Par exemple, vous pouvez déclencher une action lorsque l'utilisateur clique sur un bouton.
   ```js
   document.querySelector("button").addEventListener("click", function () {
     alert("Bouton cliqué !");
   });
   ```

---

**Ressources externes :**

- [MDN Web Docs - Manipuler le DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript.info - Introduction au DOM](https://javascript.info/dom-nodes)

---

### Le strict mode en JavaScript

Le **strict mode** en JavaScript est une fonctionnalité qui impose des restrictions sur certaines pratiques dangereuses ou ambiguës, rendant le code plus sécurisé et plus performant. Il aide à éviter des erreurs courantes et empêche certaines actions silencieuses dans le langage.

---

#### Pourquoi utiliser le strict mode ?

--

1. **Prévenir des erreurs silencieuses** : Sans le strict mode, certaines erreurs passent inaperçues. Par exemple, la déclaration accidentelle de variables globales.

   ```js
   "use strict";
   undeclaredVariable = 5; // Erreur : la variable n'est pas déclarée
   ```

   --

2. ## **Sécurité renforcée** : Le strict mode empêche l'utilisation de certaines fonctionnalités qui peuvent être source de failles de sécurité.
3. **Meilleures performances** : Le strict mode permet à JavaScript de fonctionner plus rapidement en optimisant le code et en aidant le moteur JS à éliminer certaines pratiques inefficaces.

---

#### Comment l'utiliser ?

## Il suffit d'ajouter `"use strict";` au début d'un fichier JavaScript ou d'une fonction pour activer ce mode.

```js
"use strict";
function myFunction() {
  // Code en strict mode
}
```

--

#### Effets du strict mode :

--

1. **Interdiction des variables non déclarées** : Vous devez déclarer explicitement vos variables avec `let`, `const`, ou `var`.

   ```js
   "use strict";
   let x = 10;
   ```

   --

2. **Évite les doublons dans les noms de propriétés** :

   ```js
   "use strict";
   let obj = { prop: 1, prop: 2 }; // Erreur : deux fois le même nom de propriété
   ```

   --

3. **Empêche la suppression des objets protégés** :
   ```js
   "use strict";
   delete Object.prototype; // Erreur : impossible de supprimer des objets intégrés
   ```
   --

#### Pourquoi c'est important pour les débutants ?

## Le strict mode aide à écrire un code plus propre, moins sujet aux erreurs. C'est une bonne pratique de l'activer dès le début dans vos projets pour assurer un code plus robuste.

**Ressources externes :**

- [MDN Web Docs - Strict mode](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
- [W3Schools - JavaScript Strict Mode](https://www.w3schools.com/js/js_strict.asp)

---

### Les variables : `var`, `let`, et `const`

## Les variables sont un élément fondamental de tout langage de programmation. Elles permettent de stocker des valeurs et de les réutiliser tout au long du code. JavaScript propose trois façons de déclarer des variables : `var`, `let`, et `const`.

#### `var`

- ## Scopée globalement ou dans une fonction, ce qui peut créer des comportements inattendus.

#### `let`

- ## Limité à la portée du bloc dans lequel elle est déclarée (comme les boucles ou conditions).

#### `const`

- ## Similaire à `let`, mais la valeur ne peut pas être réassignée. Les objets peuvent cependant être modifiés.
  **Exemple :**

```js
let name = "John";
const age = 30;
var isStudent = true;
```

---

**Ressources externes :**

- [MDN Web Docs - Variables](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types#variables)
- [JavaScript.info - Variables](https://javascript.info/variables)

---

### Conclusion et bonnes pratiques

- **Organiser son code** : Utilisez des fichiers séparés pour le HTML, CSS et JS afin de maintenir une structure claire.
- **Commentaires** : Utilisez des commentaires pour expliquer le code et faciliter sa maintenance.
- **Éviter l’utilisation de `var`** : Privilégiez `let` et `const` pour une meilleure gestion des variables.
- **Mode strict** : Toujours utiliser le mode strict pour un code plus robuste.

**Ressources externes supplémentaires :**

- [JavaScript.info - Guide complet JavaScript](https://javascript.info/)
- [Codecademy - Apprendre JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)

---

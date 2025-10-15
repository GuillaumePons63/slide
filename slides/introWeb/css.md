# Introduction au CSS

Cascading Style Sheets  
Feuilles de style en cascade

---

## Qu’est-ce que le CSS ?

- Le CSS sert à **mettre en forme** le contenu HTML.
- Il contrôle :
  - les **couleurs**,
  - les **polices**,
  - les **tailles**,
  - la **disposition des éléments**.

--

> HTML = structure  
> CSS = style  
> JavaScript = interaction

---

## Comment utiliser le CSS ?

3 manières d’intégrer le style :

---

### 1️⃣ CSS en ligne (inline)

```html
<p style="color: red; font-size: 18px;">Bonjour le monde !</p>
```

✅ Simple pour tester  
❌ À éviter : difficile à maintenir

---

### 2️⃣ CSS dans la balise `<style>`

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 20px;
    }
  </style>
</head>
```

✅ Bien pour de petites pages  
❌ Mauvais pour les gros projets

---

### 3️⃣ Fichier externe

```html
<link rel="stylesheet" href="style.css" />
```

```css
/* style.css */
p {
  color: green;
  font-size: 22px;
}
```

✅ Bonne pratique professionnelle  
✅ Séparation du contenu et du style

---

## Sélecteurs CSS

Les sélecteurs servent à **cibler les éléments** à styliser.

---

### Par balise

```css
p {
  color: blue;
}
```

---

### Par classe

```html
<p class="important">Attention !</p>
```

```css
.important {
  color: red;
  font-weight: bold;
}
```

---

### Par ID

```html
<p id="unique">Texte unique</p>
```

```css
#unique {
  color: purple;
}
```

---

### Par attribut

```html
<input type="email" />
```

```css
input[type="email"] {
  border: 1px solid orange;
}
```

---

### Sélecteurs combinés

```css
section p {
  color: gray; /* p dans une section */
}

section > p {
  color: green; /* p enfant direct */
}

p:hover {
  color: red; /* survol */
}
```

---

## Les propriétés CSS

Quelques propriétés essentielles :

---

### Couleurs

```css
body {
  background-color: #f5f5f5;
  color: #333;
}
```

Formats possibles :

- nommés (`red`, `blue`)
- hexadécimal (`#ff0000`)
- RGB / RGBA (`rgb(255,0,0)`, `rgba(255,0,0,0.5)`)

---

### Polices et texte

```css
h1 {
  font-family: "Arial", sans-serif;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
```

---

### Marges et espacements

```css
div {
  margin: 20px;
  padding: 10px;
}
```

- **margin** : espace **extérieur**
- **padding** : espace **intérieur**

---

### Bordures

```css
div {
  border: 2px solid black;
  border-radius: 8px;
}
```

---

### Dimensions

```css
img {
  width: 200px;
  height: auto;
}
```

---

## La mise en page (layout)

---

### Le modèle de boîte

Tout élément HTML est une **boîte** composée de :

1. **content** (contenu)
2. **padding**
3. **border**
4. **margin**

![box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model-standard-small.png)

---

### Display

- `block` → prend toute la largeur (div, p, h1…)
- `inline` → prend la largeur du contenu (span, a…)
- `inline-block` → mix des deux
- `none` → caché

---

### Positionnement

```css
.element {
  position: relative; /* ou absolute, fixed, sticky */
  top: 10px;
  left: 20px;
}
```

---

### Flexbox (mise en page moderne)

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
```

- `justify-content` → aligne horizontalement
- `align-items` → aligne verticalement
- `gap` → espace entre les éléments

---

### Grid (grilles avancées)

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
```

---

## Les pseudo-classes

```css
a:hover {
  color: red; /* survol */
}

input:focus {
  border-color: blue;
}

li:nth-child(2) {
  color: orange;
}
```

---

## Les transitions et animations

---

### Transition simple

```css
button {
  background: #007bff;
  transition: background 0.3s;
}

button:hover {
  background: #0056b3;
}
```

---

### Animation

```css
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

div {
  animation: pulse 2s infinite;
}
```

---

## Media queries (responsive design)

Adapter le site selon la taille d’écran.

```css
@media (max-width: 768px) {
  body {
    background: lightgray;
  }
}
```

> Permet de créer des sites adaptés aux **mobiles, tablettes et ordinateurs**.

---

## Bonnes pratiques CSS

- Regrouper les styles dans un seul fichier (`style.css`).
- Utiliser des **classes** plutôt que des IDs.
- Éviter les styles en ligne.
- Vérifier la compatibilité navigateur.
- Nommer ses classes clairement (`.header`, `.btn-primary`).
- Tester régulièrement en **responsive**.

---

## Outils et ressources

- [MDN Web Docs – CSS](https://developer.mozilla.org/fr/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)
- [Google Fonts](https://fonts.google.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/#fr) 🐸
- [Grid Garden](https://cssgridgarden.com/#fr) 🥕

---

## En résumé

| Notion   | Rôle                     |
| -------- | ------------------------ |
| **HTML** | Structure du contenu     |
| **CSS**  | Mise en forme et design  |
| **JS**   | Interaction et dynamique |

> CSS donne vie à votre site en le rendant **beau, clair et lisible** sur tous les écrans.

---

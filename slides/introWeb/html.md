# Cours HTML

---

## Introduction au HTML

HTML (HyperText Markup Language) est le langage de balisage standard pour créer des pages web. Il structure le contenu à l'aide de balises.

---

## Structure de base

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ma page</title>
  </head>
  <body>
    <h1>Titre principal</h1>
    <p>Contenu de la page</p>
  </body>
</html>
```

---

## Balises principales

--

### Titres

```html
<h1>Titre niveau 1</h1>
<h2>Titre niveau 2</h2>
<h3>Titre niveau 3</h3>
```

--

### Texte

```html
<p>Paragraphe</p>
<strong>Texte important</strong>
<em>Texte en emphase</em>
<br />
<!-- Saut de ligne -->
```

--

### Listes

```html
<!-- Liste non ordonnée -->
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>

<!-- Liste ordonnée -->
<ol>
  <li>Premier</li>
  <li>Deuxième</li>
</ol>
```

--

### Liens et images

```html
<a href="https://example.com">Lien</a> <img src="image.jpg" alt="Description" />
```

--

### Tableaux

```html
<table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Âge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jean</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

--

### Formulaires

```html
<form>
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" />

  <label for="email">Email :</label>
  <input type="email" id="email" name="email" />

  <button type="submit">Envoyer</button>
</form>
```

---

## Balises sémantiques HTML5

```html
<header>En-tête</header>
<nav>Navigation</nav>
<main>Contenu principal</main>
<section>Section</section>
<article>Article</article>
<aside>Contenu annexe</aside>
<footer>Pied de page</footer>
```

---

## Attributs importants

- `id` : Identifiant unique
- `class` : Classe CSS
- `src` : Source d'une ressource
- `href` : Lien de destination
- `alt` : Texte alternatif
- `title` : Info-bulle

---

## Bonnes pratiques

1. Utiliser la sémantique appropriée
2. Valider le code HTML
3. Rendre accessible (attributs `alt`, `aria-*`)
4. Structure logique des titres
5. Indentation cohérente

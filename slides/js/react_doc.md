## React

https://react.dev/

---

## C'est quoi ?

React est une **bibliothèque JavaScript** pour construire des **interfaces utilisateur** à partir de **composants**.  
Idée clé : **déclaratif** (on décrit l’état → l’UI s’aligne), **composable** (on assemble des composants), **unidirectionnel** (les données descendent).

---

### Le couple moderne : Vite + React

- **Vite** : outil de développement ultra‑rapide (dev server + build)
- **React** : lib UI centrée composants + état

```bash
# création avec Vite
npm create vite@latest my-checklist -- --template react
cd my-checklist
npm install
npm run dev
```

> URL locale (ex.) : http://localhost:5173

---

## Structure d’un projet (Vite + React)

- `index.html` : point d’entrée (ancre `<div id="root">`)
- `src/main.jsx` : bootstrap React → DOM
- `src/App.jsx` : composant racine
- `src/assets/*` : images, styles, etc.

---

## Notions essentielles

--

### Composant

Un composant est une **fonction** qui retourne du **JSX**.

```jsx
function Titre() {
  return <h1>Ma checklist</h1>;
}
```

--

### Props

Les **props** (propriétés) sont les paramètres d’un composant.

```jsx
function Bouton({ label }) {
  return <button>{label}</button>;
}
```

```jsx
// Utilisation du composant Bouton
<Bouton label="Clique-moi" />
```

--

### État (useState)

L’**état** permet de mémoriser une valeur et de redessiner l’UI quand elle change.

```jsx
import { useState } from "react";

function Compteur() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>Compter : {n}</button>;
}
```

--

### Événements & formulaires

```jsx
import { useState } from "react";

function FormDemo() {
  const [txt, setTxt] = useState("");
  const submit = (e) => {
    e.preventDefault();
    alert(txt);
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="task">Tâche</label>
      <input id="task" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <button type="submit">Ajouter</button>
    </form>
  );
}
```

--

### Listes & keys

```jsx
const tasks = [{ id: 1, label: "Lire le brief" }];

<ul>
  {tasks.map((t) => (
    <li key={t.id}>{t.label}</li>
  ))}
</ul>;
```

---

### JSX (rappel)

- **JSX** = syntaxe proche du HTML écrite **dans** du JavaScript.
- Une seule **racine** retournée (ou `<>...</>` fragments).
- Attributs : `className`, `htmlFor`, `onClick`, etc.
- Expressions JS entre `{ ... }`.

```jsx
export default function Hello({ name }) {
  const upper = name.toUpperCase();
  return (
    <>
      <h1 className="title">Bonjour {upper}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </>
  );
}
```

---

### Rendu conditionnel

```jsx
function Badge({ done }) {
  return done ? <span>✅ Fait</span> : <span>⏳ À faire</span>;
}

// Variante lisible
{
  done && <Badge done />;
}
{
  !done && <button>Marquer comme fait</button>;
}
```

---

### Styles

- **CSS** classique : fichiers `.css` importés dans tes composants.
- **className** pour appliquer des classes.
- **Style inline** en objet JS (camelCase).

```jsx
<div className="card">…</div>

<div style={{ padding: 8, borderRadius: 12 }}>Inline</div>
```

> Astuce : avec Vite, les imports `./App.css` fonctionnent nativement.

---

### Composition & `children`

```jsx
function Card({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

<Card title="Ma section">
  <p>Contenu libre passé en children</p>
</Card>;
```

---

### Lever l’état (lifting state up)

Quand plusieurs composants ont besoin d'accéder ou de modifier la même donnée, il faut **remonter l’état** dans leur parent commun. Le parent gère l’état et le transmet via les props.

Exemple concret :

```jsx
import { useState } from "react";

// Composant enfant qui modifie l'état
function ChildToggle({ done, onToggle }) {
  return <button onClick={onToggle}>{done ? "Annuler" : "Valider"}</button>;
}

// Composant enfant qui affiche l'état
function ChildBadge({ done }) {
  return <span>{done ? "✅ Fait" : "⏳ À faire"}</span>;
}

// Parent qui possède l'état et le partage
function Parent() {
  const [done, setDone] = useState(false);
  return (
    <>
      <ChildToggle done={done} onToggle={() => setDone(!done)} />
      <ChildBadge done={done} />
    </>
  );
}
```

Ici, `Parent` possède l’état `done` et le transmet à ses deux enfants :

- `ChildToggle` peut modifier l’état via la fonction `onToggle`.
- `ChildBadge` affiche l’état.
  Ainsi, l’état reste **unique** et **synchronisé** entre les composants.

---

### Effets (`useEffect`)

`useEffect` permet d’exécuter du code après le rendu du composant : pour synchroniser avec le monde extérieur (API, timer, DOM, etc.).

**Schéma de base** :

```jsx
useEffect(
  () => {
    // Code à exécuter après le rendu
    // (ex : fetch, timer, manipuler le DOM…)
    return () => {
      // (optionnel) Nettoyage lors du démontage ou avant le prochain effet
    };
  },
  [
    /* dépendances */
  ]
);
```

--

- Le tableau de dépendances (`[]`) contrôle quand l’effet s’exécute :
  - `[]` : une seule fois au montage (comportement « componentDidMount »)
  - `[valeur]` : à chaque fois que `valeur` change
  - pas de tableau : à chaque rendu

**Exemple 1 : Timer (horloge)**

```jsx
import { useEffect, useState } from "react";

function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id); // Nettoyage du timer
  }, []); // [] = une seule fois au montage
  return <time>{now.toLocaleTimeString()}</time>;
}
```

--

**Exemple 2 : Modifier le titre de la page**

```jsx
import { useEffect } from "react";

function Hello({ name }) {
  useEffect(() => {
    document.title = `Bonjour ${name}`;
    // Pas de nettoyage nécessaire ici
  }, [name]); // Se relance si name change
  return <h1>Bonjour {name}</h1>;
}
```

**Résumé** : `useEffect` sert à « réagir » à des changements d’état ou de props pour synchroniser le composant avec l’extérieur. Toujours penser au nettoyage si l’effet crée un timer, un abonnement, etc.

---

### Récupération de données (fetch)

```jsx
function Todos() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await res.json();
      setItems(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Chargement…</p>;
  return (
    <ul>
      {items.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}
```

---

### Hooks personnalisés

Encapsule logique réutilisable.

```jsx
import { useEffect, useState } from "react";

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const raw = localStorage.getItem(key);
    return raw != null ? JSON.parse(raw) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

// usage
function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Thème : {theme}
    </button>
  );
}
```

---

### Contexte (`createContext` / `useContext`)

Évite le **prop drilling** (passage de props en cascade).

```jsx
import { createContext, useContext, useState } from "react";

const AuthCtx = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (name) => setUser({ name });
  const logout = () => setUser(null);
  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

function UserMenu() {
  const { user, login, logout } = useContext(AuthCtx);
  return user ? (
    <>
      <span>Bonjour {user.name}</span>
      <button onClick={logout}>Se déconnecter</button>
    </>
  ) : (
    <button onClick={() => login("Ada")}>Se connecter</button>
  );
}
```

> Enveloppe ton `<App />` avec `<AuthProvider>`.

---

### Routing rapide (React Router)

```bash
npm i react-router-dom
```

```jsx
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tasks", element: <Tasks /> },
]);

function Nav() {
  return (
    <nav>
      <Link to="/">Accueil</Link> | <Link to="/tasks">Tâches</Link>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
}
```

---

### Formulaires : contrôlés vs non contrôlés

- **Contrôlé** : la valeur vient de l’état → source de vérité en React.
- **Non contrôlé** : on lit la valeur via `ref` au submit.

```jsx
// contrôlé
const [email, setEmail] = useState("");
<input value={email} onChange={(e) => setEmail(e.target.value)} />;

// non contrôlé
const ref = useRef(null);
<form
  onSubmit={(e) => {
    e.preventDefault();
    alert(ref.current.value);
  }}
>
  <input ref={ref} />
</form>;
```

---

### Refs (`useRef`) : accès impératif

```jsx
function FocusInput() {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </>
  );
}
```

> `useRef` conserve une **valeur mutable** qui **ne retrigger** pas de rendu.

---

### Performance : mémos & listes

- Clés **stables** dans les listes (`id` > index).
- `React.memo(Component)` évite des rerenders inutiles.
- `useCallback` / `useMemo` pour **stabiliser** fonctions/valeurs passées en props.

```jsx
const Item = React.memo(function Item({ onToggle, item }) {
  return <li onClick={() => onToggle(item.id)}>{item.label}</li>;
});
```

---

### Accessibilité (a11y) rapide

- Utiliser des **éléments sémantiques** (`button`, `nav`, `main`, `label` avec `htmlFor`).
- Focus visible, contrastes suffisants, textes alternatifs (`alt`).
- Ne pas accrocher des handlers `onClick` sur des `<div>` quand un `<button>` convient.

---

### Tests (vite + RTL)

```bash
npm i -D vitest @testing-library/react @testing-library/jest-dom
```

```jsx
// Counter.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

it("incrémente", () => {
  render(<Counter />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("1");
});
```

---

### Build & déploiement

```bash
npm run build   # génère dist/
npm run preview # prévisualisation locale
```

- Héberge le dossier `dist/` (Netlify, Vercel, GitHub Pages avec adaptateurs).

---

## Mini-exercice guidé : checklist (CR*UD* minimal)

1. **Modèle** de tâche : `{ id, label, done }`
2. **État** dans `App` : `const [tasks, setTasks] = useState([])`
3. **Ajouter** une tâche (formulaire contrôlé)
4. **Toggle** `done` sur click
5. **Filtrer** (Tous / Actifs / Faits)
6. (Bonus) **Persister** dans `localStorage` (hook fourni plus haut)

```jsx
function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [txt, setTxt] = useState("");
  const add = (e) => {
    e.preventDefault();
    if (!txt.trim()) return;
    setTasks([
      { id: crypto.randomUUID(), label: txt.trim(), done: false },
      ...tasks,
    ]);
    setTxt("");
  };
  const toggle = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <main>
      <h1>Ma checklist</h1>
      <form onSubmit={add}>
        <input
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button>Ajouter</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(t.id)}
              />
              {t.label}
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

---

## Installer un projet **depuis GitHub**

```bash
# 1) Cloner
git clone https://github.com/utilisateur/mon-projet-react.git
cd mon-projet-react

# 2) Installer les dépendances
npm install

# 3) Lancer en dev
npm run dev

# 4) Configurer les variables d'env si besoin
cp .env.example .env
# puis éditer .env
```

> En cas d’erreur Node : vérifie la version (`node -v`), supprime `node_modules`, relance `npm install`.

---

## Bonnes pratiques de base

- Un composant = **une responsabilité** claire.
- Découper : `components/`, `pages/`, `hooks/`, `lib/`.
- Nommer les composants en **PascalCase**, les hooks en **useXxx**.
- Éviter la **duplication** (DRY), factoriser via hooks et composants.
- Préférer **contrôlé** pour les formulaires.
- Gérer les **erreurs** et **états de chargement** dans le fetch.
- Mettre des **PropTypes** ou TypeScript si possible.

---

## Pour aller plus loin (pistes rapides)

- **Gestion d’état** app : Context + Reducer, Zustand, Jotai, Redux Toolkit.
- **Data fetching** moderne : React Query / TanStack Query.
- **Styling** : CSS Modules, Tailwind, CSS-in-JS (Chakra, MUI, etc.).
- **Formulaires** : React Hook Form + Zod pour la validation.
- **Animations** : Framer Motion.

---

## Exercices rapides (20–30 min chacun)

1. **Compteur** : +1, −1, reset, pas dynamique (input).
2. **Todo** : CRUD complet + persistance localStorage.
3. **Filtre** : champ de recherche qui filtre une liste.
4. **Fetch** : afficher des posts (titre + body) avec “chargement/erreur”.
5. **Router** : deux pages + navigation active.
6. **Accessibilité** : remplacer `<div onClick>` par `<button>` correct + `aria-*`.

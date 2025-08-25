# Ajouter un routeur dans une app React (React Router)

https://reactrouter.com/

---

## 1) Installer

Dans un projet **Vite + React** :
```bash
npm install react-router-dom
```

---

## 2) Créer des pages

```
src/
 ├─ main.jsx
 ├─ App.jsx
 └─ pages/
     ├─ Home.jsx
     └─ About.jsx
```

**Home.jsx**
```jsx
export default function Home() {
  return <h2>Page d'accueil</h2>;
}
```

**About.jsx**
```jsx
export default function About() {
  return <h2>À propos</h2>;
}
```

---

## 3) Envelopper l’app avec le routeur

**main.jsx**
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## 4) Déclarer les routes

**App.jsx**
```jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
```

**Résultat** :  
- `/` → accueil  
- `/about` → à propos  
- `<Link>` permet une navigation sans rechargement (SPA).

---

## 5) Routage imbriqué + Layout

**pages/Dashboard.jsx**
```jsx
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link> | <Link to="settings">Paramètres</Link>
      </nav>
      <Outlet /> {/* zone où s'affichent les sous-routes */}
    </div>
  );
}
```

**App.jsx (extrait)**
```jsx
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="stats" element={<Stats />} />
    <Route path="settings" element={<Settings />} />
  </Route>
  <Route path="*" element={<h2>404 — Page non trouvée</h2>} />
</Routes>
```

---

## 6) Routes dynamiques & query string

**Route dynamique** :
```jsx
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return <h2>Profil utilisateur {id}</h2>;
}
// Déclaration : <Route path="/user/:id" element={<User />} />
```

**Query string (search params)** :
```jsx
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  return (
    <div>
      <input
        value={q}
        onChange={(e) => setParams({ q: e.target.value })}
        placeholder="Rechercher…"
      />
      <p>Requête : {q}</p>
    </div>
  );
}
```

---

## 7) Navigation programmatique

```jsx
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const onSuccess = () => navigate("/dashboard", { replace: true });
  return <button onClick={onSuccess}>Se connecter</button>;
}
```

---

## 8) Protection de routes (exemple simple)

```jsx
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

// Déclaration
<Routes>
  <Route element={<PrivateRoute isAuth={isLoggedIn} />}>
    <Route path="/app" element={<AppLayout />} />
    <Route path="/app/profile" element={<Profile />} />
  </Route>
  <Route path="/login" element={<Login />} />
</Routes>
```

---

## 9) Lazy loading (code splitting)

```jsx
import { Suspense, lazy } from "react";
const Products = lazy(() => import("./pages/Products"));

<Routes>
  <Route
    path="/products"
    element={
      <Suspense fallback={<p>Chargement…</p>}>
        <Products />
      </Suspense>
    }
  />
</Routes>
```

---

## 10) Déploiement (SPA fallback)

En production, une SPA doit rediriger **toutes les URL** vers `index.html`.

- **Vite preview** gère cela automatiquement.  
- **Static hosting** (Netlify/Vercel) : activer le mode SPA / réécritures `/* → /index.html`.  
- **Apache** : fichier `.htaccess` minimal :
  ```
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```

---

## Exercices

### Exercice A — Blog mini‑router
1. Crée trois pages : `Home`, `Posts`, `Post` (dynamique `:id`).  
2. `Posts` liste 5 posts (mock).  
3. Chaque item pointe vers `/posts/ID` et affiche le détail dans `Post`.  
4. Ajoute une page 404 pour les URL inconnues.

### Exercice B — Filtre via query string
1. Page `Users` avec une liste de prénoms.  
2. Champ de recherche qui met à jour `?q=` (via `useSearchParams`).  
3. La liste doit se filtrer en fonction de `q` **même au rechargement** (l’URL reste source de vérité).

---

### Références
- Docs : https://reactrouter.com/  
- Vite : https://vitejs.dev/

---

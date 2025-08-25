# Vite

https://vitejs.dev/

---

## Qu’est-ce que Vite ?

Vite est un **outil de développement moderne** pour les projets web.  
Il se concentre sur deux objectifs :

- **Un serveur de développement ultra‑rapide** avec rechargement à chaud (HMR).
- **Un build optimisé** grâce à [esbuild](https://esbuild.github.io/) et [Rollup](https://rollupjs.org/).

> Créé par Evan You (aussi auteur de Vue.js).

---

## Pourquoi utiliser Vite ?

- Démarrage du serveur **instantané** (contrairement à Webpack).
- Rechargement **rapide et précis** lors des changements de fichiers.
- Support natif de **JavaScript moderne (ESM)**.
- Fonctionne avec **React, Vue, Svelte, Preact**, mais aussi Vanilla JS.
- **Plugins** riches via l’écosystème Rollup.
- **TypeScript, JSX, CSS Modules, PostCSS** intégrés d’office.

---

## Installer un projet avec Vite

```bash
# Création d'un projet avec Vite (dernier template React en exemple)
npm create vite@latest my-app -- --template react

cd my-app
npm install
npm run dev
```

👉 URL locale par défaut : `http://localhost:5173`

---

## Structure d’un projet Vite

- `index.html` : fichier racine (point d’entrée unique).
- `src/main.jsx` : point d’initialisation de l’app (React/Vue/etc.).
- `src/App.jsx` : composant racine (si React).
- `vite.config.js` : configuration (plugins, alias, build).

---

## Commandes principales

```bash
npm run dev     # démarre le serveur de dev
npm run build   # build de production (dossier dist/)
npm run preview # prévisualisation du build localement
```

---

## Exemple : vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
```

---

## Déploiement

Le build final est généré dans le dossier **`dist/`**.  
Il peut être déployé facilement sur :

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [o2switch](https://www.o2switch.fr/), OVH, etc.

---

## Points forts de Vite

- ⚡ Rapidité → serveur quasi instantané
- 🔥 HMR efficace → ne recharge que le nécessaire
- 🛠️ Simplicité → zéro config pour commencer
- 🌍 Écosystème riche (plugins Rollup)
- 🧑‍💻 Compatible avec toutes les libs modernes (React, Vue, Svelte…)

---

## Exemple minimal (Vanilla)

```bash
npm create vite@latest hello-vite -- --template vanilla
cd hello-vite
npm install
npm run dev
```

👉 Fichiers clés :

- `index.html` (contient `<script type="module" src="/main.js">`)
- `main.js` (JS natif, pas de framework nécessaire)

---

## Pour aller plus loin

- [Documentation officielle](https://vitejs.dev/)
- [Awesome Vite](https://github.com/vitejs/awesome-vite) (liste de plugins)
- Tutoriels sur React, Vue et Svelte avec Vite.

---

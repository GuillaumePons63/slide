# npm (Node Package Manager)

https://www.npmjs.com/

---

## Qu’est-ce que npm ?

`npm` est le **gestionnaire de paquets** installé automatiquement avec Node.js.  
Il permet de :

- 📦 Installer des bibliothèques et frameworks JavaScript.  
- 🔄 Gérer les dépendances d’un projet.  
- 🚀 Exécuter des scripts (démarrage, build, tests…).  

> Alternatives : [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/).

---

## Vérifier l’installation

```bash
npm -v
```

👉 Affiche la version de npm.  
Si la commande n’existe pas, réinstaller Node.js ou vérifier le PATH.

---

## Commandes de base

### Initialiser un projet

```bash
npm init -y
```

👉 Crée un fichier `package.json` avec les infos du projet.

---

### Installer un paquet

```bash
npm install react
```

👉 Installe `react` et ajoute la dépendance dans `package.json`.  
Les fichiers sont placés dans le dossier `node_modules/`.

- `--save` (par défaut) → dépendance de prod  
- `--save-dev` (`-D`) → dépendance de développement (ex. ESLint, Vitest)

```bash
npm install -D vite
```

---

### Installer toutes les dépendances

```bash
npm install
```

👉 Télécharge tout ce qui est listé dans `package.json`.

---

### Supprimer un paquet

```bash
npm uninstall lodash
```

---

### Mettre à jour un paquet

```bash
npm update react
```

---

### Exécuter un script

Dans `package.json` :

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "vite",
    "build": "vite build",
    "test": "vitest"
  }
}
```

👉 Lancer :

```bash
npm run dev
```

---

## Installation globale vs locale

- **Locale (par défaut)** → installée dans `node_modules/` du projet.  
- **Globale (-g)** → accessible partout dans le système.

```bash
# Exemple : installer vite en global
npm install -g vite
```

Vérifier l’installation globale :

```bash
npm list -g --depth=0
```

---

## Mettre à jour npm

```bash
npm install -g npm
```

---

## Fichiers importants

- **package.json** → décrit le projet, ses dépendances et scripts.  
- **package-lock.json** → verrouille les versions exactes installées.  
- **node_modules/** → contient toutes les librairies installées.

---

## Bonnes pratiques

- Ne jamais modifier `node_modules` à la main.  
- Toujours versionner `package.json` et `package-lock.json` (mais pas `node_modules/`).  
- Utiliser les scripts npm pour automatiser (lint, tests, build).  
- Vérifier les vulnérabilités :

```bash
npm audit
npm audit fix
```

---

## Ressources

- [npm Docs](https://docs.npmjs.com/)  
- [npm trends](https://www.npmtrends.com/) → comparer la popularité des packages  

---

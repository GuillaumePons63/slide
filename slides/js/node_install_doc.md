# Installation de Node.js

https://nodejs.org/

---

## Qu’est-ce que Node.js ?

Node.js est un **runtime JavaScript** basé sur le moteur **V8** de Google Chrome.  
Il permet d’exécuter du JavaScript **hors du navigateur**, notamment pour créer des serveurs, des outils CLI ou des applications web complètes.

---

## Étape 1 – Télécharger Node.js

👉 Rendez-vous sur le site officiel : [https://nodejs.org/](https://nodejs.org/)

Tu y trouveras deux versions proposées :

- **LTS (Long Term Support)** → version stable, recommandée pour la plupart des utilisateurs.  
- **Current** → dernière version avec les nouvelles fonctionnalités, parfois moins stable.

> Conseil : prends la **LTS** pour débuter.

---

## Étape 2 – Installation par système

### Sous Windows / macOS

1. Télécharger l’installeur `.msi` (Windows) ou `.pkg` (macOS).  
2. Lancer le fichier et suivre l’assistant :  
   - Accepter la licence  
   - Laisser les options par défaut (installation de `npm` incluse)  
   - Finir l’installation  
3. Redémarrer le terminal pour appliquer les changements.

### Sous Linux (Debian/Ubuntu)

```bash
# Mettre à jour la liste des paquets
sudo apt update

# Installer Node.js (via apt, version souvent plus ancienne)
sudo apt install -y nodejs npm
```

> Pour obtenir la dernière version LTS, il est conseillé d’utiliser **nvm** (voir ci-dessous).

---

## Étape 3 – Vérifier l’installation

Ouvrir un terminal et exécuter :

```bash
node -v
```

👉 Affiche la version de Node.js, ex. `v20.12.2`.

```bash
npm -v
```

👉 Affiche la version de npm (Node Package Manager).

---

## Étape 4 – Gestion avancée avec NVM (Node Version Manager)

### Pourquoi NVM ?
- Installer **plusieurs versions de Node.js** sur la même machine  
- Passer de l’une à l’autre facilement  

### Installation (Linux/macOS)

```bash
# Télécharger et installer nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Activer nvm
source ~/.bashrc
```

### Utilisation

```bash
# Installer la dernière LTS
nvm install --lts

# Vérifier les versions disponibles
nvm ls

# Utiliser une version spécifique
nvm use 20
```

> Sur Windows, on peut utiliser [nvm-windows](https://github.com/coreybutler/nvm-windows).

---

## Étape 5 – Premier test

Créer un fichier `app.js` :

```js
console.log("Hello Node.js !");
```

Lancer dans le terminal :

```bash
node app.js
```

👉 Résultat attendu : `Hello Node.js !`

---

## Étape 6 – Mettre à jour Node.js

Avec **nvm** :

```bash
nvm install --lts
nvm use --lts
```

Sans nvm (Windows/macOS) → Télécharger le nouvel installeur sur le site officiel et relancer l’installation.

---

## Bonnes pratiques

- Toujours vérifier la version installée (`node -v`).  
- Privilégier **nvm** pour gérer plusieurs projets.  
- Mettre régulièrement à jour `npm` :

```bash
npm install -g npm
```

- Installer globalement les outils utiles (ex. Vite, nodemon) :

```bash
npm install -g vite nodemon
```

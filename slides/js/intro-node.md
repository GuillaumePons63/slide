## Node.js

https://nodejs.org/

---

## C'est quoi ?

NodeJS est un _runtime_ javascript.

---

### Runtime

= environnement d'exécution

<p class="fragment">
Un moteur + un contexte
  <img src="/slides/js/asset/browser.png">
</p>

---

### Moteur

La "machine" qui lit le code.

![engine](/slides/js/asset/js-engine.png)

Pour javascript, c'est un interpréteur (= lit et exécute le code à la volée, sans compilation)

<p class="fragment"> <img src="/slides/js/asset/browsers-js-engine.excalidraw.png" > </p>

---

## Contexte

Le bac à sable et les jouets qui vont avec.

<p class="fragment">
- Celui que vous connaissez déjà : le contexte navigateur
 <img src="/slides/js/asset/global-exec-context-browser.png">
</p>

---

<p>
- Le "nouveau" : NodeJS
 <img src="/slides/js/asset/global-exec-context-node.png">
</p>

<p class="fragment">
<i>this</i> est un mot-clef renvoyant au contexte lui-même ! On y reviendra...
</p>

---

En changeant de contexte, on change d'outils disponibles

![diff contextes](/slides/js/asset/chrome-node.png)

---

## A quoi ça sert ?

Concrètement, à faire du JS partout. Oui, partout !

- Applications en LDC
- Serveurs Web
- Applications en "client lourd" (Electron)
- Objets connectés (Nodebots, Tessel 2,...)

---

## Comment ça marche ?

- Le même JavaScript (ouf!)
- Un nouveau contexte à prendre en main

<p class="fragment">C'est parti !</p>

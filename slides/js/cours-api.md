# Les API (Application Programming Interface)

---

## Qu’est-ce qu’une API ?

Une **API** (Application Programming Interface) est une **interface** qui permet à deux applications de **communiquer entre elles**.

> Elle définit *comment* un programme peut **demander** ou **envoyer** des données à un autre programme.

---

### Exemple d’API dans le monde réel

- Quand tu affiches la météo sur ton site,  
  → tu appelles l’API de **Météo France**.  
- Quand tu affiches une carte,  
  → tu utilises l’API de **Google Maps**.

L’API agit comme un **serveur de données** auquel on envoie des **requêtes HTTP**.

---

## Types d’API

| Type | Description | Exemple |
|------|--------------|----------|
| **REST** | Le plus courant, basé sur HTTP | `https://api.example.com/users` |
| **SOAP** | Format XML plus ancien | Services bancaires |
| **GraphQL** | Requêtes flexibles et ciblées | API GitHub moderne |
| **WebSocket** | Communication temps réel | Chat, notifications |

---

## Une API REST

Une API REST utilise les **méthodes HTTP** :

| Méthode | Action | Exemple |
|----------|---------|---------|
| **GET** | Lire des données | `/users` |
| **POST** | Ajouter une donnée | `/users` |
| **PUT** | Modifier une donnée | `/users/1` |
| **DELETE** | Supprimer une donnée | `/users/1` |

---

## Exemple d’appel d’API avec `fetch()`

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("Utilisateurs :", data);
  })
  .catch((error) => {
    console.error("Erreur :", error);
  });
```

> `fetch()` est une fonction intégrée au navigateur  
> qui permet de **faire une requête HTTP** vers une API.

---

## Version moderne avec `async/await`

```js
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
  } catch (err) {
    console.error("Erreur :", err);
  }
}

getUsers();
```

---

## Structure d’une réponse API

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "leanne@example.com"
}
```

> Les données sont souvent renvoyées au format **JSON**  
> (JavaScript Object Notation).

---

## Bonnes pratiques

- Toujours **lire la documentation** de l’API.  
- Tester avec des outils comme **Postman** ou **Insomnia**.  
- Gérer les **erreurs réseau** (`try...catch`).  
- Ne pas exposer ses **clés API** dans le code public.  
- Respecter les **limites de requêtes** (rate limit).

---

## Ressources utiles

- [MDN – Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)  
- [Public APIs](https://public-apis.io/) – Annuaire d’API gratuites  
- [JSON Placeholder](https://jsonplaceholder.typicode.com/) – API de test  
- [OpenWeather](https://openweathermap.org/api) – Météo  
- [API Pokémon](https://pokeapi.co/) – Données Pokémon 🐱‍👤

---

> Les API sont au cœur du web moderne :  
> elles permettent de **connecter, échanger et enrichir** les applications.

---

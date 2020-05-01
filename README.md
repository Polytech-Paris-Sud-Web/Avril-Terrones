# Angular5 articles app

By Thibaud Avril-Terrones

## Getting started

Angular5 articles app is an app built on Angular.

You need :
- [Node.js](https://nodejs.org/)  

Built on :
- [Angular](https://angular.io)

```bash
npm install -g @angular/cli
```

### Launch the app

```bash
npm install
npm start & json-server --watch db.json
```

You can now try your app on http://localhost:4200

## Informations

Je suis parti du repo https://github.com/Amirault/angular5-articles-app.git et du commit #fa71bce8e6b6a315636bc38cc1dead982b229e94 pour effectuer la migration.

Pour voir un exemple de mes compétences en développement web, j'ai créé un template d'une application simple gérant une ressource simple, basée sur NestJS (backend) et Angular (frontend) avec une bd en postgreSQL, disponible à l'adresse suivante : https://gitlab.com/thibaud_at/simple-app-template et lançable en docker.


## Migration

Pourquoi la migration est intéressante ?

Effectuer la migration sur nos projets afin d'avoir toujours la dernière version d'angular permet d'obtenir les dernières features et les dernières mises à jour de sécurité.
Cela augmente considérablement la sécurité mais également la compatibilité avec tous les navigateurs.
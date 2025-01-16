# api-exam-mds-mba1

## Créer la base de données 

Via un outil comme **dbeaver**, créer la base de données SQLite
via le fichier `db/database.sqlite`

## Lancer le projet en local

Installer les dépendances
```bash
npm install
```

Créer le fichier de config .env
```bash
cp .env.example .env
```
Rajouter les valeurs manquantes dans le fichier .env

Installer les dépendances
```bash
npm run dev
```

L'application se lance sur le port défini dans le .env

## Swagger documentation

Disponible via: 
```bash
npm run swagger-autogen
```

http://localhost:1337/api-docs/


# Devoir écrit - API MBA 2024

## 1 - Donnez 3 moyens que possède un serveur websocket pour communiquer avec un/des clients client (1,5 points)

-  le serveur émet un évènement à un  groupe de client(s). Ex: une room, ou tous les clients sauf 1 (celui qui a créé l'event par exemple)

-  le serveur émet un évènement à tous les clients

-  le serveur émet un évènement à un client


## 2 - Routes d'api (2 points)

Donnez les 5 routes CRUD d'une API REST pour une ressource "pomme" sur l'api hébergée sur le domaine "https://toto.com/api/v1"
Notez la méthode HTTP et le/un chemin exemple d'appel de la route :

-  GET https://toto.com/api/v1/pommes


-  POST https://toto.com/api/v1/pommes avec un body


-  PUT https://toto.com/api/v1/pommes/:id avec un body


-  PATCH https://toto.com/api/v1/pommes/:id avec un body


-  DELETE https://toto.com/api/v1/pommes/:id


## 3 - Vrai / Faux (10 points)

Chaque réponse juste vous rapporte 1 point  
Une erreur vous fait perdre 0.5 point  
Pour répondre "vrai" ajouter la lettre V devant la question (dans la case)  
exemple : [ V ] - Thomas est un prof cool  
Pour répondre "faux" ajouter la lettre F devant la question (dans la case)  
exemple : [ F ] - les moutons sont vraiment des animaux mignons  
Si vous ne souhaitez pas répondre, rayez la question en entier  

[F] - Il est possible de "dé hasher" un mot de passe hashé précédement, grâce à la fonction bcrypt.unhash  
[V] - Un token jwt possède 3 parties séparées par un point (symbole .) à chaque fois  
[V] - Un middleware peut modifier l'objet request ou response de la requête  
[F] - res.status est une méthode qui permet de lire le temps d'execution d'une requête  
[V] - Le SSO est une méthode d'authentification  
[F] - Un header d'authorization BASIC permet une authentification sécurisée, même en HTTP  
[V] - req.query permet de récupérer le paramètre `bar` de la route "/foo/:bar"  
[V] - express.json() ou bodyParser.json() sont des middlewares capables de parser le body d'une requête en JSON  
[V] - swagger est un outil que l'on peut ranger dans la catégorie des headless CMS  
[ ] - `iat` est une propriété d'un token jwt qui permet de savoir quand le token expirera  

## 4 - Citez une capacité de graphql que vous pourriez mettre en avant en entretient d'embauche ? (1 point)

- Autodocumentation


## 5 - Citer 5 points de sécurité à respecter pour un espace d'authentification professionnel (2,5 points)

Les points peuvent être des bonnes pratiques, des méthodes, des outils, des librairies, des techniques, du back, du front, etc...

-  Mot de passe haché en BDD
  
-  2FA
  
-  la librairie bcrypt
  
-  Demander aux utilisateurs de changer régulièrement leur mot de passe, sans que celui ne soit un mot de passe qui a déjà été utilisé par l'utilisateur et qu'il fasse + de 12 caractères incluant au moins un chiffre, une lettre et un caractère spécial
  
-  Limiter à 3 essais la possibilité de s'authentifier : si l'utilisateur se trompe 3 fois, son IP est bloqué et il devra demander de l'aide directement avec l'équipe infra / devOps

## 6 - Coder la route d'API suivante (3 points pour Griffondor)

Voici la requête :

GET /api/users/thomas  
Authorization: Bearer eykpXVCJ9.eybWF0Ijo.JleHAiOjE

Et les réponses possibles :  
- 200 + { user : "thomas }  
- 401 + { error : "Unauthorized" }  


public function getUser(req, res)
{
    if(req.token == null)
    {
        return res.json({statusCode: 401, "Unauthorized"})
    }
    let user = ORM.findOne(name: "thomas");
    return res.json({statusCode: 200, user})
}
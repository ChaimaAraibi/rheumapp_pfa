# rheumapp_pfa


## to get all patients:

get: localhost:4000/
{
    "_id": "604f47fdd696a00e6452ffbc",
    "nom": "belhsan",
    "prenom": "imed",
    "telephone": 56987456,
    "num_dossier": 25361425,
    "diagnostic": "spondylolalala",
    "ordonnance": "spondystop",
    "JADAS": [],
    "__v": 0
} //list of json


## to get patient by id

get: localhost:4000/:id

## to add a new patient (sign up)

post: loaclhost:4000/add
{
    "nom": "belhsan",
    "prenom": "imed",
    "telephone": 56987456,
    "num_dossier": 25361425,
    "diagnostic": "spondylolalala",
    "ordonnance": "spondystop"
}

## to add a new score JADAS

post: localhost:4000/newJADAS/:id
{
  "score": 30
  }
  
  resultat:
  {
    "_id": "604f47fdd696a00e6452ffbc",
    "nom": "belhsan",
    "prenom": "imed",
    "telephone": 56987456,
    "num_dossier": 25361425,
    "diagnostic": "spondylolalala",
    "ordonnance": "spondystop",
    "JADAS": [
        {
            "_id": "604f5cbd4f395e322419646a",
            "score": 30,
            "date": "2021-03-15T13:10:21.360Z",
            "state": 0
        },
        {
            "_id": "604f5ce204e68c0a546b3221",
            "score": 30,
            "date": "2021-03-15T13:10:58.814Z",
            "state": 0
        }
    ],
    "__v": 0
}
  
## to update ordonnance

post: localhost:4000/updateOrdonnance/:id
{ordonnance: spondystop 3 fois oar jour}

resultat:
{
    "_id": "604f47fdd696a00e6452ffbc",
    "nom": "belhsan",
    "prenom": "imed",
    "telephone": 56987456,
    "num_dossier": 25361425,
    "diagnostic": "spondylolalala",
    "ordonnance": "spondystop 3 fois par jours",
    "JADAS": [
        {
            "_id": "604f5cbd4f395e322419646a",
            "score": 30,
            "date": "2021-03-15T13:10:21.360Z",
            "state": 0
        },
        {
            "_id": "604f5ce204e68c0a546b3221",
            "score": 30,
            "date": "2021-03-15T13:10:58.814Z",
            "state": 0
        }
    ],
    "__v": 0
}

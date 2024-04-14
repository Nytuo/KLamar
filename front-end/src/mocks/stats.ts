import IStats from "../interfaces/IStats";
import IQuiz from "../interfaces/IQuiz";


export const stats: IStats[] = [{
  "id" : 1,
  "pointQuestion" : [2,0.4,0.5],
  "maxPointQuestion" : [2,3,1],
  "erreurQuiz" : [0,2,1],
  "indicesQuiz" : [1,2,0],
  "tempsQuiz" : [20,5,12],
  "question" : [{
    "id": "1",
    "question": "Quelle est la capitale de la France ?",
    "tips": [
      "La ville de l\\'amour", "La ville lumière"
    ],
    "AreResponsesImages": false,
    "responses": [
      "Paris", "Londres", "New York", "Berlin"],
    "answer": "Paris",
    "tags": ["géographie"]
  },
    {
      "id": "2",
      "question": "Quelle est la capitale de l\"Allemagne ?",
      "tips": ["Elle a un mur célèbre", "Elle n\"est pas Munich"],
      "AreResponsesImages": true,
      "responses": ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/280px-London_Montage_L.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/280px-Lower_Manhattan_skyline_-_June_2017.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Cityscape_Berlin.jpg/400px-Cityscape_Berlin.jpg"],
      "answer": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Cityscape_Berlin.jpg/400px-Cityscape_Berlin.jpg",
      "tags": ["géographie"]
    },
    {
      "id": "3",
      "question": "Quelle est la capitale du Royaume-Uni ?",
      "questionImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/280px-London_Montage_L.jpg",
      "tips": ["Elle a un grand ben", "Elle n\"est pas Manchester"],
      "AreResponsesImages": false,
      "responses": ["Paris", "Londres", "New York", "Berlin"],
      "answer": "Londres",
      "tags": ["géographie"]
    }],
  "reponseId" : [[1],[3,2,1],[4,2]],
  "erreurSimon" : [0,5,0],
  "indicesSimon" : [6,1,0],
  "tempsSimon" : [40,65,160],
  "tailleFinalSimon" : [3,4,5],
  "nombreDeCouleurs" : [2,4,4],
  "erreurMemory" : [1,10,0],
  "indicesMemory" : [2,2,3],
  "tempsMemory" : [50,40,12],
  "largeurMemory" : [4,5,5],
  "hauteurMemory" : [5,2,4]
},
  {
    "id" : 2,
    "pointQuestion" : [2,0.4,0.5],
    "maxPointQuestion" : [2,3,1],
    "erreurQuiz" : [4,5,0],
    "indicesQuiz" : [1,2,4],
    "tempsQuiz" : [20,4,12],
    "question" : [{
      "id": "1",
      "question": "Quelle est la capitale de la France ?",
      "tips": [
        "La ville de l\\'amour", "La ville lumière"
      ],
      "AreResponsesImages": false,
      "responses": [
        "Paris", "Londres", "New York", "Berlin"],
      "answer": "Paris",
      "tags": ["géographie"]
    },
      {
        "id": "2",
        "question": "Quelle est la capitale de l\"Allemagne ?",
        "tips": ["Elle a un mur célèbre", "Elle n\"est pas Munich"],
        "AreResponsesImages": true,
        "responses": ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/280px-London_Montage_L.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/280px-Lower_Manhattan_skyline_-_June_2017.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Cityscape_Berlin.jpg/400px-Cityscape_Berlin.jpg"],
        "answer": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Cityscape_Berlin.jpg/400px-Cityscape_Berlin.jpg",
        "tags": ["géographie"]
      },
      {
        "id": "3",
        "question": "Quelle est la capitale du Royaume-Uni ?",
        "questionImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/280px-London_Montage_L.jpg",
        "tips": ["Elle a un grand ben", "Elle n\"est pas Manchester"],
        "AreResponsesImages": false,
        "responses": ["Paris", "Londres", "New York", "Berlin"],
        "answer": "Londres",
        "tags": ["géographie"]
      }],
    "reponseId" : [[1],[3,4,1],[1,2]],
    "erreurSimon" : [4,5,0],
    "indicesSimon" : [6,1,4],
    "tempsSimon" : [4,65,160],
    "tailleFinalSimon" : [3,4,5],
    "nombreDeCouleurs" : [5,4,6],
    "erreurMemory" : [4,10,0],
    "indicesMemory" : [4,2,3],
    "tempsMemory" : [44,40,12],
    "largeurMemory" : [4,5,5],
    "hauteurMemory" : [4,2,4]
  }
]

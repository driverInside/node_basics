const express = require('express');
const router = express.Router();

const books = [
  {
    "author": "Paul Celan",
    "country": "Romania, France",
    "imageLink": "images/poems-paul-celan.jpg",
    "language": "German",
    "link": "\n",
    "pages": 320,
    "title": "Poems",
    "year": 1952
  },
  {
    "author": "Louis-Ferdinand C\u00e9line",
    "country": "France",
    "imageLink": "images/voyage-au-bout-de-la-nuit.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
    "pages": 505,
    "title": "Journey to the End of the Night",
    "year": 1932
  },
  {
    "author": "Miguel de Cervantes",
    "country": "Spain",
    "imageLink": "images/don-quijote-de-la-mancha.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
    "pages": 1056,
    "title": "Don Quijote De La Mancha",
    "year": 1610
  }
];

router.get('/books', (req, res) => {
  res.send(books);
});

router.post('/books', (req, res) => {

})

module.exports = router;

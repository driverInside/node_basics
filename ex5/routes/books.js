const express = require('express');
const router = express.Router();

const books = [
  {
    "id": 123,
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
    "id": 456,
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
    "id": 789,
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

router.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  let book;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      book = books[i];
      break;
    }
  }

  if(!book) {
    res.statusCode = 404;
    return res.send({
      message: 'No, mi ciela'
    });
  }

  res.send(book);
});

router.get('/books', (req, res) => {
  res.send(books);
});

router.post('/books', (req, res) => {
  const book = req.body;

  books.push(book);
  res.send(book);
});

router.delete('/books/:id', (req, res) => {
  // 1. Buscar el elemento que se quiere eliminar
  // 2. Removerlo del arreglo
  // 3. Recorrer los elementos restantes

  const id = parseInt(req.params.id, 10);
  let index;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      index = i;
      break;
    }
  }

  res.send({index});
});

module.exports = router;

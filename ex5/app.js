const express = require('express');
const bodyParser = require('body-parser');

const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');
const filmsRouter = require('./routes/films');
const charactersRouter = require('./routes/characters');

const app = express();

app.use(bodyParser.json());

app.use(booksRouter);
app.use(authorsRouter);
app.use(filmsRouter);
app.use(charactersRouter);

app.get('/', (req, res) => {
  res.send('Página de inicio');
});

module.exports = app;

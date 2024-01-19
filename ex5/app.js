const express = require('express');

const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');
const filmsRouter = require('./routes/films');

const app = express();

app.use(booksRouter);
app.use(authorsRouter);
app.use(filmsRouter);

app.get('/', (req, res) => {
  res.send('Página de inicio');
});

module.exports = app;

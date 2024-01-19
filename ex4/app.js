const express = require('express');
const bodyParser = require('body-parser');

const aboutRouter = require('./routes/about');
const productsRouter = require('./routes/products');
const studentsRouter = require('./routes/students');
const booksRouter = require('./routes/books');

const app = express();

app.use(bodyParser.json());

app.use(aboutRouter);
app.use(productsRouter);
app.use(studentsRouter);
app.use(booksRouter);

// routes definition
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello world v2.0');
});


module.exports = app;

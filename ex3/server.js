const express = require('express');
const app = express();

const port = 1337;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello world');
});

app.get('/about', (req, res) => {
  res.send('Esta es la página de acerca de');
});

app.get('/info', (req, res) => {
  res.send({
    url: req.url,
    baseUrl: req.baseUrl,
    headers: req.headers
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

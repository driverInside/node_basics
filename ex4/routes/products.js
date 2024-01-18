const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.send('Esta es la página de productos');
});

module.exports = router;

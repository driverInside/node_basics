const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
  res.send('Esta es la página de acerca de');
});

module.exports = router;

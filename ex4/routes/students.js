const express = require('express');
const router = express.Router();

router.get('/students', (req, res) => {
  res.send('Esta es la página de estudiantes');
});

module.exports = router;

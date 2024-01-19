const express = require('express');
const router = express.Router();


router.get('/characters', (req, res) => {
  res.send('/characters');
});



module.exports = router;

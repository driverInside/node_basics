const express = require('express');
const router = express.Router();

const authors = [
  {"key":"aas","givenname":"American Astronomical Society","familyname":""},
  {"key":"aavatsmark","givenname":"Ivar","familyname":"Aavatsmark"},
  {"key":"abhinandan","givenname":"S. P.","familyname":"Abhinandan"},
  {"key":"abraham","givenname":"Paul","familyname":"Abraham"},
  {"key":"abrahams","givenname":"Paul W.","familyname":"Abrahams"}
];

router.get('/authors', (req, res) => {
  res.send(authors);
});

module.exports = router;

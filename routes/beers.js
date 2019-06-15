const express = require('express');
const router  = express.Router();
const Beers = require('../models/beers');


/* GET all beers */
router.get('/', (req, res, next) => {
  res.json(beers);
});

/* GET random beer */
router.get('/random', (req, res, next) => {
  res.json();
});

/* POST new beer */
router.post('/new', (req, res, next) => {
  res.json();
});

module.exports = router;

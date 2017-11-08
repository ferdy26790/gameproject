
const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/monster', (req, res) => {
  res.render('monster')
})

module.exports = router
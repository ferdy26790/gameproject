const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/profile', (req, res) => {
  res.render('profile')
})

module.exports = router
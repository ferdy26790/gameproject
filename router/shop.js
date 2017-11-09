
const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/', (req, res) => {
  Model.Skills.findAll().then((shopRows) => {
    res.render('shop',{shopRows})
  })
})

module.exports = router

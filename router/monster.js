
const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/monster', (req, res) => {
  Model.Monster.findAll().then((monsterRows) => {
    res.render('monster',{monsterRows})
  })
})

module.exports = router

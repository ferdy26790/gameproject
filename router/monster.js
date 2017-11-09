
const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/', (req, res) => {
  Model.Monsters.findAll().then((monsterRows) => {
    res.render('monster',{monsterRows})
  })
})

module.exports = router

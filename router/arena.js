
const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/', (req, res) => {
  Model.Users.findAll({ include: [{model: Model.Monsters}]}).then((userRows) => {
    res.render('arena',{userRows})
  })
})

router.get('/battle', (req, res) => {
  Model.Users.findAll({ include: [{model: Model.Monsters}]}).then((userRows) => {
    res.render('arena',{userRows})
  })
})

module.exports = router

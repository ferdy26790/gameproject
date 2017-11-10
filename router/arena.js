
const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/:id', (req, res) => {
  Model.Users.findAll({ include: [{model: Model.Monsters}]}).then((userRows) => {
    let id = req.params.id
    res.render('arena',{userRows, id})
    //res.send(userRows)
  })
})

router.get('/:id/battle', (req, res) => {
  Model.Users.findAll({ include: [{model: Model.Monsters}]}).then((userRows) => {
    //res.render('arena',{userRows})
    res.send(req.body.idmusuh)
  })
})

module.exports = router

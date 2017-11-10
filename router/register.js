const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/', function(req, res) {
    res.render('register')
})

router.post('/', (req, res) => {
    let obj = {
        name:req.body.name,
        password:req.body.password,
        credit: 1000,
        win: 0,
        lose:0
    }
    Model.Users.create(obj).then(()=> {
      res.redirect('/login')
    })
  })

module.exports = router

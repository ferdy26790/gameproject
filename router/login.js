const express = require('express');
const router = express.Router();
const Model = require('../models')



router.get('/', function(req, res){
    res.render('login')
  })

router.post('/', (req, res) => {
    Model.Users.findOne({
        where: {
          name: req.body.name,
          password: req.body.password
        }
      }).then((user) => {
        res.redirect(`/profile/${user.id}`)
      })

  })

module.exports = router

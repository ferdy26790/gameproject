const express = require('express');
const router = express.Router();
const Model = require('../models')



router.get('/profile', (req, res) => {
  Model.User.findById(1, 
    {include: [
    { model: Model.Monster}
 ]}).then((userRows) => {
    res.render('profile',{userRows})
    // res.send(userRows)
  })
})

module.exports = router
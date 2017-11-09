const express = require('express');
const router = express.Router();
const Model = require('../models')
const funct = require('../helper/myFunction')

router.get('/', (req, res) => {
  Model.Users.findAll( { include: [{model: Model.Monsters}]} ).then((userRows)=>{
    res.send(userRows);
  })
})

router.get('/gacha', (req,res)=>{
  Model.Monsters.findAll().then((MonstersRows)=>{
    let a = funct.roll()
    let getmons = []
    MonstersRows.forEach((monster)=>{
      if(monster.id == a){
        getmons.push(monster)
      }
    })
    res.render('gacha',{getmons})
  }).catch((err)=>{
    console.log(err);
  })

})

module.exports = router

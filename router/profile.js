const express = require('express');
const router = express.Router();
const Model = require('../models')
const funct = require('../helper/myFunction')



router.get('/:id', (req, res) => {
  Model.Users.findById(req.params.id,
    {include: [
    { model: Model.Monsters}
 ]}).then((userRows) => {
   let id = req.params.id
    res.render('profile',{userRows, id})
    // res.send(userRows)
  }).catch((error)=>{
    console.log(error);
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


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const monster = require('./router/monster')
const profile = require('./router/profile')
const shop = require('./router/shop')
//
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')))
app.use('/monster',monster)
app.use('/profile',profile)
app.use('/shop',shop)


app.listen(process.env.PORT || '3000', () => console.log('Example app listening on port 3000!'))

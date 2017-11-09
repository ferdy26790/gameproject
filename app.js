
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path')
const monster = require('./router/monster')
const profile = require('./router/profile')

const register = require('./router/register')
const login = require('./router/login')
const shop = require('./router/shop')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')))

app.use('/monster',monster)
app.use('/profile',profile)
app.use('/shop',shop)
app.use('/register',register)
app.use('/login',login)


app.listen(3000, () => console.log('test berjalan'))
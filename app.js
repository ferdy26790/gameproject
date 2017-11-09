
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path')
const monster = require('./router/monster')
const profile = require('./router/profile')
const register = require('./router/register')
const login = require('./router/login')


app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')))
app.use('/',monster)
app.use('/',profile)
app.use('/register',register)
app.use('/login',login)


app.listen(3000, () => console.log('test berjalan'))

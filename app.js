
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const monster = require('./router/monster')
//
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')))
app.use('/',monster)


app.listen(3000, () => console.log('Example app listening on port 3000!'))

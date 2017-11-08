const express = require('express')
const app = express()
const teacher = require('./router/monster')

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use('/',teacher)



app.listen(3000, () => console.log('Example app listening on port 3000!'))
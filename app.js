const express = require('express')
const app = express()

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', function(req, res) {
    res.render('login')
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
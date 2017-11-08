
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const monster = require('./router/monster')



app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/',monster)
app.use('/',profile)


app.listen(3000, () => console.log('Example app listening on port 3000!'))


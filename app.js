//require express
const express = require('express')
const app = express()
const post = 3000
//require express-handlebars and view engine setting
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')
//require bodyParser and use it 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
//require rubbishGenerator function
const rubbishGenerator = require('./rubbish_generator')
//require handlebarsHelper
require('./handlebarsHelper')
//listen server
app.listen(post, () => {
  console.log('enable server...')
})
//use public data
app.use(express.static('public'))
//get method 
app.get('/', (req, res) => {
  res.render('index')
})
//post method 
app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index', { rubbish: rubbishGenerator(req.body.job), radioChecked: req.body.job})
})
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// GET method route
app.get('/', function(req, resp){
	resp.send('Alex Goodall is the coolest mf eva lol')
})

// POST method route
app.post('/', function (req, resp) {
	resp.send('POST request to the homepage')
})

// GET method with a specified URL
app.get('/secret', function(req, resp){
	console.log('Accessing the secret section...')
	resp.send('Alex Goodall is a virgin')
})


// GET method with parameters
app.get('/character/:name-:species', function(req, resp){
	console.log('loaded...')
	resp.send(req.params)
})

// GET with parameters - random numbers example
app.get('/random/:max', function(req, resp){
  max = parseInt(req.params.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via url is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

app.get('/r', function(req, resp){
  max = parseInt(req.query.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via query is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

//GET with query
app.get('/w', function(req,resp){
	person = req.query.person
	console.log('query successful')
	resp.send(person)
})

//GET with query from form
app.get('/user', function(req,resp){
	name = req.query.name
	email = req.query.email
	console.log('query params collected')
	resp.send('Welcome ' + name + '! You have subsribed with the email: '+email)
	
})

//POST with query from form
app.post('/new', function(req,resp){
	name = req.body.name
	email = req.body.email
	console.log('query params collected')
	resp.send('Welcome ' + name + '! You have subsribed with the email: '+email)
	
})



app.listen(8090)
var express = require('express')
var app = express()
var recipes = require('./potato_recipes.json');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// GET method route
app.get('/', function(req, resp){
	resp.send('example')
})

app.get('/w',function(req,resp){
	query = req.query.recipe
	var results = []
	for(var x in recipes){
		var obj = recipes[x]
		console.log(obj)
		if (obj['title'].toUpperCase().includes(query.toUpperCase())){
			results.push(obj)
		}
	}
	
	resp.send(results)
	
})

//POST method to add new recipe 
app.post('/new', function(req,resp){
	var obj = new Object();
	obj.title = req.body.title
	obj.href = req.body.href
	obj.ingredients = req.body.ingredients
	obj.thumbnail = req.body.thumbnail
	
	console.log('success')
	recipes.push(obj)
	resp.send(obj)
	
})

app.listen(8090)
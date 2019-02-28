const express = require('express')
const app = express()

//use if making POST requests
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('client'));

let list = [ 'piano', 'concertina', 'double bass'];

// GET method route
app.get('/list', function(req, resp){
	resp.send(list)
})



app.listen(8090)


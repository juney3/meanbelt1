// required dependencies and variables

var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	root = __dirname,
	app = express();

// require mongoose

var mongoose = require('./server/config/mongoose.js');


// use dependencies
app.use(bodyParser.json());

// static files from client and bower_components

app.use(express.static(path.join( root, "client")));
app.use(express.static(path.join( root, 'bower_components')));

// require routes and pass express app
require('./server/config/routes.js')(app);

// tell express app to listen to project on port 8000

app.listen(8000, function(){
	console.log('listening to project mean_belt on port 8000');
})
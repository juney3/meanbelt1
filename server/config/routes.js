// confirm that routes.js loaded
console.log('routes');

var users = require('../controllers/users.js');

var activities = require('../controllers/activities.js');


// set routes
module.exports = function(app){
	app.get('/users', users.index);
	app.get('/users/:id', users.show);
	app.post('/users', users.create);
	// app.put('/activities/:id', activities.update);
	app.post('/activities', activities.create);
	app.get('/activities', activities.index);
	
};

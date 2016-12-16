console.log('users server controller');

// require mongoose
var mongoose = require('mongoose');

// set friend schema from model
var User = mongoose.model('User');
var Activity = mongoose.model('Activity');

// define function UsersController
function UsersController() {
	this.index = function(req, res) {
		console.log('this is the users controller on the server side');
		User.find({}, function(err, users){
			if(err){
				console.log('cannot find users', err);
			}
			else{
				console.log('found users', users);
			}
			res.json(users);
		})
	};

	this.create = function(req, res) {
		console.log('server side users controller create has', req.body);

		var user = new User({
			name: req.body.name
		});

		user.save(function(err){
			if (err){
				console.log('could not save user', err);
				res.json(err);
			}
			else{
				console.log('successfully saved user');
				User.find({}, function(err, users){
					if(err){
						console.log('cannot find users', err);
					}
					else{
						console.log('found users', users);
					}
					console.log(users);
					res.json(users);
				});
			};
		});	
	}

	// this.update = function(req, res) {
	// 	console.log('server side controller update show req params', req.params.id);
	// 	console.log('server side controller update show req body', req.body);
	// 	var updatedData = req.body;

	// 	User.update({_id: req.params.id}, activity, function(err, updatedData){
	// 		if (err) {
	// 			console.log('update failed', err);
	// 		}
	// 		else{
	// 			console.log('update success');
	// 			res.json(updatedData);
	// 		}
	// 	});
		
	// };


	this.show = function(req, res) {
		console.log('server side users controller show req params', req.params.id);
		User.findOne({_id: req.params.id}, function(err, user){
			if (err){
				console.log('no user found', err);
			}
			else {
				console.log('found one user');
				console.log(user);
				res.json(user);
			}
		});

	};
}

// export UsersController results as an object
module.exports = new UsersController();
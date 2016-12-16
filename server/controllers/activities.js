console.log('activities server controller');

// require mongoose
var mongoose = require('mongoose');
// set activity schema from model
var Activity = mongoose.model('Activity');
var User = mongoose.model('User');

// define function ActivitiesController
function ActivitiesController() {
	this.index = function(req, res) {
		console.log('this is the activities controller on the server side');
		Activity.find({}, function(err, activities){
			if(err){
				console.log('cannot find items', err);
			}
			else{
				console.log('found items', activities);
			}
			res.json(activities);
		})
	};

	this.create = function(req, res) {
		console.log('server side activities controller create has', req.body);
		var activity = new Activity({
			title: req.body.title,
			description: req.body.description,
			complete: false,
			_user: req.body.user
		});

		var user = User.findOne({_id: req.body.user});
		console.log(user);
		activity.save(function(err){
			if (err){
				console.log('could not save activity', err);
				res.json(err);
			}
			else{
				console.log('successfully saved activity');
				Activity.find({}, function(err, activities){
					if(err){
						console.log('cannot find activity', err);
					}
					else{
						console.log('found activity', activities);
					}
					console.log(activity);
					res.json(activity);
				});
			};
		});
	};

	this.update = function(req, res) {
		console.log('server side controller update show req params', req.params.id);
		console.log('server side controller update show req body', req.body);
		var updatedData = req.body;

		Friend.update({_id: req.params.id}, updatedData, function(err, updatedData){
			if (err) {
				console.log('update failed', err);
			}
			else{
				console.log('update success');
				res.json(updatedData);
			}
		});
		
	};
}

// export ActivitiesController results as an object
module.exports = new ActivitiesController();
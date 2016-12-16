console.log('Activity Factory');

bucketApp.factory('activitiesFactory', ['$http', function($http) {
	// constructor for factory
	var activities = [];
	var activity = {};

	function ActivitiesFactory() {
		var __this = this;
		this.create = function(newactivity, callback) {
			console.log('ActivitiesFactory creating', newactivity);
			$http.post('/activities', newactivity).then(function(returned_data){
				console.log('ActivitiesFactory - newActivity returned', returned_data.data);
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
				}
			});
		};

		this.update = function(editactivity, id, callback) {
			console.log('Activities factory updating', editactivity)
			$http.put('/activities/'+id, editactivity).then(function(returned_data){
				console.log(returned_data.data);
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
				}
			});
		};

		this.index = function(callback) {
			$http.get('/activities').then(function(returned_data){
				activities = returned_data.data;
				callback(activities);
				console.log('activitiesFactory index retrieving', activities)
			});
		};

 	}

 	console.log(new ActivitiesFactory());
 	return new ActivitiesFactory();
}]);
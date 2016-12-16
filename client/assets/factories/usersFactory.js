console.log('Users Factory');

bucketApp.factory('usersFactory', ['$http', function($http) {
	// constructor for factory
	var users = [];
	var user = {};

	function UsersFactory() {
		var __this = this;
		this.create = function(newuser, callback) {
			console.log('usersFactory creating', newuser);
			$http.post('/users', newuser).then(function(returned_data){
				console.log('UsersFactory - new user returned', returned_data.data);
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
					console.log('returned data is', returned_data.data);
				}
			});
		};

		this.update = function(editfriend, id, callback) {
			console.log('Users factory updating', editfriend)
			$http.put('/users/'+id, editfriend).then(function(returned_data){
				console.log(returned_data.data);
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
				}
			});
		};

		this.index = function(callback) {
			$http.get('/users').then(function(returned_data){
				users = returned_data.data;
				callback(users);
				console.log('friendsFactory index retrieving', users)
			});
		};


		this.show = function(id, callback) {
			console.log('show in users Factory showing', id)
			$http.get('/users/'+id).then(function(returned_data) {
				console.log('users factory show returned data', returned_data.data);
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
				};
			});
		};


		this.getUser = function(callback) {
			callback(user);
		};
 	}

 	console.log(new UsersFactory());
 	return new UsersFactory();
}]);
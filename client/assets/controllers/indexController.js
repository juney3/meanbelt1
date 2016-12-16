bucketApp.controller('indexController', ['$scope', 'usersFactory', '$routeParams', '$location', function($scope, usersFactory, $routeParams, $location) {
	// This index controller accesses the users factory and redirects to dashboard on login

	console.log('index controller active');

	// $scope create function
	$scope.login = function() {
		// $scope create function
		console.log('indexController says', $scope.user);
		usersFactory.create($scope.user, function(data){
			console.log("back to controller");
			if (data.errors){
				$scope.errors = data.errors;
			}
			else {
				console.log('logging in');
				$location.url('/dashboard/');
			}
		})
	}
}]);
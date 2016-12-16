bucketApp.controller('showController', ['$scope', 'usersFactory', 'activitiesFactory', '$routeParams', '$location', function($scope, usersFactory, activitiesFactory, $routeParams, $location) {

	$scope.user = {};
	
	console.log('show controller user ID is', $routeParams.id);

	usersFactory.show($routeParams.id, function(returned_data){
		console.log('back to show controller');
		console.log('show controller returned data is', returned_data)
		$scope.user = returned_data;
	})

}])

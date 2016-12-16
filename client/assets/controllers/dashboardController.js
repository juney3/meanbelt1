bucketApp.controller('dashboardController', ['$scope', 'usersFactory', 'activitiesFactory', '$routeParams', '$location', function($scope, usersFactory, activitiesFactory, $routeParams, $location) {
	$scope.users = [];
	$scope.user = {};
	$scope.activities = [];


	var index = function() {
		usersFactory.index(function(returnedData){
			console.log('returned data', returnedData);
			$scope.users = returnedData;
			console.log('Index controller', $scope.users);
		});
	};

	var bucketItems = function() {
		activitiesFactory.index(function(returnedBuckets) {
			console.log('all activities', returnedBuckets);
			$scope.activities = returnedBuckets;
		});
	}

	index();
	bucketItems();




	// $scope create activity function
	$scope.createActivity = function() {
		console.log('activityController says', $scope.newActivity);
		activitiesFactory.create($scope.newActivity, function(){
			console.log("back to controller");
			$scope.newActivity = {};
			index();
			bucketItems();
		})
	}

}])
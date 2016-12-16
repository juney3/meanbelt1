// create app
var bucketApp = angular.module('bucketApp', ['ngRoute']);

bucketApp.config(function ($routeProvider) {
	console.log('routes loaded');
	$routeProvider
	.when('/', {
		templateUrl: '/partials/index.html',
		controller: 'indexController'
	})
	.when('/dashboard', {
		templateUrl: '/partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/show/:id', {
		templateUrl: '/partials/show.html',
		controller: 'showController'
	})
});
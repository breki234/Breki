var App = angular.module('championApp', ['ngRoute']);

	// configure our routes
	App.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/championlist.html',
				controller  : 'listController'
			})

			// route for the about page
			.when('/:id', {
				templateUrl : 'pages/campiondetails.html',
				controller  : 'detailController'
			})
	});

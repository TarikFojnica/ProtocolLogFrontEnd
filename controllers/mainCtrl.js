var App = angular.module('APP', ['ui.router']);

App.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/izlazni-dokumenti");

	$stateProvider
		.state('izlazni-dokumenti', {
			url: "/izlazni-dokumenti",
			views: {
				'section': {
					templateUrl: 'views/izlazni-dokumenti.html'
				},
				'header': {
					templateUrl: 'views/header.html'
				}
			}
		})

		.state('ulazni-dokumenti', {
			url: "/ulazni-dokumenti",
			views: {
				'section': {
					templateUrl: 'views/ulazni-dokumenti.html'
				},
				'header': {
					templateUrl: 'views/header.html'
				}
			}
		})


		.state('uposlenici', {
			url: "/uposlenici",
			views: {
				'section': {
					templateUrl: 'views/uposlenici.html'
				},
				'header': {
					templateUrl: 'views/header.html'
				}
			}
		})

		.state('prijava', {
		url: "/prijava",
		views: {
			'section': {
				templateUrl: 'views/login.html'
			},
			'header': {
				templateUrl: ''
			}
		}
	})


});




App.controller('mainCtrl', function($scope) {
	$scope.firstName= "John";
	$scope.lastName= "Doe";
});
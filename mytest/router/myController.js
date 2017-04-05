/*var myapp = angular.module('myapp',['ngRoute'])

myapp.config(function($routeProvider){
	$routeProvider.when('/section1',{
		templateUrl : 'tlps/section1.html',
		controller: 'myCtrl'
	}).when('/section2',{
		templateUrl : 'tlps/section2.html',
		controller : 'myCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});

myapp.controller('myCtrl',['$scope',function($scope){
	$scope.lists = [
		'one',
		'two',
		'three',
		'four',
		'five'
	]
}]);*/


var myapp = angular.module('myapp',['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/sec1');

	$stateProvider
		.state('sec1',{
			url : '/sec1',
			templateUrl: 'tlps/section1.html'
		})
		.state('sec2',{
			url : '/sec2',
			templateUrl : 'tlps/section2.html',
			controller : function($scope){
				$scope.lists = [
					'one','two','three','four'
				]
			}
		});
});

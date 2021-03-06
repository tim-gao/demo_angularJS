var myUIRouter1 = angular.module('myUIRouter1',['ui.router']);

myUIRouter1.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state('state1',{
		url:'/state1',
		templateUrl : 'tpls/state1.html'
	})
	.state('state1.list',{
		url: '/list',
		templateUrl : 'tpls/state1.list.html',
		controller : function($scope){
			$scope.items = ['this','is','a','list'];
		}
	})
	.state('state2',{
		url : '/state2',
		templateUrl : 'tpls/state2.html'
	})
	.state('state2.list',{
		url : '/list',
		templateUrl : 'tpls/state2.list.html',
		controller : function($scope){
			$scope.things = ['A','set','of','things'];
		}
	});

});
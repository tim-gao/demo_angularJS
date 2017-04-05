angular
	.module('myModule',[])
	.controller('myController',['$scope',function($scope){
		$scope.hobic = 'Music';
	}])
	.directive('tim',function(){
		return {
			restrict: 'AE',
			scope: {
				me:'='
			},
			template: '<input type="text" ng-model="me">'
		}
	});
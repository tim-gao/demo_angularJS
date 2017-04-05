angular
	.module('myModule',[])
	.controller('myController',['$scope',function($scope){
		$scope.foodType = 'hamburg';
	}])
	.directive('food',function(){
		return{
			restrict : 'AE',
			scope: {
				me: '@'
			},
			template: "<div>{{me}}</div>"
		}
		
	});
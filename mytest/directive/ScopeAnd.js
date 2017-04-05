angular
	.module('myModule',[])
	.controller('myController',['$scope',function($scope){
		$scope.sayHello = function(name){
			alert("hello " + name );
		}
	}])
	.directive('greeting',function(){
		return {
			restrict: 'AE',
			scope: {
				greet: '&'
			},
			template: '<input type="text" ng-model="username" ><br>' 
			+'<button ng-click="greet({name:username})">SayHello</button>'
		}
	});
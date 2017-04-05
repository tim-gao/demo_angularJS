var myModule = angular.module('myModule',[]);

myModule.directive('superman',function(){
	return {
		scope : {},
		restrict : 'AE',
		controller : function($scope){
			$scope.abilities = [];
			this.addStrength = function(){
				$scope.abilities.push("strength");
			};
			this.addFly = function(){
				$scope.abilities.push("fly");
			};
			this.addSpeed = function(){
				$scope.abilities.push("speed");
			};
		},
		link : function(scope,ele,attr){
			ele.bind('mouseenter',function(){
				console.log(scope.abilities);
			});
		}
	}
});
myModule.directive('strength',function(){
	return {
		restrict: 'A',
		require : '^superman',
		link : function(scope,ele,attr,superCtrl){
			superCtrl.addStrength();
		}
	}
});
myModule.directive('fly',function(){
	return {
		restrict: 'A',
		require : '^superman',
		link : function(scope,ele,attr,superCtrl){
			superCtrl.addFly();
		}
	}
});
myModule.directive('speed',function(){
	return {
		restrict: 'A',
		require : '^superman',
		link : function(scope,ele,attr,superCtrl){
			superCtrl.addSpeed();
		}
	}
});
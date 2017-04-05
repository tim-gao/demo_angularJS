var myModule = angular.module('MyModule',[]);

myModule.controller('myController',function($scope){
	$scope.loadData = function(){
		console.log("加载数据中.....");
	}
});
myModule.controller('myController2',function($scope){
	$scope.loadData2 = function(){
		console.log("加载数据中.....2222");
	}
});
myModule.directive('hello',function(){

	return {
		restrict: 'AE',

		link : function(scope,element,attr){
			element.bind('mouseover',function(){
				//scope.loadData();
				//scope.$apply('loadData()');
				scope.$apply(attr.howtoload);
			});
		}

	}
});
var myModule = angular.module('MyModule',[]);

myModule.directive("hello",function(){
	return {
		restrict: 'AECM',
		template: '<div>Hello angular directive<div ng-transclude></div></div>',
		// templateUrl : '',
		replace : true,
		transclude: true
	}
});
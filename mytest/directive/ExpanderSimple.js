angular
	.module('myApp',[])
	.directive('expander',function(){
		return {
			restrict: 'EA',
			replace: true,
			transclude: true,
			template: '<div><div ng-click="toggle()">点击这里</div><br>'
						+'<div ng-show="isShow">这里是内容</div></div>',
			link: function(scope,element,attr){
				scope.isShow = false;
				scope.toggle = function(){
					scope.isShow = !scope.isShow;
				}
			}
		}
	})
	.controller('myController',['$scope',function($scope){}]);
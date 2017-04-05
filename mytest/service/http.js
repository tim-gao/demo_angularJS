angular
	.module('myApp',[])
	.controller('myController',['$scope','$http','$timeout',function($scope,$http,$timeout){
		$scope.inputbox= "12345678";
		$http({
			method: 'GET',
			url: 'data.json'
		}).success(function(res){
			$scope.items = res;
		}).error(function(error){
			alert(error);
		})


		//watch the input box, when the value be changed then invoke the handler
		$scope.$watch('inputbox',function(newinput){
			var timeout;
			if(newinput){
				if(timeout){
					$timeout.cancel(timeout);
				}
				timeout = $timeout(function(){
					console.log(newinput);
				},100); 
			}
		})
	}])
angular.module("root", [])
	.controller("index", ["$scope", function($scope) {
		$scope.message = "Works";
		$scope.isFirstElementVisible = true;
		$scope.isSecondElementVisible = true;
	}]);
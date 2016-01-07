angular.module("app")
	.controller("SignUpCtrl", function($rootScope, $scope, $state) {
		$scope.saveProfileChanges = function(profile) {
			localStorage.setItem("gungeonProfile", JSON.stringify(profile))

			$rootScope.profile = profile;
			$state.go("menu");
		};
	});
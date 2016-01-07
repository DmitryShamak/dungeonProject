angular.module("app")
	.controller("LogInCtrl", function($rootScope, $scope, $state) {
		$scope.logIn = function(form) {
			var dbProfile = JSON.parse(localStorage.getItem("gungeonProfile"));
			if(!dbProfile) {
				return $state.go("signup");
			}

			if(form.email === dbProfile.email && form.pass === dbProfile.pass) {
				$scope.logInErrorMessage = null;
				$rootScope.profile = dbProfile;
				return $state.go("menu");
			}

			$scope.logInErrorMessage = "Wrong email or password.";
		};
	});
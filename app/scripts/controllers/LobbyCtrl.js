angular.module("app")
	.controller("LobbyCtrl", function($scope, LobbyParams) {
		$scope.lobby = {};
		$scope.lobby.players = [];
		$scope.lobby.params = _.map(LobbyParams, function(param) {
			return param;
		});
		$scope.lobby.heroes = [];

		var LobbyPlayer = function(attrs) {
			var self = this;
			self.name = attrs.fname + " " + attrs.lname;
			self.sex = attrs.sex || "Spirit";
			self.ready = false;
		};

		$scope.initLobby = function() {
			$scope.lobby.players.push(new LobbyPlayer($scope.profile));
		};

		$scope.initLobby();
	});
function config($stateProvider, $urlRouterProvider, $locationProvider) {	
	//$locationProvider.html5Mode(true);

	$stateProvider
	.state('menu', {
	  url: "/menu",
	  templateUrl: "/views/menu.html"
	})
	.state('signup', {
	  url: "/signup",
	  templateUrl: "/views/signup.html",
	  controller: "SignUpCtrl"
	})
	.state('login', {
	  url: "/login",
	  templateUrl: "/views/login.html",
	  controller: "LogInCtrl"
	})
	.state('logout', {
	  controller: function($rootScope, $state) {
	  	$rootScope.profile = null;
	  	$state.go("menu");
	  }
	})
	.state('lobby', {
	  url: "/lobby",
	  templateUrl: "/views/lobby.html",
	  controller: "LobbyCtrl"
	})
	.state('findlobby', {
	  url: "/findlobby",
	  templateUrl: "/views/lobby.html"
	})
	.state('rules', {
	  url: "/rules",
	  templateUrl: "/views/rules.html"
	});

	$urlRouterProvider.otherwise("/menu");
};

angular
  .module('app')
  .config(config)
  .run(function($rootScope, $state, $urlRouter) {
	$rootScope.profile = JSON.parse(localStorage.getItem("gungeonProfile"));
  });
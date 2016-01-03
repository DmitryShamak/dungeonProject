function config($stateProvider, $urlRouterProvider, $locationProvider) {	
	$locationProvider.html5Mode(true).hashPrefix('!');

	$stateProvider
	.state('menu', {
	  url: "/",
	  templateUrl: "/views/menu.html"
	})
	.state('signup', {
	  url: "/signup",
	  templateUrl: "/views/signup.html"
	})
	.state('lobby', {
	  url: "/lobby",
	  templateUrl: "/views/lobby.html"
	});
};

angular
  .module('app')
  .config(config)
  .run(function($rootScope, $state, $urlRouter) {

  });
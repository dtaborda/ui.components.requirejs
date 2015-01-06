define('app', [
		'angular',
		'angularRouter',
		'configuration',
		'angularTouch',
		'angularCarousel',
		'angularYoutube',
		'dashboard.route',
		'about.route',
		'login.route',
		'dashboard.controller',
		'dashboard.service',
		'about.controller',
		'login.controller',
		'nav-menu.component',
		'entry.component',
		'wall.component',
		'partition.filter',
		'carousel.component'
	],
	function(ng, angularRouter, config,angularTouch, angularCarousel, angularYoutube,dashboardRoute, aboutRoute, loginRoute){
		'use strict';

		angular.module(config.applicationName,[
				'ui.router',
				'ngTouch',
				'angular-carousel',
				'youtube-embed',
				'dashboardControllerModule',
				'aboutControllerModule',
				'loginControllerModule',
				'dashboardServiceModule',
				'navMenuComponentModule',
				'entryComponentModule',
				'wallComponentModule',
				'partitionFilterModule',
				'carouselComponentModule'
			])
			.run([
				'$rootScope',
				'$state',
				function($root, $state){
					$root.state = $state;
				}
			])
			.config([
				'$stateProvider',
				'$urlRouterProvider',
				'$httpProvider',
		        function ($stateProvider,$urlRouterProvider,$httpProvider) {
		        	$httpProvider.defaults.withCredentials = true;
		            $urlRouterProvider.otherwise('/');
		            dashboardRoute($stateProvider);
		            aboutRoute($stateProvider);
		            loginRoute($stateProvider);
		        }
		    ]);
	}
);
define('app', [
		'angular',
		'configuration',
		'angular-router',
		'about.route',
		'hotels.route',
		'about.controller',
		'hotels.controller',
		'breadcrumbs.component',
		'nav-menu.component'
	],
	function(ng, config, angularRouter, aboutRoute, hotelsRoute){
		'use strict';

		angular.module(config.applicationName,[
				'ui.router',
				'aboutControllerModule',
				'hotelsControllerModule',
				'breadcrumbsComponentModule',
				'navMenuComponentModule'
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
		        function ($stateProvider,$urlRouterProvider) {
		            $urlRouterProvider.otherwise('/');
		            aboutRoute($stateProvider);
		            hotelsRoute($stateProvider);
		        }
		    ]);
	}
);
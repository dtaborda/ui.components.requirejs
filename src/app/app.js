define('app', [
		'angular',
		'configuration',
		'angular-router',
		'about.route',
		'hotels.route',
		'home.route',		
		'frequent-questions.route',
		'award.route',
		'terms-conditions.route',		
		'winners.route',
		'about.controller',
		'hotels.controller',
		'breadcrumbs.component',
		'nav-menu.component'
	],
	function(ng, config, angularRouter, aboutRoute, hotelsRoute, homeRoute, frequentQuestionsRoute, awardRoute, termsConditionsRoute, winnersRoute){
		'use strict';

		angular.module(config.applicationName,[
				'ui.router',
				'aboutControllerModule',
				'hotelsControllerModule',
				'homeControllerModule',
				'frequentQuestionsControllerModule',
				'awardControllerModule',
				'termsConditionsControllerModule',
				'winnersControllerModule',
				'breadcrumbsComponentModule',
				'navMenuComponentModule'
			])
			.run([
				'$rootScope',
				'$state',
				function(root, state){
					root.state = state;
				}
			])
			.config([
				'$stateProvider',
				'$urlRouterProvider',
				'$httpProvider',
		        function (stateProvider,urlRouterProvider) {
		            urlRouterProvider.otherwise('/');
		            aboutRoute(stateProvider);
		            hotelsRoute(stateProvider);
		            homeRoute(stateProvider);
		            frequentQuestionsRoute(stateProvider);
		            awardRoute(stateProvider);
		            termsConditionsRoute(stateProvider);
		            winnersRoute(stateProvider);
		        }
		    ]);
	}
);
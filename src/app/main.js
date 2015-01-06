(function(){
	'use strict';

	require.config({
		baseUrl: '/',
		paths:{
			'app':'app/app',
			'configuration':'app/config/main.config',
			'angular':'vendor/angular/angular',
			'angularRouter':'vendor/angular-ui-router/release/angular-ui-router.min',
			'angularResource':'vendor/angular-resource/angular-resource.min',
			'angularTouch':'vendor/angular-touch/angular-touch',
			'angularCarousel':'vendor/angular-carousel/dist/angular-carousel',
			'angularYoutube':'vendor/angular-youtube-mb/dist/angular-youtube-embed.min',
			'jquery':'vendor/jquery/dist/jquery.min',
			'dashboard.route':'app/routes/dashboard/dashboard.route',
			'about.route':'app/routes/about/about.route',
			'login.route':'app/routes/login/login.route',
			'dashboard.controller':'app/routes/dashboard/dashboard.controller',
			'about.controller':'app/routes/about/about.controller',
			'login.controller':'app/routes/login/login.controller',
			'dashboard.service':'app/services/dashboard/dashboard',
			'nav-menu.component':'app/components/nav/nav-menu.component',
			'entry.component':'app/components/entry/entry.component',
			'wall.component':'app/components/wall/wall.component',
			'partition.filter':'app/filters/partition.filter',
			'carousel.component':'app/components/carousel/carousel.component'
		},
		shim:{
			'angular':{
				exports: 'angular',
				deps:['jquery']
			},
			'angularRouter':{
				deps:['angular']
			},
			'angularResource':{
				deps:['angular']
			},
			'angularCarousel':{
				deps:['angular']
			},
			'angularTouch':{
				deps:['angular']
			},
			'angularYoutube':{
				deps:['angular']
			}
		}
	});

	require(['app', 'configuration','angularCarousel'],
		function(app, config, angularCarousel){

			angular.element(document).ready(function() {
			  	angular.bootstrap(document.querySelector('html'), [
			    	config.applicationName
			  	], {
			    	strictDi: true
			  	});
			});

	});
})();
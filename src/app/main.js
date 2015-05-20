(function(){
	'use strict';

	require.config({
		baseUrl: '/',
		paths:{
			'app':'app/app',
			'configuration':'app/config/main.config',
			'angular':'vendor/angular/angular',
			'angular-router':'vendor/angular-ui-router/release/angular-ui-router.min',
			'angular-resource':'vendor/angular-resource/angular-resource.min',
			'jquery':'vendor/jquery/dist/jquery.min',
			'about.route':'app/routes/about/about.route',
			'about.controller':'app/routes/about/about.controller',
			'hotels.route':'app/routes/hotels/hotels.route',
			'hotels.controller':'app/routes/hotels/hotels.controller',
			'hotels.service':'app/services/hotels/hotels',
			'message.service':'app/services/messages/message',
			'banner-hotel.component': 'app/components/banner-hotel/banner-hotel.component',
			'breadcrumbs.component': 'app/components/breadcrumbs/breadcrumbs.component',
			'comment-card.component': 'app/components/comment-card/comment-card.component',
			'comments-list.component': 'app/components/comments-list/comments-list.component',
			'hotel-card.component': 'app/components/hotel-card/hotel-card.component',
			'hotels-list.component': 'app/components/hotels-list/hotels-list.component',
			'nav-menu.component': 'app/components/nav/nav-menu.component',
			'map.component': 'app/components/map/map.component',
			'featured-hotels.component': 'app/components/featured-hotels/featured-hotels.component',
			'stars-hotels.component': 'app/components/stars-hotels/stars-hotels.component',
			'search-hotel-form.component': 'app/components/search-hotel-form/search-hotel-form.component'
		},
		shim:{
			'angular':{
				exports: 'angular',
				deps:['jquery']
			},
			'angular-router':{
				deps:['angular']
			},
			'angular-resource':{
				deps:['angular']
			}
		}
	});

	require(['app', 'configuration'],
		function(app, config){
			angular.element(document).ready(function() {
			  	angular.bootstrap(document.querySelector('html'), [
			    	config.applicationName
			  	], {
			    	strictDi: true
			  	});
			});
	});
})();
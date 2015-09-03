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

			'home.route':'app/routes/home/home.route',
			'home.controller':'app/routes/home/home.controller',

			'frequent-questions.route':'app/routes/frequent-questions/frequent-questions.route',
			'frequent-questions.controller':'app/routes/frequent-questions/frequent-questions.controller',

			'home.route':'app/routes/home/home.route',
			'home.controller':'app/routes/home/home.controller',

			'award.route':'app/routes/award/award.route',
			'award.controller':'app/routes/award/award.controller',

			'terms-conditions.route':'app/routes/terms-conditions/terms-conditions.route',
			'terms-conditions.controller':'app/routes/terms-conditions/terms-conditions.controller',

			'winners.route':'app/routes/winners/winners.route',
			'winners.controller':'app/routes/winners/winners.controller',

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
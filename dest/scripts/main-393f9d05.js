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
define('partition.filter',['angular'],
	function(){
		'use strict';
		angular.module('partitionFilterModule',[])

			.filter('partition', ['filterStabilize',
				function(stabilize) {
			    	function partition(arr, size) {
			      		var newArr = [];
			      		for (var i=0; i<arr.length; i+=size) {
			        		newArr.push(arr.slice(i, i+size));
			      		}
			      		return newArr;
			    	}
			    	return stabilize(partition);
			  	}
			])
			.factory('filterStabilize', ['memoize',
				function(memoize) {
			    	function service(fn) {
			    		function filter() {
			        		var args = [].slice.call(arguments);
			        		// always pass a copy of the args so that the original input can't be modified
			        		args = angular.copy(args);
			        		// return the `fn` return value or input reference (makes `fn` return optional)
			        		var filtered = fn.apply(this, args) || args[0];
			        		return filtered;
			      		}
			      		var memoized = memoize(filter);
			      		return memoized;
			    	}
			    	return service;
			  	}
			])

			.factory('memoize', [
				function() {
				    function service() {
				    	return memoizeFactory.apply(this, arguments);
				    }
			   		function memoizeFactory(fn) {
			      		var cache = {};
			      		function memoized() {
			        		var args = [].slice.call(arguments);
			        		var key = JSON.stringify(args);
			        		if (cache.hasOwnProperty(key)) {
			          			return cache[key];
			        		}
			        		cache[key] = fn.apply(this, arguments);
			        		return cache[key];
			      		}
			      		return memoized;
			    	}
			    	return service;
				}
			]);
	}
);
define('configuration', [],
	function(){
		'use strict';

		var menuItems = [
			{ title: 'Hoteles', icon: 'flaticon-dwelling1', state:'hotels'  },
			{ title: 'Ayuda', icon: 'flaticon-concentric', state:'about'  }
		];

		var host = 'http://localhost:3000/api';

		return {
			applicationName: 'app',
			serviceBaseUrl: host,
			menuItems: menuItems
		};
	}
);


define('banner-hotel.component',['angular'],
	function(){
		'use strict';

		angular.module('bannerHotelComponentModule',[])
			.directive('bannerHotel',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{

						},
						controllerAs:'bannerHotelCtrl',
						templateUrl: 'app/components/banner-hotel/banner-hotel.template.html',
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('breadcrumbs.component',['angular'],
	function(){
		'use strict';

		angular.module('breadcrumbsComponentModule',[])
			.directive('breadcrumbs',[
				function () {
					var definition = {
							restrict: 'E',
				            replace: true,
				            scope: {

				            },
				            templateUrl: 'app/components/breadcrumbs/breadcrumbs.template.html',
				            controller: ['$scope', function (scope) {

				            }],
				            link: function (scope, element, attrs, controller) {

				            }
					};
					return definition;
				}
			]);
	}
);

define('comment-card.component',['angular'],
	function(){
		'use strict';

		angular.module('commentCardComponentModule',[])
			.directive('commentCard',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{
							comment:"="
						},
						controllerAs:'commentCardCtrl',
						templateUrl: 'app/components/comment-card/comment-card.template.html',
						controller:['$scope',function(scope){
							var self = this;

							self.comment = {};

							function init(){
								self.comment = scope.comment;
							};

							init();

							angular.extend(self, {

							});
						}],
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('comments-list.component',[
		'angular',
		'message.service',
		'comment-card.component'
	],
	function(){
		'use strict';

		angular.module('commentsListComponentModule',[
			'messageServiceModule',
			'commentCardComponentModule'
			])
			.directive('commentsList',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{

						},
						controllerAs:'commentsListCtrl',
						controller:[
							'messageService',
							function(messageService){
								var self = this;
								self.comments = [];

								function getComments(){
									return (messageService.getMessage().$promise);
								}

								function init(){
									console.log("hola");
									getComments().then(function(response){
				                        console.log(response);
				                        self.comments = response;
				                    },function(reason){
				                        console.log(reason);
				                    });

				                    /* messageService.loadMessage().$promise.then(function(response){
				                        console.log(response);
				                    },function(reason){
				                        console.log(reason);
				                    });*/
								}

								init();

								angular.extend(self, {

								});
						}],
						templateUrl: 'app/components/comments-list/comments-list.template.html',
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('featured-hotels.component',['angular'],
	function(){
		'use strict';

		angular.module('featuredHotelsComponentModule',[])
			.directive('featuredHotels',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{

						},
						controllerAs:'featuredHotelsCtrl',
						templateUrl: 'app/components/featured-hotels/featured-hotels.template.html',
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('hotel-card.component',['angular'],
	function(){
		'use strict';

		angular.module('hotelCardComponentModule',[])
			.directive('hotelCard',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{
							hotel: '='
						},
						controllerAs:'hotelCardCtrl',
						templateUrl: 'app/components/hotel-card/hotel-card.template.html',
						controller:['$scope',function(scope){
							var self = this;

							self.hotel = {};

							function init(){
								self.hotel = scope.hotel;
							};

							init();

							angular.extend(self, {

							});
						}],
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('hotels-list.component',[
		'angular',
		'hotels.service',
		'hotel-card.component'
	],
	function(){
		'use strict';

		angular.module('hotelsListComponentModule',[
			'hotelsServiceModule',
			'hotelCardComponentModule'
			])
			.directive('hotelsList',[
				function(scope, hotelsService){
					var definition = {
						restrict: 'E',
						replace: true,
						templateUrl: 'app/components/hotels-list/hotels-list.template.html',
						scope:{

						},
						controllerAs:'hotelsListCtrl',
						controller: [
							'hotelsService',
							function(hotelsService){

								var self = this;

								self.hotels = [];

								function getHotels(){
									return (hotelsService.getHotels().$promise);
								}

								function init(){
									getHotels().then(function(response){
				                        console.log(response);
				                        self.hotels = response;
				                    },function(reason){
				                        console.log(reason);
				                    });
				            	}

				            	init();
							}],
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('map.component',['angular'],
	function(){
		'use strict';

		angular.module('mapComponentModule',[])
			.directive('map',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{

						},
						controllerAs:'mapCtrl',
						templateUrl: 'app/components/map/map.template.html',
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('nav-menu.component',['angular'],
	function(){
		'use strict';

		angular.module('navMenuComponentModule',[])
			.directive('navMenu',[
				function(){
					var definition = {
						restrict: 'E',
						scope:{},
						controllerAs:'navigation',
						bindToController: true,
						templateUrl: 'app/components/nav/nav-menu.template.html',
						replace:true,
						link: function(scope){

						},
						controller: ['$scope',
							function navMenuController(configuration,scope){

								var ctrl = this;

								function isVisible(){
									return true;
								}

								function onStateChange(){
									ctrl.showMenu = true;
								}

								function init(){
									ctrl.items = [
										{ title: 'PREMIOS', icon: '', state:'award'  },
										{ title: 'BASES Y CONDICIONES', icon: '', state:'termsConditions'  },										
										{ title: 'PREGUNTAS FRECUENTES', icon: '', state:'frequentQuestions'  },
										{ title: 'GANADORES', icon: '', state:'winners'  }
									];
								}

								init();
							}
						]
					};

					return definition;
				}
			]);
	}
);

define('search-hotel-form.component',['angular'],
	function(){
		'use strict';

		angular.module('searchHotelFormComponentModule',[])
			.directive('searchHotelForm',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{

						},
						controllerAs:'mapCtrl',
						templateUrl: 'app/components/search-hotel-form/search-hotel-form.template.html',
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('stars-hotels.component',['angular'],
	function(){
		'use strict';

		angular.module('starsHotelsComponentModule',[])
			.directive('starsHotels',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{

						},
						controllerAs:'starsHotelsCtrl',
						templateUrl: 'app/components/stars-hotels/stars-hotels.template.html',
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);

define('about.controller', ['angular'],
	function(){
		'use strict';

		angular.module('aboutControllerModule',[])
			.controller('aboutController',[
                '$scope',
                function(scope){

				}
			]);
	}
);

define('about.route',['about.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('about',{
					url:'/about',
                    templateUrl:'app/routes/about/about.template.html',
					controller:'aboutController as ctrl',
					title:'About'
				});
    	};
	}
);
define('award.controller', ['angular'],
	function(){
		'use strict';

		angular.module('awardControllerModule',[])
			.controller('awardController',[
                '$scope',
                function(scope){

				}
			]);
	}
);

define('award.route',['award.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('award',{
					url:'/award',
                    templateUrl:'app/routes/award/award.template.html',
					controller:'awardController as ctrl',
					title:'Premios'
				});
    	};
	}
);
define('home.controller', ['angular'],
	function(){
		'use strict';

		angular.module('homeControllerModule',[])
			.controller('homeController',[
                '$scope',
                function(scope){

				}
			]);
	}
);

define('home.route',['home.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('home',{
					url:'/',
                    templateUrl:'app/routes/home/home.template.html',
					controller:'homeController as ctrl',
					title:'Home'
				});
    	};
	}
);
define('frequent-questions.controller', ['angular'],
	function(){
		'use strict';

		angular.module('frequentQuestionsControllerModule',[])
			.controller('frequentQuestionsController',[
                '$scope',
                function(scope){

				}
			]);
	}
);

define('frequent-questions.route',['frequent-questions.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('frequentQuestions',{
					url:'/frequentquestions',
                    templateUrl:'app/routes/frequent-questions/frequent-questions.template.html',
					controller:'frequentQuestionsController as ctrl',
					title:'Frequent Questions'
				});
    	};
	}
);
define('hotels.controller', [
        'angular',
        'banner-hotel.component',
        'comments-list.component',
        'featured-hotels.component',
        'hotels-list.component',
        'map.component',
        'search-hotel-form.component',
        'stars-hotels.component'
    ],
	function(){
		'use strict';

		angular.module('hotelsControllerModule',[
            'bannerHotelComponentModule',
            'commentsListComponentModule',
            'featuredHotelsComponentModule',
            'hotelsListComponentModule',
            'mapComponentModule',
            'searchHotelFormComponentModule',
            'starsHotelsComponentModule'])
			.controller('hotelsController',[
                '$scope',
                function(scope){

				}
			]);
	}
);

define('hotels.route',['hotels.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('hotels',{
					url:'/hotels',
					templateUrl:'app/routes/hotels/hotels.template.html',
					controller:'hotelsController as hotelsCtrl',
					title:'Hoteles'
				});
    	};
	}
);
define('winners.controller', ['angular'],
	function(){
		'use strict';

		angular.module('winnersControllerModule',[])
			.controller('winnersController',[
                '$scope',
                function(scope){

				}
			]);
	}
);

define('winners.route',['winners.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('winners',{
					url:'/winners',
                    templateUrl:'app/routes/winners/winners.template.html',
					controller:'winnersController as ctrl',
					title:'Ganadores'
				});
    	};
	}
);
define('hotels.service', ['angular-resource','configuration'],
	function(angularResource, configuration){
		'use strict';

		angular.module('hotelsServiceModule',['ngResource'])
			.factory('hotelsService',['$resource',
				function hotelsService(resource){

                    var getHotels = resource(configuration.serviceBaseUrl + '/hotels');
                    var loadHotels = resource(configuration.serviceBaseUrl + '/hotels/create');

					return {
                        getHotels: getHotels.query,
                        loadHotels: loadHotels.query
                    };
				}
			]);
	}
);

define('terms-conditions.controller', ['angular'],
	function(){
		'use strict';

		angular.module('termsConditionsControllerModule',[])
			.controller('termsConditionsController',[
                '$scope',
                function(scope){

				}
			]);
	}
);

define('terms-conditions.route',['terms-conditions.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('termsConditions',{
					url:'/termsconditions',
                    templateUrl:'app/routes/terms-conditions/terms-conditions.template.html',
					controller:'termsConditionsController as ctrl',
					title:'Terminos y condiciones'
				});
    	};
	}
);
define('message.service', ['angular-resource','configuration'],
	function(angularResource, configuration){
		'use strict';

		angular.module('messageServiceModule',['ngResource'])
			.factory('messageService',['$resource',
				function messageService(resource){

                    var getMessage = resource(configuration.serviceBaseUrl + '/message');

                    var loadMessage = resource(configuration.serviceBaseUrl + '/message/create');

					return {
                        getMessage: getMessage.query,
                        loadMessage: loadMessage.query
                    };
				}
			]);
	}
);

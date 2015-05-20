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
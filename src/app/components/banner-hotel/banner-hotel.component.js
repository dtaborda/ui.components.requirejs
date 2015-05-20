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
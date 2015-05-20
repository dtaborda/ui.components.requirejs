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
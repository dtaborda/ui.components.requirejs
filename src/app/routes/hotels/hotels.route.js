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
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
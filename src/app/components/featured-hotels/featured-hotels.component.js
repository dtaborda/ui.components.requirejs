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
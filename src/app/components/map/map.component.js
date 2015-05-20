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
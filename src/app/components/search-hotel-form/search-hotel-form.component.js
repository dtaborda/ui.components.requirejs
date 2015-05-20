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
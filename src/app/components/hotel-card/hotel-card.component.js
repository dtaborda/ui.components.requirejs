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
						bindToController: true,
						controller:[function(){
							var self = this;

							function init(){

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
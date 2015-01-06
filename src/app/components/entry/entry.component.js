define('entry.component',['angular'],
	function(){
		'use strict';

		angular.module('entryComponentModule',[])
			.directive('entry',[
				function(){
					var definition = {
						restrict: 'E',
						scope:{
							entry: '='
						},
						controllerAs:'entryCtrl',
						bindToController: true,
						templateUrl: 'app/components/entry/entry.template.html',
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);
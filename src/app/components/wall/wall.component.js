define('wall.component',['jquery','angular'],
	function($){
		'use strict';

		angular.module('wallComponentModule',[])
			.directive('wall',[
				function(){
					var definition = {
						restrict: 'E',
						scope:{
							entries: '='
						},
						controllerAs:'wallCtrl',
						bindToController: true,
						templateUrl: 'app/components/wall/wall.template.html'
					};

					return definition;
				}
			])
	}
);
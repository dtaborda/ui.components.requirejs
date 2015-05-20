define('breadcrumbs.component',['angular'],
	function(){
		'use strict';

		angular.module('breadcrumbsComponentModule',[])
			.directive('breadcrumbs',[
				function () {
					var definition = {
							restrict: 'E',
				            replace: true,
				            scope: {

				            },
				            templateUrl: 'app/components/breadcrumbs/breadcrumbs.template.html',
				            controller: ['$scope', function (scope) {

				            }],
				            link: function (scope, element, attrs, controller) {

				            }
					};
					return definition;
				}
			]);
	}
);
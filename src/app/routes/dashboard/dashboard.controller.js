define('dashboard.controller', ['angular','dashboard.service'],
	function(){
		'use strict';

		angular.module('dashboardControllerModule',['dashboardServiceModule'])
			.controller('dashboardController',[
                '$scope',
                'dashboardService',
                function(scope,dashboardService){
                    scope.entries = [];
                    dashboardService.getEntries()
                    .then(function(res) {
                        scope.entries = res.data;
                        console.log(res);
                    }, function(reason) {
                        console.log(reason);
                    });
				}
			]);
	}
);
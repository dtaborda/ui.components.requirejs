define('dashboard.route',['dashboard.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('dashboard',{
					url:'/',
					templateUrl:'app/routes/dashboard/dashboard.template.html',
					controller:'dashboardController as ctrl',
					title:'Dashboard'
				});
    	};
	}
);
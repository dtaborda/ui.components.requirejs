define('home.route',['home.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('home',{
					url:'/',
                    templateUrl:'app/routes/home/home.template.html',
					controller:'homeController as ctrl',
					title:'Home'
				});
    	};
	}
);
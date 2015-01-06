define('login.route',['login.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('login', {
					url: '/login',
					templateUrl: 'app/routes/login/login.template.html',
					controller: 'loginController as ctrl',
					title:'Login'
				});
    	};
	}
);
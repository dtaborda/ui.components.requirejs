define('winners.route',['winners.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('winners',{
					url:'/winners',
                    templateUrl:'app/routes/winners/winners.template.html',
					controller:'winnersController as ctrl',
					title:'Ganadores'
				});
    	};
	}
);
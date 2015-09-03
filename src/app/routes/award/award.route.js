define('award.route',['award.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('award',{
					url:'/award',
                    templateUrl:'app/routes/award/award.template.html',
					controller:'awardController as ctrl',
					title:'Premios'
				});
    	};
	}
);
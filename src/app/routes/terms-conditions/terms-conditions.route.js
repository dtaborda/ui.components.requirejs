define('terms-conditions.route',['terms-conditions.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('termsConditions',{
					url:'/termsconditions',
                    templateUrl:'app/routes/terms-conditions/terms-conditions.template.html',
					controller:'termsConditionsController as ctrl',
					title:'Terminos y condiciones'
				});
    	};
	}
);
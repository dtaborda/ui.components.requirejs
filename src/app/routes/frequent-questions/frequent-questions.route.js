define('frequent-questions.route',['frequent-questions.controller'],
	function(){
		'use strict';

		return function ($stateProvider) {
			$stateProvider
				.state('frequentQuestions',{
					url:'/frequentquestions',
                    templateUrl:'app/routes/frequent-questions/frequent-questions.template.html',
					controller:'frequentQuestionsController as ctrl',
					title:'Frequent Questions'
				});
    	};
	}
);
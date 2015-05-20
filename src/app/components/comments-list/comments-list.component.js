define('comments-list.component',[
		'angular',
		'message.service',
		'comment-card.component'
	],
	function(){
		'use strict';

		angular.module('commentsListComponentModule',[
			'messageServiceModule',
			'commentCardComponentModule'
			])
			.directive('commentsList',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{

						},
						controllerAs:'commentsListCtrl',
						controller:[
							'messageService',
							function(messageService){
								var self = this;
								self.comments = [];

								function getComments(){
									return (messageService.getMessage().$promise);
								}

								function init(){
									console.log("hola");
									getComments().then(function(response){
				                        console.log(response);
				                        self.comments = response;
				                    },function(reason){
				                        console.log(reason);
				                    });

				                    /* messageService.loadMessage().$promise.then(function(response){
				                        console.log(response);
				                    },function(reason){
				                        console.log(reason);
				                    });*/
								}

								init();

								angular.extend(self, {

								});
						}],
						templateUrl: 'app/components/comments-list/comments-list.template.html',
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);
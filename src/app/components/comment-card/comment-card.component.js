define('comment-card.component',['angular'],
	function(){
		'use strict';

		angular.module('commentCardComponentModule',[])
			.directive('commentCard',[
				function(){
					var definition = {
						restrict: 'E',
						replace: true,
						scope:{
							comment:"="
						},
						controllerAs:'commentCardCtrl',
						templateUrl: 'app/components/comment-card/comment-card.template.html',
						controller:['$scope',function(scope){
							var self = this;

							self.comment = {};

							function init(){
								self.comment = scope.comment;
							};

							init();

							angular.extend(self, {

							});
						}],
						link: function(scope){

						}
					};

					return definition;
				}
			]);
	}
);
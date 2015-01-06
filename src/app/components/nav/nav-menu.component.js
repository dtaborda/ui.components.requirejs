define('nav-menu.component',['angular'],
	function(){
		'use strict';

		angular.module('navMenuComponentModule',[])
			.directive('navMenu',[
				function(){
					var definition = {
						restrict: 'E',
						scope:{},
						controllerAs:'navigation',
						bindToController: true,
						templateUrl: 'app/components/nav/nav-menu.template.html',
						replace:true,
						link: function(scope){

						},
						controller: ['$scope',
							function navMenuController(configuration,scope){

								var ctrl = this;

								function isVisible(){
									return true;
								}

								function onStateChange(){
									ctrl.showMenu = true;
								}

								function init(){
									ctrl.items = [
										{ title: 'Dashboard', icon: 'flaticon-dwelling1', state:'dashboard'  },
										{ title: 'About', icon: 'flaticon-menu45', state:'about'  },
										{ title: 'Login', icon: 'flaticon-menu45', state:'login'  }
									];
								}

								init();
							}
						]
					};

					return definition;
				}
			]);
	}
);
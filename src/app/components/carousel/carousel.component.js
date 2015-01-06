define('carousel.component',['jquery','angular'],
	function($,ng,angularCarousel){
		'use strict';

		angular.module('carouselComponentModule',[])
			.directive('tpCarousel',[
				function(){
					var definition = {
						restrict: 'E',
						scope: {
				          items: '=',
				          carouselIndex: '='
				        },
						controllerAs:'carouselCtrl',
						bindToController: true,
						templateUrl: 'app/components/carousel/carousel.template.html',
						link: function($scope){
					      $scope.carouselIndex = $scope.carouselIndex || 0;
					    }
					};

					return definition;
				}
			])
	}
);
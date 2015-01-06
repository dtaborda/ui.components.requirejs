define('login.controller',['angular'],
	function(){
		'use strict';

		angular.module('loginControllerModule', [])
			.controller('loginController',['$scope', function(scope){
					scope.carouselIndex=3;

	                scope.items = [
	                    {
	                        type: 'img',
	                        url: 'http://dummyimage.com/600x400&text=Img%200001',
	                        tmb: 'http://dummyimage.com/80x60&text=Img%200001'
	                    },
	                    {
	                        type: 'img',
	                        url: 'http://dummyimage.com/600x400&text=Img%200002',
	                        tmb: 'http://dummyimage.com/80x60&text=Img%200002'
	                    },
	                    {
	                        type: 'img',
	                        url: 'http://dummyimage.com/600x400&text=Img%200003',
	                        tmb: 'http://dummyimage.com/80x60&text=Img%200003'
	                    },
	                    {
	                        type: 'video',
	                        url: 'https://www.youtube.com/watch?v=18-xvIjH8T4',
	                        tmb: 'http://dummyimage.com/80x60&text=Video'
	                    },
	                    {
	                        type: 'img',
	                        url: 'http://dummyimage.com/600x400&text=Img%200004',
	                        tmb: 'http://dummyimage.com/80x60&text=Img%200004'
	                    },
	                    {
	                        type: 'img',
	                        url: 'http://dummyimage.com/600x400&text=Img%200005',
	                        tmb: 'http://dummyimage.com/80x60&text=Img%200005'
	                    }
	                ]

				}
			]);
	}
);
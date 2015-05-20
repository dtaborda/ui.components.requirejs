define('message.service', ['angular-resource','configuration'],
	function(angularResource, configuration){
		'use strict';

		angular.module('messageServiceModule',['ngResource'])
			.factory('messageService',['$resource',
				function messageService(resource){

                    var getMessage = resource(configuration.serviceBaseUrl + '/message');

                    var loadMessage = resource(configuration.serviceBaseUrl + '/message/create');

					return {
                        getMessage: getMessage.query,
                        loadMessage: loadMessage.query
                    };
				}
			]);
	}
);
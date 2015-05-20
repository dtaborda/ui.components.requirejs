define('hotels.service', ['angular-resource','configuration'],
	function(angularResource, configuration){
		'use strict';

		angular.module('hotelsServiceModule',['ngResource'])
			.factory('hotelsService',['$resource',
				function hotelsService(resource){

                    var getHotels = resource(configuration.serviceBaseUrl + '/hotels');
                    var loadHotels = resource(configuration.serviceBaseUrl + '/hotels/create');

					return {
                        getHotels: getHotels.query,
                        loadHotels: loadHotels.query
                    };
				}
			]);
	}
);
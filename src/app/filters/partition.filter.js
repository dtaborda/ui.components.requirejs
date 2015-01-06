define('partition.filter',['angular'],
	function(){
		'use strict';
		angular.module('partitionFilterModule',[])

			.filter('partition', ['filterStabilize',
				function(stabilize) {
			    	function partition(arr, size) {
			      		var newArr = [];
			      		for (var i=0; i<arr.length; i+=size) {
			        		newArr.push(arr.slice(i, i+size));
			      		}
			      		return newArr;
			    	}
			    	return stabilize(partition);
			  	}
			])
			.factory('filterStabilize', ['memoize',
				function(memoize) {
			    	function service(fn) {
			    		function filter() {
			        		var args = [].slice.call(arguments);
			        		// always pass a copy of the args so that the original input can't be modified
			        		args = angular.copy(args);
			        		// return the `fn` return value or input reference (makes `fn` return optional)
			        		var filtered = fn.apply(this, args) || args[0];
			        		return filtered;
			      		}
			      		var memoized = memoize(filter);
			      		return memoized;
			    	}
			    	return service;
			  	}
			])

			.factory('memoize', [
				function() {
				    function service() {
				    	return memoizeFactory.apply(this, arguments);
				    }
			   		function memoizeFactory(fn) {
			      		var cache = {};
			      		function memoized() {
			        		var args = [].slice.call(arguments);
			        		var key = JSON.stringify(args);
			        		if (cache.hasOwnProperty(key)) {
			          			return cache[key];
			        		}
			        		cache[key] = fn.apply(this, arguments);
			        		return cache[key];
			      		}
			      		return memoized;
			    	}
			    	return service;
				}
			]);
	}
);
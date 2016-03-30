app.factory('insydoApi', function($http, $log, $q) {
	
	return {
	
		getItem: function($itemId) {
	
			var deferred = $q.defer();	
	
			$http({
				url: 'https://api.insydo.com/items/'+$itemId+'/', 
				method: "GET"
			}).success(function(data) { 
			  	deferred.resolve(data);
		   	}).error(function(msg, code) {
				deferred.reject(msg);
				$log.error(msg, code);
		   	});
	
			return deferred.promise;
		}
  	}
 });
app
// Popup Directive
.directive('popup',function(){
    return function(scope, element, attrs){		
		if(attrs.ngApp == 'insydoApp') {
			var welcome = sessionStorage.getItem('welcome');
			if(welcome == null) {
				popup(attrs);	
			}
		} else {
		element.bind("click", function(){
			popup(attrs);
		});
		}
	};
	
});

// Home Controller
app.controller('homeCtrl', function($scope,insydoApi,cfpLoadingBar) {	

	cfpLoadingBar.start();

	var welcome = sessionStorage.getItem('welcone');
	

	$itemId = '4238';

	insydoApi.getItem($itemId).then(function(data) {
	  
	  $scope.detail = data;
	  $scope.images = data._embedded.images;
	  $categories = "";
	  $scope.address = data._embedded.branches[0]._embedded.address;
	  $scope.contact = data._embedded.branches[0]._embedded.contact;
	  $scope.budget = data._embedded.itemtags[1];

	  initMap($scope.address.latitude,$scope.address.longitude);
	  angular.forEach(data._embedded.categories, function(category) {
		  $categories += category.name+', ';
	  });
	  $scope.categories = $categories.slice(0, -2);
	  
	  cfpLoadingBar.complete();
	});
	
	$("#slider").swiperight(function() {  
		$("#slider").carousel('prev');  
	});  

	$("#slider").swipeleft(function() {  
		$("#slider").carousel('next');  
	}); 
	 
	function initMap($lat,$lon) {
    	var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {
		  center: {lat:$lat,lng:$lon},
		  zoom: 13,
		  scrollwheel: false
		});	
		var marker = new google.maps.Marker({
		  position: {lat:$lat,lng:$lon},
		  map: map,
		  icon: 'images/pointer.png'
		});
		
    }
	 
});
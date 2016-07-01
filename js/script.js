var map;
function initMap () {

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.7749, lng: 122.4194},
		scrollwheel: false,
		zoom: 8
	});
	
	var marker = new google.maps.Marker({
		position = {lat: 37.4275, lng: 122.1697},
		map = map;
	});

};

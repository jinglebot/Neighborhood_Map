var map;
function initMap () {

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 122.4194, lng: 37.7749},
		scrollwheel: false,
		zoom: 8
	});

};

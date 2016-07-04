var map;
function initMap () {

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.4275, lng: 122.1697}, // Stanford University
		scrollwheel: false,
		zoom: 12
	});

	var locations = [
	{title: 'First', location: {lat: 37.4275, lng: 122.1697}}
	// , {title: 'Second'},
	// {title: 'Third'}
	];

	var marker = new google.maps.Marker({
		position: locations,
		map: map
	});

	var infoWindow = new google.maps.InfoWindow({
		content: "My first infoWindow"
	});

	marker.addListener('click', function(){
		infoWindow.open(map, marker);
	})

};

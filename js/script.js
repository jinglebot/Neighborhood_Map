var map;
function initMap () {

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		scrollwheel: false,
		zoom: 8
	});
	
	var locations = [
		{title: 'My First infoWindow', location: {lat: -34.397, lng: 150.644}}
	// , {title: 'Second'},
	// {title: 'Third'}
	];

	var marker = new google.maps.Marker({
		position: locations.location,
		map: map,
		title: locations.title
	});

	var infoWindow = new google.maps.InfoWindow({
		content: locations.title
	});

	marker.addListener('click', function(){
		infoWindow.open(map, marker);
	})

};

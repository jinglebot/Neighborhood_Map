var map;
var markers = [];
function initMap () {

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		scrollwheel: false,
		zoom: 8
	});
	
	var locations = [
		{title: 'Great Barrier Reef', location: {lat: -18.15629, lng: 147.485962}}, 
		{title: 'Opera House', location: {lat: -33.8568, lng: 151.2153}},
		{title: 'Bondi Beach', location: {lat: -33.8915, lng: 151.2767}}
	];
	
	var largeInfowindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();

	for (var i = 0; i < locations.length; i++) {
		var position = locations[i].location;
		var title = locations[i].title;
		var marker = new google.maps.Marker({
			position: position,
			map: map,
			title: title,
			animation: google.maps.Animation.DROP,
			id: i
		});

		markers.push(marker);
		bounds.extend(marker.position);
		
		// var infoWindow = new google.maps.InfoWindow({
		// 	content: title
		// });

		marker.addListener('click', function(){
			populateInfoWindow(this, largeInfowindow);
			// infoWindow.open(map, marker);
		});
	
	}
	
	map.fitBounds(bounds);
	
	function populateInfoWindow(marker, infowindow) {
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowiwndow.setContent('<div>' + marker.title + '</div>');
			infowindow.open(map, marker);
			infowindow.addListener('closeclick', function(){
				infowindow.setMarker(null);
			});
		}
	}

};

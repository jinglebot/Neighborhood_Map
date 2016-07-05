var map;
var markers = [];
function initMap () {

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -118.40453, lng: 34.069057},
		scrollwheel: false,
		zoom: 12
	});

	var locations = [
		{title: 'Los Angeles Gold & Silver', location: {street: '427 N. Camden Drive, Suite F', city: 'Beverly Hills, CA 90210'}, latlng: {lat: -118.40453, lng: 34.069057}},
		{title: 'Huntington Rare Coins & Precious Metals', location: {street: '31 W Del Mar Blvd.', city: 'Pasadena, CA 91105'}},
		{title: '310antiques', location: {street: '3159 Donald Douglas Loop South #305', city: 'Santa Monica, CA 90405'}}
	];

	var largeInfowindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();

	for (var i = 0; i < locations.length; i++) {
		var position = locations[i].location.street + ' ' + locations[i].location.city;
		var title = locations[i].title;
		var latlng = locations[i].latlng;
		var marker = new google.maps.Marker({
			position: position,
			map: map,
			title: title,
			animation: google.maps.Animation.DROP,
			id: i
		});

		markers.push(marker);
		bounds.extend(marker.latlng);

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

	// var marker = new google.maps.Marker({
	// 	position: locations,
	// 	map: map
	// });

	// marker.addListener('click', function(){
	// 	infoWindow.open(map, marker);
	// })

};

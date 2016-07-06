var map;
var markers = [];
function initMap () {

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -118.40453, lng: 34.069057},
		scrollwheel: false,
		zoom: 13
	});

	var locations = [
		{title: '310antiques', location: {street: '3159 Donald Douglas Loop South #305', city: 'Santa Monica, CA 90405'}, latlng: {lat: 34.017094, lng: -118.446815}},
		{title: 'A Coin Exchange', location: {street: '18631 Ventura Blvd.', city: 'Tarzana, CA 91356'}, latlng: {lat: 34.170143, lng:  -118.53939}},
		{title: 'Collectors Internet', location: {street: '7510 Sunset Blvd. #183', city: 'Los Angeles, CA 90046'}, latlng: {lat: 34.09802, lng:  -118.35311}},
		{title: 'Los Angeles Gold & Silver', location: {street: '427 N. Camden Drive, Suite F', city: 'Beverly Hills, CA 90210'}, latlng: {lat: 34.069057, lng: -118.40453}},
		{title: 'Jewelry 1on1', location: {street: '5351 Topanga Canyon Blvd.', city: 'Woodland Hills CA 91364'}, latlng: {lat: 34.167366, lng: -118.60577}},
		{title: 'Meridian Coin', location: {street: '22330 Hawthorne Blvd Suite C', city: 'Torrance, CA 90505'}, latlng: {lat: 33.82483, lng: -118.35113}},
		{title: 'Pacific Coast Coin & Currency', location: {street: '11696 Ventura Blvd.', city: 'Studio City, CA 91604'}, latlng: {lat: 34.14116, lng: -118.38743}},
		{title: 'Paul Albarian & Associates', location: {street: '3500 West Olive Ave. 3F, Suite 300', city: 'Burbank, CA 91505'}, latlng: {lat: 34.15284, lng: -118.33816}},
		{title: 'South Bay Gold + Finley’s Jewelers', location: {street: '3804 Sepulveda Blvd Suite C', city: 'Torrance, Ca 90505'}, latlng: {lat: 33.825577, lng: -118.35147}},
		{title: 'Southern California Coins & Stamps', location: {street: '7635 Firestone Blvd.', city: 'Downey, CA 90241'}, latlng: {lat: 33.946266, lng: -118.14451}},
		{title: 'Wilshire Coin', location: {street: '1312 Lincoln Blvd.', city: 'Santa Monica CA 90401'}, latlng: {lat: 34.020596, lng: -118.49259}},
		{title: 'Huntington Rare Coins & Precious Metals', location: {street: '31 W Del Mar Blvd.', city: 'Pasadena, CA 91105'}, latlng: {lat: 34.140766, lng: -118.15207}}
	];

	var largeInfowindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();

	for (var i = 0; i < locations.length; i++) {
		// var position = locations[i].latlng;
		var title = locations[i].title;
		var loc = location[i].location.street + ' ' + location[i].location.city;
		var lat = loc.geometry.location.lat();
		var lng = loc.geometry.location.lng();  
		var position = lat + ', ' + lng;
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
			infowindow.setContent('<div>' + marker.title + '</div>');
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

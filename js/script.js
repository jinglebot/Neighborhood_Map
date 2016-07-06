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
		{title: '310antiques', location: {street: '3159 Donald Douglas Loop South #305', city: 'Santa Monica, CA 90405'}},
		{title: 'A Coin Exchange', location: {street: '18631 Ventura Blvd.', city: 'Tarzana, CA 91356'}},
		{title: 'Collectors Internet', location: {street: '7510 Sunset Blvd. #183', city: 'Los Angeles, CA 90046'}},
		{title: 'Los Angeles Gold & Silver', location: {street: '427 N. Camden Drive, Suite F', city: 'Beverly Hills, CA 90210'}},
		{title: 'Jewelry 1on1', location: {street: '5351 Topanga Canyon Blvd.', city: 'Woodland Hills CA 91364'}},
		{title: 'Meridian Coin', location: {street: '22330 Hawthorne Blvd Suite C', city: 'Torrance, CA 90505'}},
		{title: 'Pacific Coast Coin & Currency', location: {street: '11696 Ventura Blvd.', city: 'Studio City, CA 91604'}},
		{title: 'Paul Albarian & Associates', location: {street: '3500 West Olive Ave. 3F, Suite 300', city: 'Burbank, CA 91505'}},
		{title: 'South Bay Gold + Finley’s Jewelers', location: {street: '3804 Sepulveda Blvd Suite C', city: 'Torrance, Ca 90505'}},
		{title: 'Southern California Coins & Stamps', location: {street: '7635 Firestone Blvd.', city: 'Downey, CA 90241'}},
		{title: 'Wilshire Coin', location: {street: '1312 Lincoln Blvd.', city: 'Santa Monica CA 90401'}},
		{title: 'Huntington Rare Coins & Precious Metals', location: {street: '31 W Del Mar Blvd.', city: 'Pasadena, CA 91105'}}
	];

	var largeInfowindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < locations.length; i++) {
		var address = locations[i].location.street + ' ' + locations[i].location.city;
		var lat = address.geometry.location.lat();
		var lng = address.geometry.location.lng();
		var latlng = '{lat: ' + lat + ', lng: ' + lng + '}';
		locations[i].latlng = latlng;
	// }

	// for (var i = 0; i < locations.length; i++) {
		var position = locations[i].latlng;
		var title = locations[i].title;
		// var latlng = locations[i].latlng;
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

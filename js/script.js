(function() {
	// console.log("inside script.js");
	// MODEL
	var locations = [
		{
			"title": '310antiques',
			"street": '3159 Donald Douglas Loop South #305',
			"city": 'Santa Monica, CA 90405',
			"latlng": {lat: 34.017094, lng: -118.446815}
		},
		{
			"title": 'A Coin Exchange',
			"street": '18631 Ventura Blvd.',
			"city": 'Tarzana, CA 91356',
			"latlng": {lat: 34.170143, lng:  -118.53939}
		},
		{
			"title": 'Collectors Internet',
			"street": '7510 Sunset Blvd. #183',
			"city": 'Los Angeles, CA 90046',
			"latlng": {lat: 34.09802, lng:  -118.35311}
		},
		{
			"title": 'Los Angeles Gold & Silver',
			"street": '427 N. Camden Drive, Suite F',
			"city": 'Beverly Hills, CA 90210',
			"latlng": {lat: 34.069057, lng: -118.40453}
		},
		{
			"title": 'Jewelry 1on1',
			"street": '5351 Topanga Canyon Blvd.',
			"city": 'Woodland Hills CA 91364',
			"latlng": {lat: 34.167366, lng: -118.60577}
		},
		{
			"title": 'Meridian Coin',
			"street": '22330 Hawthorne Blvd Suite C',
			"city": 'Torrance, CA 90505',
			"latlng": {lat: 33.82483, lng: -118.35113}
		},
		{
			"title": 'Pacific Coast Coin & Currency',
			"street": '11696 Ventura Blvd.',
			"city": 'Studio City, CA 91604',
			"latlng": {lat: 34.14116, lng: -118.38743}
		},
		{
			"title": 'Paul Albarian & Associates',
			"street": '3500 West Olive Ave. 3F, Suite 300',
			"city": 'Burbank, CA 91505',
			"latlng": {lat: 34.15284, lng: -118.33816}
		},
		{
			"title": 'South Bay Gold + Finley’s Jewelers',
			"street": '3804 Sepulveda Blvd Suite C',
			"city": 'Torrance, Ca 90505',
			"latlng": {lat: 33.825577, lng: -118.35147}
		},
		{
			"title": 'Southern California Coins & Stamps',
			"street": '7635 Firestone Blvd.',
			"city": 'Downey, CA 90241',
			"latlng": {lat: 33.946266, lng:-118.14451}
		},
		{
			"title": 'Wilshire Coin',
			"street": '1312 Lincoln Blvd.',
			"city": 'Santa Monica CA 90401',
			"latlng": {lat: 34.020596, lng: -118.49259}
		},
		{
			"title": 'Huntington Rare Coins & Precious Metals',
			"street": '31 W Del Mar Blvd.',
			"city": 'Pasadena, CA 91105',
			"latlng": {lat: 34.140766, lng: -118.15207}
		}
	];


	// VIEW
	var view = {
		initList: function() {
			var item = document.getElementById("u-list");
			var formattedTitle = '<li>%data%</li>';
			for (var i = 0; i < locations.length; i++) {
				var htmlTitle = formattedTitle.replace("%data%", locations[i].title);
				$(item).append(htmlTitle);
			}
		},
		initMap: function() {
			// var map = new google.maps.Map(document.getElementById('map'), {
			// 	center: {lat: -118.40453, lng: 34.069057},
			// 	scrollwheel: false,
			// 	zoom: 13
			// });
		}
	};

	var viewmodel = {
		init: function() {
			// Initialize list
			view.initList();

			// Initialize map
			view.initMap();

			// Initialize search bar
			var searchBar = document.getElementById("searchbar");
			searchBar.value="Filter by name, address, city, zipcode";
			searchBar.addEventListener("input", viewmodel.filterSearch, false);
			var filterButton = document.getElementById("filterbutton");
			filterButton.addEventListener("click", viewmodel.buttonClicked, false);
		},
/*TODO*/
		filterSearch: function() {	// Filters out locations similar to input value
			console.log(this.value);
			// find similar data from locations array
			// for (var i = 0; i < locations.length; i++) { 	// for every object in array locations
			// 	foreach (var obj in locations[i]) {			// for every property in each object
			// 		foreach (var letter in property value.length) {	// for each letter in the property value
			// 			var excerpt = splice(letter, this.length);	// splice thru the property value to compare if equal to this.name
			// 			if (this.value == excerpt) { // if equal to this.name
							// erase all <li>
							// put in new <li> property name and value
			// display all
			// 			}
			// 		}
			// 	}
			// }
		},
		buttonClicked: function() {
			// put markers of new <li> on map
		}
	};

	viewmodel.init();

// var map;
// var markers = [];
// var geocoder;

// //VIEW
// function initMap () {

// 	// Create a map object and specify the DOM element for display.
// 	// VIEW INITIAL DISPLAY
// 	var map = new google.maps.Map(document.getElementById('map'), {
// 		center: {lat: -118.40453, lng: 34.069057},
// 		scrollwheel: false,
// 		zoom: 13
// 	});

// 	// VIEW INITIAL DISPLAY
// 	geocoder = new google.maps.Geocoder();
// 	var largeInfowindow = new google.maps.InfoWindow();
// 	var bounds = new google.maps.LatLngBounds();

// 	function codeAddress(address) {
// 		geocoder.geocode({'address': address}, function(results, status){
// 			if (status == google.maps.GeocoderStatus.OK){
// 				address.position = address.geometry.location;
// 			}
// 		});
// 	}

// 	// VIEW INITIAL DISPLAY
// 	for (var i = 0; i < locations.length; i++) {
// 		var  "title" = locations[i]. "title";
// 		var address = locations[i].location.street + ' ' + locations[i].location.city;
// 		codeAddress(address);
// 		var marker = new google.maps.Marker({
// 			position: address.position,
// 			map: map,
// 			 "title":  "title",
// 			animation: google.maps.Animation.DROP,
// 			id: i
// 		});

// 		markers.push(marker);
// 		bounds.extend(marker.position);

// 		marker.addListener('click', function(){
// 			populateInfoWindow(this, largeInfowindow);
// 			// infoWindow.open(map, marker);
// 		});

// 	}

// 	map.fitBounds(bounds);

// 	function populateInfoWindow(marker, infowindow) {
// 		if (infowindow.marker != marker) {
// 			infowindow.marker = marker;
// 			infowindow.setContent('<div>' + marker. "title" + '</div>');
// 			infowindow.open(map, marker);
// 			infowindow.addListener('closeclick', function(){
// 				infowindow.setMarker(null);
// 			});
// 		}
// 	}
// };

// /*
// 	var model = {
// 		include array of locations
// 	};
// 	var octopus = {
// 		include functions to init list
// 		include functions to filter list
// 		? include click listener
// 	};
// 	var view = {
// 		include filter input box
// 		include list box
// 		include map box
// 		? include click listener for show and hide info
// 		? include animation when clicked
// 	};

// */
// // VIEW INITIAL DISPLAY
// var map;
// var markers = [];

// // VIEW INITIAL DISPLAY
// function initMap () {

// 	// Create a map object and specify the DOM element for display.
// 	// VIEW INITIAL DISPLAY
// 	var map = new google.maps.Map(document.getElementById('map'), {
// 		center: {lat: -118.40453, lng: 34.069057},
// 		scrollwheel: false,
// 		zoom: 13
// 	});

// 	// MODEL
// 	var locations = [
// 		// { "title": '310antiques', location: {street: '3159 Donald Douglas Loop South #305', city: 'Santa Monica, CA 90405'}, latlng: {lat: 34.017094, lng: -118.446815}},
// 		// { "title": 'A Coin Exchange', location: {street: '18631 Ventura Blvd.', city: 'Tarzana, CA 91356'}, latlng: {lat: 34.170143, lng:  -118.53939}},
// 		// { "title": 'Collectors Internet', location: {street: '7510 Sunset Blvd. #183', city: 'Los Angeles, CA 90046'}, latlng: {lat: 34.09802, lng:  -118.35311}},
// 		// { "title": 'Los Angeles Gold & Silver', location: {street: '427 N. Camden Drive, Suite F', city: 'Beverly Hills, CA 90210'}, latlng: {lat: 34.069057, lng: -118.40453}},
// 		// { "title": 'Jewelry 1on1', location: {street: '5351 Topanga Canyon Blvd.', city: 'Woodland Hills CA 91364'}, latlng: {lat: 34.167366, lng: -118.60577}},
// 		// { "title": 'Meridian Coin', location: {street: '22330 Hawthorne Blvd Suite C', city: 'Torrance, CA 90505'}, latlng: {lat: 33.82483, lng: -118.35113}},
// 		// { "title": 'Pacific Coast Coin & Currency', location: {street: '11696 Ventura Blvd.', city: 'Studio City, CA 91604'}, latlng: {lat: 34.14116, lng: -118.38743}},
// 		// { "title": 'Paul Albarian & Associates', location: {street: '3500 West Olive Ave. 3F, Suite 300', city: 'Burbank, CA 91505'}, latlng: {lat: 34.15284, lng: -118.33816}},
// 		// { "title": 'South Bay Gold + Finley’s Jewelers', location: {street: '3804 Sepulveda Blvd Suite C', city: 'Torrance, Ca 90505'}, latlng: {lat: 33.825577, lng: -118.35147}},
// 		// { "title": 'Southern California Coins & Stamps', location: {street: '7635 Firestone Blvd.', city: 'Downey, CA 90241'}, latlng: {lat: 33.946266, lng: -118.14451}},
// 		// { "title": 'Wilshire Coin', location: {street: '1312 Lincoln Blvd.', city: 'Santa Monica CA 90401'}, latlng: {lat: 34.020596, lng: -118.49259}},
// 		{ "title": 'Huntington Rare Coins & Precious Metals', location: {street: '31 W Del Mar Blvd.', city: 'Pasadena, CA 91105'}, latlng: {lat: 34.140766, lng: -118.15207}}
// 	];

// 	// VIEW INITIAL DISPLAY
// 	var largeInfowindow = new google.maps.InfoWindow();
// 	var bounds = new google.maps.LatLngBounds();

// 	// VIEW DISPLAY
// 	function createMapMarker(placeData) {
// 		var lat = placeData.geometry.location.lat();  // latitude from the place service
// 		var lon = placeData.geometry.location.lng();  // longitude from the place service
// 		var latlng = 'lat: ' + lat + ', ' + 'lng: ' + lon;
// 		// var name = placeData.formatted_address;   // name of the place from the place service
// 		var position = placeData.geometry.location;
// 		return latlng;
// 		// var bounds = window.mapBounds;            // current boundaries of the map window
// 		// var marker = new google.maps.Marker({
// 		// 	map: map,
// 		// 	position: placeData.geometry.location,
// 		// 	 "title": name
// 		// });

//     // infoWindows are the little helper windows that open when you click
//     // or hover over a pin on a map. They usually contain more information
//     // about a location.
// 		// var contentString = '<div id="content" class="center-content">'+'<h3><b>'+name+'</b></h3>'+'</div>';

// 		// var infoWindow = new google.maps.InfoWindow({
// 		// 	content: contentString
// 		// });

//     // hmmmm, I wonder what this is about...
// 		// google.maps.event.addListener(marker, 'click', function() {
// 	// your code goes here!
// 			// infoWindow.open(map, marker);
// 		// });

//     // this is where the pin actually gets added to the map.
//     // bounds.extend() takes in a map location object
// 		// bounds.extend(new google.maps.LatLng(lat, lon));
//     // fit the map to the new marker
// 		// map.fitBounds(bounds);
//     // center the map
// 		// map.setCenter(bounds.getCenter());
// 	}

// 	// VIEW INITIAL DISPLAY
// 	for (var i = 0; i < locations.length; i++) {
// 		// var position = locations[i].latlng;
// 		var  "title" = locations[i]. "title";
// 		var loc = locations[i].location.street + ', ' + locations[i].location.city;
// 		// var loc = locations[i].location;
// 		// var lat = loc.geometry.location.lat();
// 		// var lng = loc.geometry.location.lng();
// 		var position = createMapMarker(loc);
// 		var marker = new google.maps.Marker({
// 			position: position,
// 			map: map,
// 			 "title":  "title",
// 			animation: google.maps.Animation.DROP,
// 			id: i
// 		});

// 		markers.push(marker);
// 		bounds.extend(marker.position);

// 		// var infoWindow = new google.maps.InfoWindow({
// 		// 	content:  "title"
// 		// });

// 		marker.addListener('click', function(){
// 			populateInfoWindow(this, largeInfowindow);
// 			// infoWindow.open(map, marker);
// 		});

// 	}

// 	map.fitBounds(bounds);

// 	function populateInfoWindow(marker, infowindow) {
// 		if (infowindow.marker != marker) {
// 			infowindow.marker = marker;
// 			infowindow.setContent('<div>' + marker. "title" + '</div>');
// 			infowindow.open(map, marker);
// 			infowindow.addListener('closeclick', function(){
// 				infowindow.setMarker(null);
// 			});
// 		}
// 	}

// 	// var marker = new google.maps.Marker({
// 	// 	position: locations,
// 	// 	map: map
// 	// });

// 	// marker.addListener('click', function(){
// 	// 	infoWindow.open(map, marker);
// 	// })

// };

/*
	var model = {
		include array of locations
	};
	var octopus = {
		include functions to init list
		include functions to filter list
		? include click listener
	};
	var view = {
		include filter input box
		include list box
		include map box
		? include click listener for show and hide info
		? include animation when clicked
	};
*/
}());
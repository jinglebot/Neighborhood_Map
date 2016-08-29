// (function() {
	// MODEL
	var initLocations = [
		{
			title: '310antiques',
			street: '3159 Donald Douglas Loop South #305',
			city: 'Santa Monica, CA 90405',
			loc: ['lat: 34.017094', 'lng: -118.446815']
		},
		{
			title: 'A Coin Exchange',
			street: '18631 Ventura Blvd.',
			city: 'Tarzana, CA 91356',
			loc: ['lat: 34.170143', 'lng: -118.53939']
		},
	// 	{
	// 		title: 'Collectors Internet',
	// 		street: '7510 Sunset Blvd. #183',
	// 		city: 'Los Angeles, CA 90046',
	// 		location: {lat: 34.09802, lng:  -118.35311}
	// 	},
	// 	{
	// 		title: 'Los Angeles Gold & Silver',
	// 		street: '427 N. Camden Drive, Suite F',
	// 		city: 'Beverly Hills, CA 90210',
	// 		location: {lat: 34.069057, lng: -118.40453}
	// 	},
	// 	{
	// 		title: 'Jewelry 1on1',
	// 		street: '5351 Topanga Canyon Blvd.',
	// 		city: 'Woodland Hills CA 91364',
	// 		location: {lat: 34.167366, lng: -118.60577}
	// 	},
	// 	{
	// 		title: 'Meridian Coin',
	// 		street: '22330 Hawthorne Blvd Suite C',
	// 		city: 'Torrance, CA 90505',
	// 		location: {lat: 33.82483, lng: -118.35113}
	// 	},
	// 	{
	// 		title: 'Pacific Coast Coin & Currency',
	// 		street: '11696 Ventura Blvd.',
	// 		city: 'Studio City, CA 91604',
	// 		location: {lat: 34.14116, lng: -118.38743}
	// 	},
	// 	{
	// 		title: 'Paul Albarian & Associates',
	// 		street: '3500 West Olive Ave. 3F, Suite 300',
	// 		city: 'Burbank, CA 91505',
	// 		location: {lat: 34.15284, lng: -118.33816}
	// 	},
	// 	{
	// 		title: 'South Bay Gold + Finley’s Jewelers',
	// 		street: '3804 Sepulveda Blvd Suite C',
	// 		city: 'Torrance, Ca 90505',
	// 		location: {lat: 33.825577, lng: -118.35147}
	// 	},
	// 	{
	// 		title: 'Southern California Coins & Stamps',
	// 		street: '7635 Firestone Blvd.',
	// 		city: 'Downey, CA 90241',
	// 		location: {lat: 33.946266, lng:-118.14451}
	// 	},
	// 	{
	// 		title: 'Wilshire Coin',
	// 		street: '1312 Lincoln Blvd.',
	// 		city: 'Santa Monica CA 90401',
	// 		location: {lat: 34.020596, lng: -118.49259}
	// 	},
		{
			title: 'Huntington Rare Coins & Precious Metals',
			street: '31 W Del Mar Blvd.',
			city: 'Pasadena, CA 91105',
			loc: ['lat: 34.140766', 'lng: -118.15207']
		}
	];

	var Locate = function(data) {
			this.title = data.title;
			this.street = data.street;
			this.city = data.city;
			this.loc = data.loc;
	};

	// VIEW
	var View = function () {
		// initList: function() {
	// var map;
	// var markers = [];
	// function initMap () {

	// Create a map object and specify the DOM element for display.
	// var map = new google.maps.Map(document.getElementById('map'), {
	// 	center: {lat: -118.40453, lng: 34.069057},
	// 	scrollwheel: false,
	// 	zoom: 13
	// });

	// function initMap () {

		// Create a map object and specify the DOM element for display.
		var map;
		var markers = [];
		var geocoder;

		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -118.40453, lng: 34.069057},
			scrollwheel: false,
			zoom: 13
		});
	// }


	// var largeInfowindow = new google.maps.InfoWindow();
	// var bounds = new google.maps.LatLngBounds();
	// function createMapMarker(placeData) {
	// 	var lat = placeData.geometry.location.lat();  // latitude from the place service
	// 	var lon = placeData.geometry.location.lng();  // longitude from the place service
	// 	var latlng = 'lat: ' + lat + ', ' + 'lng: ' + lon;
		// var name = placeData.formatted_address;   // name of the place from the place service
		// var position = placeData.geometry.location;
		// return latlng;
		// var bounds = window.mapBounds;            // current boundaries of the map window
		// var marker = new google.maps.Marker({
		// 	map: map,
		// 	position: placeData.geometry.location,
		// 	title: name
		// });

		// var contentString = '<div id="content" class="center-content">'+'<h3><b>'+name+'</b></h3>'+'</div>';

		// var infoWindow = new google.maps.InfoWindow({
		// 	content: contentString
		// });

		// google.maps.event.addListener(marker, 'click', function() {
			// infoWindow.open(map, marker);
		// });

	    // bounds.extend() takes in a map location object
		// bounds.extend(new google.maps.LatLng(lat, lon));
    	// fit the map to the new marker
		// map.fitBounds(bounds);
    	// center the map
		// map.setCenter(bounds.getCenter());
	}

	// for (var i = 0; i < locations.length; i++) {
	// 	// var position = locations[i].latlng;
	// 	var title = locations[i].title;
	// 	var loc = locations[i].location.street + ', ' + locations[i].location.city;
		// var loc = locations[i].location;
		// var lat = loc.geometry.location.lat();
		// var lng = loc.geometry.location.lng();
		// var position = createMapMarker(loc);
		// var marker = new google.maps.Marker({
		// 	position: position,
		// 	map: map,
		// 	title: title,
		// 	animation: google.maps.Animation.DROP,
		// 	id: i
		// });



	};

	var ViewModel = function() {

		// initialize View
		View();

		// self === ViewModel
		var self = this;

		// viewmodel's array declaration
		this.locationList = ko.observableArray([]);

		// initializes and stores locationList with items from initLocations
		initLocations.forEach(function(locItem){
			var loc = new Locate(locItem);
			self.locationList.push( loc );
		});

	// Search bar

		// save input value
		this.searchBar = ko.observable("");
		this.searchArray = ko.observableArray([]);

// TODO: how to filter array
		// Filters out locations in input value
		// on change of searchBar input
		this.setFilter = function() {
			console.log("hi");
		};

// TODO:
		// save input value to searchBar
		// connect searchBar to locationList
		// filter locationList
			// find similar data from locations array
			// for (var i = 0; i < locationList.length; i++) { 	// for every object in array locations
			//		var loc = locationList[i];
			// 		foreach (var n in loc) {			// for every property in each object
			//			var prop = loc[n];
			// 			foreach (var letter in prop.title) {	// for each letter in the property value
			// 				var excerpt = splice(letter, prop.title);	// splice thru the property value to compare if equal to this.name
			// 				if (searchBar == excerpt) {
			//					put display = visible
			// }	}	}	}
			// erase all <li>
			// display new <ul> with property = visible
			// if searchBar = " " () {
			// 		display all or refresh }
			//  put markers of new <li> on map == markers of filtered locationList

	};

	ko.applyBindings(new ViewModel() );

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
// 		// 	 title: name
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


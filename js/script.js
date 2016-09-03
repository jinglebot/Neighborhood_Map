// (function() {
	// MODEL
	var initLocations = [
		{
			title: '310antiques',
			street: '3159 Donald Douglas Loop South #305',
			city: 'Santa Monica, CA 90405',
			loc: {lat: 34.017094, lng: -118.446815}
		},
		{
			title: 'A Coin Exchange',
			street: '18631 Ventura Blvd.',
			city: 'Tarzana, CA 91356',
			loc: {lat: 34.170143, lng: -118.53939}
		},
		{
			title: 'Collectors Internet',
			street: '7510 Sunset Blvd. #183',
			city: 'Los Angeles, CA 90046',
			loc: {lat: 34.09802, lng:  -118.35311}
		},
		{
			title: 'Los Angeles Gold & Silver',
			street: '427 N. Camden Drive, Suite F',
			city: 'Beverly Hills, CA 90210',
			loc: {lat: 34.069057, lng: -118.40453}
		},
		{
			title: 'Jewelry 1on1',
			street: '5351 Topanga Canyon Blvd.',
			city: 'Woodland Hills CA 91364',
			loc: {lat: 34.167366, lng: -118.60577}
		},
		{
			title: 'Meridian Coin',
			street: '22330 Hawthorne Blvd Suite C',
			city: 'Torrance, CA 90505',
			loc: {lat: 33.82483, lng: -118.35113}
		},
		{
			title: 'Pacific Coast Coin & Currency',
			street: '11696 Ventura Blvd.',
			city: 'Studio City, CA 91604',
			loc: {lat: 34.14116, lng: -118.38743}
		},
		{
			title: 'Paul Albarian & Associates',
			street: '3500 West Olive Ave. 3F, Suite 300',
			city: 'Burbank, CA 91505',
			loc: {lat: 34.15284, lng: -118.33816}
		},
		{
			title: 'South Bay Gold + Finley’s Jewelers',
			street: '3804 Sepulveda Blvd Suite C',
			city: 'Torrance, Ca 90505',
			loc: {lat: 33.825577, lng: -118.35147}
		},
		{
			title: 'Southern California Coins & Stamps',
			street: '7635 Firestone Blvd.',
			city: 'Downey, CA 90241',
			loc: {lat: 33.946266, lng:-118.14451}
		},
		{
			title: 'Wilshire Coin',
			street: '1312 Lincoln Blvd.',
			city: 'Santa Monica CA 90401',
			loc: {lat: 34.020596, lng: -118.49259}
		},
		{
			title: 'Huntington Rare Coins & Precious Metals',
			street: '31 W Del Mar Blvd.',
			city: 'Pasadena, CA 91105',
			loc: {lat: 34.134558, lng: -118.322478}
		}
	];

	var Locate = function(data) {
			this.title = data.title;
			this.street = data.street;
			this.city = data.city;
			this.loc = data.loc;
	};

	// VIEW
	var map;
	var markers = [];

	function initMap() {
		// make map
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 34.134558, lng:-118.322478},
			scrollwheel: false,
			zoom: 13
		});

		// make markers
		var largeInfowindow = new google.maps.InfoWindow();
		var bounds = new google.maps.LatLngBounds();

		for (var i = 0; i < initLocations.length; i++) { 	// for every object in array locations
			var title = initLocations[i].title;
			var position = initLocations[i].loc;
			// console.log(position);
			var marker = new google.maps.Marker({
				map: map,
				position: position,
				title: title,
				animation: google.maps.Animation.DROP,
				id: title
			});

			markers.push(marker);
			bounds.extend(marker.position);
			marker.addListener('click', function() {
				populateInfowindow(this, largeInfowindow);
			});
		}

		// for checking
		// for (var i = 0; i < markers.length; i++){
		// 	console.log(markers[i].title);
		// }

		map.fitBounds(bounds);
		map.setCenter(bounds.getCenter());
	}

	// for each marker's infowindow
	function populateInfowindow(marker, infowindow) {
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<div id="content" class="center-content">'+'<h3><b>'+ marker.title +'</b></h3>'+'</div>');
			infowindow.open(map, marker);
			// infowindow.addListener('closeclick', function(){
			// 	infowindow.setMarker(null);
			// });
		}
	}


	var ViewModel = function() {
		// self === ViewModel
		var self = this;

		// viewmodel's array
		this.locationList = ko.observableArray([]);

		// initializes locationList array with items from initLocations array
		initLocations.forEach(function(locItem){
			var loc = new Locate(locItem);
			self.locationList.push( loc );
		});

		// viewmodel's filter storage
		this.searchBar = ko.observable("");

		// initializes locationList array items as visible
		this.locationList().forEach(function(locItem){
			locItem.showItem = ko.observable(true);
			 //console.log(locItem.showItem());
		});

		// viewmodel's filtered list storage
		this.filteredLocationList = ko.computed(function() {
			// if searchBar is empty
			if (!self.searchBar() ) {
				return self.locationList();
			} else {
				// get the array elements
				return ko.utils.arrayFilter(self.locationList(), function(prod) {
					// get the array elements title
					var title = prod.title;
					// compare title to searchBar
					// for (var i = 0; i < title.length; i++ ) {
					if (title != self.searchBar()) {
						prod.showItem(false);
						console.log(title + " " + prod.showItem());
						return prod.showItem();
					}
				});
			}
		});

// TODO:
		// filter list
		// connect searchBar to locationList to filter list
		// put markers of  <ul> on map == markers of filtered locationList
		// connect listener for clicking list to show marker and infowindow

// Qs:
		// do you filter locationList or do you make a new array? standard or knockout?
		// how do you get google to work inside Viewmodel so I can put markers on locationList?

	};

	ko.applyBindings(new ViewModel() );

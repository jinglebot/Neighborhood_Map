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

	var initMap = function() {
		// make map
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 34.134558, lng:-118.322478}, // Hollywood Sign, Los Angeles, CA
			scrollwheel: false,
			zoom: 13
		});

		ko.applyBindings(new ViewModel() );
	};

	// for each marker's infowindow
	var populateInfowindow =  function(marker, infowindow) {
		if (infowindow.marker != marker) {
				// https://api.yelp.com/v2/search?term=location=marker.address;
			infowindow.marker = marker;
			infowindow.setContent('<div id="content" class="center-content">'+'<h4><b>'+ marker.title +'</b></h4>'+'<div>'+ marker.street +', '+ marker.city +'</div>'+'<div>Yelp Review</div>'+'</div>');
			infowindow.open(map, marker);
		}
	};



	var ViewModel = function() {
		// self === ViewModel
		var self = this;

		// ViewModel's array
		this.locationList = ko.observableArray([]);

		// initializes locationList array with initLocations array
		initLocations.forEach(function(locItem){
			var loc = new Locate(locItem);
			self.locationList.push( loc );
		});

		// ViewModel's filter storage
		this.searchBar = ko.observable("");

		// initialize infowindows and boundaries
		var largeInfowindow = new google.maps.InfoWindow();
		var bounds = new google.maps.LatLngBounds();

		// make markers in locationList array
		self.locationList().forEach(function (locItem) {
			var title = locItem.title;
			var position = locItem.loc;
			var street = locItem.street;
			var city = locItem.city;
			var marker = new google.maps.Marker({
				// map: map,
				title: title,
				position: position,
				street: street,
				city: city,
				animation: google.maps.Animation.DROP,
				// visible: true,
				id: title
    			});
			marker.addListener('click', function() {
				populateInfowindow(this, largeInfowindow);
			});
			// console.log(marker.position);
			locItem.marker = marker;
		});

		// open marker infowindow by clicking location list titles
		this.openInfowindow = function(data) {
			populateInfowindow(data.marker, largeInfowindow);
		};

		// ViewModel's filter locationList
		this.filteredLocationList = ko.computed(function() {
			return ko.utils.arrayFilter(self.locationList(), function(locate) {
				if ( !self.searchBar() || (locate.title.toLowerCase().indexOf(self.searchBar().toLowerCase()) >= 0) ) { 
					locate.marker.setVisible(true); 
					locate.marker.setMap(map); 
					bounds.extend(locate.marker.position);
					// console.log(locate.marker.position);
					map.fitBounds(bounds);
					map.setCenter(bounds.getCenter());
					return true; 
				} else { 
					locate.marker.setVisible(false); 
					locate.marker.setMap(null); 
					return false; 
				}
			});
		});
	};

// TODO:
		// add APIs

// Qs:
		// where to put APIs?
		// is my separation of concerns good enough?
		// why does that darn infowindow keep popping out at loading?


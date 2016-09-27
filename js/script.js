	// MODEL
	// initial list of locations
	var initLocations = [{
	        title: '310 Antiques',
	        street: '3159 Donald Douglas Loop South #305',
	        city: 'Santa Monica CA 90405',
	        loc: {
	            lat: 34.017094,
	            lng: -118.446815
	        }
	    }, {
	        title: 'A Coin Exchange',
	        street: '18631 Ventura Blvd.',
	        city: 'Tarzana CA 91356',
	        loc: {
	            lat: 34.170143,
	            lng: -118.53939
	        }
	    },
	    // {
	    // 	title: 'Collectors Internet',
	    // 	street: '7510 Sunset Blvd. #183',
	    // 	city: 'Los Angeles, CA 90046',
	    // 	loc: {lat: 34.09802, lng:  -118.35311}
	    // },
	    {
	        title: 'Los Angeles Gold and Silver',
	        street: '427 N. Camden Drive, Suite F',
	        city: 'Beverly Hills CA 90210',
	        loc: {
	            lat: 34.069057,
	            lng: -118.40453
	        }
	    }, {
	        title: 'BST Gold And Silver',
	        street: '5351 Topanga Canyon Blvd.',
	        city: 'Woodland Hills CA 91364',
	        loc: {
	            lat: 34.167366,
	            lng: -118.60577
	        }
	    }, {
	        title: 'Meridian Coin',
	        street: '22330 Hawthorne Blvd Suite C',
	        city: 'Torrance CA 90505',
	        loc: {
	            lat: 33.82483,
	            lng: -118.35113
	        }
	    },
	    // {
	    // 	title: 'Pacific Coast Coin & Currency',
	    // 	street: '11696 Ventura Blvd.',
	    // 	city: 'Studio City CA 91604',
	    // 	loc: {lat: 34.14116, lng: -118.38743}
	    // },
	    {
	        title: 'Paul Albarian and Associates',
	        street: '3500 West Olive Ave. 3F, Suite 300',
	        city: 'Burbank CA 91505',
	        loc: {
	            lat: 34.15284,
	            lng: -118.33816
	        }
	    }, {
	        title: 'South Bay Gold',
	        street: '3804 Sepulveda Blvd Suite C',
	        city: 'Torrance Ca 90505',
	        loc: {
	            lat: 33.825577,
	            lng: -118.35147
	        }
	    }, {
	        title: 'Southern California Coins and Stamps',
	        street: '7635 Firestone Blvd.',
	        city: 'Downey CA 90241',
	        loc: {
	            lat: 33.946266,
	            lng: -118.14451
	        }
	    }, {
	        title: 'Wilshire Coin',
	        street: '1312 Lincoln Blvd.',
	        city: 'Santa Monica CA 90401',
	        loc: {
	            lat: 34.020596,
	            lng: -118.49259
	        }
	    }, {
	        title: 'Huntington Rare Coins and Precious Metals',
	        street: '31 W Del Mar Blvd.',
	        city: 'Pasadena CA 91105',
	        loc: {
	            lat: 34.134558,
	            lng: -118.322478
	        }
	    }
	];

	// current location
	var Locate = function(data) {
	    this.title = data.title;
	    this.street = data.street;
	    this.city = data.city;
	    this.loc = data.loc;
	    this.yelp = data.yelp;
	};


	// VIEW
	// MAP
	// global map variable
	var map;

	// initialize google map to be called once
	var initMap = function() {
	    map = new google.maps.Map(document.getElementById('map'), {
	        center: {
	            lat: 34.134558,
	            lng: -118.322478
	        }, // Hollywood Sign, Los Angeles, CA
	        scrollwheel: false,
	        zoom: 13
	    });

	    // Viewmodel is called after map loads
	    ko.applyBindings(new ViewModel());
	};

	var googleError = function() {
	    $('#map').text("Google Map API Load Failure. Please try again later.");
	};

	// Type check
	if (typeof map === 'undefined') {
	    googleError();
	} 

	// YELP
	// generate random number function for oauth_nonce parameter
	function nonce_generate() {
	    return (Math.floor(Math.random() * 1e12).toString());
	}

	// Yelp URL 
	var yelpURL = 'https://api.yelp.com/v2/search?';

	// Yelp API
	var yelpAPI = function(data, infowindow) {
	    var title = data.title;
	    var city = data.city;

	    var parameters = {
	        oauth_consumer_key: 'igSLQFcwtRG4np5X35A0wg',
	        oauth_token: 'LaAnI7Te92kGMOuR_B5A2mCdUG6H-H3K',
	        oauth_nonce: nonce_generate(),
	        oauth_timestamp: Math.floor(Date.now() / 1000),
	        oauth_signature_method: 'HMAC-SHA1',
	        oauth_version: '1.0',
	        callback: 'cb',
	        term: title,
	        location: city,
	        limit: 1
	    };

	    var consumer_secret = '8ztFLQaXwe5V1ahEbMpyZiES8_Y',
	        token_secret = '9rFOTwnk8l-LG01nomxIHv08yKQ';

	    var encodedSignature = oauthSignature.generate('GET', yelpURL, parameters, consumer_secret, token_secret);
	    parameters.oauth_signature = encodedSignature;

	    var settings = {
	        url: yelpURL,
	        callback: 'cb',
	        data: parameters,
	        cache: true,
	        dataType: 'jsonp',
	        timeout: 5000
	    };

	    //$.ajax(settings)
	    $.jsonp(settings)
	        .done(function(results) {
	            var yelp = {
	                name: results.businesses[0].name,
	                url: results.businesses[0].url,
	                rating: results.businesses[0].rating_img_url_small,
	                image: results.businesses[0].image_url,
	                text: results.businesses[0].snippet_text,
	                count: results.businesses[0].review_count,
	                address1: results.businesses[0].location.display_address[0],
	                address2: results.businesses[0].location.city + ", " + results.businesses[0].location.state_code
	            };
	            console.log(results);
	            // console.log(yelp.name);
	            // console.log(yelp.url);
	            // console.log(yelp.rating);
	            // console.log(yelp.image);
	            // console.log(yelp.text);
	            // console.log(yelp.address);
	            data.content = '<div id= "content" class="center-content row">' +
	                '<div class="col-md-4" style="margin: auto">' +
	                '<img id="yelpImage" class="img-responsive" style="background-size: cover; margin: auto" src= "' + yelp.image + '" alt= "' + yelp.name + '">' +
	                '</div>' +
	                '<div class="col-md-8">' +
	                '<div>' +
	                '<h4  id="yelpName">' + yelp.name + '</h4>' +
	                '<h6  id="yelpAddress1">' + yelp.address1 + '</h6>' +
	                '<h6  id="yelpAddress2">' + yelp.address2 + '</h6>' +
	                '</div>' +
	                '<div>' +
	                '<img id="yelpRating" class="img-responsive" src= "' + yelp.rating + '" alt= "' + yelp.name + '">' +
	                // TODO: put if statement for singular/plural of review
	                '<small id="yelpCount"> Based on ' + yelp.count + ' reviews</small>' +
	                '<p><a id="yelpURL" href= "' + yelp.url + '">More from ' +
	                '<img id="yelpLogo" class="img-responsive" alt= "yelp logo" style="max-width: 3.5em" src= "yelplogo.png">' +
	                '</a></p>' +
	                '</div>' +
	                '</div>' +
	                '</div>';
	            infowindow.setContent(data.content);
	            $('#errormsg').text("SUCCESSFUL LOADING");
	        })
	        // 	        .fail(function(parsedjson, textStatus, errorThrown) {
	        // 	            console.log("parsedJson: " + JSON.stringify(parsedjson));
	        // 	            errorThrown = "Yelp API Load Failure. Please try again later.";
	        // 	            if (textStatus == "error") {
	        // 			$('#errormsg').text("parsedJson status: " + parsedjson.status + '</br>' + "errorThrown: " + errorThrown);
	        //  	                $('body').append(
	        // 	                    "parsedJson status: " + parsedjson.status + '</br>' + "errorThrown: " + errorThrown);
	        // 	            }

	    .fail(function(parsedjson, timed, errorThrown) {
	        errorThrown = "Yelp API Load Failure. Please try again later.";
	        if (timed === "timeout") {
	            $('#errormsg').text("Error: " + errorThrown);
	        }
	    });
	};


	// INFOWINDOW
	var populateInfowindow = function(marker, infowindow) {
	    if (infowindow.marker != marker) {
	        infowindow.marker = marker;
	        // console.log(marker);
	        yelpAPI(marker, infowindow);
	        map.setCenter(marker.position);
	        // console.log(marker.position);
	        // map.panBy(0, 100);
	        infowindow.open(map, marker);
	    }
	};


	// VIEWMODEL
	var ViewModel = function() {

	    // self === ViewModel
	    var self = this;

	    // ViewModel's filter storage
	    this.searchBar = ko.observable("");

	    // ViewModel's locations array
	    this.locationList = ko.observableArray([]);

	    // initializes locationList array with initLocations array
	    for (var i = 0; i < initLocations.length; i++) {
	        self.locationList.push(initLocations[i]);
	        // console.log(self.locationList());
	    }

	    // initialize infowindows and boundaries
	    var bounds = new google.maps.LatLngBounds();
	    var largeInfowindow = new google.maps.InfoWindow();

	    // make markers for each item in locationList array
	    self.locationList().forEach(function(locItem) {
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
	            content: ' ',
	            // visible: true,
	            id: title
	        });

	        // create each marker 
	        locItem.marker = marker;

	        // access infowindow by clicking marker
	        marker.addListener('click', function() {
	            populateInfowindow(this, largeInfowindow);
	        });
	    });

	    this.openInfowindow = function($data) {
	        $data.marker.setAnimation(google.maps.Animation.DROP);
	        populateInfowindow($data.marker, largeInfowindow);
	    };

	    google.maps.event.addListener(largeInfowindow, 'closeclick', function() {
	        largeInfowindow.opened = false;
	    });

	    // ViewModel's filter locationList and markers
	    this.filteredLocationList = ko.computed(function() {
	        return ko.utils.arrayFilter(self.locationList(), function(locate) {
	            if (!self.searchBar() || (locate.title.toLowerCase().indexOf(self.searchBar().toLowerCase()) >= 0)) {
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
	// set hamburger menu
	// pretty up

	// Qs:
	// why is the search input box spilling past its <div>?

@include('chargingstationsheader')
<body class="g-sidenav-show  bg-gray-200">
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">

    <img src="../assets/img/icon-img.png" class="center-block d-block mx-auto" style="margin-top:15px;" alt="main_logo" />
     <a class="navbar-brand m-0">
        <h4 class="ms-1 font-weight-bold text-white text-center">
                AIM MOTORS
        </h4>

    </a>



    <hr class="horizontal light mt-0 mb-2">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white active bg-gradient-primary" href="{{url('/chargingstations')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">ev_station</i>
            </div>
            <span class="nav-link-text ms-1">Charging Stations</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="{{url('/admin')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">person_add_alt_1</i>
            </div>
            <span class="nav-link-text ms-1">Admin</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="{{url('/bike')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">electric_bike</i>
            </div>
            <span class="nav-link-text ms-1">Bike</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="{{url('/battery')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">battery_full</i>
            </div>
            <span class="nav-link-text ms-1">Battery</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="{{url('/appusers')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">person</i>
            </div>
            <span class="nav-link-text ms-1">App Users</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="{{url('/bikeSwapCardOwner')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">credit_card</i>
            </div>
            <span class="nav-link-text ms-1">Bike & Card Owner</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidenav-footer position-absolute w-100 bottom-0 ">
      <div class="mx-3">
        <button class="btn bg-gradient-primary mt-4 w-100"  type="submit" id="logout">SIGN OUT</button>
      </div>
    </div>
  </aside>

  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <!-- Navbar -->
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
      <div class="container-fluid py-1 px-3">
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->



    <div class="container-fluid py-0">
      <div class="row">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div
                class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">pedal_bike</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Bikes</p>
                <h4 class="mb-0">{{ $totalBikes }}</h4>
              </div>
            </div>

            <div class="card-footer p-3">

            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div
                class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">battery_full</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Batteries</p>
                <h4 class="mb-0">{{ $totalBattery }}</h4>
              </div>
            </div>

            <div class="card-footer p-3">

            </div>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div
                class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Active Users</p>
                <h4 class="mb-0">{{ $activeUsers }}</h4>
              </div>
            </div>

            <div class="card-footer p-3">

            </div>
          </div>
        </div>



        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div
                class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">ev_station</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Charging Stations</p>
                <h4 class="mb-0">{{ $totalStations }}</h4>
              </div>
            </div>

            <div class="card-footer p-3">

            </div>
          </div>
        </div>
      </div>




      <div class="row mt-2">

      </div>




      <div class="row">
        <div class="col-lg-12 col-md-12 mb-md-0 mb-4">
          <div class="card">
            <div id="map" style="height: 77vh; width: 100%; border-radius: 10px; "></div>
          </div>
        </div>
      </div>









      <footer class="footer py-2">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="copyright text-center text-sm text-white text-lg-start">
                ©
                <script>
                  document.write(new Date().getFullYear())
                </script>,
                All Rights Reserved By
                <a href="http://aim-motors.com" class="font-weight-bold" target="_blank" style="color:#37c6f5;">AIM-MOTORS</a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  </main>

  <!--   Core JS Files   -->
  <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
  <script src="../assets/js/plugins/chartjs.min.js"></script>

  <!-- <script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  </script> -->
  <!-- Github buttons -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>

  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="../assets/js/material-dashboard.min.js"></script>

  <script>
    var url = "{{ env('APP_URL') }}";
  </script>


  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>

  <script>

    // initialize Leaflet
    // Define the custom EV-station icon
    var evStationIcon = L.icon({
        iconUrl: '{{ asset('assets/img/electric-station.png') }}', // Set the icon image URL
        iconSize: [40, 40], // Set the icon size
        // iconAnchor: [10, 30], // Set the icon anchor point
    });


    var map = L.map('map').setView({
        lon: 67.022095,
        lat: 24.926294}, 10);


    // add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).addTo(map);



    // Add zoom control to the map
    var zoomControl = L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Remove default zoom control from the top left corner
    map.zoomControl.remove();

    // show the scale bar on the lower left corner
    // L.control.scale().addTo(map);

    // create an array to hold all the markers
    var markers = [];


    // ///////////////////// new code////////////
    // Create a function to update marker visibility when the map is zoomed
    // function updateMarkerVisibility() {
    //     var zoom = map.getZoom();
    //     markers.forEach(function (marker) {
    //         // Define a threshold zoom level at which to show/hide markers
    //         var thresholdZoom = 12; // Adjust this to your preference
    //         if (zoom >= thresholdZoom) {
    //             marker.addTo(map);
    //         } else {
    //             map.removeLayer(marker);
    //         }
    //     });
    // }

    // // Add an event listener to update marker visibility on zoom
    // map.on('zoomend', updateMarkerVisibility);

    // // Initial marker setup
    // updateMarkerVisibility();
    //////////////////

    // loop through your locations and create a marker for each location
    @foreach ($locations as $location)

        var latitude = {{ $location->latitude }};
        var longitude = {{ $location->longitude }};
        var batteryCount = {{ $location->battery_count}};


        // Define the icon for the address
        var addressIcon = '<i class="fas fa-map-marker-alt" style="color: #37c6f5;"></i>';

        // Define the icon for the number of batteries
        var batteryIcon = '<i class="fas fa-battery-full" style="color: #37c6f5;"></i>';

        // Create the popup content
        var popupContent = '<p style="text-align:center;"><b style="color: #37c6f5; font-size: 15px;">AIM-MOTORS Filling Station <br> {{ $location->s_name }}</b><br></p>' + addressIcon +' '+ '<b>Address: </b>'+ '{{ $location->address }}<br>' + batteryIcon + ' ' +'<b>Number of battery available:</b> '+batteryCount ;

        // create the marker
        var marker = L.marker([{{ $location->latitude }}, {{ $location->longitude }}], { icon: evStationIcon }).addTo(map);



        // create a new popup for each marker
        var popup = L.popup()
            .setLatLng([latitude, longitude])
            .setContent(popupContent);

        // add the popup to the marker and push the marker into the markers array
        marker.bindPopup(popup);
        markers.push(marker);

    @endforeach

    // add mouseover event to each marker to open its popup
    for (var i = 0; i < markers.length; i++) {
        markers[i].on('mouseover', function (e) {
            this.openPopup();
        });
    }

    // add click event to close the popup when clicked again
    for (var i = 0; i < markers.length; i++) {
        markers[i].on('click', function (e) {
            if (this.isPopupOpen()) {
                this.closePopup();
            }
        });
    }
  </script>
  <script src="../assets/js/chargingstation.js"></script>
</body>


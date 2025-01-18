<!--
=========================================================
* Material Dashboard 2 - v3.0.4
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://www.creative-tim.com/license)
* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->

@include('bikeSwapCardOwnerHeader')
<body class="g-sidenav-show bg-gray-200">
    {{-- <div class="alert show">

        <span  class="result" style="color:white;" ></span>

    </div> --}}
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
    id="sidenav-main">

    <img src="../assets/img/icon-img.png" class="center-block d-block mx-auto" style="margin-top:15px;" alt="main_logo" />

     <a class="navbar-brand m-0">


        <h4 class="ms-1 font-weight-bold text-white text-center">
                AIM MOTORS
        </h4>

    </a>
    <hr class="horizontal light mt-0 mb-2" />
    <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="{{url('/chargingstations')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">ev_station</i>
            </div>
            <span class="nav-link-text ms-1">Charging Stations</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="{{url('/admin')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">person_add_alt_1</i>
            </div>
            <span class="nav-link-text ms-1">Admin</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="{{url('/bike')}}">
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
          <a class="nav-link text-white active bg-gradient-primary" href="{{url('/bikeSwapCardOwner')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              {{-- <i class="material-icons opacity-10">directions_bike</i><i class="material-icons opacity-10">credit_card</i> --}}
              <i class="material-icons opacity-10">credit_card</i>
            </div>
            <span class="nav-link-text ms-1">Bike & Card Owner</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidenav-footer position-absolute w-100 bottom-0 ">
      <div class="mx-3">
        <a class="btn bg-gradient-primary mt-4 w-100" type="submit" id="logout">SIGN OUT</a>
      </div>
    </div>
  </aside>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- Navbar -->
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
      data-scroll="true">
      <div class="container-fluid py-1 px-3">

        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
          </div>
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>

            <li class="nav-item dropdown pe-2 d-flex align-items-center">
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->

    <div class="container-fluid py-4">
      <!-- <div class="container my-auto"> -->
        <div class="row">
          <!-- <div class="col-lg-6 col-md-8 col-12 mx-auto"> -->
          <div class="col-lg-6 col-md-6 mb-md-0 mb-3">
           <div class="card">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-3">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h3 class="text-white font-weight-bolder text-center mt-3 mb-0">
                     BIKE AND SWAP CARDS OWNER'S DETAILS
                  </h3>
                  <div class="row mt-3">
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form id="bikeowner_details" action="" class="tm-signup-form">

                  <div class="input-group input-group-static mb-3 custom-select-container">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fa fa-caret-down dropdown-icon"></i>
                        </span>
                    </div>
                    {{-- <label for="person" class="ms-0">Type Of Owner</label> --}}
                    <select class="form-control" id="person" name="person" style="color: #37c6f5">
                        <option hidden>Select Owner Type</option>
                        <option>Bike Owner</option>
                        <option>Swap Card Owner</option>
                    </select>
                  </div>
                  <span class="error person_err"></span>
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Name</label>
                    <input type="text"  name="name" class="form-control"/>
                  </div>
                  <span class="error name_err"></span>

                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-control"/>
                  </div>
                  <span class="error email_err"></span>

                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">CNIC number</label>
                    <input type="text"  name="cnic" class="form-control addHyphenCNIC" maxlength="15"/>
                  </div>
                  <span class="error cnic_err"></span>

                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Contact number</label>
                    <input type="text"  name="phone" class="form-control addHyphenContact" maxlength="12"/>
                  </div>
                  <span class="error phone_err"></span>

                  <!-- Conditional input fields -->
                  <div class="conditional-fields">

                    <div class="input-group input-group-outline my-3 bike-owner-fields" style="display: none;">
                        <label class="form-label">Bike name</label>
                        <input type="text"  name="bike_name" class="form-control"/>
                    </div>
                    <span class="error bike_name_err"></span>

                    <div class="input-group input-group-static mb-3 swap-card-owner-fields custom-select-container" style="display: none;">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-caret-down dropdown-icon"></i>
                            </span>
                        </div>
                        {{-- <label class="form-label">Card Number</label> --}}
                        <select class="form-control" id="number">
                            <option hidden>Select Card Number</option>
                            {{-- <option>Bike Owner</option>
                            <option>Swap Card Owner</option> --}}
                        </select>
                        {{-- <input type="text"  name="number" class="form-control"/> --}}
                    </div>
                    <span class="error number_err"></span>

                    <div class="input-group input-group-static mb-3 bike-owner-fields" style="display: none;">
                        <select class="form-control" id="chassisid" placeholder="Search for a Chassis ID"></select>

                        {{-- <label for="chassisid" class="ms-0">Chassis Id</label> --}}
                        {{-- <select class="form-control" id="chassisid">
                        <option value="">Select a Chassis ID</option>
                        </select> --}}
                        {{-- <input type="text" id="chassisid" placeholder="Search for a Chassis ID" class="form-control"> --}}

                    </div>
                    <span class="error chassis_id_err"></span>

                  </div>

                  <!-- Hidden input field to store selected chassis ID -->
                  <input type="hidden" name="chassis_id" id="hiddenChassisId" value="">

                  <!-- Hidden input field to store selected chassis ID -->
                  <input type="hidden" name="number" id="hiddenCardNumber" value="">


                  <div class="text-center">
                    <button type="submit" class="btn bg-gradient-primary w-100 my-6 mb-2">
                      Send & Email
                    </button>
                  </div>
                </form>
              </div>
              <!-- <p  class="result" style="color:green;" ></p> -->
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-header pb-0">
              <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <h3 class="text-white font-weight-bolder text-center mt-3 mb-0">
                   LIST OF BIKE AND SWAP CARD OWNERS
                </h3>
              </div>
            </div>
            <div class="card-body p-3">

                <div class="card-body px-4 pb-1">
                    <div class="table-responsive p-1">
                    <table class="table align-items-center">
                        <thead>
                        <tr>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">User Id</th>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">Name</th>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">Email</th>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">CNIC Number</th>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">Contact Number</th>
                            <!-- <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;"></th> -->
                            <!-- <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;"></th> -->
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($ownerData as $owner)
                        <tr>
                            <td>
                              <p class="text-center text-sm font-weight-bold mb-0">{{ $owner->user_id }}</p>
                            </td>
                            <td>
                            <div class="px-3 py-2">
                                <div class="d-flex flex-column justify-content-center">
                                <span class="text-center text-secondary font-weight-bold">{{ $owner->name }}</span>
                                </div>
                            </div>
                            </td>
                            <td>
                            <p class="text-center text-sm font-weight-bold mb-0">{{ $owner->email }}</p>
                            </td>
                            <td class="align-middle text-center">
                            <span class="text-secondary font-weight-bold">{{ $owner->cnic }}</span>
                            </td>
                            <td>
                            <p class="text-center text-sm font-weight-bold mb-0">{{ $owner->phone }}</p>
                            </td>
                            @endforeach
                        </tbody>
                    </table>
                    {{-- <div class="p-4">
                        {{$ownerData->onEachSide(2)->links()}}
                    </div> --}}
                    </div>
                    <div class="p-3">
                        {{$ownerData->onEachSide(0)->links()}}
                    </div>
                    {{-- {{$ownerData->onEachSide(2)->links()}} --}}
                </div>
                {{-- {{$ownerData->onEachSide(2)->links()}} --}}
            </div>
            {{-- {{$ownerData->onEachSide(2)->links()}} --}}
          </div>
        </div>
      </div>
      <footer class="footer py-4  ">
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
    <div class="loader-container d-none" id="loader">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  </main>

  <!--   Core JS Files   -->
  <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
  <script>
    var win = navigator.platform.indexOf("Win") > -1;
    if (win && document.querySelector("#sidenav-scrollbar")) {
      var options = {
        damping: "0.5",
      };
      Scrollbar.init(document.querySelector("#sidenav-scrollbar"), options);
    }
  </script>
  <!-- Github buttons -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="../assets/js/material-dashboard.min.js"></script>
  <script>
    var url = "{{ env('APP_URL') }}";
  </script>
  <script src="../assets/js/bikeSwapCardOwner.js"></script>
  <script src="../assets/js/sweetalert2.min.js"></script>
  <script src="../assets/js/sweetalert2.all.js"></script>
  <script src="../assets/js/sweetalert2.js"></script>
  <script src="../assets/js/sweetalert2.all.min.js"></script>

</body>



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



 @include('appusersheader')
<body class="g-sidenav-show bg-gray-200">
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
          <a class="nav-link text-white" href="{{url('/battery')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">battery_full</i>
            </div>
            <span class="nav-link-text ms-1">Battery</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white active bg-gradient-primary" href="{{url('/appusers')}}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">person</i>
            </div>
            <span class="nav-link-text ms-1">App Users</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="{{url('/bikeSwapCardOwner')}}">
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

    <div class="container-fluid py-1">
      <div class="row">
        <div class="col-xl-3 col-sm-3 mb-xl-0 mb-2">
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div
                class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Users</p>
                <h4 class="mb-0">{{ $totalUsers }}</h4>
              </div>
            </div>
            <!-- <hr class="dark horizontal my-0" /> -->
            <div class="card-footer p-1">
              <!-- <p class="mb-0">
                <span class="text-success text-sm font-weight-bolder">+3% </span>than lask month
              </p> -->
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div
                class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Active Users</p>
                <h4 class="mb-0">{{ $activeUsers }}</h4>
              </div>
            </div>
            <!-- <hr class="dark horizontal my-0" /> -->
            <div class="card-footer p-1">
              <!-- <p class="mb-0">
                <span class="text-danger text-sm font-weight-bolder">-2%</span>
                than yesterday
              </p> -->
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div
                class="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize ">InActive Users</p>
                <h4 class="mb-0">{{ $inActiveUsers }}</h4>
              </div>
            </div>
            <!-- <hr class="dark horizontal my-0" /> -->
            <div class="card-footer p-1">
              <!-- <p class="mb-0">
                <span class="text-success text-sm font-weight-bolder">+5% </span>than yesterday
              </p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
      </div>



      <div class="container-fluid py-1">
        <div class="row">
          <div class="col-12">
            <div class="card my-4">
              <div class="card-header p-0 position-relative mt-n4 mx-8 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h3 class="text-white text-capitalize text-center ps-3">APP USERS</h3>
                </div>
              </div>
              <div class="card-body px-6 pb-4">
                <div class="table-responsive p-2">
                  <table class="table align-items-center">
                    <thead>
                      <tr>
                        <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">Users</th>
                        <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">User_ID</th>
                        <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">Status</th>
                        <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">Email</th>
                        <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">Phone Number</th>
                        <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;"></th>
                        <!-- <th class="text-secondary opacity-7"></th> -->
                      </tr>
                    </thead>
                    <tbody>
                    @foreach ($userData as $user)
                      <tr>
                        <td>
                          <div class="px-4 py-2">
                            <!-- <div>
                              <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                            </div> -->
                            <div class="d-flex flex-column justify-content-center">
                              <span class="text-center text-secondary font-weight-bold">{{ $user->name }}</span>

                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-center text-sm font-weight-bold mb-0">{{ $user->user_id }}</p>

                        </td>
                        <td class="align-middle text-center text-sm">
                          <!-- <span  class="badge badge-sm bg-gradient-primary" style="color: white; font-size: 13px;">{{ $user->status }}</span> -->
                                <select class="badge badge-sm bg-gradient-primary statusDropdown" style="color: white; font-size: 13px; outline: none;">
                                @if ( $user->status == '1')
                                    <option value="1" selected style="color: #37c6f5; background-color: white;">Active</option>
                                    <option value="0" style="color: #37c6f5; background-color: white;" >Inactive</option>
                                @elseif ( $user->status == '0')
                                    <option value="1" style="color: #37c6f5; background-color: white;" >Active</option>
                                    <option value="0" selected style="color: #37c6f5; background-color: white;">Inactive</option>
                                @else
                                    <option value="1" style="color: #37c6f5; background-color: white;">Active</option>
                                    <option value="0" selected style="color: #37c6f5; background-color: white;">Inactive</option>
                                @endif
                                </select>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary font-weight-bold">{{ $user->email }}</span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary font-weight-bold">{{ $user->phone }}</span>
                        </td>
                        {{-- <td class="align-middle text-center">
                            <button class="btn-delete delete-user" data-user-id="{{ $user->user_id }}"><i class="fa fa-trash"></i></button>
                        </td> --}}

                        <td class="align-middle text-center">
                            <button class="btn-delete delete-user" data-user-id="{{ $user->user_id }}">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>

                      </tr>
                      @endforeach
                    </tbody>
                  </table>
                  <div class="p-3">
                  {{$userData->onEachSide(2)->links()}}
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>



    <div class="container-fluid py-4">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-6 col-md-8 col-12 mx-auto">

              <div class="card-body">

              </div>
              <p  class="result" style="color:green;" ></p>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer py-4">
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

    <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-title-default" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title font-weight-normal" id="modal-title-default">Confirmation</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this user?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-confirm-delete">OK</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
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
  <script src="../assets/js/appusers.js"></script>
  <script src="../assets/js/sweetalert2.min.js"></script>
  <script src="../assets/js/sweetalert2.all.js"></script>
  <script src="../assets/js/sweetalert2.js"></script>
  <script src="../assets/js/sweetalert2.all.min.js"></script>
</body>



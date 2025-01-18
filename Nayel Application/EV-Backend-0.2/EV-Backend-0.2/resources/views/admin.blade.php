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


@include('adminheader')
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
          <a class="nav-link text-white active bg-gradient-primary" href="{{url('/admin')}}">
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



    <div class="container-fluid py-4">

      <div class="row">

        <!-- <div class="col-lg-1"></div> -->
        <div class="col-lg-6 col-md-6 mb-md-0 mb-3">
          <div class="card">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-3">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h3 class="text-white font-weight-bolder text-center mt-3 mb-0">
                    ADD AN ADMIN
                  </h3>
                  <div class="row mt-3">
                  </div>
                </div>
              </div>
              <div class="card-body">
                <!-- <div class="p-6"></div> -->
                <!-- <p style="font-size: 10px; color: green;">- Password should be of atleast 8 characters (including one uppercase, one lowercase, one digit and a special character).<br>
                    - For example, Hello12*
                </p> -->
                <form id="register_form">

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

                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Password</label>
                    <input type="password"  name="password" id="password" class="form-control"/>
                    <span style="font-size: 10px; color: green; padding: 0.075rem;">- Password should be of atleast 8 characters (including one uppercase & lowercase, one digit, one special character). For example (Hello12*)</span>
                  </div>
                  <span class="error password_err"></span>
                  <!-- "Show Password" Checkbox -->
                  <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="show_password">
                    {{-- <label class="form-check-label" for="show_password">Show Password</label> --}}
                    <label class="show-password-text">Show Password</label>
                  </div>
                  {{-- <span style="font-size: 10px; color: green; padding: 0.075rem;">- Password should be of atleast 8 characters (including one uppercase & lowercase, one digit, one special character). For example (Hello12*)</span> --}}
                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Confirm Password</label>
                    <input type="password" name="password_confirmation"  class="form-control"/>
                  </div>
                  <span class="error password_confirmation_err"></span>
                  <div class="text-center">
                    {{-- <div class="p-6"></div> --}}
                    <button type="submit"  class="btn bg-gradient-primary w-100 my-4 mb-2">
                      Register
                    </button>
                  </div>
                </form>

                {{-- <div class="spinner-border d-none"  id="loader" role="status">
                    <span class="sr-only">Loading...</span>
                </div> --}}



              </div>



            </div>

          </div>

        </div>




        <!-- <div class="col-lg-2"></div> -->
        <div class="col-lg-6 col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-header">
              <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <h3 class="text-white font-weight-bolder text-center mt-3 mb-0">
                   LIST OF ADMINS
                </h3>
              </div>
              <!-- <h3 class="text-center">Total Admins</h3> -->

            </div>
            <div class="card-body p-0">

                <div class="card-body px-4 pb-1">
                    <div class="table-responsive p-1">
                    <table class="table align-items-center">
                        <thead>
                        <tr>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">ADMIN ID</th>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">ADMINS</th>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;">EMAIL</th>
                            <th class="text-center text-uppercase font-weight-bolder" style="color:#37c6f5;"></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($adminData as $admin)
                        <tr>
                            <td>
                            <div class="px-3 py-2">

                                <div class="d-flex flex-column justify-content-center">
                                <span class="text-center text-secondary font-weight-bold">{{ $admin->admin_id }}</span>

                                </div>
                            </div>
                            </td>
                            <td>
                            <p class="text-center text-sm font-weight-bold mb-0">{{ $admin->name }}</p>

                            </td>

                            <td class="align-middle text-center">
                            <span class="text-secondary font-weight-bold">{{ $admin->email }}</span>
                            </td>

                            {{-- <td class="align-middle text-center">
                                <button class="btn-delete delete-admin" data-admin-id="{{ $admin->admin_id }}"><i class="fa fa-trash"></i></button>
                            </td> --}}

                            <td class="align-middle text-center">
                                <button class="btn-delete delete-admin" data-admin-id="{{ $admin->admin_id }}">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>

                            @endforeach
                        </tbody>
                    </table>
                    {{$adminData->onEachSide(2)->links()}}

                    </div>


                </div>

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
                        document.write(new Date().getFullYear());
                      </script>
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
                    <p>Are you sure you want to delete this admin?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-confirm-delete">OK</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>


    {{-- <div class="alert show">
        <span  class="result" style="color:white;" ></span>
    </div> --}}


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

  <script src="../assets/js/admin.js"></script>
  {{-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script> --}}
  <script src="../assets/js/sweetalert2.min.js"></script>
  <script src="../assets/js/sweetalert2.all.js"></script>
  <script src="../assets/js/sweetalert2.js"></script>
  <script src="../assets/js/sweetalert2.all.min.js"></script>
  {{-- <script src="../assets/scss/material-dashboard/plugins/pro/_sweetalert2.scss"></script> --}}





</body>



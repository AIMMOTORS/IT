<!--
=========================================================
* Material Dashboard 2 - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://www.creative-tim.com/license)
* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->


@include('signinheader')
<body class="bg-gray-200">
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
            </div>
        </div>
    </div>
  <main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('/assets/img/bg-4.png')">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <!-- <img src="/assets/img/logo.png" class="center-block d-block mx-auto py-1" alt="#"> -->
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-3">
                <img src="/assets/img/logo1.png" class="center-block d-block mx-auto py-1" alt="#">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-2 pe-1">
                  <!-- <img src="/assets/img/logo1.png" class="center-block d-block mx-auto py-1" alt="#"> -->
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                </div>
              </div>
              <div class="card-body">
                <form id="login_form">
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-control">
                  </div>
                  <span class="error email_err"></span>
                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Password</label>
                    {{-- <input type="password" name="password" class="form-control"> --}}
                    <input type="password" name="password" id="password" class="form-control">
                  </div>
                  <span class="error password_err"></span>
                   <!-- "Show Password" Checkbox -->
                  <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="show_password">
                    {{-- <label class="form-check-label no-cursor" for="show_password">Show Password</label> --}}
                    <label class="show-password-text">Show Password</label>
                  </div>
                  <!-- <div class="form-check form-switch d-flex align-items-center mb-3">
                  </div> -->
                  <div class="text-center">
                    <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                  </div>
                </form>
              </div>

              <!-- <p class="result" style="color:red; padding:10px;"></p> -->
            </div>
          </div>
        </div>
        <div class="alert hide">
                        <!-- <i class="fa-solid fa-circle-check"></i> -->
                <span  class="result" style="color:red;" ></span>
                        <!-- <span class="close-btn">
                            <span class="fas fa-times"></span>
                        </span> -->
        </div>
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
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
  <script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  </script>

  <!-- Github buttons -->
  <!-- <script async defer src="https://buttons.github.io/buttons.js"></script> -->

  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="../assets/js/material-dashboard.min.js"></script>
  <script>
    var url = "{{ env('APP_URL') }}";
  </script>
  <script src="../assets/js/signin.js"></script>
</body>



<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="csrf-token" content="{{ csrf_token() }}" />


  <title>AIM-MOTORS</title>

  <link rel="shortcut icon" type="image/icon" href="../assets_lp/images/logo-blue2.webp">


  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />

  <!-- Nucleo Icons -->
  <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />

  <!-- Font Awesome Icons -->
  <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>

  <!-- Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />

  <!-- CSS Files -->
  <link id="pagestyle" href="../assets/css/material-dashboard.css" rel="stylesheet" />

  <link rel="stylesheet" href="../assets/css/bg-img.css">
  <link rel="stylesheet" href="../assets/css/bin.css">
  <link rel="stylesheet" href="../assets/css/appusers.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>



</head>
<body>
    <script>
        var token= localStorage.getItem('user_token');
        // var token = getCookie('user_token');
        if(window.location.pathname == '/signin')
        {
            if(token != null){
                window.open('/appusers','_self');
            }
        }
        else{
            if(token == null){
                window.open('/adminsignin','_self');
            }
        }


        // function getCookie(name) {
        //     var nameEQ = name + "=";
        //     var cookies = document.cookie.split(';');
        //     for (var i = 0; i < cookies.length; i++) {
        //         var cookie = cookies[i];
        //         while (cookie.charAt(0) === ' ') {
        //             cookie = cookie.substring(1, cookie.length);
        //         }

        //         // Split the cookie string to get name, value, and attributes
        //         var parts = cookie.split(';');
        //         var cookieName = parts[0].split('=')[0];
        //         var cookieValue = parts[0].split('=')[1];

        //         if (cookieName === name) {
        //             return cookieValue;
        //         }
        //     }
        //     return null;
        // }


    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>AIM-MOTORS</title>

  <link rel="shortcut icon" type="image/icon" href="../assets_lp/images/logo-blue2.webp">

  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />

  <!-- Nucleo Icons -->
  <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />

  <!-- Font Awesome Icons -->
  <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>

  <!-- Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">

  <!-- CSS Files -->
  <link id="pagestyle" href="../assets/css/material-dashboard.css" rel="stylesheet" />
  <link rel="stylesheet" href="../assets/css/bg-img.css">
  <link rel="stylesheet" href="../assets/css/chargingstation.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin="" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.Default.css" />

</head>
<body>
    <script>
        var token= localStorage.getItem('user_token');
        // var token = getCookie('user_token');
        if(window.location.pathname == '/signin')
        {
            if(token != null){
                window.open('/chargingstations','_self');
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

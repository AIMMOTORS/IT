$(document).ready(function(){
    $("#logout").click(function(){
        $.ajax({
            url: url+"/api/admin/logout",
            type: "GET",
            // headers: { 'Authorization': getCookie('user_token') }, // Using getCookie function to retrieve the token
            headers:{ 'Authorization': localStorage.getItem('user_token')},
            success: function(data){
                if(data.success === true){
                    // deleteCookie('user_token'); // Remove the token from the cookie
                    localStorage.removeItem('user_token');
                    window.open("/adminsignin", "_self");
                }
                else{
                    alert(data.msg);
                }
            }
        });
    });

    // function getCookie(name) {
    //     var nameEQ = name + "=";
    //     var cookies = document.cookie.split(';');
    //     for (var i = 0; i < cookies.length; i++) {
    //         var cookie = cookies[i];
    //         while (cookie.charAt(0) === ' ') {
    //             cookie = cookie.substring(1, cookie.length);
    //         }
    //         if (cookie.indexOf(nameEQ) === 0) {
    //             return cookie.substring(nameEQ.length, cookie.length);
    //         }
    //     }
    //     return null;
    // }

    // function deleteCookie(name) {
    //     document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // }
});




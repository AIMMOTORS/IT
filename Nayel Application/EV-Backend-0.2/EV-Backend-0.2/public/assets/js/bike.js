//////////////////////    Bike Register Function //////////////////////
$(document).ready(function(){
    $("#bike_details").submit(function(event){
        event.preventDefault();
        $("#loader").removeClass("d-none"); // Show the loader
        var formData = $(this).serialize(); //fetching the data
        // console.log("a");
        $.ajax({
            url:url+"/api/admin/bike-details",
            type:"POST",
            data:formData,
            headers: {
                // Set the Authorization header with the token
                'Authorization': localStorage.getItem('user_token')
            },
            success:function(data){
                $("#loader").addClass("d-none"); // Hide the loader
                if(data.msg){
                    // $("#bike_details")[0].reset();
                    $(".error").text("");
                    Swal.fire({
                        title: "Success!",
                        text: data.msg,
                        icon: "success",
                        confirmButtonColor: "#37c6f5",
                        confirmButtonBorderColor: "#37c6f5"
                        // confirmButtonClass: "btn btn-success",
                    }).then(function () {
                        // Reload the page after the SweetAlert is closed
                        window.location.reload();
                    });
                    // $(".result").text(data.msg);
                    // $('.alert').removeClass("hide");
                    // $('.alert').addClass('show');
                    // $('.alert').addClass("showAlert");
                    // setTimeout(function(){
                    //     window.location.reload();
                    // }, 3000); //reload the page after 3secs
                }
                else{
                    printErrorMsg(data);
                }
                // console.log(data);
            }

        });
        // $('.alert').removeClass("hide");
        // $('.alert').addClass('show');
        // $('.alert').addClass("showAlert");
        setTimeout(function(){
            $('.alert').addClass("hide");
            $('.alert').removeClass('show');
        },2000); //hide alert after 2secs

    });
    function printErrorMsg(msg){
        $(".error").text("");
        $.each(msg,function(key,value){
            $("."+key+"_err").text(value);
        });
    }
});


//////////////////////    Logout Function //////////////////////
$(document).ready(function(){
    $("#logout").click(function(){
        // event.preventDefault();
        $.ajax({
            url:url+"/api/admin/logout",
            type:"GET",
            headers:{ 'Authorization': localStorage.getItem('user_token')},
            success: function(data){
                if(data.success === true){
                    localStorage.removeItem('user_token');
                    window.open("/adminsignin", "_self");
                }
                else{
                    alert(data.msg);
                }
            }
        });
    });
});

 ////////////////////////// Colons For Mac Address /////////////////////////////////

$('#addColon').keyup(function () {
    let ele = $(this).val().split(':').join('');    // Remove dash (-) if mistakenly entered.
    let finalVal = ele.match(/.{1,2}/g).join(':');
    $(this).val(finalVal);
});





///////////////////////// Hyphen For Registration Number And Chassis Id /////////////////
$('.addHyphen').keyup(function() {
    let ele = $(this).val().split('-').join('');
    let finalVal = ele.match(/.{1,4}/g).join('-');
    $(this).val(finalVal);
});


/////////// Delete bikes data /////////////////////

// $(document).on('click', '.delete-bike', function() {
//     var bikeId = $(this).data('bike-id');
//     // var token = getCookie('user_token'); // Get the token from the cookie

//     if (confirm('Are you sure you want to delete this bike details?')) {
//         $.ajax({
//             url: url+"/api/admin/bikes/" + bikeId,
//             type: 'DELETE',
//             headers: {
//                 'Authorization': localStorage.getItem('user_token')
//             },
//             success: function(result) {
//                 location.reload();
//             }
//         });
//     }
// });



$(document).on('click', '.delete-bike', function () {
    var bikeId = $(this).data('bike-id');
    var modal = $('#modal-default'); // Reference to the modal

    // Attach a click event to the "OK" button in the modal
    modal.find('.btn-confirm-delete').on('click', function () {
        // Close the modal
        modal.modal('hide');

        // Perform the deletion
        $.ajax({
            url: url+"/api/admin/bikes/" + bikeId,
            type: 'DELETE',
            headers: { 'Authorization': localStorage.getItem('user_token') },
            success: function (result) {
                // Show a SweetAlert with the API response message
                Swal.fire({
                    title: 'Deleted!',
                    text: result.msg, // This will display the API response message
                    icon: 'success',
                    confirmButtonColor: "#37c6f5",
                    confirmButtonBorderColor: "#37c6f5"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (error) {
                // Show a SweetAlert with an error message if the API request fails
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.', // Customize the error message
                    icon: 'error',
                    confirmButtonColor: "#37c6f5",
                    confirmButtonBorderColor: "#37c6f5"
                });
            }
        });
    });

    // Show the modal
    modal.modal('show');
});

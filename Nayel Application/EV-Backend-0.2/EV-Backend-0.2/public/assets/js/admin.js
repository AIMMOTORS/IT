//////////////////////    Register Function //////////////////////
$(document).ready(function(){
    $("#register_form").submit(function(event){
        event.preventDefault();
        $("#loader").removeClass("d-none"); // Show the loader
        var formData = $(this).serialize(); //fetching the data
        // var url = env('APP_URL');
        $.ajax({
            url:url+"/api/admin/register",
            type:"POST",
            data:formData,
            headers:{ 'Authorization': localStorage.getItem('user_token')},
            success:function(data){
                $("#loader").addClass("d-none"); // Hide the loader
                if(data.msg){
                    // $("#register_form")[0].reset();
                    $(".error").text("");
                    Swal.fire({
                        title: "Success!",
                        text: data.msg,
                        icon: "success",
                        // confirmButtonClass: "btn btn-success",
                        confirmButtonColor: "#37c6f5",
                        confirmButtonBorderColor: "#37c6f5"
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
                    // }, 2000); //reload the page after 3secs

                }
                // $(".result").text(data.msg);
                // location.reload(true);
                else{
                    printErrorMsg(data);
                }
                    // console.log(data);
            }


        });



        // setTimeout(function(){
        //     $('.alert').addClass("hide");
        //     $('.alert').removeClass('show');
        // },1000); //hide alert after 2secs


    });
    // location.reload(true);


    function printErrorMsg(msg){
        $(".error").text("");
        $.each(msg,function(key,value){

            if(key == 'password'){

                if(value.length > 1){
                    $(".password_err").text(value[0]);
                    $(".password_confirmation_err").text(value[1]);
                }
                else{

                    if(value[0].includes('password_confirmation')){
                        $(".password_confirmation_err").text(value);
                    }
                    else{
                        $(".password_err").text(value);
                    }
                }
            }
            else{
                $("."+key+"_err").text(value);
            }
                // $("."+key+"_err").text(value);
        });
    }

});



//////////////////////    Logout Function //////////////////////
$(document).ready(function(){
    $("#logout").click(function(){
        // console.log("my varrr"+ env('APP_URL'));
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



// ////////////////////////    Delete Admin data ///////////////////////
// $(document).on('click', '.delete-admin', function() {
//     var adminId = $(this).data('admin-id');
//     if (confirm('Are you sure you want to delete this admin?')) {
//         $.ajax({
//             url: url+"/api/admin/admins/" + adminId,
//             type: 'DELETE',
//             headers:{ 'Authorization': localStorage.getItem('user_token')},
//             success: function(result) {
//                 location.reload();
//             }
//         });
//     }
// });


// $(document).on('click', '.delete-admin', function () {
//     var adminId = $(this).data('admin-id');
//     var modal = $('#modal-default'); // Reference to the modal

//     // Attach a click event to the "OK" button in the modal
//     modal.find('.btn-confirm-delete').on('click', function () {
//         // Close the modal
//         modal.modal('hide');

//         // Perform the deletion
//         $.ajax({
//             url: url + "/api/admin/admins/" + adminId,
//             type: 'DELETE',
//             headers: { 'Authorization': localStorage.getItem('user_token') },
//             success: function (result) {
//                 location.reload();
//             }
//         });
//     });

//     // Show the modal
//     modal.modal('show');
// });


$(document).on('click', '.delete-admin', function () {
    var adminId = $(this).data('admin-id');
    var modal = $('#modal-default'); // Reference to the modal

    // Attach a click event to the "OK" button in the modal
    modal.find('.btn-confirm-delete').on('click', function () {
        // Close the modal
        modal.modal('hide');

        // Perform the deletion
        $.ajax({
            url: url + "/api/admin/admins/" + adminId,
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

// Get references to the password field and the "Show Password" checkbox
const passwordField = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show_password');

// Add an event listener to the checkbox
showPasswordCheckbox.addEventListener('change', function () {
    // If the checkbox is checked, change the password field's type to "text" to show the password
    // Otherwise, change it back to "password" to hide the password
    passwordField.type = this.checked ? 'text' : 'password';
});

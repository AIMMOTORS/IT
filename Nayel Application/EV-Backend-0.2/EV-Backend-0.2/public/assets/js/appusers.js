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
});



//////////////////////    Update Status  Function //////////////////////
const statusDropdowns = document.querySelectorAll('.statusDropdown');

statusDropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', () => {
    const selectedStatus = dropdown.value;
    const userId = dropdown.closest('tr').querySelector('td:nth-child(2)').textContent;


    fetch(url+"/api/admin/update-status", {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('user_token')
        },
        body: JSON.stringify({
        user_id: userId,
        status: selectedStatus
        })
    })
    .then(response => response.json())
    .then(data => {
         // Display the response message using SweetAlert
         Swal.fire({
            title: 'Status Update',
            text: data.result,
            icon: 'success',
            confirmButtonColor: "#37c6f5",
            confirmButtonBorderColor: "#37c6f5"
            // confirmButtonText: 'OK',
            // buttonsStyling: false,
            // confirmButtonClass: 'btn btn-success'
        });
        // console.log(data.result);
        // setTimeout(function(){
        //     window.location.reload();
        // }, 10); //reload the page after 1secs
    })
    .catch(error => {
        console.log(error);
    });
    });
});



////////////////////////    Delete User data ///////////////////////
// $(document).on('click', '.delete-user', function() {
//     var userId = $(this).data('user-id');
//     if (confirm('Are you sure you want to delete this user?')) {
//         $.ajax({
//             url: url+"/api/admin/users/" + userId,
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

$(document).on('click', '.delete-user', function () {
    var userId = $(this).data('user-id');
    var modal = $('#modal-default'); // Reference to the modal

    // Attach a click event to the "OK" button in the modal
    modal.find('.btn-confirm-delete').on('click', function () {
        // Close the modal
        modal.modal('hide');

        // Perform the deletion
        $.ajax({
            url: url+"/api/admin/users/" + userId,
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









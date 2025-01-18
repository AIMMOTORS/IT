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

///////////////////////// Hyphen For CNIC number /////////////////
$('.addHyphenCNIC').keyup(function() {
    let ele = $(this).val().split('-').join('');
    let finalVal = ele.replace(/(\d{5})(\d{7})(\d*)/, '$1-$2-$3');
    $(this).val(finalVal);
});


//////////////////////// Hyphen For Contact number /////////////////
$('.addHyphenContact').keyup(function() {
    let ele = $(this).val().split('-').join('');
    let finalVal = ele.replace(/^(\d{4})/, '$1-');
    $(this).val(finalVal);
});


// //////////////////////// Chassis Id dropdown /////////////////
// $(document).ready(function() {
//     // Check if JWT token is present in local storage
//     const token = localStorage.getItem('user_token');

//     if (token) {
//         // Make an AJAX request to fetch chassis IDs from the API with Authorization header
//         $.ajax({
//             url: url+"/api/admin/chassis-ids",
//             type: "GET",
//             dataType: "json",
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             },
//             success: function(response) {
//                 if (response && response.length > 0) {
//                     // Clear the current dropdown options
//                     $("#chassisid").empty();

//                     // Populate the dropdown with fetched chassis IDs
//                     $.each(response, function(index, chassis) {
//                         $("#chassisid").append(
//                             $("<option>", {
//                                 value: chassis.chassis_id,
//                                 text: chassis.chassis_id
//                             })
//                         );
//                     });
//                 } else {
//                     // If no chassis IDs were fetched
//                     $("#chassisid").append(
//                         $("<option>", {
//                             value: '',
//                             text: 'No chassis IDs available'
//                         })
//                     );
//                 }
//             },
//             error: function() {
//                 // If there was an error fetching data
//                 $("#chassisid").append(
//                     $("<option>", {
//                         value: '',
//                         text: 'Error fetching chassis IDs'
//                     })
//                 );
//             }
//         });
//     }
//     // else {
//     //     // Handle case where JWT token is not present
//     //     $("#chassisid").append(
//     //         $("<option>", {
//     //             value: '',
//     //             text: 'No access'
//     //         })
//     //     );
//     // }
// });


//////////////////////    Bike Owner Register Function //////////////////////
$(document).ready(function(){
    $("#bikeowner_details").submit(function(event){
        event.preventDefault();
        $("#loader").removeClass("d-none"); // Show the loader
        var formData = $(this).serialize(); //fetching the data
        // console.log("a");
        $.ajax({
            url:url+"/api/admin/owner-register",
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


//////////////////////     Chassis ID Selected From The Dropdown Function //////////////////////
document.getElementById('chassisid').addEventListener('change', function () {
    var selectedChassisId = this.value;
    document.getElementById('hiddenChassisId').value = selectedChassisId;
});

//////////////////////     Card number Selected From The Dropdown Function //////////////////////
document.getElementById('number').addEventListener('change', function () {
    var selectedCardNumber = this.value;
    document.getElementById('hiddenCardNumber').value = selectedCardNumber;
});




$(document).ready(function() {
    // Initialize Selectize on the dropdown element
    $('#chassisid').selectize({
        valueField: 'chassis_id',
        labelField: 'chassis_id',
        searchField: 'chassis_id',
        placeholder: 'Search for a Chassis ID',
        create: false, // Do not allow creation of new items
        load: function(query, callback) {
            if (!query.length) return callback();

            // Make an AJAX request to fetch chassis IDs
            $.ajax({
                url: url + "/api/admin/chassis-ids",
                type: "GET",
                dataType: "json",
                headers: {
                    'Authorization': localStorage.getItem('user_token')
                },
                data: {
                    search: query // Pass the search term to the API
                },
                error: function() {
                    callback();
                },
                success: function(data) {
                    callback(data);
                }
            });
        },
        onChange: function(value) {
            $('#hiddenChassisId').val(value);
        }
    });
});

/**************************    Conditional fields based on type of owner  */
$(document).ready(function () {
    $("#person").change(function () {
        var selectedOwnerType = $(this).val();
        $(".conditional-fields .bike-owner-fields").hide();
        $(".conditional-fields .swap-card-owner-fields").hide();

        if (selectedOwnerType === "Bike Owner") {
            $(".conditional-fields .bike-owner-fields").show();
        } else if (selectedOwnerType === "Swap Card Owner") {
            $(".conditional-fields .swap-card-owner-fields").show();
        }
    });
});


/**************** card numbers in the dropdown */
$(document).ready(function() {
    // Create an AJAX request with the token in the header
    $.ajax({
        url:url+"/api/admin/card-numbers",
        type: 'GET',
        headers: {
            // Set the Authorization header with the token
            'Authorization': localStorage.getItem('user_token')
        },
        success: function(data) {
            // console.log(data); // Log the response data to the console
            // Iterate through the fetched data and add options to the select element
            $.each(data, function(index, value) {
                $('#number').append($('<option>', {
                    value: value.number, // Assuming each item in data has a "number" property
                    text: value.number // Assuming each item in data has a "number" property
                }));
            });
        },
    });
});

/*****************  Dropdown arrow in type of owner */
$(document).ready(function() {
    $("#person").on("click", function() {
        $(".custom-select-container").toggleClass("open");
    });
});

/*****************  Dropdown arrow in type of owner */
$(document).ready(function() {
    $("#number").on("click", function() {
        $(".custom-select-container").toggleClass("open");
    });
});

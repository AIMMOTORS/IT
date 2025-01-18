//////////////////////    Login Function //////////////////////
$(document).ready(function(){
    $("#login_form").submit(function(event){
        event.preventDefault();

        var formData = $(this).serialize();
        $.ajax({
            url:url+"/api/admin/login",
            type:"POST",
            data:formData,
            success:function(data){
                // console.log(data);

                $(".error").text("");
                if(data.success == false){
                    // $("#login_form")[0].reset();
                    $(".result").text(data.msg);
                    $('.alert').removeClass("hide");
                    $('.alert').addClass('show');
                    $('.alert').addClass("showAlert");
                }
                else if(data.success == true){
                    // console.log(data);
                    localStorage.setItem("user_token",data.token_type+" "+data.access_token);
                    window.open("/chargingstations", "_self");
                }
                else{
                    printErrorMsg(data)
                }

            }
        });
        setTimeout(function(){
                $('.alert').addClass("hide");
                $('.alert').removeClass('show');
        },2000); //hide alert after 2secs

    });


    function printErrorMsg(msg){
        $(".error").text("");
        $.each(msg,function(key, value){
            $("."+key+"_err").text(value);
        });
    }
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





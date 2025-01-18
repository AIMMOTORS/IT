function SendMail(){

    // Show loader
    document.getElementById("loader").style.display = "block";

    // Get form data
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        comment : document.getElementById("comment").value
    }

    // Send email using EmailJS
    emailjs.send("service_m2svzkr","template_oa46itx",params)
    .then(function(res){

        // Hide loader after  1 seconds
        setTimeout(function(){
            document.getElementById("loader").style.display = "none";
        }, 1000);

        // Show success message
        alert("Your response has been successfully recorded.");

        // Reset form
        document.getElementById("ride").reset();
    })
    .catch(function(error) {

        // Hide loader after 1.5 seconds
        setTimeout(function(){
            document.getElementById("loader").style.display = "none";
        }, 1000);

        // Show error message
        alert("An error occurred while sending the email. Please try again later.");

        // Reset form
        document.getElementById("ride").reset();

    });

    // Hide loader after 1.5 seconds
    setTimeout(function(){
        document.getElementById("loader").style.display = "none";
    }, 1000);
}

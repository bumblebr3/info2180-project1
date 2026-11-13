/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector(".newsletter form");
    let message = document.querySelector(".message");
    let email = document.getElementById("email");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let emailAddress = email.value;
        
        if (emailAddress === ""){
            message.innerHTML = "Please enter a valid email address";
        }else{
            message.innerHTML = "Thank you! Your email address " + emailAddress + " has been added to our mailing list!";
        }
    })


});
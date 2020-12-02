function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message= document.getElementById("message").value;
    var error_massage = document.getElementById("error_massage");
    var text;
    error_massage.style.padding = "10px";
    error_massage.style.color = "red";

    if (name.length < 5) {
        text = "Please Enter your correct Name";
        error_massage.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter your valid Email";
        error_massage.innerHTML = text;
        return false;
    }

    if ( phone.length < 11) {
        text = "Please enter your valid phone";
        error_massage.innerHTML = text;
        return false;
    }
    if (message.length < 30) {
        text = "Please Write message";
        error_massage.innerHTML = text;
        return false;
    }

    alert("Form return successfully")
    return true;

}
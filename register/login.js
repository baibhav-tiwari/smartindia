function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin_org" && password == "user") {
        alert(window.open("organisation.html"));
        return false;
    }
    else if (email == "admin_hei" && password == "user") {
        alert(window.open("hei.html"));
        return false;

    }
    else {
        alert("Account Not Found");
    }


}
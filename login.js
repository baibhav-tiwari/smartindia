function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin@org" && password == "@org") {
        alert(window.open("org.html"));
        return false;
    }
    else if (username == "admin@hei" && password == "@hei") {
        alert(window.open("hei.html"));
        return false;

    }
    else {
        alert("Account not found !!");
    }


}
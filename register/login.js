
function validate(data) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "hei@gmail.com" && password == "hei@admin") {
        alert("Welcome Back HEI's");
        return false;
    }
    else if (email == "org@gmail.com" && password == "org@admin") {
        alert("Welcome Back ORG");
        return false;
    }
    else {
        LOGIN_FAILED;
    }
}
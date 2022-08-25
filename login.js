function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin@org" && password == "@org") {
        alert(window.open("https://baibhav--tiwari-github-io.translate.goog/smartindia/org.html?_x_tr_sl=en&_x_tr_tl=ta&_x_tr_hl=en-US&_x_tr_pto=wapp"));
        return false;
    }
    else if (username == "admin@hei" && password == "@hei") {
        alert(window.open("https://baibhav--tiwari-github-io.translate.goog/smartindia/hei.html?_x_tr_sl=en&_x_tr_tl=ta&_x_tr_hl=en-US&_x_tr_pto=wapp"));
        return false;

    }
    else {
        alert("Account not found !!");
    }


}
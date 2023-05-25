function login() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if ((email.value == "matheuskreski@gmail.com") && (password.value == "12345678")) {
        window.location.href = "restrito.html";
    }
    else {
        window.location.href = "index.html";
    }
};
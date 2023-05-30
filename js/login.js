function login() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if ((email.value == "administracao@clover.com") && (password.value == "cloveradm")) {
        window.location.href = "restrito.html";
    }
    else {
        window.location.href = "index.html";
    }
};
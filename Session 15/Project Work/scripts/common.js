let loginNavbar = document.getElementById("login-navbar");
let user = document.getElementById("user");

if(sessionStorage.isLogin) {
    loginNavbar.style.display = "none";
    let username = document.getElementById("user-name");
    username.innerHTML = sessionStorage.username.toUpperCase();
    user.style.display = "flex";
} else {
    loginNavbar.style.display = "flex";
    user.style.display = "none";
}

function login() {
    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "block";
}

function closeModal() {
    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "none";
}

function openContactUsModal() {
    let modal = document.getElementsByClassName("contactus-modal");
    modal[0].style.display = "block";
}

function closeContactUsModal() {
    let modal = document.getElementsByClassName("contactus-modal");
    modal[0].style.display = "none";
}

function userLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === 'admin' && password === 'admin') {
        let errorMsg = document.getElementById('error-msg');
        alert(`Welcome back, ${username}`);
        sessionStorage.username = 'admin';
        sessionStorage.isLogin = true;
        if(errorMsg.style.display === "block") {
            errorMsg.style.display = "none";
        }
        let modal = document.getElementsByClassName("login-modal");
        modal[0].style.display = "none";
        loginNavbar.style.display = "none";
        let navbarUser = document.getElementById("user-name");
        navbarUser.innerHTML = sessionStorage.username.toUpperCase();
        user.style.display = "flex";
    } else {
        let errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = "block";
    }
}

function upArrowClick() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

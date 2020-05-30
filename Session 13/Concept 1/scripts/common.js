function login() {
    console.log("Login button has been clicked");
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
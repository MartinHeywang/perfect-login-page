const form = document.querySelector("form");
form.addEventListener("submit", submit);

const emailBox = document.querySelector(".email-box");
const passwordBox = document.querySelector(".password-box");

const emailField = emailBox.querySelector("#email");
const passwordField = passwordBox.querySelector("#password");

function submit(event) {
    emailBox.classList.remove("incorrect");
    passwordBox.classList.remove("incorrect");

    const validEmail = checkEmail(emailField.value);
    const validPassword = checkPassword(passwordField.value);
    if (validEmail && validPassword) return;
    else event.preventDefault();

    if (!validPassword) {
        passwordBox.classList.add("incorrect");
        passwordField.focus();
    }
    if (!validEmail) {
        emailBox.classList.add("incorrect");
        emailField.focus();
    }
}

function checkEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

function checkPassword(password) {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    return regex.test(password);
}

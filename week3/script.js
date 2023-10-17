const form = document.getElementById("form");
const username = document.getElementById("usernameId");
const email = document.getElementById("emailId");
const password = document.getElementById("passwordId");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);

form.addEventListener("submit", function (event) {
  if (
    !validateUsername() ||
    !validateEmail() ||
    !validatePassword() ||
    !validateConfirmPassword()
  ) {
    event.preventDefault();
  }
});

function validateUsername() {
  const usernameValue = username.value.trim();
  if (usernameValue === "") {
    usernameError.textContent = "Username cannot be empty.";
    username.classList.remove("success");
    username.classList.add("error");
    return false;
  } else {
    usernameError.textContent = "";
    username.classList.remove("error");
    username.classList.add("success");
    return true;
  }
}


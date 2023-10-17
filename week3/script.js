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

function validateEmail() {
  const emailValue = email.value.trim();
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailValue === "") {
    emailError.textContent = "Email cannot be empty.";
    email.classList.remove("success");
    email.classList.add("error");
    return false;
  } else if (!pattern.test(emailValue)) {
    emailError.textContent = "Invalid email format.";
    email.classList.remove("success");
    email.classList.add("error");
    return false;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
    email.classList.add("success");
    return true;
  }
}

function validatePassword() {
  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    passwordError.textContent = "Password cannot be empty.";
    password.classList.remove("success");
    password.classList.add("error");
    return false;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "Must be 8 characters in length";
    password.classList.remove("success");
    password.classList.add("error");
    return false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("error");
    password.classList.add("success");
    return true;
  }
}

function validateConfirmPassword() {
  const confirmPasswordValue = confirmPassword.value.trim();
  if (confirmPasswordValue === "") {
    confirmPasswordError.textContent = "Confirm Password cannot be empty.";
    confirmPassword.classList.remove("success");
    confirmPassword.classList.add("error");
    return false;
  } else if (confirmPasswordValue !== password.value.trim()) {
    confirmPasswordError.textContent = "Passwords Do Not Match !!";
    confirmPassword.classList.remove("success");
    confirmPassword.classList.add("error");
    return false;
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.classList.remove("error");
    confirmPassword.classList.add("success");
    return true;
  }
}

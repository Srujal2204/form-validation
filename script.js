function validateName() {
    const name = document.getElementById('fullName').value;
    const nameError = document.getElementById('nameError');
    if (name.length < 5) {
        nameError.textContent = "Name must be at least 5 characters long";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (phone === "123456789" || phone.length !== 10) {
        phoneError.textContent = "Please enter a valid 10-digit phone number";
        return false;
    } else {
        phoneError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const name = document.getElementById('fullName').value;
    const passwordError = document.getElementById('passwordError');
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /\d/;
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        return false;
    } else if (password.toLowerCase() === 'password') {
        passwordError.textContent = "Password cannot be 'password'";
        return false;
    } else if (password.toLowerCase() === name.toLowerCase()) {
        passwordError.textContent = "Password cannot be your name";
        return false;
    } else if (!specialCharRegex.test(password)) {
        passwordError.textContent = "Password must contain at least one special character";
        return false;
    } else if (!numberRegex.test(password)) {
        passwordError.textContent = "Password must contain at least one number";
        return false;
    } else if (!lowerCaseRegex.test(password)) {
        passwordError.textContent = "Password must contain at least one lowercase letter";
        return false;
    } else if (!upperCaseRegex.test(password)) {
        passwordError.textContent = "Password must contain at least one uppercase letter";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

   
    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        return false;
    }
}
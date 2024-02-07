document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fname").value;
        const businessName = document.getElementById("bname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("pnumber").value;
        const address = document.getElementById("address").value;
        const district = document.getElementById("district").value;
        const country = document.getElementById("country").value;
        const userName = document.getElementById("uname").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validate full name (at least 6 characters)
        if (fullName.length < 6) {
            alert("Full name must be at least 6 characters long.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format. Please enter a valid email address.");
            return;
        }

        // Validate phone number format (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }

        // Validate password strength (at least 8 characters)
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        // Check if the password and confirm password fields match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // If all validations pass, redirect to the Menu.html page
        window.location.href = 'Menu.html';
    });
});

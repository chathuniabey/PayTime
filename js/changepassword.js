function togglePassword(inputId) {
    var passwordInput = document.getElementById(inputId);
    var toggleIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = 'Show';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = 'Hide';
    }
}

function resetPassword() {
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Placeholder logic for password validation
    if (newPassword === confirmPassword) {
        alert('Password reset successfully!');
    } else {
        alert('Passwords do not match. Please try again.');
    }
}
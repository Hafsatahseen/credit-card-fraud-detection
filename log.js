function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation for demonstration purposes
    if (username === 'Hafsa14' && password === 'hafsa') {
        // Redirect to dashboard or perform further actions
        window.location.href = 'upload.html';
        return false; // Prevent form submission (just in case)
    } else {
        errorMessage.innerText = 'Invalid username or password. Please try again.';
        return false; // Prevent form submission
    }
}

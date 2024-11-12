function validateForm()
      const First name = document.getElementById('first name').value.trim();
      const Last name = document.getElementById('last name').value.trim();
      const Password = document.getElementById('password').value.trim();
      const Email = document.getElementById('email').value.trim();
      const errorMessage = document.getElementById('error-message');

      // First Name validation
      if (first name === '') {
        alert('First Name must be filled out');
        return false;
      }
     
      // Last Name validation
      if (last name === '') {
        alert('Last First Name must be filled out');
        return false;
      }

      // Password validation
      if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;      }
     
      // Email validation
      if (!isValidEmail(email)) {
        alert('Invalid email address');
        return false;
      }

      // All validations passed
      return true;
    }

    function isValidEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    }
 {
        // Redirect to dashboard or perform further actions
        window.location.href = 'log.html';
        return false; // Prevent form submission (just in case)
    } else {
        errorMessage.innerText = 'Invalid username or password. Please try again.';
        return false; // Prevent form submission
    }
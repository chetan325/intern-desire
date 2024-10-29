// JavaScript for Form Validation

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('All fields are required!');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
        } else {
            // If validation passes, you can submit the form or handle it as needed
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
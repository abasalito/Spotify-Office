const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const contactForm = document.getElementById('contact-form');

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;

        if (username === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Basic email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Password length check
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Simulate account creation
        alert(`Account created successfully for ${username}!`);
        signupForm.reset();
    });
}

if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signin-username').value.trim();
        const password = document.getElementById('signin-password').value;

        if (username === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate sign in success
        alert(`Welcome back, ${username}!`);
        signinForm.reset();
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Basic email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
        contactForm.reset();
    });
}

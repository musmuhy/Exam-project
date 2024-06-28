// Get references to login form, signup form, and buttons to switch between them
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupBtn = document.getElementById('showSignup');
const showLoginBtn = document.getElementById('showLogin');

// Event listener to switch to signup form when the 'Sign Up' button is clicked
showSignupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

// Event listener to switch to login form when the 'Sign In' button is clicked
showLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

// Event listener for login form submission
loginForm.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const email = loginForm.querySelector('input[type="Your email"]').value;
    const password = loginForm.querySelector('input[type="Your password"]').value;

    // Check if the email and password are correct
    if (email === 'musosa@yahoo.com' && password === 'musa123') {
        alert('Login successful!');
        // Redirect or perform other actions on successful login
    } else {
        alert('Invalid email or password.');
    }
});

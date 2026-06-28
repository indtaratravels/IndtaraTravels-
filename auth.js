// Authentication Logic using MongoDB & Express Backend API for Indtara Travels
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorBox = document.getElementById('error-box');
    const loginSubmit = document.getElementById('login-submit');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Update UI to loading state
            loginSubmit.disabled = true;
            loginSubmit.textContent = 'AUTHENTICATING...';
            errorBox.style.display = 'none';

            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || 'Authentication failed');
                }

                // Successful login
                loginSubmit.textContent = 'SUCCESS';
                loginSubmit.style.background = '#28a745'; // Green for success
                
                setTimeout(() => {
                    window.location.href = '/index'; // Redirect to home (clean URL)
                }, 1000);

            } catch (error) {
                console.error('Login error:', error.message);
                errorBox.textContent = error.message;
                errorBox.style.display = 'block';
                loginSubmit.disabled = false;
                loginSubmit.textContent = 'SIGN IN';
            }
        });
    }

    // Registration Handling
    const registerForm = document.getElementById('register-form');
    const registerSubmit = document.getElementById('register-submit');
    const successBox = document.getElementById('success-box');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            registerSubmit.disabled = true;
            registerSubmit.textContent = 'CREATING ACCOUNT...';
            errorBox.style.display = 'none';
            successBox.style.display = 'none';

            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ fullname, email, password })
                });

                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to create account');
                }

                // Successful signup
                registerSubmit.textContent = 'ACCOUNT CREATED';
                registerSubmit.style.background = '#28a745';
                successBox.textContent = 'Registration successful! You are now logged in.';
                successBox.style.display = 'block';
                setTimeout(() => {
                    window.location.href = '/index'; // Redirect to home
                }, 2000);

            } catch (error) {
                console.error('Registration error:', error.message);
                errorBox.textContent = error.message;
                errorBox.style.display = 'block';
                registerSubmit.disabled = false;
                registerSubmit.textContent = 'CREATE ACCOUNT';
            }
        });
    }

    // Sign out function
    window.signOut = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
        window.location.reload();
    };

    // Check session on load
    const checkSession = async () => {
        try {
            const response = await fetch('/api/auth/session');
            if (response.ok) {
                const data = await response.json();
                console.log('Logged in as:', data.user.email);
                updateNavbarForUser(data.user);
            }
        } catch (error) {
            console.log('No active session.');
        }
    };

    const updateNavbarForUser = (user) => {
        const loginLinks = document.querySelectorAll('.login-nav-link');
        loginLinks.forEach(link => {
            link.textContent = 'LOGOUT';
            link.removeAttribute('href'); // Clean URL behavior
            link.style.cursor = 'pointer';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                signOut();
            });
        });
    };

    checkSession();
});

// Authentication Logic for Indtara Travels
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
                const { data, error } = await supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password,
                });

                if (error) throw error;

                // Successful login
                loginSubmit.textContent = 'SUCCESS';
                loginSubmit.style.background = '#28a745'; // Green for success
                
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to home or dashboard
                }, 1000);

            } catch (error) {
                console.error('Login error:', error.message);
                if (error.message === 'Invalid login credentials') {
                    errorBox.textContent = 'Invalid email or password. Please check your credentials and try again.';
                } else if (error.message.includes('Email not confirmed')) {
                    errorBox.textContent = 'Please confirm your email address. Check your inbox for the confirmation link.';
                } else {
                    errorBox.textContent = error.message;
                }
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
                const { data, error } = await supabaseClient.auth.signUp({
                    email: email,
                    password: password,
                    options: {
                        data: {
                            full_name: fullname
                        }
                    }
                });

                if (error) throw error;

                // Successful signup
                if (data.user && data.session) {
                    // Auto-logged in (confirmation likely disabled)
                    registerSubmit.textContent = 'ACCOUNT CREATED';
                    registerSubmit.style.background = '#28a745';
                    successBox.textContent = 'Registration successful! You are now logged in.';
                    successBox.style.display = 'block';
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 2000);
                } else {
                    // Confirmation required
                    registerSubmit.textContent = 'CHECK EMAIL';
                    registerSubmit.style.background = '#cba153';
                    successBox.textContent = 'Account created! Please check your email inbox to confirm your account before logging in.';
                    successBox.style.display = 'block';
                    
                    // Don't redirect immediately so they can read the message
                    registerSubmit.disabled = false;
                    registerSubmit.textContent = 'RESEND EMAIL?';
                    registerSubmit.onclick = () => window.location.reload();
                }


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
        const { error } = await supabaseClient.auth.signOut();
        if (error) console.error('Error signing out:', error.message);
        window.location.reload();
    };

    // Check session on load
    const checkSession = async () => {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            console.log('Logged in as:', session.user.email);
            // Update UI if needed (e.g., change "Login" to "Logout" in navbar)
            updateNavbarForUser(session.user);
        }
    };

    const updateNavbarForUser = (user) => {
        const loginLinks = document.querySelectorAll('.login-nav-link');
        loginLinks.forEach(link => {
            link.textContent = 'LOGOUT';
            link.href = '#';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                signOut();
            });
        });
    };

    checkSession();
});

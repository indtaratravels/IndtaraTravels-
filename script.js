document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Hide Preloader
    window.addEventListener('load', () => {
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 1000);
        }
    });

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Unified Mobile Menu Consolidation
    function setupMobileMenu() {
        if (window.innerWidth <= 1024) {
            const mobileLinks = document.querySelector('.nav-links');
            const topNavLinks = document.querySelector('.top-nav-links');
            const authLink = document.querySelector('.login-nav-link');
            
            if (mobileLinks && topNavLinks && !document.querySelector('.mobile-consolidated')) {
                // Add "Navigation" header
                const navHeader = document.createElement('li');
                navHeader.className = 'mobile-consolidated mobile-nav-label';
                navHeader.innerHTML = '<span>Main Menu</span>';
                mobileLinks.prepend(navHeader);

                // Clone Home, Packages, About, Contact (skip Travel as we'll list destinations)
                const items = topNavLinks.querySelectorAll('li');
                items.forEach(item => {
                    const link = item.querySelector('a');
                    if (link && !link.textContent.includes('Travel')) {
                        const clone = item.cloneNode(true);
                        clone.classList.add('mobile-consolidated', 'top-link-item');
                        mobileLinks.appendChild(clone);
                    }
                });

                // Add Auth link
                if (authLink) {
                    const authLi = document.createElement('li');
                    authLi.className = 'mobile-consolidated auth-mobile-item';
                    const authClone = authLink.cloneNode(true);
                    authLi.appendChild(authClone);
                    mobileLinks.appendChild(authLi);
                }

                // Add "Destinations" label before the destination links
                const destHeader = document.createElement('li');
                destHeader.className = 'mobile-consolidated mobile-nav-label dest-label';
                destHeader.innerHTML = '<span>Our Destinations</span>';
                
                // Find first original nav link (destination) to insert before
                const firstOrig = mobileLinks.querySelector('li:not(.mobile-consolidated)');
                if (firstOrig) {
                    mobileLinks.insertBefore(destHeader, firstOrig);
                }
            }
        }
    }

    setupMobileMenu();
    window.addEventListener('resize', setupMobileMenu);

    // Sticky Navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // Reveal on Scroll
    const revealElements = document.querySelectorAll('.features-bar, .footer-banner');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    const rejectCookies = document.getElementById('reject-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('show');
        });
    }

    if (rejectCookies) {
        rejectCookies.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'false');
            cookieBanner.classList.remove('show');
        });
    }

    // Form Handling
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const privacyCheck = document.getElementById('privacy-check');
            
            if (!privacyCheck.checked) {
                alert('Please accept the Privacy Policy to proceed.');
                return;
            }

            // Premium feedback on submit
            const submitBtn = enquiryForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>SENDING...</span><span class="arrow">⏳</span>';
            submitBtn.disabled = true;

            // Get form data
            const fullName = enquiryForm.querySelector('input[placeholder="Full Name"]').value;
            const email = enquiryForm.querySelector('input[placeholder="Email Address"]').value;
            const phone = enquiryForm.querySelector('input[placeholder="Phone Number"]').value;
            const interest = enquiryForm.querySelector('input[placeholder*="Travel Interest"]').value;
            const message = enquiryForm.querySelector('textarea').value;

            // Send to Supabase
            supabaseClient.from('enquiries').insert([
                { 
                    full_name: fullName, 
                    email: email, 
                    phone: phone, 
                    interest: interest, 
                    message: message 
                }
            ]).then(({ error }) => {
                if (error) {
                    console.error('Error saving enquiry:', error);
                    alert('There was an error sending your enquiry. Please try again.');
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                } else {
                    submitBtn.innerHTML = '<span>MESSAGE SENT</span><span class="arrow">✓</span>';
                    submitBtn.style.background = 'var(--color-accent)';
                    submitBtn.style.color = '#000';

                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.style.background = '';
                        submitBtn.style.color = '';
                        submitBtn.disabled = false;
                        enquiryForm.reset();
                    }, 3000);
                }
            });
        });
    }
});

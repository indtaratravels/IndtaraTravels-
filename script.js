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
                // Get original destination links
                const originalItems = Array.from(mobileLinks.querySelectorAll('li'));
                
                // Clear the menu to rebuild in order
                mobileLinks.innerHTML = '';

                // 1. Add "Main Menu" header
                const navHeader = document.createElement('li');
                navHeader.className = 'mobile-consolidated mobile-nav-label';
                navHeader.innerHTML = '<span>Main Menu</span>';
                mobileLinks.appendChild(navHeader);

                // 2. Add Cloned links from top header (Home, Packages, etc.)
                const items = topNavLinks.querySelectorAll('li');
                items.forEach(item => {
                    const link = item.querySelector('a');
                    // Skip 'Travel' dropdown as we have the destination list
                    if (link && !link.textContent.includes('Travel')) {
                        const clone = item.cloneNode(true);
                        clone.classList.add('mobile-consolidated', 'top-link-item');
                        mobileLinks.appendChild(clone);
                    }
                });

                // 3. Add "Destinations" label
                const destHeader = document.createElement('li');
                destHeader.className = 'mobile-consolidated mobile-nav-label dest-label';
                destHeader.innerHTML = '<span>Our Destinations</span>';
                mobileLinks.appendChild(destHeader);

                // 4. Add original destination links back
                originalItems.forEach(item => {
                    mobileLinks.appendChild(item);
                });

                // 5. Add Auth link at the very bottom
                if (authLink) {
                    const authLi = document.createElement('li');
                    authLi.className = 'mobile-consolidated auth-mobile-item';
                    const authClone = authLink.cloneNode(true);
                    authLi.appendChild(authClone);
                    mobileLinks.appendChild(authLi);
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
    const revealElements = document.querySelectorAll('.features-bar, .footer-banner, .discovery-block');

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

            // Send to FormSubmit (Email) and Supabase (Database)
            const formSubmitPromise = fetch("https://formsubmit.co/ajax/indtara.travel@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Name: fullName,
                    Email: email,
                    Phone: phone,
                    Interest: interest,
                    Message: message,
                    _subject: "New Travel Enquiry: " + fullName
                })
            });

            const supabasePromise = supabaseClient.from('enquiries').insert([
                { 
                    full_name: fullName, 
                    email: email, 
                    phone: phone, 
                    interest: interest, 
                    message: message 
                }
            ]);

            Promise.all([formSubmitPromise, supabasePromise])
                .then(([fsRes, sbRes]) => {
                    if (sbRes.error) throw sbRes.error;
                    
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
                })
                .catch((error) => {
                    console.error('Submission error:', error);
                    alert('There was an error sending your enquiry. Please try again.');
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                });
        });
    }

    // --- Cinematic GSAP Animations ---
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const track = document.querySelector('.horizontal-track');
        if (track) {
            let horizontalScroll = track.scrollWidth - window.innerWidth;
            
            gsap.to(track, {
                x: -horizontalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                    pin: '.sticky-wrapper',
                    invalidateOnRefresh: true
                }
            });

            // 3D reveal animation for cards
            gsap.utils.toArray('.destination-card').forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    rotateY: 45,
                    rotateX: 20,
                    z: -300,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: null, // Use horizontal scroll as trigger if needed
                        start: 'left right',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }

        // Hero animation
        gsap.from('.hero-cinematic h1', {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out'
        });

        gsap.from('.hero-cinematic p', {
            y: 50,
            opacity: 0,
            duration: 1.5,
            delay: 0.3,
            ease: 'power4.out'
        });

        // Mouse parallax for cards
        document.querySelectorAll('.destination-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateY = ((x / rect.width) - 0.5) * 20;
                const rotateX = ((y / rect.height) - 0.5) * -20;

                card.style.transform = `
                    rotateY(${rotateY}deg)
                    rotateX(${rotateX}deg)
                    translateY(-15px)
                    scale(1.02)
                `;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `
                    rotateY(0deg)
                    rotateX(0deg)
                    translateY(0px)
                    scale(1)
                `;
            });
        });
    }
});

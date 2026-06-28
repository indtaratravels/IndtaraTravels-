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

    // Hamburger toggle and mobile menu consolidation are now handled dynamically by components.js

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

    // Cookie Banner handled dynamically in components.js

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

            // Send to FormSubmit (Email) and Express Backend (Database)
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

            const mongoPromise = fetch('/api/enquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    full_name: fullName, 
                    email: email, 
                    phone: phone, 
                    interest: interest, 
                    message: message
                })
            }).then(res => {
                if (!res.ok) throw new Error('Failed to save enquiry');
                return res.json();
            });

            Promise.all([formSubmitPromise, mongoPromise])
                .then(() => {
                    
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
        if (track && window.innerWidth > 900) {
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

        // Mouse parallax for cards (desktop only)
        if (window.innerWidth > 900) {
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
    }

    // --- Counter Animation for Stats Bar ---
    const statsSection = document.querySelector('.stats-bar-section');
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;

    if (statsSection && counters.length > 0) {
        const countTo = (el) => {
            const target = +el.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function (easeOutExpo)
                const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                
                const currentCount = Math.floor(easedProgress * target);
                
                if (target >= 1000) {
                    el.innerText = (currentCount / 1000).toFixed(currentCount % 1000 === 0 ? 0 : 1) + 'k+';
                } else {
                    el.innerText = currentCount + (target === 15 || target === 25 ? '+' : '');
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    // Final value check
                    if (target >= 1000) {
                        el.innerText = (target / 1000).toFixed(0) + 'k+';
                    } else {
                        el.innerText = target + (target === 15 || target === 25 ? '+' : '');
                    }
                }
            };

            requestAnimationFrame(updateCount);
        };

        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animated) {
                counters.forEach(counter => countTo(counter));
                animated = true;
            }
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // --- Mobile Night Carousel Logic ---
    function initMobileCarousel() {
        const carousel = document.querySelector('.mobile-night-carousel');
        if (!carousel) return;

        const slides = carousel.querySelectorAll('.night-slide');
        const indicators = carousel.querySelectorAll('.indicator');
        const progressBar = carousel.querySelector('.night-progress-bar');
        let currentSlide = 0;
        let autoPlayTimer;

        function showSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            indicators.forEach(i => i.classList.remove('active'));

            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;

            // Reset and animate progress bar
            gsap.fromTo(progressBar, 
                { width: '0%' }, 
                { width: '100%', duration: 5, ease: 'none' }
            );
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function startAutoPlay() {
            stopAutoPlay();
            showSlide(currentSlide);
            autoPlayTimer = setInterval(nextSlide, 5000);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayTimer);
        }

        // Swipe support
        let touchStartX = 0;
        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', e => {
            let touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                // Swipe left
                nextSlide();
                startAutoPlay();
            } else if (touchEndX - touchStartX > 50) {
                // Swipe right
                let prev = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(prev);
                startAutoPlay();
            }
        }, { passive: true });

        // Initialize
        if (window.innerWidth <= 768) {
            startAutoPlay();
        }

        // Intersection Observer to stop carousel when not in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
        }, { threshold: 0.2 });

        observer.observe(carousel);
    }

    initMobileCarousel();
});

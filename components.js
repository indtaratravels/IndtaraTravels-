const HeaderHTML = `
    <!-- ========== TOP HEADER ========== -->
    <header class="top-header">
        <ul class="top-nav-links">
            <li><a href="index.html">Home</a></li>
            <li class="dropdown">
                <a href="#">Travel <span class="dropdown-arrow">&#9662;</span></a>
                <ul class="dropdown-menu">
                    <li><a href="india.html">India</a></li>
                    <li><a href="thailand.html">Thailand</a></li>
                    <li><a href="singapore.html">Singapore</a></li>
                    <li><a href="dubai.html">Dubai</a></li>
                    <li><a href="malaysia.html">Malaysia</a></li>
                    <li><a href="maldives.html">Maldives</a></li>
                    <li><a href="mauritius.html">Mauritius</a></li>
                    <li><a href="vietnam.html">Vietnam</a></li>
                    <li><a href="usa.html">USA</a></li>
                    <li><hr style="border: 0; border-top: 1px solid rgba(203, 161, 83, 0.2); margin: 5px 10px;"></li>
                    <li><a href="#">Canada</a></li>
                    <li><a href="#">United Kingdom</a></li>
                    <li><a href="#">Switzerland</a></li>
                    <li><a href="#">France</a></li>
                </ul>
            </li>
            <li><a href="packages.html">Packages</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <div class="top-right-links">
            <a href="login.html" class="login-nav-link" data-i18n="nav_login">LOGIN/REGISTER</a>
        </div>
    </header>

    <!-- ========== NAVBAR ========== -->
    <nav class="navbar">
        <div class="logo-container" onclick="window.location.href='index.html'">
            <img src="assets/indtara logo.png" alt="Indtara Experiences" class="main-logo-img">
        </div>
        <div class="nav-right">
            <div class="language-picker">
                <select id="language-selector">
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                    <option value="it">IT</option>
                </select>
            </div>
            <ul class="nav-links">
                <li><a href="india.html" data-i18n="nav_india">India</a></li>
                <li><a href="thailand.html" data-i18n="nav_thailand">Thailand</a></li>
                <li><a href="singapore.html" data-i18n="nav_singapore">Singapore</a></li>
                <li><a href="dubai.html" data-i18n="nav_dubai">Dubai</a></li>
                <li><a href="malaysia.html" data-i18n="nav_malaysia">Malaysia</a></li>
                <li><a href="maldives.html" data-i18n="nav_maldives">Maldives</a></li>
                <li><a href="mauritius.html" data-i18n="nav_mauritius">Mauritius</a></li>
                <li><a href="vietnam.html" data-i18n="nav_vietnam">Vietnam</a></li>
                <li><a href="usa.html" data-i18n="nav_usa">USA</a></li>
                <li class="dropdown">
                    <a href="#">More <span class="dropdown-arrow">&#9662;</span></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Canada</a></li>
                        <li><a href="#">United Kingdom</a></li>
                        <li><a href="#">Switzerland</a></li>
                        <li><a href="#">France</a></li>
                    </ul>
                </li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
`;

const FooterHTML = `
    <footer class="site-footer" style="background: #050d0a; padding: 100px 5% 50px; border-top: 1px solid rgba(203, 161, 83, 0.15); color: #ffffff;">
        <div class="footer-container" style="max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 60px;">
            <div class="footer-brand">
                <img src="assets/indtara logo.png" alt="Indtara Experiences" style="height: 70px; margin-bottom: 30px;">
                <p style="color: rgba(255,255,255,0.6); font-size: 1rem; line-height: 1.8; max-width: 300px;">Crafting bespoke luxury journeys for the modern traveler. Experience excellence in every mile.</p>
                
                <!-- Trust Badges -->
                <div class="trust-badges" style="display: flex; gap: 20px; margin-top: 40px; flex-wrap: wrap;">
                    <div style="text-align: center;">
                        <div style="color: #cba153; font-size: 1.2rem; margin-bottom: 5px;">★ ★ ★ ★ ★</div>
                        <div style="font-size: 0.6rem; letter-spacing: 1px; color: rgba(255,255,255,0.4);">VERIFIED REVIEWS</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="color: #cba153; font-size: 0.8rem; font-weight: 700; margin-bottom: 5px; border: 1px solid #cba153; padding: 2px 5px;">24/7</div>
                        <div style="font-size: 0.6rem; letter-spacing: 1px; color: rgba(255,255,255,0.4);">SUPPORT TEAM</div>
                    </div>
                </div>
            </div>
            <div class="footer-links" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                <div class="footer-col">
                    <h4 style="font-family: 'Cinzel', serif; color: #cba153; margin-bottom: 25px; letter-spacing: 2px;">Explore</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 12px;"><a href="india.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">India</a></li>
                        <li style="margin-bottom: 12px;"><a href="thailand.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Thailand</a></li>
                        <li style="margin-bottom: 12px;"><a href="singapore.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Singapore</a></li>
                        <li style="margin-bottom: 12px;"><a href="dubai.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Dubai</a></li>
                        <li style="margin-bottom: 12px;"><a href="malaysia.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Malaysia</a></li>
                        <li style="margin-bottom: 12px;"><a href="maldives.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Maldives</a></li>
                        <li style="margin-bottom: 12px;"><a href="mauritius.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Mauritius</a></li>
                        <li style="margin-bottom: 12px;"><a href="vietnam.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Vietnam</a></li>
                        <li style="margin-bottom: 12px;"><a href="usa.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">USA</a></li>
                        <li style="margin-top: 15px;"><a href="packages.html" style="color: #cba153; text-decoration: none; font-size: 0.9rem; font-weight: 600;">All Packages</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 style="font-family: 'Cinzel', serif; color: #cba153; margin-bottom: 25px; letter-spacing: 2px;">Member</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 15px;"><a href="login.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.9rem;">My Account</a></li>
                        <li style="margin-bottom: 15px;"><a href="register.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.9rem;">Join Exclusive</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom" style="margin-top: 80px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
            <div class="footer-legal-links" style="margin-bottom: 25px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <a href="legal-notice.html" style="color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Legal Notice</a>
                <a href="privacy-policy.html" style="color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Privacy Policy</a>
                <a href="cookie-policy.html" style="color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Cookie Policy</a>
                <a href="terms-and-conditions.html" style="color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Terms & Conditions</a>
                <a href="cancellation-policy.html" style="color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Cancellation Policy</a>
                <a href="disclaimer.html" style="color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Disclaimer</a>
                <a href="index.html#contact" style="color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Contact</a>
            </div>
            <p style="color: rgba(255,255,255,0.4); font-size: 0.8rem; letter-spacing: 1px;">&copy; 2026 INDTARA EXPERIENCES. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/your-number" target="_blank" class="whatsapp-sticky" style="position: fixed; bottom: 30px; right: 30px; background: #25d366; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.3); z-index: 5000; transition: transform 0.3s ease;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="#fff"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-7.82c-.2-.099-1.185-.583-1.37-.648-.184-.066-.318-.099-.452.099-.133.201-.52 0-.648-.201-.13-.2-.184-.266-.38-.366-.197-.1-.924-.378-1.758-1.122-.647-.578-1.08-1.292-1.207-1.502-.127-.21-.014-.324.09-.425.093-.092.203-.239.3-.358.1-.12.133-.2.2-.33.067-.136.034-.252-.017-.353-.05-.101-.452-1.09-.619-1.498-.163-.395-.343-.34-.472-.346-.124-.006-.266-.008-.407-.008-.142 0-.374.053-.57.266-.197.213-.75.733-.75 1.787s.766 2.073.87 2.217c.105.145 1.507 2.3 3.65 3.226.51.22 1.083.352 1.5.385.57.056 1.083.029 1.49-.033.453-.069 1.37-.56 1.562-1.102.193-.541.193-1.005.13-1.102-.062-.1-.23-.162-.43-.263"/></svg>
    </a>
`;

function injectComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    function setupDropdowns() {
        const dropdowns = headerPlaceholder.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            const dropdownLink = dropdown.querySelector('a');
            if (dropdownMenu && dropdownLink) {
                if (window.innerWidth > 1024) {
                    dropdown.onmouseenter = () => { dropdownMenu.style.display = 'block'; };
                    dropdown.onmouseleave = () => { dropdownMenu.style.display = 'none'; };
                    dropdownLink.onclick = null;
                    dropdown.classList.remove('active');
                    dropdownMenu.style.display = '';
                } else {
                    dropdown.onmouseenter = null;
                    dropdown.onmouseleave = null;
                    dropdownLink.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dropdown.classList.toggle('active');
                        const isOpen = dropdown.classList.contains('active');
                        dropdownMenu.style.display = isOpen ? 'block' : 'none';
                    };
                }
            }
        });
    }

    function setupHighlighting() {
        const currentPath = window.location.pathname;
        const navLinks = headerPlaceholder.querySelectorAll('.top-nav-links a, .nav-links a');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (!linkPath) return;
            
            if (!link.classList.contains('login-nav-link')) {
                link.style.color = '#fff';
                link.style.fontWeight = '400';
            }
            
            if (currentPath.includes(linkPath) && linkPath !== '#' && linkPath !== 'index.html') {
                link.style.color = 'var(--color-accent)';
                link.style.fontWeight = '700';
            } else if ((currentPath === '/' || currentPath.includes('index.html')) && linkPath === 'index.html') {
                link.style.color = 'var(--color-accent)';
                link.style.fontWeight = '700';
            }
        });
    }

    function runBaseSetup() {
        setupDropdowns();
        setupHighlighting();

        const burger = headerPlaceholder.querySelector('.hamburger');
        const navLinksContainer = headerPlaceholder.querySelector('.nav-links');
        if (burger && navLinksContainer) {
            burger.onclick = () => {
                navLinksContainer.classList.toggle('active');
                burger.classList.toggle('active');
                document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
            };
        }
    }

    function setupMobileMenu() {
        if (window.innerWidth <= 1024) {
            const mobileLinks = headerPlaceholder.querySelector('.nav-links');
            const topNavLinks = headerPlaceholder.querySelector('.top-nav-links');
            const authLink = headerPlaceholder.querySelector('.login-nav-link');
            
            if (mobileLinks && topNavLinks && !headerPlaceholder.querySelector('.mobile-consolidated')) {
                const originalItems = Array.from(mobileLinks.querySelectorAll(':scope > li'));
                mobileLinks.innerHTML = '';

                const navHeader = document.createElement('li');
                navHeader.className = 'mobile-consolidated mobile-nav-label';
                navHeader.innerHTML = '<span>Main Menu</span>';
                mobileLinks.appendChild(navHeader);

                const items = topNavLinks.querySelectorAll(':scope > li');
                items.forEach(item => {
                    const link = item.querySelector('a');
                    if (link && !link.textContent.includes('Travel')) {
                        const clone = item.cloneNode(true);
                        clone.classList.add('mobile-consolidated', 'top-link-item');
                        mobileLinks.appendChild(clone);
                    }
                });

                const destHeader = document.createElement('li');
                destHeader.className = 'mobile-consolidated mobile-nav-label dest-label';
                destHeader.innerHTML = '<span>Our Destinations</span>';
                mobileLinks.appendChild(destHeader);

                const gridLi = document.createElement('li');
                gridLi.className = 'mobile-consolidated';
                gridLi.style.borderBottom = 'none';
                gridLi.style.padding = '0';
                
                const gridDiv = document.createElement('div');
                gridDiv.className = 'mobile-nav-country-grid';
                
                const countries = [
                    { name: 'India', url: 'india.html', flag: 'in' },
                    { name: 'Thailand', url: 'thailand.html', flag: 'th' },
                    { name: 'Singapore', url: 'singapore.html', flag: 'sg' },
                    { name: 'Dubai', url: 'dubai.html', flag: 'ae' },
                    { name: 'Malaysia', url: 'malaysia.html', flag: 'my' },
                    { name: 'Maldives', url: 'maldives.html', flag: 'mv' },
                    { name: 'Mauritius', url: 'mauritius.html', flag: 'mu' },
                    { name: 'Vietnam', url: 'vietnam.html', flag: 'vn' },
                    { name: 'USA', url: 'usa.html', flag: 'us' },
                    { name: 'Canada', url: '#', flag: 'ca' },
                    { name: 'UK', url: '#', flag: 'gb' },
                    { name: 'Switzerland', url: '#', flag: 'ch' },
                    { name: 'France', url: '#', flag: 'fr' }
                ];
                
                countries.forEach(country => {
                    const a = document.createElement('a');
                    a.href = country.url;
                    a.className = 'mobile-nav-country-card';
                    a.innerHTML = `<span class="flag-icon flag-icon-${country.flag} mobile-nav-country-flag"></span><span class="mobile-nav-country-name">${country.name}</span>`;
                    gridDiv.appendChild(a);
                });
                
                gridLi.appendChild(gridDiv);
                mobileLinks.appendChild(gridLi);

                if (authLink) {
                    const authLi = document.createElement('li');
                    authLi.className = 'mobile-consolidated auth-mobile-item';
                    const authClone = authLink.cloneNode(true);
                    authClone.removeAttribute('style');
                    authLi.appendChild(authClone);
                    mobileLinks.appendChild(authLi);
                }
                
                runBaseSetup();
            }
        } else {
            const consolidated = headerPlaceholder.querySelector('.mobile-consolidated');
            if (consolidated) {
                headerPlaceholder.innerHTML = HeaderHTML;
                runBaseSetup();
            }
        }
    }

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = HeaderHTML;
        runBaseSetup();
        setupMobileMenu();

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setupMobileMenu();
                setupDropdowns();
            }, 150);
        }, { passive: true });
    }
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = FooterHTML;
    }

    // Initialize smooth scrolling site-wide
    initLenisSmoothScroll();

    // Initialize Cookie Consent site-wide
    injectCookieConsent();
}

// --- Lenis Smooth Scrolling Integration ---
function initLenisSmoothScroll() {
    // 1. Add Lenis default styles
    const style = document.createElement('style');
    style.id = 'lenis-core-styles';
    style.innerHTML = `
        html { scroll-behavior: smooth; }
        html.lenis, html.lenis body {
            height: auto;
        }
        .lenis.lenis-smooth {
            scroll-behavior: auto !important;
        }
        .lenis.lenis-smooth [data-lenis-prevent] {
            overscroll-behavior: contain;
        }
        .lenis.lenis-stopped {
            overflow: hidden;
        }
        .lenis.lenis-smooth iframe {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    // 2. Load Lenis script
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js";
    script.onload = () => {
        // Initialize Lenis with Apple-style smooth scrolling
        const lenis = new Lenis({
            duration: 1.5, // slightly longer duration for organic inertia
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1.0,
            smoothTouch: false, // Use native touch momentum scrolling on mobile devices for peak performance
            touchMultiplier: 1.5,
        });

        window.lenis = lenis;

        // Sync with GSAP ScrollTrigger if loaded
        if (window.gsap && window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);
        } else {
            // Standalone RAF loop
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
        
        // Dispatch scroll event once to kickstart ScrollTrigger positions
        window.dispatchEvent(new Event('scroll'));
        console.log("Lenis Smooth Scroll Initialized successfully!");
    };
    
    document.head.appendChild(script);
}

// --- Real-time Cookie Consent Manager ---
const CookiePrefsModalHTML = `
    <!-- Cookie Preferences Modal -->
    <div id="cookie-prefs-modal" class="cookie-prefs-modal">
        <div class="cookie-prefs-content">
            <button class="cookie-prefs-close" id="cookie-prefs-close">&times;</button>
            <h3 class="cookie-prefs-title">Cookie Consent Preferences</h3>
            <p class="cookie-prefs-desc">We use cookies to personalize content, analyze traffic, and support our luxury travel services. Customize your privacy choices below.</p>
            
            <div class="cookie-pref-item">
                <div class="cookie-pref-info">
                    <h4>Essential Cookies</h4>
                    <p>Required for security, database authentication, and core functionality. Cannot be disabled.</p>
                </div>
                <div class="cookie-pref-toggle">
                    <input type="checkbox" id="pref-essential" checked disabled>
                    <label class="toggle-slider disabled" for="pref-essential"></label>
                </div>
            </div>

            <div class="cookie-pref-item">
                <div class="cookie-pref-info">
                    <h4>Analytics Cookies</h4>
                    <p>Enables us to track page traffic and optimize user interfaces for a seamless booking journey.</p>
                </div>
                <div class="cookie-pref-toggle">
                    <input type="checkbox" id="pref-analytics">
                    <label class="toggle-slider" for="pref-analytics"></label>
                </div>
            </div>

            <div class="cookie-pref-item">
                <div class="cookie-pref-info">
                    <h4>Marketing Cookies</h4>
                    <p>Allows us to customize travel deals and promotional materials matching your interests.</p>
                </div>
                <div class="cookie-pref-toggle">
                    <input type="checkbox" id="pref-marketing">
                    <label class="toggle-slider" for="pref-marketing"></label>
                </div>
            </div>

            <div class="cookie-pref-item">
                <div class="cookie-pref-info">
                    <h4>Personalization Cookies</h4>
                    <p>Remembers custom settings like language selection, dark mode parameters, and flight selections.</p>
                </div>
                <div class="cookie-pref-toggle">
                    <input type="checkbox" id="pref-personalization">
                    <label class="toggle-slider" for="pref-personalization"></label>
                </div>
            </div>

            <div class="cookie-prefs-buttons">
                <button class="cookie-prefs-btn save" id="save-cookie-prefs">Save Choices</button>
                <button class="cookie-prefs-btn accept-all" id="accept-all-cookie-prefs">Accept All</button>
            </div>
        </div>
    </div>
`;

const CookieConsent = {
    defaultPrefs: {
        essential: true,
        analytics: false,
        marketing: false,
        personalization: false
    },
    
    getPrefs() {
        const stored = localStorage.getItem('indtara_cookie_consent');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                return this.defaultPrefs;
            }
        }
        return null;
    },
    
    setPrefs(prefs) {
        localStorage.setItem('indtara_cookie_consent', JSON.stringify(prefs));
        localStorage.setItem('cookiesAccepted', 'true'); // For backward compatibility
        this.applyConsent(prefs);
        window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: prefs }));
    },
    
    applyConsent(prefs) {
        console.log("Applying cookie preferences in real-time:", prefs);
        
        // Analytics control
        if (prefs.analytics) {
            window['ga-disable-UA-XXXXXX-Y'] = false;
            console.log("Analytics cookies allowed.");
        } else {
            window['ga-disable-UA-XXXXXX-Y'] = true;
            this.clearAnalyticsCookies();
        }

        // Marketing control
        if (prefs.marketing) {
            console.log("Marketing/Targeting cookies allowed.");
        } else {
            this.clearMarketingCookies();
        }
        
        // Personalization control
        if (!prefs.personalization) {
            // Optional: reset language to default if disabled
            // localStorage.removeItem('selectedLanguage');
        }
    },
    
    clearAnalyticsCookies() {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            if (name.startsWith("_ga") || name.startsWith("_gid") || name.startsWith("_gat")) {
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname + ";";
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.location.hostname + ";";
            }
        }
    },
    
    clearMarketingCookies() {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            if (name.startsWith("_fbp") || name.startsWith("_fbc") || name.startsWith("fr")) {
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        }
    }
};

function injectCookieConsent() {
    // 1. Inject Preferences Modal
    if (!document.getElementById('cookie-prefs-modal')) {
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = CookiePrefsModalHTML;
        document.body.appendChild(modalDiv.firstElementChild);
    }
    
    const banner = document.getElementById('cookie-banner');
    const modal = document.getElementById('cookie-prefs-modal');
    
    const btnAccept = document.getElementById('accept-cookies');
    const btnReject = document.getElementById('reject-cookies');
    const btnPrefs = document.getElementById('cookie-preferences');
    
    const btnCloseModal = document.getElementById('cookie-prefs-close');
    const btnSavePrefs = document.getElementById('save-cookie-prefs');
    const btnAcceptAllModal = document.getElementById('accept-all-cookie-prefs');
    
    const toggleAnalytics = document.getElementById('pref-analytics');
    const toggleMarketing = document.getElementById('pref-marketing');
    const togglePersonalization = document.getElementById('pref-personalization');
    
    // Check current prefs
    const currentPrefs = CookieConsent.getPrefs();
    
    if (currentPrefs) {
        // Enforce preferences in real-time
        CookieConsent.applyConsent(currentPrefs);
    } else {
        // Show banner after 1.5 seconds if no consent has been logged
        setTimeout(() => {
            if (banner) banner.classList.add('show');
        }, 1500);
    }
    
    // Helper to open preferences modal
    window.showCookiePreferences = function() {
        const activePrefs = CookieConsent.getPrefs() || CookieConsent.defaultPrefs;
        if (toggleAnalytics) toggleAnalytics.checked = activePrefs.analytics;
        if (toggleMarketing) toggleMarketing.checked = activePrefs.marketing;
        if (togglePersonalization) togglePersonalization.checked = activePrefs.personalization;
        
        if (modal) modal.classList.add('show');
    };
    
    // Connect banner triggers
    if (btnAccept) {
        btnAccept.addEventListener('click', () => {
            CookieConsent.setPrefs({ essential: true, analytics: true, marketing: true, personalization: true });
            if (banner) banner.classList.remove('show');
        });
    }
    
    if (btnReject) {
        btnReject.addEventListener('click', () => {
            CookieConsent.setPrefs({ essential: true, analytics: false, marketing: false, personalization: false });
            if (banner) banner.classList.remove('show');
        });
    }
    
    if (btnPrefs) {
        btnPrefs.addEventListener('click', (e) => {
            e.preventDefault();
            window.showCookiePreferences();
        });
    }
    
    // Connect modal triggers
    if (btnCloseModal) {
        btnCloseModal.addEventListener('click', () => {
            if (modal) modal.classList.remove('show');
        });
    }
    
    if (btnSavePrefs) {
        btnSavePrefs.addEventListener('click', () => {
            const prefs = {
                essential: true,
                analytics: toggleAnalytics ? toggleAnalytics.checked : false,
                marketing: toggleMarketing ? toggleMarketing.checked : false,
                personalization: togglePersonalization ? togglePersonalization.checked : false
            };
            CookieConsent.setPrefs(prefs);
            if (modal) modal.classList.remove('show');
            if (banner) banner.classList.remove('show');
        });
    }
    
    if (btnAcceptAllModal) {
        btnAcceptAllModal.addEventListener('click', () => {
            CookieConsent.setPrefs({ essential: true, analytics: true, marketing: true, personalization: true });
            if (modal) modal.classList.remove('show');
            if (banner) banner.classList.remove('show');
        });
    }
    
    // Global listener for opening preferences by class
    document.addEventListener('click', (e) => {
        if (e.target && (e.target.classList.contains('open-cookie-settings') || e.target.closest('.open-cookie-settings'))) {
            e.preventDefault();
            window.showCookiePreferences();
        }
    });

    // Clean links dynamically to support clean URLs and hide empty # links
    function cleanLink(a) {
        const href = a.getAttribute('href');
        if (href) {
            if (href.includes('package-details.html?id=')) {
                const pkgId = href.split('?id=')[1];
                a.setAttribute('href', '/packages/' + pkgId);
                return;
            }
            if (href.endsWith('.html')) {
                a.setAttribute('href', href.slice(0, -5));
            } else if (href.includes('.html?')) {
                a.setAttribute('href', href.replace('.html?', '?'));
            } else if (href.includes('.html#')) {
                a.setAttribute('href', href.replace('.html#', '#'));
            }
            if (href === '#') {
                a.removeAttribute('href');
                a.style.cursor = 'pointer';
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                });
            }
        }
    }

    function cleanAllLinks() {
        document.querySelectorAll('a').forEach(cleanLink);
    }

    cleanAllLinks();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.tagName === 'A') {
                        cleanLink(node);
                    }
                    node.querySelectorAll('a').forEach(cleanLink);
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', injectComponents);

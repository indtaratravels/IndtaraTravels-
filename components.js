const HeaderHTML = `
    <!-- ========== TOP HEADER ========== -->
    <header class="top-header" style="background: #050d0a; border-bottom: 1px solid rgba(203, 161, 83, 0.15); height: 45px; display: flex; align-items: center; padding: 0 40px; position: fixed; top: 0; width: 100%; z-index: 2000;">
        <ul class="top-nav-links" style="display: flex; list-style: none; gap: 30px; margin: 0; padding: 0;">
            <li><a href="index.html" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">Home</a></li>
            <li class="dropdown" style="position: relative;">
                <a href="#" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">Travel <span class="dropdown-arrow">&#9662;</span></a>
                <ul class="dropdown-menu" style="position: absolute; top: 100%; left: 0; background: #0a1712; border: 1px solid #cba153; list-style: none; padding: 10px 0; min-width: 150px; display: none;">
                    <li><a href="india.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">India</a></li>
                    <li><a href="thailand.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Thailand</a></li>
                    <li><a href="singapore.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Singapore</a></li>
                    <li><a href="dubai.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Dubai</a></li>
                    <li><a href="malaysia.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Malaysia</a></li>
                    <li><a href="maldives.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Maldives</a></li>
                    <li><a href="mauritius.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Mauritius</a></li>
                    <li><a href="vietnam.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Vietnam</a></li>
                    <li><a href="usa.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">USA</a></li>
                    <li><hr style="border: 0; border-top: 1px solid rgba(203, 161, 83, 0.2); margin: 5px 10px;"></li>
                    <li><a href="#" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Canada</a></li>
                    <li><a href="#" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">United Kingdom</a></li>
                    <li><a href="#" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Switzerland</a></li>
                    <li><a href="#" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">France</a></li>
                </ul>
            </li>
            <li><a href="packages.html" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">Packages</a></li>
            <li><a href="index.html#about" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">About</a></li>
            <li><a href="index.html#contact" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">Contact</a></li>
        </ul>
        <div class="top-right-links" style="margin-left: auto;">
            <a href="login.html" class="login-nav-link" data-i18n="nav_login" style="color: #cba153; text-decoration: none; font-size: 0.75rem; font-weight: 600; letter-spacing: 2px; border: 1px solid rgba(203,161,83,0.5); padding: 5px 15px; border-radius: 3px;">LOGIN/REGISTER</a>
        </div>
    </header>

    <!-- ========== NAVBAR ========== -->
    <nav class="navbar" style="background: rgba(5, 13, 10, 0.95); backdrop-filter: blur(10px); top: 45px; height: 80px; display: flex; align-items: center; padding: 0 40px; position: fixed; width: 100%; z-index: 1900; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div class="logo-container" onclick="window.location.href='index.html'" style="cursor: pointer; display: flex; align-items: center;">
            <img src="assets/indtara logo.png" alt="Indtara Experiences" style="height: 60px;">
        </div>
        <div class="nav-right" style="margin-left: auto; display: flex; align-items: center; gap: 20px;">
            <div class="language-picker">
                <select id="language-selector">
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                    <option value="it">IT</option>
                </select>
            </div>
            <ul class="nav-links" style="display: flex; list-style: none; gap: 15px; margin: 0; padding: 0;">
                <li><a href="india.html" data-i18n="nav_india" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">India</a></li>
                <li><a href="thailand.html" data-i18n="nav_thailand" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">Thailand</a></li>
                <li><a href="singapore.html" data-i18n="nav_singapore" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">Singapore</a></li>
                <li><a href="dubai.html" data-i18n="nav_dubai" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">Dubai</a></li>
                <li><a href="malaysia.html" data-i18n="nav_malaysia" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">Malaysia</a></li>
                <li><a href="maldives.html" data-i18n="nav_maldives" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">Maldives</a></li>
                <li><a href="mauritius.html" data-i18n="nav_mauritius" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">Mauritius</a></li>
                <li><a href="vietnam.html" data-i18n="nav_vietnam" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">Vietnam</a></li>
                <li><a href="usa.html" data-i18n="nav_usa" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">USA</a></li>
                <li class="dropdown" style="position: relative;">
                    <a href="#" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; opacity: 0.9;">More <span class="dropdown-arrow">&#9662;</span></a>
                    <ul class="dropdown-menu dropdown-menu-right" style="position: absolute; top: 100%; right: 0; background: #0a1712; border: 1px solid #cba153; list-style: none; padding: 10px 0; min-width: 150px; display: none; z-index: 10000;">
                        <li><a href="#" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.7rem; opacity: 0.8;">Canada</a></li>
                        <li><a href="#" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.7rem; opacity: 0.8;">United Kingdom</a></li>
                        <li><a href="#" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.7rem; opacity: 0.8;">Switzerland</a></li>
                        <li><a href="#" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.7rem; opacity: 0.8;">France</a></li>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.548 0 10.058-4.51 10.06-10.059.002-2.689-1.047-5.215-2.951-7.121-1.905-1.904-4.432-2.951-7.125-2.952-5.548 0-10.06 4.512-10.063 10.06-.001 2.132.547 3.53 1.554 5.09l-.994 3.635 3.705-.97zm10.103-8.132c-.333-.167-1.969-.971-2.274-1.081-.306-.11-.528-.167-.75.167-.221.333-.859 1.081-1.054 1.304-.194.223-.389.25-.722.083-.333-.167-1.405-.518-2.675-1.651-.988-.881-1.654-1.969-1.848-2.304-.194-.334-.021-.515.145-.681.15-.15.333-.389.5-.583.166-.194.222-.333.333-.555.111-.222.056-.417-.028-.583-.083-.167-.75-1.804-1.027-2.47-.27-.652-.546-.564-.75-.574l-.638-.01c-.222 0-.583.083-.889.417-.305.333-1.166 1.139-1.166 2.776 0 1.637 1.193 3.219 1.359 3.441.166.222 2.348 3.585 5.688 5.031.794.344 1.415.549 1.899.703.797.253 1.524.217 2.097.131.641-.096 1.969-.805 2.247-1.583.278-.778.278-1.444.194-1.583-.083-.139-.306-.222-.639-.389z"/></svg>
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
                    <p>Required for security, Supabase login authentication, and core functionality. Cannot be disabled.</p>
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
}

document.addEventListener('DOMContentLoaded', injectComponents);

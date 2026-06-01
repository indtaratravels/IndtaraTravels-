const HeaderHTML = `
    <!-- ========== TOP HEADER ========== -->
    <header class="top-header" style="background: #050d0a; border-bottom: 1px solid rgba(203, 161, 83, 0.15); height: 45px; display: flex; align-items: center; padding: 0 40px; position: fixed; top: 0; width: 100%; z-index: 2000;">
        <ul class="top-nav-links" style="display: flex; list-style: none; gap: 30px; margin: 0; padding: 0;">
            <li><a href="index.html" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">Home</a></li>
            <li class="dropdown" style="position: relative;">
                <a href="#" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">Travel <span class="dropdown-arrow">▾</span></a>
                <ul class="dropdown-menu" style="position: absolute; top: 100%; left: 0; background: #0a1712; border: 1px solid #cba153; list-style: none; padding: 10px 0; min-width: 150px; display: none;">
                    <li><a href="india.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">India</a></li>
                    <li><a href="thailand.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Thailand</a></li>
                    <li><a href="singapore.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Singapore</a></li>
                    <li><a href="dubai.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Dubai</a></li>
                    <li><a href="malaysia.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Malaysia</a></li>
                    <li><a href="maldives.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Maldives</a></li>
                    <li><a href="mauritius.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Mauritius</a></li>
                    <li><a href="vietnam.html" style="padding: 10px 20px; display: block; color: #fff; text-decoration: none; font-size: 0.75rem; opacity: 0.8;">Vietnam</a></li>
                </ul>
            </li>
            <li><a href="packages.html" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">Packages</a></li>
            <li><a href="index.html#about" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">About</a></li>
            <li><a href="index.html#contact" style="color: #fff; text-decoration: none; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-family: 'Montserrat', sans-serif; opacity: 0.8;">Contact</a></li>
        </ul>
        <div class="top-right-links" style="margin-left: auto;">
            <a href="login.html" class="login-nav-link" style="color: #cba153; text-decoration: none; font-size: 0.75rem; font-weight: 600; letter-spacing: 2px; border: 1px solid rgba(203,161,83,0.5); padding: 5px 15px; border-radius: 3px;">MEMBER LOGIN</a>
        </div>
    </header>

    <!-- ========== NAVBAR ========== -->
    <nav class="navbar" style="background: rgba(5, 13, 10, 0.95); backdrop-filter: blur(10px); top: 45px; height: 80px; display: flex; align-items: center; padding: 0 40px; position: fixed; width: 100%; z-index: 1900; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div class="logo-container" onclick="window.location.href='index.html'" style="cursor: pointer; display: flex; align-items: center;">
            <img src="assets/indtara logo.png" alt="Indtara Travels" style="height: 60px;">
        </div>
        <div class="nav-right" style="margin-left: auto; display: flex; align-items: center; gap: 35px;">
            <div class="language-picker">
                <select id="language-selector">
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                    <option value="it">IT</option>
                </select>
            </div>
            <ul class="nav-links" style="display: flex; list-style: none; gap: 20px; margin: 0; padding: 0;">
                <li><a href="india.html" data-i18n="nav_india" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; opacity: 0.9;">India</a></li>
                <li><a href="thailand.html" data-i18n="nav_thailand" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; opacity: 0.9;">Thailand</a></li>
                <li><a href="singapore.html" data-i18n="nav_singapore" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; opacity: 0.9;">Singapore</a></li>
                <li><a href="dubai.html" data-i18n="nav_dubai" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; opacity: 0.9;">Dubai</a></li>
                <li><a href="malaysia.html" data-i18n="nav_malaysia" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; opacity: 0.9;">Malaysia</a></li>
                <li><a href="maldives.html" data-i18n="nav_maldives" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; opacity: 0.9;">Maldives</a></li>
                <li><a href="mauritius.html" data-i18n="nav_mauritius" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; opacity: 0.9;">Mauritius</a></li>
                <li><a href="vietnam.html" data-i18n="nav_vietnam" style="color: #fff; text-decoration: none; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; opacity: 0.9;">Vietnam</a></li>
            </ul>
            <div class="hamburger" style="display: none; flex-direction: column; gap: 5px; cursor: pointer;">
                <span style="width: 25px; height: 2px; background: #cba153;"></span>
                <span style="width: 25px; height: 2px; background: #cba153;"></span>
                <span style="width: 25px; height: 2px; background: #cba153;"></span>
            </div>
        </div>
    </nav>
`;

const FooterHTML = `
    <footer class="site-footer" style="background: #050d0a; padding: 100px 5% 50px; border-top: 1px solid rgba(203, 161, 83, 0.15); color: #ffffff;">
        <div class="footer-container" style="max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 60px;">
            <div class="footer-brand">
                <img src="assets/indtara logo.png" alt="Indtara Travels" style="height: 70px; margin-bottom: 30px;">
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
            <p style="color: rgba(255,255,255,0.4); font-size: 0.8rem; letter-spacing: 1px;">&copy; 2026 INDTARA TRAVELS. ALL RIGHTS RESERVED.</p>
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

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = HeaderHTML;
        
        // Setup dropdown toggle
        const dropdown = headerPlaceholder.querySelector('.dropdown');
        const dropdownMenu = headerPlaceholder.querySelector('.dropdown-menu');
        if (dropdown && dropdownMenu) {
            dropdown.onmouseenter = () => dropdownMenu.style.display = 'block';
            dropdown.onmouseleave = () => dropdownMenu.style.display = 'none';
        }

        // Fix Highlighting Logic
        const currentPath = window.location.pathname;
        const navLinks = headerPlaceholder.querySelectorAll('.top-nav-links a, .nav-links a');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            // Remove active color from all
            if (!link.classList.contains('login-nav-link')) {
                link.style.color = '#fff';
                link.style.fontWeight = '400';
            }
            
            // Highlight current
            if (currentPath.includes(linkPath) && linkPath !== '#' && linkPath !== 'index.html') {
                link.style.color = 'var(--color-accent)';
                link.style.fontWeight = '700';
            } else if ((currentPath === '/' || currentPath.includes('index.html')) && linkPath === 'index.html') {
                link.style.color = 'var(--color-accent)';
                link.style.fontWeight = '700';
            }
        });

        // Hamburger mobile support (toggles active classes, triggering slide-out transitions)
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
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = FooterHTML;
    }

    // Add CSS for reduced logo glow and footer alignment
    const style = document.createElement('style');
    style.innerHTML = `
        .logo-container img {
            filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.2)) !important;
            transition: filter 0.3s ease;
        }
        .logo-container:hover img {
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4)) !important;
        }
        .footer-col ul li a:hover {
            color: #cba153 !important;
            padding-left: 5px;
        }
        .footer-col ul li a {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', injectComponents);

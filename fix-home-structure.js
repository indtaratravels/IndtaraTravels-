const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Reconstruct the Main Content in Correct Order
const cardData = [
    { country: 'INDIA', city: 'Timeless Heritage', price: '₹34,999', duration: '6 DAYS / 5 NIGHTS', image: 'assets/palace.png', flag: 'in', href: 'india.html' },
    { country: 'THAILAND', city: 'Tropical Paradise', price: '₹28,999', duration: '5 DAYS / 4 NIGHTS', image: 'assets/thailand_island.png', flag: 'th', href: 'thailand.html' },
    { country: 'SINGAPORE', city: 'City of Tomorrow', price: '₹42,999', duration: '4 DAYS / 3 NIGHTS', image: 'assets/singapore_skyline.png', flag: 'sg', href: 'singapore.html' },
    { country: 'DUBAI', city: 'Luxury Redefined', price: '₹48,999', duration: '5 DAYS / 4 NIGHTS', image: 'assets/dubai_burj.png', flag: 'ae', href: 'dubai.html' },
    { country: 'MALAYSIA', city: 'Cultural Melting Pot', price: '₹31,999', duration: '4 DAYS / 3 NIGHTS', image: 'assets/malaysia_city.png', flag: 'my', href: 'malaysia.html' },
    { country: 'MALDIVES', city: 'Azure Bliss', price: '₹75,999', duration: '4 DAYS / 3 NIGHTS', image: 'assets/maldives_ocean_view.png', flag: 'mv', href: 'maldives.html' },
    { country: 'MAURITIUS', city: 'Paradise Found', price: '₹58,999', duration: '6 DAYS / 5 NIGHTS', image: 'assets/mauritius.png', flag: 'mu', href: 'mauritius.html' },
    { country: 'VIETNAM', city: 'Hidden Gem', price: '₹29,999', duration: '5 DAYS / 4 NIGHTS', image: 'assets/hoian_night.png', flag: 'vn', href: 'vietnam.html' }
];

const cardsHtml = cardData.map((d, i) => `
                    <div class="carousel-card" data-index="${i}" data-href="${d.href}">
                        <div class="card-glow"></div>
                        <img src="${d.image}" alt="${d.country}" class="card-img">
                        <div class="card-overlay"></div>
                        ${i === 1 ? '<div class="card-badge">❤ MOST LOVED</div>' : ''}
                        <div class="card-content">
                            <div class="card-country-row">
                                <span class="flag-icon flag-icon-${d.flag}"></span>
                                <span class="card-country">${d.country}</span>
                            </div>
                            <h3 class="card-city">${d.city}</h3>
                            <div class="card-footer-row">
                                <div class="card-price-col">
                                    <span class="price-label">STARTING FROM</span>
                                    <span class="price-value">${d.price}</span>
                                </div>
                                <div class="card-duration">${d.duration}</div>
                            </div>
                        </div>
                    </div>`).join('\n');

const mainContent = `
    <main>
        <!-- Premium Infinite Luxury Carousel Hero Section -->
        <section class="luxury-carousel-hero">
            <div class="luxury-hero-container">
                <div class="luxury-hero-left">
                    <span class="luxury-brand-badge">INDTARA</span>
                    <h1 class="luxury-hero-title">CRAFTED <br> LUXURY <br> JOURNEYS</h1>
                    <p class="luxury-hero-desc">Discover the world in a way you've never imagined.</p>
                    <div class="luxury-hero-actions">
                        <button class="luxury-btn-explore" onclick="window.location.href='packages.html'">EXPLORE PACKAGES <span>❯</span></button>
                        <button class="watch-video-btn" onclick="window.location.href='#contact'">
                            <div class="play-icon">▶</div>
                            <div class="video-text">
                                <span class="vt-title">WATCH VIDEO</span>
                                <span class="vt-sub">See Indtara Experience</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="luxury-carousel-right">
                    <div class="carousel-3d-container">
                        ${cardsHtml}
                    </div>
                    <button class="carousel-nav-btn nav-prev" onclick="rotateCarousel(-1)">❮</button>
                    <button class="carousel-nav-btn nav-next" onclick="rotateCarousel(1)">❯</button>
                </div>
            </div>

            <!-- Custom Pagination Slider Track -->
            <div class="luxury-carousel-track-wrapper" onclick="handleTrackClick(event)">
                <span class="track-num track-current" id="track-current-idx">01</span>
                <div class="track-line-container">
                    <div class="track-line-progress" id="track-progress-bar"></div>
                </div>
                <span class="track-num track-total">08</span>
            </div>
        </section>

        <!-- Trust Bar Section -->
        <section class="trust-bar-section">
            <div class="trust-bar-container">
                <div class="trust-item">
                    <div class="trust-icon">🏨</div>
                    <div class="trust-text">
                        <strong>Luxury Stays</strong>
                        <span>Handpicked Hotels</span>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">💎</div>
                    <div class="trust-text">
                        <strong>Curated Experiences</strong>
                        <span>Unique & Authentic</span>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">🎧</div>
                    <div class="trust-text">
                        <strong>24/7 Support</strong>
                        <span>Always With You</span>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">🏷️</div>
                    <div class="trust-text">
                        <strong>Best Price Guarantee</strong>
                        <span>Unbeatable Deals</span>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">🔒</div>
                    <div class="trust-text">
                        <strong>Secure Booking</strong>
                        <span>100% Safe & Secure</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Popular Destinations Section -->
        <section class="popular-destinations">
            <div class="section-header-row">
                <div class="sh-line"></div>
                <h2>POPULAR DESTINATIONS</h2>
                <div class="sh-line"></div>
            </div>
            <div class="popular-grid">
                <div class="popular-card" onclick="window.location.href='bali.html'">
                    <img src="assets/bali.png" alt="Bali">
                    <div class="pc-content">
                        <h3>BALI</h3>
                        <span>Island of Gods</span>
                    </div>
                </div>
                <div class="popular-card" onclick="window.location.href='maldives.html'">
                    <img src="assets/maldives_resort.png" alt="Maldives">
                    <div class="pc-content">
                        <h3>MALDIVES</h3>
                        <span>Pure Bliss</span>
                    </div>
                </div>
                <div class="popular-card" onclick="window.location.href='packages.html'">
                    <img src="assets/swiss.png" alt="Switzerland">
                    <div class="pc-content">
                        <h3>SWITZERLAND</h3>
                        <span>Heaven on Earth</span>
                    </div>
                </div>
                <div class="popular-card" onclick="window.location.href='packages.html'">
                    <img src="assets/europe.png" alt="Europe">
                    <div class="pc-content">
                        <h3>EUROPE</h3>
                        <span>Timeless Beauty</span>
                    </div>
                </div>
                <div class="popular-card" onclick="window.location.href='mauritius.html'">
                    <img src="assets/mauritius.png" alt="Mauritius">
                    <div class="pc-content">
                        <h3>MAURITIUS</h3>
                        <span>Tropical Luxury</span>
                    </div>
                </div>
                <div class="popular-card" onclick="window.location.href='packages.html'">
                    <img src="assets/japan.png" alt="Japan">
                    <div class="pc-content">
                        <h3>JAPAN</h3>
                        <span>Tradition & Future</span>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Mobile Night Carousel Section (Restored at bottom) -->
        <section class="mobile-night-carousel" aria-label="Cultural Night Destinations">
            <div class="night-carousel-track">
                <!-- Slide 1: Varanasi -->
                <div class="night-slide active">
                    <div class="night-bg" style="background-image: url('assets/varanasi_night.png');"></div>
                    <div class="night-content">
                        <span class="night-eyebrow">India</span>
                        <h2 class="night-title">Varanasi Aarti</h2>
                        <p class="night-copy">Experience the spiritual glow of the ancient Ganges at night.</p>
                        <div class="night-actions">
                            <a href="#contact" class="night-btn primary">Plan Trip</a>
                            <a href="india.html" class="night-btn secondary">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
`;

// Replace everything between <main> and </main>
const mainRegex = /<main>[\s\S]*?<\/main>/i;
html = html.replace(mainRegex, mainContent);

// 2. Fix CSS to match the image exactly
const updatedStyles = `
        /* ======= Hero Redesign ======= */
        .luxury-carousel-hero {
            padding-top: 180px !important;
            min-height: 85vh !important;
        }

        .luxury-hero-title {
            font-size: 5.5rem !important;
            letter-spacing: -2px !important;
            margin-bottom: 20px !important;
        }

        .watch-video-btn {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            color: #fff;
            padding: 10px;
        }

        .play-icon {
            width: 55px;
            height: 55px;
            border: 1px solid rgba(255,255,255,0.4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .watch-video-btn:hover .play-icon {
            background: #cba153;
            border-color: #cba153;
            color: #000;
            transform: scale(1.1);
        }

        .video-text {
            text-align: left;
            display: flex;
            flex-direction: column;
        }

        .vt-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 2px;
        }

        .vt-sub {
            font-size: 0.7rem;
            opacity: 0.6;
        }

        /* Carousel Card Enhancements */
        .carousel-card {
            border-radius: 12px !important;
            border: 1px solid rgba(255,255,255,0.1) !important;
            background: #050d0a !important;
        }

        .carousel-card.active-card {
            border: 2px solid #cba153 !important;
            box-shadow: 0 0 40px rgba(203, 161, 83, 0.4) !important;
        }

        .card-badge {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(0,0,0,0.7);
            color: #fff;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.65rem;
            font-weight: 700;
            z-index: 10;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.2);
        }

        .card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 25px;
            z-index: 10;
            box-sizing: border-box;
            background: linear-gradient(transparent, rgba(0,0,0,0.9));
        }

        .card-country-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;
        }

        .card-country {
            font-size: 0.75rem;
            letter-spacing: 2px;
            opacity: 0.9;
            text-transform: uppercase;
            font-weight: 600;
        }

        .card-city {
            font-family: 'Cinzel', serif;
            font-size: 1.8rem !important;
            margin: 0 0 18px 0 !important;
            color: #fff;
            line-height: 1.2;
        }

        .card-footer-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 15px;
        }

        .price-label {
            display: block;
            font-size: 0.6rem;
            opacity: 0.6;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }

        .price-value {
            color: #cba153;
            font-weight: 700;
            font-size: 1.3rem !important;
        }

        .card-duration {
            font-size: 0.7rem;
            opacity: 0.8;
            font-weight: 500;
        }

        /* Trust Bar */
        .trust-bar-section {
            background: rgba(255,255,255,0.02);
            border-top: 1px solid rgba(255,255,255,0.05);
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 40px 0;
            margin-top: 40px;
        }

        .trust-bar-container {
            max-width: 1500px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 40px;
        }

        .trust-item {
            display: flex;
            align-items: center;
            gap: 18px;
        }

        .trust-icon {
            font-size: 1.8rem;
            width: 60px;
            height: 60px;
            background: rgba(203, 161, 83, 0.05);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(203, 161, 83, 0.1);
        }

        .trust-text {
            display: flex;
            flex-direction: column;
        }

        .trust-text strong {
            font-size: 0.95rem;
            color: #fff;
            margin-bottom: 4px;
        }

        .trust-text span {
            font-size: 0.75rem;
            opacity: 0.6;
        }

        /* Popular Destinations */
        .popular-destinations {
            padding: 120px 5% 80px;
            max-width: 1500px;
            margin: 0 auto;
        }

        .section-header-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
            margin-bottom: 70px;
        }

        .sh-line {
            height: 1px;
            background: #cba153;
            flex: 1;
            max-width: 300px;
            opacity: 0.2;
        }

        .section-header-row h2 {
            font-family: 'Cinzel', serif;
            font-size: 1.6rem;
            letter-spacing: 5px;
            color: #cba153;
            margin: 0;
        }

        .popular-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 25px;
        }

        .popular-card {
            position: relative;
            height: 320px;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.05);
            transition: all 0.4s ease;
        }

        .popular-card:hover {
            transform: translateY(-10px);
            border-color: rgba(203, 161, 83, 0.3);
            box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }

        .popular-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s ease;
        }

        .popular-card:hover img {
            transform: scale(1.15);
        }

        .pc-content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 25px;
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);
            box-sizing: border-box;
        }

        .pc-content h3 {
            font-family: 'Cinzel', serif;
            font-size: 1.3rem;
            margin: 0 0 5px 0;
            color: #fff;
            letter-spacing: 1px;
        }

        .pc-content span {
            font-size: 0.8rem;
            color: #cba153;
            font-weight: 500;
        }
`;

// Update the style tag (replace existing block if found, otherwise append)
const styleRegex = /<style>[\s\S]*?<\/style>/i;
let currentStyle = html.match(styleRegex)[0];
// We'll append our new styles to the end of the existing style block
html = html.replace('</style>', updatedStyles + '\n    </style>');

fs.writeFileSync(indexPath, html);
console.log('Home page structure fixed and redesign applied!');

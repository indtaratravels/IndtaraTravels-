const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Update Carousel Card Template and Data
// We'll replace the existing carousel-card structures with more detailed ones
const cardData = [
    { country: 'INDIA', city: 'Timeless Heritage', price: '₹34,999', duration: '6 DAYS / 5 NIGHTS', image: 'assets/palace.png', flag: 'in', active: false },
    { country: 'THAILAND', city: 'Tropical Paradise', price: '₹28,999', duration: '5 DAYS / 4 NIGHTS', image: 'assets/thailand_island.png', flag: 'th', active: true },
    { country: 'SINGAPORE', city: 'City of Tomorrow', price: '₹42,999', duration: '4 DAYS / 3 NIGHTS', image: 'assets/singapore_skyline.png', flag: 'sg', active: false },
    { country: 'DUBAI', city: 'Luxury Redefined', price: '₹48,999', duration: '5 DAYS / 4 NIGHTS', image: 'assets/dubai_burj.png', flag: 'ae', active: false }
];

let cardsHtml = cardData.map(d => `
                    <div class="carousel-card ${d.active ? 'active' : ''}">
                        <div class="card-glow"></div>
                        <img src="${d.image}" alt="${d.country}" class="card-img">
                        <div class="card-overlay"></div>
                        ${d.active ? '<div class="card-badge">❤ MOST LOVED</div>' : ''}
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

// Replace the carousel-3d-container content
const carouselRegex = /<div class="carousel-3d-container">[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/i;
// This regex might be tricky, let's target the inner cards specifically.
// Actually, I'll just replace the whole luxury-hero-container content for better control.

const heroContainerContent = `
            <div class="luxury-hero-left">
                <span class="luxury-brand-badge">INDTARA</span>
                <h1 class="luxury-hero-title">CRAFTED <br> LUXURY <br> JOURNEYS</h1>
                <p class="luxury-hero-desc">Discover the world in a way you've never imagined.</p>
                <div class="luxury-hero-actions">
                    <button class="luxury-btn-explore" onclick="window.location.href='packages.html'">EXPLORE PACKAGES <span>❯</span></button>
                    <button class="watch-video-btn">
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
                <button class="carousel-nav-btn nav-prev">❮</button>
                <button class="carousel-nav-btn nav-next">❯</button>
            </div>
`;

html = html.replace(/<div class="luxury-hero-container">[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/section>/i, `<div class="luxury-hero-container">${heroContainerContent}</div>\n        </section>`);

// 2. Add Trust Bar and Popular Destinations
const newSections = `
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
                <div class="popular-card">
                    <img src="assets/bali.png" alt="Bali">
                    <div class="pc-content">
                        <h3>BALI</h3>
                        <span>Island of Gods</span>
                    </div>
                </div>
                <div class="popular-card">
                    <img src="assets/maldives_resort.png" alt="Maldives">
                    <div class="pc-content">
                        <h3>MALDIVES</h3>
                        <span>Pure Bliss</span>
                    </div>
                </div>
                <div class="popular-card">
                    <img src="assets/swiss.png" alt="Switzerland">
                    <div class="pc-content">
                        <h3>SWITZERLAND</h3>
                        <span>Heaven on Earth</span>
                    </div>
                </div>
                <div class="popular-card">
                    <img src="assets/europe.png" alt="Europe">
                    <div class="pc-content">
                        <h3>EUROPE</h3>
                        <span>Timeless Beauty</span>
                    </div>
                </div>
                <div class="popular-card">
                    <img src="assets/mauritius.png" alt="Mauritius">
                    <div class="pc-content">
                        <h3>MAURITIUS</h3>
                        <span>Tropical Luxury</span>
                    </div>
                </div>
                <div class="popular-card">
                    <img src="assets/japan.png" alt="Japan">
                    <div class="pc-content">
                        <h3>JAPAN</h3>
                        <span>Tradition & Future</span>
                    </div>
                </div>
            </div>
        </section>
`;

// Inject sections after the hero section
html = html.replace('</section>', '</section>\n' + newSections);

// 3. Update CSS for the new Hero and Sections
const newStyles = `
        /* ======= Hero Redesign ======= */
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
            width: 50px;
            height: 50px;
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
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 2px;
        }

        .vt-sub {
            font-size: 0.65rem;
            opacity: 0.6;
        }

        /* Carousel Card Enhancements */
        .carousel-card {
            background: #111;
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.6s cubic-bezier(0.2, 1, 0.3, 1);
            border: 1px solid rgba(255,255,255,0.1);
        }

        .carousel-card.active {
            border: 2px solid #cba153;
            box-shadow: 0 0 30px rgba(203, 161, 83, 0.4);
        }

        .card-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(0,0,0,0.7);
            color: #fff;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.6rem;
            font-weight: 700;
            z-index: 5;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.2);
        }

        .card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 25px;
            z-index: 5;
            box-sizing: border-box;
        }

        .card-country-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .card-country {
            font-size: 0.7rem;
            letter-spacing: 2px;
            opacity: 0.8;
            text-transform: uppercase;
        }

        .card-city {
            font-family: 'Cinzel', serif;
            font-size: 1.6rem;
            margin: 0 0 15px 0;
            color: #fff;
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
            font-size: 0.55rem;
            opacity: 0.5;
            letter-spacing: 1px;
            margin-bottom: 4px;
        }

        .price-value {
            color: #cba153;
            font-weight: 700;
            font-size: 1.1rem;
        }

        .card-duration {
            font-size: 0.65rem;
            opacity: 0.7;
        }

        /* Trust Bar */
        .trust-bar-section {
            background: rgba(255,255,255,0.03);
            border-top: 1px solid rgba(255,255,255,0.05);
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 30px 0;
        }

        .trust-bar-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 30px;
        }

        .trust-item {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .trust-icon {
            font-size: 1.5rem;
            color: #cba153;
        }

        .trust-text {
            display: flex;
            flex-direction: column;
        }

        .trust-text strong {
            font-size: 0.85rem;
            color: #fff;
        }

        .trust-text span {
            font-size: 0.7rem;
            opacity: 0.6;
        }

        /* Popular Destinations */
        .popular-destinations {
            padding: 100px 5%;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-header-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-bottom: 60px;
        }

        .sh-line {
            height: 1px;
            background: #cba153;
            flex: 1;
            max-width: 200px;
            opacity: 0.3;
        }

        .section-header-row h2 {
            font-family: 'Cinzel', serif;
            font-size: 1.4rem;
            letter-spacing: 4px;
            color: #cba153;
        }

        .popular-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .popular-card {
            position: relative;
            height: 280px;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .popular-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
        }

        .popular-card:hover img {
            transform: scale(1.1);
        }

        .pc-content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 20px;
            background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
            box-sizing: border-box;
        }

        .pc-content h3 {
            font-family: 'Cinzel', serif;
            font-size: 1.1rem;
            margin: 0;
            color: #cba153;
        }

        .pc-content span {
            font-size: 0.7rem;
            opacity: 0.8;
        }
`;

html = html.replace('</style>', newStyles + '\n    </style>');

fs.writeFileSync(indexPath, html);
console.log('Hero section redesigned, Trust Bar and Popular Destinations added!');

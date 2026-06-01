const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Add CSS for Category Filters and Emotional Overlays
const cssToInject = `
        /* Category Filter Bar */
        .category-filter-bar {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 40px;
            flex-wrap: wrap;
        }

        .filter-btn {
            background: transparent;
            border: 1px solid rgba(203, 161, 83, 0.3);
            color: rgba(255, 255, 255, 0.7);
            padding: 10px 25px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.4s ease;
            border-radius: 40px;
        }

        .filter-btn:hover, .filter-btn.active {
            background: #cba153;
            color: #050d0a;
            border-color: #cba153;
            box-shadow: 0 10px 20px rgba(203, 161, 83, 0.2);
        }

        /* Emotional Overlays */
        .discovery-image-wrapper {
            position: relative;
        }

        .emotional-overlay {
            position: absolute;
            inset: 0;
            background: rgba(5, 13, 10, 0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
            opacity: 0;
            transition: all 0.6s ease;
            backdrop-filter: blur(5px);
            z-index: 2;
        }

        .discovery-image-wrapper:hover .emotional-overlay {
            opacity: 1;
        }

        .emotion-tag {
            font-family: 'Great Vibes', cursive;
            font-size: 2.2rem;
            color: #cba153;
            transform: translateY(20px);
            transition: all 0.6s cubic-bezier(0.2, 0.85, 0.3, 1);
        }

        .discovery-image-wrapper:hover .emotion-tag {
            transform: translateY(0);
        }
`;

// Inject CSS before </style>
html = html.replace('</style>', cssToInject + '\n    </style>');

// 2. Add categories and overlays to each block
const destinationMapping = {
    'INDIA': { category: 'Luxury', emotions: ['Majestic', 'Royal'] },
    'THAILAND': { category: 'Adventure', emotions: ['Serene', 'Bold'] },
    'SINGAPORE': { category: 'Trending', emotions: ['Modern', 'Vibrant'] },
    'MALAYSIA': { category: 'Family', emotions: ['Eclectic', 'Lush'] },
    'DUBAI': { category: 'Luxury', emotions: ['Opulent', 'Grand'] },
    'VIETNAM': { category: 'Adventure', emotions: ['Authentic', 'Timeless'] },
    'MALDIVES': { category: 'Honeymoon', emotions: ['Intimate', 'Pure'] },
    'MAURITIUS': { category: 'Family', emotions: ['Tropical', 'Vivid'] }
};

Object.keys(destinationMapping).forEach(country => {
    const data = destinationMapping[country];
    // Find the block
    const blockRegex = new RegExp(`(<div class="discovery-block")([^>]*>\\s*<div class="discovery-image-wrapper">\\s*<img src="[^"]+" alt="${country}"[^>]*>)`, 'i');
    
    const overlayHtml = `
                        <div class="emotional-overlay">
                            <span class="emotion-tag">${data.emotions[0]}</span>
                            <span class="emotion-tag">${data.emotions[1]}</span>
                        </div>`;
    
    html = html.replace(blockRegex, `$1 data-category="${data.category}"$2${overlayHtml}`);
});

// 3. Add Filter Logic Script
const filterScript = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const blocks = document.querySelectorAll('.discovery-block');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active button
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const category = btn.dataset.category;

                    blocks.forEach(block => {
                        if (category === 'all' || block.dataset.category === category) {
                            block.style.display = 'flex';
                            gsap.fromTo(block, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
                        } else {
                            block.style.display = 'none';
                        }
                    });
                    
                    // Refresh ScrollTrigger
                    ScrollTrigger.refresh();
                });
            });
        });
    </script>
`;

html = html.replace('</body>', filterScript + '\n</body>');

fs.writeFileSync(indexPath, html);
console.log('Homepage enhanced with filters and emotional previews!');

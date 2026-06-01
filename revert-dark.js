const fs = require('fs');

// 1. Update styles.css
const stylesPath = 'c:/work/CHANDNI MAM WEBSITE/styles.css';
let css = fs.readFileSync(stylesPath, 'utf8');

// Revert variables to dark theme
css = css.replace(/--color-dark: #fbf9f4;/g, '--color-dark: #07130f;');
css = css.replace(/--color-dark-accent: #ffffff;/g, '--color-dark-accent: #0a1c16;');
css = css.replace(/--color-text-muted: #777777;/g, '--color-text-muted: #88928e;');
css = css.replace(/--glass-bg: rgba\(255, 255, 255, 0\.9\);/g, '--glass-bg: rgba(7, 19, 15, 0.85);');

// Revert body background
css = css.replace(/background: linear-gradient\(to bottom, #fbf9f4, #ffffff\);/g, 'background: #07130f;');
css = css.replace(/color: #1a1a1a;/g, 'color: #ffffff;');

// Revert package cards to dark
css = css.replace(/\.package-card \{\s*background: #ffffff;/g, '.package-card {\n    background: #0a1c16;');
css = css.replace(/\.package-title-text \{\s*font-family: var\(--font-heading\);\s*font-size: 1\.5rem;\s*margin-bottom: 15px;\s*line-height: 1\.3;\s*color: #1a1a1a;/g, '.package-title-text {\n    font-family: var(--font-heading);\n    font-size: 1.5rem;\n    margin-bottom: 15px;\n    line-height: 1.3;\n    color: #ffffff;');
css = css.replace(/\.package-highlights-list li \{\s*font-size: 0\.85rem;\s*color: #555555;/g, '.package-highlights-list li {\n    font-size: 0.85rem;\n    color: rgba(255, 255, 255, 0.7);');

fs.writeFileSync(stylesPath, css);


// 2. Update index.html
const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// Fix Hero Background to Dark Luxury
html = html.replace(/background: linear-gradient\(135deg, #fdfbf7 0%, #f4eee1 100%\);/g, 'background: radial-gradient(circle at 75% 50%, rgba(212, 175, 55, 0.08) 0%, rgba(7, 19, 15, 1) 60%), #07130f;');
// Remove the colorful blobs I added for the light theme
html = html.replace(/background-image: radial-gradient\(circle at 10% 20%.*?transparent 50%\);/g, '');

// Fix Hero Text Colors
html = html.replace(/\.luxury-hero-title \{\s*font-family: 'Cinzel', serif;\s*font-size: 4\.5rem;\s*font-weight: 700;\s*line-height: 1\.1;\s*color: #1a1a1a;/g, '.luxury-hero-title {\n            font-family: \'Cinzel\', serif;\n            font-size: 5.2rem;\n            font-weight: 500;\n            line-height: 1.05;\n            color: #ffffff;');
html = html.replace(/\.luxury-hero-desc \{\s*font-family: 'Montserrat', sans-serif;\s*font-size: 1\.1rem;\s*line-height: 1\.8;\s*color: #555555;/g, '.luxury-hero-desc {\n            font-family: \'Montserrat\', sans-serif;\n            font-size: 1.15rem;\n            line-height: 1.8;\n            color: rgba(255, 255, 255, 0.75);');

// Fix Carousel Cards to Dark Theme
html = html.replace(/\.carousel-card \{\s*position: absolute;\s*width: 250px;\s*height: 360px;\s*border-radius: 16px;\s*overflow: hidden;\s*background: #fff;\s*border: 3px solid rgba\(255, 255, 255, 0\.8\);/g, '.carousel-card {\n            position: absolute;\n            width: 280px;\n            height: 420px;\n            border-radius: 20px;\n            overflow: hidden;\n            background: #111;\n            border: 1px solid rgba(212, 175, 55, 0.15);');
html = html.replace(/\.active-card \{\s*border-color: #cba153;\s*box-shadow: 0 25px 50px rgba\(203, 161, 83, 0\.3\);/g, '.active-card {\n            border-color: #cba153;\n            box-shadow: 0 25px 60px rgba(0,0,0,0.8);');

// Destinations Showcase back to Dark
html = html.replace(/\.destinations-showcase \{\s*background: #ffffff;\s*padding: 100px 0;\s*color: #1a1a1a;/g, '.destinations-showcase {\n            background: #07130f;\n            padding: 80px 0;\n            color: #ffffff;');
html = html.replace(/\.discovery-title \{\s*font-family: 'Cinzel', serif;\s*font-size: 2\.5rem;\s*margin-bottom: 20px;\s*line-height: 1\.2;\s*color: #1a1a1a;/g, '.discovery-title {\n            font-family: \'Cinzel\', serif;\n            font-size: 2.1rem;\n            margin-bottom: 20px;\n            line-height: 1.2;\n            color: #ffffff;');
html = html.replace(/\.discovery-desc \{\s*font-family: 'Montserrat', sans-serif;\s*font-size: 1rem;\s*line-height: 1\.8;\s*color: #444444;/g, '.discovery-desc {\n            font-family: \'Montserrat\', sans-serif;\n            font-size: 0.95rem;\n            line-height: 1.7;\n            color: rgba(255, 255, 255, 0.8);');

// Featured packages section
html = html.replace(/<section class="packages-section" id="featured-packages" style="background: #fdfbf7;">/g, '<section class="packages-section" id="featured-packages" style="background: #07130f;">');
html = html.replace(/<h2 style="font-family: 'Cinzel', serif; font-size: 3\.5rem; color: #1a1a1a; margin-bottom: 15px;">/g, '<h2 style="font-family: \'Cinzel\', serif; font-size: 3.5rem; color: #ffffff; margin-bottom: 15px;">');

fs.writeFileSync(indexPath, html);
console.log('Fully reverted to dark bottle green luxury theme!');

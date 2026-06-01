const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// Inline styles for the spans inside the hero title
html = html.replace(/<span data-i18n="hero_title_1">/g, '<span data-i18n="hero_title_1" style="color: #ffffff !important;">');
html = html.replace(/<span data-i18n="hero_title_2">/g, '<span data-i18n="hero_title_2" style="color: #ffffff !important;">');

// Also fix the description
html = html.replace(/class="luxury-hero-desc" data-i18n="hero_description">/g, 'class="luxury-hero-desc" data-i18n="hero_description" style="color: rgba(255, 255, 255, 0.9) !important;">');

fs.writeFileSync(indexPath, html);
console.log('Applied inline styles to force hero text visibility!');

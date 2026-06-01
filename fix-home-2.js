const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Fix Destinations Showcase background
html = html.replace(
    /\.destinations-showcase \{\s*background: #07130f;\s*padding: 80px 0;\s*color: var\(--carousel-text\);/g,
    '.destinations-showcase {\n            background: #ffffff;\n            padding: 100px 0;\n            color: #1a1a1a;'
);

// 2. Fix Showcase Header text colors
html = html.replace(
    /\.showcase-header p \{\s*font-family: 'Montserrat', sans-serif;\s*font-size: 1\.1rem;\s*color: rgba\(255, 255, 255, 0\.6\);/g,
    '.showcase-header p {\n            font-family: \'Montserrat\', sans-serif;\n            font-size: 1.1rem;\n            color: #555555;'
);

// 3. Fix Discovery Block colors & add colorful shadows
html = html.replace(
    /\.discovery-desc \{\s*font-family: 'Montserrat', sans-serif;\s*font-size: 0\.95rem;\s*line-height: 1\.7;\s*color: rgba\(255, 255, 255, 0\.8\);/g,
    '.discovery-desc {\n            font-family: \'Montserrat\', sans-serif;\n            font-size: 1rem;\n            line-height: 1.8;\n            color: #444444;'
);

html = html.replace(
    /\.discovery-title \{\s*font-family: 'Cinzel', serif;\s*font-size: 2\.1rem;\s*margin-bottom: 20px;\s*line-height: 1\.2;\s*\}/g,
    '.discovery-title {\n            font-family: \'Cinzel\', serif;\n            font-size: 2.5rem;\n            margin-bottom: 20px;\n            line-height: 1.2;\n            color: #1a1a1a;\n        }'
);

// 4. Update the why-visit list text color
html = html.replace(
    /\.why-visit-item \{\s*display: flex;\s*align-items: flex-start;\s*gap: 15px;\s*margin-bottom: 15px;\s*font-family: 'Montserrat', sans-serif;\s*font-size: 0\.9rem;\s*color: rgba\(255, 255, 255, 0\.7\);/g,
    '.why-visit-item {\n            display: flex;\n            align-items: flex-start;\n            gap: 15px;\n            margin-bottom: 15px;\n            font-family: \'Montserrat\', sans-serif;\n            font-size: 0.95rem;\n            color: #555555;'
);

// 5. Hide mobile night carousel on PC
if (!html.includes('.mobile-night-carousel { display: none; }')) {
    html = html.replace(
        /@media \(min-width: 1024px\) \{/g,
        '@media (min-width: 1024px) {\n            .mobile-night-carousel { display: none; }\n'
    );
}

// 6. Featured packages background fix
html = html.replace(
    /<section class="packages-section" id="featured-packages" style="background: #07130f;">/g,
    '<section class="packages-section" id="featured-packages" style="background: #fdfbf7;">'
);
html = html.replace(
    /color: rgba\(255,255,255,0\.6\); max-width: 700px;/g,
    'color: #555555; max-width: 700px;'
);
html = html.replace(
    /color: #D4AF37; text-align: center;/g,
    'color: #1a1a1a; text-align: center;'
);

// 7. Make blocks colorful
html = html.replace(
    /\.discovery-image-wrapper \{\s*flex: 0 0 45%;\s*position: relative;\s*height: 400px;\s*overflow: hidden;\s*border-radius: 4px;\s*box-shadow: 0 20px 40px rgba\(0,0,0,0\.4\);/g,
    '.discovery-image-wrapper {\n            flex: 0 0 45%;\n            position: relative;\n            height: 400px;\n            overflow: hidden;\n            border-radius: 12px;\n            box-shadow: 0 20px 40px rgba(0,0,0,0.1);\n            border: 5px solid #fff;'
);

fs.writeFileSync(indexPath, html);
console.log('Homepage text and background colors fully updated to cohesive light colorful theme.');

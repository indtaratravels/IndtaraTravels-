const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Fix hero background
html = html.replace(
    /background: radial-gradient\(circle at 75% 50%, rgba\(212, 175, 55, 0\.08\) 0%, rgba\(7, 19, 15, 1\) 60%\), #07130f;/g,
    'background: linear-gradient(135deg, #fdfbf7 0%, #f4eee1 100%);\n            /* Colorful glowing elements for representing countries */\n            background-image: radial-gradient(circle at 10% 20%, rgba(203, 161, 83, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(74, 144, 226, 0.1) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(222, 90, 114, 0.08) 0%, transparent 50%);'
);

// 2. Fix text colors in hero
html = html.replace(/color: #ffffff;/g, 'color: #1a1a1a;');
html = html.replace(/color: rgba\(255, 255, 255, 0\.75\);/g, 'color: #555555;');
html = html.replace(/color: var\(--carousel-gold\);/g, 'color: #cba153;');
html = html.replace(/background: var\(--carousel-gold\);/g, 'background: #1a1a1a;\n            color: #ffffff;');
html = html.replace(/text-shadow: 0 10px 30px rgba\(0,0,0,0\.5\);/g, 'text-shadow: 0 5px 15px rgba(0,0,0,0.05);');

// 3. Fix carousel card sizing
html = html.replace(
    /width: 320px;\s*height: 470px;/g,
    'width: 250px;\n            height: 360px;'
);
// Adjust mobile sizing too
html = html.replace(/width: 280px; height: 420px;/g, 'width: 220px; height: 320px;');

// 4. Add colorful borders to cards
html = html.replace(
    /border: 1px solid rgba\(212, 175, 55, 0\.15\);/g,
    'border: 3px solid rgba(255, 255, 255, 0.8);'
);

html = html.replace(
    /\.active-card \{/g,
    '.active-card {\n            border-color: #cba153;\n            box-shadow: 0 25px 50px rgba(203, 161, 83, 0.3);'
);

// 5. Fix card meta text to be colorful and readable
html = html.replace(
    /background: linear-gradient\(to top, rgba\(0,0,0,0\.9\) 0%, rgba\(0,0,0,0\.3\) 40%, transparent 100%\);/g,
    'background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);'
);

fs.writeFileSync(indexPath, html);
console.log('Homepage fixes applied!');

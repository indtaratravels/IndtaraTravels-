const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// Fix Hero Title
html = html.replace(/color: #1a1a1a;/g, 'color: #ffffff;');
// Fix Hero Desc
html = html.replace(/color: #555555;/g, 'color: rgba(255, 255, 255, 0.75);');
// Fix Badge
html = html.replace(/background: #1a1a1a;/g, 'background: #cba153;');
// Fix Explore Button
html = html.replace(/background: #1a1a1a;\s*color: #ffffff;\s*color: #050d0a;/g, 'background: #cba153;\n            color: #050d0a;');
// Fix text shadows
html = html.replace(/text-shadow: 0 5px 15px rgba\(0,0,0,0\.05\);/g, 'text-shadow: 0 10px 30px rgba(0,0,0,0.5);');

fs.writeFileSync(indexPath, html);
console.log('Hero text colors fixed for dark theme!');

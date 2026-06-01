const fs = require('fs');

const files = ['c:/work/CHANDNI MAM WEBSITE/index.html', 'c:/work/CHANDNI MAM WEBSITE/styles.css'];

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace various dark grays with light grays for the dark theme
    content = content.replace(/color: #555555;/g, 'color: rgba(255, 255, 255, 0.7);');
    content = content.replace(/color: #666666;/g, 'color: rgba(255, 255, 255, 0.7);');
    content = content.replace(/color: #777777;/g, 'color: rgba(255, 255, 255, 0.7);');
    content = content.replace(/color: #444444;/g, 'color: rgba(255, 255, 255, 0.8);');
    content = content.replace(/color: #333333;/g, 'color: rgba(255, 255, 255, 0.9);');
    content = content.replace(/color: #1a1a1a;/g, 'color: #ffffff;');
    
    // Fix the button that might be using a dark color incorrectly
    // In index.html specifically, let's make sure the luxury-btn-explore has its gold background visible
    if (filePath.includes('index.html')) {
        content = content.replace(/\.luxury-btn-explore \{([\s\S]*?)background: #cba153;/g, '.luxury-btn-explore {$1background: #cba153 !important;');
    }

    fs.writeFileSync(filePath, content);
});

console.log('Massive color correction completed for dark theme!');

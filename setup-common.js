const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'index.html', 'india.html', 'thailand.html', 'singapore.html', 
    'malaysia.html', 'dubai.html', 'vietnam.html', 'maldives.html', 
    'mauritius.html', 'packages.html', 'package-details.html'
];

filesToUpdate.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add scripts to <head>
    if (!content.includes('components.js')) {
        content = content.replace('</head>', '    <script src="components.js" defer></script>\n</head>');
    }

    // 2. Add header placeholder
    if (!content.includes('id="header-placeholder"')) {
        content = content.replace(/<body[^>]*>/, (match) => match + '\n    <div id="header-placeholder"></div>');
    }

    // 3. Add footer placeholder
    if (!content.includes('id="footer-placeholder"')) {
        content = content.replace('</body>', '    <div id="footer-placeholder"></div>\n</body>');
    }

    // 4. Remove manual headers and footers (aggressive)
    // Remove <header class="top-header">...</header>
    content = content.replace(/<header class="top-header">[\s\S]*?<\/header>/g, '');
    // Remove <nav class="navbar">...</nav>
    content = content.replace(/<nav class="navbar">[\s\S]*?<\/nav>/g, '');
    // Remove <footer class="site-footer">...</footer>
    content = content.replace(/<footer class="site-footer"[\s\S]*?<\/footer>/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Common components applied to ${file}`);
});

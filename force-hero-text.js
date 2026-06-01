const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// Add a specific rule to force white color on hero spans
if (!html.includes('.luxury-hero-title span { color: #ffffff; }')) {
    html = html.replace('</style>', '        .luxury-hero-title span { color: #ffffff !important; }\n    </style>');
}

// Ensure the title itself is white
html = html.replace(/\.luxury-hero-title \{([\s\S]*?)color:.*?;/g, '.luxury-hero-title {$1color: #ffffff !important;');

// Ensure the desc is light
html = html.replace(/\.luxury-hero-desc \{([\s\S]*?)color:.*?;/g, '.luxury-hero-desc {$1color: rgba(255, 255, 255, 0.8) !important;');

fs.writeFileSync(indexPath, html);
console.log('Forced white color on hero text components!');

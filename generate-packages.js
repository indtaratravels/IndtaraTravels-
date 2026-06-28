const fs = require('fs');
const path = require('path');
const packages = require('./packages.js');

const targetDir = path.join(__dirname, 'packages');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

for (const country in packages) {
    packages[country].forEach(pkg => {
        const pkgDir = path.join(targetDir, pkg.id);
        if (!fs.existsSync(pkgDir)) {
            fs.mkdirSync(pkgDir, { recursive: true });
        }
        const indexPath = path.join(pkgDir, 'index.html');
        const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <script>
        window.location.replace('/package-details.html?id=${pkg.id}');
    </script>
</head>
</html>`;
        fs.writeFileSync(indexPath, htmlContent);
        console.log(`Generated: ${indexPath}`);
    });
}
console.log('Package directories generated successfully!');

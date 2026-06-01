const fs = require('fs');

const indexPath = 'c:/work/CHANDNI MAM WEBSITE/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// The botched section starts around .destinations-showcase and ends before .discovery-block
const startTag = '/* ========== Destinations Showcase Section ========== */';
const endTag = '.discovery-image-wrapper {';

const correctSection = `/* ========== Destinations Showcase Section ========== */
        .destinations-showcase {
            background: #07130f;
            padding: 80px 0;
            color: #ffffff;
            overflow: hidden;
        }

        .showcase-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 25px;
        }

        .showcase-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .showcase-header h2 {
            font-family: 'Cinzel', serif;
            font-size: 3.5rem;
            color: #cba153;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 4px;
            word-wrap: break-word;
        }

        @media (max-width: 768px) {
            .showcase-header h2 {
                font-size: 2.2rem;
                letter-spacing: 2px;
            }
            .destinations-showcase {
                padding: 60px 0;
            }
        }

        .showcase-header p {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.1rem;
            color: #ffffff !important;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.8;
            opacity: 0.9;
        }

        .discovery-block {
            display: flex;
            align-items: center;
            gap: 40px;
            margin-bottom: 80px;
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s cubic-bezier(0.2, 0.85, 0.3, 1);
        }

        .discovery-block.active {
            opacity: 1;
            transform: translateY(0);
        }

        .discovery-block:nth-child(even) {
            flex-direction: row-reverse;
        }

        .discovery-image-wrapper {`;

// Find the indices
const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newHtml = html.substring(0, startIndex) + correctSection + html.substring(endIndex + endTag.length);
    fs.writeFileSync(indexPath, newHtml);
    console.log('Fixed the botched Destinations Showcase section in index.html!');
} else {
    console.log('Could not find the markers to fix index.html');
}

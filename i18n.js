/**
 * i18n logic for Rutas del Alma
 */

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    if (languageSelector) {
        languageSelector.value = currentLang;
    }

    // Handle language change
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            setLanguage(selectedLang);
            localStorage.setItem('preferredLanguage', selectedLang);
        });
    }
});

function setLanguage(lang) {
    if (!translations[lang]) return;

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update Page Title
    if (translations[lang].title) {
        document.title = translations[lang].title;
    }

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang].meta_desc) {
        metaDesc.setAttribute('content', translations[lang].meta_desc);
    }

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if we should use innerHTML or textContent
            // Using innerHTML for features that have <br> tags
            if (key.startsWith('feature_') || key.startsWith('footer_') || key.startsWith('hero_')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Custom logic for specific elements if needed
    console.log(`Language switched to: ${lang}`);
}

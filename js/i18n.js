// Language detection and redirection
(function() {
    'use strict';

    // Get current path
    const path = window.location.pathname;
    
    // Only redirect if we're at the root
    if (path === '/' || path === '/index.html') {
        // Get browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.toLowerCase().split('-')[0];
        
        // French-speaking countries and regions
        const frenchLanguages = ['fr'];
        
        // Determine target language
        const targetLang = frenchLanguages.includes(langCode) ? 'fr' : 'en';
        
        // Redirect to appropriate language version
        window.location.href = `/${targetLang}/`;
    }
})();

const langData = {
    tr: {
        title: "İzmir Lokantası",
        subtitle: "Geleneksel Lezzetler",
        btnMenu: "Menü'ye Git",
        btnAbout: "Hakkımızda",
        btnContact: "İletişim",
        aboutTitle: "Hakkımızda",
        aboutText: "İzmir Lokantası, yılların tecrübesiyle geleneksel Türk mutfağının en seçkin lezzetlerini sizlere sunmaktan gurur duyar. Taze malzemeler, ustalık ve sevgiyle hazırlanan her tabağımızda kültürümüzün zenginliğini hissedeceksiniz.",
        contactTitle: "İletişim",
        address: "Atatürk Caddesi No: 123, Konak / İzmir",
        hoursTitle: "Çalışma Saatleri",
        hoursText: "Her gün: 10:00 - 23:00",
        footerName: "İzmir Lokantası"
    },
    en: {
        title: "Izmir Restaurant",
        subtitle: "Traditional Flavors",
        btnMenu: "View Menu",
        btnAbout: "About Us",
        btnContact: "Contact",
        aboutTitle: "About Us",
        aboutText: "Izmir Restaurant is proud to present the most exquisite flavors of traditional Turkish cuisine with years of experience. You will feel the richness of our culture in every plate prepared with fresh ingredients, mastery, and love.",
        contactTitle: "Contact Us",
        address: "Ataturk Avenue No: 123, Konak / Izmir",
        hoursTitle: "Working Hours",
        hoursText: "Every day: 10:00 AM - 11:00 PM",
        footerName: "Izmir Restaurant"
    }
};

let currentLang = localStorage.getItem('lang') || 'tr';

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);

    document.getElementById('btn-tr').addEventListener('click', () => setLanguage('tr'));
    document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLanguage(lang);
}

function updateLanguage(lang) {
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Update texts
    document.title = langData[lang].title;
    document.getElementById('t-btn-menu').textContent = langData[lang].btnMenu;
    document.getElementById('t-btn-about').textContent = langData[lang].btnAbout;
    document.getElementById('t-btn-contact').textContent = langData[lang].btnContact;
    document.getElementById('t-about-title').textContent = langData[lang].aboutTitle;
    document.getElementById('t-about-text').textContent = langData[lang].aboutText;
    document.getElementById('t-contact-title').textContent = langData[lang].contactTitle;
    document.getElementById('t-address').textContent = langData[lang].address;
    document.getElementById('t-hours-title').textContent = langData[lang].hoursTitle;
    document.getElementById('t-hours-text').textContent = langData[lang].hoursText;
    document.getElementById('t-footer-name').textContent = langData[lang].footerName;
    
    document.documentElement.lang = lang;
}

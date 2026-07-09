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
        address: "Üçtutlar, Camikebir Sk. No:3, 19030 Çorum Merkez/Çorum",
        hoursTitle: "Çalışma Saatleri",
        hoursText: "Her gün: 05:00 - 20:30",
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
        address: "Uctutlar, Camikebir St. No:3, 19030 Corum Center/Corum",
        hoursTitle: "Working Hours",
        hoursText: "Every day: 05:00 - 20:30",
        footerName: "Izmir Restaurant"
    },
    ar: {
        title: "مطعم إزمير",
        subtitle: "نكهات تقليدية",
        btnMenu: "الذهاب إلى القائمة",
        btnAbout: "معلومات عنا",
        btnContact: "اتصل بنا",
        aboutTitle: "معلومات عنا",
        aboutText: "يفخر مطعم إزمير بتقديم أشهى النكهات من المطبخ التركي التقليدي بخبرة تمتد لسنوات. ستشعر بثراء ثقافتنا في كل طبق يتم إعداده بمكونات طازجة ومهارة وحب.",
        contactTitle: "اتصل بنا",
        address: "أوتشوتلار، شارع جاميكبير رقم: 3، 19030 مركز تشوروم / تشوروم",
        hoursTitle: "ساعات العمل",
        hoursText: "كل يوم: 05:00 - 20:30",
        footerName: "مطعم إزمير"
    }
};

let currentLang = localStorage.getItem('lang') || 'tr';

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);

    document.getElementById('btn-tr').addEventListener('click', () => setLanguage('tr'));
    document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('btn-ar').addEventListener('click', () => setLanguage('ar'));
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

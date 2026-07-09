let currentLang = localStorage.getItem('lang') || 'tr';

const translations = {
    tr: {
        pageTitle: "İzmir Lokantası - Menü",
        subtitle: "Geleneksel Lezzetler",
        backHome: "Ana Sayfa",
        pricePlaceholder: "₺ -",
        footer: "İzmir Lokantası",
        cal: "kcal",
        gf: "Gluten Yok",
        gv: "Gluten Var",
        gvVar: "Değişebilir"
    },
    en: {
        pageTitle: "Izmir Restaurant - Menu",
        subtitle: "Traditional Flavors",
        backHome: "Home",
        pricePlaceholder: "₺ -",
        footer: "Izmir Restaurant",
        cal: "kcal",
        gf: "Gluten-Free",
        gv: "Contains Gluten",
        gvVar: "May Vary"
    },
    ar: {
        pageTitle: "مطعم إزمير - القائمة",
        subtitle: "نكهات تقليدية",
        backHome: "الرئيسية",
        pricePlaceholder: "₺ -",
        footer: "مطعم إزمير",
        cal: "سعرة",
        gf: "خالي من الجلوتين",
        gv: "يحتوي على الجلوتين",
        gvVar: "قد يختلف"
    }
};

const menuData = [
  {
    category: { tr: "Çorbalar", en: "Soups", ar: "الحساء" },
    icon: "cafe-outline",
    items: [
      { name: { tr: "İşkembe", en: "Tripe Soup", ar: "شوربة كرشة" }, image: "Images/işkembe.png", cals: 190, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Dil Paça", en: "Tongue & Trotter Soup", ar: "شوربة لسان وكوارع" }, image: "Images/dil_paca.png", cals: 220, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Kelle Paça", en: "Head & Trotter Soup", ar: "شوربة رأس وكوارع" }, image: "Images/kelle_paca.png", cals: 250, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Ekmekli Paça", en: "Trotter Soup with Bread", ar: "شوربة كوارع بالخبز" }, image: "Images/ekmekli_paca.png", cals: 380, gluten: "var", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Beykoz", en: "Beykoz Soup", ar: "شوربة بيكوز" }, image: "Images/beykoz.png", cals: 240, gluten: "degisken", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Tuzlama", en: "Salted Tripe Soup", ar: "شوربة كرشة مملحة" }, image: "Images/tuzlama.png", cals: 240, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Mercimek", en: "Lentil Soup", ar: "شوربة عدس" }, image: "Images/mercimek.png", cals: 180, gluten: "degisken", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Ezogelin", en: "Ezogelin Soup", ar: "شوربة إيزوغلين" }, image: "Images/ezogelin.png", cals: 190, gluten: "var", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Tavuk Suyu", en: "Chicken Broth Soup", ar: "شوربة دجاج" }, image: "Images/tavuk_suyu.png", cals: 120, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] }
    ]
  },
  {
    category: { tr: "Kebaplar", en: "Kebabs", ar: "مشويات" },
    icon: "flame-outline",
    items: [
      { name: { tr: "Döner", en: "Doner", ar: "شاورما لحم" }, cals: 320, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "İskender", en: "Iskender Kebab", ar: "إسكندر كباب" }, cals: 850, gluten: "var", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Adana", en: "Adana Kebab (Spicy)", ar: "كباب أضنة" }, cals: 420, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Urfa", en: "Urfa Kebab (Mild)", ar: "كباب أورفا" }, cals: 400, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Beyti", en: "Beyti Kebab", ar: "كباب بيتي" }, cals: 650, gluten: "var", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Yoğurtlu Adana", en: "Adana Kebab with Yogurt", ar: "كباب أضنة بالزبادي" }, cals: 500, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Izgara Köfte", en: "Grilled Meatballs", ar: "كفتة مشوية" }, cals: 380, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Tavuk Şiş", en: "Chicken Shish", ar: "شيش طاووق" }, cals: 280, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Çöp Şiş", en: "Small Meat Shish", ar: "تشوب شيش (لحم صغير)" }, cals: 320, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Ciğer", en: "Liver Shish", ar: "شيش كبدة" }, cals: 330, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Kaşarlı Kebap", en: "Kebab with Cheese", ar: "كباب بالجبن" }, cals: 450, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Karışık Izgara", en: "Mixed Grill", ar: "مشاوي مشكلة" }, cals: 700, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] }
    ]
  },
  {
    category: { tr: "Yemekler", en: "Main Dishes", ar: "أطباق رئيسية" },
    icon: "restaurant-outline",
    items: [
      { name: { tr: "Tas Kebap", en: "Meat Stew", ar: "طاس كباب" }, cals: 420, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Orman Kebabı", en: "Forest Kebab", ar: "كباب الغابة" }, cals: 430, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Sebzeli Kebap", en: "Vegetable Kebab", ar: "كباب بالخضار" }, cals: 350, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Patlıcan Kebabı", en: "Eggplant Kebab", ar: "كباب بالباذنجان" }, cals: 520, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Et Sote", en: "Sautéed Meat", ar: "لحم سوتيه" }, cals: 400, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Kuzu Haşlama", en: "Boiled Lamb", ar: "لحم ضأن مسلوق" }, cals: 450, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Patlıcan Musakka", en: "Eggplant Moussaka", ar: "مسقعة باذنجان" }, cals: 430, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Tavuk Roti", en: "Roasted Chicken", ar: "دجاج مشوي" }, cals: 320, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Kuru Fasulye", en: "White Bean Stew", ar: "فاصوليا بيضاء" }, cals: 350, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Sebze Yemeği", en: "Vegetable Dish", ar: "طبق خضار" }, cals: 220, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "İzmir Köfte", en: "Izmir Meatballs", ar: "كفتة إزمير" }, cals: 450, gluten: "degisken", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Güveç", en: "Casserole", ar: "طاجن" }, cals: 480, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] },
      { name: { tr: "Pilav", en: "Rice Pilaf", ar: "أرز بيلاف" }, cals: 480, gluten: "yok", options: [{tr:"TAM",en:"FULL",ar:"كامل"}, {tr:"AZ",en:"SMALL",ar:"صغير"}] }
    ]
  },
  {
    category: { tr: "Pideler", en: "Pitas", ar: "فطائر بيدا" },
    icon: "pizza-outline",
    items: [
      { name: { tr: "Kaşarlı Pide", en: "Pita with Cheese", ar: "بيدا بالجبن" }, cals: 650, gluten: "var", options: [{tr:"1 P.",en:"1 P.",ar:"1 حصة"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Kıymalı Pide", en: "Pita with Minced Meat", ar: "بيدا باللحم المفروم" }, cals: 700, gluten: "var", options: [{tr:"1 P.",en:"1 P.",ar:"1 حصة"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Kuşbaşılı Pide", en: "Pita with Diced Meat", ar: "بيدا بقطع اللحم" }, cals: 730, gluten: "var", options: [{tr:"1 P.",en:"1 P.",ar:"1 حصة"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Sucuklu Pide", en: "Pita with Turkish Sausage", ar: "بيدا بالسجق" }, cals: 760, gluten: "var", options: [{tr:"1 P.",en:"1 P.",ar:"1 حصة"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Karışık Pide", en: "Mixed Pita", ar: "بيدا مشكلة" }, cals: 850, gluten: "var", options: [{tr:"1 P.",en:"1 P.",ar:"1 حصة"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] },
      { name: { tr: "Lahmacun", en: "Lahmacun", ar: "لحم بعجين" }, cals: 380, gluten: "var", options: [{tr:"1 P.",en:"1 P.",ar:"1 حصة"}, {tr:"1,5 P.",en:"1.5 P.",ar:"1.5 حصة"}] }
    ]
  },
  {
    category: { tr: "Döner", en: "Doner", ar: "شاورما لحم" },
    icon: "fast-food-outline",
    items: [
      { name: { tr: "Döner Dürüm", en: "Doner Wrap", ar: "ساندويتش شاورما" }, cals: 650, gluten: "var", options: [] },
      { name: { tr: "Yarım Ekmek Döner", en: "Doner in Half Bread", ar: "شاورما في نصف خبزة" }, cals: 550, gluten: "var", options: [] },
      { name: { tr: "Kuzu Tandır", en: "Tandoori Lamb", ar: "تندوري لحم ضأن" }, cals: 720, gluten: "yok", options: [] }
    ]
  },
  {
    category: { tr: "Tatlılar", en: "Desserts", ar: "حلويات" },
    icon: "ice-cream-outline",
    items: [
      { name: { tr: "Baklava", en: "Baklava", ar: "بقلاوة" }, options: [] },
      { name: { tr: "Tel Kadayıf", en: "Shredded Pastry", ar: "كاداييف" }, cals: 420, gluten: "var", options: [] },
      { name: { tr: "Ekmek Kadayıfı", en: "Bread Pastry", ar: "حلوى الخبز" }, cals: 500, gluten: "var", options: [] },
      { name: { tr: "Sütlaç", en: "Rice Pudding", ar: "مهلبية أرز" }, cals: 240, gluten: "yok", options: [] },
      { name: { tr: "Kabak Tatlısı", en: "Pumpkin Dessert", ar: "حلوى اليقطين" }, cals: 280, gluten: "degisken", options: [] }
    ]
  },
  {
    category: { tr: "İçecekler", en: "Beverages", ar: "مشروبات" },
    icon: "water-outline",
    items: [
      { name: { tr: "Kola", en: "Cola", ar: "كولا" }, cals: 139, gluten: "yok", options: [] },
      { name: { tr: "Yedigün", en: "Orange Soda", ar: "صودا برتقال" }, cals: 140, gluten: "yok", options: [] },
      { name: { tr: "Fanta", en: "Fanta", ar: "فانتا" }, cals: 140, gluten: "yok", options: [] },
      { name: { tr: "Şalgam", en: "Turnip Juice", ar: "عصير لفت" }, cals: 15, gluten: "yok", options: [] },
      { name: { tr: "Meyve Suyu", en: "Fruit Juice", ar: "عصير فواكه" }, cals: 120, gluten: "yok", options: [] },
      { name: { tr: "Soda", en: "Mineral Water", ar: "مياه معدنية" }, cals: 0, gluten: "yok", options: [] },
      { name: { tr: "Ayran", en: "Ayran", ar: "عيران" }, cals: 75, gluten: "yok", options: [] },
      { name: { tr: "Su", en: "Water", ar: "ماء" }, cals: 0, gluten: "yok", options: [] }
    ]
  },
  {
    category: { tr: "Yan Ürünler", en: "Side Dishes", ar: "أطباق جانبية" },
    icon: "snow-outline",
    items: [
      { name: { tr: "Salata", en: "Salad", ar: "سلطة" }, options: [] },
      { name: { tr: "Yoğurt", en: "Yogurt", ar: "زبادي" }, options: [] },
      { name: { tr: "Cacık", en: "Tzatziki", ar: "جاجيك" }, options: [] }
    ]
  }
];

let scrollListener = null;

function renderMenu() {
    // Statik Metinleri Çevir
    document.documentElement.lang = currentLang;
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.textContent = translations[currentLang].pageTitle;
    
    const backHome = document.getElementById('back-home-text');
    if (backHome) backHome.textContent = translations[currentLang].backHome;
    
    const footerText = document.getElementById('footer-text');
    if (footerText) footerText.textContent = translations[currentLang].footer;

    const navContainer = document.getElementById('categoryNav');
    const menuContainer = document.getElementById('menuContainer');
    
    if (!navContainer || !menuContainer) return; // Not on menu page

    navContainer.innerHTML = '';
    menuContainer.innerHTML = '';

    menuData.forEach((catData, index) => {
        const catName = catData.category[currentLang];

        const btn = document.createElement('button');
        btn.className = `category-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = catName;
        btn.onclick = () => scrollToCategory(index);
        navContainer.appendChild(btn);

        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = `category-${index}`;
        
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.innerHTML = `<ion-icon name="${catData.icon}"></ion-icon> ${catName}`;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'items-grid';

        catData.items.forEach((item, itemIndex) => {
            const delay = itemIndex * 0.05;
            const itemName = item.name[currentLang];
            
            // Resim dosya adını otomatik oluştur (Türkçe karakterleri ve boşlukları düzelt)
            let baseName = item.name.tr
                .replace(/İ/g, 'i').replace(/I/g, 'i').replace(/ı/g, 'i')
                .replace(/Ğ/g, 'g').replace(/ğ/g, 'g')
                .replace(/Ü/g, 'u').replace(/ü/g, 'u')
                .replace(/Ş/g, 's').replace(/ş/g, 's')
                .replace(/Ö/g, 'o').replace(/ö/g, 'o')
                .replace(/Ç/g, 'c').replace(/ç/g, 'c')
                .toLowerCase()
                .replace(/\s+/g, '_')
                .replace(/[^a-z0-9_]/g, '');

            const imagePath = item.image || `Images/${baseName}.png`;
            const fallbackId = `fallback-${index}-${itemIndex}`;
            
            let imageHTML = `
                <img src="${imagePath}" alt="${itemName}" class="item-image" 
                     onerror="this.style.display='none'; document.getElementById('${fallbackId}').style.display='flex';" 
                     loading="lazy">
                <div class="item-icon-placeholder" id="${fallbackId}" style="display: none;">
                    <ion-icon name="${catData.icon}"></ion-icon>
                </div>`;

            let badgesHTML = '';
            if (item.cals !== undefined || item.gluten) {
                badgesHTML += '<div class="item-badges">';
                if (item.cals !== undefined) {
                    badgesHTML += `<span class="badge badge-cal"><ion-icon name="flame-outline"></ion-icon> ${item.cals} ${translations[currentLang].cal}</span>`;
                }
                if (item.gluten === "yok") {
                    badgesHTML += `<span class="badge badge-gf"><ion-icon name="checkmark-circle-outline"></ion-icon> ${translations[currentLang].gf}</span>`;
                } else if (item.gluten === "var") {
                    badgesHTML += `<span class="badge badge-gv"><ion-icon name="warning-outline"></ion-icon> ${translations[currentLang].gv}</span>`;
                } else if (item.gluten === "degisken") {
                    badgesHTML += `<span class="badge badge-gv-var"><ion-icon name="help-circle-outline"></ion-icon> ${translations[currentLang].gvVar}</span>`;
                }
                badgesHTML += '</div>';
            }

            let pricesHTML = '';
            if (item.options && item.options.length > 0) {
                pricesHTML += '<div class="price-options">';
                item.options.forEach(opt => {
                    pricesHTML += `
                        <div class="price-box">
                            <span class="price-label">${opt[currentLang]}</span>
                            <span class="price-val">${translations[currentLang].pricePlaceholder}</span>
                        </div>
                    `;
                });
                pricesHTML += '</div>';
            } else {
                pricesHTML = `<div class="item-price">${translations[currentLang].pricePlaceholder}</div>`;
            }

            const card = document.createElement('div');
            card.className = 'item-card animate-fade-in';
            card.style.animationDelay = `${delay}s`;
            
            card.innerHTML = `
                ${imageHTML}
                <div class="item-details">
                    <h3 class="item-name">${itemName}</h3>
                    ${badgesHTML}
                    ${pricesHTML}
                </div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        menuContainer.appendChild(section);
    });

    setupScrollSpy();
}

function setupScrollSpy() {
    const sections = document.querySelectorAll('.category-section');
    const navButtons = document.querySelectorAll('.category-btn');

    if (scrollListener) {
        window.removeEventListener('scroll', scrollListener);
    }

    scrollListener = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight - 10) {
            current = sections[sections.length - 1].getAttribute('id');
        }

        navButtons.forEach((btn, idx) => {
            btn.classList.remove('active');
            if (`category-${idx}` === current) {
                btn.classList.add('active');
                btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });
    };

    window.addEventListener('scroll', scrollListener);
}

function scrollToCategory(index) {
    const section = document.getElementById(`category-${index}`);
    const yOffset = -80; 
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update active button classes
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    renderMenu();
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial active button
    const activeBtn = document.getElementById(`btn-${currentLang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Language buttons
    const btnTr = document.getElementById('btn-tr');
    const btnEn = document.getElementById('btn-en');
    const btnAr = document.getElementById('btn-ar');

    if (btnTr) btnTr.addEventListener('click', () => setLanguage('tr'));
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
    if (btnAr) btnAr.addEventListener('click', () => setLanguage('ar'));

    renderMenu();
});

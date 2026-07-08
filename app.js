const currentLang = localStorage.getItem('lang') || 'tr';

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
    }
};

const menuData = [
  {
    category: { tr: "Çorbalar", en: "Soups" },
    icon: "cafe-outline",
    items: [
      { name: { tr: "İşkembe", en: "Tripe Soup" }, image: "Images/işkembe.png", cals: 190, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Dil Paça", en: "Tongue & Trotter Soup" }, image: "Images/dil_paca.png", cals: 220, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Kelle Paça", en: "Head & Trotter Soup" }, image: "Images/kelle_paca.png", cals: 250, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Ekmekli Paça", en: "Trotter Soup with Bread" }, image: "Images/ekmekli_paca.png", cals: 380, gluten: "var", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Beykoz", en: "Beykoz Soup" }, image: "Images/beykoz.png", cals: 240, gluten: "degisken", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Tuzlama", en: "Salted Tripe Soup" }, image: "Images/tuzlama.png", cals: 240, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Mercimek", en: "Lentil Soup" }, image: "Images/mercimek.png", cals: 180, gluten: "degisken", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Ezogelin", en: "Ezogelin Soup" }, image: "Images/ezogelin.png", cals: 190, gluten: "var", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Tavuk Suyu", en: "Chicken Broth Soup" }, image: "Images/tavuk_suyu.png", cals: 120, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] }
    ]
  },
  {
    category: { tr: "Kebaplar", en: "Kebabs" },
    icon: "flame-outline",
    items: [
      { name: { tr: "Döner", en: "Doner" }, cals: 320, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "İskender", en: "Iskender Kebab" }, image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", cals: 850, gluten: "var", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Adana", en: "Adana Kebab (Spicy)" }, cals: 420, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Urfa", en: "Urfa Kebab (Mild)" }, cals: 400, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Beyti", en: "Beyti Kebab" }, cals: 650, gluten: "var", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Yoğurtlu Adana", en: "Adana Kebab with Yogurt" }, cals: 500, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Izgara Köfte", en: "Grilled Meatballs" }, cals: 380, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Tavuk Şiş", en: "Chicken Shish" }, cals: 280, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Çöp Şiş", en: "Small Meat Shish" }, cals: 320, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Ciğer", en: "Liver Shish" }, cals: 330, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Kaşarlı Kebap", en: "Kebab with Cheese" }, cals: 450, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Karışık Izgara", en: "Mixed Grill" }, cals: 700, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}, {tr:"1,5 P.",en:"1.5 P."}] }
    ]
  },
  {
    category: { tr: "Yemekler", en: "Main Dishes" },
    icon: "restaurant-outline",
    items: [
      { name: { tr: "Tas Kebap", en: "Meat Stew" }, cals: 420, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Orman Kebabı", en: "Forest Kebab" }, cals: 430, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Sebzeli Kebap", en: "Vegetable Kebab" }, cals: 350, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Patlıcan Kebabı", en: "Eggplant Kebab" }, cals: 520, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Et Sote", en: "Sautéed Meat" }, cals: 400, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Kuzu Haşlama", en: "Boiled Lamb" }, cals: 450, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Patlıcan Musakka", en: "Eggplant Moussaka" }, cals: 430, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Tavuk Roti", en: "Roasted Chicken" }, cals: 320, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Kuru Fasulye", en: "White Bean Stew" }, cals: 350, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Sebze Yemeği", en: "Vegetable Dish" }, cals: 220, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "İzmir Köfte", en: "Izmir Meatballs" }, cals: 450, gluten: "degisken", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Güveç", en: "Casserole" }, cals: 480, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] },
      { name: { tr: "Pilav", en: "Rice Pilaf" }, cals: 480, gluten: "yok", options: [{tr:"TAM",en:"FULL"}, {tr:"AZ",en:"SMALL"}] }
    ]
  },
  {
    category: { tr: "Pideler", en: "Pitas" },
    icon: "pizza-outline",
    items: [
      { name: { tr: "Kaşarlı Pide", en: "Pita with Cheese" }, cals: 650, gluten: "var", options: [{tr:"1 P.",en:"1 P."}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Kıymalı Pide", en: "Pita with Minced Meat" }, cals: 700, gluten: "var", options: [{tr:"1 P.",en:"1 P."}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Kuşbaşılı Pide", en: "Pita with Diced Meat" }, cals: 730, gluten: "var", options: [{tr:"1 P.",en:"1 P."}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Sucuklu Pide", en: "Pita with Turkish Sausage" }, cals: 760, gluten: "var", options: [{tr:"1 P.",en:"1 P."}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Karışık Pide", en: "Mixed Pita" }, cals: 850, gluten: "var", options: [{tr:"1 P.",en:"1 P."}, {tr:"1,5 P.",en:"1.5 P."}] },
      { name: { tr: "Lahmacun", en: "Lahmacun" }, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", cals: 380, gluten: "var", options: [{tr:"1 P.",en:"1 P."}, {tr:"1,5 P.",en:"1.5 P."}] }
    ]
  },
  {
    category: { tr: "Döner", en: "Doner" },
    icon: "fast-food-outline",
    items: [
      { name: { tr: "Döner Dürüm", en: "Doner Wrap" }, cals: 650, gluten: "var", options: [] },
      { name: { tr: "Yarım Ekmek Döner", en: "Doner in Half Bread" }, cals: 550, gluten: "var", options: [] },
      { name: { tr: "Kuzu Tandır", en: "Tandoori Lamb" }, cals: 720, gluten: "yok", options: [] }
    ]
  },
  {
    category: { tr: "Tatlılar", en: "Desserts" },
    icon: "ice-cream-outline",
    items: [
      { name: { tr: "Baklava", en: "Baklava" }, image: "https://images.unsplash.com/photo-1599317378772-2f3b97b0a708?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", options: [] },
      { name: { tr: "Tel Kadayıf", en: "Shredded Pastry" }, cals: 420, gluten: "var", options: [] },
      { name: { tr: "Ekmek Kadayıfı", en: "Bread Pastry" }, cals: 500, gluten: "var", options: [] },
      { name: { tr: "Sütlaç", en: "Rice Pudding" }, cals: 240, gluten: "yok", options: [] },
      { name: { tr: "Kabak Tatlısı", en: "Pumpkin Dessert" }, cals: 280, gluten: "degisken", options: [] }
    ]
  },
  {
    category: { tr: "İçecekler", en: "Beverages" },
    icon: "water-outline",
    items: [
      { name: { tr: "Kola", en: "Cola" }, cals: 139, gluten: "yok", options: [] },
      { name: { tr: "Yedigün", en: "Orange Soda" }, cals: 140, gluten: "yok", options: [] },
      { name: { tr: "Fanta", en: "Fanta" }, cals: 140, gluten: "yok", options: [] },
      { name: { tr: "Şalgam", en: "Turnip Juice" }, cals: 15, gluten: "yok", options: [] },
      { name: { tr: "M. Suyu", en: "Fruit Juice" }, cals: 120, gluten: "yok", options: [] },
      { name: { tr: "Soda", en: "Mineral Water" }, cals: 0, gluten: "yok", options: [] },
      { name: { tr: "Ayran", en: "Ayran" }, cals: 75, gluten: "yok", options: [] },
      { name: { tr: "Su", en: "Water" }, cals: 0, gluten: "yok", options: [] }
    ]
  },
  {
    category: { tr: "Dolap Malzemeleri", en: "Fridge Items" },
    icon: "snow-outline",
    items: [
      { name: { tr: "Salata", en: "Salad" }, options: [] },
      { name: { tr: "Yoğurt", en: "Yogurt" }, options: [] },
      { name: { tr: "Cacık", en: "Tzatziki" }, options: [] }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
    // Statik Metinleri Çevir
    document.documentElement.lang = currentLang;
    document.getElementById('page-title').textContent = translations[currentLang].pageTitle;
    document.getElementById('back-home-text').textContent = translations[currentLang].backHome;
    document.getElementById('footer-text').textContent = translations[currentLang].footer;

    const navContainer = document.getElementById('categoryNav');
    const menuContainer = document.getElementById('menuContainer');

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
            
            let imageHTML = '';
            if (item.image) {
                imageHTML = `<img src="${item.image}" alt="${itemName}" class="item-image" loading="lazy">`;
            } else {
                imageHTML = `
                <div class="item-icon-placeholder">
                    <ion-icon name="${catData.icon}"></ion-icon>
                </div>`;
            }

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
                // Default single price
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

    const sections = document.querySelectorAll('.category-section');
    const navButtons = document.querySelectorAll('.category-btn');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        // Sayfanın en altına inildiyse otomatik olarak son kategoriyi aktif yap
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
    });
});

function scrollToCategory(index) {
    const section = document.getElementById(`category-${index}`);
    const yOffset = -80; 
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

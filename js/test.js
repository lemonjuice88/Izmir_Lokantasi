const XLSX = require('xlsx');

const workbook = XLSX.readFile('gercek_menu_fiyatlari.xlsx');
const firstSheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[firstSheetName];
const excelJson = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

const categoryMap = {
    "Döner Çeşitleri": "Döner",
    "Dolap Malzemeleri": "Yan Ürünler"
};

const menuData = [
  {
    category: { tr: "Çorbalar" },
    items: [
      { name: { tr: "İşkembe" }, options: [] }
    ]
  }
];

excelJson.forEach(row => {
    let catName = row['Kategori'];
    if (!catName || catName.trim() === '') return;
    catName = catName.trim();
    if (categoryMap[catName]) catName = categoryMap[catName];

    const itemName = row['Ürün Adı'] ? String(row['Ürün Adı']).trim() : '';
    if (!itemName) return;

    if (itemName === 'İşkembe') {
        console.log("Found İşkembe:", row);
    }

    const priceFull = String(row['Fiyat: TAM / 1 P. (TL)'] || '').trim();
    if (itemName === 'İşkembe') {
        console.log("Parsed priceFull:", priceFull);
    }
});

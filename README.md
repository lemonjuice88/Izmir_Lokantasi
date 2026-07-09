# Izmir Restaurant Menu Application

Welcome to the **Izmir Restaurant** digital menu application repository! This is a modern, fully dynamic, and multi-language responsive web menu built for a restaurant established in 1965.

## 🚀 Features

- **Dynamic Excel Integration:** The entire menu is powered by a local Excel file (`menu_prices.xlsx`). Update prices, items, calorie counts, or gluten information in the Excel sheet, and the website updates automatically upon page refresh. No database or backend required!
- **Multi-Language Support:** Instant switching between Turkish, English, and Arabic.
- **Smart Option Handling:** Automatically detects and beautifully renders multiple portion sizes (e.g., Small, Full, 1.5 Portions) or single prices depending on the data.
- **Custom Categorization & Iconography:** Categories are dynamically loaded with custom PNG icons that give the app a premium, appetizing look.
- **Allergen & Diet Badges:** Displays gluten warnings and calorie counts dynamically if provided in the dataset.

## 📁 Project Structure

```text
/
├── index.html           # Landing page
├── menu.html            # Main digital menu page
├── menu_prices.xlsx     # The database! Edit this file to update the menu.
├── start_site.bat       # Windows batch file to start a local development server
├── css/                 
│   ├── landing.css      # Styles for the landing page
│   └── style.css        # Styles for the digital menu
├── js/
│   ├── landing.js       # Logic for the landing page (language routing)
│   └── app.js           # Core menu logic (Excel parsing, dynamic rendering)
└── visuals/
    ├── logo.png         # Restaurant logo
    ├── icons/           # Custom category icons (PNG)
    └── images/          # Images for individual menu items
```

## 🛠️ Built With

- **HTML5 & Vanilla CSS3** (No external CSS frameworks, purely custom designed)
- **Vanilla JavaScript (ES6)**
- **[SheetJS (xlsx)](https://sheetjs.com/)** (Loaded via CDN to parse the Excel file directly in the browser)
- **[Ionicons](https://ionic.io/ionicons)** (Loaded via CDN for UI icons)

## 💻 Local Development

Because this application fetches a local Excel file using JavaScript (`fetch`), browser CORS policies prevent it from working directly via the `file://` protocol. **You must run a local server.**

### Quick Start (Windows)
Simply double-click the `start_site.bat` file. It will start a lightweight Python HTTP server and automatically open the site in your browser at `http://localhost:8000`.

### Manual Start (Any OS)
If you have Python installed, open your terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

## 📝 How to Update the Menu

1. Open `menu_prices.xlsx` in Microsoft Excel or any spreadsheet editor.
2. Add new items, update prices, or change calorie/gluten information.
3. Save the file.
4. Refresh the web page. The changes will be reflected instantly!

---
*Developed with modern web standards to provide the best digital menu experience.*

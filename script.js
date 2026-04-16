// Переменные
const menuGrid = document.getElementById('menuGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const modal = document.getElementById('itemModal');
const closeBtn = document.querySelector('.close');
const langBtns = document.querySelectorAll('.lang-btn');
let currentCategory = 'all';
let currentLanguage = localStorage.getItem('language') || 'uz';
let currentMenuData = [];

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    currentMenuData = getTranslatedMenu(currentLanguage);
    renderMenu();
    setupEventListeners();
});

// Инициализация языка при загрузке
function initLanguage() {
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
    updateUILanguage();
}

// Отрисовка меню
function renderMenu() {
    menuGrid.innerHTML = '';
    
    const filteredItems = currentCategory === 'all' 
        ? currentMenuData 
        : currentMenuData.filter(item => item.category === currentCategory);
    
    filteredItems.forEach(item => {
        const menuItem = createMenuItemElement(item);
        menuGrid.appendChild(menuItem);
    });
}

// Создание элемента меню
function createMenuItemElement(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    const moreText = translations[currentLanguage].more;
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="menu-item-image">
        <div class="menu-item-content">
            <h3 class="menu-item-title">${item.title}</h3>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-footer">
                <p class="menu-item-price">${item.price}</p>
                <button class="menu-item-btn">${moreText}</button>
            </div>
        </div>
    `;
    
    div.querySelector('.menu-item-btn').addEventListener('click', () => {
        openModal(item);
    });
    
    return div;
}

// Открыть модаль
function openModal(item) {
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalPrice').textContent = `${translations[currentLanguage].price}${item.price}`;
    modal.style.display = 'block';
}

// Закрыть модаль
function closeModal() {
    modal.style.display = 'none';
}

// Обновить язык интерфейса
function updateUILanguage() {
    const t = translations[currentLanguage];
    
    // Обновление текстов в интерфейсе
    document.getElementById('logoText').textContent = t.logo;
    document.getElementById('taglineText').textContent = t.tagline;
    document.title = t.title;
    
    // Обновление текстов кнопок категорий
    const categoryBtnsArray = Array.from(categoryBtns);
    categoryBtnsArray[0].textContent = t.all;
    categoryBtnsArray[1].textContent = t.desserts;
    categoryBtnsArray[2].textContent = t.drinks;
}

// Обновить текст кнопок "Подробнее"
function updateMenuItemButtons() {
    const buttons = document.querySelectorAll('.menu-item-btn');
    buttons.forEach(btn => {
        btn.textContent = translations[currentLanguage].more;
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Смена языков
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLanguage = btn.dataset.lang;
            localStorage.setItem('language', currentLanguage);
            
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            updateUILanguage();
            currentMenuData = getTranslatedMenu(currentLanguage);
            renderMenu();
        });
    });
    
    // Фильтрация по категориям
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenu();
        });
    });
    
    // Закрытие модали
    closeBtn.addEventListener('click', closeModal);
    
    // Закрытие при клике вне модали
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Клавиша Esc для закрытия модали
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

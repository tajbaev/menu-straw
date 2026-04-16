// Переводы интерфейса
const translations = {
    ru: {
        title: 'Choco Garden - Меню',
        logo: '🍓 Choco Garden',
        tagline: 'Гармония фруктов и шоколада',
        all: 'Все',
        desserts: 'Десерты',
        drinks: 'Напитки',
        more: 'Подробнее',
        price: 'Цена: ',
        currency: 'сўм',
        language: 'Язык'
    },
    en: {
        title: 'Choco Garden - Menu',
        logo: '🍓 Choco Garden',
        tagline: 'Harmony of fruit and chocolate',
        all: 'All',
        desserts: 'Desserts',
        drinks: 'Drinks',
        more: 'More details',
        price: 'Price: ',
        currency: 'UZS',
        language: 'Language'
    },
    uz: {
        title: 'Choco Garden - Menyu',
        logo: '🍓 Choco Garden',
        tagline: 'Meva va shokoladning uyg\'unligi',
        all: 'Hamasi',
        desserts: 'Dessertlar',
        drinks: 'Ichimliklar',
        more: 'Batafsil',
        price: 'Narx: ',
        currency: 'so\'m',
        language: 'Til'
    }
};

// Переводы для меню товаров
const menuTranslations = {
    ru: [
        {
            id: 10,
            title: 'Клубника в шоколаде',
            description: 'Свежая клубника, покрытая шоколадом'
        },
        {
            id: 11,
            title: 'Банан в шоколаде',
            description: 'Сочный банан в шоколадной глазури'
        },
        {
            id: 12,
            title: 'Шоколадный цветок',
            description: 'Цветок из бельгийского шоколада'
        },
        {
            id: 13,
            title: 'Набор "Choco Garden Box"',
            description: 'Идеальный сладкий набор для подарка'
        },
        {
            id: 14,
            title: 'Чай с лимоном',
            description: 'Классический горячий чай с долькой лимона'
        },
        {
            id: 15,
            title: 'Американо',
            description: 'Классический чёрный кофе с лёгким телом'
        },
        {
            id: 2,
            title: 'Капучино',
            description: 'Насыщенный кофе с воздушной пенкой'
        },
        {
            id: 9,
            title: 'Латте',
            description: 'Мягкое сочетание эспрессо со вспенённым молоком'
        },
        {
            id: 16,
            title: 'Кофе 3 в 1',
            description: 'Быстрый и сладкий кофейный напиток'
        },
        {
            id: 3,
            title: 'Горячий шоколад',
            description: 'Богатый горячий шоколад с молоком и пенкой'
        },
        {
            id: 17,
            title: 'Фрукты в стаканчике',
            description: 'Свежие фрукты в прозрачном стаканчике с нежной доливкой растопленного шоколада'
        }
    ],
    en: [
        {
            id: 10,
            title: 'Strawberry in Chocolate',
            description: 'Fresh strawberry covered with chocolate'
        },
        {
            id: 11,
            title: 'Banana in Chocolate',
            description: 'Juicy banana in chocolate glaze'
        },
        {
            id: 12,
            title: 'Chocolate Flower',
            description: 'Belgian chocolate flower'
        },
        {
            id: 13,
            title: 'Choco Garden Box Set',
            description: 'Perfect sweet set for a gift'
        },
        {
            id: 14,
            title: 'Tea with Lemon',
            description: 'Classic hot tea with a slice of lemon'
        },
        {
            id: 15,
            title: 'Americano',
            description: 'Classic black coffee with light body'
        },
        {
            id: 2,
            title: 'Cappuccino',
            description: 'Rich coffee with airy foam'
        },
        {
            id: 9,
            title: 'Latte',
            description: 'Soft combination of espresso with frothed milk'
        },
        {
            id: 16,
            title: 'Coffee 3 in 1',
            description: 'Quick and sweet coffee drink'
        },
        {
            id: 3,
            title: 'Hot Chocolate',
            description: 'Rich hot chocolate with milk and foam'
        },
        {
            id: 17,
            title: 'Fruits in a Cup',
            description: 'Fresh fruits in a transparent cup with a gentle drizzle of melted chocolate'
        }
    ],
    uz: [
        {
            id: 10,
            title: 'Shokoladdagi Qulupnay',
            description: 'Shokolad bilan qoplangan yangi qulupnay'
        },
        {
            id: 11,
            title: 'Shokoladdagi Banan',
            description: 'Shokolad glazuridagi shira banan'
        },
        {
            id: 12,
            title: 'Shokolad Guli',
            description: 'Belgiya shokoladidan gul'
        },
        {
            id: 13,
            title: 'Choco Garden Qutilar to\'plami',
            description: 'Sovg\'a uchun mukammal shirin to\'plami'
        },
        {
            id: 14,
            title: 'Limonli Choy',
            description: 'Limonning bo\'lagi bilan klassik issiq choy'
        },
        {
            id: 15,
            title: 'Amerikano',
            description: 'Engli tana bilan klassik qora qahva'
        },
        {
            id: 2,
            title: 'Cappuccino',
            description: 'Havoga bogatilgan qahva'
        },
        {
            id: 9,
            title: 'Latte',
            description: 'Espresso va ko\'pik sut aralashmasi'
        },
        {
            id: 16,
            title: 'Qahva 3 in 1',
            description: 'Tez va shirin qahva ichimlik'
        },
        {
            id: 3,
            title: 'Issiq Shokolad',
            description: 'Sut va ko\'pik bilan boy issiq shokolad'
        },
        {
            id: 17,
            title: 'Stakandagi Mevalar',
            description: 'Shaffof stakanda erigan shokolad tomashasi bilan yangi mevalar'
        }
    ]
};

// Функция для получения перевода меню товара
function getTranslatedMenu(language) {
    const translations = menuTranslations[language] || menuTranslations.ru;
    return menuData.map(item => {
        const translated = translations.find(t => t.id === item.id);
        return {
            ...item,
            title: translated ? translated.title : item.title,
            description: translated ? translated.description : item.description,
            _originalTitle: item.title,
            _originalDescription: item.description
        };
    });
}

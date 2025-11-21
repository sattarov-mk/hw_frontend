const menuData = {
  ru: {
    categories: [
      { id: "hotcoffee", name: "Горячий кофе", icon: "fa-mug-hot" },
      { id: "author", name: "Авторские рафы", icon: "fa-star" },
      { id: "coldcoffee", name: "Холодный кофе", icon: "fa-snowflake" },
      { id: "tea", name: "Чай и матча", icon: "fa-leaf" },
      { id: "milk", name: "Молочные напитки", icon: "fa-glass-whiskey" },
      { id: "lemonades", name: "Лимонады и фреши", icon: "fa-lemon" },
      { id: "smoothies", name: "Смузи и шейки", icon: "fa-blender" },
      { id: "bakery", name: "Выпечка", icon: "fa-bread-slice" },
      { id: "desserts", name: "Десерты", icon: "fa-birthday-cake" },
      { id: "breakfast", name: "Завтраки (до 13:00)", icon: "fa-egg" },
      { id: "salads", name: "Салаты и боулы", icon: "fa-bowl-food" },
      { id: "snacks", name: "Закуски", icon: "fa-utensils" }
    ],
    items: {
      hotcoffee: [
        { name: "Эспрессо", price: "190 ₽", desc: "30 мл" },
        { name: "Доппио", price: "260 ₽", desc: "60 мл" },
        { name: "Американо", price: "210 / 280 ₽", desc: "Классический черный кофе" },
        { name: "Капучино", price: "290 / 360 ₽", popular: true },
        { name: "Латте", price: "310 / 380 ₽" },
        { name: "Флэт уайт", price: "340 ₽", desc: "Насыщенный вкус кофе" },
        { name: "Мокка", price: "360 ₽", desc: "С шоколадным соусом" },
        { name: "Воронка V60", price: "350 ₽", desc: "Альтернативное заваривание" }
      ],
      author: [
        { name: "Раф ванильный", price: "390 ₽", popular: true },
        { name: "Раф лаванда-мёд", price: "430 ₽", popular: true },
        { name: "Раф солёная карамель", price: "430 ₽", popular: true },
        { name: "Раф фисташковый", price: "460 ₽" },
        { name: "Раф цитрусовый", price: "420 ₽" },
        { name: "Сырный раф", price: "440 ₽", desc: "Сливочный вкус" }
      ],
      coldcoffee: [
        { name: "Айс-латте", price: "350 ₽", desc: "Со льдом" },
        { name: "Эспрессо-тоник", price: "390 ₽", popular: true, desc: "Освежающий" },
        { name: "Бамбл", price: "450 ₽", popular: true, desc: "Апельсиновый сок + кофе" },
        { name: "Колд брю", price: "380 ₽" },
        { name: "Фраппе карамельный", price: "420 ₽" }
      ],
      tea: [
        { name: "Матча латте", price: "420 ₽", popular: true },
        { name: "Голубая матча", price: "440 ₽" },
        { name: "Чай с облепихой", price: "420 ₽", popular: true, desc: "Согревающий" },
        { name: "Эрл Грей / Сенча", price: "300 ₽", desc: "500 мл" },
        { name: "Малиновый чай", price: "380 ₽", desc: "С мятой" },
        { name: "Масала", price: "360 ₽", desc: "Пряный чай с молоком" }
      ],
      milk: [
        { name: "Какао классическое", price: "280 ₽", popular: true },
        { name: "Какао с маршмеллоу", price: "320 ₽" },
        { name: "Горячий шоколад", price: "350 ₽", desc: "Густой и насыщенный" },
        { name: "Молоко с медом", price: "200 ₽" },
        { name: "Babyccino", price: "100 ₽", desc: "Взбитое молоко для детей" }
      ],
      lemonades: [
        { name: "Домашний лимонад", price: "350 ₽", popular: true },
        { name: "Маракуйя-Имбирь", price: "390 ₽" },
        { name: "Мохито б/а", price: "380 ₽" },
        { name: "Фреш Апельсиновый", price: "450 ₽", desc: "250 мл" },
        { name: "Фреш Грейпфрутовый", price: "450 ₽", desc: "250 мл" }
      ],
      smoothies: [
        { name: "Тропический смузи", price: "420 ₽", desc: "Манго, банан, кокос" },
        { name: "Ягодный микс", price: "400 ₽", desc: "Клубника, малина" },
        { name: "Зеленый детокc", price: "410 ₽", desc: "Шпинат, яблоко, киви" },
        { name: "Милкшейк Ванильный", price: "350 ₽" },
        { name: "Милкшейк Клубничный", price: "350 ₽" }
      ],
      bakery: [
        { name: "Круассан классический", price: "240 ₽" },
        { name: "Миндальный круассан", price: "350 ₽", popular: true },
        { name: "Шоколадный дан", price: "320 ₽" },
        { name: "Улитка с корицей", price: "280 ₽" },
        { name: "Киш с курицей", price: "390 ₽", desc: "Несладкая выпечка" }
      ],
      desserts: [
        { name: "Чизкейк Сан-Себастьян", price: "450 ₽", popular: true },
        { name: "Чизкейк Фисташковый", price: "490 ₽" },
        { name: "Медовик", price: "380 ₽", desc: "По домашнему рецепту" },
        { name: "Эклер ванильный", price: "350 ₽" },
        { name: "Макарон", price: "150 ₽", desc: "1 шт" },
        { name: "Тирамису", price: "420 ₽" }
      ],
      breakfast: [
        { name: "Сырники со сметаной", price: "450 ₽", popular: true },
        { name: "Овсяная каша", price: "320 ₽", desc: "С ягодами и орехами" },
        { name: "Авокадо тост", price: "520 ₽", popular: true, desc: "С яйцом пашот" },
        { name: "Скрэмбл с лососем", price: "590 ₽" },
        { name: "Бенедикт с ветчиной", price: "480 ₽" },
        { name: "Гранола с йогуртом", price: "360 ₽" }
      ],
      salads: [
        { name: "Цезарь с курицей", price: "550 ₽", popular: true },
        { name: "Цезарь с креветками", price: "620 ₽" },
        { name: "Боул с лососем", price: "650 ₽", desc: "Рис, авокадо, эдамаме" },
        { name: "Греческий салат", price: "480 ₽" }
      ],
      snacks: [
        { name: "Сэндвич с курицей", price: "420 ₽" },
        { name: "Сэндвич с тунцом", price: "440 ₽" },
        { name: "Тост с сыром", price: "350 ₽" }
      ]
    }
  },
  en: {
    categories: [
      { id: "hotcoffee", name: "Hot Coffee", icon: "fa-mug-hot" },
      { id: "author", name: "Signature Rafs", icon: "fa-star" },
      { id: "coldcoffee", name: "Cold Coffee", icon: "fa-snowflake" },
      { id: "tea", name: "Tea & Matcha", icon: "fa-leaf" },
      { id: "milk", name: "Milk Drinks", icon: "fa-glass-whiskey" },
      { id: "lemonades", name: "Lemonades", icon: "fa-lemon" },
      { id: "smoothies", name: "Smoothies", icon: "fa-blender" },
      { id: "bakery", name: "Bakery", icon: "fa-bread-slice" },
      { id: "desserts", name: "Desserts", icon: "fa-birthday-cake" },
      { id: "breakfast", name: "Breakfast (till 1pm)", icon: "fa-egg" },
      { id: "salads", name: "Salads & Bowls", icon: "fa-bowl-food" },
      { id: "snacks", name: "Snacks", icon: "fa-utensils" }
    ],
    items: {
      hotcoffee: [
        { name: "Espresso", price: "190 ₽", desc: "30 ml" },
        { name: "Doppio", price: "260 ₽", desc: "60 ml" },
        { name: "Americano", price: "210 / 280 ₽", desc: "Classic black" },
        { name: "Cappuccino", price: "290 / 360 ₽", popular: true },
        { name: "Latte", price: "310 / 380 ₽" },
        { name: "Flat White", price: "340 ₽", desc: "Rich coffee taste" },
        { name: "Mocha", price: "360 ₽", desc: "With chocolate sauce" },
        { name: "V60 Pour-over", price: "350 ₽", desc: "Alternative brewing" }
      ],
      author: [
        { name: "Vanilla Raf", price: "390 ₽", popular: true },
        { name: "Lavender-Honey Raf", price: "430 ₽", popular: true },
        { name: "Salted Caramel Raf", price: "430 ₽", popular: true },
        { name: "Pistachio Raf", price: "460 ₽" },
        { name: "Citrus Raf", price: "420 ₽" },
        { name: "Cheese Raf", price: "440 ₽", desc: "Creamy taste" }
      ],
      coldcoffee: [
        { name: "Ice Latte", price: "350 ₽", desc: "With ice" },
        { name: "Espresso Tonic", price: "390 ₽", popular: true, desc: "Refreshing" },
        { name: "Bumble Coffee", price: "450 ₽", popular: true, desc: "Orange juice + coffee" },
        { name: "Cold Brew", price: "380 ₽" },
        { name: "Caramel Frappe", price: "420 ₽" }
      ],
      tea: [
        { name: "Matcha Latte", price: "420 ₽", popular: true },
        { name: "Blue Matcha", price: "440 ₽" },
        { name: "Sea Buckthorn Tea", price: "420 ₽", popular: true, desc: "Warming" },
        { name: "Earl Grey / Sencha", price: "300 ₽", desc: "500 ml" },
        { name: "Raspberry & Mint", price: "380 ₽" },
        { name: "Masala Tea", price: "360 ₽", desc: "Spiced tea with milk" }
      ],
      milk: [
        { name: "Classic Cocoa", price: "280 ₽", popular: true },
        { name: "Cocoa with Marshmallows", price: "320 ₽" },
        { name: "Hot Chocolate", price: "350 ₽", desc: "Thick and rich" },
        { name: "Milk with Honey", price: "200 ₽" },
        { name: "Babyccino", price: "100 ₽", desc: "Whipped milk for kids" }
      ],
      lemonades: [
        { name: "Homemade Lemonade", price: "350 ₽", popular: true },
        { name: "Passion Fruit & Ginger", price: "390 ₽" },
        { name: "Virgin Mojito", price: "380 ₽" },
        { name: "Fresh Orange Juice", price: "450 ₽", desc: "250 ml" },
        { name: "Fresh Grapefruit Juice", price: "450 ₽", desc: "250 ml" }
      ],
      smoothies: [
        { name: "Tropical Smoothie", price: "420 ₽", desc: "Mango, banana, coconut" },
        { name: "Berry Mix", price: "400 ₽", desc: "Strawberry, raspberry" },
        { name: "Green Detox", price: "410 ₽", desc: "Spinach, apple, kiwi" },
        { name: "Vanilla Milkshake", price: "350 ₽" },
        { name: "Strawberry Milkshake", price: "350 ₽" }
      ],
      bakery: [
        { name: "Classic Croissant", price: "240 ₽" },
        { name: "Almond Croissant", price: "350 ₽", popular: true },
        { name: "Chocolate Danish", price: "320 ₽" },
        { name: "Cinnamon Bun", price: "280 ₽" },
        { name: "Chicken Quiche", price: "390 ₽", desc: "Savory pastry" }
      ],
      desserts: [
        { name: "San Sebastian Cheesecake", price: "450 ₽", popular: true },
        { name: "Pistachio Cheesecake", price: "490 ₽" },
        { name: "Honey Cake", price: "380 ₽", desc: "Classic Medovik" },
        { name: "Vanilla Eclair", price: "350 ₽" },
        { name: "Macaron", price: "150 ₽", desc: "1 pc" },
        { name: "Tiramisu", price: "420 ₽" }
      ],
      breakfast: [
        { name: "Syrniki (Cottage Cheese Pancakes)", price: "450 ₽", popular: true },
        { name: "Oatmeal Porridge", price: "320 ₽", desc: "With berries and nuts" },
        { name: "Avocado Toast", price: "520 ₽", popular: true, desc: "With poached egg" },
        { name: "Salmon Scramble", price: "590 ₽" },
        { name: "Eggs Benedict", price: "480 ₽", desc: "With ham" },
        { name: "Granola with Yogurt", price: "360 ₽" }
      ],
      salads: [
        { name: "Caesar with Chicken", price: "550 ₽", popular: true },
        { name: "Caesar with Shrimps", price: "620 ₽" },
        { name: "Salmon Poke Bowl", price: "650 ₽", desc: "Rice, avocado, edamame" },
        { name: "Greek Salad", price: "480 ₽" }
      ],
      snacks: [
        { name: "Chicken Sandwich", price: "420 ₽" },
        { name: "Tuna Sandwich", price: "440 ₽" },
        { name: "Cheese Toast", price: "350 ₽" }
      ]
    }
  }
};

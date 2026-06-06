import type { Locale } from './config'

// ترجمات محتوى البيانات (الأقسام، الأطباق، الآراء، معلومات المطعم)
// مفتاحة حسب المعرّف (id/slug) لتبقى مستقلة عن اللغة.

type Translated = Record<Locale, string>

export const categoryNames: Record<string, Translated> = {
  all: { de: 'Alle', en: 'All', ar: 'الكل', tr: 'Tümü' },
  grills: { de: 'Grill', en: 'Grills', ar: 'مشاوي', tr: 'Izgaralar' },
  pizza: { de: 'Pizza', en: 'Pizza', ar: 'بيتزا', tr: 'Pizza' },
  burger: { de: 'Burger', en: 'Burgers', ar: 'برغر', tr: 'Burgerler' },
  oriental: {
    de: 'Orientalische Gerichte',
    en: 'Oriental Dishes',
    ar: 'أطباق شرقية',
    tr: 'Doğu Yemekleri',
  },
  drinks: { de: 'Getränke', en: 'Drinks', ar: 'مشروبات', tr: 'İçecekler' },
  desserts: { de: 'Desserts', en: 'Desserts', ar: 'حلويات', tr: 'Tatlılar' },
}

type DishText = { name: Translated; description: Translated }

export const dishTranslations: Record<string, DishText> = {
  m1: {
    name: {
      de: 'Königliche gemischte Grillplatte',
      en: 'Royal Mixed Grill',
      ar: 'مشكل مشاوي ملكي',
      tr: 'Kraliyet Karışık Izgara',
    },
    description: {
      de: 'Edle Auswahl an Kebab, Shish Tawook und Lammkoteletts mit gegrilltem Gemüse.',
      en: 'A premium selection of kebab, shish tawook, and lamb chops with grilled vegetables.',
      ar: 'تشكيلة فاخرة من الكباب وشيش طاووق وريش الغنم مع خضار مشوية.',
      tr: 'Izgara sebzelerle birlikte kebap, shish tavuk ve kuzu pirzolasından oluşan seçkin bir seçki.',
    },
  },
  m2: {
    name: {
      de: 'Hausgemachter Fleisch-Kebab',
      en: 'Local Meat Kebab',
      ar: 'كباب لحم بلدي',
      tr: 'Yerli Et Kebabı',
    },
    description: {
      de: 'Frischer Fleisch-Kebab, gewürzt mit orientalischen Gewürzen und über Kohle gegrillt.',
      en: 'Fresh meat kebab seasoned with oriental spices and grilled over charcoal.',
      ar: 'كباب لحم طازج متبّل بالبهارات الشرقية ومشوي على الفحم.',
      tr: 'Doğu baharatlarıyla terbiyelenmiş, kömürde ızgara taze et kebabı.',
    },
  },
  m3: {
    name: {
      de: 'Shish Tawook',
      en: 'Shish Tawook',
      ar: 'شيش طاووق',
      tr: 'Shish Tavuk',
    },
    description: {
      de: 'Mit Knoblauch und Zitrone marinierte Hähnchenstücke, perfekt gegrillt.',
      en: 'Chicken pieces marinated with garlic and lemon, perfectly grilled.',
      ar: 'قطع دجاج متبّلة بالثوم والليمون مشوية بإتقان.',
      tr: 'Sarımsak ve limonla marine edilmiş, kusursuz ızgara tavuk parçaları.',
    },
  },
  m4: {
    name: {
      de: 'Pizza Margherita',
      en: 'Margherita Pizza',
      ar: 'بيتزا مارغريتا',
      tr: 'Margherita Pizza',
    },
    description: {
      de: 'Frischer italienischer Teig mit Tomatensauce, Mozzarella und Basilikum.',
      en: 'Fresh Italian dough with tomato sauce, mozzarella, and basil.',
      ar: 'عجينة إيطالية طازجة مع صلصة الطماطم وجبن الموزاريلا والريحان.',
      tr: 'Domates sosu, mozzarella ve fesleğenli taze İtalyan hamuru.',
    },
  },
  m5: {
    name: {
      de: 'Super Supreme Pizza',
      en: 'Super Supreme Pizza',
      ar: 'بيتزا سوبر سوبريم',
      tr: 'Super Supreme Pizza',
    },
    description: {
      de: 'Reichhaltige Pizza mit Fleisch, Gemüse und verschiedenen Käsesorten auf knusprigem Teig.',
      en: 'A pizza rich with meats, vegetables, and mixed cheese on a crispy crust.',
      ar: 'بيتزا غنية باللحوم والخضار والجبن المشكّل على عجينة مقرمشة.',
      tr: 'Çıtır hamur üzerinde etler, sebzeler ve karışık peynirle zengin bir pizza.',
    },
  },
  m6: {
    name: {
      de: 'Doppel-Fleisch-Burger',
      en: 'Double Meat Burger',
      ar: 'برغر لحم مزدوج',
      tr: 'Çift Etli Burger',
    },
    description: {
      de: 'Zwei gegrillte Rindfleisch-Patties mit geschmolzenem Cheddar, frischem Gemüse und Spezialsauce.',
      en: 'Two grilled beef patties with melted cheddar, fresh vegetables, and special sauce.',
      ar: 'قطعتا لحم بقري مشوي مع جبن شيدر ذائب وخضار طازجة وصلصة خاصة.',
      tr: 'Eritilmiş cheddar, taze sebzeler ve özel sosla iki ızgara dana köftesi.',
    },
  },
  m7: {
    name: {
      de: 'Knuspriger Hähnchen-Burger',
      en: 'Crispy Chicken Burger',
      ar: 'برغر دجاج مقرمش',
      tr: 'Çıtır Tavuk Burger',
    },
    description: {
      de: 'Knuspriges Hähnchenbrustfilet mit Salat, Tomate und Knoblauchsauce auf Brioche-Brötchen.',
      en: 'Crispy chicken breast with lettuce, tomato, and garlic sauce on a brioche bun.',
      ar: 'صدر دجاج مقرمش مع خس وطماطم وصلصة الثوم على خبز برييوش.',
      tr: 'Brioche ekmeği üzerinde marul, domates ve sarımsak soslu çıtır tavuk göğsü.',
    },
  },
  m8: {
    name: {
      de: 'Gemischte orientalische Mezze',
      en: 'Mixed Oriental Mezze',
      ar: 'مازة شرقية مشكّلة',
      tr: 'Karışık Doğu Mezesi',
    },
    description: {
      de: 'Hummus, Mutabbal, Falafel und eine Auswahl orientalischer Vorspeisen mit frischem Brot.',
      en: 'Hummus, mutabbal, falafel, and a selection of oriental appetizers with fresh bread.',
      ar: 'حمص، متبّل، فلافل، وتشكيلة مقبلات شرقية مع خبز طازج.',
      tr: 'Humus, mutabbal, falafel ve taze ekmekle doğu mezeleri seçkisi.',
    },
  },
  m9: {
    name: {
      de: 'Lamm-Mandi',
      en: 'Lamb Mandi',
      ar: 'مندي لحم',
      tr: 'Kuzu Mandi',
    },
    description: {
      de: 'Gewürzter Basmatireis mit zartem, traditionell gegartem Fleisch.',
      en: 'Spiced basmati rice with tender meat cooked the traditional way.',
      ar: 'أرز بسمتي بالبهارات مع لحم طري مطهو على الطريقة التقليدية.',
      tr: 'Geleneksel yöntemle pişirilmiş yumuşak etle baharatlı basmati pirinci.',
    },
  },
  m10: {
    name: {
      de: 'Zitronen-Minz-Saft',
      en: 'Lemon Mint Juice',
      ar: 'عصير ليمون بالنعناع',
      tr: 'Naneli Limon Suyu',
    },
    description: {
      de: 'Erfrischender frischer Zitronensaft mit Minzblättern.',
      en: 'Refreshing fresh lemon juice with mint leaves.',
      ar: 'عصير ليمون منعش طازج مع أوراق النعناع.',
      tr: 'Nane yapraklarıyla ferahlatıcı taze limon suyu.',
    },
  },
  m11: {
    name: {
      de: 'Frucht-Mocktail',
      en: 'Fruit Mocktail',
      ar: 'موكتيل فواكه',
      tr: 'Meyveli Mocktail',
    },
    description: {
      de: 'Eine Mischung aus erfrischenden frischen Früchten in einem eleganten Glas.',
      en: 'A blend of refreshing fresh fruits in an elegant glass.',
      ar: 'خليط من الفواكه الطازجة المنعشة في كأس أنيق.',
      tr: 'Şık bir bardakta ferahlatıcı taze meyve karışımı.',
    },
  },
  m12: {
    name: {
      de: 'Schokoladen-Lava-Kuchen',
      en: 'Molten Chocolate Cake',
      ar: 'كيكة الشوكولاتة البركانية',
      tr: 'Sıcak Çikolatalı Sufle',
    },
    description: {
      de: 'Warmer Schokoladenkuchen mit flüssigem Kern und Vanilleeis.',
      en: 'Warm chocolate cake with a molten center and vanilla ice cream.',
      ar: 'كيكة شوكولاتة دافئة بقلب سائل مع آيس كريم الفانيلا.',
      tr: 'Akışkan merkezli sıcak çikolatalı kek ve vanilyalı dondurma.',
    },
  },
  m13: {
    name: {
      de: 'Kanafeh mit Sahne',
      en: 'Kunafa with Cream',
      ar: 'كنافة بالقشطة',
      tr: 'Kaymaklı Künefe',
    },
    description: {
      de: 'Goldene orientalische Kanafeh, gefüllt mit Sahne und mit Pistazien garniert.',
      en: 'Golden oriental kunafa filled with cream and topped with pistachios.',
      ar: 'كنافة شرقية ذهبية محشوة بالقشطة ومزيّنة بالفستق.',
      tr: 'Kaymakla doldurulmuş, fıstıkla süslenmiş altın rengi doğu künefesi.',
    },
  },
}

type TestimonialText = { name: Translated; comment: Translated }

export const testimonialTranslations: Record<string, TestimonialText> = {
  t1: {
    name: {
      de: 'Ahmad Al-Ali',
      en: 'Ahmad Al-Ali',
      ar: 'أحمد العلي',
      tr: 'Ahmad Al-Ali',
    },
    comment: {
      de: 'Das beste Grillgericht, das ich je probiert habe – schneller Service und fantastischer Geschmack!',
      en: 'The best grills I have ever tasted, fast service and an amazing flavor!',
      ar: 'أفضل مشاوي تذوقتها على الإطلاق، الخدمة سريعة والطعم خيالي!',
      tr: 'Şimdiye kadar tattığım en iyi ızgara, hızlı servis ve harika bir lezzet!',
    },
  },
  t2: {
    name: {
      de: 'Sara Mohammed',
      en: 'Sara Mohammed',
      ar: 'سارة محمد',
      tr: 'Sara Mohammed',
    },
    comment: {
      de: 'Edles Ambiente und frische Zutaten – ein unvergessliches Abendessen mit der Familie.',
      en: 'Luxurious atmosphere and fresh ingredients, an unforgettable dinner experience with family.',
      ar: 'أجواء فاخرة ومكونات طازجة، تجربة عشاء لا تُنسى مع العائلة.',
      tr: 'Lüks atmosfer ve taze malzemeler, ailecek unutulmaz bir akşam yemeği deneyimi.',
    },
  },
  t3: {
    name: {
      de: 'Khaled Ibrahim',
      en: 'Khaled Ibrahim',
      ar: 'خالد إبراهيم',
      tr: 'Khaled Ibrahim',
    },
    comment: {
      de: 'Die Pizza ist großartig und die Preise sind für die hohe Qualität sehr fair.',
      en: 'The pizza is great and the prices are very reasonable for the high quality.',
      ar: 'البيتزا رائعة والأسعار مناسبة جدًا مقابل الجودة العالية.',
      tr: 'Pizza harika ve fiyatlar yüksek kaliteye göre çok uygun.',
    },
  },
}

export const restaurantInfoTranslations: {
  address: Translated
  hours: Translated
} = {
  address: {
    de: 'Königstraße 12, Stadtmitte, Berlin, Deutschland',
    en: 'Königstraße 12, City Center, Berlin, Germany',
    ar: 'شارع الملك 12، وسط المدينة، برلين، ألمانيا',
    tr: 'Königstraße 12, Şehir Merkezi, Berlin, Almanya',
  },
  hours: {
    de: 'Täglich von 12:00 Uhr bis 01:00 Uhr',
    en: 'Daily from 12:00 PM to 1:00 AM',
    ar: 'يوميًا من 12:00 ظهرًا حتى 1:00 صباحًا',
    tr: 'Her gün 12:00 - 01:00 arası',
  },
}

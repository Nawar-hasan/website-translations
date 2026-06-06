import type { Locale } from './config'

export type Dictionary = {
  brand: { name: string; short: string; tagline: string }
  nav: {
    home: string
    menu: string
    order: string
    reservation: string
    contact: string
    admin: string
    cart: string
    orderNow: string
    menuTitle: string
    language: string
  }
  hero: {
    badge: string
    titleLead: string
    titleHighlight: string
    description: string
    orderNow: string
    reserve: string
  }
  features: {
    fastDelivery: { title: string; desc: string }
    freshIngredients: { title: string; desc: string }
    bestPrices: { title: string; desc: string }
    topRated: { title: string; desc: string }
  }
  popular: {
    eyebrow: string
    title: string
    subtitle: string
    browseFullMenu: string
  }
  testimonials: {
    eyebrow: string
    title: string
  }
  cta: {
    title: string
    description: string
    orderNow: string
    reserve: string
  }
  menuCard: {
    popular: string
    unavailable: string
    add: string
    currency: string
    addedToast: (name: string) => string
  }
  menuBrowser: {
    searchPlaceholder: string
    noResultsTitle: string
    noResultsDesc: string
  }
  pages: {
    menu: { title: string; subtitle: string }
    order: { title: string; subtitle: string }
    reservation: { title: string; subtitle: string }
    contact: { title: string; subtitle: string }
  }
  order: {
    emptyTitle: string
    emptyDesc: string
    browseMenu: string
    cartTitle: (count: number) => string
    clearCart: string
    increase: string
    decrease: string
    remove: string
    deliveryInfo: string
    fullName: string
    namePlaceholder: string
    phone: string
    phonePlaceholder: string
    address: string
    addressPlaceholder: string
    notes: string
    notesPlaceholder: string
    optional: string
    subtotal: string
    deliveryFee: string
    total: string
    sendViaWhatsApp: string
    onlinePayment: string
    paymentDisabledTitle: string
    fillRequired: string
    orderReady: string
  }
  reservation: {
    name: string
    namePlaceholder: string
    phone: string
    phonePlaceholder: string
    date: string
    time: string
    guests: string
    notes: string
    notesPlaceholder: string
    optional: string
    submit: string
    fillRequired: string
    successToast: string
    confirmedTitle: string
    confirmedDesc: (args: {
      name: string
      date: string
      time: string
      guests: string
    }) => string
    newReservation: string
  }
  contact: {
    address: string
    phone: string
    email: string
    hours: string
    storyEyebrow: string
    storyTitle: string
    storyP1: string
    storyP2: string
    followUs: string
    mapTitle: string
    interiorAlt: string
  }
  footer: {
    about: string
    quickLinks: string
    contactUs: string
    workingHours: string
    rights: (year: number) => string
  }
}

const de: Dictionary = {
  brand: {
    name: 'Royal Taste Restaurant',
    short: 'Royal Taste',
    tagline: 'Authentische Aromen mit modernem Touch',
  },
  nav: {
    home: 'Startseite',
    menu: 'Speisekarte',
    order: 'Online bestellen',
    reservation: 'Tisch reservieren',
    contact: 'Restaurant-Infos',
    admin: 'Verwaltung',
    cart: 'Warenkorb',
    orderNow: 'Jetzt bestellen',
    menuTitle: 'Menü',
    language: 'Sprache',
  },
  hero: {
    badge: 'Edles Restaurant mit 4,9 Sterne-Bewertung',
    titleLead: 'Königlicher Geschmack',
    titleHighlight: 'für Ihren feinen Gaumen',
    description:
      'Im Royal Taste Restaurant servieren wir die köstlichsten Grillgerichte, Pizza, Burger sowie orientalische und westliche Speisen – zubereitet aus besten frischen Zutaten von erfahrenen Köchen für ein unvergessliches Geschmackserlebnis.',
    orderNow: 'Jetzt bestellen',
    reserve: 'Tisch reservieren',
  },
  features: {
    fastDelivery: {
      title: 'Schnelle Lieferung',
      desc: 'Wir liefern Ihre Bestellung schnellstmöglich heiß bis vor Ihre Tür.',
    },
    freshIngredients: {
      title: 'Frische Zutaten',
      desc: 'Wir wählen täglich die besten frischen Zutaten für besten Geschmack.',
    },
    bestPrices: {
      title: 'Beste Preise',
      desc: 'Edle Qualität zu wettbewerbsfähigen Preisen für jeden.',
    },
    topRated: {
      title: 'Top bewertet',
      desc: 'Tausende zufriedene Kunden vertrauen uns und empfehlen uns weiter.',
    },
  },
  popular: {
    eyebrow: 'Unsere Spezialitäten',
    title: 'Unsere beliebtesten Gerichte',
    subtitle:
      'Entdecken Sie die meistbestellten Gerichte, die unsere Gäste lieben – mit größter Sorgfalt zubereitet.',
    browseFullMenu: 'Komplette Speisekarte ansehen',
  },
  testimonials: {
    eyebrow: 'Kundenstimmen',
    title: 'Was unsere Gäste sagen',
  },
  cta: {
    title: 'Bereit für ein unvergessliches Geschmackserlebnis?',
    description:
      'Bestellen Sie jetzt Ihr Lieblingsgericht mit schneller Lieferung oder reservieren Sie Ihren Tisch für einen besonderen Abend in stilvollem Ambiente.',
    orderNow: 'Jetzt bestellen',
    reserve: 'Tisch reservieren',
  },
  menuCard: {
    popular: 'Beliebt',
    unavailable: 'Derzeit nicht verfügbar',
    add: 'Hinzufügen',
    currency: '€',
    addedToast: (name) => `„${name}" wurde zum Warenkorb hinzugefügt`,
  },
  menuBrowser: {
    searchPlaceholder: 'Suchen Sie Ihr Lieblingsgericht...',
    noResultsTitle: 'Keine Ergebnisse',
    noResultsDesc:
      'Wir konnten keine passenden Gerichte finden. Versuchen Sie ein anderes Wort oder eine andere Kategorie.',
  },
  pages: {
    menu: {
      title: 'Speisekarte',
      subtitle:
        'Entdecken Sie unsere große Auswahl an edlen Gerichten aus besten frischen Zutaten.',
    },
    order: {
      title: 'Online bestellen',
      subtitle:
        'Prüfen Sie Ihren Warenkorb, geben Sie Ihre Daten ein und senden Sie Ihre Bestellung ganz einfach per WhatsApp.',
    },
    reservation: {
      title: 'Tisch reservieren',
      subtitle:
        'Reservieren Sie Ihren Tisch im Voraus und genießen Sie einen unvergesslichen Abend in unserem stilvollen Ambiente.',
    },
    contact: {
      title: 'Restaurant-Infos',
      subtitle:
        'Wir sind für Sie da. Kontaktieren Sie uns oder besuchen Sie uns für ein edles Erlebnis.',
    },
  },
  order: {
    emptyTitle: 'Ihr Warenkorb ist leer',
    emptyDesc:
      'Sie haben noch keine Gerichte hinzugefügt. Stöbern Sie in der Speisekarte und wählen Sie die köstlichsten Gerichte.',
    browseMenu: 'Speisekarte ansehen',
    cartTitle: (count) => `Warenkorb (${count})`,
    clearCart: 'Warenkorb leeren',
    increase: 'Erhöhen',
    decrease: 'Verringern',
    remove: 'Entfernen',
    deliveryInfo: 'Lieferdaten',
    fullName: 'Vollständiger Name',
    namePlaceholder: 'z. B.: Max Mustermann',
    phone: 'Telefonnummer',
    phonePlaceholder: '01XXXXXXXXX',
    address: 'Adresse',
    addressPlaceholder: 'Stadtteil, Straße, Hausnummer...',
    notes: 'Zusätzliche Hinweise',
    notesPlaceholder: 'Besondere Wünsche zur Bestellung...',
    optional: 'Optional',
    subtotal: 'Zwischensumme',
    deliveryFee: 'Liefergebühr',
    total: 'Gesamt',
    sendViaWhatsApp: 'Bestellung per WhatsApp senden',
    onlinePayment: 'Online-Zahlung (bald)',
    paymentDisabledTitle: 'Zahlungsgateway noch nicht aktiviert',
    fillRequired: 'Bitte Name, Telefonnummer und Adresse ausfüllen.',
    orderReady:
      'Ihre Bestellung ist bereit! Sie werden zu WhatsApp weitergeleitet, um sie abzusenden.',
  },
  reservation: {
    name: 'Name',
    namePlaceholder: 'Ihr vollständiger Name',
    phone: 'Telefonnummer',
    phonePlaceholder: '01XXXXXXXXX',
    date: 'Datum',
    time: 'Uhrzeit',
    guests: 'Anzahl der Personen',
    notes: 'Hinweise',
    notesPlaceholder: 'Besondere Wünsche, bestimmter Anlass...',
    optional: 'Optional',
    submit: 'Reservierung senden',
    fillRequired: 'Bitte füllen Sie alle Pflichtfelder aus.',
    successToast: 'Ihre Reservierungsanfrage wurde erfolgreich empfangen!',
    confirmedTitle: 'Reservierungsanfrage bestätigt!',
    confirmedDesc: ({ name, date, time, guests }) =>
      `Vielen Dank, ${name}. Ihre Reservierungsanfrage für den ${date} um ${time} Uhr für ${guests} Personen ist eingegangen. Wir melden uns in Kürze zur Bestätigung.`,
    newReservation: 'Neue Reservierung',
  },
  contact: {
    address: 'Adresse',
    phone: 'Telefon',
    email: 'E-Mail',
    hours: 'Öffnungszeiten',
    storyEyebrow: 'Unsere Geschichte',
    storyTitle: 'Leidenschaft fürs Essen seit der Gründung',
    storyP1:
      'Das Royal Taste Restaurant entstand aus dem Traum, ein außergewöhnliches Geschmackserlebnis zu bieten, das die Authentizität orientalischer Aromen mit der Kreativität der westlichen Küche verbindet. Wir wählen täglich die besten frischen Zutaten, und unsere erfahrenen Köche bereiten Gerichte zu, die Auge und Gaumen erfreuen.',
    storyP2:
      'Wir glauben, dass Qualität keine Kompromisse kennt. Deshalb sorgen wir dafür, dass jedes Gericht ein Meisterwerk an Aromen ist – in einem edlen Ambiente, das Ihrem feinen Geschmack gerecht wird.',
    followUs: 'Folgen Sie uns',
    mapTitle: 'Unser Standort auf der Karte',
    interiorAlt: 'Ambiente des Royal Taste Restaurants',
  },
  footer: {
    about:
      'Ihre erste Adresse für edle Grillgerichte, Pizza, Burger sowie orientalische und westliche Speisen. Wir bieten Ihnen ein unvergessliches Geschmackserlebnis aus besten Zutaten.',
    quickLinks: 'Schnelllinks',
    contactUs: 'Kontakt',
    workingHours: 'Öffnungszeiten',
    rights: (year) =>
      `© ${year} Royal Taste Restaurant. Alle Rechte vorbehalten.`,
  },
}

const en: Dictionary = {
  brand: {
    name: 'Royal Taste Restaurant',
    short: 'Royal Taste',
    tagline: 'Authentic flavors with a modern touch',
  },
  nav: {
    home: 'Home',
    menu: 'Menu',
    order: 'Order Online',
    reservation: 'Reserve a Table',
    contact: 'Restaurant Info',
    admin: 'Dashboard',
    cart: 'Cart',
    orderNow: 'Order Now',
    menuTitle: 'Menu',
    language: 'Language',
  },
  hero: {
    badge: 'Fine dining rated 4.9 stars',
    titleLead: 'A royal taste worthy',
    titleHighlight: 'of your refined palate',
    description:
      'At Royal Taste Restaurant we serve the finest grills, pizza, burgers, and oriental and western dishes, prepared from the freshest premium ingredients by our most skilled chefs for an unforgettable dining experience.',
    orderNow: 'Order Now',
    reserve: 'Reserve a Table',
  },
  features: {
    fastDelivery: {
      title: 'Fast Delivery',
      desc: 'We deliver your order hot to your doorstep as fast as possible.',
    },
    freshIngredients: {
      title: 'Fresh Ingredients',
      desc: 'We pick the finest fresh ingredients daily to guarantee the best taste.',
    },
    bestPrices: {
      title: 'Best Prices',
      desc: 'Premium quality at competitive prices that suit everyone.',
    },
    topRated: {
      title: 'Top Rated',
      desc: 'Thousands of happy customers trust us and always recommend us.',
    },
  },
  popular: {
    eyebrow: 'Our Specialties',
    title: 'Our Most Popular Dishes',
    subtitle:
      'Discover the most ordered dishes our customers love, prepared with the utmost care.',
    browseFullMenu: 'Browse the full menu',
  },
  testimonials: {
    eyebrow: 'Customer Reviews',
    title: 'What our guests say',
  },
  cta: {
    title: 'Ready for an unforgettable taste experience?',
    description:
      'Order your favorite meal now and enjoy fast delivery, or reserve your table for a special evening in an elegant atmosphere.',
    orderNow: 'Order Now',
    reserve: 'Reserve a Table',
  },
  menuCard: {
    popular: 'Most Popular',
    unavailable: 'Currently unavailable',
    add: 'Add',
    currency: '€',
    addedToast: (name) => `"${name}" added to cart`,
  },
  menuBrowser: {
    searchPlaceholder: 'Search for your favorite meal...',
    noResultsTitle: 'No results',
    noResultsDesc:
      'We could not find meals matching your search. Try another word or a different category.',
  },
  pages: {
    menu: {
      title: 'Menu',
      subtitle:
        'Explore our wide selection of premium dishes made from the finest fresh ingredients.',
    },
    order: {
      title: 'Order Online',
      subtitle:
        'Review your cart, enter your details, and send your order easily via WhatsApp.',
    },
    reservation: {
      title: 'Reserve a Table',
      subtitle:
        'Reserve your table in advance to secure your spot and enjoy an unforgettable evening in our elegant atmosphere.',
    },
    contact: {
      title: 'Restaurant Info',
      subtitle:
        'We are here to serve you. Contact us or visit us at our location for a premium experience.',
    },
  },
  order: {
    emptyTitle: 'Your cart is empty',
    emptyDesc:
      'You have not added any meals yet. Browse the menu and pick the most delicious dishes.',
    browseMenu: 'Browse the menu',
    cartTitle: (count) => `Order Cart (${count})`,
    clearCart: 'Clear cart',
    increase: 'Increase',
    decrease: 'Decrease',
    remove: 'Remove',
    deliveryInfo: 'Delivery Details',
    fullName: 'Full Name',
    namePlaceholder: 'e.g.: John Smith',
    phone: 'Phone Number',
    phonePlaceholder: '01XXXXXXXXX',
    address: 'Address',
    addressPlaceholder: 'District, street, building number...',
    notes: 'Additional Notes',
    notesPlaceholder: 'Any special instructions for the order...',
    optional: 'Optional',
    subtotal: 'Subtotal',
    deliveryFee: 'Delivery Fee',
    total: 'Total',
    sendViaWhatsApp: 'Send order via WhatsApp',
    onlinePayment: 'Online Payment (soon)',
    paymentDisabledTitle: 'Payment gateway not activated yet',
    fillRequired: 'Please fill in the name, phone number, and address.',
    orderReady:
      'Your order is ready! You will be redirected to WhatsApp to complete sending it.',
  },
  reservation: {
    name: 'Name',
    namePlaceholder: 'Your full name',
    phone: 'Phone Number',
    phonePlaceholder: '01XXXXXXXXX',
    date: 'Date',
    time: 'Time',
    guests: 'Number of Guests',
    notes: 'Notes',
    notesPlaceholder: 'Special requests, a particular occasion...',
    optional: 'Optional',
    submit: 'Send Reservation',
    fillRequired: 'Please fill in all required fields.',
    successToast: 'Your reservation request was received successfully!',
    confirmedTitle: 'Reservation request confirmed!',
    confirmedDesc: ({ name, date, time, guests }) =>
      `Thank you, ${name}. Your reservation request for ${date} at ${time} for ${guests} guests has been received. We will contact you soon to confirm.`,
    newReservation: 'New reservation',
  },
  contact: {
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    hours: 'Opening Hours',
    storyEyebrow: 'Our Story',
    storyTitle: 'A passion for food since day one',
    storyP1:
      'Royal Taste Restaurant began with a dream to offer an exceptional dining experience that blends the authenticity of oriental flavors with the creativity of western cuisine. We select the finest fresh ingredients daily, and our team of skilled chefs prepares dishes that delight the eye before the palate.',
    storyP2:
      'We believe quality is non-negotiable, which is why we ensure that every dish we serve is a masterpiece of flavors in an elegant atmosphere worthy of your refined taste.',
    followUs: 'Follow us',
    mapTitle: 'Our location on the map',
    interiorAlt: 'Royal Taste Restaurant ambiance',
  },
  footer: {
    about:
      'Your first destination for premium grills, pizza, burgers, and oriental and western dishes. We offer you an unforgettable dining experience with the finest ingredients.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    workingHours: 'Opening Hours',
    rights: (year) =>
      `© ${year} Royal Taste Restaurant. All rights reserved.`,
  },
}

const ar: Dictionary = {
  brand: {
    name: 'مطعم رويال تيست',
    short: 'رويال تيست',
    tagline: 'نكهات أصيلة بلمسة عصرية',
  },
  nav: {
    home: 'الرئيسية',
    menu: 'المنيو',
    order: 'الطلب أونلاين',
    reservation: 'حجز طاولة',
    contact: 'معلومات المطعم',
    admin: 'لوحة التحكم',
    cart: 'السلة',
    orderNow: 'اطلب الآن',
    menuTitle: 'القائمة',
    language: 'اللغة',
  },
  hero: {
    badge: 'مطعم فاخر بتقييم 4.9 نجوم',
    titleLead: 'نكهة ملكية تليق',
    titleHighlight: 'بذوقك الرفيع',
    description:
      'في مطعم رويال تيست نقدّم أشهى المشاوي والبيتزا والبرغر والأطباق الشرقية والغربية، محضّرة بأجود المكونات الطازجة وبأيدي أمهر الطهاة لتجربة طعام لا تُنسى.',
    orderNow: 'اطلب الآن',
    reserve: 'احجز طاولة',
  },
  features: {
    fastDelivery: {
      title: 'توصيل سريع',
      desc: 'نوصل طلبك ساخنًا إلى باب منزلك في أسرع وقت ممكن.',
    },
    freshIngredients: {
      title: 'مكونات طازجة',
      desc: 'نختار أجود المكونات الطازجة يوميًا لضمان أفضل مذاق.',
    },
    bestPrices: {
      title: 'أفضل الأسعار',
      desc: 'جودة فاخرة بأسعار تنافسية تناسب الجميع.',
    },
    topRated: {
      title: 'تقييمات عالية',
      desc: 'آلاف العملاء السعداء يثقون بنا ويوصون بنا دائمًا.',
    },
  },
  popular: {
    eyebrow: 'قائمتنا المميزة',
    title: 'أشهر الأطباق لدينا',
    subtitle:
      'اكتشف الأطباق الأكثر طلبًا التي يعشقها عملاؤنا، محضّرة بعناية فائقة.',
    browseFullMenu: 'تصفح المنيو كاملاً',
  },
  testimonials: {
    eyebrow: 'آراء عملائنا',
    title: 'ماذا يقول زوّارنا؟',
  },
  cta: {
    title: 'جاهز لتجربة نكهة لا تُنسى؟',
    description:
      'اطلب وجبتك المفضلة الآن واستمتع بتوصيل سريع، أو احجز طاولتك لقضاء أمسية مميزة في أجواء راقية.',
    orderNow: 'اطلب الآن',
    reserve: 'احجز طاولة',
  },
  menuCard: {
    popular: 'الأكثر طلبًا',
    unavailable: 'غير متاح حاليًا',
    add: 'إضافة',
    currency: '€',
    addedToast: (name) => `تمت إضافة "${name}" إلى السلة`,
  },
  menuBrowser: {
    searchPlaceholder: 'ابحث عن وجبتك المفضلة...',
    noResultsTitle: 'لا توجد نتائج',
    noResultsDesc:
      'لم نعثر على وجبات تطابق بحثك. جرّب كلمة أخرى أو قسمًا مختلفًا.',
  },
  pages: {
    menu: {
      title: 'قائمة الطعام',
      subtitle:
        'استكشف تشكيلتنا الواسعة من الأطباق الفاخرة المحضّرة بأجود المكونات الطازجة.',
    },
    order: {
      title: 'الطلب أونلاين',
      subtitle: 'راجع سلتك، أدخل بياناتك، وأرسل طلبك بسهولة عبر واتساب.',
    },
    reservation: {
      title: 'حجز طاولة',
      subtitle:
        'احجز طاولتك مسبقًا لضمان مكانك والاستمتاع بأمسية لا تُنسى في أجوائنا الراقية.',
    },
    contact: {
      title: 'معلومات المطعم',
      subtitle:
        'نحن هنا لخدمتك. تواصل معنا أو زرنا في موقعنا للاستمتاع بتجربة فاخرة.',
    },
  },
  order: {
    emptyTitle: 'سلتك فارغة',
    emptyDesc:
      'لم تقم بإضافة أي وجبات بعد. تصفّح المنيو واختر أشهى الأطباق.',
    browseMenu: 'تصفّح المنيو',
    cartTitle: (count) => `سلة الطلبات (${count})`,
    clearCart: 'تفريغ السلة',
    increase: 'زيادة',
    decrease: 'إنقاص',
    remove: 'إزالة',
    deliveryInfo: 'بيانات التوصيل',
    fullName: 'الاسم الكامل',
    namePlaceholder: 'مثال: أحمد العلي',
    phone: 'رقم الهاتف',
    phonePlaceholder: '05XXXXXXXX',
    address: 'العنوان',
    addressPlaceholder: 'الحي، الشارع، رقم المبنى...',
    notes: 'ملاحظات إضافية',
    notesPlaceholder: 'أي تعليمات خاصة بالطلب...',
    optional: 'اختياري',
    subtotal: 'المجموع الفرعي',
    deliveryFee: 'رسوم التوصيل',
    total: 'الإجمالي',
    sendViaWhatsApp: 'إرسال الطلب عبر واتساب',
    onlinePayment: 'الدفع الإلكتروني (قريبًا)',
    paymentDisabledTitle: 'بوابة الدفع غير مفعّلة بعد',
    fillRequired: 'يرجى تعبئة الاسم ورقم الهاتف والعنوان.',
    orderReady: 'تم تجهيز طلبك! سيتم تحويلك إلى واتساب لإتمام الإرسال.',
  },
  reservation: {
    name: 'الاسم',
    namePlaceholder: 'اسمك الكامل',
    phone: 'رقم الهاتف',
    phonePlaceholder: '05XXXXXXXX',
    date: 'التاريخ',
    time: 'الوقت',
    guests: 'عدد الأشخاص',
    notes: 'ملاحظات',
    notesPlaceholder: 'طلبات خاصة، مناسبة معينة...',
    optional: 'اختياري',
    submit: 'إرسال الحجز',
    fillRequired: 'يرجى تعبئة جميع الحقول المطلوبة.',
    successToast: 'تم استلام طلب حجزك بنجاح!',
    confirmedTitle: 'تم تأكيد طلب الحجز!',
    confirmedDesc: ({ name, date, time, guests }) =>
      `شكرًا لك ${name}. تم استلام طلب حجزك ليوم ${date} الساعة ${time} لعدد ${guests} أشخاص. سنتواصل معك قريبًا لتأكيد الحجز.`,
    newReservation: 'حجز جديد',
  },
  contact: {
    address: 'العنوان',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    hours: 'أوقات العمل',
    storyEyebrow: 'قصتنا',
    storyTitle: 'شغفٌ بالطعام منذ التأسيس',
    storyP1:
      'انطلق مطعم رويال تيست من حلم بتقديم تجربة طعام استثنائية تجمع بين أصالة النكهات الشرقية وإبداع المطبخ الغربي. نختار أجود المكونات الطازجة يوميًا، ويعمل لدينا نخبة من أمهر الطهاة لإعداد أطباق تسرّ العين قبل الحنك.',
    storyP2:
      'نؤمن بأن الجودة لا تقبل المساومة، ولهذا حرصنا على أن يكون كل طبق نقدّمه تحفة من النكهات في أجواء راقية تليق بذوقك الرفيع.',
    followUs: 'تابعنا على',
    mapTitle: 'موقعنا على الخريطة',
    interiorAlt: 'أجواء مطعم رويال تيست',
  },
  footer: {
    about:
      'وجهتك الأولى للمشاوي والبيتزا والبرغر والأطباق الشرقية والغربية الفاخرة. نقدّم لك تجربة طعام لا تُنسى بأجود المكونات.',
    quickLinks: 'روابط سريعة',
    contactUs: 'تواصل معنا',
    workingHours: 'أوقات العمل',
    rights: (year) => `© ${year} مطعم رويال تيست. جميع الحقوق محفوظة.`,
  },
}

const tr: Dictionary = {
  brand: {
    name: 'Royal Taste Restoran',
    short: 'Royal Taste',
    tagline: 'Modern dokunuşlu özgün lezzetler',
  },
  nav: {
    home: 'Ana Sayfa',
    menu: 'Menü',
    order: 'Online Sipariş',
    reservation: 'Masa Rezervasyonu',
    contact: 'Restoran Bilgileri',
    admin: 'Yönetim Paneli',
    cart: 'Sepet',
    orderNow: 'Hemen Sipariş Ver',
    menuTitle: 'Menü',
    language: 'Dil',
  },
  hero: {
    badge: '4,9 yıldız puanlı seçkin restoran',
    titleLead: 'Seçkin damağınıza',
    titleHighlight: 'yakışan kraliyet lezzeti',
    description:
      'Royal Taste Restoran’da en lezzetli ızgaraları, pizzaları, burgerleri ve doğu-batı yemeklerini, en taze birinci sınıf malzemelerle usta şeflerimizin elinden unutulmaz bir lezzet deneyimi için sunuyoruz.',
    orderNow: 'Hemen Sipariş Ver',
    reserve: 'Masa Rezervasyonu',
  },
  features: {
    fastDelivery: {
      title: 'Hızlı Teslimat',
      desc: 'Siparişinizi mümkün olan en kısa sürede sıcak şekilde kapınıza getiriyoruz.',
    },
    freshIngredients: {
      title: 'Taze Malzemeler',
      desc: 'En iyi tadı garantilemek için her gün en taze malzemeleri seçiyoruz.',
    },
    bestPrices: {
      title: 'En İyi Fiyatlar',
      desc: 'Herkese uygun rekabetçi fiyatlarla seçkin kalite.',
    },
    topRated: {
      title: 'Yüksek Puanlı',
      desc: 'Binlerce mutlu müşteri bize güveniyor ve bizi her zaman tavsiye ediyor.',
    },
  },
  popular: {
    eyebrow: 'Spesiyallerimiz',
    title: 'En Popüler Yemeklerimiz',
    subtitle:
      'Müşterilerimizin sevdiği, büyük bir özenle hazırlanan en çok sipariş edilen yemekleri keşfedin.',
    browseFullMenu: 'Tüm menüyü incele',
  },
  testimonials: {
    eyebrow: 'Müşteri Yorumları',
    title: 'Misafirlerimiz ne diyor?',
  },
  cta: {
    title: 'Unutulmaz bir lezzet deneyimine hazır mısınız?',
    description:
      'Favori yemeğinizi şimdi sipariş edin ve hızlı teslimatın keyfini çıkarın ya da şık bir atmosferde özel bir akşam için masanızı ayırtın.',
    orderNow: 'Hemen Sipariş Ver',
    reserve: 'Masa Rezervasyonu',
  },
  menuCard: {
    popular: 'En Popüler',
    unavailable: 'Şu anda mevcut değil',
    add: 'Ekle',
    currency: '€',
    addedToast: (name) => `"${name}" sepete eklendi`,
  },
  menuBrowser: {
    searchPlaceholder: 'Favori yemeğinizi arayın...',
    noResultsTitle: 'Sonuç yok',
    noResultsDesc:
      'Aramanızla eşleşen yemek bulamadık. Başka bir kelime veya farklı bir kategori deneyin.',
  },
  pages: {
    menu: {
      title: 'Menü',
      subtitle:
        'En taze malzemelerle hazırlanan geniş seçkin yemek yelpazemizi keşfedin.',
    },
    order: {
      title: 'Online Sipariş',
      subtitle:
        'Sepetinizi gözden geçirin, bilgilerinizi girin ve siparişinizi WhatsApp üzerinden kolayca gönderin.',
    },
    reservation: {
      title: 'Masa Rezervasyonu',
      subtitle:
        'Yerinizi garantilemek ve şık atmosferimizde unutulmaz bir akşam geçirmek için masanızı önceden ayırtın.',
    },
    contact: {
      title: 'Restoran Bilgileri',
      subtitle:
        'Size hizmet etmek için buradayız. Seçkin bir deneyim için bize ulaşın veya bizi ziyaret edin.',
    },
  },
  order: {
    emptyTitle: 'Sepetiniz boş',
    emptyDesc:
      'Henüz hiç yemek eklemediniz. Menüye göz atın ve en lezzetli yemekleri seçin.',
    browseMenu: 'Menüye göz at',
    cartTitle: (count) => `Sipariş Sepeti (${count})`,
    clearCart: 'Sepeti boşalt',
    increase: 'Artır',
    decrease: 'Azalt',
    remove: 'Kaldır',
    deliveryInfo: 'Teslimat Bilgileri',
    fullName: 'Ad Soyad',
    namePlaceholder: 'örn.: Ahmet Yılmaz',
    phone: 'Telefon Numarası',
    phonePlaceholder: '05XXXXXXXXX',
    address: 'Adres',
    addressPlaceholder: 'Mahalle, sokak, bina numarası...',
    notes: 'Ek Notlar',
    notesPlaceholder: 'Siparişle ilgili özel talimatlar...',
    optional: 'İsteğe bağlı',
    subtotal: 'Ara Toplam',
    deliveryFee: 'Teslimat Ücreti',
    total: 'Toplam',
    sendViaWhatsApp: 'Siparişi WhatsApp ile gönder',
    onlinePayment: 'Online Ödeme (yakında)',
    paymentDisabledTitle: 'Ödeme ağ geçidi henüz etkin değil',
    fillRequired: 'Lütfen ad, telefon numarası ve adresi doldurun.',
    orderReady:
      'Siparişiniz hazır! Göndermeyi tamamlamak için WhatsApp’a yönlendirileceksiniz.',
  },
  reservation: {
    name: 'Ad',
    namePlaceholder: 'Tam adınız',
    phone: 'Telefon Numarası',
    phonePlaceholder: '05XXXXXXXXX',
    date: 'Tarih',
    time: 'Saat',
    guests: 'Kişi Sayısı',
    notes: 'Notlar',
    notesPlaceholder: 'Özel istekler, belirli bir etkinlik...',
    optional: 'İsteğe bağlı',
    submit: 'Rezervasyonu Gönder',
    fillRequired: 'Lütfen tüm zorunlu alanları doldurun.',
    successToast: 'Rezervasyon talebiniz başarıyla alındı!',
    confirmedTitle: 'Rezervasyon talebi onaylandı!',
    confirmedDesc: ({ name, date, time, guests }) =>
      `Teşekkürler, ${name}. ${date} tarihinde saat ${time} için ${guests} kişilik rezervasyon talebiniz alındı. Onaylamak için kısa süre içinde sizinle iletişime geçeceğiz.`,
    newReservation: 'Yeni rezervasyon',
  },
  contact: {
    address: 'Adres',
    phone: 'Telefon',
    email: 'E-posta',
    hours: 'Çalışma Saatleri',
    storyEyebrow: 'Hikayemiz',
    storyTitle: 'İlk günden beri yemeğe duyulan tutku',
    storyP1:
      'Royal Taste Restoran, doğu lezzetlerinin özgünlüğünü batı mutfağının yaratıcılığıyla birleştiren olağanüstü bir yemek deneyimi sunma hayaliyle yola çıktı. Her gün en taze malzemeleri seçiyor, usta şeflerden oluşan ekibimiz damaktan önce gözü şenlendiren yemekler hazırlıyor.',
    storyP2:
      'Kalitenin pazarlık konusu olamayacağına inanıyoruz; bu yüzden sunduğumuz her yemeğin, seçkin zevkinize yakışan şık bir atmosferde bir lezzet şaheseri olmasını sağlıyoruz.',
    followUs: 'Bizi takip edin',
    mapTitle: 'Haritada konumumuz',
    interiorAlt: 'Royal Taste Restoran atmosferi',
  },
  footer: {
    about:
      'Seçkin ızgaralar, pizza, burger ve doğu-batı yemekleri için ilk adresiniz. Size en iyi malzemelerle unutulmaz bir yemek deneyimi sunuyoruz.',
    quickLinks: 'Hızlı Bağlantılar',
    contactUs: 'Bize Ulaşın',
    workingHours: 'Çalışma Saatleri',
    rights: (year) =>
      `© ${year} Royal Taste Restoran. Tüm hakları saklıdır.`,
  },
}

export const dictionaries: Record<Locale, Dictionary> = { de, en, ar, tr }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? de
}

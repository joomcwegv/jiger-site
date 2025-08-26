// =================================================================================
// DATA & TRANSLATIONS
// =================================================================================

let currentLang = 'kk';
const translations = {
    kk: {
        pageTitle: "JIGER Спорт Кешені",
        metaDescription: "Денсаулық пен шеберлік жолындағы сенімді серігіңіз. Футзал, волейбол, фитнес залдары.",
        navHome: '<i class="fas fa-home me-1"></i> Басты бет',
        navServices: '<i class="fas fa-list me-1"></i> Қызметтер',
        navGallery: '<i class="fas fa-images me-1"></i> Фотогалерея',
        navQuiz: '<i class="fas fa-question-circle me-1"></i> Тест',
        navContact: '<i class="fas fa-envelope me-1"></i> Байланыс',
        themeTogglerTitle: "Түн/Күн режимі",
        signIn: "Кіру",
        signOut: "Шығу",
        signOutTitle: (name) => `Шығу (${name})`,
        signInWithGoogle: '<i class="fab fa-google me-1"></i> Google-мен кіру',
        signInWithPhone: '<i class="fas fa-phone me-1"></i> Телефонмен кіру',
        phoneAuthTitle: "Телефон арқылы кіру",
        phoneNumberLabel: "Телефон нөмірі (+7...)",
        sendCodeBtn: "Код жіберу",
        verificationCodeLabel: "Растау коды",
        verifyCodeBtn: "Растау",
        welcome: "Қош келдіңіз,",
        headerTitle: "«JIGER» Спорт Кешені",
        headerSubtitle: "Денсаулық пен шеберлік жолындағы сенімді серігіңіз",
        serviceFutsalTitle: '<i class="fas fa-futbol me-2"></i>⚽ Футзал',
        serviceFutsalDesc: 'Заманауи жабыны бар <a href="https://www.youtube.com/shorts/LZ53PDmbemM" title="Футзал алаңын брондау">футзал алаңы</a>. Командалық рух пен жылдамдық үшін мінсіз орын.',
        serviceFutsal1: '<i class="fas fa-check-circle text-success me-2"></i>Кәсіби стандарттар',
        serviceFutsal2: '<i class="fas fa-check-circle text-success me-2"></i>Жарыс деңгейіндегі алаң',
        serviceFutsal3: '<i class="fas fa-check-circle text-success me-2"></i>Жақсы жарықтандыру',
        serviceVoleyballTitle: '<i class="fas fa-volleyball-ball me-2"></i>🏐 Волейбол',
        serviceVoleyballDesc: 'Кәсіби стандарттарға сай <a href="https://www.instagram.com/p/DNpRKA6Iy8D/" title="Волейбол залын брондау">волейбол залы</a>. Жарыстар мен жаттығуларға қолайлы.',
        serviceVoleyball1: '<i class="fas fa-check-circle text-success me-2"></i>Халықаралық стандарттар',
        serviceVoleyball2: '<i class="fas fa-check-circle text-success me-2"></i>Еркін брондау мүмкіндігі',
        serviceVoleyball3: '<i class="fas fa-check-circle text-success me-2"></i>Тренерлер қызметі',
        serviceFitnessTitle: '<i class="fas fa-dumbbell me-2"></i>🏋️‍♀️ Фитнес',
        serviceFitnessDesc: 'Кең әрі заманауи жабдықталған <a href="https://www.instagram.com/p/DAn9DjqIl1W/" title="Фитнес залына жазылу">фитнес залы</a>. Жеке және топтық жаттығулар үшін.',
        serviceFitness1: '<i class="fas fa-check-circle text-success me-2"></i>Жеке тренерлер',
        serviceFitness2: '<i class="fas fa-check-circle text-success me-2"></i>Жоғары сапалы жабдықтар',
        serviceFitness3: '<i class="fas fa-check-circle text-success me-2"></i>Жеке бағдарламалар',
        quizTitle: '<i class="fas fa-brain me-2"></i>🧠 Спорттық тест',
        quizNextBtn: '<i class="fas fa-forward me-1"></i>Келесі сұрақ',
        feedbackTitle: '<i class="fas fa-envelope me-2"></i>📩 Кері байланыс формасы',
        feedbackName: "Атыңыз",
        feedbackEmail: "Электронды пошта",
        feedbackMessage: "Хабарлама",
        feedbackSubmitBtn: '<i class="fas fa-paper-plane me-1"></i>Жіберу',
        galleryTitle: '<i class="fas fa-images me-2"></i>Фотогалерея',
        guestbookTitle: '<i class="fas fa-book me-2"></i>📖 Қонақ кітабы',
        guestbookName: "Атыңыз",
        guestbookMessage: "Пікіріңіз",
        guestbookSubmitBtn: '<i class="fas fa-comment me-1"></i>Пікір қалдыру',
        guestbookCommentsTitle: '<i class="fas fa-comments me-2"></i>🗣 Жаңа пікірлер:',
        footerContactUs: "Бізбен байланысыңыз",
        footerAddress: '<i class="fas fa-map-marker-alt me-2"></i>Қазақстан, Құлсары қаласы',
        footerPhone: '<i class="fas fa-phone me-2"></i>+7 (778) 057 45 52',
        footerEmail: '<a href="mailto:jigersport@mail.ru"><i class="fas fa-envelope me-2"></i>jigersport@mail.ru</a>',
        footerCopyright: '&copy; 2025 «JIGER» Спорт Кешені. Барлық құқықтар қорғалған.',
        weatherUnavailable: "Ауа райы қолжетімсіз",
        weatherLoadingError: "Ауа райын жүктеу қатесі:",
        formSending: '<div class="spinner-border spinner-border-sm me-2" role="status"></div>Жіберілуде...',
        formSuccess: '<div class="alert alert-success"><i class="fas fa-check-circle me-2"></i>Хабарлама сәтті жіберілді! Жауабыңызға 24 сағат ішінде жауап береміз.</div>',
        formError: '<div class="alert alert-danger">Қате пайда болды. Қайталап көріңіз.</div>',
        quizResultCorrect: '<i class="fas fa-check-circle text-success me-2"></i>Дұрыс жауап!',
        quizResultIncorrect: (correct) => `<i class="fas fa-times-circle text-danger me-2"></i>Қате! Дұрыс жауап: ${correct}`,
        quizFinished: "Тест аяқталды!",
        quizResultPerfect: (score, total) => `<span class="text-success"><i class="fas fa-trophy me-2"></i>Керемет! Сіз барлық сұраққа дұрыс жауап бердіңіз: ${score}/${total}</span>`,
        quizResultGood: (score, total) => `<span class="text-primary"><i class="fas fa-thumbs-up me-2"></i>Жақсы! Нәтижеңіз: ${score}/${total}</span>`,
        quizResultBad: (score, total) => `<span class="text-warning"><i class="fas fa-lightbulb me-2"></i>Спорт туралы көбірек біліп, қайта келіңіз! Нәтижеңіз: ${score}/${total}</span>`,
        quizRestartBtn: '<i class="fas fa-redo me-1"></i>Тестті қайта бастау',
        quizTimerTitle: "Сұраққа жауап беру уақыты",
        invalidPhoneNumber: "Телефон нөмірінің форматы қате. Оны +7... үлгісінде енгізіңіз.",
        weather: { "clear sky": "ашық", "few clouds": "аздап бұлтты", "scattered clouds": "бұлтты", "broken clouds": "бұлтты", "overcast clouds": "бұлтты", "shower rain": "нөсерлі жаңбыр", "rain": "жаңбыр", "light rain": "жеңіл жаңбыр", "moderate rain": "қалыпты жаңбыр", "heavy intensity rain": "қатты жаңбыр", "thunderstorm": "найзағай", "snow": "қар", "mist": "тұман" },
        quiz: [
            { question: "🏃 Алғашқы заманауи Олимпиада ойындары қай жылы өткізілді?", options: ["1900", "1896", "1912", "1924"], answer: "1896" },
            { question: "⚽ Қай футболшы ең көп 'Алтын доп' иегері атанды?", options: ["Криштиану Роналду", "Диего Марадона", "Лионель Месси", "Зинедин Зидан"], answer: "Лионель Месси" },
            { question: "🥋 Таэквондо спорт түрі қай елде пайда болды?", options: ["Қытай", "Жапония", "Оңтүстік Корея", "Тайланд"], answer: "Оңтүстік Корея" },
            { question: "⚡ 100 метрге жүгіруден әлем рекорды қай спортшыға тиесілі?", options: ["Карл Льюис", "Усэйн Болт", "Тайсон Гэй", "Майкл Джонсон"], answer: "Усэйн Болт" },
            { question: "🇰🇿 Қазақстанда Қысқы Азия ойындары қай жылы өтті?", options: ["2003", "2007", "2011", "2015"], answer: "2011" },
            { question: "🏀 Баскетболда бір командада алаңда неше ойыншы болады?", options: ["5", "6", "7", "11"], answer: "5" },
            { question: "🥊 Кәсіпқой бокста ауыр салмақтағы чемпиондық атақты ең ұзақ ұстаған кім?", options: ["Мұхаммед Әли", "Майк Тайсон", "Джо Луис", "Владимир Кличко"], answer: "Джо Луис" },
            { question: "🏒 Хоккейдегі 'хет-трик' дегеніміз не?", options: ["Бір ойында 3 гол соғу", "Қақпашының гол соғуы", "5 минуттық айып", "Ойынды жеңу"], answer: "Бір ойында 3 гол соғу" },
            { question: "🏊‍♂️ Майкл Фелпс Олимпиада ойындарында қанша алтын медаль жеңіп алды?", options: ["23", "28", "18", "25"], answer: "23" },
            { question: "🎾 'Үлкен дулыға' турнирлеріне қайсысы кірмейді?", options: ["Уимблдон", "Ролан Гаррос", "Дэвис Кубогы", "АҚШ Ашық чемпионаты"], answer: "Дэвис Кубогы" },
            { question: "🚴 'Тур де Франс' веложарысы қай елде өтеді?", options: ["Италия", "Испания", "Франция", "Бельгия"], answer: "Франция" },
            { question: "🤸‍♀️ Спорттық гимнастикада қандай снаряд жоқ?", options: ["Брусья", "Турник", "Батут", "Кольца"], answer: "Батут" },
            { question: "🏹 Садақ ату спорты қай Олимпиада ойындарында дебют жасады?", options: ["1900, Париж", "1920, Антверпен", "1972, Мюнхен", "1908, Лондон"], answer: "1900, Париж" },
            { question: "🏈 Америкалық футболда бір команданың мақсаты не?", options: ["Допты торға соғу", "Тачдаун жасау", "Шайбаны қақпаға кіргізу", "Мәреге бірінші жету"], answer: "Тачдаун жасау" },
            { question: "🏇 Ат жарысының ең танымал түрі қалай аталады?", options: ["Конкур", "Выездка", "Дерби", "Троеборье"], answer: "Дерби" },
            { question: "🎱 Бильярдтың қай түрінде тек 9 шар қолданылады?", options: ["Снукер", "Пул-8", "Карамболь", "Пул-9"], answer: "Пул-9" },
            { question: "🥋 Дзюдо күресінде ең жоғары баға қалай аталады?", options: ["Ваза-ари", "Юко", "Иппон", "Кока"], answer: "Иппон" },
            { question: "⚾ Бейсбол ойынындағы негізгі құралдар қандай?", options: ["Ракетка және доп", "Клюшка және шайба", "Бита және доп", "Сойыл және доп"], answer: "Бита және доп" },
            { question: "🌊 Су полосында бір командада неше ойыншы болады?", options: ["5", "6", "7", "8"], answer: "7" },
            { question: "♟️ Шахматта 'пат' жағдайы нені білдіреді?", options: ["Ойыншының жеңісі", "Ойыншының жеңілісі", "Тең ойын", "Ойынның жалғасуы"], answer: "Тең ойын" }
        ]
    },
    ru: {
        pageTitle: "Спортивный Комплекс JIGER",
        metaDescription: "Ваш надежный партнер на пути к здоровью и мастерству. Залы для футзала, волейбола и фитнеса.",
        navHome: '<i class="fas fa-home me-1"></i> Главная',
        navServices: '<i class="fas fa-list me-1"></i> Услуги',
        navGallery: '<i class="fas fa-images me-1"></i> Фотогалерея',
        navQuiz: '<i class="fas fa-question-circle me-1"></i> Тест',
        navContact: '<i class="fas fa-envelope me-1"></i> Контакты',
        themeTogglerTitle: "Ночной/Дневной режим",
        signIn: "Войти",
        signOut: "Выйти",
        signOutTitle: (name) => `Выйти (${name})`,
        signInWithGoogle: '<i class="fab fa-google me-1"></i> Войти через Google',
        signInWithPhone: '<i class="fas fa-phone me-1"></i> Войти по телефону',
        phoneAuthTitle: "Вход по номеру телефона",
        phoneNumberLabel: "Номер телефона (+7...)",
        sendCodeBtn: "Отправить код",
        verificationCodeLabel: "Код подтверждения",
        verifyCodeBtn: "Подтвердить",
        welcome: "Добро пожаловать,",
        headerTitle: "Спортивный Комплекс «JIGER»",
        headerSubtitle: "Ваш надежный партнер на пути к здоровью и мастерству",
        serviceFutsalTitle: '<i class="fas fa-futbol me-2"></i>⚽ Футзал',
        serviceFutsalDesc: 'Современное <a href="https://www.youtube.com/shorts/LZ53PDmbemM" title="Забронировать поле для футзала">поле для футзала</a>. Идеальное место для командного духа и скорости.',
        serviceFutsal1: '<i class="fas fa-check-circle text-success me-2"></i>Профессиональные стандарты',
        serviceFutsal2: '<i class="fas fa-check-circle text-success me-2"></i>Поле уровня соревнований',
        serviceFutsal3: '<i class="fas fa-check-circle text-success me-2"></i>Хорошее освещение',
        serviceVoleyballTitle: '<i class="fas fa-volleyball-ball me-2"></i>🏐 Волейбол',
        serviceVoleyballDesc: 'Профессиональный <a href="https://www.instagram.com/p/DNpRKA6Iy8D/" title="Забронировать волейбольный зал">волейбольный зал</a>. Подходит для соревнований и тренировок.',
        serviceVoleyball1: '<i class="fas fa-check-circle text-success me-2"></i>Международные стандарты',
        serviceVoleyball2: '<i class="fas fa-check-circle text-success me-2"></i>Удобное бронирование',
        serviceVoleyball3: '<i class="fas fa-check-circle text-success me-2"></i>Услуги тренеров',
        serviceFitnessTitle: '<i class="fas fa-dumbbell me-2"></i>🏋️‍♀️ Фитнес',
        serviceFitnessDesc: 'Просторный и современно оборудованный <a href="https://www.instagram.com/p/DAn9DjqIl1W/" title="Записаться в фитнес-зал">фитнес-зал</a>. Для индивидуальных и групповых тренировок.',
        serviceFitness1: '<i class="fas fa-check-circle text-success me-2"></i>Персональные тренеры',
        serviceFitness2: '<i class="fas fa-check-circle text-success me-2"></i>Качественное оборудование',
        serviceFitness3: '<i class="fas fa-check-circle text-success me-2"></i>Индивидуальные программы',
        quizTitle: '<i class="fas fa-brain me-2"></i>🧠 Спортивный тест',
        quizNextBtn: '<i class="fas fa-forward me-1"></i>Следующий вопрос',
        feedbackTitle: '<i class="fas fa-envelope me-2"></i>📩 Форма обратной связи',
        feedbackName: "Ваше имя",
        feedbackEmail: "Электронная почта",
        feedbackMessage: "Сообщение",
        feedbackSubmitBtn: '<i class="fas fa-paper-plane me-1"></i>Отправить',
        galleryTitle: '<i class="fas fa-images me-2"></i>Фотогалерея',
        guestbookTitle: '<i class="fas fa-book me-2"></i>📖 Гостевая книга',
        guestbookName: "Ваше имя",
        guestbookMessage: "Ваш комментарий",
        guestbookSubmitBtn: '<i class="fas fa-comment me-1"></i>Оставить комментарий',
        guestbookCommentsTitle: '<i class="fas fa-comments me-2"></i>🗣 Свежие комментарии:',
        footerContactUs: "Свяжитесь с нами",
        footerAddress: '<i class="fas fa-map-marker-alt me-2"></i>Казахстан, город Кульсары',
        footerPhone: '<i class="fas fa-phone me-2"></i>+7 (778) 057 45 52',
        footerEmail: '<a href="mailto:jigersport@mail.ru"><i class="fas fa-envelope me-2"></i>jigersport@mail.ru</a>',
        footerCopyright: '&copy; 2025 Спортивный Комплекс «JIGER». Все права защищены.',
        weatherUnavailable: "Погода недоступна",
        weatherLoadingError: "Ошибка загрузки погоды:",
        formSending: '<div class="spinner-border spinner-border-sm me-2" role="status"></div>Отправка...',
        formSuccess: '<div class="alert alert-success"><i class="fas fa-check-circle me-2"></i>Сообщение успешно отправлено! Мы ответим в течение 24 часов.</div>',
        formError: '<div class="alert alert-danger">Произошла ошибка. Пожалуйста, попробуйте еще раз.</div>',
        quizResultCorrect: '<i class="fas fa-check-circle text-success me-2"></i>Правильный ответ!',
        quizResultIncorrect: (correct) => `<i class="fas fa-times-circle text-danger me-2"></i>Ошибка! Правильный ответ: ${correct}`,
        quizFinished: "Тест завершен!",
        quizResultPerfect: (score, total) => `<span class="text-success"><i class="fas fa-trophy me-2"></i>Отлично! Вы ответили на все вопросы правильно: ${score}/${total}</span>`,
        quizResultGood: (score, total) => `<span class="text-primary"><i class="fas fa-thumbs-up me-2"></i>Хорошо! Ваш результат: ${score}/${total}</span>`,
        quizResultBad: (score, total) => `<span class="text-warning"><i class="fas fa-lightbulb me-2"></i>Узнайте больше о спорте и возвращайтесь! Ваш результат: ${score}/${total}</span>`,
        quizRestartBtn: '<i class="fas fa-redo me-1"></i>Начать тест заново',
        quizTimerTitle: "Время на ответ",
        invalidPhoneNumber: "Неверный формат номера телефона. Введите в формате +7...",
        weather: { "clear sky": "ясно", "few clouds": "малооблачно", "scattered clouds": "переменная облачность", "broken clouds": "облачно с прояснениями", "overcast clouds": "пасмурно", "shower rain": "ливень", "rain": "дождь", "light rain": "небольшой дождь", "moderate rain": "умеренный дождь", "heavy intensity rain": "сильный дождь", "thunderstorm": "гроза", "snow": "снег", "mist": "туман" },
        quiz: [
            { question: "🏃 В каком году были проведены первые современные Олимпийские игры?", options: ["1900", "1896", "1912", "1924"], answer: "1896" },
            { question: "⚽ Какой футболист выиграл больше всего 'Золотых мячей'?", options: ["Криштиану Роналду", "Диего Марадона", "Лионель Месси", "Зинедин Зидан"], answer: "Лионель Месси" },
            { question: "🥋 В какой стране зародился тхэквондо?", options: ["Китай", "Япония", "Южная Корея", "Таиланд"], answer: "Южная Корея" },
            { question: "⚡ Какой спортсмен является мировым рекордсменом в беге на 100 метров?", options: ["Карл Льюис", "Усэйн Болт", "Тайсон Гэй", "Майкл Джонсон"], answer: "Усэйн Болт" },
            { question: "🇰🇿 В каком году в Казахстане прошли зимние Азиатские игры?", options: ["2003", "2007", "2011", "2015"], answer: "2011" },
            { question: "🏀 Сколько игроков в одной команде на площадке в баскетболе?", options: ["5", "6", "7", "11"], answer: "5" },
            { question: "🥊 Кто дольше всех удерживал титул чемпиона в тяжелом весе в профессиональном боксе?", options: ["Мухаммед Али", "Майк Тайсон", "Джо Луис", "Владимир Кличко"], answer: "Джо Луис" },
            { question: "🏒 Что такое 'хет-трик' в хоккее?", options: ["Забить 3 гола в одной игре", "Гол вратаря", "5-минутный штраф", "Победа в игре"], answer: "Забить 3 гола в одной игре" },
            { question: "🏊‍♂️ Сколько золотых медалей выиграл Майкл Фелпс на Олимпийских играх?", options: ["23", "28", "18", "25"], answer: "23" },
            { question: "🎾 Какой из этих турниров не входит в 'Большой шлем'?", options: ["Уимблдон", "Ролан Гаррос", "Кубок Дэвиса", "Открытый чемпионат США"], answer: "Кубок Дэвиса" },
            { question: "🚴 В какой стране проходит велогонка 'Тур де Франс'?", options: ["Италия", "Испания", "Франция", "Бельгия"], answer: "Франция" },
            { question: "🤸‍♀️ Какого снаряда нет в спортивной гимнастике?", options: ["Брусья", "Турник", "Батут", "Кольца"], answer: "Батут" },
            { question: "🏹 На каких Олимпийских играх дебютировала стрельба из лука?", options: ["1900, Париж", "1920, Антверпен", "1972, Мюнхен", "1908, Лондон"], answer: "1900, Париж" },
            { question: "🏈 Какова цель команды в американском футболе?", options: ["Забить мяч в сетку", "Сделать тачдаун", "Забросить шайбу в ворота", "Прийти к финишу первым"], answer: "Сделать тачдаун" },
            { question: "🏇 Как называется самый популярный вид конных скачек?", options: ["Конкур", "Выездка", "Дерби", "Троеборье"], answer: "Дерби" },
            { question: "🎱 В каком виде бильярда используется только 9 шаров?", options: ["Снукер", "Пул-8", "Карамболь", "Пул-9"], answer: "Пул-9" },
            { question: "🥋 Как называется высшая оценка в дзюдо?", options: ["Ваза-ари", "Юко", "Иппон", "Кока"], answer: "Иппон" },
            { question: "⚾ Каковы основные инструменты в бейсболе?", options: ["Ракетка и мяч", "Клюшка и шайба", "Бита и мяч", "Дубинка и мяч"], answer: "Бита и мяч" },
            { question: "🌊 Сколько игроков в одной команде в водном поло?", options: ["5", "6", "7", "8"], answer: "7" },
            { question: "♟️ Что означает ситуация 'пат' в шахматах?", options: ["Победа игрока", "Поражение игрока", "Ничья", "Продолжение игры"], answer: "Ничья" }
        ]
    }
    ,
    en: {
        pageTitle: "JIGER Sports Complex",
        metaDescription: "Your reliable partner on the path to health and skill. Halls for futsal, volleyball, and fitness.",
        navHome: '<i class="fas fa-home me-1"></i> Home',
        navServices: '<i class="fas fa-list me-1"></i> Services',
        navGallery: '<i class="fas fa-images me-1"></i> Gallery',
        navQuiz: '<i class="fas fa-question-circle me-1"></i> Quiz',
        navContact: '<i class="fas fa-envelope me-1"></i> Contact',
        themeTogglerTitle: "Dark/Light Mode",
        signIn: "Sign In",
        signOut: "Sign Out",
        signOutTitle: (name) => `Sign Out (${name})`,
        signInWithGoogle: '<i class="fab fa-google me-1"></i> Sign in with Google',
        signInWithPhone: '<i class="fas fa-phone me-1"></i> Sign in with Phone',
        phoneAuthTitle: "Sign in with Phone",
        phoneNumberLabel: "Phone Number (+1...)",
        sendCodeBtn: "Send Code",
        verificationCodeLabel: "Verification Code",
        verifyCodeBtn: "Verify",
        welcome: "Welcome,",
        headerTitle: "«JIGER» Sports Complex",
        headerSubtitle: "Your reliable partner on the path to health and skill",
        serviceFutsalTitle: '<i class="fas fa-futbol me-2"></i>⚽ Futsal',
        serviceFutsalDesc: 'A modern <a href="https://www.youtube.com/shorts/LZ53PDmbemM" title="Book a futsal court">futsal court</a>. The perfect place for team spirit and speed.',
        serviceFutsal1: '<i class="fas fa-check-circle text-success me-2"></i>Professional standards',
        serviceFutsal2: '<i class="fas fa-check-circle text-success me-2"></i>Competition-level court',
        serviceFutsal3: '<i class="fas fa-check-circle text-success me-2"></i>Good lighting',
        serviceVoleyballTitle: '<i class="fas fa-volleyball-ball me-2"></i>🏐 Volleyball',
        serviceVoleyballDesc: 'A professional <a href="https://www.instagram.com/p/DNpRKA6Iy8D/" title="Book a volleyball court">volleyball court</a>. Suitable for competitions and training.',
        serviceVoleyball1: '<i class="fas fa-check-circle text-success me-2"></i>International standards',
        serviceVoleyball2: '<i class="fas fa-check-circle text-success me-2"></i>Easy booking',
        serviceVoleyball3: '<i class="fas fa-check-circle text-success me-2"></i>Coaching services',
        serviceFitnessTitle: '<i class="fas fa-dumbbell me-2"></i>🏋️‍♀️ Fitness',
        serviceFitnessDesc: 'A spacious and modernly equipped <a href="https://www.instagram.com/p/DAn9DjqIl1W/" title="Sign up for the fitness hall">fitness hall</a>. For individual and group workouts.',
        serviceFitness1: '<i class="fas fa-check-circle text-success me-2"></i>Personal trainers',
        serviceFitness2: '<i class="fas fa-check-circle text-success me-2"></i>High-quality equipment',
        serviceFitness3: '<i class="fas fa-check-circle text-success me-2"></i>Individual programs',
        quizTitle: '<i class="fas fa-brain me-2"></i>🧠 Sports Quiz',
        quizNextBtn: '<i class="fas fa-forward me-1"></i>Next Question',
        feedbackTitle: '<i class="fas fa-envelope me-2"></i>📩 Feedback Form',
        feedbackName: "Your Name",
        feedbackEmail: "Email",
        feedbackMessage: "Message",
        feedbackSubmitBtn: '<i class="fas fa-paper-plane me-1"></i>Send',
        galleryTitle: '<i class="fas fa-images me-2"></i>Photo Gallery',
        guestbookTitle: '<i class="fas fa-book me-2"></i>📖 Guestbook',
        guestbookName: "Your Name",
        guestbookMessage: "Your Comment",
        guestbookSubmitBtn: '<i class="fas fa-comment me-1"></i>Leave a Comment',
        guestbookCommentsTitle: '<i class="fas fa-comments me-2"></i>🗣 Recent Comments:',
        footerContactUs: "Contact Us",
        footerAddress: '<i class="fas fa-map-marker-alt me-2"></i>Kazakhstan, Kulsary city',
        footerPhone: '<i class="fas fa-phone me-2"></i>+7 (778) 057 45 52',
        footerEmail: '<a href="mailto:jigersport@mail.ru"><i class="fas fa-envelope me-2"></i>jigersport@mail.ru</a>',
        footerCopyright: '&copy; 2025 «JIGER» Sports Complex. All rights reserved.',
        weatherUnavailable: "Weather unavailable",
        weatherLoadingError: "Error loading weather:",
        formSending: '<div class="spinner-border spinner-border-sm me-2" role="status"></div>Sending...',
        formSuccess: '<div class="alert alert-success"><i class="fas fa-check-circle me-2"></i>Message sent successfully! We will reply within 24 hours.</div>',
        formError: '<div class="alert alert-danger">An error occurred. Please try again.</div>',
        quizResultCorrect: '<i class="fas fa-check-circle text-success me-2"></i>Correct answer!',
        quizResultIncorrect: (correct) => `<i class="fas fa-times-circle text-danger me-2"></i>Wrong! The correct answer is: ${correct}`,
        quizFinished: "Quiz finished!",
        quizResultPerfect: (score, total) => `<span class="text-success"><i class="fas fa-trophy me-2"></i>Excellent! You answered all questions correctly: ${score}/${total}</span>`,
        quizResultGood: (score, total) => `<span class="text-primary"><i class="fas fa-thumbs-up me-2"></i>Good! Your result: ${score}/${total}</span>`,
        quizResultBad: (score, total) => `<span class="text-warning"><i class="fas fa-lightbulb me-2"></i>Learn more about sports and come back! Your result: ${score}/${total}</span>`,
        quizRestartBtn: '<i class="fas fa-redo me-1"></i>Restart Quiz',
        quizTimerTitle: "Time to answer",
        invalidPhoneNumber: "Invalid phone number format. Please enter in +... format.",
        weather: { "clear sky": "clear sky", "few clouds": "few clouds", "scattered clouds": "scattered clouds", "broken clouds": "broken clouds", "overcast clouds": "overcast clouds", "shower rain": "shower rain", "rain": "rain", "light rain": "light rain", "moderate rain": "moderate rain", "heavy intensity rain": "heavy intensity rain", "thunderstorm": "thunderstorm", "snow": "snow", "mist": "mist" },
        quiz: [
            { question: "🏃 In what year were the first modern Olympic Games held?", options: ["1900", "1896", "1912", "1924"], answer: "1896" },
            { question: "⚽ Which footballer has won the most Ballon d'Or awards?", options: ["Cristiano Ronaldo", "Diego Maradona", "Lionel Messi", "Zinedine Zidane"], answer: "Lionel Messi" },
            { question: "🥋 In which country did Taekwondo originate?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "South Korea" },
            { question: "⚡ Which athlete holds the world record for the 100-meter dash?", options: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Michael Johnson"], answer: "Usain Bolt" },
            { question: "🇰🇿 In what year were the Winter Asian Games held in Kazakhstan?", options: ["2003", "2007", "2011", "2015"], answer: "2011" },
            { question: "🏀 How many players are on the court for one team in basketball?", options: ["5", "6", "7", "11"], answer: "5" },
            { question: "🥊 Who held the professional heavyweight boxing champion title the longest?", options: ["Muhammad Ali", "Mike Tyson", "Joe Louis", "Wladimir Klitschko"], answer: "Joe Louis" },
            { question: "🏒 What is a 'hat-trick' in hockey?", options: ["Scoring 3 goals in one game", "A goalie's goal", "A 5-minute penalty", "Winning the game"], answer: "Scoring 3 goals in one game" },
            { question: "🏊‍♂️ How many gold medals did Michael Phelps win at the Olympic Games?", options: ["23", "28", "18", "25"], answer: "23" },
            { question: "🎾 Which of these is not a 'Grand Slam' tournament?", options: ["Wimbledon", "Roland Garros", "Davis Cup", "US Open"], answer: "Davis Cup" },
            { question: "🚴 In which country does the 'Tour de France' cycling race take place?", options: ["Italy", "Spain", "France", "Belgium"], answer: "France" },
            { question: "🤸‍♀️ Which apparatus is not used in artistic gymnastics?", options: ["Parallel bars", "Horizontal bar", "Trampoline", "Rings"], answer: "Trampoline" },
            { question: "🏹 At which Olympic Games did archery make its debut?", options: ["1900, Paris", "1920, Antwerp", "1972, Munich", "1908, London"], answer: "1900, Paris" },
            { question: "🏈 What is the objective of a team in American football?", options: ["To hit the ball into the net", "To score a touchdown", "To get the puck into the goal", "To reach the finish line first"], answer: "To score a touchdown" },
            { question: "🏇 What is the most popular type of horse racing called?", options: ["Show jumping", "Dressage", "Derby", "Eventing"], answer: "Derby" },
            { question: "🎱 Which type of billiards uses only 9 balls?", options: ["Snooker", "Eight-ball", "Carom", "Nine-ball"], answer: "Nine-ball" },
            { question: "🥋 What is the highest score in Judo called?", options: ["Waza-ari", "Yuko", "Ippon", "Koka"], answer: "Ippon" },
            { question: "⚾ What are the main tools in a game of baseball?", options: ["A racket and a ball", "A stick and a puck", "A bat and a ball", "A club and a ball"], answer: "A bat and a ball" },
            { question: "🌊 How many players are on a water polo team?", options: ["5", "6", "7", "8"], answer: "7" },
            { question: "♟️ What does a 'stalemate' situation mean in chess?", options: ["A player's win", "A player's loss", "A draw", "Continuation of the game"], answer: "A draw" }
        ]
    }
};

// =================================================================================
// APPLICATION LOGIC
// =================================================================================

// -- Firebase Configuration --
// МАҢЫЗДЫ: Бұл конфигурацияны Firebase консолінен алған өз деректеріңізбен толтырыңыз.
const firebaseConfig = {
  apiKey: "AIzaSyAjdgUfRQmRJSXiCWqf8I6tnz_mzWhFNcw", // Firebase-тен алған кілтіңіз
  authDomain: "jiger-site.firebaseapp.com",
  projectId: "jiger-site",
  storageBucket: "jiger-site.firebasestorage.app",
  messagingSenderId: "1076454515040",
  appId: "1:1076454515040:web:5177b81af0ca1e3dc33e05"
};

// -- Initialize Firebase and Firestore --
let db, auth;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
} catch (e) {
    console.error("Firebase initialization error:", e);
}

const apiKey = "a1ec03a2e6f789a2df13796ff0ee07fc";
const city = "Kulsary";
async function fetchWeather() {
    const weatherIcons = {
        "Clear": "fa-sun",
        "Clouds": "fa-cloud",
        "Rain": "fa-cloud-showers-heavy",
        "Drizzle": "fa-cloud-rain",
        "Thunderstorm": "fa-bolt-lightning",
        "Snow": "fa-snowflake",
        "Mist": "fa-smog",
        "Smoke": "fa-smog",
        "Haze": "fa-smog",
        "Fog": "fa-smog"
    };
    const weatherColors = { "Clear": "#FFD700", "Clouds": "#B0C4DE", "Rain": "#4682B4", "Snow": "#FFFFFF", "Thunderstorm": "#9400D3" };

    const lang = currentLang === 'kk' ? 'kz' : currentLang;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;
    const weatherElement = document.getElementById("weather");
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const condition = data.weather[0].main;
        const iconClass = weatherIcons[condition] || 'fa-cloud-sun';
        const color = weatherColors[condition] || 'var(--primary-text-color)';
        const weatherDescription = data.weather[0].description;
        const translatedDescription = translations[currentLang].weather[weatherDescription.toLowerCase()] || weatherDescription;
        weatherElement.innerHTML = `<i class="fas ${iconClass} me-1" style="color: ${color}; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);"></i> ${Math.round(data.main.temp)}°C, ${translatedDescription}`;
    } catch (error) {
        console.error("Weather fetch error:", error);
        weatherElement.textContent = translations[currentLang].weatherUnavailable;
    }
}

let currentQuestion = 0;
let score = 0;
let questionTimer;
const TIME_LIMIT = 20;

function loadQuestion() {
    const quizData = translations[currentLang].quiz;
    if (currentQuestion >= quizData.length) {
        showResult();
        return;
    }

    document.getElementById('nextQuestionBtn').disabled = true;

    const q = quizData[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'btn btn-outline-primary flex-grow-1';
        button.onclick = () => selectAnswer(button, q.answer);
        answersDiv.appendChild(button);
    });

    // Timer logic
    clearInterval(questionTimer);
    let timeLeft = TIME_LIMIT;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;
    timerElement.style.color = 'var(--primary-text-color)';

    questionTimer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 5 && timeLeft > 0) {
            timerElement.style.color = 'var(--bs-warning)';
        } else if (timeLeft <= 0) {
            clearInterval(questionTimer);
            timerElement.style.color = 'var(--bs-danger)';
            highlightAnswers(q.answer);
            document.getElementById('nextQuestionBtn').disabled = false;
        }
    }, 1000);

    updateProgress();
}

function highlightAnswers(correctAnswer, selectedButton = null) {
    const answersDiv = document.getElementById('answers');
    Array.from(answersDiv.children).forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.remove('btn-outline-primary', 'btn-danger');
            btn.classList.add('btn-success');
        } else if (btn === selectedButton) {
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-danger');
        }
    });
}

function selectAnswer(button, correctAnswer) {
    clearInterval(questionTimer);
    document.getElementById('nextQuestionBtn').disabled = false;

    const isCorrect = button.textContent === correctAnswer;
    if (isCorrect) {
        score++;
    }
    highlightAnswers(correctAnswer, button);
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    clearInterval(questionTimer);
    const timerContainer = document.getElementById('timer-container');
    if (timerContainer) timerContainer.style.display = 'none';

    const resultP = document.getElementById('result');
    const total = translations[currentLang].quiz.length;
    let message;
    if (score === total) {
        message = translations[currentLang].quizResultPerfect(score, total);
    } else if (score >= total / 2) {
        message = translations[currentLang].quizResultGood(score, total);
    } else {
        message = translations[currentLang].quizResultBad(score, total);
    }
    resultP.innerHTML = message;
    document.getElementById('nextQuestionBtn').innerHTML = translations[currentLang].quizRestartBtn;
    document.getElementById('nextQuestionBtn').onclick = restartQuiz;
}

function restartQuiz() {
    clearInterval(questionTimer);
    currentQuestion = 0;
    score = 0;

    const timerContainer = document.getElementById('timer-container');
    if (timerContainer) timerContainer.style.display = 'flex';

    document.getElementById('result').innerHTML = '';
    document.getElementById('nextQuestionBtn').innerHTML = translations[currentLang].quizNextBtn;
    document.getElementById('nextQuestionBtn').onclick = nextQuestion;
    loadQuestion();
}

function updateProgress() {
    const total = translations[currentLang].quiz.length;
    document.getElementById('progress').textContent = `${currentQuestion + 1} / ${total}`;
}

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!db) return alert("Database is not configured.");

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const status = document.getElementById("formStatus");

    status.innerHTML = translations[currentLang].formSending;

    db.collection("feedbackSubmissions").add({
        name: name, email: email, message: message, submittedAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        status.innerHTML = translations[currentLang].formSuccess;
        form.reset();
    }).catch(err => {
        console.error("Error submitting feedback: ", err);
        status.innerHTML = translations[currentLang].formError;
    });
});

document.getElementById("guestbookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!db) return alert("Database is not configured.");
    
    const user = auth.currentUser;
    const nameInput = document.getElementById('username');
    const name = nameInput.value.trim();
    const msg = document.getElementById('guestbookMessage').value.trim();

    if (name && msg) {
        db.collection("comments").add({
            name: name, // Use the name from the input field
            msg: msg,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user ? user.uid : null // Optionally store user ID
        }).then(() => {
            e.target.reset();
        }).catch(err => console.error("Error adding comment: ", err));
    }
});

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('jigerLang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-translate-content]').forEach(el => {
        const key = el.getAttribute('data-translate-content');
        if (translations[lang][key]) {
            el.setAttribute('content', translations[lang][key]);
        }
    });
     document.querySelectorAll('[data-translate-title]').forEach(el => {
        const key = el.getAttribute('data-translate-title');
        if (translations[lang][key]) {
            el.setAttribute('title', translations[lang][key]);
        }
    });

    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    if (auth) handleAuthStateChanged(auth.currentUser);
    fetchWeather();
    loadQuestion();
}

function listenForComments() {
    if (!db) return;

    db.collection("comments").orderBy("createdAt", "desc").limit(25)
      .onSnapshot((querySnapshot) => {
        const container = document.getElementById('comments');
        if (!container) return;
        container.innerHTML = ''; // Алдыңғы пікірлерді тазалау

        querySnapshot.forEach((doc) => {
            const c = doc.data();
            const date = c.createdAt ? c.createdAt.toDate().toLocaleString(currentLang) : new Date().toLocaleString(currentLang);

            const commentDiv = document.createElement('div');
            commentDiv.className = 'border p-3 mb-3 rounded-3';

            const headerDiv = document.createElement('div');
            headerDiv.className = 'd-flex justify-content-between mb-2';

            const nameStrong = document.createElement('strong');
            nameStrong.textContent = c.name;
            const dateSmall = document.createElement('small');
            dateSmall.className = 'text-muted';
            dateSmall.textContent = date;
            headerDiv.append(nameStrong, dateSmall);
            const msgP = document.createElement('p');
            msgP.className = 'mb-1';
            msgP.textContent = c.msg;
            commentDiv.append(headerDiv, msgP);
            container.appendChild(commentDiv);
        });
      }, (error) => {
          console.error("Error listening for comments:", error);
      });
}

function handleAuthStateChanged(user) {
    const authContainer = document.getElementById('auth-container');
    const usernameInput = document.getElementById('username');

    if (user) {
        // User is signed in
        const avatar = user.photoURL ? `<img src="${user.photoURL}" alt="avatar" class="rounded-circle me-2 navbar-avatar">` : '';
        const welcomeName = user.displayName ? user.displayName.split(' ')[0] : user.phoneNumber;
        authContainer.innerHTML = `
            ${avatar}
            <button id="signOutBtn" class="btn btn-sm btn-outline-danger" title="${translations[currentLang].signOutTitle(welcomeName)}"><i class="fas fa-sign-out-alt me-lg-1"></i><span class="d-none d-lg-inline">${translations[currentLang].signOut}</span></button>
        `;
        document.getElementById('signOutBtn').addEventListener('click', () => auth.signOut());

        if (usernameInput) {
            if (user.displayName) {
                usernameInput.value = user.displayName;
                usernameInput.readOnly = true;
            } else {
                usernameInput.value = ''; // Allow phone users to enter their name
                usernameInput.readOnly = false;
            }
        }

    } else {
        // User is signed out
        authContainer.innerHTML = `
            <div class="btn-group" role="group">
                <button id="googleSignInBtn" class="btn btn-sm btn-outline-danger" title="${translations[currentLang].signInWithGoogle.replace(/<[^>]*>?/gm, '')}">
                    ${translations[currentLang].signInWithGoogle}
                </button>
                <button id="phoneSignInBtn" class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#phoneAuthModal">
                    ${translations[currentLang].signInWithPhone}
                </button>
            </div>
        `;
        const googleBtn = document.getElementById('googleSignInBtn');
        const phoneBtn = document.getElementById('phoneSignInBtn');

        googleBtn.addEventListener('click', () => {
            googleBtn.classList.add('active'); // Highlight button on click
            if (phoneBtn) phoneBtn.classList.remove('active'); // Ensure other button is not active
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider).catch(error => {
                console.error("Sign-in error", error);
            }).finally(() => {
                googleBtn.classList.remove('active'); // Remove highlight after popup closes
            });
        });

        if (usernameInput) {
            if (usernameInput.readOnly) {
                usernameInput.value = ''; // Clear the name if they log out
            }
            usernameInput.readOnly = false;
        }
    }
}

// =================================================================================
// INITIALIZATION
// =================================================================================

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);

    document.querySelectorAll('.language-switcher button').forEach(button => {
        button.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });

    const themeToggler = document.getElementById('theme-toggler');
    const currentTheme = localStorage.getItem('jigerTheme') || 'dark';
    document.body.classList.add(currentTheme + '-theme');
    themeToggler.querySelector('i').className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggler.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        let theme = 'dark';
        if (document.body.classList.contains('light-theme')) {
            theme = 'light';
        }
        localStorage.setItem('jigerTheme', theme);
        themeToggler.querySelector('i').className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });

    const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', () => {
            document.getElementById('modalImage').src = img.src;
            galleryModal.show();
        });
    });

    // Phone Auth Modal Logic (Setup once)
    const phoneAuthModalEl = document.getElementById('phoneAuthModal');
    if (phoneAuthModalEl && typeof bootstrap !== 'undefined' && typeof firebase !== 'undefined') {
        const phoneAuthModal = new bootstrap.Modal(phoneAuthModalEl);
        const sendCodeBtn = document.getElementById('send-code-btn');
        const verifyCodeBtn = document.getElementById('verify-code-btn');
        const phoneInputView = document.getElementById('phone-input-view');
        const codeInputView = document.getElementById('code-input-view');
        const phoneNumberInput = document.getElementById('phone-number');
        const verificationCodeInput = document.getElementById('verification-code');
        const errorElement = document.getElementById('phone-auth-error');

        // Add event listeners for modal show/hide to toggle active state on buttons
        phoneAuthModalEl.addEventListener('show.bs.modal', () => {
            const phoneBtn = document.getElementById('phoneSignInBtn');
            const googleBtn = document.getElementById('googleSignInBtn');
            if (phoneBtn) phoneBtn.classList.add('active');
            if (googleBtn) googleBtn.classList.remove('active'); // Ensure other button is not active
        });

        // Reset modal state when it's hidden
        phoneAuthModalEl.addEventListener('hidden.bs.modal', () => {
            const phoneBtn = document.getElementById('phoneSignInBtn');
            if (phoneBtn) phoneBtn.classList.remove('active');
            phoneInputView.classList.remove('d-none');
            codeInputView.classList.add('d-none');
            phoneNumberInput.value = '';
            verificationCodeInput.value = '';
            errorElement.textContent = '';
        });

        if (auth) {
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible'
            });

            sendCodeBtn.onclick = () => {
                const phoneNumberRaw = phoneNumberInput.value.trim();
                const appVerifier = window.recaptchaVerifier;

                // Convert number to E.164 format for Firebase
                let phoneNumber = phoneNumberRaw.replace(/\D/g, ''); // Get only digits

                // If number starts with 8 (common local format for KZ), replace with 7
                if (phoneNumber.startsWith('8') && phoneNumber.length === 11) {
                    phoneNumber = '7' + phoneNumber.substring(1);
                }
                const formattedPhoneNumber = '+' + phoneNumber;

                auth.signInWithPhoneNumber(formattedPhoneNumber, appVerifier)
                    .then((confirmationResult) => {
                        window.confirmationResult = confirmationResult;
                        phoneInputView.classList.add('d-none');
                        codeInputView.classList.remove('d-none');
                        errorElement.textContent = '';
                    }).catch((error) => {
                        console.error("SMS not sent", error);
                        // Provide a more user-friendly error for invalid format
                        errorElement.textContent = (error.code === 'auth/invalid-phone-number')
                            ? (translations[currentLang].invalidPhoneNumber || 'Invalid phone number format.')
                            : error.message;
                        recaptchaVerifier.render().then(widgetId => {
                            if (widgetId !== undefined) {
                                recaptchaVerifier.reset(widgetId);
                            }
                        });
                    });
            };

            verifyCodeBtn.onclick = () => {
                const code = verificationCodeInput.value;
                if (window.confirmationResult) {
                    window.confirmationResult.confirm(code).then((result) => {
                        phoneAuthModal.hide();
                    }).catch((error) => {
                        console.error("Code verification failed", error);
                        errorElement.textContent = error.message;
                    });
                }
            };
        }
    }

    const savedLang = localStorage.getItem('jigerLang') || 'kk';
    setLanguage(savedLang);
    if (auth) auth.onAuthStateChanged(handleAuthStateChanged);
    listenForComments();
});

// ScrollReveal Animations
ScrollReveal().reveal('.site-header, .card, h3', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    interval: 150,
    reset: false,
    scale: 0.9
});
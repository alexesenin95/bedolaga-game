/* ============================================================
   ЛОКАЛИЗАЦИЯ (Яндекс.Игры). Плоская карта RU→EN.
   L(s) в index.html ищет перевод по русскому оригиналу; если ключа нет —
   показывается русский текст (graceful fallback). Поэтому файл можно
   дополнять по частям, ничего при этом не ломая.
   Команды-банки (викторина, «Поговорить», бонусные вопросы) добавляются
   отдельным дополнением EN_BANKS ниже.
============================================================ */
window.I18N = { en: {

/* ---- Верхняя панель / основные кнопки ---- */
"📖 Журнал":"📖 Journal",
"Стажёр":"Intern",
"Доверие":"Trust",
"Команда и процессы":"Team & operations",
"👗 Образы Даниэлы":"👗 Daniela's looks",
"Работать":"Work",
"До задания начальницы":"Until the boss's task",
"💬 Поговорить":"💬 Talk",
"💬 чуть позже":"💬 a bit later",
"👑 ПРЕМИУМ ×2":"👑 PREMIUM ×2",
"Квалификация":"Skill",
"+1 ₽ к клику за уровень":"+1 ₽ per click per level",

/* ---- Меню ---- */
"🔊 Громкость":"🔊 Volume",
"🔄 Начать заново":"🔄 Restart",
"🌐 Язык: EN":"🌐 Language: EN",
"🌐 Language: RU":"🌐 Язык: RU",

/* ---- Викторина: подсказки ---- */
"Отчёт":"Report",
"Коллеги":"Colleagues",
"Ментор":"Mentor",

/* ---- Болталка ---- */
"💬 Разговор с Даниэлой Васильевной":"💬 A talk with Daniela",

/* ---- Офлайн-доход ---- */
"Даниэла скучала 💌":"Daniela missed you 💌",
"📺 Удвоить за рекламу":"📺 Double it for an ad",
"Забрать":"Collect",

/* ---- Финал / свидание / повышение / разорение ---- */
"Партнёр 🥂":"Partner 🥂",
"Продолжить":"Continue",
"Свидание 💞":"A date 💞",
"💞 Прекрасный вечер":"💞 A lovely evening",
"Новый офис 🏢":"New office 🏢",
"Дальше ▶":"Next ▶",
"Бизнес разорился 💔":"The business went bust 💔",
"Игра":"Game",

/* ---- Имя начальницы (в облачках) ---- */
"Даниэла Васильевна":"Daniela",

/* ---- Генераторы ---- */
"Кофемашина":"Coffee machine",
"Стажёр-помощник":"Junior assistant",
"Менеджер по продажам":"Sales manager",
"Маркетолог":"Marketer",
"Отдел разработки":"Dev department",
"Филиал компании":"Company branch",

/* ---- Звания (STAGES.title) ---- */
"Младший менеджер":"Junior manager",
"Старший менеджер":"Senior manager",
"Руководитель отдела":"Head of department",
"Руководитель направления":"Division lead",
"Заместитель директора":"Deputy director",
"Операционный директор":"Operations director",
"Исполнительный директор":"Executive director",
"Вице-президент":"Vice president",

/* ---- Уровни близости (CHAT_TITLES) ---- */
"Знакомство":"Getting acquainted",
"Рабочий настрой":"Work mood",
"Чуть теплее":"A bit warmer",
"Симпатия":"Sympathy",
"Дружеский флирт":"Friendly flirt",
"Доверие ":"Trust ",
"Явный интерес":"Clear interest",
"Тёплые чувства":"Warm feelings",
"Почти признание":"Almost a confession",
"Близкие":"Close",

/* ---- Простойные реплики (IDLE) ---- */
"Графики ползут вверх — мне это нравится.":"The charts are creeping up — I like that.",
"Работай-работай. Я слежу за твоими успехами.":"Work, work. I'm watching your progress.",
"Хорошие цифры сегодня. И компания, кстати, приятная.":"Good numbers today. And the company's pleasant too.",
"Не отвлекайся. Хотя на тебя отвлекаться приятно.":"Don't get distracted. Though you're a pleasant distraction.",
"Капитал растёт. Продолжай в том же духе.":"Capital's growing. Keep it up.",
"С тобой офис стал оживлённее.":"The office got livelier with you around.",
"Люблю, когда показатели в плюсе. И когда ты рядом — тоже.":"I love it when the metrics are up. And when you're near, too.",
"Ещё немного — и обгоним конкурентов.":"A little more and we'll overtake the competition.",
"Мне нравится, как ты держишь темп.":"I like the pace you're keeping.",
"Тишина в офисе — деньги в кассе. Молодец.":"A quiet office means money in the till. Well done.",
"Иногда я смотрю на тебя дольше, чем на отчёты.":"Sometimes I look at you longer than at the reports.",
"Кофе будешь? Шучу. Работай.":"Want some coffee? Just kidding. Get to work.",
"Минутка дзена. Даже в бизнесе важен баланс.":"A moment of zen. Even in business, balance matters.",
"Дышу. Цифры подождут полминуты.":"Breathing. The numbers can wait half a minute.",
"Иногда нужно просто выдохнуть. И снова в бой.":"Sometimes you just need to exhale. Then back into the fray.",
"И где результаты? Я подожду… недолго.":"So where are the results? I'll wait… not for long.",
"Хм. Что-то темп упал. Или мне кажется?":"Hmm. The pace dropped. Or is it just me?",
"Ну и? Касса сама себя не наполнит.":"Well? The till won't fill itself.",
"Ого, так бодро? Не ожидала.":"Oh, so energetic? I didn't expect that.",
"Ничего себе обороты. Ты меня удивляешь.":"Quite the momentum. You surprise me.",

/* ---- Благодарности за подарок (GIFT_THANKS) ---- */
"Цветы? Мне? Ты определённо знаешь, как тронуть моё сердце 💐":"Flowers? For me? You definitely know how to touch my heart 💐",
"Подарок от тебя — особенно приятно. Спасибо, дорогой.":"A gift from you is especially nice. Thank you, dear.",
"Ох… ты меня балуешь. Мне это, признаюсь, нравится.":"Oh… you're spoiling me. I'll admit, I like it.",
"И как тут устоять перед тобой? Спасибо ❤️":"How am I supposed to resist you? Thank you ❤️",
"Ты умеешь удивлять. За это я тебя и… ценю.":"You know how to surprise me. That's what I… value in you.",
"Какая прелесть! Кажется, ты знаешь путь к моему сердцу.":"How lovely! Seems you know the way to my heart.",
"Внимание дороже денег. А от тебя — вдвойне приятно.":"Attention is worth more than money. And from you — twice as nice.",
"Будешь так продолжать — я совсем потеряю голову 😉":"Keep this up and I'll completely lose my head 😉",

/* ---- Поздравления при переезде в новый офис (CONGRATS) ---- */
"Поздравляю! Мы переезжаем в новый офис — твои труды не прошли даром. Здесь нам с тобой будет уютнее 🎉":"Congratulations! We're moving to a new office — your work paid off. It'll be cozier here for us 🎉",
"Чувствуешь? Новые стены, новый уровень. Это всё ты, дорогой. Я горжусь 🎉":"Feel it? New walls, a new level. It's all you, dear. I'm proud 🎉",
"Вот это да — компания выросла, и мы вместе с ней. Добро пожаловать в наш новый дом 🥂":"Wow — the company has grown, and so have we. Welcome to our new home 🥂",
"Новый офис, новые горизонты. С тобой расти — одно удовольствие ✨":"New office, new horizons. Growing with you is a pure pleasure ✨",
"Смотри, как преобразилось всё вокруг. Твоя заслуга. Я в тебе не ошиблась 🎉":"Look how everything's transformed. That's your doing. I wasn't wrong about you 🎉",
"Мы поднялись ещё на ступеньку. Здесь и работается, и… дышится легче, когда ты рядом ✨":"We've climbed another step. It's easier to work and… to breathe here, with you near ✨",
"Переезжаем! И знаешь, я уже привыкла, что рядом — именно ты 🥂":"We're moving! And you know, I've grown used to it being you beside me 🥂",
"Эти стены мы заслужили. Точнее — заслужил ты. Идём дальше, вместе 🎉":"We earned these walls. Or rather — you did. Onward, together 🎉",

/* ---- Реплики при возвращении (RETURN_LINES) ---- */
"Наконец-то ты вернулся! Без тебя и офис будто опустел, и цифры росли как-то нехотя. Касса принесла:":"Finally, you're back! Without you the office felt empty and the numbers grew reluctantly. The till brought in:",
"Я по тебе скучала, честно. Бизнес без тебя — как кофе без сахара. Хорошо, что ты снова здесь. Вот что мы заработали:":"I missed you, honestly. Business without you is like coffee without sugar. Good that you're back. Here's what we earned:",
"Ты не представляешь, как я ждала. Без твоей хватки всё держалось на честном слове. С тобой компания снова дышит. За время отсутствия накопилось:":"You can't imagine how I waited. Without your grip everything ran on sheer luck. With you the company breathes again. While you were away it added up to:",
"Слава богу, ты пришёл! Я уж думала, придётся самой разгребать все сделки. С тобой мне куда спокойнее. Пока тебя не было, касса дала:":"Thank goodness you're here! I thought I'd have to handle all the deals myself. I'm much calmer with you. While you were gone the till gave:",
"Без тебя дни тянулись бесконечно. Теперь, когда ты рядом, я точно знаю — мы свернём горы. А пока — вот наша прибыль:":"Without you the days dragged on forever. Now that you're near, I know we'll move mountains. For now — here's our profit:",
"Ты вернулся — и у меня сразу настроение поднялось. С таким партнёром бизнес обречён на успех. Накопилось за это время:":"You're back — and my mood lifted at once. With a partner like you, business is bound to succeed. It piled up meanwhile:",
"Я скучала по нашим разговорам… и по твоим результатам тоже. Без тебя всё было каким-то серым. Касса между тем принесла:":"I missed our talks… and your results too. Without you everything was a bit grey. The till, meanwhile, brought in:",
"Как хорошо, что ты снова тут! Я уже начала разговаривать с отчётами от тоски. С тобой всё иначе. За отсутствие набежало:":"So good you're here again! I'd started talking to the reports out of boredom. With you it's different. While away it racked up:",
"Признаюсь: без тебя бизнес буксовал, а я нервничала. Теперь, когда ты здесь, всё встанет на свои места. Заработано:":"I'll admit: without you the business stalled and I was anxious. Now that you're here, it'll all fall into place. Earned:",
"Вернулся! А я как раз думала о тебе. С тобой компания расцветёт, я это чувствую. Пока тебя не было, мы получили:":"You're back! And I was just thinking of you. With you the company will flourish, I feel it. While you were away we got:",
"Ты даже не знаешь, как мне тебя не хватало — и по работе, и… просто. Идём покорять рынок вместе. А вот и наш доход:":"You don't even know how much I missed you — at work and… just because. Let's go conquer the market together. And here's our income:",
"Наконец! Без тебя я держала оборону одна. Теперь нас двое — и нам всё по плечу. За время твоего отсутствия касса дала:":"At last! I held the line alone without you. Now there are two of us — and we can handle anything. While you were away the till gave:",

/* ---- Мини-игры: победа / поражение / вызовы / названия ---- */
"А ты азартный! Обыграл меня — признаю поражение. Победителю — приз 😉":"You're a gambler! You beat me — I admit defeat. A prize for the winner 😉",
"Ого, какой напор! С тобой и играть, и работать — одно удовольствие. Держи награду.":"Wow, what drive! Playing and working with you is a pure joy. Here's your reward.",
"Сдаюсь, ты сильнее. Люблю мужчин, которые умеют побеждать.":"I surrender, you're stronger. I like men who know how to win.",
"Проиграла — и почему-то совсем не расстроена. Молодец, заслужил.":"I lost — and somehow I'm not upset at all. Well done, you earned it.",
"Вот это класс! Ты полон сюрпризов. Это тебе за победу.":"That's class! You're full of surprises. This is for the win.",
"Ха, на этот раз победа за мной! Но ты держался достойно, мне понравилось.":"Ha, the win's mine this time! But you held up well, I liked it.",
"Не дуйся, проигрывать мне — это почти честь 😉 Реванш?":"Don't sulk, losing to me is almost an honor 😉 Rematch?",
"Я выиграла! Но, между нами, болела я за тебя.":"I won! But between us, I was rooting for you.",
"Сегодня мой день. Завтра, может, повезёт и тебе, дорогой.":"Today's my day. Tomorrow maybe you'll get lucky too, dear.",
"Победила, но без удовольствия — слишком уж приятный соперник.":"I won, but without joy — far too pleasant an opponent.",
"настольный теннис 🏓":"table tennis 🏓",
"шашки 🔵":"checkers 🔵",
"морской бой 🚢":"battleship 🚢",
"Вызов от Даниэлы 💢":"A challenge from Daniela 💢",
"Принять вызов!":"Accept the challenge!",
"Так, отчёты подождут! Вызываю тебя на {g}. Немного тимбилдинга — чтобы работать слаженнее… и чтобы я могла к тебе присмотреться поближе. Принимаешь вызов?":"Right, the reports can wait! I challenge you to {g}. A bit of team-building — to work better together… and so I can take a closer look at you. Do you accept?",
"Засиделись мы. Давай-ка {g} — в неформальной обстановке люди ведь сближаются, верно? А мне это для эффективной работы важно. Готов?":"We've been sitting too long. Let's play {g} — people grow closer in an informal setting, right? And that matters for effective work. Ready?",
"Предлагаю перерыв и поединок в {g}. Победа над начальницей дорогого стоит… попробуешь? Обещаю поддаваться не буду.":"I suggest a break and a duel in {g}. Beating the boss is worth a lot… care to try? I promise I won't go easy.",
"Мне нужна разрядка. Сразимся в {g}? Считай это корпоративным тимбилдингом — только для нас двоих.":"I need to unwind. Shall we battle in {g}? Consider it corporate team-building — just for the two of us.",
"Хватит работать! {g} — прямо сейчас. Хочу проверить, такой же ты ловкий, как уверенный. Рискнёшь?":"Enough work! {g} — right now. I want to see if you're as nimble as you are confident. Care to risk it?",

/* ---- Свидания (maybeDate) ---- */
"Свидание на крыше 💞":"A rooftop date 💞",
"Первое свидание 💞":"First date 💞",
"Вечер вдвоём на крыше пентхауса, город сияет внизу. «Бизнес — это прекрасно, но лучшее моё приобретение за все эти годы — ты», — тихо сказала Даниэла и взяла тебя за руку.":"An evening for two on the penthouse roof, the city glittering below. «Business is wonderful, but the best acquisition of all these years is you,» Daniela said softly, taking your hand.",
"Даниэла впервые позвала тебя не на совещание, а на ужин при свечах. «С тобой я будто снова дышу полной грудью», — призналась она, улыбаясь.":"For the first time Daniela invited you not to a meeting but to a candlelit dinner. «With you I feel like I can breathe fully again,» she admitted, smiling.",

/* ---- Онбординг ---- */
"Привет! Я Даниэла Васильевна, владелица этой — пока скромной — компании. Только что наняла тебя, и, честно, возлагаю на тебя большие надежды. Поможешь поднять мой бизнес?":"Hi! I'm Daniela, owner of this — for now modest — company. I just hired you and, honestly, I have high hopes for you. Will you help me grow my business?",
"Помогу вам!":"I'll help you!",
"Наша цель — вырасти из этой каморки в компанию мирового уровня. Шаг за шагом, вместе. Сейчас покажу, как тут всё устроено.":"Our goal is to grow from this closet into a world-class company. Step by step, together. Let me show you how things work here.",
"Слушаю внимательно!":"I'm all ears!",
"Вот твоя главная кнопка — «Работать». Жми по ней, чтобы зарабатывать деньги компании. Чем активнее жмёшь — тем быстрее растём!":"Here's your main button — «Work». Tap it to earn money for the company. The harder you tap, the faster we grow!",
"Понял вас!":"Got it!",
"На заработанное в разделе «Команда и процессы» нанимай сотрудников и технику — они приносят доход сами, без кликов. А «Квалификация» усиливает твой клик.":"With what you earn, hire staff and equipment in «Team & operations» — they bring income on their own, no tapping needed. And «Skill» boosts your click.",
"Спасибо, ясно!":"Thanks, clear!",
"Видишь полосу «Доверие» наверху? Заполняй её, верно отвечая на мои бизнес-вопросы — за это повышение, новая должность и переезд в офис получше.":"See the «Trust» bar at the top? Fill it by answering my business questions correctly — that earns promotions, a new title and a move to a better office.",
"Запомнил!":"Noted!",
"Но будь внимателен: три неверных ответа за игру — и бизнес разорится. Я этого не переживу… ну, почти. Так что думай головой.":"But be careful: three wrong answers in a run and the business goes bust. I won't survive it… well, almost. So use your head.",
"Буду стараться!":"I'll do my best!",
"А это кнопка «Поговорить» — тут мы просто общаемся. Учти: поначалу я колючая и холодная. Чем выше наши отношения — тем теплее и смелее я с тобой. Хочешь тепла — придётся постараться 😏":"And this is the «Talk» button — here we just chat. Fair warning: at first I'm prickly and cold. The closer we get, the warmer and bolder I am with you. Want warmth? You'll have to earn it 😏",
"Принято!":"Understood!",
"Ну всё, лекция окончена. Остальное освоишь по ходу. Я в тебя верю, слышишь? А теперь — за работу, нас ждут великие дела!":"Alright, lecture's over. You'll pick up the rest as you go. I believe in you, hear me? Now — to work, great things await us!",
"За работу! 💪":"To work! 💪",

/* ---- Мини-игры: заголовки и итоги ---- */
"🏓 Настольный теннис — до 11":"🏓 Table tennis — first to 11",
"🔵 Шашки":"🔵 Checkers",
"🚢 Морской бой":"🚢 Battleship",
"Победа! 🏆":"Victory! 🏆",
"Поражение":"Defeat",
"Готово":"Done",
"Партия твоя! 🏓":"The match is yours! 🏓",
"Партия за Даниэлой":"The match goes to Daniela",
"Победа! У Даниэлы нет ходов 🏆":"Victory! Daniela has no moves 🏆",
"Все шашки соперницы биты! 🏆":"All her checkers are taken! 🏆",
"Даниэла забрала все твои шашки":"Daniela took all your checkers",
"У тебя не осталось ходов":"You have no moves left",
"Флот Даниэлы потоплен! 🏆":"Daniela's fleet is sunk! 🏆",
"Даниэла потопила твой флот":"Daniela sank your fleet",

/* ---- Свидания-мини-игры (итоги) ---- */
"🐍 Прогулка вдвоём":"🐍 A walk together",
"🐍 Прогулка":"🐍 A walk",
"💐 Букет для Даниэлы":"💐 A bouquet for Daniela",
"💐 Букет":"💐 Bouquet",
"🧩 Вечерние сборы":"🧩 Evening packing",
"🧩 Тетрис":"🧩 Tetris",
"Спасибо за чудесное свидание":"Thank you for a wonderful date",
"Это было прекрасно… ты особенный 💗":"That was wonderful… you're special 💗",
"С тобой так легко и весело!":"It's so easy and fun with you!",

/* ---- Финал / повышение / разорение ---- */
"Ты прошёл путь от бедолаги-стажёра до равного партнёра Даниэлы Васильевны. Компания на вершине — а вы оказались отличной командой. Можно развивать бизнес без предела.":"You've gone from a hapless intern to Daniela's equal partner. The company is at the top — and the two of you turned out to be a great team. Now you can grow the business without limit.",
"Мы переехали в новый офис!":"We've moved to a new office!",
"Поздравляю с повышением!":"Congratulations on the promotion!",
"Ты уволен! 😤":"You're fired! 😤",
"Всё рухнуло… Три ошибки — и компании конец. Я плачу, не стыжусь этого: столько труда, столько надежд — и снова с нуля. Но знаешь что? Я всё равно верю в тебя. Только с тобой у меня хватит сил начать сначала и однажды вырасти в бизнес мирового уровня. Без тебя мне не справиться. Давай попробуем ещё раз — вместе?":"It all collapsed… Three mistakes and the company is done. I'm crying, and I'm not ashamed of it: so much work, so many hopes — and back to zero again. But you know what? I still believe in you. Only with you do I have the strength to start over and one day grow into a world-class business. I can't do it without you. Let's try once more — together?",
"Это не конец — нужно помочь Даниэле":"This isn't the end — Daniela needs help",
"Помогу! 💪":"I'll help! 💪",
"Всё, с меня хватит! Я столько в тебя вложила, а ты только и делал, что грубил и разочаровывал. Я зла и, честно, обижена до глубины души. Иди. Видеть тебя не хочу… по крайней мере сейчас. Но если ты правда захочешь всё исправить и вернуть моё доверие — что ж, докажи это с самого начала.":"That's it, I've had enough! I invested so much in you, and all you did was be rude and disappointing. I'm angry and, honestly, hurt to the core. Go. I don't want to see you… at least not now. But if you truly want to fix everything and win back my trust — well, prove it from the very start.",
"Придётся начать всё заново":"You'll have to start all over",
"Восстановить доверие 🙏":"Win back her trust 🙏",

/* ---- Диалоги новых офисов (OFFICE_DIALOG) ---- */
"Помнишь нашу каморку? Всё, хватит. Мы перебираемся в общий зал — светлее, живее, и стол у тебя теперь настоящий. Это только начало, и мне нравится начинать это с тобой.":"Remember our little closet? Enough of that. We're moving to the open floor — brighter, livelier, and you've got a real desk now. This is only the beginning, and I like beginning it with you.",
"Гляди — у тебя своё место у окна! Маленькая победа, но мы её заслужили. С тобой даже понедельники не такие злые.":"Look — you've got your own spot by the window! A small win, but we earned it. With you even Mondays aren't so cruel.",
"Отдельный угол на двоих — почти кабинет. Тесновато, зато рядом. Признаюсь, мне это «рядом» нравится больше, чем стоило бы.":"A corner for two — almost an office. A bit cramped, but close. I'll admit I like that «close» more than I should.",
"Свой кабинет! Дверь, табличка, тишина. Заходи в любое время — для тебя она всегда открыта.":"Your own office! A door, a nameplate, quiet. Come by any time — for you it's always open.",
"Окна до пола, вид на город. Мы проделали огромный путь — и почему-то я всё чаще смотрю не в окно, а на тебя.":"Floor-to-ceiling windows, a view of the city. We've come a long way — and somehow I keep looking not out the window, but at you.",
"Этаж руководства, стеклянный кабинет. Все видят, как высоко ты забрался. А я вижу, как ты мне дорог.":"The executive floor, a glass office. Everyone sees how high you've climbed. And I see how dear you are to me.",
"Угловой кабинет с балконом — для избранных. Давай как-нибудь встретим тут закат. Вдвоём, без отчётов.":"A corner office with a balcony — for the chosen few. Let's watch a sunset here sometime. Just us, no reports.",
"Директорский этаж. Когда-то ты варил мне кофе, а теперь рядом со мной правишь компанией. Я горжусь нами.":"The director's floor. Once you made me coffee, and now you run the company beside me. I'm proud of us.",
"Пентхаус-переговорная под небом. Отсюда виден весь наш путь. И я хочу, чтобы дальше он был только наш — общий.":"A penthouse meeting room under the sky. From here you can see our whole journey. And I want the rest of it to be only ours — shared.",

/* ---- Диалоги повышений (PROMO_DIALOG); {title} подставляется ---- */
"А теперь главное: поздравляю, ты — {title}! Больше ответственности и темпа. Справишься — я в тебя верю. И да, деловой вид тебе идёт.":"And now the main thing: congratulations, you're {title}! More responsibility and pace. You'll manage — I believe in you. And yes, the business look suits you.",
"Официально: ты — {title}! Ведёшь ключевые сделки и людей за собой. Я горжусь тобой… и не только как руководитель.":"Officially: you're {title}! You lead key deals and people. I'm proud of you… and not only as your boss.",
"Знакомься с новой должностью — {title}. На тебе целые направления. С тобой я перестала бояться рисковать.":"Meet your new title — {title}. Whole divisions are on you now. With you I've stopped being afraid to take risks.",
"Ты — {title}. Моя опора. Знаешь, рядом с тобой работать — удовольствие, а не работа.":"You're {title}. My anchor. You know, working beside you is a pleasure, not a job.",
"Поздравляю, {title}! Отдел, команда, результаты — всё на тебе. И, кажется, не только это.":"Congratulations, {title}! The department, the team, the results — all on you. And, it seems, not only that.",
"Ты теперь {title}. Целое направление компании — твоё. А моё сердце, похоже, тоже потихоньку твоё.":"You're now {title}. A whole division of the company is yours. And my heart, it seems, is slowly becoming yours too.",
"Встречай: {title}! Моя правая рука. Я скучаю, когда тебя нет рядом — и это уже не про дела.":"Behold: {title}! My right hand. I miss you when you're not around — and that's no longer about business.",
"Ты — {title}. Держишь всю операционку… и меня. Я давно хотела это сказать.":"You're {title}. You hold all the operations… and me. I've wanted to say that for a long time.",
"Поздравляю, {title}! Мы почти на вершине. Дальше — только вместе, рука об руку.":"Congratulations, {title}! We're almost at the top. From here — only together, hand in hand.",

/* ---- Доп. строки звания (партнёр) ---- */
"Партнёр":"Partner"

}};

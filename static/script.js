const translations = {
    de: {
        nav: { home: 'Startseite', info: 'Informationen', quiz: 'Quiz' },
        footer: '© 2026 Klimawandel verstehen',
        home: {
            tagline: 'UNSERE ERDE. UNSERE ZUKUNFT.',
            title: 'Klimawandel',
            title2: 'verstehen.',
            description: 'Erfahre, was Klimawandel bedeutet, warum er entsteht, welche Folgen er hat und was wir dagegen tun können.',
            learnMore: 'Mehr erfahren',
            startQuiz: 'Quiz starten →',
            topicTitle: 'Was möchtest du wissen?',
            card1: { title: 'Was ist Klimawandel?', text: 'Erfahre, was Klimawandel bedeutet und warum sich unser Klima verändert.' },
            card2: { title: 'Ursachen', text: 'Entdecke, welche menschlichen Aktivitäten den Klimawandel beeinflussen.' },
            card3: { title: 'Folgen', text: 'Erfahre, welche Auswirkungen die Erderwärmung auf unseren Planeten hat.' },
            card4: { title: 'Lösungen', text: 'Entdecke Möglichkeiten, wie wir das Klima schützen können.' },
            quizTag: 'WISSEN TESTEN',
            quizTitle: 'Wie gut kennst du den Klimawandel?',
            quizText: 'Teste dein Wissen mit unserem Quiz und finde heraus, wie viel du bereits weißt.'
        },
        info: {
            tagline: 'DAS KLIMA VERSTEHEN',
            title1: 'Was ist',
            title2: 'Klimawandel?',
            text: 'Der Klimawandel beschreibt langfristige Veränderungen des Klimas auf der Erde.',
            section1: {
                title: 'Was ist Klimawandel?',
                p1: 'Das Klima der Erde hat sich im Laufe der Geschichte immer wieder verändert. Heute beobachten wir jedoch eine besonders schnelle Erwärmung der Erde.',
                p2: 'Ein wichtiger Grund dafür ist der Mensch. Durch die Verbrennung von Kohle, Erdöl und Erdgas entstehen Treibhausgase. Diese halten Wärme in der Atmosphäre zurück und verstärken den natürlichen Treibhauseffekt.'
            },
            section2: {
                title: 'Was verursacht den Klimawandel?',
                industry: { title: 'Industrie', text: 'Viele industrielle Prozesse verursachen Treibhausgasemissionen.' },
                transport: { title: 'Verkehr', text: 'Autos, Flugzeuge und andere Verkehrsmittel können fossile Brennstoffe verbrauchen.' },
                deforestation: { title: 'Abholzung', text: 'Wälder speichern CO₂. Werden sie abgeholzt, geht diese Speicherfunktion teilweise verloren.' },
                agriculture: { title: 'Landwirtschaft', text: 'Auch die Landwirtschaft kann verschiedene Treibhausgase freisetzen.' }
            },
            section3: {
                title: 'Welche Folgen gibt es?',
                items: [
                    '🌡️ Steigende Durchschnittstemperaturen',
                    '🧊 Schmelzende Gletscher und Eisschilde',
                    '🌊 Steigender Meeresspiegel',
                    '🔥 Häufigere und intensivere Hitzewellen',
                    '🐻 Veränderungen für Tiere und Ökosysteme',
                    '🌧️ Veränderungen von Niederschlagsmustern'
                ]
            },
            section4: {
                title: 'Was können wir tun?',
                text: 'Der Klimawandel ist eine große Herausforderung. Es gibt jedoch viele Möglichkeiten, Emissionen zu reduzieren und das Klima zu schützen.',
                items: [
                    '🌱 Erneuerbare Energien nutzen',
                    '⚡ Energie sparen',
                    '🚲 Nachhaltige Verkehrsmittel verwenden',
                    '🌳 Wälder schützen',
                    '♻️ Ressourcen bewusster verwenden'
                ]
            },
            ctaTitle: 'Hast du alles gelesen?',
            ctaText: 'Dann teste jetzt dein Wissen!',
            ctaButton: 'Quiz starten →'
        },
        quiz: {
            finished: 'QUIZ BEENDET',
            result: 'Dein Ergebnis',
            expert: '🌍 Klima-Experte!',
            expertText: 'Perfekt! Du kennst dich sehr gut mit dem Klimawandel aus.',
            good: '🌳 Sehr gut!',
            goodText: 'Du hast bereits ein gutes Wissen über den Klimawandel.',
            learnMore: '🌱 Weiter lernen!',
            learnMoreText: 'Schau dir die Informationen noch einmal an und versuche das Quiz erneut.',
            repeat: 'Quiz wiederholen',
            infoButton: 'Informationen ansehen',
            introTag: 'WISSENSTEST',
            introText: 'Beantworte die folgenden Fragen.',
            questionLabel: 'Frage',
            submit: 'Ergebnis anzeigen →'
        }
    },
    en: {
        nav: { home: 'Home', info: 'Information', quiz: 'Quiz' },
        footer: '© 2026 Understanding Climate Change',
        home: {
            tagline: 'OUR EARTH. OUR FUTURE.',
            title: 'Climate',
            title2: 'change.',
            description: 'Learn what climate change means, why it happens, what consequences it has, and what we can do about it.',
            learnMore: 'Learn more',
            startQuiz: 'Start quiz →',
            topicTitle: 'What do you want to know?',
            card1: { title: 'What is climate change?', text: 'Learn what climate change means and why our climate is changing.' },
            card2: { title: 'Causes', text: 'Discover which human activities influence climate change.' },
            card3: { title: 'Impacts', text: 'Learn about the effects of global warming on our planet.' },
            card4: { title: 'Solutions', text: 'Discover ways to protect the climate.' },
            quizTag: 'TEST YOUR KNOWLEDGE',
            quizTitle: 'How well do you know climate change?',
            quizText: 'Test your knowledge with our quiz and find out how much you already know.'
        },
        info: {
            tagline: 'UNDERSTANDING THE CLIMATE',
            title1: 'What is',
            title2: 'climate change?',
            text: 'Climate change describes long-term changes in the Earth’s climate.',
            section1: {
                title: 'What is climate change?',
                p1: 'The Earth’s climate has changed many times throughout history. Today, however, we are seeing a particularly rapid warming of the planet.',
                p2: 'An important reason is humans. Burning coal, oil, and gas produces greenhouse gases. These trap heat in the atmosphere and intensify the natural greenhouse effect.'
            },
            section2: {
                title: 'What causes climate change?',
                industry: { title: 'Industry', text: 'Many industrial processes release greenhouse gases.' },
                transport: { title: 'Transport', text: 'Cars, planes, and other vehicles can burn fossil fuels.' },
                deforestation: { title: 'Deforestation', text: 'Forests store CO₂. If they are cut down, this storage function is partly lost.' },
                agriculture: { title: 'Agriculture', text: 'Agriculture can also release several greenhouse gases.' }
            },
            section3: {
                title: 'What are the consequences?',
                items: [
                    '🌡️ Rising average temperatures',
                    '🧊 Melting glaciers and ice sheets',
                    '🌊 Rising sea levels',
                    '🔥 More frequent and intense heat waves',
                    '🐻 Changes for animals and ecosystems',
                    '🌧️ Changes in rainfall patterns'
                ]
            },
            section4: {
                title: 'What can we do?',
                text: 'Climate change is a major challenge. However, there are many ways to reduce emissions and protect the climate.',
                items: [
                    '🌱 Use renewable energy',
                    '⚡ Save energy',
                    '🚲 Use sustainable transport',
                    '🌳 Protect forests',
                    '♻️ Use resources more consciously'
                ]
            },
            ctaTitle: 'Have you read everything?',
            ctaText: 'Then test your knowledge now!',
            ctaButton: 'Start quiz →'
        },
        quiz: {
            finished: 'QUIZ COMPLETED',
            result: 'Your result',
            expert: '🌍 Climate expert!',
            expertText: 'Perfect! You know a lot about climate change.',
            good: '🌳 Very good!',
            goodText: 'You already have a good understanding of climate change.',
            learnMore: '🌱 Keep learning!',
            learnMoreText: 'Look over the information again and try the quiz again.',
            repeat: 'Repeat quiz',
            infoButton: 'View information',
            introTag: 'KNOWLEDGE TEST',
            introText: 'Answer the following questions.',
            questionLabel: 'Question',
            submit: 'Show result →'
        }
    },
    ru: {
        nav: { home: 'Главная', info: 'Информация', quiz: 'Викторина' },
        footer: '© 2026 Понимание изменения климата',
        home: {
            tagline: 'НАША ЗЕМЛЯ. НАШЕ БУДУЩЕЕ.',
            title: 'Изменение',
            title2: 'климата.',
            description: 'Узнайте, что означает изменение климата, почему оно происходит, какие последствия оно имеет и что мы можем сделать.',
            learnMore: 'Узнать больше',
            startQuiz: 'Начать викторину →',
            topicTitle: 'Что вы хотите узнать?',
            card1: { title: 'Что такое изменение климата?', text: 'Узнайте, что означает изменение климата и почему меняется наш климат.' },
            card2: { title: 'Причины', text: 'Узнайте, какие человеческие действия влияют на изменение климата.' },
            card3: { title: 'Последствия', text: 'Узнайте, какие последствия глобального потепления есть для нашей планеты.' },
            card4: { title: 'Решения', text: 'Узнайте, как можно защитить климат.' },
            quizTag: 'ПРОВЕРЬТЕ ЗНАНИЯ',
            quizTitle: 'Насколько хорошо вы знаете изменение климата?',
            quizText: 'Проверьте свои знания с помощью викторины и узнайте, сколько вы уже знаете.'
        },
        info: {
            tagline: 'ПОНИМАНИЕ КЛИМАТА',
            title1: 'Что такое',
            title2: 'изменение климата?',
            text: 'Изменение климата описывает долгосрочные изменения климата Земли.',
            section1: {
                title: 'Что такое изменение климата?',
                p1: 'Климат Земли менялся много раз на протяжении всей истории. Однако сегодня мы наблюдаем особенно быстрое потепление планеты.',
                p2: 'Важной причиной является человек. Сжигание угля, нефти и газа приводит к выбросам парниковых газов. Они удерживают тепло в атмосфере и усиливают естественный парниковый эффект.'
            },
            section2: {
                title: 'Что вызывает изменение климата?',
                industry: { title: 'Промышленность', text: 'Многие промышленные процессы вызывают выбросы парниковых газов.' },
                transport: { title: 'Транспорт', text: 'Автомобили, самолёты и другие средства передвижения могут использовать ископаемое топливо.' },
                deforestation: { title: 'Вырубка лесов', text: 'Леса хранят CO₂. Если их вырубить, эта функция частично теряется.' },
                agriculture: { title: 'Сельское хозяйство', text: 'Сельское хозяйство тоже может выделять различные парниковые газы.' }
            },
            section3: {
                title: 'Какие последствия?',
                items: [
                    '🌡️ Рост средней температуры',
                    '🧊 Тающие ледники и ледяные щиты',
                    '🌊 Поднятие уровня моря',
                    '🔥 Более частые и сильные волны жары',
                    '🐻 Изменения для животных и экосистем',
                    '🌧️ Изменения в режиме осадков'
                ]
            },
            section4: {
                title: 'Что мы можем сделать?',
                text: 'Изменение климата — большая проблема. Однако существует много способов сократить выбросы и защитить климат.',
                items: [
                    '🌱 Использовать возобновляемую энергетику',
                    '⚡ Экономить энергию',
                    '🚲 Использовать экологичный транспорт',
                    '🌳 Защищать леса',
                    '♻️ Более осознанно использовать ресурсы'
                ]
            },
            ctaTitle: 'Вы всё прочитали?',
            ctaText: 'Тогда проверьте свои знания!',
            ctaButton: 'Начать викторину →'
        },
        quiz: {
            finished: 'ВИКТОРИНА ЗАВЕРШЕНА',
            result: 'Ваш результат',
            expert: '🌍 Эксперт по климату!',
            expertText: 'Отлично! Вы очень хорошо знаете изменение климата.',
            good: '🌳 Очень хорошо!',
            goodText: 'У вас уже хорошие знания об изменении климата.',
            learnMore: '🌱 Продолжайте учиться!',
            learnMoreText: 'Посмотрите информацию ещё раз и попробуйте викторину снова.',
            repeat: 'Повторить викторину',
            infoButton: 'Посмотреть информацию',
            introTag: 'ПРОВЕРОЧНАЯ ВИКТОРИНА',
            introText: 'Ответьте на следующие вопросы.',
            questionLabel: 'Вопрос',
            submit: 'Показать результат →'
        }
    }
};

function getNestedValue(object, path) {
    return path.split('.').reduce((value, key) => value?.[key], object);
}

function applyTranslations(lang) {
    const currentLanguage = translations[lang] ? lang : 'de';
    const selected = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = getNestedValue(selected, element.dataset.i18n);

        if (typeof value === 'string') {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
        button.classList.toggle('active', button.dataset.langSwitch === currentLanguage);
    });

    const langCode = currentLanguage === 'en' ? 'en' : (currentLanguage === 'ru' ? 'ru' : 'de');
    localStorage.setItem('preferredLanguage', langCode);
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('preferredLanguage');

    const language =
        urlLang === 'en' ? 'en' :
        urlLang === 'ru' ? 'ru' :
        urlLang === 'de' ? 'de' :
        savedLang === 'en' ? 'en' :
        savedLang === 'ru' ? 'ru' :
        'de';

    applyTranslations(language);

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
        button.addEventListener('click', () => {
            const nextLang = button.dataset.langSwitch === 'en' ? 'en' :
                button.dataset.langSwitch === 'ru' ? 'ru' : 'de';
            const url = new URL(window.location.href);
            url.searchParams.set('lang', nextLang);
            window.location.href = url.toString();
        });
    });
});

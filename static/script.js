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

    const langCode = currentLanguage === 'en' ? 'en' : 'de';
    localStorage.setItem('preferredLanguage', langCode);
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('preferredLanguage');
    const language = urlLang === 'en' ? 'en' : (urlLang === 'de' ? 'de' : (savedLang === 'en' ? 'en' : 'de'));

    applyTranslations(language);

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
        button.addEventListener('click', (event) => {
            const nextLang = button.dataset.langSwitch === 'en' ? 'en' : 'de';
            const url = new URL(window.location.href);
            url.searchParams.set('lang', nextLang);
            window.location.href = url.toString();
        });
    });
});

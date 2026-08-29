import flask

app = flask.Flask(__name__)


questions_de = [
    {
        "question": "Was ist eine wichtige Ursache des heutigen Klimawandels?",
        "answers": [
            "Treibhausgasemissionen",
            "Die Bewegung des Mondes",
            "Die Jahreszeiten",
            "Die Gezeiten"
        ],
        "correct": 0
    },
    {
        "question": (
            "Welches Gas trägt besonders stark zum vom Menschen "
            "verursachten Treibhauseffekt bei?"
        ),
        "answers": [
            "Sauerstoff",
            "Sauerstoff",
            "Kohlendioxid (CO₂)",
            "Helium",
            "Wasserstoff"
        ],
        "correct": 1
    },
    {
        "question": (
            "Was passiert durch die globale Erwärmung mit vielen "
            "Gletschern?"
        ),
        "answers": [
            "Sie wachsen",
            "Sie bleiben immer gleich",
            "Sie schmelzen",
            "Sie verschwinden sofort"
        ],
        "correct": 2
    },
    {
        "question": "Welche Energiequelle ist erneuerbar?",
        "answers": [
            "Kohle",
            "Erdöl",
            "Erdgas",
            "Solarenergie"
        ],
        "correct": 3
    },
    {
        "question": "Welche Folge kann der Klimawandel haben?",
        "answers": [
            "Steigende Durchschnittstemperaturen",
            "Weniger Sonnenlicht",
            "Die Erde hört auf, sich zu drehen",
            "Der Mond wird größer"
        ],
        "correct": 0
    },
    {
        "question": "Welche Maßnahme hilft, CO₂-Emissionen zu reduzieren?",
        "answers": [
            "Öffentliche Verkehrsmittel nutzen",
            "Mehr Kohle verbrennen",
            "Wälder abholzen",
            "Energieeffizienz ignorieren"
        ],
        "correct": 0
    },
    {
        "question": "Welche Folge hat der Klimawandel für die Natur?",
        "answers": [
            "Mehr Artenvielfalt",
            "Höheres Aussterberisiko für Arten",
            "Keine Veränderungen in Ökosystemen",
            "Nur kältere Winter"
        ],
        "correct": 1
    },
    {
        "question": "Welche Energiequelle ist besonders klimaschonend?",
        "answers": [
            "Windenergie",
            "Kohle",
            "Erdöl",
            "Erdgas"
        ],
        "correct": 0
    },
    {
        "question": "Warum sind Wälder für das Klima wichtig?",
        "answers": [
            "Sie binden CO₂",
            "Sie verursachen mehr Verschmutzung",
            "Sie stoppen jeden Regenfall",
            "Sie erhöhen die Temperatur dauerhaft"
        ],
        "correct": 0
    },
    {
        "question": "Wie heißt die langfristige Erwärmung der Erde?",
        "answers": [
            "Globale Erwärmung",
            "Der Mondzyklus",
            "Das Treibhausfenster",
            "Die Ozeankühlung"
        ],
        "correct": 0
    }
]


questions_en = [
    {
        "question": "What is an important cause of today's climate change?",
        "answers": [
            "Greenhouse gas emissions",
            "The movement of the Moon",
            "The seasons",
            "The tides"
        ],
        "correct": 0
    },
    {
        "question": (
            "Which gas contributes significantly to the human-caused "
            "greenhouse effect?"
        ),
        "answers": [
            "Oxygen",
            "Carbon dioxide (CO₂)",
            "Helium",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What happens to many glaciers because of global warming?",
        "answers": [
            "They grow",
            "They stay the same",
            "They melt",
            "They disappear immediately"
        ],
        "correct": 2
    },
    {
        "question": "Which energy source is renewable?",
        "answers": [
            "Coal",
            "Oil",
            "Natural gas",
            "Solar energy"
        ],
        "correct": 3
    },
    {
        "question": "What can be a consequence of climate change?",
        "answers": [
            "Rising average temperatures",
            "Less sunlight",
            "The Earth stops rotating",
            "The Moon becomes bigger"
        ],
        "correct": 0
    },
    {
        "question": "Which action helps reduce CO₂ emissions?",
        "answers": [
            "Using public transport",
            "Burning more coal",
            "Cutting down forests",
            "Ignoring energy efficiency"
        ],
        "correct": 0
    },
    {
        "question": "What is one effect of climate change on nature?",
        "answers": [
            "More biodiversity",
            "Higher extinction risk for species",
            "No change in ecosystems",
            "Only colder winters"
        ],
        "correct": 1
    },
    {
        "question": "Which energy source is especially climate-friendly?",
        "answers": [
            "Wind power",
            "Coal",
            "Oil",
            "Natural gas"
        ],
        "correct": 0
    },
    {
        "question": "Why are forests important for the climate?",
        "answers": [
            "They absorb CO₂",
            "They create more pollution",
            "They stop all rainfall",
            "They increase temperatures permanently"
        ],
        "correct": 0
    },
    {
        "question": "What is the long-term warming of Earth called?",
        "answers": [
            "Global warming",
            "The lunar cycle",
            "The greenhouse window",
            "Ocean cooling"
        ],
        "correct": 0
    }
]


questions_ru = [
    {
        "question": "Какая важная причина современного изменения климата?",
        "answers": [
            "Парниковые выбросы",
            "Движение Луны",
            "Времена года",
            "Приливы"
        ],
        "correct": 0
    },
    {
        "question": (
            "Какой газ особенно сильно влияет на антропогенный "
            "парниковый эффект?"
        ),
        "answers": [
            "Кислород",
            "Диоксид углерода (CO₂)",
            "Гелий",
            "Водород"
        ],
        "correct": 1
    },
    {
        "question": (
            "Что происходит с многими "
            "ледниками из-за глобального потепления?"
        ),
        "answers": [
            "Они растут",
            "Они остаются прежними",
            "Они тают",
            "Они исчезают сразу"
        ],
        "correct": 2
    },
    {
        "question": "Какой источник энергии является возобновляемым?",
        "answers": [
            "Уголь",
            "Нефть",
            "Природный газ",
            "Солнечная энергия"
        ],
        "correct": 3
    },
    {
        "question": "Какое следствие может иметь изменение климата?",
        "answers": [
            "Рост средней температуры",
            "Меньше солнечного света",
            "Земля перестанет вращаться",
            "Луна станет больше"
        ],
        "correct": 0
    },
    {
        "question": "Какое действие помогает сократить выбросы CO₂?",
        "answers": [
            "Использовать общественный транспорт",
            "Сжигать больше угля",
            "Вырубать леса",
            "Игнорировать энергоэффективность"
        ],
        "correct": 0
    },
    {
        "question": "Какое воздействие изменения климата на природу?",
        "answers": [
            "Больше биоразнообразия",
            "Более высокий риск вымирания видов",
            "Никаких изменений в экосистемах",
            "Только более холодные зимы"
        ],
        "correct": 1
    },
    {
        "question": "Какой источник энергии особенно климатически безопасен?",
        "answers": [
            "Ветроэнергетика",
            "Уголь",
            "Нефть",
            "Природный газ"
        ],
        "correct": 0
    },
    {
        "question": "Почему леса важны для климата?",
        "answers": [
            "Они поглощают CO₂",
            "Они создают больше загрязнения",
            "Они прекращают все осадки",
            "Они постоянно повышают температуру"
        ],
        "correct": 0
    },
    {
        "question": "Как называется долговременное потепление Земли?",
        "answers": [
            "Глобальное потепление",
            "Лунный цикл",
            "Окно парникового эффекта",
            "Охлаждение океана"
        ],
        "correct": 0
    }
]


translations = {
    "de": {
        "home": "Startseite",
        "information": "Informationen",
        "quiz": "Quiz",
        "climate": "Klimawandel",
        "learn": "Mehr erfahren",
        "start_quiz": "Quiz starten →",
        "footer": "© 2026 Klimawandel verstehen",
    },

    "en": {
        "home": "Home",
        "information": "Information",
        "quiz": "Quiz",
        "climate": "Climate Change",
        "learn": "Learn more",
        "start_quiz": "Start quiz →",
        "footer": "© 2026 Understanding Climate Change",
    },

    "ru": {
        "home": "Главная",
        "information": "Информация",
        "quiz": "Викторина",
        "climate": "Изменение климата",
        "learn": "Узнать больше",
        "start_quiz": "Начать викторину →",
        "footer": "© 2026 Понимание изменения климата",
    }
}


@app.route("/")
def index():
    language = flask.request.args.get("lang", "de")

    if language not in translations:
        language = "de"

    return flask.render_template(
        "index.html",
        lang=language,
        t=translations[language]
    )


@app.route("/information")
def information():
    language = flask.request.args.get("lang", "de")

    if language not in translations:
        language = "de"

    return flask.render_template(
        "information.html",
        lang=language,
        t=translations[language]
    )


@app.route("/project")
def project():
    language = flask.request.args.get("lang", "de")

    if language not in translations:
        language = "de"

    return flask.render_template(
        "project.html",
        lang=language,
        t=translations[language]
    )


@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    language = flask.request.args.get("lang", "de")

    if language not in translations:
        language = "de"

    if language == "en":
        questions = questions_en
    elif language == "ru":
        questions = questions_ru
    else:
        questions = questions_de

    if flask.request.method == "POST":
        score = 0

        for i, question in enumerate(questions):
            answer = flask.request.form.get(f"question_{i}")

            if answer is not None and int(answer) == question["correct"]:
                score += 1

        return flask.render_template(
            "quiz.html",
            questions=questions,
            score=score,
            finished=True,
            lang=language,
            t=translations[language]
        )

    return flask.render_template(
        "quiz.html",
        questions=questions,
        finished=False,
        lang=language,
        t=translations[language]
    )


if __name__ == "__main__":
    app.run(debug=True)

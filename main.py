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
        "question": "Welches Gas trägt besonders stark zum vom Menschen verursachten Treibhauseffekt bei?",
        "answers": [
            "Sauerstoff",
            "Kohlendioxid (CO₂)",
            "Helium",
            "Wasserstoff"
        ],
        "correct": 1
    },
    {
        "question": "Was passiert durch die globale Erwärmung mit vielen Gletschern?",
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
        "question": "Which gas contributes significantly to the human-caused greenhouse effect?",
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


@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    language = flask.request.args.get("lang", "de")

    if language not in translations:
        language = "de"

    if language == "en":
        questions = questions_en
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
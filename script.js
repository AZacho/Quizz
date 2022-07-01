let questions = [
    {
        "question": "Wie heißt die Mutter von Harry Potter?",
        "answer_1": "Hermine",
        "answer_2": "Myrte",
        "answer_3": "Lily Potter",
        "answer_4": "Cassandra",
        "right_answer": 3
    },
    {
        "question": "Wann wurde das Technische Hilfswerk (THW) gegründet?",
        "answer_1": "13. April 1951",
        "answer_2": "22. August 1950",
        "answer_3": "27. Oktober 1949",
        "answer_4": "3. Februar 1952",
        "right_answer": 2
    },
    {
        "question": "Wo ist Sebastian Vettel aufgewachsen?",
        "answer_1": "Herne",
        "answer_2": "Herfurt",
        "answer_3": "Hockenheim",
        "answer_4": "Heppenheim",
        "right_answer": 4
    },
    {
        "question": "Wie heißt der Schauspieler von Simon Camdon?",
        "answer_1": "David Gallagher",
        "answer_2": "Robert Malone",
        "answer_3": "Kevin McSolbyer",
        "answer_4": "André Brown",
        "right_answer": 1
    },
    {
        "question": "Wann gewannen die Detroit Lions (NFL) ihre letzte Championchip?",
        "answer_1": "1987",
        "answer_2": "1962",
        "answer_3": "1957",
        "answer_4": "noch nie",
        "right_answer": 3
    },
    {
        "question": "Wo ist links?",
        "answer_1": "rechts",
        "answer_2": "oben",
        "answer_3": "das andere rechts",
        "answer_4": "unten",
        "right_answer": 3,
    }
];

let currentQuestion = 0;
let currentAnswers = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
    showAnswers();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
}

function showAnswers() {
    let answer = questions[currentAnswers];

    document.getElementById('answer_1').innerHTML = answer['answer_1'];
    document.getElementById('answer_2').innerHTML = answer['answer_2'];
    document.getElementById('answer_3').innerHTML = answer['answer_3'];
    document.getElementById('answer_4').innerHTML = answer['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
    } else {
        console.log('Falsche Antwort!!');
    }
}
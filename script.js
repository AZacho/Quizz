let questions = [
    {
        "question": "Wie heißt die Mutter von Harry Potter?",
        "answer_1": "Hermine",
        "answer_2": "Myrte",
        "answer_3": "Lily",
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

let rightQuestions = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
    showAnswers();
}

function showQuestion() {


    if (currentQuestion >= questions.length) {
        // TODO: Show End Screen
        document.getElementById('finishedQuiz').style = ''; //blendet das "display: none;" aus dem HTML String aus und "beendet" das Quiz
        document.getElementById('questionCards').style = 'display: none;'; // Blendet die Antwortsektion aus, nachdem die letzte Frage beendet ist

        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/trophy.jpg';
    } else {

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1; // Zeigt an, bei welcher Frage wir sind!

        document.getElementById('questiontext').innerHTML = question['question'];
    }
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
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false; // Gibt den Button zum Klicken frei, nachdem eine Antwort gewählt wurde
}


function nextQuestion() {
    currentQuestion++; // Fragen z.B. von 0 auf 1 erhöhen
    currentAnswers++; // Antworten z.B. von 0 auf 1 erhöhen
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion(); // Fragen aus dem JSON ziehen
    showAnswers(); // Antworten aus dem JSON ziehen

}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function questionCounter() {
    clicks += 1;
    document.getElementById('clicks').innerHTML = clicks;
};
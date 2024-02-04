function goToInstructions() {

    let swap = document.getElementById('container').style.display !== 'none';
    if (swap == true) {
        document.getElementById('container').style.display = 'none';
        document.getElementById('instructions').style.display = 'block';
    } else {
        document.getElementById('container').style.display = 'block';
        document.getElementById('instructions').style.display = 'none';
    }
}

function jumpToOptions() {
    let swap = document.getElementById('instructions').style.display !== 'none';
    if (swap == true) {
        document.getElementById('instructions').style.display = 'none';
        document.getElementById('options').style.display = 'block';
    }
}

var questions = [
    {
        question: "What does HTML stand for?",
        answer: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Hyper Type Markup Language', correct: false },
        ]
    },
    {
        question: "Which character is used to indicate an end tag?",
        answer: [
            { text: '<', correct: true },
            { text: '*', correct: false },
            { text: '^', correct: false },
            { text: '/', correct: true },
        ]
    },
    {
        question: "Who is making the Web standards?",
        answer: [
            { text: 'The World Wide Web Consortium', correct: true },
            { text: 'Mozilla', correct: false },
            { text: 'Google', correct: false },
            { text: 'Microsoft', correct: false },
        ]
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answer: [
            { text: '&lt;head&gt;', correct: false },
            { text: "&lt;heading&gt;", correct: false },
            { text: '&lt;h1&gt;', correct: true },
            { text: '&lt;h6&gt;', correct: false },
        ]
    },
    {
        question: "Choose the correct HTML element to define important text",
        answer: [
            { text: '&lt;important&gt;', correct: false },
            { text: '&lt;strong&gt;', correct: true },
            { text: '&lt;i&gt;', correct: false },
            { text: '&lt;b&gt;', correct: false },
        ]
    }
];
    const htmlQuestion = document.getElementById('question');
    const htmlAnswer = document.getElementById('answers');
    const nextButton = document.getElementById('nxt-button');

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        alert('Quiz started');
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        score = 0;
        nextButton.innerHTML = "Next";
        displayQuiz()
    }

    function displayQuiz() {
        resetCurrentQuestion();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNum = currentQuestionIndex + 1;
        htmlQuestion.innerHTML = questionNum + '. ' + currentQuestion.question;

        // Clear previous answers
        currentQuestion.answer.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("ans-button");
            if (answer.correct) {
                button.dataset.correct = answer.correct
              }
              button.addEventListener('click', selectAnswer)
            htmlAnswer.appendChild(button);
        });
    }
    
    function resetCurrentQuestion() {
        nextButton.classList.add('hide');
            while(htmlAnswer.firstChild) {
            htmlAnswer.removeChild(htmlAnswer.firstChild);
        }
    }
    function selectAnswer(e) {
     alert('empty');
    }
    
function htmlQuizQuestions() {
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        startQuiz();
    }
}

function cssQuizQuestions() {
    alert('quiz started');
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';

    }

}
function javascriptQuizQuestions() {
    alert('quiz started');
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';

    }

}

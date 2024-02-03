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

function htmlQuizQuestions() {
    alert('quiz started');
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        startQuiz();
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
            { text: '<head>', correct: false },
            { text: '<heading>', correct: false },
            { text: '<h1>', correct: true },
            { text: '<h6>', correct: false },
        ]
    },
    {
        question: "Choose the correct HTML element to define important text",
        answer: [
            { text: '<important>', correct: false },
            { text: '<strong>', correct: true },
            { text: '<i>', correct: false },
            { text: '<b>', correct: false },
        ]
    }
];

let htmlQuestion = document.getElementById('question');
let htmlAnswer = document.getElementById('answers');
let nextButton = document.getElementById('nxt-button');
var currentQuestionIndex;
var score;

function startQuiz() {
    alert('check');
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    displayQuiz()
}

function displayQuiz() {
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    htmlQuestion.innerHTML= questionNum + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('ans-button');
        htmlAnswer.appendChild(button);
    });
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
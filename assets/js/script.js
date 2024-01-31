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
    }

}
let htmlQuestion = document.getElementById('question');
let htmlAnswer = document.getElementById('answers');
let nextButton = document.getElementById('nxt-button');

var questions = [
    {
        question:"What does HTML stand for?",
        answer: [
            {text:'Hyper Text Markup Language', correct: true},
            {text:'Home Tool Markup Language', correct: false},
            {text:'Hyperlinks and Text Markup Language', correct: false},
            {text:'Hyper Type Markup Language', correct: false},
        ]
    },
    {
        question:"Which character is used to indicate an end tag?",
        answer: [
            {text:'<', correct: true},
            {text:'*', correct: false},
            {text:'^', correct: false},
            {text:'/', correct: true},
        ]
    },
    {
        question:"Who is making the Web standards?",
        answer: [
            {text:'The World Wide Web Consortium', correct: true},
            {text:'Mozilla', correct: false},
            {text:'Google', correct: false},
            {text:'Microsoft', correct: false},
        ]
    },
    {
        question:"Choose the correct HTML element for the largest heading:",
        answer: [
            {text:'<head>', correct: false},
            {text:'<heading>', correct: false},
            {text:'<h1>', correct: true},
            {text:'<h6>', correct: false},
        ]
    },
    {
        question:"Choose the correct HTML element to define important text",
        answer: [
            {text:'<important>', correct: false},
            {text:'<strong>', correct: true},
            {text:'<i>', correct: false},
            {text:'<b>', correct: false},
        ]
    }
];

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
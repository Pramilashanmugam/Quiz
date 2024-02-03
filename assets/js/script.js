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
    const htmlQuestion = document.getElementById('question');
    const htmlAnswer = document.getElementById('answers');
    const nextButton = document.getElementsByClassName('nxt-button')[0];

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        alert('Quiz started');
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
            let button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("ans-button");
            htmlAnswer.appendChild(button);
        });
    }
    nextButton.addEventListener('click', function() {
        // Increment currentQuestionIndex when next button is clicked
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuiz();
        } else {
            // Quiz finished
            alert('Quiz finished');
            // You can add your quiz completion logic here
        }
    });
    function resetCurrentQuestion() {
        nextButton.style.display = "none";
        while(htmlAnswer.firstChild) {
            htmlAnswer.removeChild(htmlAnswer.firstChild);
        }
    }
    
    // Attach event listener to the HTML button
    const htmlQuizButton = document.getElementById('htmlQuizButton');
    if (htmlQuizButton) {
        htmlQuizButton.addEventListener('click', function() {
            htmlQuizQuestions();
        });
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

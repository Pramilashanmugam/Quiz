// assigning the button by its id
const startButton = document.getElementById('start-btn');
const readyButton = document.getElementById('ready-btn');
const exitButton = document.getElementById('exit-btn');
const htmlButton = document.getElementById('html-btn');
const cssButton = document.getElementById('css-btn');
const jsButton = document.getElementById('javascript-btn');
const nextButton = document.getElementById('nxt-button');
const replayButton = document.getElementById('replay-button');

// onclick goes to the respective function
htmlButton.addEventListener('click', htmlQuizQuestions);
cssButton.addEventListener('click', cssQuizQuestions);
jsButton.addEventListener('click', javascriptQuizQuestions);

// Call the goToInstructions function when the button is clicked
startButton.addEventListener('click', goToInstructions);

// this function to go to option div on clicking ready button and to go to main page if exit clicked
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

// Call the jumpToOptions function when the button is clicked
readyButton.addEventListener('click', jumpToOptions);

// returns to goToInstructions function
exitButton.addEventListener('click', goToInstructions);

// func to display option of available quizes
function jumpToOptions() {
    let swap = document.getElementById('instructions').style.display !== 'none';
    if (swap == true) {
        document.getElementById('instructions').style.display = 'none';
        document.getElementById('options').style.display = 'block';
    }
}
// question and answer array for html quiz
let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Hyper Type Markup Language', correct: false },
        ]
    },
    {
        question: "Which character is used to indicate an end tag?",
        answers: [
            { text: '<', correct: false },
            { text: '*', correct: false },
            { text: '^', correct: false },
            { text: '/', correct: true },
        ]
    },
    {
        question: "Who is making the Web standards?",
        answers: [
            { text: 'The World Wide Web Consortium', correct: true },
            { text: 'Mozilla', correct: false },
            { text: 'Google', correct: false },
            { text: 'Microsoft', correct: false },
        ]
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: [
            { text: '&lt;head&gt;', correct: false },
            { text: "&lt;heading&gt;", correct: false },
            { text: '&lt;h1&gt;', correct: true },
            { text: '&lt;h6&gt;', correct: false },
        ]
    },
    {
        question: "Choose the correct HTML element to define important text",
        answers: [
            { text: '&lt;important&gt;', correct: false },
            { text: '&lt;strong&gt;', correct: true },
            { text: '&lt;i&gt;', correct: false },
            { text: '&lt;b&gt;', correct: false },
        ]
    }
];



const htmlQuestion = document.getElementById('question');
const htmlAnswers = document.getElementById('answers');
const finalScore =document.getElementById('finalscore');

let currentQuestionIndex;
let score = 0;
let shuffledQuestions;
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
   // alert('startQuiz');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5); // shuffles the questions randomly
    score = 0;
    nextButton.innerHTML = "Next";
    displayQuiz();
}

function displayQuiz() {
    //alert('displayQuiz');
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    htmlQuestion.innerHTML = questionNum + '. ' + currentQuestion.question; // displaying the currentquestion with the  question no

    // Clear previous answers
    currentQuestion.answers.forEach(answer => {  // code from line 97 till 114 inspired from youtube channel "Web Dev Simplified" however its customised (please find it in readme)
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans-button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        htmlAnswers.appendChild(button);
    });
}
// this function is to replace the questions everytime
function reset() {
    //alert("reset fn is called");
    nextButton.classList.add('hide');// hiding the nextbutton from displaying    
    while (htmlAnswers.firstChild) {
        htmlAnswers.removeChild(htmlAnswers.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true"; // checking the selectedbuttons value with dataset
    if (correct) {
        selectedButton.classList.add("correct");            // if the selected button is true then class name correct will be added and the button will change to green colour
        score++;
    } else {
        selectedButton.classList.add("incorrect");          // if the selected button is false then class name incorrect will be added and the button will change to red colour
    }
    Array.from(htmlAnswers.children).forEach(button => {    // for each button it will whether the dataset is true
        if (button.dataset.correct === "true") {
            button.classList.add("correct");                // if the condition is true it will add the class name correct 
        }
        button.disabled = true;                             // disabling the multiple time click once the answer is selected
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        displayScore();
    }
}

// function to display the score
function displayScore() {
    reset();
    let swap = document.getElementById('quiz').style.display !== 'none';
    if (swap == true) {       
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    }
    if (score === 5) {
        finalScore.innerHTML = `Awesome! You nailed it! Your score is ${score} out of ${shuffledQuestions.length}!`;
    } else if (score === 3 || score === 4) {
        finalScore.innerHTML = `Congratulations! you have scored ${score} out of ${shuffledQuestions.length}! You are almost there, Try again`;
    } else if (score < 3) {
        finalScore.innerHTML = `Your score is ${score} out of ${shuffledQuestions.length}! Goodluck for your next attempt.`;
    } 
    replayButton.addEventListener('click', playAgain);
}

function playAgain() {
    let swap = document.getElementById('result').style.display !== 'none';
    if (swap == true) {
        document.getElementById('result').style.display = 'none';
        document.getElementById('container').style.display = 'block';
    } 
    startQuiz();
}
/**
 *  
 */
function htmlQuizQuestions() { 
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        startQuiz();
    }
}


//TBD
function cssQuizQuestions() {
    alert('quiz started');
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
       
    }

}


//TBD
function javascriptQuizQuestions() {
    alert('quiz started');
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
    }

}

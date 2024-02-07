// assigning the button by its id
const startButton = document.getElementById('start-btn');
const readyButton = document.getElementById('ready-btn');
const exitButton = document.getElementById('exit-btn');
const htmlButton = document.getElementById('html-btn');
const cssButton = document.getElementById('css-btn');
const jsButton = document.getElementById('javascript-btn');
const nextButton = document.getElementById('nxt-button');
const replayButton = document.getElementById('replay-button');
const displayQuestion = document.getElementById('question');
const displayAnswers = document.getElementById('answers');
const finalScore = document.getElementById('finalscore');

// onclick goes to the respective function
htmlButton.addEventListener('click', htmlQuizQuestions);
cssButton.addEventListener('click', cssQuizQuestions);
jsButton.addEventListener('click', javascriptQuizQuestions);
startButton.addEventListener('click', goToInstructions); // on Click of Start button displays instruction for the quiz
readyButton.addEventListener('click', jumpToOptions); // Goes to the quiz option division when the Ready button is clicked
exitButton.addEventListener('click', goToInstructions); // on click of exit button it returns to home division

// question and answer array for html quiz
let htmlQuestions = [
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
// html quiz array ends here

// question and answer array for CSS quiz 
let cssQuestions = [
    {
        question: "CCS q1?",
        answers: [
            { text: 'CCS q1', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Hyper Type Markup Language', correct: false },
        ]
    },
    {
        question: "CCS q2?",
        answers: [
            { text: '<', correct: false },
            { text: '*', correct: false },
            { text: '^', correct: false },
            { text: 'CCS q2', correct: true },
        ]
    },
    {
        question: "CCS q3?",
        answers: [
            { text: 'CCS q3', correct: true },
            { text: 'Mozilla', correct: false },
            { text: 'Google', correct: false },
            { text: 'Microsoft', correct: false },
        ]
    },
    {
        question: "CCS q4",
        answers: [
            { text: '&lt;head&gt;', correct: false },
            { text: "&lt;heading&gt;", correct: false },
            { text: 'CCS q4', correct: true },
            { text: '&lt;h6&gt;', correct: false },
        ]
    },
    {
        question: "CCS q5",
        answers: [
            { text: '&lt;important&gt;', correct: false },
            { text: 'CCS q5', correct: true },
            { text: '&lt;i&gt;', correct: false },
            { text: '&lt;b&gt;', correct: false },
        ]
    }
];
// end of CSS quiz questions

//question and answer array for javascript quiz

let jsQuestions = [
    {
        question: "js q1?",
        answers: [
            { text: 'js q1', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Hyper Type Markup Language', correct: false },
        ]
    },
    {
        question: "js q2?",
        answers: [
            { text: '<', correct: false },
            { text: '*', correct: false },
            { text: '^', correct: false },
            { text: 'js q2', correct: true },
        ]
    },
    {
        question: "js q3?",
        answers: [
            { text: 'js q3', correct: true },
            { text: 'Mozilla', correct: false },
            { text: 'Google', correct: false },
            { text: 'Microsoft', correct: false },
        ]
    },
    {
        question: "js q4",
        answers: [
            { text: '&lt;head&gt;', correct: false },
            { text: "&lt;heading&gt;", correct: false },
            { text: 'js q4', correct: true },
            { text: '&lt;h6&gt;', correct: false },
        ]
    },
    {
        question: "js q5",
        answers: [
            { text: '&lt;important&gt;', correct: false },
            { text: 'js q5', correct: true },
            { text: '&lt;i&gt;', correct: false },
            { text: '&lt;b&gt;', correct: false },
        ]
    }
];
// end of javascript quiz questions

// this function is to travel from home division to instruction division and also to return from instruction to home
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

/**
 * this function is to travel from instruction division to the option division 
 * where you can choose the quiz options between 3 quizzes
 */
function jumpToOptions() {
    let swap = document.getElementById('instructions').style.display !== 'none';
    if (swap == true) {
        document.getElementById('instructions').style.display = 'none';
        document.getElementById('options').style.display = 'block';
    }
}

// this function is called to perform html quiz, when the html button is clicked on the option division
function htmlQuizQuestions() {
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        startQuiz("html");
    }
}

// this function is called to perform Css quiz, when the Css button is clicked on the option division
function cssQuizQuestions() {
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        startQuiz("css");
    }
}

// this function is called to perform javascript quiz, when the Javascript button is clicked on the option division
function javascriptQuizQuestions() {
    let swap = document.getElementById('options').style.display !== 'none';
    if (swap == true) {
        document.getElementById('options').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
    } startQuiz('javascript');

}

// Variables assigned
let currentQuestionIndex;
let score = 0;
let shuffledQuestions;
let quizState;

/** '=>' is called an arrow function to define functions in shortcut 
 * onclick of next button the arrow function is called
 * then currentquestionindex variable is incremented
 * then calls the displayquiz function 
 * */
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuiz(quizState);
});

/** This function is responsible for initializing the quiz based on the value received
 * for example if val = html, then the startquiz will performs only the html quiz
 * this one function, is used to perform all the three different quiz based on the value received
 * the sorting array idea is inspired from https://medium.com/ however it is customised
 * quizState = val is to ensure only the corresponding quiz is displayed 
*/
function startQuiz(val) {
    quizState = val;
    currentQuestionIndex = 0;
    if (val == "html") {
        shuffledQuestions = htmlQuestions.sort(() => Math.random() - 0.5); // shuffles the questions randomly, 
    } else if (val == 'css') {
        shuffledQuestions = cssQuestions.sort(() => Math.random() - 0.5);
    } else if (val == 'javascript') {
        shuffledQuestions = jsQuestions.sort(() => Math.random() - 0.5);
    }
    score = 0;
    displayQuiz(val);
}


function displayQuiz(val) {
    reset();
    let currentQuestion;
    if (val == 'html') {
        currentQuestion = htmlQuestions[currentQuestionIndex];
    } else if (val == 'css') {
        currentQuestion = cssQuestions[currentQuestionIndex];
    } else if (val == 'javascript') {
        currentQuestion = jsQuestions[currentQuestionIndex];
    }

    let questionNum = currentQuestionIndex + 1;
    displayQuestion.innerHTML = questionNum + '. ' + currentQuestion.question; // displaying the currentquestion with the  question no

    /**
     * The for loop iterates over each answer option in the 'answers'
     * 'const button' creates a new button element for each answer option
     * 'button.innerHTML' sets the content of the button to the text of current answer option
     * 'button.classList.add' adds the css class to these buttons
     * if condition checks for the answer is true, when the ans is correct it adds the correct attribute
     * addEventListener is added on the button when clicked calls the selectAnswer function
     * 'displayAnswers.appendChild' This appends the created button element to the displayAnswers element
     */
    // idea of this loop is inspired from Web Dev Simplified YouTube channel however it is fully customised
    currentQuestion.answers.forEach(answer => {  
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans-button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        displayAnswers.appendChild(button);
    });
}
/**this function is to reset the answer fields
 * the while loop checks if the displayAnswers element has first child, if its true then the loop is executed
 * inside the loop the firstchild element of displayAnswers are removed and it is done until all the firstchild element is removed
 */ 
function reset() {
    nextButton.classList.add('hide');// hiding the nextbutton from displaying    
    while (displayAnswers.firstChild) {
        displayAnswers.removeChild(displayAnswers.firstChild);
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
    Array.from(displayAnswers.children).forEach(button => {    // for each button it will whether the dataset is true
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
    //startQuiz();
}



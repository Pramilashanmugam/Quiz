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
    },
    {
        question: "Which of these elements are all &lt;table&gt; elements?",
        answers: [
            { text: '&lt;thead&gt;&lt;body&gt;&lt;tr&gt;', correct: false },
            { text: '&lt;table&gt;&lt;tr&gt;&lt;td&gt;', correct: true },
            { text: '&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;', correct: false },
            { text: '&lt;table&gt;&lt;tr&gt;&lt;tt&gt;', correct: false },
        ]
    },
    {
        question: "How can you make a numbered list?",
        answers: [
            { text: '&lt;list&gt;', correct: false },
            { text: '&lt;dl&gt;', correct: false },
            { text: '&lt;ol&gt;', correct: true },
            { text: '&lt;ul&gt;', correct: false },
        ]
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        answers: [
            { text: '&lt;checkbox&gt;', correct: false },
            { text: '&lt;input type="checkbox"&gt;', correct: true },
            { text: '&lt;input type="check"&gt;', correct: false },
            { text: '&lt;check&gt;', correct: false },
        ]
    },
    {
        question: "What is the correct HTML for inserting an image?",
        answers: [
            { text: '&lt;img src="image.gif" alt="MyImage"&gt;', correct: true },
            { text: '&lt;image src="image.gif" alt="MyImage"&gt;', correct: false },
            { text: '&lt;img href="image.gif" alt="MyImage"&gt;', correct: false },
            { text: '&lt;img alt="MyImage"&gt;image.gif&lt;/img&gt;', correct: false },
        ]
    },
    {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        answers: [
            { text: 'required', correct: true },
            { text: 'placeholder', correct: false },
            { text: 'validate', correct: false },
            { text: 'formvalidate', correct: false },
        ]
    }
];
// html quiz array ends here

// question and answer array for CSS quiz 
let cssQuestions = [
    {
        question: "What does CSS stand for?",
        answers: [
            { text: 'Creative Style Sheets', correct: false },
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Colorful Style Sheets', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
        ]
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        answers: [
            { text: '&lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;', correct: true },
            { text: '&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;', correct: false },
            { text: '&lt;style src="mystyle.css"&gt;', correct: false },
            { text: '&lt;stylesheet src="mystyle.css"&gt;', correct: false },
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: 'font', correct: false },
            { text: 'style', correct: true },
            { text: 'styles', correct: false },
            { text: 'Class', correct: false },
        ]
    },
    {
        question: "What is the default value of the position property?",
        answers: [
            { text: 'static', correct: true },
            { text: "fixed", correct: false },
            { text: 'relative', correct: false },
            { text: 'Absolute', correct: false },
        ]
    },
    {
        question: "How do you select elements with the class name 'test'?",
        answers: [
            { text: '*test', correct: false },
            { text: 'test', correct: false },
            { text: '.test', correct: true },
            { text: '#test', correct: false },
        ]
    },
    {
        question: "How do you select an element with id 'demo'?",
        answers: [
            { text: '.demo', correct: false },
            { text: '#demo', correct: true },
            { text: '*demo', correct: false },
            { text: 'Demo', correct: false },
        ]
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        answers: [
            { text: 'text-transform:capitalize', correct: true },
            { text: 'transform:capitalize', correct: false },
            { text: 'You cannot do that with CSS', correct: false },
            { text: 'Text-style:capitalize', correct: false },
        ]
    },
    {
        question: "How do you display hyperlinks without an underline?",
        answers: [
            { text: '{text-decoration:none;}', correct: true },
            { text: '{underline:none;}', correct: false },
            { text: '{text-decoration:no-underline;}', correct: false },
            { text: '{decoration:no-underline;}', correct: false },
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        answers: [
            { text: 'font-size', correct: true },
            { text: 'text-size', correct: false },
            { text: 'font-style', correct: false },
            { text: 'Text-style', correct: false },
        ]
    },
    {
        question: "How do you insert a comment in a CSS file?",
        answers: [
            { text: '/* this is a comment */', correct: true },
            { text: 'this is a comment', correct: false },
            { text: '// this is a comment', correct: false },
            { text: '// this is a comment //', correct: false },
        ]
    }
];
// end of CSS quiz questions

//question and answer array for javascript quiz

let jsQuestions = [
    {
        question: "Inside which HTML element do we put in JavaScript?",
        answers: [
            { text: '&lt;scripting&gt;', correct: false },
            { text: '&lt;javaScript&gt;', correct: false },
            { text: '&lt;script&gt;', correct: true },
            { text: '&lt;js&gt;', correct: false },
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: 'msgBox(“Hello World!”);', correct: false },
            { text: 'msg(“Hello World!”);', correct: false },
            { text: 'alert(“Hello World!”);', correct: true },
            { text: 'alertbox(“Hello World!”);', correct: false },
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: 'function:myFunction()', correct: false },
            { text: 'function=myFunction()', correct: false },
            { text: 'function myFunction()', correct: true },
            { text: 'function myFunction', correct: false },
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            { text: 'If i=5 then', correct: false },
            { text: 'If (i==5)', correct: true },
            { text: 'If i==5 then', correct: false },
            { text: 'If i=5', correct: false },
        ]
    },
    {
        question: "How does a WHILE loop start?",
        answers: [
            { text: 'While i=1 to 10', correct: false },
            { text: 'While (i&lt;=10;i++)', correct: false },
            { text: 'while(i&lt;=10)', correct: true },
            { text: 'While i&lt;=10', correct: false },
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            { text: 'for(i=0;i&lt;=5)', correct: false },
            { text: 'for (i=0; i&lt;=5; i++)', correct: true },
            { text: 'for (i&lt;=5; i++)', correct: false },
            { text: 'for i = 1 to 5', correct: false },
        ]
    },
    {
        question: "How can you add a single line comment in JavaScript?",
        answers: [
            { text: 'This is a comment', correct: false },
            { text: '&lt;!--This is a comment &gt;', correct: false },
            { text: '//This is a comment', correct: true },
            { text: '#This is a comment', correct: false },
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: 'let colors =(1:”red”, 2:”green”, 3:”blue”)', correct: false },
            { text: 'let colors =[”red”, ”green”,”blue”]', correct: true },
            { text: 'let colors = ”red”, ”green”,”blue”', correct: false },
            { text: 'let colors = 1 = ”red”,2 = ”green”,3=”blue”', correct: false },
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: '-', correct: false },
            { text: "*", correct: false },
            { text: '/', correct: false },
            { text: '=', correct: true },
        ]
    },
    {
        question: "How do you round the number 5.25, to the nearest integer?",
        answers: [
            { text: 'Math.rnd(5.25)', correct: false },
            { text: 'round(5.25)', correct: false },
            { text: 'Math.round(5.25)', correct: true },
            { text: 'rnd(5.25)', correct: false },
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
    /*if (score === 10) {
        finalScore.innerHTML = `Awesome! You nailed it! Your score is ${score} out of ${shuffledQuestions.length}!`;
    } else if (score === 7 || score === 8 || score === 9) {
        finalScore.innerHTML = `Congratulations! you have scored ${score} out of ${shuffledQuestions.length}! Your knowledge about this topic is little close to 100%, Try again`;
    } else if (score === 4 || score === 5 || score === 6) {
        finalScore.innerHTML = `Your Score is ${score} out of ${shuffledQuestions.length}! Give a try again to score more.`;
    } else if (score === 3 || score === 2 || score === 1) {
        finalScore.innerHTML = `Your score is ${score} out of ${shuffledQuestions.length}! Goodluck for your next attempt.`;
    } else if (score === 0) {
        finalScore.innerHTML = `Oops! sorry your score is ${score} out of ${shuffledQuestions.length}!.Better luck next time.`;
    }*/
    const scoreRanges = [
        { minScore: 10, maxScore: 10, message: `Awesome! You nailed it! Your score is ${score} out of ${shuffledQuestions.length}!` },
        { minScore: 7, maxScore: 9, message: `Congratulations! you have scored ${score} out of ${shuffledQuestions.length}! Your knowledge about this topic is almost close to 100%, Try again` },
        { minScore: 4, maxScore: 6, message: `Your Score is ${score} out of ${shuffledQuestions.length}! Give a try again to score more.` },
        { minScore: 1, maxScore: 3, message: `Your score is ${score} out of ${shuffledQuestions.length}! Goodluck for your next attempt.` },
        { minScore: 0, maxScore: 0, message: `Oops! sorry your score is ${score} out of ${shuffledQuestions.length}!.Better luck next time.` }
    ];

    let message = '';

    for (const range of scoreRanges) {
        if (score >= range.minScore && score <= range.maxScore) {
            message = range.message;
            break;
        }
    }

    finalScore.innerHTML = message;
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



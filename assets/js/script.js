// Importing the quiz data from another js file
import { htmlQuestions, cssQuestions, jsQuestions } from './quizData.js';

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

// onclick on respective button it goes to the respective function
htmlButton.addEventListener('click', function () {      // Call this function when HTML button is clicked
    quizQuestions("html");
});
cssButton.addEventListener('click', function () {       // Call this function when CSS button is clicked
    quizQuestions("css");
});
jsButton.addEventListener('click', function () {        // Call this function when JavaScript button is clicked
    quizQuestions("javascript");
});
startButton.addEventListener('click', goToInstructions); // on Click of Start button displays instruction for the quiz
readyButton.addEventListener('click', jumpToOptions); // Goes to the quiz option section when the Ready button is clicked
exitButton.addEventListener('click', goToInstructions); // on click of exit button it returns to home section
nextButton.addEventListener('click', nextButtonClickHandler); // on click of next button, navigates to next question

// this function is to travel from home section to instruction section and also to return from instruction to home
function goToInstructions() {
    try {
        let swap = document.getElementById('container').style.display !== 'none';
        if (swap == true) {
            document.getElementById('container').style.display = 'none';
            document.getElementById('instructions').style.display = 'block';
        } else {
            document.getElementById('container').style.display = 'block';
            document.getElementById('instructions').style.display = 'none';
        }
    } catch (error) {
        console.error('An error occurred in goToInstruction:', error);
    }
}

/**
 * this function is to travel from instruction section to the option section 
 * where you can choose the quiz options between 3 quizzes
 */
function jumpToOptions() {
    try {
        let swap = document.getElementById('instructions').style.display !== 'none';
        if (swap == true) {
            document.getElementById('instructions').style.display = 'none';
            document.getElementById('options').style.display = 'block';
        }
    } catch (error) {
        console.error('An error occurred jumpToOptions:', error);
    }
}

/** this function is called to land on the respective quiz container. 
 * for example when the html button is clicked on the option section, it will take you to html quiz
 * on click of the button the quiztype parameter takes the value to startquiz function
 * */

function quizQuestions(quizType) {
    try {
        let swap = document.getElementById('options').style.display !== 'none';
        if (swap == true) {
            document.getElementById('options').style.display = 'none';
            document.getElementById('quiz').style.display = 'block';
            startQuiz(quizType);
        }
    } catch (error) {
        console.error('An error occurred quizQuestions:', error);
    }
}

// Variables declared
let currentQuestionIndex;
let score = 0;
let shuffledQuestions;
let quizState;

/** 
 * onclick of next button, nextButtonClickHandler function is called
 * this function increments the currentquestionindex on everytime nextbutton is clicked
 * then calls the displayquiz function 
*/
function nextButtonClickHandler() {
    currentQuestionIndex++;
    displayQuiz(quizState);
}

/** This function is responsible for initializing the quiz, based on the value received
 * for example if val = html, then the startquiz will performs only the html quiz
 * this one function, is used to perform all the three different quiz based on the value received
 * the sorting array idea is inspired from https://medium.com/ but it is customised
 * quizState = val is to ensure only the corresponding quiz is displayed 
*/
function startQuiz(val) {
    try {
        quizState = val;
        currentQuestionIndex = 0;
        if (val == "html") {
            shuffledQuestions = htmlQuestions.sort(() => Math.random() - 0.5); // shuffles the questions randomly, 
        } else if (val == "css") {
            shuffledQuestions = cssQuestions.sort(() => Math.random() - 0.5);
        } else if (val == "javascript") {
            shuffledQuestions = jsQuestions.sort(() => Math.random() - 0.5);
        }
        score = 0;
        displayQuiz(val);
    } catch (error) {
        console.error('An error occurred in startQuiz:', error);
    }
}

/**
 * This function is responsible for displaying the current question of the quiz based on the topic specified by the val parameter
 * the reset function will clear the previous display of question
 * 'val' determines the topic of the quiz, based on the value received it displays the corresponding quiz topic
 */
function displayQuiz(val) {
    try {
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
        currentQuestion.answers.forEach(function (answer) {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("ans-button");
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            displayAnswers.appendChild(button);
        });
    } catch (error) {
        console.error('An error occurred in displayQuiz:', error);
    }
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
    try {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === "true"; // checking the selected button's value with dataset
        if (correct) {
            selectedButton.classList.add("correct"); // if the selected button is true then class name correct will be added and the button will change to green colour
            score++;
        } else {
            selectedButton.classList.add("incorrect"); // if the selected button is false then class name incorrect will be added and the button will change to red colour
        }
        Array.from(displayAnswers.children).forEach(function (button) { // for each button it will check the condition whether the answer is true
            if (button.dataset.correct === "true") {
                button.classList.add("correct"); // if the condition is true it will add the class name correct 
            }
            button.disabled = true; // disabling the multiple-time click once the answer is selected
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide');
        } else {
            displayScore();
        }
    } catch (error) {
        console.error('An error occurred selectAnswer:', error);
    }
}

// function will display the total score scored by the user
function displayScore() {
    try {
        reset();
        let swap = document.getElementById('quiz').style.display !== 'none';
        if (swap == true) {
            document.getElementById('quiz').style.display = 'none';
            document.getElementById('result').style.display = 'block';
        }
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
    } catch (error) {
        console.error('An error occurred displayScore:', error);
    }
}

// after the end of quiz once the score is displayed this function is called to play the quiz again
function playAgain() {
    let swap = document.getElementById('result').style.display !== 'none';
    if (swap == true) {
        document.getElementById('result').style.display = 'none';
        document.getElementById('container').style.display = 'block';
    }
}

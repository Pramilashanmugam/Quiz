// question and answer array for html quiz
export const htmlQuestions = [
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
export const cssQuestions = [
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

export const jsQuestions = [
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

// Exporting the arrays

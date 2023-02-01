// user is presented with a title page
    // highscores link in top left (initially no scores saved)
    // timer in top right (initially set to 0)
    // "start quiz" button with "click" event listener
        // changes html to display first question, starts timer at... let's say 60

// question page!
    // question in header, answers on list of buttons, timer in top right decrementing
        // all buttons ("click" event listeners) move on to next question, but wrong answers also subtract... let's say 10 from timer
        // buttons also display a "correct" or "wrong" message in html below answers for a couple seconds (another timer?)
        // after 5 questions, stop timer and display end page

// end page!
    // "Your final score is [timer value]"
    // form for entering initials with a submit button
        // preventDefault on form to keep it from refreshing page
        // "click" event listener on button that saves initials plus score to local storage AND moves to high score screen

// high scores page!
    // ordered list of initials plus scores, from highest score to lowest
    // "go back" button returns user to title page ("click" event listener)
    // no more highscore link in top left! no more timer in top right!
    // "Clear Highscores" button (optional)


    //click button to start
    //event listener
    //a timer will start
//user is presented with a question
//user selects one multiple choice question
    //IF answer is wrong, decrement the timer
        //Display that the user choice was incorrect, then move to next question
    //IF answer is correct
        //Display that the user choice was correct(textContent)
        //Increment the score++
    //FOR loop to loop through the questions array
//When timer hits 0 OR no more questions in array
    //THEN clear interval
    //THEN allow user to input initials
    //THEN link to highscores page(two separate HTML pages, index.html and hiscores.html)
    //Save data to local storage(setItem, getItem)

//startQuiz() function changes content
    //hide the start screen
    //unhide the questions section
    //start the timer
    //show the starting time
    //call getQuestion()
//getQuestion() function get current question object from questions array
    //change content of the page
    //getElementbyId, change textContent
    //loop over choices create a button for each choice
    //after creating all the elements we appendChild
//questionClick() function that checks choice user clicked
    //first we check that the event.target matches an answer choice
    //check event.target.value matches the questions[currentIndex].answer

var startPage = document.querySelector(".start-page");
var quizPage = document.querySelector(".quiz-page");
var scorePage = document.querySelector(".score-page");
var highscoresPage = document.querySelector(".highscores-page");

quizPage.style.visibility = "hidden";
scorePage.style.visibility = "hidden";
highscoresPage.style.visibility = "hidden";

var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer");

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

timerEl.textContent = "Time: 0"

function startQuiz() {
    startPage.style.visibility = "hidden";
    quizPage.style.visibility = "visible";
    
    timerVal = 60;
    timer = setInterval(function(){
        timerEl.textContent = "Time: " + timerVal;
        timerVal --;
        if (timerVal <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);

    getQuestion();
}

function getQuestion() {
    questionEl = querySelector(".")
}

function endQuiz() {
    quizPage.style.visibility = "hidden";
    scorePage.style.visibility = "visible";

    finalScoreMessage = document.querySelector(".final-score-message");
    finalScoreMessage.textContent = "Your final score is " + timerVal;
}

startButton.addEventListener("click", startQuiz);
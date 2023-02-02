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

var timerEl = document.querySelector(".timer"); // saves location of timer element
var startButton = document.querySelector(".start-button"); // saves location of start button
var answerButtons = document.querySelector(".quiz-page"); // saves location of answer buttons' PARENT
var submitScoreButton = document.querySelector(".submit-score-button"); // saves location of submit score button
var goBackButton = document.querySelector(".go-back-button");
var clearHighscoresButton = document.querySelector(".clear-highscores-button");

var timerId = 0; // declare timerId globally so we can use clearInterval anywhere
var timerVal = 0; // declare timerVal globally so we can adjust it anywhere
var questionIndex = 0; // declare questionIndex globally so we can increment it every time we answer a question; start at 0 to start with first question
var questions = [ //array of question objects with question, choices, and correct answer in strings
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

function startQuiz() { // function to start quiz, called by click event on start button
    startPage.style.visibility = "hidden";
    quizPage.style.visibility = "visible";
    
    timerVal = 60; // give players 1 minute
    timerId = setInterval(function(){ // begin countdown and save id
        timerVal --; // decrement timer
        timerEl.textContent = "Time: " + timerVal; // display timer
        if (timerVal <= 0) { // negative values possible thanks to penalty for wrong answers!!
            endQuiz(); // ends quiz
        }
    }, 1000); // run above function every 1000 milliseconds

    getQuestion(0); // load first question
}

function getQuestion(n) {
    questionEl = document.querySelector(".quiz-page").children[0]; //saves location of question element
    questionEl.textContent = questions[n].question; // populates nth question

    for(i=1; i<=4; i++) { // four times for four choices
        answerEl = document.querySelector(".quiz-page").children[i]; // saves location of i-th answer button
        answerEl.textContent = questions[n].choices[i-1]; // populates answer choices
    }
}

function endQuiz() {
    clearInterval(timerId); // stops countdown timer
    timerEl.textContent = "Time: " + timerVal; // displays final timer/score in corner

    quizPage.style.visibility = "hidden";
    scorePage.style.visibility = "visible";

    var finalScoreMessage = document.querySelector(".final-score-message"); // saves location of final score message
    finalScoreMessage.textContent = "Your final score is " + timerVal; // display message with score (timerVal)
}

function saveScore(event) {
    event.preventDefault();

    scorePage.style.visibility = "hidden";
    highscoresPage.style.visibility = "visible";

    var initials = document.querySelector(".initials").value;

    var player = {
        playerName: initials,
        playerScore: timerVal
    };

    if (localStorage.getItem("highscores") == null) {
        var storedHighscores = [player];
    } else {
        var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

        for (i=0; i<storedHighscores.length; i++) {
            if(player.playerScore > storedHighscores[i].playerScore) {
                storedHighscores.splice(i, 0, player);
            }
        }
    }

    localStorage.setItem("highscores", JSON.stringify(storedHighscores));

    for (i=0; i<storedHighscores.length; i++) {
        var li = document.createElement("li");
        li.textContent = storedHighscores[i].playerName + ": " + storedHighscores[i].playerScore;
        highscoresPage.children[1].appendChild(li);
    }
}

function goBack() {
    highscoresPage.style.visibility = "hidden";
    startPage.style.visibility = "visible";
}

function clearHighscores() {
    localStorage.setItem("highscores", "");
    liArray = document.querySelectorAll("li");
    liNum = liArray.length;

    for (i=0; i<liNum; i++) {
        liArray[0].remove();
    }
}


startButton.addEventListener("click", startQuiz); // click event listener for start button

answerButtons.addEventListener("click", function(event) { // click event listener for quiz answer buttons
    var element = event.target;

    if (element.matches("button")) { // check that user actually clicked a button
        var chosenAnswer = element.textContent; // saves string value with chosen answer
        var correctAnswer = questions[questionIndex].answer; //saves string value of CORRECT answer

        if (chosenAnswer !== correctAnswer) { // if wrong...
            timerVal -= 10; // incorrect answer penalty
            // display "Incorrect" message
        } else { // if right...
            // display "Correct" message
        }

        questionIndex++;
        if (questionIndex < questions.length) { //if there are questions left...
            getQuestion(questionIndex); // change to next question
        } else { // if no questions left...
            endQuiz(); //ends quiz and goes to final score page
        }
    }
});

submitScoreButton.addEventListener("click", saveScore); // click event listener for score submit button

goBackButton.addEventListener("click", goBack);

clearHighscoresButton.addEventListener("click", clearHighscores);
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

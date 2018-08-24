

// array of possible answers
let answers = ["bill murray"];

// chosenWord is the word we will try to guess, chosen from the answers array
let chosenWord = answers[Math.floor(Math.random() * answers.length)];

// holds the string that will be displayed in the playfield and filled in as user makes usedLetters
var display = "";

// holds the letters we have already guessed
var usedLetters = " ";

// wins and lives
var wins = 0;
var lives = 10;

// performed when user wins, changes the solution div to display image of the answer
function solve() {
    document.getElementById("solution").innerHTML = `<img src="https://www.fillmurray.com/300/300" id="solutionpic">`;
    wins++;
}


// runs the game function on every keyup event
document.onkeyup = function (event) {

    // stores the last display, to be checked against later for changes, to determine if a correct guess was not made
    oldDisplay = display;

    // clears the display so it can be reassembled in the for loop
    display = "";

    // stores my keypress
    newGuess = event.key;

    // adds my new guess to the used letters array
    usedLetters += newGuess;

    for (i = 0; i < chosenWord.length; i++) {

        if (usedLetters.indexOf(chosenWord[i]) !== -1) { display += chosenWord[i]; } else { display += "_"; };
    };


    if(oldDisplay===display) {lives--;};

    oldDisplay="";

    if(lives===0){display="GAME OVER!"};

    if (display === chosenWord) {
        solve();
    }

    document.getElementById("currentWordField").innerText = display;
    document.getElementById("usedLettersField").innerText = usedLetters;
    document.getElementById("livesField").innerText = lives;
    document.getElementById("winsField").innerText = wins;
};


// array of possible answers
let answers = ["bill murray", "tom cruise", "tom hanks", "arnold schwarzenegger"];

// automatically adjusts the game length for more or less answers
let neededWins = answers.length;

// chosenWord is the word we will try to guess, chosen from the answers array
let chosenWord = answers[Math.floor(Math.random() * answers.length)];

// holds the string that will be displayed in the playfield and filled in as user makes usedLetters
var display = "";

// holds the letters we have already guessed
var usedLetters = " ";

// wins and lives initialization
var wins = 0;
var lives = 10;

// Victory Song
let song = document.getElementById("congrats");


// 
function resetPicture() {
    document.getElementById("solution").innerHTML = `<img src="assets/images/questionmark.jpg" id="solutionpic">`
}


// performed when user wins, changes the solution div to display image of the answer
function solve() {
    if (chosenWord === "bill murray") {
        document.getElementById("solution").innerHTML = `<img src="https://www.fillmurray.com/300/300" id="solutionpic">`;
    };


    if (chosenWord === "tom cruise") {
        document.getElementById("solution").innerHTML = `<img src="https://mediamass.net/jdd/public/documents/celebrities/333.jpg" id="solutionpic">`;
    };

    if (chosenWord === "tom hanks") {
        document.getElementById("solution").innerHTML = `<img src="https://marriedbiography.com/wp-content/uploads/2017/06/Tom-Hanks.jpg" id="solutionpic">`;
    };

    if (chosenWord === "arnold schwarzenegger") {
        document.getElementById("solution").innerHTML = `<img src="https://static.listionary.com/core/uploads/1463134870-arnold-schwarzenegger.jpg" id="solutionpic">`;
    };

    setTimeout(resetPicture, 3000);

    answers.splice(answers.indexOf(chosenWord), 1);

    wins++;
    usedLetters = " ";
    lives = "10";
    chosenWord = answers[Math.floor(Math.random() * answers.length)];
    if (wins === neededWins) {
        document.getElementById()
        display = "YOU GOT THEM ALL!!!";
        song.play();
    }
}



// runs the game function on every keyup event
document.onkeyup = function (event) {

    // stores the last display, to be checked against later for changes, to determine if a correct guess was not made
    oldDisplay = display;

    // clears the display so it can be reassembled in the for loop
    display = "";

    // stores my keypress
    newGuess = event.key;

    // adds my new guess to the used letters string
    usedLetters += newGuess;

    // loops through 
    for (i = 0; i < chosenWord.length; i++) {

        // goes through each letter in chosenWord, and if it has an index in usedLetters, it is shown, otherwise it is hidden
        if (usedLetters.indexOf(chosenWord[i]) >= 0) { display += chosenWord[i]; } else { display += "_"; };
    };

    // checks if display has changed after being re-made by the above if/else, if not then you didn't guess a new letter, so lives goes down.
    if (oldDisplay === display) { lives--; };

    // loss condition
    if (lives === 0) { display = "GAME OVER!" };

    // win condition
    if (display === chosenWord) {
        solve();
    }

    document.getElementById("currentWordField").innerText = display;
    document.getElementById("usedLettersField").innerText = usedLetters;
    document.getElementById("livesField").innerText = lives;
    document.getElementById("winsField").innerText = wins;
}

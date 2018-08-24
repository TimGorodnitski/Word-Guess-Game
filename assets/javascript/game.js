

// array of possible answers
let answers = ["bill murray"];

let solution = document.getElementById("solutionpic");
let chosenWord = answers[Math.floor(Math.random() * answers.length)];
var display = "";
var guesses = " ";
var wins = 0;
var lives = 11;


function solve() {
    document.getElementById("solution").innerHTML = `<img src="https://www.fillmurray.com/300/300" id="solutionpic">`;
    wins++;
}


document.onkeyup = function (event) {
    oldDisplay = display;
    display = "";
    guess = event.key;
    guesses += guess;

    for (i = 0; i < chosenWord.length; i++) {

        if (guesses.indexOf(chosenWord[i]) !== -1) { display += chosenWord[i]; } else { display += "_"; };
    };


    if(oldDisplay===display) {lives--;};

    oldDisplay="";

    if(lives===0){display="GAME OVER!"};

    if (display === chosenWord) {
        solve();
    }

    document.getElementById("currentWordField").innerText = display;
    document.getElementById("usedLettersField").innerText = guesses;
    document.getElementById("livesField").innerText = lives;
    document.getElementById("winsField").innerText = wins;
};

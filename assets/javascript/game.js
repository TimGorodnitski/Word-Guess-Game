let answers = ["bill murray"];
let solution = document.getElementById("solutionpic");
let chosenWord = answers[Math.floor(Math.random() * answers.length)];
var display = "";
var guesses = " ";
var wins = 0;
var lives = 10;


function solve() {
    document.getElementById("solution").innerHTML = `<img src="https://www.fillmurray.com/300/300" id="solutionpic">`;
    wins++;
}


document.onkeyup = function(event) {
    display = "";
    guess = event.key;
    guesses += guess;

    for (i = 0; i < chosenWord.length; i++) {

        if (guesses.indexOf(chosenWord[i]) !== -1 ) {display += chosenWord[i];} else {display += "_"; lives--;};
        

    };

    if (display === chosenWord) {solve();}

    document.getElementById("currentWordField").innerText = display;
    document.getElementById("usedLettersField").innerText = guesses;


};

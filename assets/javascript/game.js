let answers = ["bill murray", "someone else"];
let solution = document.getElementById("solutionpic");
let chosenWord = answers[Math.floor(Math.random() * answers.length)];
let display = "";
let guesses = "";


function solve() {
    document.getElementById("solution").innerHTML = `<img src="https://www.fillmurray.com/300/300" id="solutionpic">`
}


document.onkeyup = function(event) {
    let guess = event.key;


    for (i = 0, x = chosenWord.length; i < x; i += 1) {
        if (guesses.indexOf(chosenWord[i]) >= 0) { display += chosenWord[i]} else {
            display += "_";
        }
    }


};


console.log("test top");



let answers = ["bill murray", "someone else"];
let solution = document.getElementById("solutionpic");
let chosenWord = answers[Math.floor(Math.random() * answers.length)];

function solve() {
    document.getElementById("solution").innerHTML = `<img src="https://www.fillmurray.com/300/300" id="solutionpic">`
}

function intoUnderscores(chosenword) {
    var result = chosenWord.split("");
};



document.onkeyup = function(event) {
    let guess = event.key;



};


console.log("test bottom");
console.log(chosenWord);
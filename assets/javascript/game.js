let letters = ["a","b","c","d","e","f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  
let randomLetter;
let win = 0;
let loss = 0;
let  guessesLeft = 9;
let  guessedLetters = [];

function replaceContent(id, content) {
    document.getElementById(id).innerHTML = content;
} 

document.addEventListener("keydown", onKeyPress);

function generateRandomLetter() {
    let randomIndex = [Math.floor(Math.random() * letters.length)];
    randomLetter = letters[randomIndex]
    console.log(randomLetter);
}

function resetGuesses() {
    guessesLeft = 9
    replaceContent("guessessofar", `Your Guesses so far: `);
}

function newGame() {
    guessedLetters = [];
    generateRandomLetter();
    replaceContent("wins", "Wins: " + win);
    replaceContent("losses", "Losses: " + loss);
    replaceContent("guessesleft", "Guesses Left: " + guessesLeft);
}
newGame();

function onKeyPress(key) {
    let letter = key.key.toLowerCase();
    if (
        letters.includes(letter) && guessedLetters.includes(letter) === false) {
        guessedLetters.push(letter);
        if (guessesLeft == 9) {
            document.getElementById("guessessofar").innerHTML += letter;
        } else {
            document.getElementById("guessessofar").innerHTML += ", " + letter;
        }
        guessesLeft--;
        replaceContent("guessesleft", "Guesses Left:" + guessesLeft);
        if (String(letter) == String(randomLetter)) {
            win++;
            replaceContent("wins", "Wins: " + win);
            resetGuesses()
            newGame();
        }
        if (guessesLeft === 0) {
            loss++;
            replaceContent("losses", "Losses: " + loss);
            resetGuesses()
            newGame();
        }
    }
}



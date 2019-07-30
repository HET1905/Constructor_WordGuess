var Word = require('./word.js');
var inquirer = require('inquirer');

const wordsCollection = ['apple', 'banana', 'cherry', 'peach', 'pear', 'grapes', 'strawberry'];
var randomWord;
let totalGuess;
let word;

// console.log(generateRandomWord());
// This method will call each time game start and it will generate random word on each call
function start() {
    randomWord = wordsCollection[Math.floor(Math.random() * wordsCollection.length)];
    totalGuess = 10;
    console.log('Guess any fruits names : ');
    console.log('-----------------------------------');
    playGame();
}

// This function will pass the randomword to Word constructor function makeWordLetter to convert word in array of letters
function playGame() {
    if (randomWord) {
        word = new Word(randomWord);
        word.makeWordLetters();
        guessTheWord();
    }
}
// This function will prompt user for input word
// send each letter input to Word constructor printDash() function, which will print total dash and if the input guess is correct
// letter it will replace dash with letter.
// This function also check for total guess left and any - left in array.
function guessTheWord() {
    let lettersArray = [];
    inquirer.prompt([{
        name: 'wordGuess',
        type: 'input',
        message: word.printDash() + "\nGuess a letter!" + "\nGuesses Left: " + totalGuess
    }]).then(function (data) {
        for (var i = 0; i < word.lettersOfWord.length; i++) {
            word.lettersOfWord[i].checkLetter(data.wordGuess);
            lettersArray.push(word.lettersOfWord[i].displayChar());
        }

        if (totalGuess > 0 && lettersArray.indexOf("-") !== -1) {
            totalGuess--;
            if (totalGuess === 0) {
                console.log('-----------------------------------');
                console.log("No more guesses left ! GAME OVER.");
                playAgain();
            } else {
                guessTheWord();
            }
        } else {
            console.log('-----------------------------------');
            console.log("CONGRATULATIONS! YOU GOT THE WORD!\n");
            console.log(word.printDash());
            playAgain();
        }
    });
}

// This function will prompt for user input and start the game again it user select yes.
function playAgain() {
    inquirer.prompt([{
            name: "playAgain",
            type: "list",
            message: "\nDo you want to play again?",
            choices: ["Yes", "No"]
        }])
        .then(function (data) {
            if (data.playAgain === "Yes") {
                start();
            } else {
                console.log("Thanks Bye Bye!");
            }
        });
}

// This function start the game.
start();
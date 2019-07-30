var Letter = require('./letter.js');

function Word(word){
    this.lettersOfWord = [];
    this.wordToGuess = word;

    // this method will call Constructor Letter to seperate each letter of Word and check for guessed letter
    // lettersOfWord holds the  bluePrint of Letter Constructor
    this.makeWordLetters = function(){
        var newArrayWord = this.wordToGuess.split("");
        for(var i=0;i<newArrayWord.length;i++){
            var makeLetter = new Letter(newArrayWord[i]);
            this.lettersOfWord.push(makeLetter);
        }
        // console.log(this.lettersOfWord);
    }

    // this method - calling from Letter Constructor - will make boolean variable true if pressed char is in word 
    this.checkWordGuess = function(guess){
        for(var i=0;i<this.lettersOfWord.length;i++){
            this.lettersOfWord[i].checkLetter(guess);   
        }
    }
    // this method will print total dashes for the word choosen and display a letter if right letter is passed.
    // Calling the displayChar() function of Letter Constructor
    this.printDash = function(){
        var dash = "";
        for(var i=0;i<this.lettersOfWord.length;i++){
            dash += this.lettersOfWord[i].displayChar() + " ";
        }
        // console.log(dash);
        return dash;
    }

}
// This lines are just to check Word constructor, take it off once it attached to index
// -----------------------------------------
// var y = new Word('Hetal');
// y.makeWordLetters();
// y.checkWordGuess('a');
// y.printDash();
// -----------------------------------
module.exports = Word;
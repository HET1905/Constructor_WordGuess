var Letter = require('./letter.js');

function Word(word){
    this.lettersOfWord = [];
    this.wordToGuess = word;

    this.makeWordLetters = function(){
        var newArrayWord = this.wordToGuess.split("");
        console.log("Array of Words : " +newArrayWord);
        for(var i=0;i<newArrayWord.length;i++){
            var makeLetter = new Letter(newArrayWord[i]);
            this.lettersOfWord.push(makeLetter);
        }
        console.log(this.lettersOfWord);
    }

    this.checkWordGuess = function(guess){
        for(var i=0;i<this.lettersOfWord.length;i++){
            this.lettersOfWord[i].checkLetter(guess);   
        }
    }

    this.printDash = function(){
        var dash = "";
        for(var i=0;i<this.lettersOfWord.length;i++){
            dash += this.lettersOfWord[i].displayChar() + " ";
        }
        // console.log(dash);
        return dash;
    }

}

var y = new Word('Hetal');
y.makeWordLetters();
y.checkWordGuess('a');
y.printDash();

module.exports = Word;
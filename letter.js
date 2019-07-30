// this constructor will get  char from word.js file

function Letter(char) {
    this.letterGuessed = char;
    this.isLetterGuessed = false;
    // this method will display - if guessed letter is not in word.
    // and will return the letter if the guessed letter is in word
    this.displayChar = function () {
        if (!this.isLetterGuessed) {
            // console.log(this.letterGuessed);
            // console.log( "-");
            return "-";
        } else {
            return this.letterGuessed;
        }
    }

    // this method will set the boolean vaiable to true if passed char is in the word.
    this.checkLetter = function (char) {
        if (char === this.letterGuessed) {
            this.isLetterGuessed = true;
            // console.log(char);
        }
    }
}
// this two lines are just to check letter constructor 
// ------------------------
// var x = new Letter('A');
// x.displayChar();
// ------------------------------
module.exports = Letter;
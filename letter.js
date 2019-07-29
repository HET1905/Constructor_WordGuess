function Letter(char) {
    this.letterGuessed = char;
    this.isLetterGuessed = false;
    this.displayChar = function () {
        if (!this.isLetterGuessed) {
            // console.log(this.letterGuessed);
            // console.log( "-");
            return "-";
        } else {
            return this.letterGuessed;
        }
    }
    this.checkLetter = function (char) {
        if (char === this.letterGuessed) {
            this.isLetterGuessed = true;
            // console.log(char);
        }
    }
}

// var x = new Letter('A');
// x.displayChar();
module.exports = Letter;
// requiring our word module exported from word.js

var Word = require("./Word.js");

var hangmanWord = new Word();

hangmanWord.create();

console.log(hangmanWord);

var match = false;
var guessCount = hangman.guessCount;

// recursive function which will allow the user to enter their guessed letter and then will display the outcome
var guessWord = function() {
  
  if (match && guessCount > 0 ) {
    console.log("---------");
    inquirer.prompt([
       {
        name: "userGuess",
        message: "? guess A Letter!: " //,
        // validate: function(value) {
        //   if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
        //     return true;
        //   }
        //   return false;
        // }
      }
    ]).then(function(answers) {
      // runs the constructor check Letter
      var checkletter = new checkLetter(answers.name);

      guessWord();
    });
  }
  else {
    console.log('Do you want to start a new game?')
  }
};

// calls the function gessWord() to start the code
guessWord();
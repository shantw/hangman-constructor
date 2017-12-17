// requiring our word module exported from word.js

var Word = require("./Word.js");
var Letter = require("./Letter.js");
var inquirer = require("inquirer");

var hangmanWord = new Word();


hangmanWord.create();
console.log(hangmanWord);
var hangLetter = new Letter(hangmanWord.letters);
hangLetter.init();


var wordMatch = false;
var guessCount = 12;

hangLetter.display(-1);

// recursive function which will allow the user to enter their guessed letter and then will display the outcome
var guessWord = function() {
  
  if (!wordMatch && guessCount > 0 ) {
    
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
      //console.log(answers.userGuess);
      hangLetter.updateWord(answers.userGuess);
      //console.log(!hangLetter.match);
      console.log(hangLetter.match);
      if (!hangLetter.match){
         //wordMatch 
         //hangLetter.match = false;
         hangmanWord.updateGuessCount;
         guessCount--;
         //console.log(hangmanWord.guessCount);
      }

      hangLetter.display(guessCount);

      guessWord();
    });
  }
  else {
    console.log('Do you want to start a new game?')
  }
};

// calls the function gessWord() to start the code
guessWord();
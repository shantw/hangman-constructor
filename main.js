// requiring our word module exported from word.js

var Word = require("./Word.js");
var Letter = require("./Letter.js");
var inquirer = require("inquirer");


var hangmanWord ;
var hangLetter;
var wordMatch = false;
var guessCount = 12;
var lettersGuessed =[];



var newGame = function() {
  
    wordMatch = false;
    guessCount = 12;
    lettersGuessed =[];
    hangmanWord = new Word();  
     
    hangmanWord.create();
    
    hangLetter = new Letter(hangmanWord.letters);
    hangLetter.init();
  
    hangLetter.display(-1);
  
  };

  newGame();

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
      // runs the constructor Letter
      if (lettersGuessed.includes(answers.userGuess)) {
        console.log("You have a already guessed this letter");
        guessWord();
      }
      else {
        hangLetter.updateWord(answers.userGuess);
        lettersGuessed.push(answers.userGuess);
        if (!hangLetter.match){
          hangmanWord.updateGuessCount;
          guessCount--;
        }

        hangLetter.display(guessCount);
        //console.log(hangmanWord.wordToGuess.replace(/\s/g,'').toLowerCase());
        //console.log(hangLetter.letters.join("").toLowerCase());
        if (hangmanWord.wordToGuess.replace(/\s/g,'').toLowerCase()=== hangLetter.letters.join("").replace(/\s/g,'').toLowerCase()){
          console.log(" ");
          console.log("YOU WON!! Next Word!");
          newGame();
        }
        else if(guessCount === 0) {
          console.log(" ");
          console.log("The correct word is: " + hangmanWord.letters.join(" "));
        }
        guessWord();
      }
    });
  }
  else {

  var gameStart = function() {
    inquirer.prompt([
      {
       name: "YN",
       message: "Do you want to start a new game? (Y/N) " 
     }
   ]).then(function(answers) {

     if (answers.YN.toLowerCase() === 'y') {
      newGame();
      guessWord();
     }
     else if (answers.YN.toLowerCase() === 'n'){
        console.log('Thank you for Playing!');
     }
     else{
       console.log("Not a Valid answer!!");
       gameStart();
     }
   });
  };
  gameStart();
  }

};



// calls the function gessWord() to start the code
guessWord();

// constructor function for creating word objects
var Word = function() {
  // this.letters will hold all of word's letters
  this.letters = [];
  this.wordToGuess = null;
  this.length = 0;
  this.guessCount = 12;
  //this.wordCount = wordCount;
  
  
  this.create = function() {
     
        var wordList=  ['Soccer','McLaren','Scarface','Constructor','Vacation','Halloween','Christmas','Acura','Wonderland','HTML','Chevrolet','Cadillac','Chrysler','bentley','bugatti','Axios','Handlebars','Star Wars','Santa Claus','Lexus','Jingle Bells','Hangman','Laptop','California','Jaguar','University','Infiniti','mercedes','ferrari','lamborghini','maserati','tesla','ford','Opel','Porsche','Toyota','Holiday','Javascript','Database'];
        //var wordList = ['Star Wars'];
        this.wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
        this.letters =  this.wordToGuess.split("");
        this.length = this.letters.length;
      };

  this.updateGuessCount = function() {
      if (this.guessCount > 0){
        this.guessCount--;
       }
  };
};
// exporting our word constructor. We will require it in main.js

module.exports = Word;



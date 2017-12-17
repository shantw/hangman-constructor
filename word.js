
// constructor function for creating word objects
var Word = function() {
  // this.letters will hold all of word's letters
  this.letters = [];
  this.wordToGuess = null;
  this.length = 0;
  this.guessCount = 12;
  //this.wordCount = wordCount;
  
  
  this.create = function() {
     
        var wordList=  ['Soccer','McLaren','Scarface','Constructor','Passat','Halloween','Christmass','Acura','Audi','BMW','Chevrolet','Cadillac','Chrysler','bentley','bugatti','Axios','Handlebars','Star Wars','nissan','lexus','kia','hyundai','fiat','peugeot','jaguar','mitsubishi','infiniti','mercedes','ferrari','lamborghini','maserati','tesla','ford','Opel','Porsche','Toyota','Holiday','Javascript','Database'];
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



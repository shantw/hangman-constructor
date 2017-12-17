var Letter = function(wordArr) {
    this.letters = [];
    this.wordArr = wordArr;
    this.match= false;
    
this.init = function() {
    for (i=0; i < this.wordArr.length; i++){
        if (wordArr[i] !==" "){
            this.letters.push('_');
        } 
        else
        {
            this.letters.push(' ');
        }
    }
};

this.matchFound = function (character) {

   if  (this.wordArr.includes(character)) {
      this.match = true;
      return true;
   }
   else{
    this.match = false;
    return false;
    }        
   };

this.updateWord = function (character) {
        this.match = false;
        for (i=0; i < this.wordArr.length; i++){
            var tempChar = this.wordArr[i];
            if (tempChar !==' '){
                if (character.toLowerCase() === tempChar.toLowerCase()){
                            this.letters[i] = this.wordArr[i];
                            this.match = true;    
                } // if
            }
        } //loop    
};

this.display  = function(count){

    console.log(this.letters.join("  "));
    console.log(" ");
    if (this.match){
       console.log('correct!');
    }
    else if(count > 0){
        console.log('Incorrect!');
        console.log(" ");
        console.log(count + '  guesses remaining!!!');
    }

};


};

module.exports = Letter;
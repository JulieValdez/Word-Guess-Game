//VARIABLES
//===============================================================

//create variable for the words to be used
const currentWord = ["iocane", "buttercup", "max", "westley"];

//create variable for hints to be used
const currentWordHint = [
  "odorless, tasteless, and dissolves instantly in liquid...",
  "title character",
  "miracle worker",
  "Dread Pirate Robert"
];

//variable for score, start with score of 0
const score = 0;

//variable to hold the index of the current word
const currentWordIndex = 0;

//variable to hold the index of the current word hint
const currentHintIndex = 0;

//variable for guesses remaining, give them 10
const guessesRemaining = 12;

//variable for letters already guessed
const lettersGuessed = [];

//FUNCTIONS
//=============================================================

//function to start game
document.onkeyup = function(event){
    const userGuess = event.key;
}
//function to render questions
function renderQuestion() {
    if (currentWordIndex <= (currentWord - 1)) {
     document.querySelector("#currentWord").innerHTML = currentWord[currentWordIndex];   
    } else {
        
    }
}

//function to create empty answer array - for loop
const answerArray = [];
for (let index = 0; index < currentWord.length; index++) {
  answerArray[index] = "_";
}
//keeps track of remaining letter in word being played so when it gets to 0 game is won
const remainingLetters = currentWord.length;

//function to push the letters guessed to the variable "lettersGuessed" update html id="lettersGuessed"
function lettersGuessed() {
    if (condition) {
        
    }
    
}
//function to

renderQuestion ()
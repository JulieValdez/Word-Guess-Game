//VARIABLES
//===============================================================

//create variable for the words to be used
let listOfWords = [
  "iocane", 
  "buttercup", 
  "max", 
  "westley"
];
let currentWord = listOfWords[0];

//variable for underscores to be displayed
let wordUnderscore = (currentWord.length).join("_");

//create variable for hints to be used
let listOfWordHints = [
  "odorless, tasteless, and dissolves instantly in liquid...",
  "title character",
  "miracle worker",
  "Dread Pirate Robert"
];
let currentWordHint = listOfWordHints[0];

//variable for wins, start with score of 0
let wins = 0;

//variable for guesses remaining, give them 12
let guessesRemaining = 12;

//Functions:
function startGame() {
  document.getElementById("#currentWord").innerHTML = wordUnderscore
}

//on first key press game starts
//first word is chosen from list of words array
//length of word is determined and displayed with underscores in html id
//first hint is chosen from list of word hints array
//hint is displayed in html id
//user chooses a letter
document.onkeyup = function(event) {
  var userGuess = event.key

  if (currentWord[i].includes(userGuess)) {
    
  }
}
//letter chosen is stored in variable
//if letter is included in current word it is pushed to appropriate index position
//display chosen letter in html id
//if it is not included in current word it is pushed to letter guessed array
//display incorrect letter guessed in html id
//count of guesses remaining goes down
//if all the index places in current word are populated the word is complete and the user won
//next word in the index is displayed if user wins or remaining guesses are at 0

startGame();




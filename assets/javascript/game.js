//VARIABLES
//===============================================================

//create variable for the words to be used
let listOfWords = [
  "iocane", 
  "buttercup", 
  "max", 
  "westley"
];
let currentWord = listOfWords[0]

//create variable for hints to be used
let listOfWordHints = [
  "odorless, tasteless, and dissolves instantly in liquid...",
  "title character",
  "miracle worker",
  "Dread Pirate Robert"
];
let currentWordHint = listOfWordHints[0]

//variable for wins, start with score of 0
let wins = 0;

//variable for guesses remaining, give them 12
let guessesRemaining = 12;

//on first key press game starts
//first word is chosen from list of words array
//first hint is chosen from list of word hints array
//user chooses a letter
//if letter is included in current word it is pushed to appropriate index position
//display chosen letter in html id
//if it is not included in current word it is pushed to letter guessed array
//display incorrect letter guessed in html id
//count of guesses remaining goes down
//if all the index places in current word are populated the word is complete and the user won
//


//FUNCTIONS
//=============================================================
// on first key press game starts
document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log("missed work");
  if (currentWord.includes(userGuess)) {
    console.log("worked");
    
  } else {
    
  }
  
}
//function to render words in variable
function renderCurrentWord() {
    if (currentWordIndex <= (currentWord - 1)) {
     document.querySelector("#currentWord").innerHTML = currentWord[currentWordIndex];   
    } else {
      document.querySelector("#currentWord").innerHTML = "Game Over!";
    }
}

//function to create empty answer array - for loop
let answerArray = [];
for (let index = 0; index < currentWord.length; index++) {
  answerArray[index] = "_";
}
//keeps track of remaining letter in word being played so when it gets to 0 game is won
let remainingLetters = currentWord.length;



// while (remainingLetters > 0) {
//   document.getElementById("currentWord").innerHTML = answerArray.join(" ");
// }

// renderCurrentWord()

// word is chosen from currentWord array and blank dashes are displayed
// corresponding hint is displayed in empty <p>

// player hits a key, if it is part of the currentWord it is diplayed in the correct place
// if key is not correct, it is placed in the lettersGuessed div

//track the number of guesses

//if the word is solved - alert the player they have won and play audio file and display image
//else - alert player they have lost and play audio file
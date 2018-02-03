// Word array
var wordArray = ["cardinals", "falcons", "ravens", "bills", "panthers", "bears"
    , "bengals", "browns", "cowboys", "broncos", "lions", "packers", "texans", "colts"
    , "jaguars", "chiefs", "chargers", "rams", "dolphins", "vikings", " patriots"
    , "saints", "giants", "jets", "raiders", "eagles", "steelers", "fourtyniners"
    , "seahawks", "buccaneers", "titans", "redskins"];

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

var winCounter = 0;
var guessesRemain = 13;
var lettersGuessed = [];
var imgArray = [];
var answerArray = [];
var s;
var userGuess = "";

//pick a random word and convert to equal length of "_"
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_ ";
}

// Takes out commas of current word
s=answerArray.join(" ");
document.getElementById("currentWord").innerHTML = s;

//get users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesRemain--;
} 

//check users guess for equal letters in current word

    //if guess === letter reveal letter in current word
    if (userGuess === randomWord[i]) {
        answerArray[i] = userGuess;
        
    } 
    //else guess !== letter push guess to lettersGuessed array
    else {
        lettersGuessed.push(userGuess);
        
    }
    

    

//If current word is revealed then winCounter++ and pick another word
function endGame() {
    if (answerArray !== "_") {
        winCounter++;
        // calls function that randomly generates new word;
    } 

    else if (answerArray === "_") {
        //alert player to guess another letter
        alert("Please guess another letter")
    }

    else {
        guessesRemain === 0;
        //alert player they lost and show randomWord
        alert("You have ran out of guesses" + randomWord)
        //call function that randomly generates a new word
    }
}

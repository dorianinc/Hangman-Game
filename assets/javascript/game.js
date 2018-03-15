var wordBank = ["kryptonite", "everlong", "always", "pain", "memory", "drive", "pieces", "makedamnsure"];

var randWord = "";
var letterInWord = [];
var underScoreCounter = 0;
var rightLetterCounter = 0;
var underScore = [];
var wrongGuesses = [];
var songName = [];

var wins = 0;
var losses = 1;
var guessesLeft = 10;

function startGame(){

wrongGuesses = [];
console.log("Wrong Guess: ", wrongGuesses);
guessesLeft = 10;
underScore = [];


chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
lettersInWord = chosenWord.split("");
underScoreCounter = lettersInWord.length;
console.log(chosenWord);
console.log("under score counter: ",underScoreCounter)

for(var i = 0; i < underScoreCounter; i++){
    underScore.push("_");
}
console.log(underScore);





}


function checkLetters(letter){

    var letterInWord = false;

    for(var i = 0; i < underScoreCounter; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord){
        for(i = 0; i < underScoreCounter; i++){
            if(chosenWord[i] === letter){
            underScore[i] = letter;
            rightLetterCounter++;
            songName = underScore.join(" ");

        }
        console.log("right letter counter: ", rightLetterCounter )
        console.log("Links to audio:", songName)
        }
    }else{
        guessesLeft --;
        wrongGuesses.push(letter)
    }
}

function reset()
{
    wrongGuesses = [];
    console.log("Wrong Guess: ", wrongGuesses);
    guessesLeft = 10;
    underScore = [];
    
    
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = chosenWord.split("");
    underScoreCounter = lettersInWord.length;

    for(var i = 0; i < underScoreCounter; i++)
    {
        underScore.push("_");
    }
}


function songs(){

    document.getElementById('underScore').innerHTML = underScore.join(" ");
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById('guessesSoFar').innerHTML = "Guesses so Far: " + wrongGuesses.join(" ");

    console.log(lettersInWord);
    console.log(underScore);
    if(rightLetterCounter == underScoreCounter && songName === "e v e r l o n g")
	{

        wins++;

        var audio = new Audio("assets/music/everlong.mp3");
        audio.play();
		reset();
    }   else if(rightLetterCounter == underScoreCounter && songName === "a l w a y s" )
        { 
            wins++; 
            var audio = new Audio("assets/music/always.mp3");
            audio.play();
            reset();
        }
        else if(rightLetterCounter == underScoreCounter && songName === "d r i v e" ) 
        {
            wins++;
            var audio = new Audio("assets/music/drive.mp3");
            audio.play();
            reset();       
        }
        else if(rightLetterCounter == underScoreCounter && songName === "k r y p t o n i t e" )
        {
            wins++;
            var audio = new Audio("assets/music/kryptonite.mp3");
            audio.play();
            reset();
        }
        else if(rightLetterCounter == underScoreCounter && songName === "m a k e d a m n s u r e" )
        {
            wins++;
            var audio = new Audio("assets/music/makedamnsure.mp3");
            audio.play();
            reset();
        }
        else if(rightLetterCounter == underScoreCounter && songName === "m e m o r y")
        {
            wins++;
            var audio = new Audio("assets/music/memory.mp3");
            audio.play();
            reset();
        }
        else if(rightLetterCounter == underScoreCounter && songName === "p a i n")
        {
            wins++;
            var audio = new Audio("assets/music/pain.mp3");
            audio.play();
            reset();
        }
        else if(rightLetterCounter == underScoreCounter && songName === "p i e c e s" )
        {
            wins++;
            var audio = new Audio("assets/music/pieces.mp3");
            audio.play();
            reset();
        }
        else if(guessesLeft == 0)
	    {
            losses++;
            var audio = new Audio("assets/music/boo.mp3");
            audio.play();
		    reset();
	    }




}
startGame();
document.onkeyup = function(event){
    /*
    1. its going to take in the letter that we type in
    2. its going to pass it through the CheckLetter function 
    */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("Player Guess:", letterGuessed)
    checkLetters(letterGuessed)
    songs();


}
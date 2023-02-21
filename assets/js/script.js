// 1) Make a paper rock scissors game
// 2) Receive user input & Generate computer input
// 3) List computer choice options & list acceptable user options & output based on (a) and (b)

/* 4 and final breakdown)

Declare computer array with playable options

Declare a win, draw and loss variable to store scores

Declare empty variable for user input, convert the input to lowercase

If input !== to accepted input ask again or alert

Declare a for-loop for computer answer based on the length, add mathFloor and mathRandom 
to select a random array

do a if statement, for each outcome and count them and store them on the score variables

Put the playabe part inside a while loop for <5 rounds

Alert of final score */

let win = 0;
let loss = 0;
let draw = 0;
let computerOptions = ["rock", "paper", "scissors"];
let computerInput = "";
let userInput = "";

let getUserChoice = function() {

    let playPrompt = prompt("What will you play?");
    
    userInput = playPrompt.toLowerCase()

    if (userInput !== "rock" && 
    userInput !== "paper" && 
    userInput !== "scissors") {
        alert("Please input either rock, paper or scissors");
    }

    else { 
        console.log("you have played " + userInput); //verification function works
        return userInput;
   }
    }
   
getUserChoice()

let getComputerChoice = function() {



    for (let i = 0; i < computerOptions.length; i++) {
            computerInput = Math.floor(Math.random() * computerOptions.length);
            console.log(computerInput);

    }




}
getComputerChoice()



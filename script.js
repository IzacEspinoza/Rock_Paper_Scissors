//Rock Paper Scissors!

//global booleans, to see who won a round, and so the fucntions may access it and change it
let playerWon = false;
let computerWon = false;

//event listeners for buttons
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            alert(button.id);//alerts the buttons id on a click
            
            //on button click, call the playRound(*with right playerSelection based on what button we pressed*)
            //pretty much 
            //click button --> get playersChoice(what button they clicked)--> compare to computers answer
            
        });
    });



//play round(pretty much compare the players and computers choices, see who won the round)
function playRound(playerPick, computerPick){
    
    /*********compare the players and computers answers*********/

    //if user picked rock and computer picked paper :
    if(playerPick.toUpperCase() == 'ROCK' && computerPick.toUpperCase() == 'PAPER'){//computer win
        //output that paper beats rock
        console.log("Computers " +  computerPick + " beats Players " + playerPick);
        
        //computer won, so computerWon is TRUE, playerWon is false;
        computerWon = true;
        playerWon = false;
    }
    //if user picked rock and computer picked scissors : 
    else if(playerPick.toUpperCase() == 'ROCK' && computerPick.toUpperCase() == 'SCISSORS'){//player win
        //output that rock beats paper
        console.log("Players " + playerPick + " beats Computers " + computerPick);

        //player won, so playerWon is TRUE, computerWon is now false
        playerWon = true;
        computerWon = false;
    }
    //if user picked scissors and computer picked paper :
    else if(playerPick.toUpperCase() == 'SCISSORS' && computerPick.toUpperCase() == 'PAPER'){//player win
        //output scissors beats paper
        console.log("Players " + playerPick + " beat Computers " + computerPick);

        //player won, so playerWon is TRUE, computerWon is now false
        playerWon = true;
        computerWon = false;
    }
    //if user picked paper and computer picked scissors :
    else if(playerPick.toUpperCase() == 'PAPER' && computerPick.toUpperCase() == 'SCISSORS'){//computer win
        //output scissors beat paper
        console.log("Computers " + computerPick + " beat Players " + playerPick);

        //computer won, so computerWon is TRUE, playerWon is now false
        computerWon = true;
        playerWon = false;
    }
    //if user picked scissors and computer picked rock : 
    else if(playerPick.toUpperCase() == 'SCISSORS' && computerPick.toUpperCase() == 'ROCK'){//computer win
        //output rock beats scissors
        console.log("Computers " + computerPick + " beats Players " + playerPick);

        //computer won, so computerWon is TRUE, playerWon is now false
        computerWon = true;
        playerWon  = false;
    }
    //if user picked paper and computer picked rock
    else if(playerPick.toUpperCase() == 'PAPER' && computerPick.toUpperCase() == 'ROCK'){//player win
        //out put paper beats rock
        console.log("Players " + playerPick + " beats Computers " + computerPick);

        //player won, so playerWon is TRUE, computerWon is now false;
        playerWon = true;
        computerWon = false;
    }
    //if user and computer both picked the same thing
    else if(playerPick.toUpperCase() == computerPick.toUpperCase() && computerPick.toUpperCase() == playerPick.toUpperCase()){//draw
        //both picked the same thing
        console.log("You both picked " + playerPick);

        //nobody won, so neither is true
        computerWon = false;
        playerWon = false;
    }
    //if whatever they put was not an option, or something else happen
    else{
        //tell they fucked up
        console.log("You fucked up.  Choose between rock, paper, or scissors fool!");

        //playerWon and computerWon are false, because we couldnt even get that far!
        playerWon = false;
        computerWon = false;
    }


}//end playRound

//computers picking
function computersPick(){

    //array of choices for comp to choose
    const moves = ["rock", "paper", "scissors"];

    //computers random choice
    let computerPick = "Random";

    //boundaries for the random number(first index of 'moves' array to the last index of it)
    let min = 0; max = 2;
    //get a random number, this line pretty much makes it so only 1-3 are included, will not return a 0, giving us an undefined
    let rando = Math.floor(Math.random() * (max - min + 1) + min);

    //get a random index from the 'moves' array, to get a random answer
    computerPick = moves[rando];

    //return the random answer
    return computerPick;

}//end computers

//players picking
function playersPick(){

    //prompt the player to input an answer, their input is then stored in the var 'playersChoice'
    let playersChoice = prompt("Rock, Paper, or Scissors?", "");
    //console.log(playersChoice);
    return playersChoice;
}//end players

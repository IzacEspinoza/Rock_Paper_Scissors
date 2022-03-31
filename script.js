//Rock Paper Scissors!

//global booleans, to see who won a round, and so the fucntions may access it and change it
let playerWon = false;
let computerWon = false;

//the game itself(calls playRound in here, playRound calls the player and computer selects)
function game(){

    //current round
    let round = 0;

    //scores
    let playerScore = 0;
    let computerScore = 0;

    

    //play 5 games, at the end see who has most points
    while(round < 5){

        //round started, so add 1 to counter
        round++;
        console.log("Round " + round);

        //player and computers picks
        let player = playersPick();
        let computer = computersPick();

        //call the playround function, output the winner of round
        playRound(player, computer);
        /** 
         give points to who won a round
         */

         //if computer won round, give them a point and display their score
         if(computerWon){
             //give them a point
             computerScore++;
             //print their current score
             console.log("Computer +" + computerScore);
         }
         //if player won the round, give them a point and display their score
         else if(playerWon){
             //give player a point
             playerScore++;
             //print players current score
             console.log("Player +" + playerScore);
         }
         //if whatever else happens, print this
         else{
             console.log("No points awarded");
         }

         //print current  scoreline
         console.log("Computer: " + computerScore + ", Player: " + playerScore);
        
        
    }//end gameplay loop

    //print finals scores
    console.log("FINAL: Computer: " + computerScore + ", Player: " + playerScore);

    //winner message
    if(playerScore > computerScore){
    console.log("Player wins the Game!");
    }else if(computerScore > playerScore){
        console.log("Computer wins the Game!");
    }else if(playerScore == computerScore || computerScore == playerScore){
        console.log("The game had ended in a DRAW!");
    }
    
    
}//end game

//play round(pretty much compare the players and computers choices, see who won the round)
function playRound(playerPick, computerPick){
    
    /*********compare the players and computers answers*********/
    //if user picked rock and computer picked paper :
    if(playerPick == 'rock' && computerPick == 'paper'){//computer win
        //output that paper beats rock
        console.log("Computers Paper beats Players Rock!");
        
        //computer won, so computerWon is TRUE, playerWon is false;
        computerWon = true;
        playerWon = false;
    }
    //if user picked rock and computer picked scissors : 
    else if(playerPick == 'rock' && computerPick == 'scissors'){//player win
        //output that rock beats paper
        console.log("Players Rock beats Computers Scissors!");

        //player won, so playerWon is TRUE, computerWon is now false
        playerWon = true;
        computerWon = false;
    }
    //if user picked scissors and computer picked paper :
    else if(playerPick == 'scissors' && computerPick == 'paper'){//player win
        //output scissors beats paper
        console.log("Players Scissors beat Computers Paper!");

        //player won, so playerWon is TRUE, computerWon is now false
        playerWon = true;
        computerWon = false;
    }
    //if user picked paper and computer picked scissors :
    else if(playerPick == 'paper' && computerPick == 'scissors'){//computer win
        //output scissors beat paper
        console.log("Computers Scissors beat Players Paper!");

        //computer won, so computerWon is TRUE, playerWon is now false
        computerWon = true;
        playerWon = false;
    }
    //if user picked scissors and computer picked rock : 
    else if(playerPick == 'scissors' && computerPick == 'rock'){//computer win
        //output rock beats scissors
        console.log("Computers Rock beats Players Scissors!");

        //computer won, so computerWon is TRUE, playerWon is now false
        computerWon = true;
        playerWon  = false;
    }
    //if user picked paper and computer picked rock
    else if(playerPick == 'paper' && computerPick == 'rock'){//player win
        //out put paper beats rock
        console.log("Players Paper beats Computers Rock!");

        //player won, so playerWon is TRUE, computerWon is now false;
        playerWon = true;
        computerWon = false;
    }
    //if user and computer both picked the same thing
    else if(playerPick == computerPick && computerPick == playerPick){//draw
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

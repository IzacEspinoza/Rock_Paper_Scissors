//Rock Paper Scissors!

// //our variables
// let round = 0;
//let player = playersPick();
// let computer = computersPick();
// let playerScore = 0;
// let computerScore = 0;
// const moves = ["Rock", "Paper", "Scissors"];


/************ FUNCTIONS ***************/

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

        //call the playround function, will call 5 times (hopefully)
        playRound(player, computer);

        /** pretty much works, just need a better console log to show who actually won round,
         * 
         * and need to give points to who won a round
         * 
         * and also need a conditional for if the round is a tie
         * 
         * also need to dispaly who picked what in the after round console log(e.g players rock beats computers scissors)
         */
        
        /****HERE, TRY PUTTIN THE SCORE UPDATING CODE FROM  PLAYROUND() IN THIS SECTION INSTEAD ******/
    }//end gameplay loop

    //winner message
    console.log("The winner is.....");
    
    
}//end game

//play round(pretty much compare the players and computers choices, see who won the round)
function playRound(playerPick, computerPick){
    
    /*********compare the players and computers answers*********/
    //if user picked rock and computer picked paper :
    if(playerPick == 'rock' && computerPick == 'paper'){//computer win
        //output that paper beats rock
        console.log("Computers Paper beats Players Rock!");
        // //give point to computer
        // computerScore += 1;
        // //print out the winners score
        // console.log(computerScore);
    }
    //if user picked rock and computer picked scissors : 
    else if(playerPick == 'rock' && computerPick == 'scissors'){//player win
        //output that rock beats paper
        console.log("Players Rock beats Computers Scissors!");
        // //give point to player
        // playerScore += 1;
        // //print out the winners score
        // console.log(playerScore);
    }
    //if user picked scissors and computer picked paper :
    else if(playerPick == 'scissors' && computerPick == 'paper'){//player win
        //output scissors beats paper
        console.log("Players Scissors beat Computers Paper!");
        // //give point to player
        // playerScore += 1;
        // //print out the winners score
        // console.log(playerScore);
    }
    //if user picked paper and computer picked scissors :
    else if(playerPick == 'paper' && computerPick == 'scissors'){//computer win
        //output scissors beat paper
        console.log("Computers Scissors beat Players Paper!");
        // //give computer a point
        // computerScore += 1;
        // //print out the winners score
        // console.log(computerScore);
    }
    //if user picked scissors and computer picked rock : 
    else if(playerPick == 'scissors' && computerPick == 'rock'){//computer win
        //output rock beats scissors
        console.log("Computers Rock beats Players Scissors!");
        // //give point to computer
        // computerScore += 1;
        // //print out the winners score
        // console.log(computerScore);
    }
    //if user picked paper and computer picked rock
    else if(playerPick == 'paper' && computerPick == 'rock'){//player win
        //out put paper beats rock
        console.log("Players Paper beats Computers Rock!");
        // //give point to player
        // playerScore += 1;
        // //print out the winners score
        // console.log(playerScore);
    }else if(playerPick == computerPick && computerPick == playerPick){
        //both picked the same thing
        console.log("You both picked " + playerPick);
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

//Rock Paper Scissors!

// //our variables
// let round = 0;
// let player = playersPick();
// let computer = computersPick();
// let playerScore = 0;
// let computerScore = 0;
// const moves = ["Rock", "Paper", "Scissors"];

/************ FUNCTIONS ***************/

//the game itself(calls playRound in here, playRound calls the player and computer selects)
function game(){
    //play the game until someone makes it to 5 points
    for(let i = 0; i < 5; i++){

        //  let round = 0;
        //  let player = playersPick();
        //  let computer = computersPick();

        //game started, so increase the round number
        //round++;
        //call the playround function
        //playRound(player, computer);
        
    }//end game
    
    
}//end game

//play round(pretty much compare the players and computers choices, see who won the round)
function playRound(playerPick, computerPick){
    
    //compare the players and computers answers
    


}//end playRound

//computers picking
function computersPick(){

    //array of choices for comp to choose
    const moves = ["Rock", "Paper", "Scissors"];

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

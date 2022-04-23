//Rock Paper Scissors!

//global booleans, to see who won a round
let playerWon = false;
let computerWon = false;

//grab our div 'results' 
const resultsContainer = document.querySelector('.results');
    //empty text tag that will display results after round
    const choices = document.createElement('p');
    resultsContainer.appendChild(choices);

//create another div for the current scorline
const scorline = document.createElement('div');
    //empty text to show the current score
    const score = document.createElement('p');

//List of buttons to get the users input/answer
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {

        //computers rando pick, for every button click
        let comps = computersPick();

        //if the buttons we click has THIS id
        if(button.id == 'rock'){
            //call playRound with choice
            console.log("You picked Rock, Computer picked " + comps);
            choices.textContent = "You picked " + button.id + ", Computer picked " + comps;
            
            playerWon == true;
        }
        else if(button.id == 'paper'){
            //call playRound with choice
            console.log("You picked Paper, Computer picked " + comps);
            choices.textContent = "You picked " + button.id + ", Computer picked " + comps;

             
        }
        else if(button.id == 'scissors'){
            //call playRound with choice
            console.log("You picked scissors, Computer picked " + comps);
            choices.textContent = "You picked " + button.id + ", Computer picked " + comps;

            
                
        }
            
        });
    });//end event listener

    


//game function

function game(){

    //scores
    let playerScore = 0; let compScore = 0;
    //game repeat
    let playAgain = false;

    while(playerScore <= 5 || compScore <= 5){
        playRound();
        playerScore += 1;
    }
   


    

}//end game










//players pick function
function playRound(){

}//end players

//computers picking, uses random number to spit out a random answer
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



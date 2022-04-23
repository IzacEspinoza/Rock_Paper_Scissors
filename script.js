//Rock Paper Scissors!

//global booleans, to see who won a round
let playerWon = false;
let computerWon = false;

//grab our div 'results' 
const resultsContainer = document.querySelector('.results');
const choices = document.createElement('p');
resultsContainer.appendChild(choices);

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


            playRound('rock', comps);  
        }
        else if(button.id == 'paper'){
            //call playRound with choice
            console.log("You picked Paper, Computer picked " + comps);
            choices.textContent = "You picked " + button.id + ", Computer picked " + comps;

            playRound('paper', comps); 
        }
        else if(button.id == 'scissors'){
            //call playRound with choice
            console.log("You picked scissors, Computer picked " + comps);
            choices.textContent = "You picked " + button.id + ", Computer picked " + comps;

            playRound('scissors', comps);
                
        }
            
        });
    });//end event listener

//play round(pretty much compare the players and computers choices, see who won the round)
function playRound(playerPick, computerPick){
    
    /*********compare the players and computers answers*********/

    //if user picked rock and computer picked paper :
    if(playerPick.toUpperCase() == 'ROCK' && computerPick.toUpperCase() == 'PAPER'){//computer win
        //output that paper beats rock
        console.log("Computer +1pt");
        
        //computer won, so computerWon is TRUE, playerWon is false;
        computerWon = true;
        playerWon = false;
    }
    //if user picked rock and computer picked scissors : 
    else if(playerPick.toUpperCase() == 'ROCK' && computerPick.toUpperCase() == 'SCISSORS'){//player win
        //output that rock beats paper
        console.log("Player +1pt");

        //player won, so playerWon is TRUE, computerWon is now false
        playerWon = true;
        computerWon = false;
    }
    //if user picked scissors and computer picked paper :
    else if(playerPick.toUpperCase() == 'SCISSORS' && computerPick.toUpperCase() == 'PAPER'){//player win
        //output scissors beats paper
        console.log("Players +1pt");

        //player won, so playerWon is TRUE, computerWon is now false
        playerWon = true;
        computerWon = false;
    }
    //if user picked paper and computer picked scissors :
    else if(playerPick.toUpperCase() == 'PAPER' && computerPick.toUpperCase() == 'SCISSORS'){//computer win
        //output scissors beat paper
        console.log("Computer +1pt");

        //computer won, so computerWon is TRUE, playerWon is now false
        computerWon = true;
        playerWon = false;
    }
    //if user picked scissors and computer picked rock : 
    else if(playerPick.toUpperCase() == 'SCISSORS' && computerPick.toUpperCase() == 'ROCK'){//computer win
        //output rock beats scissors
        console.log("Computer +1pt");

        //computer won, so computerWon is TRUE, playerWon is now false
        computerWon = true;
        playerWon  = false;
    }
    //if user picked paper and computer picked rock
    else if(playerPick.toUpperCase() == 'PAPER' && computerPick.toUpperCase() == 'ROCK'){//player win
        //out put paper beats rock
        console.log("Players +1pt");

        //player won, so playerWon is TRUE, computerWon is now false;
        playerWon = true;
        computerWon = false;
    }
    //if user and computer both picked the same thing
    else if(playerPick.toUpperCase() == computerPick.toUpperCase() && computerPick.toUpperCase() == playerPick.toUpperCase()){//draw
        //both picked the same thing
        console.log("Tie");

        //nobody won, so neither is true
        computerWon = false;
        playerWon = false;
    }
    //if whatever they put was not an option, or something else happen
    else{
        //tell they fucked up
        alert("I dont know how but you fucked up.....");

        //playerWon and computerWon are false, because we couldnt even get that far!
        playerWon = false;
        computerWon = false;
    }


}//end playRound

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



//Rock Paper Scissors!

//player and computers scores
let playerScore = 0
let computerScore = 0

//ref our buttons
const buttons = document.querySelectorAll('input')

//generate random pick for computers answer
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

//disables buttons after each game
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

//play a round, using the users selected button
function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    //if the players choice won over the computers,
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        //give the player a point, and display their choice compared to computers
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        //if user gets 5 points, they won, let them play again
        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    //if user and computer chose the same thing its a tie
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    //anything else, the computer must have won, so they get a point
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        //if the computer get 5 points, they win 
        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    //display to the DOM what the rounds result wass
    document.getElementById('result').innerHTML = result
    return
}

//add an event listener for each button, on click, call the playRound()
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
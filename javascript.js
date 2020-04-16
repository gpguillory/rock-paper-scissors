function computerChoice() {
                
    let min = Math.ceil(1);
    let max = Math.floor(3);
    Choice = Math.floor(Math.random() * (max - min + 1)) + min;

    if (Choice == 1) {
        console.log("The computer chose rock.");
        return "rock";
    } else if (Choice == 2) {
        console.log("The computer chose paper.");
        return "paper";
    } else if (Choice == 3) {
        console.log("The computer chose scissors.");
        return "scissors";
    } else return "Error: something is funky. Try again.";
}

function playerChoice(playerSelection) {

//    playerSelection = prompt("Let's play Rock, Paper, Scissors!  What's your choice?");
    if (playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors") {
        console.log("You chose " + playerSelection) + ".";
        document.write("You chose " + playerSelection + ".");
        return playerSelection.toLowerCase();
    } else console.log("Error: Please make a valid entry and try again.");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie! You both picked " + computerSelection + ".");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors.");
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock.");
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock.");
        return "You win! Paper beats Rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper.");
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors.");
        return "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats paper.");
        return "You win! Scissors beats paper.";
    }
}

//playRound(playerChoice(), computerChoice());
//const rockbtn = document.querySelector('.rock-button');
const rockbtnimg = document.querySelector('.rockbtnimg');

//rockbtn.addEventListener('click', function (e) {
//    playRound("rock", computerChoice());
//});

rockbtnimg.addEventListener('click', function (e) {
    playRound("rock", computerChoice());
});

//const paperbtn = document.querySelector('.paper-button');
const paperbtnimg = document.querySelector('.paperbtnimg');

//paperbtn.addEventListener('click', function (e) {
//    playRound("paper", computerChoice());
//});

paperbtnimg.addEventListener('click', function (e) {
    playRound("paper", computerChoice());
});

//const scissorsbtn = document.querySelector('.scissors-button');
const scissorsbtnimg = document.querySelector('.scissorsbtnimg');

//scissorsbtn.addEventListener('click', function (e) {
 //   playRound("scissors", computerChoice());
//});

scissorsbtnimg.addEventListener('click', function (e) {
    playRound("scissors", computerChoice());
});
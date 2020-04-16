function computerChoice() {
                
    let min = Math.ceil(1);
    let max = Math.floor(3);
    Choice = Math.floor(Math.random() * (max - min + 1)) + min;

    if (Choice == 1) {
        return "rock";
    } else if (Choice == 2) {
        return "paper";
    } else if (Choice == 3) {
        return "scissors";
    } 
}

function playRound(playerSelection, computerSelection) {
    
         if (playerSelection == computerSelection) {
            displayGameResults("It's a tie! You both picked " + computerSelection + ".");
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            displayGameResults("You win! Rock beats Scissors.");
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            displayGameResults("You lose! Paper beats Rock.");
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            displayGameResults("You win! Paper beats Rock.");
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            displayGameResults("You lose! Scissors beats paper.");
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            displayGameResults("You lose! Rock beats scissors.");
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            displayGameResults("You win! Scissors beats paper.");
        }
}
    


function displayGameResults (results) {
    document.getElementById("results").insertAdjacentHTML('afterend', '<br>' + results);
}

const rockbtnimg = document.querySelector('.rockbtnimg');
rockbtnimg.addEventListener('click', function (e) {
    playRound("rock", computerChoice());
});

const paperbtnimg = document.querySelector('.paperbtnimg');
paperbtnimg.addEventListener('click', function (e) {
    playRound("paper", computerChoice());
});

const scissorsbtnimg = document.querySelector('.scissorsbtnimg');
scissorsbtnimg.addEventListener('click', function (e) {
    playRound("scissors", computerChoice());
});
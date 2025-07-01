let choices = ["rock", "paper", "scissors"];
let results = ["You win!", "You lose!", "It's a tie!"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let x = Math.floor(Math.random() * choices.length);
    return choices[x];
}

function getPlayerChoice(){
    let choice;
    return choice = String(window.prompt("Enter Rock, Paper or Scissors", ""));
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log(results[2]);
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        console.log(results[0]);
        playerScore++;
    } else if (computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "paper" && playerChoice === "rock" ||
        computerChoice === "scissors" && playerChoice === "paper") {
        console.log(results[1]);
        computerScore++;
    }
}

function roundsToPlay() {
    let rounds;
    return rounds = prompt("How many rounds do you want to play?", "1");
}

function playGame(){
    let rounds = roundsToPlay();
    for (let i = 0; i < rounds; i++) {
        let PlayerChoice = getPlayerChoice().toLowerCase();
        if (!(PlayerChoice !== "rock" && PlayerChoice !== "paper" && PlayerChoice !== "scissors")) {
            console.log(`You chose: ${PlayerChoice}`);
            const computerChoice = getComputerChoice();
            console.log(`Computer chose: ${computerChoice}`);
            playRound(PlayerChoice, computerChoice);
            console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        } else {
            console.log("Invalid choice. Please pick rock, paper, or scissors.");
            i--;
        }
    }
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    console.log(`The winner is: ${playerScore === computerScore ? "tie" : (playerScore > computerScore ? "Player" : "Computer")}`)
    console.log("Game over!");
}
playGame();
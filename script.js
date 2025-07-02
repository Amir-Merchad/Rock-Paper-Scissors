let choices = ["rock", "paper", "scissors"];
let results = [`Player1 wins!`, "Player2 wins!", "It's a tie!"];
let player1Score = 0;
let player2Score = 0;
let player1Name = "";
let player2Name = "";

function getPlayer2Choice(name){
    if (name === "" || name === "Computer 2") {
        let x = Math.floor(Math.random() * choices.length);
        return choices[x];
    } else {
        return String(window.prompt("Enter Rock, Paper or Scissors", ""));
    }
}

function getPlayer1Choice(name){
    if (name === "" || name === "Computer 1") {
        let y = Math.floor(Math.random() * choices.length);
        return choices[y];
    } else {
        return String(window.prompt("Enter Rock, Paper or Scissors", ""));
    }
}

function computerName() {
    if (player1Name === "") {
        player1Name = "Computer 1";
    }
    if (player2Name === "") {
        player2Name = "Computer 2";
    }
}

function playRound(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        console.log(results[2]);
    } else if (player1Choice === "rock" && player2Choice === "scissors" ||
        player1Choice === "paper" && player2Choice === "rock" ||
        player1Choice === "scissors" && player2Choice === "paper") {
        console.log(results[0]);
        player1Score++;
    } else if (player2Choice === "rock" && player1Choice === "scissors" ||
        player2Choice === "paper" && player1Choice === "rock" ||
        player2Choice === "scissors" && player1Choice === "paper") {
        console.log(results[1]);
        player2Score++;
    }
}

function roundsToPlay() {
    return prompt("How many rounds do you want to play?", "1");
}

function playGame(){
    player1Name = prompt("Enter Player 1 name, leave blank for Computer", "Computer 1");
    player2Name = prompt("Enter Player 2 name, leave blank for Computer", "Computer 2");
    computerName()
    let rounds = roundsToPlay();
    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`);
        let player1Choice = getPlayer1Choice(player1Name).toLowerCase();
        let player2Choice = getPlayer2Choice(player2Name).toLowerCase();
        if (!(player1Choice !== "rock" && player1Choice !== "paper" && player1Choice !== "scissors") &&
            !(player2Choice !== "rock" && player2Choice !== "paper" && player2Choice !== "scissors")) {
            console.log(`${player1Name} chose: ${player1Choice}, ${player2Name} chose: ${player2Choice}`);
            playRound(player1Choice, player2Choice);
            console.log(`${player1Name} Score: ${player1Choice}, ${player2Name} Score: ${player2Choice}`);
        } else {
            console.log("Invalid choice. Please pick rock, paper, or scissors.");
            i--;
        }
    }
    console.log(`${player1Name} Score: ${player1Score}, ${player2Name} Score: ${player2Score}`);
    console.log(`${player1Score === player2Score ? " it's a tie" : (player1Score > player2Score ? `The winner is: ${player1Name}` : `The winner is: ${player2Name}`)}`)
    console.log("Game over!");
}
playGame();
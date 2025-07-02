let choices = ["rock", "paper", "scissors"];
let results = [`Player1 wins!`, "Player2 wins!", "It's a tie!"];
let player1Score = 0;
let player2Score = 0;
let player1Name = "";
let player2Name = "";

function getPlayer2Choice(name) {
    if (name === "Computer" || name === "Computer 2") {
        let x = Math.floor(Math.random() * choices.length);
        return choices[x];
    } else if (name === "Player" || name === "Player1" || name === "Player2") {
        alert("ERROR!")
    }
}

function getPlayer1Choice(name) {
    if (name === "Computer") {
        let y = Math.floor(Math.random() * choices.length);
        return choices[y];
    } else {
        return String(window.prompt("Enter Rock, Paper or Scissors", ""));
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

function playGame() {
    for (let i = 0; i < 5; i++) {
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

function humanVsComputer() {
    player1Name = 'Player'
    player2Name = "Computer";
    window.location.href = "game.html";
}

function humanVsHuman() {
    alert("Under construction, please try again later. :)");
    /*
    player1Name = 'Player1'
    player2Name = "Player2";
    window.location.href = "game.html";
    */
}

function computerVsComputer() {
    alert("Under construction, please try again later. :)");
    /*
    player1Name = 'Computer 1';
    player2Name = "Computer 2";
    window.location.href = "game.html";
    */
}
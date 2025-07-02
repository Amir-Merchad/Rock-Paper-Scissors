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
        let player1Choice = getPlayer1Choice(player1Name).toLowerCase();
        let player2Choice = getPlayer2Choice(player2Name).toLowerCase();
        playRound(player1Choice, player2Choice);
    }
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
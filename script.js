let choices = ["rock", "paper", "scissors"];
let results = [`Player1 wins!`, "Player2 wins!", "It's a tie!"];
let player1Score = 0;
let player2Score = 0;
let player1Name = "";
let player2Name = "";
let turn = 1;
let player1choice = "";
let player2choice = "";
let round = 0;
const p1score = document.querySelector(".p1-score");
const p2score = document.querySelector(".p2-score");
const winner = document.querySelector(".status");
const p1Weapon = document.querySelector(".p1-weapon");
const p2Weapon = document.querySelector(".p2-weapon");

function getPlayer1Choice(name) {
    if (name === "Computer") {
        let y = Math.floor(Math.random() * choices.length);
        if (choices[y] === "rock") {
            p1Weapon.textContent = "✊";
        } else if (choices[y] === "paper") {
            p1Weapon.textContent = "✋";
        } else if (choices[y] === "scissors") {
            p1Weapon.textContent = "✌️";
        }
        return choices[y];
    }
}

function getPlayer2Choice(name) {
    if (name === "Computer") {
        let x = Math.floor(Math.random() * choices.length);
        if (choices[x] === "rock") {
            p2Weapon.textContent = "✊";
        } else if (choices[x] === "paper") {
            p2Weapon.textContent = "✋";
        } else if (choices[x] === "scissors") {
            p2Weapon.textContent = "✌️";
        }
        return choices[x];
    }
}

function rock(){
    if (turn % 2 !== 0) {
        player1choice = "rock";
        p1Weapon.textContent = "✊";
        turn++;
        player2choice = getPlayer2Choice("Computer");
        turn++;
        playGame(player1choice, player2choice)
    } else {
        getPlayer1Choice("Computer");
        turn++;
        player2choice = "rock";
        p2Weapon.textContent = "✊";
        turn++;
        playGame(player1choice,player2choice)
    }
}

function paper(){
    if (turn % 2 !== 0) {
        player1choice = "paper";
        p1Weapon.textContent = "✋";
        turn++;
        player2choice = getPlayer2Choice("Computer");
        turn++;
        playGame(player1choice, player2choice)
    } else {
        getPlayer1Choice("Computer");
        turn++;
        player2choice = "paper";
        p2Weapon.textContent = "✋";
        turn++;
        playGame(player1choice,player2choice)
    }
}

function scissors(){
    if (turn % 2 !== 0) {
        player1choice = "scissors";
        p1Weapon.textContent = "✌️";
        turn++;
        player2choice = getPlayer2Choice("Computer");
        turn++;
        playGame(player1choice, player2choice)
    } else {
        getPlayer1Choice("Computer");
        turn++;
        player2choice = "scissors";
        p2Weapon.textContent = "✌️";
        turn++;
        playGame(player1choice,player2choice)
    }
}

function resetGame() {
    round = 0;
}

function playRound(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        winner.textContent = "It's a tie!";
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if (player1Choice === "rock" && player2Choice === "scissors"){
        winner.textContent = "Player 1 wins!";
        player1Score++;
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if(player1Choice === "paper" && player2Choice === "rock"){
        winner.textContent = "Player 1 wins!";
        player1Score++;
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if(player1Choice === "scissors" && player2Choice === "paper") {
        winner.textContent = "Player 1 wins!";
        player1Score++;
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if (player2Choice === "rock" && player1Choice === "scissors"){
        winner.textContent = "Player 2 wins!";
        player2Score++;
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if (player2Choice === "paper" && player1Choice === "rock"){
        winner.textContent = "Player 2 wins!";
        player2Score++;
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if (player2Choice === "scissors" && player1Choice === "paper") {
        winner.textContent = "Player 2 wins!";
        player2Score++;
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    }
}

function playGame(player1Choice, player2Choice) {
    playRound(player1Choice, player2Choice);
    if (player1Score === 5 || player2Score === 5) {
        if (player1Score > player2Score) {
            alert(`${player1Name} wins the game!`);
        } else if (player2Score > player1Score) {
            alert(`${player2Name} wins the game!`);
        } else {
            alert("It's a tie!");
        }
        resetGame();
        player1Score = 0;
        player2Score = 0;
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
        winner.textContent = "Game Over!";
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
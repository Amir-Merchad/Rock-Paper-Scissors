let choices = ["rock", "paper", "scissors"];
let player1Score = 0;
let player2Score = 0;
let player1Name = "";
let player2Name = "";
let turn = 1;
let player1Choice = "none";
let player2Choice = "none";
let round = 0;
const p1score = document.querySelector(".p1-score");
const p2score = document.querySelector(".p2-score");
const win = document.querySelector(".status");
const p1Weapon = document.querySelector(".p1-weapon");
const p2Weapon = document.querySelector(".p2-weapon");
const winner = document.querySelector(".winner");

function getplayer1Choice(name) {
    if (name === "Computer") {
        let y = Math.floor(Math.random() * choices.length);
        if (player1Choice === "rock") {
            p1Weapon.textContent = "✊";
        } else if (player1Choice === "paper") {
            p1Weapon.textContent = "✋";
        } else if (player1Choice === "scissors") {
            p1Weapon.textContent = "✌️";
        }
        return choices[y];
    }
}

function getplayer2Choice(name) {
    if (name === "Computer") {
        let x = Math.floor(Math.random() * choices.length);
        if (player2Choice === "rock") {
            p2Weapon.textContent = "✊";
        } else if (player2Choice === "paper") {
            p2Weapon.textContent = "✋";
        } else if (player2Choice === "scissors") {
            p2Weapon.textContent = "✌️";
        }
        return choices[x];
    }
}

function rock(){
    if (player1Score < 5 && player2Score < 5) {
        if (turn % 2 !== 0) {
            player1Choice = "rock";
            p1Weapon.textContent = "✊";
            turn++;
            player2Choice = getplayer2Choice("Computer");
            turn++;
            playGame(player1Choice, player2Choice)
        } else {
            getplayer1Choice("Computer");
            turn++;
            player2Choice = "rock";
            p2Weapon.textContent = "✊";
            turn++;
            playGame(player1Choice, player2Choice)
        }
    } else {
        winner.textContent = "Press restart to play again.";
    }
}

function paper(){
    if (player1Score < 5 && player2Score < 5) {
        if (turn % 2 !== 0) {
            player1Choice = "paper";
            p1Weapon.textContent = "✋";
            turn++;
            player2Choice = getplayer2Choice("Computer");
            turn++;
            playGame(player1Choice, player2Choice)
        } else {
            getplayer1Choice("Computer");
            turn++;
            player2Choice = "paper";
            p2Weapon.textContent = "✋";
            turn++;
            playGame(player1Choice,player2Choice)
        }
    } else {
        winner.textContent = "Press restart to play again.";
    }
}

function scissors(){
    if (player1Score < 5 && player2Score < 5) {
        if (turn % 2 !== 0) {
            player1Choice = "scissors";
            p1Weapon.textContent = "✌️";
            turn++;
            player2Choice = getplayer2Choice("Computer");
            turn++;
            playGame(player1Choice, player2Choice)
        } else {
            getplayer1Choice("Computer");
            turn++;
            player2Choice = "scissors";
            p2Weapon.textContent = "✌️";
            turn++;
            playGame(player1Choice, player2Choice)
        }
    } else {
        winner.textContent = "Press restart to play again.";
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    p1score.textContent = "Player 1: " + player1Score.toString();
    p2score.textContent = "Player 2: " + player2Score.toString();
}

function playRound(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        win.textContent = "It's a tie!";
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
        winner.textContent = "No one wins this round!";
    } else if (player1Choice === "rock" && player2Choice === "scissors"){
        win.textContent = "Player 1 wins!";
        player1Score++;
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
        winner.textContent = "rock crushes scissors!";
    } else if(player1Choice === "paper" && player2Choice === "rock"){
        win.textContent = "Player 1 wins!";
        player1Score++;
        winner.textContent = "paper covers rock!";
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if(player1Choice === "scissors" && player2Choice === "paper") {
        win.textContent = "Player 1 wins!";
        player1Score++;
        winner.textContent = "scissors cut paper!";
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if (player2Choice === "rock" && player1Choice === "scissors"){
        win.textContent = "Player 2 wins!";
        player2Score++;
        winner.textContent = "rock crushes scissors!";
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if (player2Choice === "paper" && player1Choice === "rock"){
        win.textContent = "Player 2 wins!";
        player2Score++;
        winner.textContent = "paper covers rock!";
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    } else if (player2Choice === "scissors" && player1Choice === "paper") {
        win.textContent = "Player 2 wins!";
        player2Score++;
        winner.textContent = "scissors cut paper!";
        p1score.textContent = "Player 1: " + player1Score.toString();
        p2score.textContent = "Player 2: " + player2Score.toString();
    }
}

function playGame(player1Choice, player2Choice) {
    playRound(player1Choice, player2Choice);
    if (player1Score >= 5 || player2Score >= 5) {
        winner.textContent = "Press restart to play again.";
    } else if (player1Score === 5 || player2Score === 5) {
        if (player1Score > player2Score) {
            winner.textContent = ``;
            win.textContent = `${player1Name} wins the game!`;
        } else if (player2Score > player1Score) {
            winner.textContent = ``;
            win.textContent = `${player2Name} wins the game!`;
        } else {
            winner.textContent = ``;
            win.textContent = `it's a tie!`;
        }
        win.textContent = "Game Over!";
    }
}

function humanVsComputer() {
    window.location.href = "game.html";
    player1Name = 'Player'
    player2Name = "Computer";
}

function humanVsHuman() {
    window.location.href = "#";
    player1Name = 'Player1'
    player2Name = "Player2";
}

function computerVsComputer() {
    window.location.href = "game.html";
    player1Score = 0;
    player2Score = 0;
    round = 0;
    player1Name = "Computer 1";
    player2Name = "Computer 2";
    computerPlay();
}

function roundDone() {
    if (player1Score < 5 && player2Score < 5) {
        if (player1Choice === "rock") {
            p1Weapon.textContent = "✊";
        } else if (player1Choice === "paper") {
            p1Weapon.textContent = "✋";
        } else if (player1Choice === "scissors") {
            p1Weapon.textContent = "✌️";
        }
        if (player2Choice === "rock") {
            p2Weapon.textContent = "✊";
            playGame(player1Choice, player2Choice);
        } else if (player2Choice === "paper") {
            p2Weapon.textContent = "✋";
            playGame(player1Choice, player2Choice);
        } else if (player2Choice === "scissors") {
            p2Weapon.textContent = "✌️";
            playGame(player1Choice, player2Choice);
        }
    }
}

function computerPlay() {
    if (round % 2 === 0) {
        let x = Math.floor(Math.random() * choices.length);
        if (x === 0) {
            player1Choice = "rock";
            round++;
        } else if (x === 1) {
            player1Choice = "paper";
            round++;
        } else if (x === 2) {
            player1Choice = "scissors";
            round++;
        }
    } else if (round % 2 !== 0) {
        let y = Math.floor(Math.random() * choices.length);
        if (y === 0) {
            player2Choice = "rock";
            round++;
            roundDone();
        } else if (y === 1) {
            player2Choice = "paper";
            round++;
            roundDone();
        } else if (y === 2) {
            player2Choice = "scissors";
            round++;
            roundDone();
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-enter');
    requestAnimationFrame(() => {
        document.body.classList.add('page-enter-active');
    });
});

// Function to handle transition + navigation
function navigateWithFade(url) {
    document.body.classList.add('page-exit');
    requestAnimationFrame(() => {
        document.body.classList.add('page-exit-active');
    });
    setTimeout(() => {
        window.location.href = url;
    }, 400); // match with CSS transition duration
}

// Attach event listeners to all buttons or links you want to have this effect
document.querySelectorAll('button[data-fade-link], a[data-fade-link]').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        const url = elem.getAttribute('data-fade-link') || elem.href;
        if (url) {
            navigateWithFade(url);
        }
    });
});
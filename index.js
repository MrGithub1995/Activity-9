// Get the buttons, the result paragraph, the score elements, and the match history element

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const historyList = document.getElementById("historyList");

let playerWins = 0;
let computerWins = 0;

// Add event listeners to the buttons

rockButton.addEventListener("click", () => play("rock"));
paperButton.addEventListener("click", () => play("paper"));
scissorsButton.addEventListener("click", () => play("scissors"));

// Define the play function

function play(playerMove) {
    // Generate a random move for the computer
    const computerMove = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

    // Determine the winner
    let winner;
    if (playerMove === computerMove) {
      winner = "tie";
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      winner = "player";
    } else {
      winner = "computer";
    }

    // Update the score and match history
    if (winner === "tie") {
      result.textContent = "It's a tie!";
    } else if (winner === "player") {
      result.textContent = `You win! ${playerMove} beats ${computerMove}.`;
      playerWins++;
    } else {
      result.textContent = `You lose! ${computerMove} beats ${playerMove}.`;
      computerWins++;
    }
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    matchHistory.innerHTML += `<li>${playerMove} vs. ${computerMove}: ${winner}</li>`;
  }
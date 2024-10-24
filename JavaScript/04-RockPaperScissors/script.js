let playerScore = 0;
let computerScore = 0;

// Function that generates a random choice from the computer (Rock, Paper, or Scissors)
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else return "scissors";
}

// Function to play one round of the game
function playRound(humanSelection) {
  const computerSelection = getComputerChoice(); // Get computer choice
  let result = "";

  if (humanSelection === computerSelection) {
    result = "It's a Tie!";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${humanSelection} beats ${computerSelection}.`;
    playerScore++;
  } else {
    result = `You lose! ${computerSelection} beats ${humanSelection}.`;
    computerScore++;
  }

  document.getElementById("result").textContent = result;

  document.getElementById(
    "score"
  ).textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5) {
    document.getElementById("winner").textContent = "The Player Wins";
    disableButtons();
  } else if (computerScore === 5) {
    document.getElementById("winner").textContent = "The Computer Wins";
    disableButtons();
  }

  function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }

}

// Add event listeners to the buttons
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors"));

// Variables
let computerScore = 0;
let playerScore = 0;
let round = 1;

// Ui
// Vars
const startBtn = document.getElementById("gm-start");
const gameHero = document.querySelector(".gm-hero");
const gameCanvas = document.getElementById("gm-canvas");
const roundTitle = document.getElementById("round-title");
const choicesBtn = document.querySelectorAll(".gm-choice");
const plrChs = document.getElementById("plr-chs");
const cmpChs = document.getElementById("cmp-chs");
const roundWinner = document.getElementById("round-winner");
const playerSc = document.getElementById("player-sc");
const computerSc = document.getElementById("computer-sc");
const gameWinner = document.getElementById("gm-winner");
const gameEnd = document.querySelector(".gm-end");
const gameEndBtn = document.querySelector(".gm-restart");

// Functions
// eventListeners
startBtn.addEventListener("click", resetGame);

choicesBtn.forEach((btn) => {
  btn.addEventListener("click", playRound);
});

gameEndBtn.addEventListener("click", resetGame);
// utilities
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  return getChoice(randomNum);
}

function getChoice(x) {
  let choice;
  switch (x) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
      break;
    default:
      choice = "Error";
  }
  return choice;
}

function playRound(e) {
  let humanChoice = getChoice(parseInt(e.target.value));
  let computerChoice = getComputerChoice();
  if (humanChoice == "Error" || humanChoice == "Error") {
    console.log("An error happened, please try again.");
    return;
  }
  plrChs.innerText = humanChoice;
  cmpChs.innerText = computerChoice;
  if (humanChoice == "Rock") {
    if (computerChoice == "Rock") {
      roundWinner.innerText = "No one, Its a Tie!";
    } else if (computerChoice == "Paper") {
      roundWinner.innerText = "The Computer! - Paper beats Rock!";
      computerScore++;
    } else {
      roundWinner.innerText = "You! - Rock beats Scissors!";
      playerScore++;
    }
  } else if (humanChoice == "Paper") {
    if (computerChoice == "Paper") {
      roundWinner.innerText = "No one, Its a Tie!";
    } else if (computerChoice == "Rock") {
      roundWinner.innerText = "You! - Paper beats Rock!";
      playerScore++;
    } else {
      roundWinner.innerText = "The Computer! - Scissors beats Paper!";
      computerScore++;
    }
  } else {
    if (computerChoice == "Scissors") {
      roundWinner.innerText = "No one, Its a Tie!";
    } else if (computerChoice == "Rock") {
      roundWinner.innerText = "The Computer! - Rock beats Scissors!";
      computerScore++;
    } else {
      roundWinner.innerText = "You! - Scissors beats Paper!";
      playerScore++;
    }
  }
  round++;
  roundTitle.innerText = round;
  playerSc.innerText = playerScore;
  computerSc.innerText = computerScore;
  checkGame();
}

function checkGame() {
  if (round == 6) {
    gameCanvas.classList.add("hidden");
    gameEnd.classList.remove("hidden");
    let winner;
    if (computerScore > playerScore) {
      winner = "The Computer!";
    } else {
      winner = "You!";
    }
    gameWinner.innerText = winner;
  }
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  round = 1;
  plrChs.innerText = "";
  cmpChs.innerText = "";
  roundWinner.innerText = "";
  roundTitle.innerText = round;
  playerSc.innerText = playerScore;
  computerSc.innerText = computerScore;
  gameHero.classList.add("hidden");
  gameCanvas.classList.remove("hidden");
  gameEnd.classList.add("hidden");
}

// Start the game
// playGame();

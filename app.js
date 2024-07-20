// Variables
let computerScore = 0;
let playerScore = 0;

// Ui

// Functions

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  return getChoice(randomNum);
}

function getHumanChoice() {
  let choiceNum = parseInt(
    prompt(`Choose your move:
        1.Rock
        2.Paper
        3.Scissors`)
  );
  return getChoice(choiceNum);
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

function playRound(humanChoice, computerChoice, round) {
  if (humanChoice == "Error" || humanChoice == "Error") {
    console.log("An error happened, please try again.");
    return;
  }
  console.log(
    "##############################################\nRound number: " + round
  );
  console.log("You chose: " + humanChoice);
  console.log("Computer chose: " + computerChoice);
  if (humanChoice == "Rock") {
    if (computerChoice == "Rock") {
      console.log("Tie, no one wins.");
      return;
    } else if (computerChoice == "Paper") {
      console.log("Computer Wins, Paper beats Rock!");
      computerScore++;
      return;
    } else {
      console.log("You Win, Rock beats Scissors!");
      playerScore++;
      return;
    }
  } else if (humanChoice == "Paper") {
    if (computerChoice == "Paper") {
      console.log("Tie, no one wins.");
      return;
    } else if (computerChoice == "Rock") {
      console.log("You Win, Paper beats Rock!");
      playerScore++;
      return;
    } else {
      console.log("Computer Wins, Scissors beats Paper!");
      computerScore++;
      return;
    }
  } else {
    if (computerChoice == "Scissors") {
      console.log("Tie, no one wins.");
      return;
    } else if (computerChoice == "Rock") {
      console.log("Computer Wins, Rock beats Scissors!");
      computerScore++;
      return;
    } else {
      console.log("You Win, Scissors beats Paper!");
      playerScore++;
      return;
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice(), i + 1);
  }
  console.log("##############################################\n");
  if (computerScore > playerScore) {
    console.log("The computer has won the tournament!!");
  } else {
    console.log("You have won the tournament!!");
  }
  computerScore = 0;
  playerScore = 0;
}

// Start the game
// playGame();

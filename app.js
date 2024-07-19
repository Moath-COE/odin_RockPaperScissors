// Functions

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let choice;
  switch (randomNum) {
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

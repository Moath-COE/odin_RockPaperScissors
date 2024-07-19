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

const generateNumber = () => Math.random();

const computerChoice = (number) => {
  if (number > 0 && number <= 0.3333) {
    return "Rock";
  } else if (number > 0.3333 && number <= 0.6666) {
    return "Paper";
  } else if (number > 0.6666 && number < 1) {
    return "Scissors";
  }
};

/* the above deals with the computers selection. This is passed into 
   the main function at the bottom
*/

const rockButton = document.getElementById("rock-button-id");
const paperButton = document.getElementById("paper-button-id");
const scissorsButton = document.getElementById("scissors-button-id");

rockButton.addEventListener("click", () => {
  const computerChoiceResult = computerChoice(generateNumber());
  getResult("Rock", computerChoiceResult);
});

paperButton.addEventListener("click", () => {
  const computerChoiceResult = computerChoice(generateNumber());
  getResult("Paper", computerChoiceResult);
});

scissorsButton.addEventListener("click", () => {
  const computerChoiceResult = computerChoice(generateNumber());
  getResult("Scissors", computerChoiceResult);
});

/* The above deals with the players choice. The player clicks a button choosing 
   rock, paper or scissors. This is passed into the main function to be compared 
   with the computers choice to get a result.
*/

/* The below handles the game by comparing the users choice 
   with the computer choice
*/

const getResult = (playerChoice, computerChoice) => {
  let result;

  if (playerChoice === computerChoice) {
    console.log(
      `You chose ${playerChoice}. The Computer chose ${computerChoice}. Tie`
    );
    result = "Tie";
    ties++;
    totalTies.textContent = ties;
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(
      `You chose ${playerChoice}. The Computer chose ${computerChoice}. You Win`
    );
    result = "You Win";
    playerScore++;
    playerTotalScore.textContent = playerScore;
  } else {
    console.log(
      `You chose ${playerChoice}. The Computer chose ${computerChoice}. You Lose`
    );
    result = "You Lose";
    computerScore++;
    computerTotalScore.textContent = computerScore;
  }

  const message = 
  `You chose ${playerChoice}. 
  <br><br>
  The Computer chose ${computerChoice}. 
  <br><br>
  ${result}`;
  displayMessage.innerHTML = message;
  gameResetMessage.innerHTML = ''
  return result;
};

let playerScore = 0;
let computerScore = 0;
let ties = 0;

const playerTotalScore = document.getElementById("player-score");
const computerTotalScore = document.getElementById("computer-score");
const totalTies = document.getElementById("total-ties");
const resetButton = document.getElementById("reset-score-button");
const displayMessage = document.getElementById("message-display");
const gameResetMessage = document.getElementById("game-reset-message")

const resetScores = () => {
  playerScore = 0;
  computerScore = 0;
  ties = 0;

  playerTotalScore.textContent = playerScore;
  computerTotalScore.textContent = computerScore;
  totalTies.textContent = ties;
  const message = 'Game has been reset'
  gameResetMessage.innerHTML = message
  displayMessage.innerHTML = ''
};

resetButton.addEventListener("click", resetScores);

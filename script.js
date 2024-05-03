console.log("Hello Player");

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getComputerChoice() {
  const values = ["rock", "paper", "scissors"];
  return values[getRandomInt(values.length)];
}

function getHumanChoice() {
  const choice = prompt("Make a choice: ");
  console.log(`Human choose: ${choice}`);
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log(`Lucky you! Computer chose Rock!`);
    }
    else if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock!");
      computerScore++;
    }
    else {
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    }
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "paper") {
      console.log(`Lucky you! Computer chose Paper!`);
    }
    else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper!");
      computerScore++;
    }
    else {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    }
  }
  else if (humanChoice === "scissos") {
    if (computerChoice === "scissos") {
      console.log(`Lucky you! Computer chose Scissors!`);
    }
    else if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors!");
      computerScore++;
    }
    else {
      console.log("You win! Scissors beats Paper.");
      humanScore++;
    }
  }
  else {
    console.log("Your choice is wrong, please choose Rock, Paper or Scissors!");
  }

  return {humanScore, computerScore};
}

function playGame(round=5) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i<round; i++) {
    console.log(`Round ${i+1} begins!`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let score = playRound(humanSelection, computerSelection, humanScore, computerScore);
    humanScore = score.humanScore;
    computerScore = score.computerScore;
  }

  console.log(`Scoreboard: Computer ${computerScore} - ${humanScore} Human`);
  if (humanScore > computerScore) {
    console.log("You win!");
  }
  else if (humanScore < computerScore) {
    console.log("Computer wins!")
  }
  else console.log("We have the same score.");
}

playGame();
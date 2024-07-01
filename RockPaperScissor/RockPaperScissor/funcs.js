let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");
let outputField = document.getElementById("spanId");
let clearButton = document.getElementById("clearBtn");
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const computerOptions = ["rock", "paper", "scissor"];
let finalResult = document.getElementById("result");
let cresult = document.getElementById("computerResult");
finalResult.style.textDecoration = "underline";
let gameCount = document.getElementById("count");
let movePara = document.getElementById("moves");
let moves = 0;
let playerWins = 0;
let computerWins = 0;

playerOptions.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});

clearButton.addEventListener("click", () => {
  outputField.innerText = "";
  cresult.innerText = "";
  finalResult.innerText = "";
  gameCount.innerText = "10";
  gameCount.style.color = "black";
  movePara.style.color = "black";
  moves = 0;
  playerWins = 0;
  computerWins = 0;
});

const game = (playerChoice) => {
  if (moves >= 10) {
    finalResult.innerText = `Game Over: Maximum moves reached.\n You Win: ${playerWins}, Computer Win: ${computerWins}`;
    return;
  }

  const choiceNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[choiceNumber];
  moves++;

  if (moves > 0 && moves <= 10) {
    gameCount.innerText = `${10 - moves}`;
  }

  winner(playerChoice, computerChoice);

  if (moves === 10) {
    finalResult.innerText = `Game Over: Maximum moves reached.\n You Win: ${playerWins}, Computer Win: ${computerWins}`;
    movePara.style.color = "red";
    gameCount.style.color = "red";
  }
};

const winner = (player, computer) => {
  outputField.innerText = `You chose ${player}.`;
  cresult.innerText = `Computer chose ${computer}.`;

  if (player === computer) {
    finalResult.innerText = "Result: Match Drawn";
  } else if (player === "rock") {
    if (computer === "scissor") {
      finalResult.innerText = "Result: You won the game";
      playerWins++;
    } else {
      finalResult.innerText = "Result: Computer won the game";
      computerWins++;
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      finalResult.innerText = "Result: You won the game";
      playerWins++;
    } else {
      finalResult.innerText = "Result: Computer won the game";
      computerWins++;
    }
  } else if (player === "scissor") {
    if (computer === "paper") {
      finalResult.innerText = "Result: You won the game";
      playerWins++;
    } else {
      finalResult.innerText = "Result: Computer won the game";
      computerWins++;
    }
  }
};

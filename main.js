const choices = ["rock", "papper", "scissors"];
const buttons = document.querySelectorAll("button");
let playersDisplay = document.querySelector(".playersDisplay");
let computersDisplay = document.querySelector(".computersDisplay");
let roundResult = document.querySelector(".roundResult");
const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
const computerScoreDisplay = document.querySelector('.computerScoreDisplay');
let gameOver = document.querySelector(".gameOver");
let playerScore = 0;
let computerScore = 0;
let reset = document.querySelector(".reset");




function getComputersChoice () {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  computersDisplay.innerHTML = choice;
}

buttons.forEach((button) => {
  button.addEventListener(("click"), () => {
    
    playersDisplay.innerHTML = button.id;
    getComputersChoice();
    roundResult.innerHTML = playRound(playersDisplay.innerHTML, computersDisplay.innerHTML);
    let result = checkWinner(playersDisplay.innerHTML, computersDisplay.innerHTML);
    if (result === `Player`){
      playerScore +=1;
    }
    else if (result === `Computer`){
      computerScore+=1;
    }
    playerScoreDisplay.innerHTML = `Player ${playerScore}`;
    computerScoreDisplay.innerHTML = `Computer ${computerScore} `;

    if (playerScore == 5 || computerScore == 5){
      gameOver.innerHTML = "Game Over";
      reset.classList.remove("disabled");
      button.parentElement.classList.add("disabled");
    }
    
  })
})

function checkWinner(playersChoice, computersChoice){
  if (playersChoice == computersChoice) {
    return "Tie";
  }

  else if (playersChoice == "rock"){
    if (computersChoice == "papper"){
      return `Computer`;
    }
    else if (computersChoice == "scissors"){
      return `Player`;
    }
  }

  else if (playersChoice == "papper"){
    if (computersChoice == "scissors"){
      return `Computer`;
    }
    else if (computersChoice == "rock"){
      return `Player`;
    }
  }

  else if (playersChoice == "scissors"){
    if (computersChoice == "rock"){
      return `Computer`;
    }
    else if (computersChoice == "papper"){
      return `Player`;
    }
  }
}

function playRound(playersChoice, computersChoice){
  const result = checkWinner(playersChoice, computersChoice)
  if (result == `Tie`){
    return "It's a tie, no winner";
  }
  else if (result == `Player`) {
    return `${playersChoice} beats ${computersChoice}, player wins`;
  }
  else if (result == `Computer`){
    return `${computersChoice} beats ${playersChoice}, computer wins`;
  }
}

function restartGame(){
  playerScore = 0;
  computerScore = 0;
  reset.classList.add("disabled");
  playersDisplay.innerHTML = "";
  computersDisplay.innerHTML = "";
  roundResult.textContent = "Waiting...";
  gameOver.innerHTML = "";
  let buttonsClass = document.querySelector(".buttons");
  buttonsClass.classList.remove("disabled");
}  




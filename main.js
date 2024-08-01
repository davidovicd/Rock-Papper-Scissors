const choices = ["rock", "papper", "scissors"];



function getComputerChoice () {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer choose ${choice}`);
  return choice;
}

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

function getPlayersChoice() {
  let input = false;
  while (input == false) {
    const choiceInput = prompt("Rock, Papper, scissors");
    if (choiceInput == null) {
      continue;
    }
    const choice = choiceInput.toLowerCase();
    if (choices.includes(choice)){
      input = true;
      console.log(`Player choose ${choice}`);
      return choice;
    }
  }
}

function game() {
  let playerScore = 0;
  let computersScore = 0;
  console.log("Welcome to the game");
  for (let i = 1; i<= 5; i++){
    console.log(`Current score is Player ${playerScore} : ${computersScore} Computer Round ${i}...`);
    const playersChoice = getPlayersChoice();
    const computersChoice = getComputerChoice();
    console.log(playRound(playersChoice, computersChoice)); 
    const result = checkWinner(playersChoice, computersChoice);
    if (result == "Computer") {
      computersScore++;
    }
    else if (result == "Player"){
      playerScore++;
    }
  }
  console.log("----------------------------------------------------------------------------");
  console.log("Game over");
  if (playerScore > computersScore){
    console.log("Player wins");
  }
  else if (computersScore > playerScore){
    console.log("Computer wins");
  }
  console.log(`Final score is Player ${playerScore} : ${computersScore} Computer`);
}

game();


// get computers choice
function getComputersChoice(){
  let options = ["rock", "papper", "scissors"]
  let computersChoice = options[Math.floor(Math.random() * options.length)]
  console.log(computersChoice);
  return computersChoice
}

// compare choices
function playRound(){
  // get players choice
  const playersChoice = prompt("Please insert your choice, rock, papper or scissors: ")
  const computersChoice = getComputersChoice()
  
  // do not put the winer to the console  to the console, just return the value

  // player choose rock
  if (playersChoice.toLowerCase() == "rock"){
    if (computersChoice == "rock"){
      return `It's a draw`
    }
    else if (computersChoice == "papper"){
      return `You lose papper beats rock`
    }
    else {
      return `You win, rock crushes scissors`
    }
  } 
  
  // player choose papper
  else if (playersChoice.toLowerCase() == "papper"){
    if (computersChoice == "papper"){
      return `It's a draw`
    }
    else if (computersChoice == "rock"){
      return `You win papper beats rock`
    }
    else {
      return `You lose, scissors cut papper`
    }
  }
  
  // player choose scissors
  else {
    if (computersChoice == "scissors"){
      return `It's a draw`
    }
    else if (computersChoice == "rock") {
      return `You lose, rock crushes scissors`
    }
    else {
      return `You win, scissors cut papper`
    }
  }
}

// play 5 rounds of game
function game(){
  for (let round = 1; round <= 5; round++){
    console.log(playRound());
  }
}

game()




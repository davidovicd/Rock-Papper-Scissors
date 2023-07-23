


// get computers choice
function getComputersChoice(){
  let options = ["rock", "papper", "scissors"]
  let computersChoice = options[Math.floor(Math.random() * options.length)]
  console.log(computersChoice);
  return computersChoice
}

let playersScore = 0
let computersScore = 0

// compare choices
function playRound(playersChoice, computersChoice){
  playersChoice = prompt("Please insert your choice, rock, papper or scissors: ")
  computersChoice = getComputersChoice()
  // do not put the winer to the console  to the console, just return the value

  // player choose rock
  if (playersChoice.toLowerCase() == "rock"){
    if (computersChoice == "rock"){
      return `It's a draw`
    }
    else if (computersChoice == "papper"){
      computersScore += 1
      return `You lose papper beats rock`
    }
    else {
      playersScore += 1
      return `You win, rock crushes scissors`
    }
  } 
  
  // player choose papper
  else if (playersChoice.toLowerCase() == "papper"){
    if (computersChoice == "papper"){
      return `It's a draw`
    }
    else if (computersChoice == "rock"){
      playersScore += 1
      return `You win papper beats rock`
    }
    else {
      computersScore += 1
      return `You lose, scissors cut papper`
    }
  }
  
  // player choose scissors
  else {
    if (computersChoice == "scissors"){
      return `It's a draw`
    }
    else if (computersChoice == "rock") {
      computersScore += 1
      return `You lose, rock crushes scissors`
    }
    else {
      playersScore += 1
      return `You win, scissors cut papper`  
    }
  }
}


// play 5 rounds of game
function game(){
  for (let round = 1; round <= 5; round++){
    console.log(`Round ${round} current score is Player: ${playersScore} - Computer ${computersScore}`);
    console.log(playRound());
  }
  console.log(`Game over after 5 rounds final score is: Player ${playersScore} - Computer ${computersScore}`);
}

game()





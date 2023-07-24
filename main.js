let buttons = document.querySelectorAll("button")
let playersScore = 0
let computersScore = 0
let round = 1

// get computers choice
function getComputersChoice(){
  let options = ["rock", "papper", "scissors"]
  let computersChoice = options[Math.floor(Math.random() * options.length)]
  return computersChoice
}

// compare two choices
// compare choices
function playRound(playersChoice, computersChoice){

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



buttons.forEach((button) => {
  button.addEventListener("click", ()=>{
    let roundNumber = document.querySelector(".roundNumber")
    roundNumber.textContent = `Round ${round}...`
    let roundResult = document.querySelector(".roundResult")
    roundResult.textContent = `${playRound(button.id, getComputersChoice())}`
    let score = document.querySelector(".score")
    score.textContent = `Current score: Player ${playersScore} : ${computersScore} Computer `
    round += 1
    
    if (round > 5) {
      let buttonsDiv = document.querySelector(".buttons")
      buttonsDiv.remove()
      score.classList.add("header")
      score.textContent = `Final score: Player ${playersScore} : ${computersScore} Computer`
      
    }
  })
})






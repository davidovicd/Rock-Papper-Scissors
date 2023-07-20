// get computers choice
function getComputersChoice(){
  // do not put the computers choice  to the console, just return the value
  let options = ["rock", "papper", "scissors"]
  let computersChoice = options[Math.floor(Math.random() * options.length)]
  return computersChoice
}

// compare choices


// get players choice
const playersChoice = prompt("Please insert your choice, rock, papper or scissors: ")
const computersChoice = getComputersChoice()

// print the winner on the console


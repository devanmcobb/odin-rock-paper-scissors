//Create elements for playerSelectionDisplay, computerSelectionDisplay and resultDisplay
const playerSelectionDisplay = document.createElement('h1')
const computerSelectionDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(playerSelectionDisplay, computerSelectionDisplay, resultDisplay)

//Create choices to choose from
const choices = ['rock', 'paper', 'scissors']
let playerSelection
let computerChoice

//Create playerSelection & display it
const handleClick = (e) => {
    playerSelection = e.target.id
    playerSelectionDisplay.innerHTML = 'Player Selection: ' + playerSelection
    computerSelection()
}

const computerSelection = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerSelectionDisplay.innerHTML = 'Computer Selection: ' + randomChoice
}

//Create buttons
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}
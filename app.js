//Create elements for playerSelectionDisplay, computerSelectionDisplay and resultDisplay
const playerSelectionDisplay = document.createElement('h1')
const computerSelectionDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(playerSelectionDisplay, computerSelectionDisplay, resultDisplay)

//Create choices: playerSelection & computerChoice
const choices = ['rock', 'paper', 'scissors']
let playerSelection
let computerChoice

//How does playerSelection & computerChoice work
const handleClick = (e) => {
    playerSelection = e.target.id
    playerSelectionDisplay.innerHTML = 'Player Selection: ' + playerSelection
    computerSelection()
    getResult()
}

const computerSelection = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerSelectionDisplay.innerHTML = 'Computer Selection: ' + computerChoice
}

//Create input buttons for playerSelection
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

//Declare results for winner
const getResult = () => {
    switch (playerSelection + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "YOU'VE WON!"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "YOU'VE LOST!"
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "IT'S A DRAW!"
            break
    }
}
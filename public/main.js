
let clickCount = 0
let mainBoard
let playerOneValue = []
let playerTwoValue = []
const playerOne = { letter: 'o', value: 1 }
const playerTwo = { letter: 'x', value: -1 }
const winCombos = [
  ['one', 'two', 'three'],
  ['four', 'five', 'six'],
  ['seven', 'eight', 'nine'],
  ['one', 'four', 'seven'],
  ['two', 'five', 'eight'],
  ['three', 'six', 'nine'],
  ['one', 'five', 'nine'],
  ['three', 'five', 'seven']
]

const playerOneWinCondition = () => {
  if (mainBoard.one === 'x' && mainBoard.two === 'x' && mainBoard.three === 'x') {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }

}

const checkWinner = () => {
  playerOneWinCondition()
}

let box = document.querySelectorAll('.box')

let newGame = () => {
  mainBoard = Array.from(Array(9).keys())
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', playerClick)
  }
}

const playerClick = (square) => {
  if (clickCount === 1 || clickCount === 3 || clickCount === 5 ||
    clickCount === 7 || clickCount === 9 || clickCount === 11 || clickCount === 13 ||
    clickCount === 15 || clickCount === 17 || clickCount === 19) {
    turn(square.target.id, playerOne.letter)
  } else {
    turn(square.target.id, playerTwo.letter)
  }
}

const turn = (squareID, player) => {
  mainBoard[squareID] = player
  document.getElementById(squareID).textContent = player
  document.getElementById(squareID).removeEventListener('click', playerClick)
  checkWinner()
}

// const checkWinner = () => {
//   if (winCombos[0] === 3 ||
//     winCombos[1] === 3 ||
//     winCombos[2] === 3 ||
//     winCombos[3] === 3 ||
//     winCombos[4] === 3 ||
//     winCombos[5] === 3 ||
//     winCombos[6] === 3) {
//     document.querySelector('.game-decision').textContent = 'Player One Wins!'
//   }
// 
//   if (winCombos[0] === 3 ||
//     winCombos[1] === 3 ||
//     winCombos[2] === 3 ||
//     winCombos[3] === 3 ||
//     winCombos[4] === 3 ||
//     winCombos[5] === 3 ||
//     winCombos[6] === 3) {
//     document.querySelector('.game-decision').textContent = 'Player Two Wins!'
//   }
// 
//   if (winCombos[0] !== 3 ||
//     winCombos[1] !== 3 ||
//     winCombos[2] !== 3 ||
//     winCombos[3] !== 3 ||
//     winCombos[4] !== 3 ||
//     winCombos[5] !== 3 ||
//     winCombos[6] !== 3) {
//     document.querySelector('.game-decision').textContent = 'It is a draw. You both suck!'
//   }
// }

const main = () => {
  document.querySelector('.sandbox').addEventListener('click', () => {
    clickCount++
    console.log(clickCount)
  })

  document.querySelector('.replay-button').addEventListener('click', () => {
    document.location = '/'
  })

  newGame()

}

document.addEventListener('DOMContentLoaded', main)

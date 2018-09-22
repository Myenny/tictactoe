// listen for a click === done
// assign click count to 0
// count that click
// determine if odd or even click
// if odd assign the value of X
// if even assign the value of O
// change the 'td' text content to either X or O
//   make it go to the correct box
//   somehow select each box and update text content when clicked
//     listen for click for each individual box
// do this 4 times
// give a value of 1 to x
// give a value of -1 to o
// check for winner function
//   if box 1 2 3 = x display winner
//   if box 4 5 6 = x display winner
//   if box 7 8 9 = x display winner
//   if box 1 4 7 = x display winner
//   if box 2 5 8 = x display winner
//   if box 3 6 9 = x display winner
//   if box 1 5 9 = x display winner
//   if box 3 5 7 = x display winner
//   if box 1 2 3 = o display winner
//   if box 4 5 6 = o display winner
//   if box 7 8 9 = o display winner
//   if box 1 4 7 = o display winner
//   if box 2 5 8 = o display winner
//   if box 3 6 9 = o display winner
//   if box 1 5 9 = o display winner
//   if box 3 5 7 = o display winner
//
// if the value of x is 1 and i run a function to check all rows and columns and diagonals to equal 3
// x wins
//
// if the value of 0 is -1 and i run a function to check all rows columns and diagonal to equal -3
// o won
//
// if neither are true its a tie
// select the element on the DOM add winner results
// add check winner results to the DOM => textContent to h2

// log click count
// if odd = x
//    if click count !/ 2 = x
// if even = y
//    if click count / 2 = y
// add text content to DOM
//
let clickCount = 0
let mainBoard
const playerOne = 'o'
const playerTwo = 'x'
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

let box = document.querySelectorAll('.box')

let newGame = () => {
  mainBoard = Array.from(Array(9).keys())
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', playerClick, false)
  }
}

const playerClick = (square) => {
  if (clickCount === 1 || clickCount === 3 || clickCount === 5 ||
    clickCount === 7 || clickCount === 9) {
    turn(square.target.id, playerOne)
  } else {
    turn(square.target.id, playerTwo)
  }
}

const turn = (squareID, player) => {
  mainBoard[squareID] = player
  document.getElementById(squareID).innerText = player
}



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

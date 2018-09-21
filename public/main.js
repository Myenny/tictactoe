// listen for a click
// assign click count to 0
// count that click
// determine if odd or even click
// if odd assign the value of X
// if even assign the value of O
// change the TD text content to either X or O
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
//

// log click count
// if odd = x
//    if click count !/ 2 = x
// if even = y
//    if click count / 2 = y
// add text content to DOM
//



const playerSelected = () => {
  console.log('clicked')
}



const main = () => {
  document.querySelector('.one').addEventListener('click', playerSelected)

  document.querySelector('.two').addEventListener('click', playerSelected)

  document.querySelector('.three').addEventListener('click', playerSelected)

  document.querySelector('.four').addEventListener('click', playerSelected)

  document.querySelector('.five').addEventListener('click', playerSelected)

  document.querySelector('.six').addEventListener('click', playerSelected)

  document.querySelector('.seven').addEventListener('click', playerSelected)

  document.querySelector('.eight').addEventListener('click', playerSelected)

  document.querySelector('.nine').addEventListener('click', playerSelected)

}

document.addEventListener('DOMContentLoaded', main)

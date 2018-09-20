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

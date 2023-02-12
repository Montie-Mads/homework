/*
 * DOTS: Level One
 *
 */

let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

// add an event listener so that when you click the ball, it registers.
ballEl.addEventListener('click', oneUp)

//make the function so that the above makes the bellow registers
function oneUp() {
  //when ball is clicked, add 10
  score += 10;
  //when the ball is clicked, add 10 and add to the score. the  innerText is targeting the 0000 h2 class
  scoreEl.innerText = score;
  //if the score is greater than or equal to 100, the user wins the game!
  if (score >= 100) {
    //when the user reaches 100 the user will be declared the winner
    declareWinner();
  }
}
function declareWinner() {
  document.body.classList.add('game-over');
}
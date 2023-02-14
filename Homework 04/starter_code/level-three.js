/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

//these are to target each individual ball

let bBallA = document.querySelector('.js-ballA')
let bBallB = document.querySelector('.js-ballB')
let bBallC = document.querySelector('.js-ballC')


//first Ball

//add an even listener to target ball A with oneUpA
bBallA.addEventListener('click', oneUpA)

//make the function so the ball is clickable 
function oneUpA() {
    //when ballA is clicked, add 20
    score += 20;
    //when the score is added, add to score
    scoreEl.innerText = score;
    //if the score is greater or = to 100, user wins the game
    if (score >= 100) {
        declareWinner();
    }
}

function declareWinner() {
    document.body.classList.add('game-over');
}



//second Ball

bBallB.addEventListener('click', oneUpB)

function oneUpB() {
    score += 5;
    scoreEl.innerText = score;
    if (score >= 100) {
        declareWinner;
    }
}
function declareWinner() {
    document.body.classList.add('game-over');
}



//third ball


bBallC.addEventListener('click', oneUpC)

function oneUpC() {
    score += 10;
    scoreEl.innerText = score;
    if (score >= 100) {
        declareWinner();
    }
}

function declareWinner() {
    document.body.classList.add('game-over');
}




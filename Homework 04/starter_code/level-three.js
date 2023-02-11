/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

let bBallA = document.querySelector('.js-ballA')
let bBallB = document.querySelector('.js-ballB')
let bBallC = document.querySelector('.js-ballC')


bBallA.addEventListener("click", function () {
    score += 20;

    if (score < 100) {
        scoreEl.innerText = score;
    } else {
        declareWinner();
    }

});

function declareWinner() {
    document.body.classList.add('game-over');
}

//second Ball

bBallB.addEventListener("click", function () {
    score += 5;

    if (score < 100) {
        scoreEl.innerText = score;
    } else {
        declareWinner();
    }

});

function declareWinner() {
    document.body.classList.add('game-over');
}

//third ball

bBallC.addEventListener("click", function () {
    score += 10;

    if (score < 100) {
        scoreEl.innerText = score;
    } else {
        declareWinner();
    }

});

function declareWinner() {
    document.body.classList.add('game-over');
}


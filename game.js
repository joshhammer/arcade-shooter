
import { Orb } from './Orb.js'

let timeBetweenOrbs;

const init = () => {
    addEventListenersToButtons()
}

const playground = document.querySelector('#playground');
const killNumberText = document.querySelector('#killNumber');
let killCount = 0;

const increaseHitCount = () => {
    killCount++;
    killNumberText.textContent = killCount;
}

const setHitCount = (count) => {
    killCount = count;
    killNumberText.textContent = killCount;
}

const addEventListenersToButtons = () => {
    const gameStartButton = document.querySelector('#startBtn');
    const gameRestartButton = document.querySelector('#restartBtn');

    gameStartButton.addEventListener('click', () => {
        gameStart();
    });

    gameRestartButton.addEventListener('click', () => {
        gameReset();
        gameStart();
    });
}


const gameStart = function() {
    produceOrbs();
}

const gameReset = function() {
    setHitCount(0);
}


const produceOrbs = function() {
    new Orb(playground);
    timeBetweenOrbs = setTimeout(produceOrbs, 1000)
}


init();

export { increaseHitCount }

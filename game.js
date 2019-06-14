
import { Orb } from './Orb.js'
import { Level } from './Level.js';

const playground = document.querySelector('#playground');
const killNumberText = document.querySelector('#killNumber');
let killCount = 0;
let timeBetweenOrbs;
let timeBetweenNewLevel;


const init = () => {
    addEventListenersToButtons()
}

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
    const gameStopButton = document.querySelector('#stopBtn')
    const gameRestartButton = document.querySelector('#restartBtn');

    gameStartButton.addEventListener('click', () => {
        gameStart();
    });

    gameStopButton.addEventListener('click', () => {
        gameStop();
    });

    gameRestartButton.addEventListener('click', () => {
        gameReset();
        gameStart();
    });
}


const gameStart = function() {
    produceOrbs();
    timeBetweenNewLevel = setInterval(advanceOneLevel, 10000)
}

const gameStop = function() {
    clearTimeout(timeBetweenOrbs);
    removeOrbsFromPlayground();
}

const gameReset = function() {
    clearTimeout(timeBetweenOrbs);
    removeOrbsFromPlayground();
    setHitCount(0);
}

const produceOrbs = function() {
    new Orb(playground);
    timeBetweenOrbs = setTimeout(produceOrbs, 1000)
}

const removeOrbsFromPlayground = function() {
    const allOrbs = Array.from(document.querySelectorAll('.orb'));
    allOrbs.forEach(orb => {
        playground.removeChild(orb);
    });
}

const advanceOneLevel = function() {
    new Level(playground);
}


init();

export { increaseHitCount }

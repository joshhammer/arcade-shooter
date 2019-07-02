
import { Orb } from './Orb.js'
import { Level } from './Level.js';

const playground = document.querySelector('#playground');
const killNumberText = document.querySelector('#killNumberText');
const levelNumberText = document.querySelector('#levelNumberText');
const gameOverMessage = document.querySelector('#gameOverText');

let killCount = 0;
let levelCount = 1;
let timeBetweenOrbs;
let timeBetweenNewLevel;


const init = () => {
    addEventListenersToButtons()
    gameOverMessage.style.display = 'none';
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

const increaseHitCount = () => {
    killCount++;
    killNumberText.textContent = killCount;
}

const increaseLevelCount = () => {
    levelCount++;
    levelNumberText.textContent = levelCount;
}

const setHitCount = (count) => {
    killCount = count;
    killNumberText.textContent = killCount;
}

const setLevelCount = (count) => {
    levelCount = count;
    levelNumberText.textContent = levelCount;
}

const displayGameOverMessage = function () {
    console.log('display GAMEOVER')
    gameOverMessage.style.display = 'block';
}

const removeGameOverMessage = function () {
    console.log('remove GAMEOVER')
    gameOverMessage.style.display = 'none';
}


const gameStart = function() {
    produceOrbs();
    timeBetweenNewLevel = setInterval(advanceOneLevel, 1000)
}

const produceOrbs = function() {
    new Orb(playground);
    timeBetweenOrbs = setTimeout(produceOrbs, 1500)
}

const gameStop = function() {
    clearTimeout(timeBetweenOrbs);
    removeOrbsFromPlayground();
    clearInterval(timeBetweenNewLevel);
}

const gameReset = function() {
    clearTimeout(timeBetweenOrbs);
    removeOrbsFromPlayground();
    clearInterval(timeBetweenNewLevel);
    removeAllLevels();
    setHitCount(0);
    setLevelCount(0);
    removeGameOverMessage();
}


const removeOrbsFromPlayground = function() {
    const allOrbs = Array.from(document.querySelectorAll('.orb'));
    allOrbs.forEach(orb => {
        playground.removeChild(orb);
    });
}

const advanceOneLevel = function() {
    new Level(playground);
    increaseLevelCount();
    checkIfGameIsOver();
}

const removeAllLevels = function () {
    const allLevels = Array.from(document.querySelectorAll('.newLevel'));
    allLevels.forEach(level => {
        playground.removeChild(level);
    });
}

const checkIfGameIsOver = function() {
    if (levelCount > 10){
        setLevelCount(10);
        concludeGame();
    }
}


const concludeGame = function() {
    gameStop();
    displayGameOverMessage();
}



init();

export { increaseHitCount }

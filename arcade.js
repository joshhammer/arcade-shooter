
const playground = document.querySelector('#playground');
const startButton = document.querySelector('#startBtn');
const stopButton = document.querySelector('#stopBtn');
const restartButton = document.querySelector('#restartBtn');
const levelNumber = document.querySelector('#levelNumber');
const congratsMsg = document.querySelector('#congratsMsg');
let killNumber = document.querySelector('#killNumber');
let killText = document.querySelector('#killText');

const orbs = [];
const laser = new Audio();

let orbZindex;
let divZindex = 10;
let divHeight = 10;
let killCount = 0;
let levelCount = 1;

// This is the class that every Orb is an instance of
class Orb {

    constructor(hp = hpSelector()) {
        this.hp = hp;
        this.spawnOrb();
        this.deleteOrb();
        this.onHit();
    }

    spawnOrb() {
        this.node = document.createElement('div');
        this.node.classList.add('orb');
        this.node.classList.add('orb::after');
        this.node.style.zIndex = randomOrbZindex();
        if (this.hp > 25) {
            this.node.setAttribute('id', 'highHP');
        }
        playground.appendChild(this.node);
        orbs.push(Orb);
    }

    deleteOrb() {
        this.node.addEventListener('animationend', (event) => {
            if (event.animationName == 'xAxis' || event.animationName == 'diffxAxis') {
                playground.removeChild(this.node);
                orbs.pop();
            }
        });
    }

    onHit() {
        this.node.addEventListener('click', () => {
            playLaser();
            this.hp -= 25;
            if (this.hp <= 0) {
                playground.removeChild(this.node);
                killCount++;
                killNumber.textContent = killCount;
                if (killCount > 1) {
                    advanceLevel();
                }
            }
        });

    }
}


// this one starts the game and maks orbs appear in random intervals from 250ms up to 2s
startButton.addEventListener('click', () => {
    startGame();
    startButton.style.visibility = 'hidden';
});

stopButton.addEventListener('click', () => {
    stopGame();
});

// this button restarts the game
restartButton.addEventListener('click', () => {
    resetGame();
    startGame();
});


// this function starts the game and produces orbs
const startGame = function () {
    produceOrbs();
}

// this function solely produces Orbs in a certain interval
const produceOrbs = function () {
    let random = Math.floor(Math.random() * 1500 + 500)
    new Orb();
    tOrbs = setTimeout(produceOrbs, random);
}

// this function currently stops the game entirely and clears all orbs
const resetGame = function () {
    clearTimeout(tOrbs);
    removeAllOrbs();
    removeLevels();
    resetCounters();
    playground.style.backgroundColor = 'silver';
}

const stopGame = function () {
    clearTimeout(tOrbs);
    removeAllOrbs();
}


// function to remove all orbs
const removeAllOrbs = function () {
    const allOrbs = Array.from(document.querySelectorAll('.orb'));
    allOrbs.forEach(orb => {
        playground.removeChild(orb);
    });
    orbs.length = 0;
}

// function to remove all level layers
const removeLevels = function () {
    const allLevels = Array.from(document.querySelectorAll('.levelDiv'));
    allLevels.forEach(level => {
        playground.removeChild(level);
    });
}

// function to create a new level
const advanceLevel = function () {
    if (levelCount >= 10) {
        stopGame();
    }
    else {
        let randomBgColor = randomColor();
        let levelDiv = document.createElement('div');
        levelDiv.classList.add('levelDiv');
        levelDiv.style.backgroundColor = randomBgColor;
        levelDiv.style.height = `${divHeight}%`;
        levelDiv.style.zIndex = divZindex;
        playground.appendChild(levelDiv);
        levelCount++;
        divZindex--;
        divHeight += 10;
        levelNumber.textContent = levelCount;
    }
}

const resetCounters = function () {
    killCount = 0;
    levelCount = 1;
    divZindex = 10;
    divHeight = 10;
    killNumber.textContent = killCount;
    levelNumber.textContent = levelCount;
}

// This function creates a random color for each new level
const randomColor = function () {
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);
    return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}

// creates a random z-index between 0 and 15 for every Orb
const randomOrbZindex = function () {
    orbZindex = Math.floor(Math.random() * 15);
    return orbZindex;
}

// determines whether an Orb has 25 or 50 HP
const hpSelector = function () {
    const zeroOne = Math.floor(Math.random() * 2);
    if (zeroOne > 0) {
        return 50;
    }
    else {
        return 25;
    }
}

// this function plays the gunshot sound on click
const playLaser = function () {
    laser.src = 'audio/laser.mp3'
    laser.play();
}
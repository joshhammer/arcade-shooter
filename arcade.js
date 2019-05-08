
const playground = document.querySelector('#playground');
const spawnButton = document.querySelector('#spawnBtn');
const restartButton = document.querySelector('#restartBtn');
const startButton = document.querySelector('#startBtn');
const levelNumber = document.querySelector('#levelNumber');
const orbs = [];
const gunShot = new Audio();
let killNumber = document.querySelector('#killNumber');
let killText = document.querySelector('#killText');
let orbZindex;
let divZindex = 10;
let divHeight = 10;
let killCount = 0;
let levelCount = 1;
let orbIntervalTime = 2000;

class Orb {

    constructor(name = 'TurboOrb'){
        this.name = name
        this.spawnOrb();
        this.deleteOrb();
        this.onHit();
    }

    spawnOrb() {
        this.node = document.createElement('div');
        this.node.classList.add('orb');
        this.node.classList.add('orb::after');
        this.node.style.zIndex = randomOrbZindex();
        console.log('Orb z-Index= ' + orbZindex);
        playground.appendChild(this.node);
        orbs.push(Orb);
    }

    deleteOrb() {
        this.node.addEventListener('animationend', (event) => {
            // console.log(event)
            if (event.animationName == 'xAxis'){
                // console.log(event.animationName);
                playground.removeChild(this.node);
                orbs.pop();
            }
        });
    }

    onHit() {
        this.node.addEventListener('click', () => {
            playground.removeChild(this.node);
            killCount++;
            killNumber.textContent = killCount;
            // playgunShot();
        });

    }
}

// this one starts the game and maks orbs appear in random intervals from 250ms up to 2s
startButton.addEventListener('click', () => {
    startGame();
})

// this button restarts the game
restartButton.addEventListener('click', () => {
    stopGame();
    startGame();
})

// this function starts the game and produces orbs
const startGame = function() {
    produceOrbs();
    levelInterval = setInterval(advanceLevel, 10000);
}

// this function solely produces Orbs in a certain interval
const produceOrbs = function () {
    let random = Math.floor(Math.random() * orbIntervalTime + 50)
    new Orb();
    tOrbs = setTimeout(produceOrbs, random);
}

// this function currently stops the game entirely and clears all orbs
const stopGame = function () {
    removeLevels();
    removeAllOrbs();
    clearTimeout(tOrbs);
    clearInterval(levelInterval);
    // clearTimeout(tGame);
    killCount = 0;
    killNumber.textContent = killCount;
    levelCount = 1;
    levelNumber.textContent = levelCount;
    playground.style.backgroundColor = 'silver';
    console.clear();
}


// function to remove all orbs
const removeAllOrbs = function () {
    const allOrbs = Array.from(document.querySelectorAll('.orb'));
    // console.log(allOrbs);
    allOrbs.forEach(orb => {
        playground.removeChild(orb);
    });
    orbs.length = 0;
}

const removeLevels = function() {
    const allLevels = Array.from(document.querySelectorAll('.levelDiv'));
    allLevels.forEach(level => {
        playground.removeChild(level);
    });
}

// function to create a new level
const advanceLevel = function() {
    if(levelCount >= 10){
        stopGame();
    }
    else {
        let randomBgColor = randomColor();
        let levelDiv = document.createElement('div');
        levelDiv.classList.add('levelDiv');
        levelDiv.style.backgroundColor = randomBgColor;
        // levelDiv.style.height = `${makeRandomlHeight()}%`;
        levelDiv.style.height = `${divHeight}%`;
        levelDiv.style.zIndex = divZindex;
        playground.appendChild(levelDiv);
        console.log('DIV Height= ' + divHeight);
        console.log('Div Z-index= ' + divZindex);
        levelCount++;
        divZindex--;
        divHeight += 10;
        orbIntervalTime -= 200;
        levelNumber.textContent = levelCount;
    }
}

// this function plays the gunshot sound on click
const playgunShot = function() {
    gunShot.src = 'audio/shotgun.wav'
    gunShot.play();
}

const randomColor = function() {
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);
    return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}

const randomOrbZindex = function() {
    orbZindex = Math.floor(Math.random() *20);
    return orbZindex;
}
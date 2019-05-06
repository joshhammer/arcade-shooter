
const playground = document.querySelector('#playground');
const spawnButton = document.querySelector('#spawnBtn');
const restartButton = document.querySelector('#restartBtn');
const startButton = document.querySelector('#startBtn');
const orbs = [];
let killCount = 0;
let killNumber = document.querySelector('#killNumber');
let killText = document.querySelector('#killText');
const gunShot = new Audio()

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
        // this.node.addEventListener('click', () => {
        //     console.log('clicked me!')
        // });
        playground.appendChild(this.node);
        orbs.push(Orb);
    }
// Hier habe ich das Problem, dass animationend 2x fired, weil es ja eigentlich auch zwei Animationen sind. Das produziert dann einen Error in der Console
    deleteOrb() {
        this.node.addEventListener('animationend', (event) => {
            // console.log(event)
            if (event.animationName == 'xAxis'){
                // console.log(event.animationName);
                playground.removeChild(this.node);
            }
        });
        orbs.pop();
    }

    onHit() {
        this.node.addEventListener('click', () => {
            playground.removeChild(this.node);
            killCount++;
            // killNumber.textContent = killCount;
            // playgunShot();
        });

    }
}

// this one starts the game and maks orbs appear in random intervals
startButton.addEventListener('click', () => {
    startGame();
})

// this button clears everything and resets the screen
restartButton.addEventListener('click', () => {
    stopGame();
    startGame();
    // killText.textContent = 'Kills: '
    // killNumber.textContent = killCount;
})


const startGame = function() {
    produceOrbs();
    tGame = setTimeout(stopGame, 10000);
}

const produceOrbs = function () {
    let random = Math.floor(Math.random() * 2000 + 1)
    new Orb();
    tOrbs = setTimeout(produceOrbs, random);
}

// this function currently stops the game entirely and clears all orbs
const stopGame = function () {
    removeAllOrbs();
    clearTimeout(tOrbs);
    clearTimeout(tGame);
    killCount = 0;
    // killText.textContent = 'GAME OVER';
    // killNumber.textContent = '';
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


const advanceLevel = function() {
    let randomBgColor = randomColor();
    playground.style.backgroundColor = randomBgColor;
}

// this function plays the gunshot sound on click
const playgunShot = function() {
    gunShot.src = 'audio/shotgun.wav'
    gunShot.play();
}

const randomColor = function() {
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}





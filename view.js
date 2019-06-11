const playground = document.querySelector('#playground');
const viewStartButton = document.querySelector('#startBtn');
const viewRestartButton = document.querySelector('#restartBtn');
const laser = new Audio();

let killNumber = document.querySelector('#killNumber');
let killText = document.querySelector('#killText');
// let orbZindex;
// let divZindex = 10;
// let divHeight = 10;


class RepresentationOrb {

    constructor(){
        this.spawnOrb();
        this.deleteOrb();
        this.onHit();
    }

    spawnOrb() {
        this.node = document.createElement('div');
        this.node.classList.add('orb');
        this.node.classList.add('orb::after');
        // this.node.style.zIndex = randomOrbZindex();
        playground.appendChild(this.node);
    }

    deleteOrb() {
        this.node.addEventListener('animationend', (event) => {
            if (event.animationName == 'xAxis' || event.animationName == 'diffxAxis') {
                playground.removeChild(this.node);
            }
        });
    }

    onHit() {
        this.node.addEventListener('click', () => {
            playLaser();
            playground.removeChild(this.node);
        });
    }
}

viewStartButton.addEventListener('click', () => {
    viewStart();
});

viewRestartButton.addEventListener('click', () => {
    viewReset();
    viewStart();
});

const viewStart = function(){
    new RepresentationOrb();
    tRepOrbs = setTimeout(viewStart, 1000);
};

const viewReset = function(){
    clearTimeout(tRepOrbs);
    removeAllOrbs();
    // removeLevels();
    resetCounterText();
    playground.style.backgroundColor = 'silver';
};

const removeAllOrbs = function () {
    const allOrbs = Array.from(document.querySelectorAll('.orb'));
    allOrbs.forEach(orb => {
        playground.removeChild(orb);
    });
}

// const removeLevels = function () {
//     const allLevels = Array.from(document.querySelectorAll('.levelDiv'));
//     allLevels.forEach(level => {
//         playground.removeChild(level);
//     });
// }

const resetCounterText = function () {
    divZindex = 10;
    divHeight = 10;
    killNumber.textContent = killCounter;
    levelNumber.textContent = levelCount;
}

// const viewAdvanceLevel = function () {
//         let randomBgColor = randomColor();
//         let levelDiv = document.createElement('div');
//         levelDiv.classList.add('levelDiv');
//         levelDiv.style.backgroundColor = randomBgColor;
//         levelDiv.style.height = `${divHeight}%`;
//         levelDiv.style.zIndex = divZindex;
//         playground.appendChild(levelDiv);
//         divZindex--;
//         divHeight += 10;
//         levelNumber.textContent = levelCount;
// }

const playLaser = function () {
    laser.src = 'audio/laser.mp3'
    laser.play();
}

// const randomColor = function () {
//     const redValue = Math.floor(Math.random() * 256);
//     const greenValue = Math.floor(Math.random() * 256);
//     const blueValue = Math.floor(Math.random() * 256);
//     return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
// }

// const randomOrbZindex = function () {
//     orbZindex = Math.floor(Math.random() * 15);
//     return orbZindex;
// }
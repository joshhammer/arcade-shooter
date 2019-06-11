const gameStartButton = document.querySelector('#startBtn');
const gameRestartButton = document.querySelector('#restartBtn');

let orbs = [];
let killCounter = 0;
let levelCounter = 1;

class gameOrb {

    constructor(){

        this.gameSpawnOrb();
        this.gameDeleteOrb();
        this.gameOnHit();
    }

    gameSpawnOrb() {
        orbs.push(gameOrb);
    }

    gameDeleteOrb() {
        this.node.addEventListener('animationend', (event) => {
            if (event.animationName == 'xAxis' || event.animationName == 'diffxAxis') {
                orbs.pop();
            }
        });
    }

    gameOnHit() {
        this.node.addEventListener('click', () => {
            killCounter++;
            killNumber.textContent = killCounter;

        });
    }

}


gameStartButton.addEventListener('click', () => {
    gameStart();
});

gameRestartButton.addEventListener('click', () => {
    gameReset();
    gameStart();
});

const gameStart = function(){
    new gameOrb();
    tOrbs = setTimeout(gameStart, 1000);
}

const gameStop = function(){
    clearTimeout(tOrbs);
}

const gameReset = function(){
    clearTimeout(tOrbs);
    killCounter = 0;
    levelCounter = 1;
    orbs.length = 0;
}

// const gameAdvanceLevel = function () {
//     if (levelCount >= 10) {
//         gameStop();
//     }
//     else {
//         levelCounter++;
//     }
// }
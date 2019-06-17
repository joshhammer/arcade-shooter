let LevelHeight = 10;
let randomLevelPosition;
let levelZindex;

export class Level {
    constructor(playground) {
        this.playground = playground;
        this.createLevel();
    }

    createLevel() {
        this.node = document.createElement('div');
        this.node.classList.add('newLevel');
        this.node.style.backgroundColor = generateRandomLevelBackground();
        this.addLevelHeight();
        this.generateRandomLevelPosition();
        this.generateLevelZindex();
        this.playground.appendChild(this.node);
    }

    addLevelHeight() {
        this.node.style.height = `${LevelHeight}%`;
    }
    
    generateRandomLevelPosition() {
        randomLevelPosition = Math.floor(Math.random() * 90);
        this.node.style.bottom = `${randomLevelPosition}%`;
    }

    generateLevelZindex() {
        levelZindex = Math.floor(Math.random() * 10);
        this.node.style.zIndex = levelZindex;
    }


}


const generateRandomLevelBackground = function (){
        const redValue = Math.floor(Math.random() * 256);
        const greenValue = Math.floor(Math.random() * 256);
        const blueValue = Math.floor(Math.random() * 256);
        return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}
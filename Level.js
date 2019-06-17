let LevelHeight = 10;
let randomLevelPosition;

export class Level {
    constructor(playground) {
        this.playground = playground;
        this.createLevel();
    }

    createLevel() {
        this.node = document.createElement('div');
        this.node.classList.add('newLevel');
        this.node.style.backgroundColor = generateRandomLevelBackground();
        this.generateRandomLevelHeight();
        console.log(LevelHeight);
        console.log(randomLevelPosition);
        this.playground.appendChild(this.node);
    }

    generateRandomLevelHeight() {
        this.node.style.height = `${LevelHeight}%`;
        randomLevelPosition = Math.floor(Math.random() * 90)
        this.node.style.bottom = `${randomLevelPosition}%`;
    }


}


const generateRandomLevelBackground = function (){
        const redValue = Math.floor(Math.random() * 256);
        const greenValue = Math.floor(Math.random() * 256);
        const blueValue = Math.floor(Math.random() * 256);
        return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}
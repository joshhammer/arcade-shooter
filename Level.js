

export class Level {
    constructor(playground) {
        this.playground = playground;
        this.node = document.createElement('div');
        this.node.classList.add('newLevel');
        this.node.style.backgroundColor = generateRandomLevelBackground();
        this.playground.appendChild(this.node);
    }
}

const generateRandomLevelBackground = function (){
        const redValue = Math.floor(Math.random() * 256);
        const greenValue = Math.floor(Math.random() * 256);
        const blueValue = Math.floor(Math.random() * 256);
        return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}
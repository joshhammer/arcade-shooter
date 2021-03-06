import { increaseHitCount } from './game.js'

export class Orb {
    constructor(playground, hp = this.amountOfHP()) {
        this.playground = playground;
        this.node = document.createElement('div');
        this.hp = hp;
        this.setHighHpOrbClass();
        this.attachEventHandlers();
        this.spawnOrb();
    }


    amountOfHP() {
        const zeroOrOne = Math.floor(Math.random() * 2);
        if (zeroOrOne > 0) {
            return 50;
        }
        else {
            return 25;
        }
    }


    setHighHpOrbClass() {
        if (this.hp > 25) {
            this.node.setAttribute('class', 'highHP');
        }
    }


    attachEventHandlers() {

        this.node.addEventListener('animationend', (event) => {
            if (event.animationName == 'xAxis' || event.animationName == 'diffxAxis') {
                this.deleteOrb();
            }
        });

        this.node.addEventListener('click', () => {
            this.hitOrb()
        })
    }

    spawnOrb() {
        this.node.classList.add('orb');
        this.playground.appendChild(this.node);
    }


    hitOrb() {
        console.log(this.node.classList)
        this.playLaser();
        this.hp -= 25;
        if (this.hp <= 0) {
            if(this.node.classList.contains('highHP')){
                increaseHitCount();
            }
            increaseHitCount();
            this.deleteOrb();
        }
    }


    deleteOrb() {
        this.playground.removeChild(this.node);
    }


    playLaser() {
        const laser = new Audio();
        laser.volume = 0.1;
        laser.src = 'audio/laser.mp3'
        laser.play();
    }
}



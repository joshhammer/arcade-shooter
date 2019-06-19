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

    deleteOrb() {
        this.playground.removeChild(this.node);
    }

    hitOrb() {
        this.playLaser();
        this.hp -= 25;
        if (this.hp <= 0) {
            increaseHitCount();
            this.deleteOrb();
        }
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
            this.node.setAttribute('id', 'highHP');
        }
    }

    playLaser() {
        const laser = new Audio();
        laser.volume = 0.1;
        laser.src = 'audio/laser.mp3'
        laser.play();
    }
}

// export { increaseOrbSpeed }



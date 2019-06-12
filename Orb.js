import { increaseHitCount } from './game.js'

export class Orb {
    constructor(playground) {
        this.playground = playground
        this.node = document.createElement('div');
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
        // this.node = document.createElement('div');
        this.node.classList.add('orb');
        // this.node.classList.add('orb::after');
        this.playground.appendChild(this.node);
    }

    // funktioniert nicht
    deleteOrb() {
        this.playground.removeChild(this.node);
    }

    hitOrb() {
        this.playLaser();
        this.deleteOrb();
        increaseHitCount();
    }

    playLaser() {
        const laser = new Audio();
        laser.src = 'audio/laser.mp3'
        laser.play();
    }
}



// const removeAllOrbs = function () {
//     const allOrbs = Array.from(document.querySelectorAll('.orb'));
//     allOrbs.forEach(orb => {
//         playground.removeChild(orb);
//     });
// }


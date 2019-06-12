import { increaseHitCount } from './game.js'

export class Orb {
    constructor(playground) {
        this.playground = playground
        this.node = document.createElement('div');
        this.attachEventHandlers()
    }

    attachEventHandlers() {

        this.node.addEventListener('animationend', (event) => {
            if (event.animationName == 'xAxis' || event.animationName == 'diffxAxis') {
                deleteOrb()
            }
        });

        this.node.addEventListener('click', () => {
            hitOrb()
        })
    }

    spawnOrb() {
        this.node = document.createElement('div');
        this.node.classList.add('orb');
        this.node.classList.add('orb::after');
        this.playground.appendChild(this.node);
    }

    deleteOrb() {
        this.playground.removeChild(this.node);
    }

    hitOrb() {
        this.playLaser();
        deleteOrb();
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


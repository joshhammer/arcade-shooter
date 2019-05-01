
const playground = document.querySelector('#playground');
const spawnButton = document.querySelector('#spawnBtn');
const clearButton = document.querySelector('#clearBtn');
const orbs = [];
let killCount = 0;


// button click events
spawnButton.addEventListener('click', function(){
    new Orb();
})

clearButton.addEventListener('click', () => {
    removeAllOrbs();
})


class Orb {
    constructor(name = 'TurboOrb'){
        this.name = name
        this.spawnOrb();
        this.deleteOrb();
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
            console.log(event)
            if (event.animationName == 'xAxis'){
                console.log(event.animationName);
                playground.removeChild(this.node);
            }
            console.log(playground)
            console.log(this.node)
        });
        orbs.pop();
    }
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

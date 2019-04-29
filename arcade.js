
const playground = document.querySelector('#playground');
const spawnButton = document.querySelector('#spawnBtn');
const clearButton = document.querySelector('#clearBtn');
const orbs = [];

// button click events
spawnButton.addEventListener('click', function(){
    // createOrb();
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
        this.node.classList.add('animation');
        playground.appendChild(this.node);
        orbs.push(Orb);
    }

    deleteOrb() {
        const testOrb = this.node;
        testOrb.addEventListener('animationend', () => {
        playground.removeChild(testOrb);
        orbs.pop();
        });
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


    // spawnOrb(){
    //     const orb = document.createElement('div');
    //     orb.classList.add('orb');
    //     // orb.classList.add('animation');
    //     playground.appendChild(orb);
    //     orbs.push(orb);
    // }
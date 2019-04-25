
const playground = document.querySelector('#playground');
const spawnButton = document.querySelector('#spawnBtn');
const clearButton = document.querySelector('#clearBtn');
const orbs = [];


// function to create an orb
const createOrb = function(){
    const orb = document.createElement('div');
    orb.classList.add('orb');
    playground.appendChild(orb);
    orbs.push(orb);
}

// function to remove all orbs
const removeAllOrbs = function(){
    const allOrbs = Array.from(document.querySelectorAll('.orb'));
    console.log(allOrbs);
    allOrbs.forEach(orb => {
        playground.removeChild(orb);
    });
    orbs.length = 0;
}

// button click events
spawnButton.addEventListener('click', function(){
    createOrb();
})

clearButton.addEventListener('click', () => {
    removeAllOrbs();
})


class Orb {
    constructor(){
        this.spawnOrb();
    }
    
    spawnOrb(){
        createOrb();
    }
}

// const createOrb = function () {
//     let orb = new Orb();
//     console.log(orb);
// }
const viewStartButton = document.querySelector('#startBtn');
const viewStopButton = document.querySelector('#stopBtn');




viewStartButton.addEventListener('click', () => {
    startButton.style.visibility = 'hidden';
});

viewStopButton.addEventListener('click', () => {
    ViewStopGame();
});


const ViewStopGame = function () {
    ViewRemoveAllOrbs();
}

const ViewRemoveAllOrbs = function () {
    const allOrbs = Array.from(document.querySelectorAll('.orb'));
    allOrbs.forEach(orb => {
        playground.removeChild(orb);
    });
}

const viewConcludeGame = function () {
    ViewStopGame();
    congratsH1.classList.add('congratsMsg');
}

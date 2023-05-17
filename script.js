const cells = document.querySelectorAll('.cell');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const startBtn = document.querySelector('#start');

let score = 0;
let time = 10;
let currentPos;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (parseInt(cell.getAttribute('data-index')) === currentPos) {
            score++;
            scoreEl.innerHTML = score;
        }
    })
});

startBtn.addEventListener('click', start);

function start() {
    let startGame = setInterval(() => { 
        cells.forEach(cell => {
            cell.innerHTML = '';
        });

        currentPos = Math.floor(Math.random() * 9);
        cells[currentPos].innerHTML = '<div class="mole"></div>';

        time--;
        timeEl.innerHTML = time;
        if (time === 0) { 
            clearInterval(startGame); // stop the loop
            // we use setTimeout because without it, alert executes before time updates
            setTimeout(() => {
                alert('Game Done! Refresh to restart.');
            }, 100);
        }
    }, 1000);
}
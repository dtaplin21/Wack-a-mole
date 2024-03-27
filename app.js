const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#Time-Left');
document.querySelector('#score');

let result = 0;

function randomSquare() {
    squares.forEach(square =>  {
        square.classList.remove("mole")
    });

    let randomPosition = squares[Math.floor(math.random() * squares.length)]
}

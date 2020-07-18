const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
let number = 16;


function createGrid(number) {
    grid = number * number;
    for (let i = 1; i <= grid; i++ ) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${500 / number - 2}px`;
        box.style.height = `${500 / number - 2}px`;
        container.appendChild(box);
    };
};

function addMouseEnter() {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.classList.add('boxhover');
        });
    });
};

function removeGrid() {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.remove();
    })
};

reset.addEventListener('click', () => {
    number = prompt("Make a new grid. Enter the number of rows.", "16");
    removeGrid();
    createGrid(number);
    addMouseEnter();
});

createGrid(number);
addMouseEnter();




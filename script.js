const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const random = document.querySelector('#random');
const grey = document.querySelector('#grey');


let number = 16;


function createGrid(number) {
    container.style.setProperty('--numRows', number);
    container.style.setProperty('--numCols', number);
    let gridSize = number * number;
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    };
};

function addMouseEnter() {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = '#515052';
        });
    });
};

function removeGrid() {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.remove();
    })
};

function randomColor() {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            let red = Math.floor((Math.random() * 255) + 1);
            let green = Math.floor((Math.random() * 255) + 1);
            let blue = Math.floor((Math.random() * 255) + 1);
            box.style.backgroundColor = `rgb(${red},${green},${blue})`;
        });
    });
};

reset.addEventListener('click', () => {
    number = prompt("Make a new grid. Enter the number of rows.", "16");
    removeGrid();
    createGrid(number);
    addMouseEnter();
});

random.addEventListener('click', () => {
    addMouseEnter();
    randomColor();
});


grey.addEventListener('click', () => {
    addMouseEnter();
});


createGrid(number);
addMouseEnter();




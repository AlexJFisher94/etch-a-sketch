const gridContainer = document.querySelector('#grid-container');
const pixelButtons = document.querySelectorAll('.pixel-buttons');
const clearButton = document.querySelector('#clear');
const rainbowPen = document.querySelector('#rainbow-pen');
let cells = [];

// event listeners
pixelButtons.forEach((btn) => btn.addEventListener('click', changeGridSize));
clearButton.addEventListener('click', clearPad);
rainbowPen.addEventListener('click',  toggleRainbowMode);

// creates default grid
function createGrid(numOfRows = 64) {
    let cells = numOfRows * numOfRows;
    for (let i = 0; i < cells; i++) {
        gridContainer.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;
        let cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
     const div = gridContainer.querySelectorAll('div');
     div.forEach((square) => square.addEventListener('mouseover', colorSquare));
}

// colors squares black
function colorSquare() {
    this.style.backgroundColor = 'black';
}

function toggleRainbowMode() {
    if(rainbowPen.value == "OFF") {
        rainbowPen.value = "ON";
    } else {
        rainbowPen.value = "OFF";
    }
    toggleRainbowPen();
}

// toggles rainbow pen
function toggleRainbowPen() {
    const div = gridContainer.querySelectorAll('div');
    div.forEach((square) => square.addEventListener('mouseover', generateColor));
}

// generates random colors for rainbow pen
function generateColor() {
    if (rainbowPen.value == "ON") {
    let color1 = randomNum();
    let color2 = randomNum();
    let color3 = randomNum();
    this.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    } else {
    return;
    }
 }
 
 // generates random number between 0 and 255
 function randomNum() {
     let num = Math.floor(Math.random() * (255 + 1)).toString();
     return num;
 }

// clears sketchpad
function clearPad() {
    const div = gridContainer.querySelectorAll('div');
    div.forEach((square) => square.style.backgroundColor = 'rgb(241, 245, 247)');
};

// removes current grid 
function clearGrid() {
    const squares = document.querySelectorAll('#grid-container div');
    squares.forEach((square) => {
        gridContainer.removeChild(square);
    })
};

// changes grid size
function changeGridSize(e) {
    if (e.target == document.querySelector('#btn1')) {
        clearGrid();
        createGrid(32);
    } else if (e.target == document.querySelector('#btn2')) {
        clearGrid();
        createGrid(64);
    } else if (e.target == document.querySelector('#btn3')) {
        clearGrid();
        createGrid(128);
    }
}

createGrid();
const gridContainer = document.querySelector('#grid-container');

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
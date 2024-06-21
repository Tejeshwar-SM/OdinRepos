const gridContainer = document.querySelector('.grid');
// const gridSize = Number(prompt('What is the number of rows'))
const gridSize = document.querySelector('input');
let drawing = true;

const resetBtn = document.querySelector('.resetBtn');

let grids = 16;
function createGrid(grids) {
    for(let i=0; i<grids; i++) {
        for(let j=0; j<grids; j++) {
            const cell = document.createElement('div');
            cell.classList.add('gridCell');

            gridContainer.appendChild(cell);
        }
    }
}

createGrid();

//a function which enables drawing
function enableDrawing() {
    gridContainer.addEventListener('click', Draw);
    drawing = true;
    
}
enableDrawing();

function toggleDrawing() {
    gridContainer.addEventListener('dblclick', ()=> {
        drawing =!drawing;
    })
}
toggleDrawing();

//now create a function which applies color when there is a mouse over
//an event listener which will create a new class active inside the gridCell

function Draw() {
    gridContainer.addEventListener('mouseover', (event) => {
        if(event.target.matches('.gridCell') && drawing===true) {
            event.target.classList.add('active');
        }
    });
}


resetBtn.addEventListener('click', ()=> {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid();
    drawing = false;
    // clickGrid();
});
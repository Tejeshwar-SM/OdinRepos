const gridContainer = document.querySelector('.grid');
// const gridSize = Number(prompt('What is the number of rows'))
const gridSize = 16;

const resetBtn = document.querySelector('.resetBtn');


function createGrid() {
    for(let i=0; i<gridSize; i++) {
        for(let j=0; j<16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('gridCell');

            gridContainer.appendChild(cell);
        }
    }
}

createGrid();

//now create a function which applies color when there is a mouse over
//an event listener which will create a new class active inside the gridCell
gridContainer.addEventListener('mouseover', (event) => {
    if(event.target.matches('.gridCell')) {
        event.target.classList.add('active');
    }
});

resetBtn.addEventListener('click', ()=> {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid();
});
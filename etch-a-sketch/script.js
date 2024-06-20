const grid = document.querySelector('#container');
// const gridSize = Number(prompt('What is the number of rows'))
const gridSize = 16;
for(let i=1; i<=16; i++) {
    //create 16 rows
    const cellRows = document.createElement('div');
    
    cellRows.classList.add('grid-cell')
    grid.appendChild(cellRows);
    
    console.log(`it works ${i}`);
}
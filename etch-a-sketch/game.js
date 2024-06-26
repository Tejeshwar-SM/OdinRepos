//container and grids:
const gridContainer = document.querySelector('.grid');
const sliderInput = document.querySelector('input');
const resetBtn = document.querySelector('.resetBtn');
const inputSize = document.querySelector('.inputSize');
const rainbowBtn = document.querySelector('.rainbow');
let gridNos = 16;
let drawing = true;
let rgbMode = false;


// function createGrid(gridNos) {
//     for(let i=0; i<gridNos; i++) {
//         for(let j=0; j<gridNos; j++) {
//             const cell = document.createElement('div');
//             cell.classList.add('gridCell');

//             gridContainer.appendChild(cell);
//         }
//     }
// }
// createGrid(gridNos);
function createGrid(gridNos) {
    gridContainer.innerHTML = ''; // Clear existing content
    const cellSize = `${100 / gridNos}%`;
    
    for(let i=0; i<gridNos; i++) {
        for(let j=0; j<gridNos; j++) {
            const cell = document.createElement('div');
            cell.classList.add('gridCell');
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            gridContainer.appendChild(cell);
        }
    }
}
createGrid(gridNos);


//fills the grid with color on mouseover
function colorBlue2(e) {
    if (drawing) {
        e.target.style.backgroundColor = 'blue';
    }
}
// function Draw() {
//     gridContainer.addEventListener('mouseover', (event) => {
//         if(event.target.matches('.gridCell') && drawing===true) {
//             event.target.classList.add('active');
//         }
//     });
// }
//a function which enables drawing

// function enableDrawing() {
//     gridContainer.addEventListener('click', Draw);
//     drawing = true;
    
// }
// enableDrawing();
// function toggleDrawing() {
//     gridContainer.addEventListener('dblclick', ()=> {
//         drawing =!drawing;
//     })
// }
// toggleDrawing();
gridContainer.addEventListener('mousedown', startDrawing);
gridContainer.addEventListener('mouseup', stopDrawing);
gridContainer.addEventListener('mouseleave', stopDrawing);
gridContainer.addEventListener('mouseover', colorBlue);

function startDrawing() {
    drawing = true;
}

function stopDrawing() {
    drawing = false;
}

//changing colors- random rgb vals
function colorRGB(e) {
    if (drawing && !e.target.style.backgroundColor) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

function colorBlue(e) {
    if (drawing && e.target.classList.contains('gridCell')) {
        darkenCell(e.target, 'blue');
    }
}

function colorRGB(e) {
    if (drawing && e.target.classList.contains('gridCell')) {
        darkenCell(e.target, 'rgb');
    }
}
//TODO: complete this darkening function
function darkenCell(cell, mode) {
    let darkness = parseInt(cell.dataset.darkness) || 0;
    darkness = Math.min(darkness + 1, 10); // Increment darkness, max 10
    cell.dataset.darkness = darkness;

    if (mode === 'blue') {
        const blueValue = Math.round(255 * (1 - darkness / 10));
        cell.style.backgroundColor = `rgb(0, 0, ${blueValue})`;
    } else if (mode === 'rgb') {
        if (darkness === 1) {
            // Initial random color
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            cell.dataset.baseColor = `${r},${g},${b}`;
        }
        const [r, g, b] = cell.dataset.baseColor.split(',').map(Number);
        const factor = 1 - darkness / 10;
        cell.style.backgroundColor = `rgb(${Math.round(r * factor)}, ${Math.round(g * factor)}, ${Math.round(b * factor)})`;
    }
}

//controls:


resetBtn.addEventListener('click', resetGrid);

function resetGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    drawing = false;
    createGrid(gridNos);
}

//handles slider input

sliderInput.addEventListener('input', (e) => {
    gridNos = e.target.value;
    inputSize.textContent = `${gridNos} x ${gridNos}`;
    resetGrid();
});

//handles the rgb mode
rainbowBtn.addEventListener('click', toggleRGB);


function toggleRGB() {
    rgbMode = !rgbMode;//
    if (rgbMode) {
        gridContainer.removeEventListener('mouseover', colorBlue);
        gridContainer.addEventListener('mouseover', colorRGB);
        rainbowBtn.textContent = 'Switch to Blue';
    } else {
        gridContainer.removeEventListener('mouseover', colorRGB);
        gridContainer.addEventListener('mouseover', colorBlue);
        rainbowBtn.textContent = 'Switch to RGB';
    }
}

gridContainer.addEventListener('mousedown', startDrawing);
gridContainer.addEventListener('mouseup', stopDrawing);
gridContainer.addEventListener('mouseleave', stopDrawing);
gridContainer.addEventListener('mouseover', colorBlue);

function startDrawing() {
    drawing = true;
}

function stopDrawing() {
    drawing = false;
}
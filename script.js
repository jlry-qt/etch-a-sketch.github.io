
const gridContainer = document.querySelector('#grid-container');
const optionsContainer = document.querySelector('#options-container');
const drawModes = document.querySelector('#draw-modes');
const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', clearGrid);

document.addEventListener('dragstart', event => {
    event.preventDefault();
})

function createGrid(){
    for (let i = 1; i <= 16; i++){
        let row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 1; j <= 16; j++){
            let square = document.createElement('div');
            square.classList.add('grid-square');

            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
}


function drawHandler(){
    let mouseIsDown = false;
    let mode = 'normal-draw';

    drawModes.addEventListener('click', event => {
        mode = event.target.id;
    })

    gridContainer.addEventListener('mousedown', event => {
        if (event.target.style.background != ''){
            return
        }

        event.target.style.background = (mode === 'normal-draw') ? 'black' :
                                                                    drawRandomColor();
        mouseIsDown = true;
    });

    gridContainer.addEventListener('mouseup', () => {
        mouseIsDown = false;
    })

    gridContainer.addEventListener('mouseover', event => {
        if (mouseIsDown){
            if (event.target.style.background != ''){
                return
            }

            if (mode === 'normal-draw') {
                event.target.style.background = 'black';
            } else if (mode === 'rainbow-draw'){
                event.target.style.background = drawRandomColor();
            }
        } else {
            // This is for the "shadow effect"
            event.target.classList.add('cursor-pointed');
        }
    })

    gridContainer.addEventListener('mouseout', event => {
        event.target.classList.remove('cursor-pointed');
    })



}


function clearGrid(){
    document.querySelectorAll('.grid-square').forEach(gridSquare => {
        gridSquare.style.background = '';
    });
}

function drawRandomColor(){
    const redValue = Math.floor(Math.random() * 255) + 1;
    const blueValue = Math.floor(Math.random() * 255) + 1;
    const greenValue = Math.floor(Math.random() * 255) + 1;

    const RGB = '#' +
                redValue.toString(16) +
                blueValue.toString(16) +
                greenValue.toString(16);

    if (RGB === '#cecccc'){
        return drawRandomColor();
    }
    return RGB;
}

createGrid();
drawHandler();

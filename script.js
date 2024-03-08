
const gridContainer = document.querySelector('#grid-container')
const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', clearHandler);

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

    gridContainer.addEventListener('mousedown', event => {
        event.target.style.background = 'black';
        mouseIsDown = true;
    });

    gridContainer.addEventListener('mouseup', () => {
        mouseIsDown = false;
    })


    gridContainer.addEventListener('mouseover', event => {
        if (mouseIsDown){
            event.target.style.background = 'black';
        } else {
            // Shadow effect when hovering.
            event.target.style.background = (event.target.style.background === 'black') ?
                                            'black':
                                            '#dedddc';
        }
    })
    
    gridContainer.addEventListener('mouseout', event => {
        event.target.style.background = (event.target.style.background === 'black') ?
                                        'black':
                                        '';
    })
}


/* 
LISTEN for click event
FIND ALL colored square
TURN them into white
*/
function clearHandler(){
    document.querySelectorAll('.grid-square').forEach(gridSquare => {
        gridSquare.style.background = '';
    });
}

createGrid();
drawHandler();

const container = document.querySelector('#container');

function createGrid(dimensions) {
    for (i = 0; i < dimensions; i++) {
        const pixel = document.createElement('div');
        container.appendChild(pixel);
        pixel.setAttribute('class', 'pixel');
        pixel.addEventListener('mouseenter', () => {
            let randomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
                                //  random hexadecimal color generator

            pixel.setAttribute('style', `background-color: ${randomColor}`);
        });
    };
};

let initialDimensions = 4;          // 4x4 grid
createGrid(initialDimensions**2);   // creates 16 pixels


const reset = document.querySelector('button');
reset.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.setAttribute('style', 'background-color: #ffffff');
    });
    
    let newDimensions = prompt("How many squares per side do you want in your grid?");
    
    if (newDimensions <= 0) {
        newDimensions = prompt("Must be greater than 0. How many squares per side would you like in your grid?");
    }
    
    container.setAttribute('style', `grid-template-rows: repeat(${newDimensions}, 1fr); grid-template-columns: repeat(${newDimensions}, 1fr)`);
    
    createGrid(newDimensions**2);
});
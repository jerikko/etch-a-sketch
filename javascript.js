const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    const pixel = document.createElement('div');
    container.appendChild(pixel);
    pixel.setAttribute('class', 'pixel');
    pixel.addEventListener('mouseenter', () => {
        let randomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
                            //  random hexadecimal color generator
        pixel.setAttribute('style', `background-color: ${randomColor}`)
    });
};

const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    const pixel = document.createElement('div');
    container.appendChild(pixel);
    pixel.setAttribute('class', 'pixel');
    pixel.setAttribute('style', 'border-style: solid; border-color: black; border-width: 1px');
};

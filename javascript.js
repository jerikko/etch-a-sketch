const container = document.querySelector("#container");

for (i = 0; i < 4; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.setAttribute('id', 'row' + i);
    row.setAttribute('style', 'display: flex; flex-direction: row');
    row.setAttribute('style', 'width: 200px');
    row.setAttribute('style', 'border-style: solid; border-color: black; border-width: 1px');
    console.log(row);
    for (x = 0; x < 4; x++) {
        const column = document.createElement('div');
        row.appendChild(column);
        column.setAttribute('id', 'column' + x);
        column.setAttribute('style', 'height: 200px');
        //column.setAttribute('style', 'border-style: solid; border-color: black; border-width: 1px');
        console.log(column);
    }
}
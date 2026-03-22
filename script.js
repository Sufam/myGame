const container = document.getElementById('grid-container');

for (let i = 0; i < 9; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid')
    for (let i = 0; i < 9; i ++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    container.appendChild(grid);
}
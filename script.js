const container = document.getElementById('grid-container');
let player = 1;
let area = 5;
let round = 0;

for (let i = 1; i < 10; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid')
    for (let j = 1; j < 10; j ++){
        const cell = document.createElement('div');
        const clicked = false;
        cell.classList.add('cell');

        cell.addEventListener('click', function(){
            if (i == area && cell.className == 'cell' || round == 0){
                area = j;
                round = 1;
                if (player % 2 != 0){
                    this.classList.add('o');
                }else{
                    this.classList.add('x');
                }
                player += 1;
            }
            
        });

        grid.appendChild(cell);
    }
    container.appendChild(grid);
}

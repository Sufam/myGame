const container = document.getElementById('grid-container');
let round = 1;
let area = [];
let cell_step = [];

for (let i = 1; i < 10; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid')
    for (let j = 1; j < 10; j ++){
        const cell = document.createElement('div');
        const clicked = false;
        cell.classList.add('cell');

        cell.addEventListener('click', function(){
            if (i == area[area.length - 1] && cell.className == 'cell' || round == 1){
                area.push(j);
                if (round % 2 != 0){
                    this.classList.add('o');
                }else{
                    this.classList.add('x');
                }
                cell_step.push(this);
                round += 1;
            }
            
        });

        grid.appendChild(cell);
    }
    container.appendChild(grid);
}

function backstep(){
    cell_step[cell_step.length - 1].className = "cell";
    area.pop();
    cell_step.pop();
    if (round > 0){
        round -= 1;
    }
}
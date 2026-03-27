const container = document.getElementById('grid-container');
let round = 1;//回合
let area = [];//儲存每一步的大格子
let step = [];//儲存每一步
let allGrid = [];
let allArea = [];
let highlight = null;

for (let i = 0; i < 9; i ++){
    const createArea = document.createElement('div');
    createArea.classList.add('area');
    createArea.id = i + 1;
    container.appendChild(createArea);
    allArea.push(createArea);
    allGrid.push([]);
    for (let j = 0; j < 9; j ++){
        createGrid = document.createElement('div');
        createGrid.classList.add('grid');
        allGrid[i].push(createGrid);
    }
}
console.log(allGrid);

for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
        let thisArea = Math.trunc(i/3)*3 + Math.trunc(j/3) + 1;
        thisGrid = allGrid[i][j];
        const gridPlace = (i % 3 * 3) + (j % 3) + 1;
        thisGrid.addEventListener('click', function(){
            if ((thisArea == area[area.length - 1] && (thisGrid.classList == 'grid' || thisGrid.classList == 'grid highlight')) || round == 1){
                area.push(gridPlace);
                showarea(gridPlace);
                this.className = 'grid';
                if (round % 2 != 0){
                    this.classList.add('o');
                }else{
                    this.classList.add('x');
                }
                step.push(this);
                round += 1;
            }
        })
        allArea[thisArea - 1].appendChild(thisGrid);
    }
}
console.log(allGrid)

function showarea(next_area_num){;
    next_area = document.getElementById(next_area_num);
    if (highlight != null){
        Array.from(highlight).forEach(item => {
            if (item.classList == 'grid highlight'){
                item.className = 'grid';
            }
        });
    }

    if (next_area != null){
        highlight = next_area.children;//顯示下一步可以走的格子

        Array.from(highlight).forEach(item => {
            if (item.className == 'grid'){
                item.classList.add('highlight');
            }
        });
    }
    
}

function backstep(){
    if (round > 1){
        round -= 1;
        step[step.length - 1].className = "grid";
        area.pop();
        step.pop();
        showarea(area[area.length - 1]);
    }
}

function clearGrid() {
    const button = document.querySelector('#button');
    button.addEventListener('click', () => {
        const rows = document.querySelectorAll(".row");
        rows.forEach((row) => {
            row.addEventListener("mouseover", function(e)  {
                e.target.style.background = '';
            });
        })
    });
}
clearGrid();
 


function createGrid(size) {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        let size = prompt('What size do you want for the new grid?');
        const container = document.querySelector('.container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);

        }

            
    for(let i=0; i < size; i++) {
        const container = document.querySelector('.container');
        const column = document.createElement('div');
        column.classList.add('column');
        
        for(let j = 1; j < size; j++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.style.border = '2px solid black';
            row.textContent = (i * size) + j;
            column.appendChild(row);
            container.appendChild(column);  
        
            
            const rows = document.querySelectorAll(".row");
            rows.forEach((row) => {
                row.addEventListener("mouseover", function(e)  {
                    e.target.style.background = 'grey';
                });
        
            });
        
    };

}
})
}
    
createGrid();



function createDefaultGrid(size) {
    for (let i=0; i < size; i++) {
        const container = document.querySelector('.container');
        const column = document.createElement('div');
        column.classList.add('column');
        
        for(let j=1; j <= size; j++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.style.border = '2px solid black';
            row.textContent = (i * size) + j;
            column.appendChild(row);
            container.appendChild(column);  
            
            const rows = document.querySelectorAll(".row");
            rows.forEach((row) => {
                row.addEventListener("mouseover", function(e)  {
                    e.target.style.background = 'grey';
                })
            });        
        };
    };    
}
console.log(createDefaultGrid(16));




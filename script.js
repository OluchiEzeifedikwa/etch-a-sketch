



function clearGrid(size) {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
    prompt('What size do you want for the new grid?');

    if(size >= 100) {
        alert("Number is too large, try again");
    }  else {
        alert('number');
        
    }
});
}
clearGrid();




 
function createGrid(size) {
    
    for (let i=0; i <size; i++) {
        const container = document.querySelector('.container');
        const column = document.createElement('div');
        column.classList.add('column');
        

        
        for(let j=1; j<= size; j++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.style.border = '2px solid black';
            row.textContent = (i * size) + j;
            column.appendChild(row);
            container.appendChild(column);    
            
        }
    }   
}
createGrid(16);








const rows = document.querySelectorAll(".row");
rows.forEach((row) => {

    row.addEventListener("mouseover", function(e)  {
        e.target.style.background = 'grey';
});
});



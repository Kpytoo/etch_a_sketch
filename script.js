//Our container div containing our grid.
const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

let createGrid = (side_size) => {
    let totalGrids = side_size**2;
    
    for(let c = 0; c < totalGrids; c++){
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.style.height = (100 / side_size) + "%";
        grid.style.width = (100 / side_size) + "%";
        container.appendChild(grid);
    }
}

let newGrid = (size_input) => {
    while(container.lastChild){
        container.removeChild(container.lastChild);
    }
    createGrid(size_input);
}

createGrid(16);//Initialize first 16x16 grid

container.addEventListener("mouseover", (e) => {
    if(e.target.id !== "container"){ //So the border of the container doesn't change the color.
        let red = Math.random() * 256;
        let green = Math.random() * 256;
        let blue = Math.random() * 256;
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;   
    }
    
});


btn.addEventListener("click", (e) => {
    let size_input = prompt("Enter the number of squares per side for the new grid.\n(100 max)");
    while(size_input > 100 || size_input < 1){
        size_input = prompt("Please enter a number between 1 and 100!");
    }
    newGrid(size_input);
});


//7x7 and 13x13 not working
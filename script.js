//Our container div containing our grid.
const container = document.querySelector("#container");

let createGrid = (side_size) => {
    let totalGrids = side_size**2;
    
    for(let c = 0; c < totalGrids; c++){
        let grid = document.createElement("div");
        // grid.textContent = "Grid";
        grid.className = "grid";
        grid.style.height = (500 / side_size) + "px";
        grid.style.width = (500 / side_size) + "px";
        container.appendChild(grid);
    }
}

createGrid(50);

container.addEventListener("mouseover", (e) => {
    if(e.target.id !== "container"){ //So the border of the container doesn't change the color.
        let red = Math.random() * 256;
        let green = Math.random() * 256;
        let blue = Math.random() * 256;
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;   
    }
    
});

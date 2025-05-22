function clearGrid() {
    let par=document.querySelector(".container");
    par.innerHTML = "";
    return;
}
function createGrid(size){
    let par=document.querySelector(".container");
    for(let i=0;i<size;i++){
        let temp=document.createElement("div");
        temp.classList.add("row");
        for(let j=0;j<size;j++){
            let temp2=document.createElement("div");
            temp2.classList.add("cell");
            temp.appendChild(temp2);
        }
        par.appendChild(temp);
    }
    return;
}
createGrid(16);
document.querySelector("#size").addEventListener("click", function (){
    clearGrid();
    let size = prompt("Enter a grid size (1-100):");
    if (size > 100) {
        alert("Size too large! Please enter a number between 1 and 100.");
        return;
    } else if (size < 1) {
        alert("Size too small! Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
});

document.querySelector("#black").addEventListener("click", function (){
    let cells = document.querySelectorAll(".cell");
    for(let i=0;i<cells.length;i++){
        cells[i].addEventListener("mouseover",function(){
            cells[i].style.backgroundColor = "black";
        });
    }
    return;
})
document.querySelector("#eraser").addEventListener("click", function(){
    let cells = document.querySelectorAll(".cell");
    for(let i=0;i<cells.length;i++){
        cells[i].addEventListener("mouseover",function(){
            cells[i].style.backgroundColor = "white";
        });
    }
    return;
});
document.querySelector("#clear").addEventListener("click", function(){
    let cells = document.querySelectorAll(".cell");
    for(let i=0;i<cells.length;i++){
        cells[i].style.backgroundColor = "white";
    }
    return;
});
document.querySelector("#random").addEventListener("click", function(){
    let cells = document.querySelectorAll(".cell");
    for(let i=0;i<cells.length;i++){
        cells[i].addEventListener("mouseover",function(){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cells[i].style.backgroundColor = "#" + randomColor;
        });
    }
    return;
});

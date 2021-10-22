
const divContainer = document.querySelector("div.div-container")
let divArray = []
let divLine

createGrid(16)

function createGrid(gridSize){

    for(let i=0; i<gridSize*gridSize ;i++){
        //creates a new div to place 16 square divs inside
        if (i % gridSize == 0){
            divLine = document.createElement('div')
            divLine.id = i/gridSize
            divLine.classList.add("div-line")
            divContainer.appendChild(divLine)
        }
        //create a new square div to place as a child of divLine
        divArray[i] = document.createElement('div')
        divArray[i].id = i
        divArray[i].classList.add("div-square")
        divArray[i].addEventListener("mouseover",(e)=>{addHover(e,i)})
        // divArray[i].addEventListener("mouseout",(e)=>{removeHover(e,i)})
        divLine.appendChild(divArray[i])
    }

}
    


function addHover(e,i){
    divArray[i].classList.add("hovered")
}
function removeHover(e,i){
    divArray[i].classList.remove("hovered")
}

let currentGridSize = 16;

const btn = document.querySelector("#btn1")
btn.addEventListener("click",(e)=>{changeGridSize(e)})

function changeGridSize(e){
    let size = prompt("Enter new grid size",currentGridSize)
    if (size<4 || size>100){
        alert("Grid size must be between 4 and 100")
    } else{
        currentGridSize = size;
        divArray = []
        removeChildElements()
        createGrid(currentGridSize)
    }
    
}

//removes all the square nodes from the page
function removeChildElements(){
    let children = document.querySelectorAll('div.div-square')
    children.forEach(child => child.remove())
    
    children = document.querySelectorAll('div.div-line')
    children.forEach(child => child.remove())
}

//define functions:
function addParagraph() {
    //create an element in the javascript world
    let paragraph = document.createElement('p');

    //manipulate / configure the element
    paragraph.innerText = "does this work?";

    //put the element into the actual page
    document.body.append(paragraph);
}

let container = document.querySelector(".boxContainer");

function addBox() {
    let box = document.createElement("div");

    // box.style.width = "100px";
    // box.style.height = "100px";
    // box.style.backgroundColor = "black";

    box.className = "box";
    
    // let container = document.querySelector(".boxContainer");

    container.append(box);
}

function removeAll() {
    // let container = document.querySelector(".boxContainer");
    container.remove();
}

function moveContainer() {

    let random = (Math.random()*200)-100;
    console.log(random);

    // let container = document.querySelector(".boxContainer");
    container.style.left = random + "px";
}
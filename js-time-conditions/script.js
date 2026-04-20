let inputBox = document.querySelector("#inputBox") // = select the input element
let output = document.querySelector("#output") // = select the output div
let myButton = document.querySelector("#myButton"); // = select the button
let clickCounter = 0;


// challenge 1: 
// when the button is clicked
// change the styling of the output text
myButton.addEventListener("click", buttonClicked)
function buttonClicked() {
    console.log("hello");
    output.style.backgroundColor = "white";

    // count the click
    clickCounter = clickCounter + 1;
    console.log("clickCounter", clickCounter)
    if (clickCounter >= 10) {
        console.log("time to supersize!!!")
        supersize(inputBox)
    }
}



// challenge 2: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:
inputBox.addEventListener("input", inputChanged)
function inputChanged() {
    let text = inputBox.value;

    // CHECK IF THE VALUE INSIDE THE INPUT IS "spin":
    if (text.includes("spin")){
        console.log("the value is spin")
        spin(inputBox)
    }

    // REFLECT THE CURRENT TEXT IN OUTPUT:
    output.innerText = text;
}





// function to spin an element 
function spin(element){
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate(360deg)"
}



// -------- PART 2








let messageBoard = document.querySelector("#messageBoard");



function appendCountdown() {
    let clicksLeft = 10 - clickCounter;
    addMessage("press the button " + clicksLeft + " times")
}

setInterval(appendCountdown, 500);




// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}


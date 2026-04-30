// ---------------------------------------------------------

let s = document.querySelector("span");

function spanHovered(eventInfo) {
    eventInfo.target.style.opacity = "0"; 
}

function addMover(element) {
    element.addEventListener("mouseover", spanHovered);
}

let allSpans = document.querySelectorAll("span:not(.special)");
allSpans.forEach(addMover);


// positioning--------------------------------------------------------------------
let p = document.querySelector("p");
let pWidth = p.offsetWidth;
let pHeight = p.offsetHeight;

let centerX = pWidth * 0.5;
let centerY = pHeight * 0.5;

allSpans.forEach(function(span) {
    let angle = Math.random() * 2 * Math.PI;
    let r = Math.random();

    let x = centerX + (r * pWidth * 0.45) * Math.cos(angle);
    let y = centerY + (r * pHeight * 0.15) * Math.sin(angle);

    let diagonalOffset = ((x - centerX) / pWidth) * pHeight * 0.3;
    y = y + diagonalOffset;

    span.style.left = x + "px";
    span.style.top = y + "px";

    let randomDuration = (Math.random() * 2 + 2) + "s";
    let randomDelay = (Math.random() * 2) + "s";
    span.style.animation = "wiggle " + randomDuration + " " + randomDelay + " infinite";
});


// special spans - click to supersize
let clickCounter = 0; // same as class

let specialSpans = document.querySelectorAll("span.special"); // the 3 dots

function specialClicked(eventInfo) {
    eventInfo.target.style.opacity = "0"; // hide it when clicked

    clickCounter = clickCounter + 1; // same as class
    console.log("clickCounter", clickCounter);

    if (clickCounter >= 3) { // same as if (clickCounter >= 10)
        console.log("time to supersize!!!")
        let wrapper = document.querySelector(".specialWrapper");
        supersize(wrapper);
    }
}

function addClicker(element) {
    element.addEventListener("click", specialClicked);
}

specialSpans.forEach(addClicker);


// exact same supersize from class:
function supersize(element) {
    element.style.transition = "all .5s linear";
    element.style.backgroundColor = "black";
    element.style.transform = "scale(100)";
}
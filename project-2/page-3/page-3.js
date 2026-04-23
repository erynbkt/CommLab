let s = document.querySelector("span");

function spanHovered(eventInfo) {
    // let randomX = Math.random()*200-100;
    // let randomY = Math.random()*200-100;
    // eventInfo.target.style.transform = "translate(" + randomX + "px," + randomY + "px)"
    eventInfo.target.style.opacity = "0"; 
}

function addMover(element) {
    element.addEventListener("mouseover", spanHovered);
}

let allSpans = document.querySelectorAll("span:not(.special)");
allSpans.forEach(addMover);


// --------------------------------------------------------------------

let s = document.querySelector("span");
console.log(s);

function spanHovered(eventInfo) {
    console.log("hi");
    eventInfo.target.style.color = "red";

    let randomX = Math.random()*200-100;
    let randomY = Math.random()*200-100;
    eventInfo.target.style.transform = "translate(" + randomX + "px," + randomY + "px)"
}

// s.addEventListener("mouseover", spanHovered);

function addMover(element) {
    element.addEventListener("mouseover", spanHovered);
}

let allSpans = document.querySelectorAll("span");
allSpans.forEach(addMover);
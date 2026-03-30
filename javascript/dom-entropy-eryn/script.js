let clickCount = 0;

function addDots() {
    let dot = document.createElement('div');
    console.log("function runs. dot is created.")
    dot.className = "dot";

    let size = Math.random() * 80 + 20;
    dot.style.width = size + "px";
    dot.style.height = size + "px";

    let left = Math.random() * 100;
    dot.style.left = left + "vw";

    let duration = Math.random() * 6 + 4;
    dot.style.animation = "floatUpDown " + duration + "s ease-in-out infinite";
    document.querySelector('body').append(dot);
}
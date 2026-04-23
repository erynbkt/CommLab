let window = document.querySelector(".window");
let img = document.querySelector(".hover-img");

window.addEventListener("hover", function(event) {

  let x = event.offsetX / window.offsetWidth;
  let y = event.offsetY / window.offsetHeight;

  let moveX = (x - 0.5) * -30;
  let moveY = (y - 0.5) * -30;

  img.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
});

window.addEventListener("mouseleave", function() {
  img.style.transform = "translate(0px, 0px)";
});
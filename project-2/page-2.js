// const cursorCircle = document.querySelector(".cursor-circle");

// const heading = document.querySelector(".container h1");
let container = document.querySelector(".container")

setTimeout(function () {
  container.style.opacity = 1;
}, 1000)

let fgImage = document.querySelector("#i1");
let bgImage = document.querySelector("#i2");

var rect = container.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

let mouseYperc = 0;
let mouseXperc = 0;

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  console.log("mouseY:", mouseY)


  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  mouseXperc = mouseX / windowWidth - .5;
  mouseYperc = mouseY / windowHeight - .5;
  console.log(mouseXperc, "mouseYperc" , mouseYperc)

  let bgXrange = 400;
  let bgTranslateX = bgXrange * mouseXperc * -1;
  let bgYrange = 400;
  let bgTranslateY = bgYrange * mouseYperc * -1;
  bgImage.style.transform = "translate(" + bgTranslateX + "px, " + bgTranslateY + "px)";

  if (mouseYperc <= -0.35) {
    document.body.style.cursor = "pointer";
    console.log("cursor change");
  } else {
    document.body.style.cursor = "default";
  }
})

document.addEventListener("click", function () {
  if (mouseYperc <= -0.35) {
    window.location.href = "page-3.html";
  }
})



  // let fgTransformY = 0;
  // let fgTransformX = 0;
  // //moving vertically - doesn't work :(
  // if (mouseY >= rect.bottom){
  //   // fgImage.style.top = "100px"
  //   // bgImage.style.top = "-100px"
  //   // fgImage.style.transform = "translateY(100px)"
  //   fgTransformY = 100;
  //   bgImage.style.transform = "translateY(-100px)"
  // }
  // else if (mouseY <=rect.top){
  //   // fgImage.style.top = "-100px"
  //   // bgImage.style.top = "100px"
  //   // fgImage.style.transform = "translateY(-100px)"
  //   fgTransformY = -100;
  //   bgImage.style.transform = "translateY(100px)"
  // }
  // else {
  //   // fgImage.style.transform = "translateY(0px)"
  //   fgTransformY = 0;
  //   bgImage.style.transform = "translateY(0px)"
  // }

  // //moving horizontally
  // if (mouseX >= rect.right){
  //   // fgImage.style.top = "100px"
  //   // bgImage.style.top = "-100px"
  //   // fgImage.style.transform = "translateX(100px)"
  //   fgTransformX = 100;
  //   bgImage.style.transform = "translateX(-100px)"
  // }
  // else if (mouseX <=rect.left){
  //   // fgImage.style.top = "-100px"
  //   // bgImage.style.top = "100px"
  //   // fgImage.style.transform = "translateX(-100px)"
  //   fgTransformX = -100; 
  //   bgImage.style.transform = "translateX(100px)"
  // }
  // else {
  //   // fgImage.style.transform = "translateX(0px)";
  //   fgTransformX = 0;
  //   bgImage.style.transform = "translateX(0px)"
  // }
  // fgImage.style.transform = "translate("+fgTransformX+"px, "+fgTransformY+"px)";




// function headlineClicked(){
//   window.location.href = "page-3.html";
// }

// heading.addEventListener("click", headlineClicked);










// inspo: https://www.youtube.com/watch?v=nOOK3Z5h6bw
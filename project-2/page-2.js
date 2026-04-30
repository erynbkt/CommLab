// const cursorCircle = document.querySelector(".cursor-circle");

// const heading = document.querySelector(".container h1");

setTimeout(function () {
  container.style.opacity = 1
}, 1000)

let fgImage = document.querySelector("#i1")
let bgImage = document.querySelector("#i2")

let container = document.querySelector(".container")
var rect = container.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);


document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  console.log("mouseY:", mouseY)


  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let mouseXperc = mouseX / windowWidth - .5;
  let mouseYperc = mouseY / windowHeight - .5;
  console.log(mouseXperc, mouseYperc)

  // let cloudXrange = 200;
  // let cloudTranslateX = cloudXrange*mouseXperc;
  // let cloudYrange = 200;
  // let cloudTranslateY = cloudYrange*mouseYperc;
  // fgImage.style.transform = "translate("+cloudTranslateX+"px, "+cloudTranslateY+"px)";


  let bgXrange = 200;
  let bgTranslateX = bgXrange * mouseXperc * -1;
  let bgYrange = 200;
  let bgTranslateY = bgYrange * mouseYperc * -1;
  bgImage.style.transform = "translate(" + bgTranslateX + "px, " + bgTranslateY + "px)";



  document.addEventListener("click", function () {
    if (mouseXperc > -0.01 && mouseYperc > -0.01 || mouseXperc < 0.01  && mouseYperc < 0.01) {
      window.location.href = "page-3.html"
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


})




// function headlineClicked(){
//   window.location.href = "page-3.html";
// }

// heading.addEventListener("click", headlineClicked);










// inspo: https://www.youtube.com/watch?v=nOOK3Z5h6bw
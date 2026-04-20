let hours   = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let screen = document.querySelector("#screen");


function changeColor(element) {
  // floor rounds it to the nearest decimal number
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  element.style.color = "rgb(" + r + "," + g + "," + b + ")";
}


let baseSpeed = 5.2; //pixels per frame
// speed top and left makes it move diagonally
let hSpeedLeft = baseSpeed/3600 * 0.8; //multiply
let hSpeedTop  = baseSpeed/3600 * 0.6; //multiply different amount so that it moves in a diagonal direction

let mSpeedLeft = baseSpeed/10 * 0.8;
let mSpeedTop  = baseSpeed/10 * 0.6;

let sSpeedLeft = baseSpeed * 0.8;
let sSpeedTop  = baseSpeed * 0.6;

// position elements y px from the top and x from the left 
let hLeft = 80,  hTop = 60;
let mLeft = 200, mTop = 200;
let sLeft = 300, sTop = 280;

// grabs the current time from the computer and puts it into the clock text
let now = new Date();

hours.textContent   = now.getHours();
minutes.textContent = now.getMinutes();
seconds.textContent = now.getSeconds();

changeColor(hours);
changeColor(minutes);
changeColor(seconds);


function tick() {

  let screenW = screen.offsetWidth;
  let screenH = screen.offsetHeight;
  let now = new Date();


// new position = old position + step size
  hLeft = hLeft + hSpeedLeft;
  hTop  = hTop  + hSpeedTop;
  // has the text reached the left wall of the screen OR has the right edge of the text touched the right wall?
  if (hLeft <= 0 || hLeft >= screenW - hours.offsetWidth) { //We subtract because we want the edge of the text to hit the wall, not its left side.
    // checks if hours text hit a vertical wall
    hSpeedLeft = hSpeedLeft * -1; 
    changeColor(hours); // when it hits the wall, it changes direction
    hours.textContent = now.getHours(); // when it hits the wall, the hour is also updated
  }
  // has the text reached the top wall of the screen OR has the bottom edge of the text touched the bottom wall?
  if (hTop <= 0 || hTop >= screenH - hours.offsetHeight) {
    hSpeedTop = hSpeedTop * -1;
    changeColor(hours);
    hours.textContent = now.getHours();
  }
  // places the element at its new position.
  hours.style.left = hLeft + "px";
  hours.style.top  = hTop  + "px";



  mLeft = mLeft + mSpeedLeft;
  mTop  = mTop  + mSpeedTop;

  if (mLeft <= 0 || mLeft >= screenW - minutes.offsetWidth) {
    mSpeedLeft = mSpeedLeft * -1;
    changeColor(minutes);
    minutes.textContent = now.getMinutes();
  }
  if (mTop <= 0 || mTop >= screenH - minutes.offsetHeight) {
    mSpeedTop = mSpeedTop * -1;
    changeColor(minutes);
    minutes.textContent = now.getMinutes();
  }

  minutes.style.left = mLeft + "px";
  minutes.style.top  = mTop  + "px";



  sLeft = sLeft + sSpeedLeft;
  sTop  = sTop  + sSpeedTop;

  if (sLeft <= 0 || sLeft >= screenW - seconds.offsetWidth) {
    sSpeedLeft = sSpeedLeft * -1;
    changeColor(seconds);
    seconds.textContent = now.getSeconds();
  }
  if (sTop <= 0 || sTop >= screenH - seconds.offsetHeight) {
    sSpeedTop = sSpeedTop * -1;
    changeColor(seconds);
    seconds.textContent = now.getSeconds();
  }

  seconds.style.left = sLeft + "px";
  seconds.style.top  = sTop  + "px";
}

setInterval(tick, 16);
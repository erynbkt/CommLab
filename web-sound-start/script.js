let playBtn =  document.querySelector("#playButton");
let pauseBtn =  document.querySelector("#pauseButton");
let catSound = document.querySelector("#catSound");

let soundSpeed = 1;
let fastBtn = document.querySelector("#fastButton");
let slowBtn = document.querySelector("#slowButton");
let speedDisplay = document.querySelector("#speed");

function playSound(){
    console.log("groovy");
    catSound.loop = true;
    catSound.play();
}
playBtn.addEventListener("click", playSound)

function pauseSound(){
    console.log("pause");
    catSound.pause();
}
pauseBtn.addEventListener("click", pauseSound)




fastBtn.addEventListener("click", function(){
    // increase global soundSpeed variable
    soundSpeed = soundSpeed * 1.1;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;
})

slowBtn.addEventListener("click", function(){
    // decrease global soundSpeed variable
    soundSpeed = soundSpeed * 0.9;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;
})



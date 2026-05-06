let headline = document.querySelector("#headline")
let year = document.querySelector("#year")

let lastDigitSlider = document.querySelector("#last-digit-slider")
let lastDigitCurrent = document.querySelector("#last-digit-current")
let lastDigitNext = document.querySelector("#last-digit-next")
 
let secondToLastDigitSlider = document.querySelector("#second-to-last-digit-slider")
let secondToLastDigitCurrent = document.querySelector("#second-to-last-digit-current")
let secondToLastDigitNext = document.querySelector("#second-to-last-digit-next")
 
let alreadyNavigated = false



let start = document.querySelector("#start")
let beginSound = document.querySelector("#beginSound")

let message = document.querySelector("#message")


let bgScene = document.querySelector("#bgScene")


start.addEventListener("click", function() {
    beginSound.loop = true
    beginSound.play()
    let howFarICanScroll = document.body.scrollHeight - window.innerHeight
    window.scrollTo({ top: howFarICanScroll * 0.24, behavior: "smooth" })
})

function getScrollPercentage() {
    let scrolledAlready = window.scrollY
    let pageHeight = document.body.scrollHeight
    let windowHeight = window.innerHeight
    let possibleScrollSpace = pageHeight - windowHeight
    return scrolledAlready / possibleScrollSpace
}
 
 
window.addEventListener("scroll", function () {
    let percentage = getScrollPercentage()
 
    if (percentage < 0.12) {
        headline.style.opacity = 1
    } else if (percentage < 0.24) {
        headline.style.opacity = 1 - (percentage - 0.12) / 0.12 
        start.style.opacity = 1 - (percentage - 0.12) / 0.12
    } else {
        headline.style.opacity = 0
        start.style.opacity = 0
    }
 
 
    if (percentage < 0.18) {
        year.style.opacity = 0
 
    } else if (percentage < 0.30) {
        year.style.opacity = (percentage - 0.18) / 0.12
 
    } else {
        year.style.opacity = 1
    }

 
    if (percentage < 0.33) {
        lastDigitCurrent.innerText = "5"
        lastDigitNext.innerText = "6"
        lastDigitSlider.style.transform = "translateY(0%)"
        message.style.opacity = 0
 
    } else if (percentage < 0.43) {
        let progress = (percentage - 0.33) / 0.10
        lastDigitCurrent.innerText = "5"
        lastDigitNext.innerText = "6"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
        message.innerText = "I was born into her arms"
        message.style.opacity = 1
        bgScene.src = "images/1965.jpg"
        bgScene.style.opacity = 0.2
 
    } else if (percentage < 0.47) {
        lastDigitCurrent.innerText = "6"
        lastDigitNext.innerText = "7"
        lastDigitSlider.style.transform = "translateY(0%)"
        message.innerText = "she was my whole world"
        message.style.opacity = 1
        bgScene.src = "images/1966.jpg"
        bgScene.style.opacity = 0.2
 
    } else if (percentage < 0.55) {
        let progress = (percentage - 0.47) / 0.08
        lastDigitCurrent.innerText = "6"
        lastDigitNext.innerText = "7"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else if (percentage < 0.59) {
        lastDigitCurrent.innerText = "7"
        lastDigitNext.innerText = "8"
        lastDigitSlider.style.transform = "translateY(0%)"
        message.innerText = "then a little one arrived"
        message.style.opacity = 1
        bgScene.src = "images/1967.jpg"
        bgScene.style.opacity = 0.2
 
    } else if (percentage < 0.66) {
        let progress = (percentage - 0.59) / 0.07
        lastDigitCurrent.innerText = "7"
        lastDigitNext.innerText = "8"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else if (percentage < 0.70) {
        lastDigitCurrent.innerText = "8"
        lastDigitNext.innerText = "9"
        lastDigitSlider.style.transform = "translateY(0%)"
        message.innerText = "I taught her what I'd learned"
        message.style.opacity = 1
        bgScene.src = "images/1968.jpg"
        bgScene.style.opacity = 0.2
 
    } else if (percentage < 0.77) {
        let progress = (percentage - 0.70) / 0.07
        lastDigitCurrent.innerText = "8"
        lastDigitNext.innerText = "9"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else if (percentage < 0.81) {
        lastDigitCurrent.innerText = "9"
        lastDigitNext.innerText = "0"
        lastDigitSlider.style.transform = "translateY(0%)"
        message.innerText = "one ahead, one behind"
        message.style.opacity = 1
        bgScene.src = "images/1968.jpg"
        bgScene.style.opacity = 0.2
 
    } else if (percentage < 0.90) {
        let progress = (percentage - 0.81) / 0.09
        lastDigitCurrent.innerText = "9"
        lastDigitNext.innerText = "0"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else {
        lastDigitCurrent.innerText = "0"
        lastDigitNext.innerText = "0"
        lastDigitSlider.style.transform = "translateY(0%)"
        message.innerText = "the three of us, finally complete"
        message.style.opacity = 1
        bgScene.src = "images/1970.jpg"
        bgScene.style.opacity = 0.2
    }
 
 
    if (percentage < 0.81) {
        secondToLastDigitCurrent.innerText = "6"
        secondToLastDigitNext.innerText = "7"
        secondToLastDigitSlider.style.transform = "translateY(0%)"
 
    } else if (percentage < 0.90) {
        let progress = (percentage - 0.81) / 0.09
        secondToLastDigitCurrent.innerText = "6"
        secondToLastDigitNext.innerText = "7"
        secondToLastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else {
        secondToLastDigitCurrent.innerText = "7"
        secondToLastDigitNext.innerText = "7"
        secondToLastDigitSlider.style.transform = "translateY(0%)"
    }
 
  
    if (percentage >= 0.93) {
        year.style.opacity = "0"
    }

    if (percentage >= 0.99) {
        window.location.href = "page-2.html"
    }
 
})


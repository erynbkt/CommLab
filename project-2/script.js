let headline = document.querySelector("#headline")
let year = document.querySelector("#year")
let endMessage = document.querySelector("#end-message")

let lastDigitSlider = document.querySelector("#last-digit-slider")
let lastDigitCurrent = document.querySelector("#last-digit-current")
let lastDigitNext = document.querySelector("#last-digit-next")
 
let secondToLastDigitSlider = document.querySelector("#second-to-last-digit-slider")
let secondToLastDigitCurrent = document.querySelector("#second-to-last-digit-current")
let secondToLastDigitNext = document.querySelector("#second-to-last-digit-next")
 
let alreadyNavigated = false

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
    } else {
        headline.style.opacity = 0
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
 
    } else if (percentage < 0.43) {
        let progress = (percentage - 0.33) / 0.10
        lastDigitCurrent.innerText = "5"
        lastDigitNext.innerText = "6"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else if (percentage < 0.47) {
        lastDigitCurrent.innerText = "6"
        lastDigitNext.innerText = "7"
        lastDigitSlider.style.transform = "translateY(0%)"
 
    } else if (percentage < 0.55) {
        let progress = (percentage - 0.47) / 0.08
        lastDigitCurrent.innerText = "6"
        lastDigitNext.innerText = "7"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else if (percentage < 0.59) {
        lastDigitCurrent.innerText = "7"
        lastDigitNext.innerText = "8"
        lastDigitSlider.style.transform = "translateY(0%)"
 
    } else if (percentage < 0.66) {
        let progress = (percentage - 0.59) / 0.07
        lastDigitCurrent.innerText = "7"
        lastDigitNext.innerText = "8"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else if (percentage < 0.70) {
        lastDigitCurrent.innerText = "8"
        lastDigitNext.innerText = "9"
        lastDigitSlider.style.transform = "translateY(0%)"
 
    } else if (percentage < 0.77) {
        let progress = (percentage - 0.70) / 0.07
        lastDigitCurrent.innerText = "8"
        lastDigitNext.innerText = "9"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else if (percentage < 0.81) {
        lastDigitCurrent.innerText = "9"
        lastDigitNext.innerText = "0"
        lastDigitSlider.style.transform = "translateY(0%)"
 
    } else if (percentage < 0.90) {
        let progress = (percentage - 0.81) / 0.09
        lastDigitCurrent.innerText = "9"
        lastDigitNext.innerText = "0"
        lastDigitSlider.style.transform = "translateY(" + (-progress * 50) + "%)"
 
    } else {
        lastDigitCurrent.innerText = "0"
        lastDigitNext.innerText = "0"
        lastDigitSlider.style.transform = "translateY(0%)"
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
 
  
    if (percentage >= 0.90) {
        year.style.opacity = "0"
    }

    if (percentage >= 0.99) {
        window.location.href = "page-2.html"
    }
 
})
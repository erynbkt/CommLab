let allDots = document.querySelectorAll("span:not(.special)")
let specialDots = document.querySelectorAll("span.special")
let dotField = document.querySelector("p")
 
let fieldWidth = dotField.offsetWidth
let fieldHeight = dotField.offsetHeight
let centerX = fieldWidth * 0.5
let centerY = fieldHeight * 0.5
 
 allDots.forEach(function(dot) {
    let angle = Math.random() * 2 * Math.PI
    let randomDistance = Math.random()
    let randomX = centerX + (randomDistance * fieldWidth  * 0.45) * Math.cos(angle)
    let randomY = centerY + (randomDistance * fieldHeight * 0.45) * Math.sin(angle)
    dot.style.left = randomX + "px"
    dot.style.top = randomY + "px"
 
    let randomDuration = (Math.random() * 2 + 2) + "s"
    let randomDelay = (Math.random() * 2) + "s"
    dot.style.animation = "wiggle " + randomDuration + " " + randomDelay + " infinite"
})
 
specialDots.forEach(function(dot) {
    let angle = Math.random() * 2 * Math.PI
    let randomDistance = Math.random()
    let randomX = centerX + (randomDistance * fieldWidth  * 0.40) * Math.cos(angle)
    let randomY = centerY + (randomDistance * fieldHeight * 0.40) * Math.sin(angle)
    dot.style.left = randomX + "px"
    dot.style.top = randomY + "px"
})

// https://stackoverflow.com/questions/29914084/fit-100-items-in-a-circular-container-evenly-spaced-with-javascript
 
let specialDotsFound = 0
 
function specialDotWasHovered(eventInfo) {
    let dot = eventInfo.target
 
    if (dot.style.backgroundColor != "black") {
        dot.style.transition = "all .3s linear"
        dot.style.transform = "scale(2)"
        dot.style.backgroundColor = "black"
        dot.style.borderRadius = "50%"
 
        specialDotsFound = specialDotsFound + 1
        console.log("special dots found:", specialDotsFound)
 
        if (specialDotsFound >= 3) {
            goToNextPage()
        }
    }
}

function addHover(dot) {
    dot.addEventListener("mouseover", specialDotWasHovered)
}

specialDots.forEach(addHover)

function goToNextPage() {
    dotField.style.transition = "all 3s linear"
    dotField.style.backgroundColor = "black"
    dotField.style.transform = "scale(100)"
 
    setTimeout(function() {
        window.location.href = "page-4.html"
    }, 1000)
}
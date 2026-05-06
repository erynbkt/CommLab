let audio = document.querySelector("#audio")
let soundStarted = false

document.addEventListener("mousemove", function(eventInfo) {
    if (!soundStarted) {
        audio.play()
        soundStarted = true
    }
    mouseMoved(eventInfo)
})

document.addEventListener("mousemove", mouseMoved);

function mouseMoved(eventInfo) {
    let x = eventInfo.clientX;
    let y = eventInfo.clientY;
    console.log(x, y);
    document.body.style.background = "radial-gradient(circle at " + x + "px " + y + "px, #5e5e5e 0%, black 45%)"
}

let englishText = document.querySelector("#english");
let arabicText = document.querySelector("#arabic");
let arabicSecondEl = document.querySelector("#arabicSecondPart")
let langSwitch = document.querySelector("#languageSwitch");
let stitchContainer = document.querySelector("#stitchContainer")
let stitchContainerEnglish = document.querySelector("#stitchContainerEnglish");
let englishSecondEl = document.querySelector("#englishSecondPart")


let arabicFirstPart  = "أعلم أنه مرّت سنوات منذ أن جمعنا سقف واحد. لكنني لا أزال أفكر في تلك الأمسيات حين كانت أمي تخيط ملابسنا";
let arabicSecondPart = "، واحدة تلو الأخرى. كنّا نجلس وننتظر، نراقب يديها وهي تتحرك. وحين تنتهي، كنّا نركض — مباشرة إلى النهر.";
let englishFirstPart  = "I know it's been years since we've been in the same room. but I still think about the afternoons when mom would sew our clothes, ";
let englishSecondPart = "one by one. we'd sit and wait, watching her hands move. and when she was done, we'd run straight to the river.";

let showingArabic = true;
arabicText.style.display = "block";
englishText.style.display = "none";

langSwitch.addEventListener("click", function() {
    if (showingArabic) {
        arabicText.style.display  = "none";
        arabicSecondEl.style.display  = "none";

        stitchContainer.style.display  = "none";

        englishText.style.display = "block";
        stitchContainerEnglish.style.display = "block";
        englishSecondEl.style.display = "block";

        langSwitch.innerText = "ع";
        showingArabic = false;
    } else {
        englishText.style.display = "none";
        stitchContainerEnglish.style.display = "none";
        englishSecondEl.style.display = "none";
        arabicText.style.display  = "block"
        arabicSecondEl.style.display  = "block";
        stitchContainer.style.display  = "block";
        langSwitch.innerText = "en";
        showingArabic = true
    }
})

// ------------------------------------------------------------------------------
let arabicIndex = 0

setTimeout(function() {
    startArabicTyping()
}, 500)

function startArabicTyping() {
    let arabicInterval = setInterval(function() {
        arabicText.innerText = arabicFirstPart.slice(0, arabicIndex)
        arabicIndex = arabicIndex + 1

        if (arabicIndex > arabicFirstPart.length) {
            clearInterval(arabicInterval)
            startStitching()
        }
    }, 50)
}

function startStitching() {
    console.log("stitching started")
    stitchContainer.style.display = "block";
    let stitchCount = 0;

    let stitchInterval = setInterval(function() {
        stitchContainer.innerText = stitchContainer.innerText + "v  "
        stitchCount = stitchCount + 1;

        if (stitchCount >= 77) {
            clearInterval(stitchInterval)
            startArabicSecondPart();
        }
    }, 100)
}



function startArabicSecondPart() {
    arabicSecondEl.innerText = arabicSecondPart;
    stitchContainerEnglish.innerText = "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"
    englishSecondEl.innerText = englishSecondPart;
    englishText.innerText = englishFirstPart;
    arabicSecondEl.style.display = "block";

    setTimeout(function() {
        arabicSecondEl.style.opacity = 1;
        langSwitch.style.opacity = 1;
        document.querySelector("#river").style.opacity = 1;
        document.querySelector("#hint").style.opacity = 1
    }, 100)
}

// ---------------------------------------------------------------------------------

let allFish = document.querySelectorAll(".fish")
console.log("fish count:", allFish.length)

allFish.forEach(function(fish) {
    let randomX = Math.random() * window.innerWidth
    let randomY = Math.random() * 150
    fish.style.left = randomX + "px";
    fish.style.top  = randomY + "px";
})

allFish.forEach(function(fish) {
    fish.addEventListener("mouseenter", function() {
        let randomX = Math.random() * 300 - 150;
        let randomY = Math.random() * 100 - 50;
        fish.style.transform = "translate(" + randomX + "px, " + randomY + "px)"
    })
})

document.querySelector("#river").addEventListener("click", function() {
    allFish.forEach(function(fish) {
        fish.style.transition = "all 1s ease"
        fish.style.opacity = "0"
        fish.style.transform = "translate(" + (Math.random() * 400 - 200) + "px, " + (Math.random() * 200 - 100) + "px)"
    })

    setTimeout(function() {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "0";
    }, 1000)

    setTimeout(function() {
        window.location.href = "page-5.html"
    }, 2000)
})
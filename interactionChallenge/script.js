// old code:
function spanHovered(eventInfo){
    console.log("hello");

    let btn  = document.querySelector("button");

    eventInfo.target.style.color = "red";
    let randomX = Math.random()*200-100; // -100 to 100
    let randomY = Math.random()*200-100; // -100 to 100
    eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

function addMover(element){
    element.addEventListener("mouseover", spanHovered);
}

let allSpans = document.querySelectorAll("span");
allSpans.forEach(addMover)



let max_y1 = Math.random()*600-300;


window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();
    console.log("percentage", percentage)
    console.log("scrolls")//step 1: know that it scrolls

    // select the first letter
    let firstSpan = document.querySelector("span:nth-child(1)");
    // move it using the "top" attribute
    let max_y = 200;
    let y1 = max_y1*(percentage);
    firstSpan.style.top = y1+"px"
    // move it to a point that involves the percentage variable
    
    document.querySelector("span:nth-child(2)").style.top = ((percentage)*-200)+"px";
})


function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}

let angle = 360;

function spinElm(element){
    // let ranDegree = Math.random()*1000;
    // element.style.transform = "rotate("+ranDegree+"deg)";
    element.style.transform = "rotate("+angle+"deg)";
    angle = angle + 360;

}

function spinAllLetters(){
    let allSpans = document.querySelectorAll("span");
    allSpans.forEach(spinElm);
}

document.querySelector("#spinButton").addEventListener("click", spinAllLetters)
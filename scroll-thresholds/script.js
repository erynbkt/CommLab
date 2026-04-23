//add an event listener to the window
//the event we want to listen to is called "scroll"

function getScrollPercentage() {
    //how far have we scrolled
    let scrollTop = window.scrollY;

    //how high is our page
    let pageHeight = document.body.scrollHeight;

    //how big the window is
    let windowHeight = window.innerHeight;

    //how far can we scroll
    let possibleScrollSpace = pageHeight - windowHeight;

    let percentage = scrollTop / possibleScrollSpace * 100;
    return percentage;
    // console.log(scrollTop, possibleScrollSpace);
}

function windowWasScrolled() {
    let percentage = getScrollPercentage()
    console.log("percentage", percentage)

    if(percentage > 33){
        console.log("paragraph should be in view");
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    }else{
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }

    if(percentage > 77.5){
        console.log("paragraph should be in view");
        document.querySelector(".two p").style.transform = "scale(2)";
        document.querySelector(".two p").style.color = "yellow";
    }else{
        document.querySelector(".two p").style.transform = "scale(1)";
        document.querySelector(".two p").style.color = "black";
    }

    let windowWidth = window.innerWidth;
    let cat_x_max = windowWidth - 100;
    let cat_x = cat_x_max * (percentage/100);
    document.querySelector("#cat-image").style.transform = "translate(" + cat_x + "px, 0px)"
}

window.addEventListener("scroll", windowWasScrolled)



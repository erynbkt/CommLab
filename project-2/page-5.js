setTimeout(function() {
    document.body.style.opacity = 1;
}, 300)

let backButton = document.querySelector("#backButton");

backButton.addEventListener("click", function() {
    document.body.style.opacity = 0;

    setTimeout(function() {
        window.location.href = "index.html";
    }, 1000)
})
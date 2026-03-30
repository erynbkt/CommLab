// alert("hello?")
// console.log
// onclick

let person = "Eryn";
let lesson = 1;

alert("Hi " + person + "! " + "Welcome to lesson " + lesson);

function greet() {
    alert("hi!");
    console.log("i was clicked")
}

function greet2(theName) {
    console.log("welcome to " + theName)
}

function changeHeadline() {
    console.log("function runs. changing headline")
    document.querySelector("#programmingLanguage").innerText = "java?";
}

function reverseHeadline() {
    console.log("function runs. reversing headline")
    document.querySelector("#programmingLanguage").innerText = "javascript"
}



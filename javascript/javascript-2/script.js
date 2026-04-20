let monkeyEnclosure = document.querySelector("#monkeyEnclosure")

function newMonkey() {
    console.log("making new monkey");
    //make div
    let div = document.createElement("div");

    //make p tag
    let p = document.createElement("p");
    //add class name
    div.className = "monkey";
    //add text
    p.innerText = "🐒"
    //make position random
    let randomY = Math.random()*200-100;
    div.style.top = randomY + "px";
    let randomX = Math.random()*200-100;
    div.style.left = randomX + "px";

    //attach p tag to div
    div.append(p);

    //attach  div to monkey enclosure
    monkeyEnclosure.append(div);
}

function newMonkey {
    newAnimal("monkey", monkeyEnclosure)
}

function newAnimal(name, enclosure) {
    console.log("making new" + name);
    //make div
    let div = document.createElement("div");

    //add class name
    div.className = name;


    //make position random
    let randomY = Math.random()*200-100;
    div.style.top = randomY + "px";
    let randomX = Math.random()*200-100;
    div.style.left = randomX + "px";

    let p = document.createElement("p")
    //add text
    p.innerText = name;

    //attach p tag to div
    div.append(p);

    //attach  div to monkey enclosure
    enclosure.append(div);
}
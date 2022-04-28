//new 
function changefont(H, time = 3000) {

    H.style.fontFamily = "'Rubik Moonrocks', cursive";


    setTimeout(function () {
        H.style.fontFamily = "'Righteous', cursive";
    }, time);
}


//for header 
const text = document.querySelectorAll(".header");
for (let z = 0; z < text.length; z++) {

    const strtext = text[z].textContent;
    // console.log(strtext);
    const splitText = strtext.split("");

    text[z].textContent = "";
    for (let i = 0; i < splitText.length; i++) {

        text[z].innerHTML += "<span class=main>" + splitText[i] + "</span>";

    }
}

// change font of span element when mouse is over span element
const span = document.getElementsByClassName("main");
// console.log(span);
Array.from(span).forEach(function (element) {
    element.addEventListener("mouseover", function () {
        changefont(element);
    });
});
//ramdomly change font of span element in every 2 seconds
setInterval(function () {
    let randspan = Math.floor(Math.random() * span.length);
    changefont(span[randspan], 2000);
    let randspan2 = Math.floor(Math.random() * span.length);
    changefont(span[randspan2], 4000);
}, 2000);

//for details
const details = document.querySelectorAll(".detail");
for (let a = 0; a < details.length; a++) {

    const textdetails = details[a].textContent;
    const splitdetials = textdetails.split(" ");
    // console.log(splitdetials);
    details[a].textContent = "";
    for (let i = 0; i < splitdetials.length; i++) {
        details[a].innerHTML += "<span class=innerdetail>" + splitdetials[i] + "</span>";
        details[a].innerHTML += " ";
    }
}
const innerdetails = document.getElementsByClassName("innerdetail");
Array.from(innerdetails).forEach(function (element) {
    element.addEventListener("mouseover", function () {
        changefont(element);
    });
});







//for options
const me = document.getElementById("me");
const love = document.getElementById("love");
const intersted = document.getElementById("intersted");
const work = document.getElementById("work");
let optionarrya = [me, love, intersted, work];
for (let q = 0; q < optionarrya.length; q++) {
    optionarrya[q].addEventListener("mouseover", function () {
        optionarrya[q].style.fontFamily = "'Rubik Moonrocks', cursive";
        optionarrya[q].addEventListener("mouseout", function () {
            optionarrya[q].style.fontFamily = "'Righteous', cursive";
        });
    });
}



//get all id which contain same class name "page" in whole document
const pages = document.getElementsByClassName("page");
let pageids = [];
for (let i = 0; i < pages.length; i++) {
    pageids.push(pages[i].id);
}

//color
let color = ["#F4BB03", "#E9A1B9", "#02C9C9", "#C2D53F"];
document.getElementById(pageids[0]).style.display = "block";
document.body.style.backgroundColor = color[0];
//changing pages
for (let b = 0; b < optionarrya.length; b++) {
    optionarrya[b].addEventListener("click", function () {
        for (let c = 0; c < pageids.length; c++) {
            document.getElementById(pageids[c]).style.display = "none";
        }

        document.getElementById(pageids[b]).style.display = "block";
        document.body.style.backgroundColor = color[b];
        document.getElementById(pageids[b]).style.marginTop = "10%"
    });
};


// after every 4 second click option one after another
let clickjs = 0;
let previousclick = 0;
setInterval(function () {

    for (let z = 0; z < optionarrya.length; z++) {
        optionarrya[z].style.fontFamily = "'Righteous', cursive";
    }

    if (clickjs < optionarrya.length) {
        optionarrya[clickjs].click();
        optionarrya[clickjs].style.fontFamily = "'Rubik Moonrocks', cursive";
        clickjs++;
    } else {
        clickjs = 0;
        optionarrya[clickjs].click();
        optionarrya[clickjs].style.fontFamily = "'Rubik Moonrocks', cursive";
        clickjs++;
    }

}, 8000);

navbar = document.getElementsByClassName("hoverable");
for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener("mouseover", function () {
        navbar[i].style.fontFamily = "'Rubik Moonrocks', cursive";
    });
    navbar[i].addEventListener("mouseout", function () {
        navbar[i].style.fontFamily = "'Righteous', cursive";
    });
};


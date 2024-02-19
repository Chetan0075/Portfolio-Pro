var a = document.querySelector(".iam");
var b = document.querySelector(".iam2");
var c = document.querySelector(".button-53");
var d = document.querySelector(".bio"); transition = "opacity 1.2s ease-in-out";
var e = document.querySelector(".que1");
var f = document.querySelector(".queans");
var g = document.querySelector(".queans .ans1");
var h = document.querySelector(".queans .ans2");


setTimeout(function () {
    var a = document.querySelector(".iam");
    a.style.margin = "-20vh 0vh 0vh 15vh"; transition = "opacity 1.2s ease-in-out";
}, 2000);

setTimeout(function () {
    var b = document.querySelector(".iam2");
    b.innerHTML = "Pro Website Devloper";
    b.style.opacity = "1";
}, 2800);

setTimeout(function () {
    c.style.opacity = "0.8";
}, 4000);


setTimeout(function () {
    d.style.opacity = "1";
}, 3500);

function skills() {
    f.style.opacity = "1";
}

e.addEventListener("mouseover", function () {
    f.style.opacity = "1";
    f.style = "animation: slowSlideUp 2s ease-out forwards "; "transition: opacity  0.5s ease-in-out";
    skills();
})













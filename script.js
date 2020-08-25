var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

//Prints default value 
css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

//Generate random Gradient
function randomColor() {
    var random1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    var random2 = "#" + Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
    css.textContent = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
    color1.value = random1
    color2.value = random2

}

//Gradient function by input
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

//Event listeners 
randomBtn.addEventListener("click", randomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

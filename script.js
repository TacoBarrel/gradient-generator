let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.getElementById("random");

//Prints default value 
css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

// This is from CSS Tricks
let randomMath = () => "#" + Math.floor(Math.random()*16777215).toString(16);
//Generate random Gradient
let randomColor = () => {
    let random1 = randomMath();
    let random2 = randomMath();
    body.style.background = `linear-gradient(to right, ${random1}, ${random2})`;
    css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    color1.value = random1
    color2.value = random2

}

//Gradient function by input
let setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

//Event listeners 
randomBtn.addEventListener("click", randomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

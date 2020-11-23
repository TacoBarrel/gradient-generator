const css = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".color");
const body = document.querySelector("#gradient");
const randomBtn = document.querySelector("#random");
// Set and show the current gradient
const _cssText = () => `linear-gradient(to right, ${color1.value}, ${color2.value})`;
// This is from CSS Tricks
const randomMath = () => "#" + Math.floor(Math.random()*16777215).toString(16);
//Generate random Gradient
const randomColor = () => {
    const random1 = randomMath();
    const random2 = randomMath();
    color1.value = random1
    color2.value = random2
    css.textContent = _cssText();
    body.style.background = _cssText();
}
//Gradient function by input
const setGradient = () => {
    body.style.background = _cssText();
    css.textContent = _cssText();
}
//Prints default value 
css.textContent = _cssText();
//Event listeners 
randomBtn.addEventListener("click", randomColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

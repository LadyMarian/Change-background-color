const body = document.querySelector("body");
const button = document.getElementById("button");
const color = ["blue", "purple", "pink", "red", "orange", "yellow", "green"];

function changeColor() {
	body.style.background = color[Math.floor(Math.random() * color.length)];
}

button.addEventListener("click", changeColor);

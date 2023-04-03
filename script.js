var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.querySelector("body")
var randomButton = document.querySelector(".randomButton")


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function getRandomHex() {
	var letters = "0123456789ABCDEF";
    var color = '#'; 
    // generating 6 times as HTML color code consist
    for (var i = 0; i < 6; i++) {
 		color += letters[(Math.floor(Math.random() * 16))];
    }
    return color
}


color1.value = getRandomHex();
color2.value = getRandomHex();
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", function() {
	color1.value = getRandomHex();
	color2.value = getRandomHex();
	setGradient();
})
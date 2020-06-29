 var numSquares = 6;
 var colors = getColors(numSquares);
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var result = document.querySelector(".Result");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
colorDisplay.textContent = pickedColor;

easybtn.addEventListener("click",function () {
	numSquares = 3;
	this.classList.add("selected");
	hardbtn.classList.remove("selected");
	colors = getColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i = 0; i < square.length; i++) {
	if (colors[i])
	square[i].style.background = colors[i];
else
	square[i].style.display = "none";
}

})

hardbtn.addEventListener("click",function () {
	this.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares = 6;
	// set new colors to the array
	colors = getColors(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change the colordisplay same as the picked one
	colorDisplay.textContent = pickedColor;
	//change all the colors of sq
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
			square[i].style.display = "block";
	}
})


reset.addEventListener("click",function() {
			reset.textContent = "New colors"
	result.textContent = "";
	// set new colors to the array
	colors = getColors(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change the colordisplay same as the picked one
	colorDisplay.textContent = pickedColor;
	//change all the colors of sq
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
})



for (var i = 0; i < square.length; i++) {
	square[i].style.background = colors[i];


square[i].addEventListener("click",function () {
	var clickedColor = this.style.background;

	if (clickedColor === pickedColor) {
		correctColor(pickedColor);
		result.textContent = "Correct";
		h1.style.background = pickedColor;
		reset.textContent = "Play again?"
	}
	else
		{this.style.background = "#232323";
	result.textContent = "Try again";}
	})
}

function correctColor(color){
for (var i = 0; i < square.length; i++){
	square[i].style.background = color;
													}
									 }

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
//return the element of the color array like color[0]
		return colors[random];
}

function getColors(num) {
	//make an array
	var arr = [];
//push random colors to the array "num" no. of times
for (var i = 0; i <num; i++) {
		arr.push(randomColor());
	}
	// return the array
	return arr;
}
// this func gives a single random color
function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

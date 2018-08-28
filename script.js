var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById('gradient');
var colorval=document.getElementById("colorval");
color1.addEventListener("input",changeBG);
color2.addEventListener("input",changeBG);

function changeBG(){
	body.style.background="linear-gradient(to right," + color1.value + "," + color2.value + ")";
	//colorval.value = color1.value + ", " + color2.value;
	colorval.value = body.style.background + ";";
}
var linked = document.getElementById("click");
var back = document.getElementById("outside");
var front = document.getElementById("inside");
var close = back || front; 


linked.onclick = (function() {
	back.style.display = "block";
	front.style.display = "block";
});

//I'm not sure why I have to have two functions that 
//essentially do the same thing to get the box to close 
//when clicking either the border or the image. It works, but it's super wonky. 

close.onclick = (function() {
	back.style.display = "none";
	front.style.display = "none";
});

inside.onclick = (function() {
	back.style.display = "none";
	front.style.display = "none";
});
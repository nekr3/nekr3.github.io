function resumeIn() {
	var res = document.getElementById("resume");
	res.style.border = "2px solid #051940";
	res.style.background = "#E9F2EA";
	res.style.color = "#051940";
}
function resumeOut() {
	var res = document.getElementById("resume");
	res.style.border = "0px solid #2AB0BF";
	res.style.background = "#051940";
	res.style.color = "#E9F2EA";
}
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

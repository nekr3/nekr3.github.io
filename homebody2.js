function resumeIn() {
	var res = document.getElementById("resume");
	res.style.border = "1.5px solid #051940";
	res.style.background = "#ffffff";
	res.style.color = "#051940";
	//res.innerHTML = "RESUME 🡒";
}
function resumeOut() {
	var res = document.getElementById("resume");
	res.style.border = "1px solid #ffffff";
	res.style.background = "#051940";
	//res.style.color = "#E9F2EA";
	res.style.color = "#ffffff";
	//res.innerHTML = "RESUME";
}
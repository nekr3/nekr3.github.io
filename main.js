var usingx = false;
function resumeIn() {
	var res = document.getElementById("resume");
	res.style.border = "1px solid #051940";
	res.style.background = "#ffffff";
	res.style.color = "#051940";
}
function resumeOut() {
	var res = document.getElementById("resume");
	res.style.border = "1px solid #ffffff";
	res.style.background = "#051940";
	//res.style.color = "#E9F2EA";
	res.style.color = "#ffffff";
}
function rotateImg() {
	var icon = document.getElementById("menuicon");
	var deg = 720;
	if (usingx) deg = 540;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform    = 'rotate('+deg+'deg)';
    icon.style.msTransform     = 'rotate('+deg+'deg)';
    icon.style.oTransform      = 'rotate('+deg+'deg)';
    icon.style.transform       = 'rotate('+deg+'deg)';
}
function unrotateImg() {
	var icon = document.getElementById("menuicon");
	var deg = 0;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform    = 'rotate('+deg+'deg)';
    icon.style.msTransform     = 'rotate('+deg+'deg)';
    icon.style.oTransform      = 'rotate('+deg+'deg)';
    icon.style.transform       = 'rotate('+deg+'deg)';
}
function rotateImgX() {
	var icon = document.getElementById("menuicon");
	var deg = 1080;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform    = 'rotate('+deg+'deg)';
    icon.style.msTransform     = 'rotate('+deg+'deg)';
    icon.style.oTransform      = 'rotate('+deg+'deg)';
    icon.style.transform       = 'rotate('+deg+'deg)';
	deg = 1260;
	icon.src = "secondx.png";
	usingx = true;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform    = 'rotate('+deg+'deg)';
    icon.style.msTransform     = 'rotate('+deg+'deg)';
    icon.style.oTransform      = 'rotate('+deg+'deg)';
    icon.style.transform       = 'rotate('+deg+'deg)';
}
function unrotateImgX() {
	var icon = document.getElementById("menuicon");
	var deg = 1080;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform    = 'rotate('+deg+'deg)';
    icon.style.msTransform     = 'rotate('+deg+'deg)';
    icon.style.oTransform      = 'rotate('+deg+'deg)';
    icon.style.transform       = 'rotate('+deg+'deg)';
	var deg = 720;
	icon.src = "menuicon.png";
	usingx = false;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform    = 'rotate('+deg+'deg)';
    icon.style.msTransform     = 'rotate('+deg+'deg)';
    icon.style.oTransform      = 'rotate('+deg+'deg)';
    icon.style.transform       = 'rotate('+deg+'deg)';
}
function toggleFade() {
	var x = document.getElementById("fader");
	var y = document.getElementById("logonm");
	if (x.style.display === "none") {
		rotateImgX();
		//x.style.display = "block";
		var op = 0.1;  // initial opacity
		x.style.display = 'block';
		y.style.display = 'block';
		var timer = setInterval(function () {
			if (op >= 1){
				clearInterval(timer);
			}
			x.style.opacity = op;
			y.style.opacity = op;
			x.style.filter = 'alpha(opacity=' + op * 100 + ")";
			y.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op += op * 0.1;
		}, 10);
	} else {
		unrotateImgX();
		//x.style.display = "none";
		var op = 1;  // initial opacity
		var timer = setInterval(function () {
			if (op <= 0.1){
				clearInterval(timer);
				x.style.display = 'none';
				y.style.display = 'none';
			}
			x.style.opacity = op;
			y.style.opacity = op;
			x.style.filter = 'alpha(opacity=' + op * 100 + ")";
			y.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op -= op * 0.1;
		}, 10);
	}
}
function fade(element) {
	var op = 1;  // initial opacity
	var timer = setInterval(function () {
		if (op <= 0.1){
			clearInterval(timer);
			element.style.display = 'none';
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op -= op * 0.1;
	}, 50);
}
function unfade(element) {
	var op = 0.1;  // initial opacity
	element.style.display = 'block';
	var timer = setInterval(function () {
		if (op >= 1){
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 10);
}
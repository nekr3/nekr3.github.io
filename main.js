window.onload = init;
function init() {
	//header.classList.add("sticky");
}
var usingx = false;
var headsize = false;
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
	var deg = 360;
	if (usingx) deg = 720;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	headerBig();
	headsize = false;
	if (headsize) icon.style.padding = "4px";
	else icon.style.padding = "6px";
}
function unrotateImg() {
	var icon = document.getElementById("menuicon");
	var deg = 0;
	if (usingx) deg = 360;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	if (!usingx && !(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) headerSmall();
	headsize = true;
	if (headsize) icon.style.padding = "5px";
	else icon.style.padding = "8px";
}
function rotateImgX() {
	var icon = document.getElementById("menuicon");
	var deg = 540;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	deg = 720;
	setTimeout(function() {
		icon.src = "secondx.png";
		usingx = true;
	}, 200);
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
}
function unrotateImgX() {
	var icon = document.getElementById("menuicon");
	var deg = 540;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	var deg = 360;
	setTimeout(function() {
		icon.src = "menuicon.png";
		usingx = false;
	}, 200);
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
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
		if (headsize && document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) headerBig();
		headsize = false;
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
		//if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) headerSmall();
	}
}
function headerSmall() {
	document.getElementById("menuicon").style.transition = "0.2s";
	document.getElementById("menuicon").style.height = "30px";
	document.getElementById("menuicon").style.padding = "5px";
	document.getElementById("home").style.lineHeight = "15px";
	document.getElementById("fader").style.lineHeight = "15px";
	document.getElementById("logonm").style.lineHeight = "15px";
	document.getElementById("home").style.fontSize = "16px";
	document.getElementById("fader").style.fontSize = "16px";
	document.getElementById("logonm").style.fontSize = "22px";
	document.getElementById("spacer").style.height = "30px";
	headsize = true;
	document.getElementById("menuicon").style.transition = "0.5s";
}
function headerBig() {
	document.getElementById("menuicon").style.transition = "0.2s";
	document.getElementById("menuicon").style.height = "42px";
	document.getElementById("menuicon").style.padding = "8px";
	document.getElementById("home").style.lineHeight = "25px";
	document.getElementById("fader").style.lineHeight = "25px";
	document.getElementById("logonm").style.lineHeight = "25px";
	document.getElementById("home").style.fontSize = "18px";
	document.getElementById("fader").style.fontSize = "18px";
	document.getElementById("logonm").style.fontSize = "25px";
	document.getElementById("spacer").style.height = "42px";
	headsize = false;
	document.getElementById("menuicon").style.transition = "0.5s";
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
window.onload = init;
function init() {
	//header.classList.add("sticky");
}
var usingx = false;
var headsize = false;
var ahover = false;
function activeHover() {
	var active = document.getElementById("home");
	if (ahover) {
		active.style.backgroundColor = "#020E26";
		active.style.color = "#ffffff";
		active.style.borderRadius = "0px";
		ahover = false;
	}
	else {
		active.style.backgroundColor = "#ffffff";
		active.style.color = "#020E26";
		if (headsize) active.style.borderRadius = "4px";
		else active.style.borderRadius = "4px 0px 0px 4px";
		ahover = true;
	}
}
function rotateImg() {
	var icon = document.getElementById("menuicon");
	var deg = 180;
	if (usingx) deg = 540;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	if (!usingx) {
		headerBig();
		headsize = false;
	}
	if (headsize) icon.style.padding = "4px";
	else icon.style.padding = "6px";
}
function unrotateImg() {
	var icon = document.getElementById("menuicon");
	var deg = 0;
	if (usingx) deg = 180;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	if (!usingx && (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
		headerSmall();
		headsize = true;
	}
	if (headsize) icon.style.padding = "5px";
	else icon.style.padding = "8px";
}
function rotateImgX() {
	usingx = true;
	var icon = document.getElementById("menuicon");
	var deg = 360;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	deg = 540;
	setTimeout(function() {
		icon.src = "secondx.png";
	}, 200);
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	document.getElementById("home").style.borderRight = "1px solid white";
}
function unrotateImgX() {
	usingx = false;
	var icon = document.getElementById("menuicon");
	var deg = 360;
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	var deg = 180;
	setTimeout(function() {
		icon.src = "menuicon.png";
	}, 200);
	icon.style.webkitTransform = 'rotate('+deg+'deg)';
    icon.style.mozTransform = 'rotate('+deg+'deg)';
    icon.style.msTransform = 'rotate('+deg+'deg)';
    icon.style.oTransform = 'rotate('+deg+'deg)';
    icon.style.transform = 'rotate('+deg+'deg)';
	document.getElementById("home").style.borderRight = "0px solid white";
}
function toggleFade() {
	var x = document.getElementById("fader");
	var y = document.getElementById("logonm");
	//var z = document.getElementById("spoocer");
	//var a = document.getElementById("logopic");
	if (x.style.display === "none") {
		rotateImgX();
		//x.style.display = "block";
		var op = 0.1;  // initial opacity
		x.style.display = 'block';
		y.style.display = 'block';
		//z.style.display = 'block';
		var timer = setInterval(function () {
			if (op >= 1){
				clearInterval(timer);
				//a.style.display = 'none';
				//z.style.display = 'none';
			}
			x.style.opacity = op;
			y.style.opacity = op;
			//z.style.opacity = op;
			//a.style.opacity = 1-op;
			x.style.filter = 'alpha(opacity=' + op * 100 + ")";
			y.style.filter = 'alpha(opacity=' + op * 100 + ")";
			//z.style.filter = 'alpha(opacity=' + op * 100 + ")";
			//a.style.filter = 'alpha(opacity=' + (1-op) * 100 + ")";
			op += 0.1;
		}, 10);
		if (headsize && document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) headerBig();
		headsize = false;
	} else {
		unrotateImgX();
		//x.style.display = "none";
		var op = 1;  // initial opacity
		//a.style.display = "block";
		//z.style.display = "block";
		var timer = setInterval(function () {
			if (op <= 0.1){
				clearInterval(timer);
				x.style.display = 'none';
				y.style.display = 'none';
				//z.style.display = 'none';
			}
			x.style.opacity = op;
			y.style.opacity = op;
			//a.style.opacity = 1-op;
			//z.style.opacity = 1-op;
			//z.style.opacity = op;
			x.style.filter = 'alpha(opacity=' + op * 100 + ")";
			y.style.filter = 'alpha(opacity=' + op * 100 + ")";
			//a.style.filter = 'alpha(opacity=' + (1-op) * 100 + ")";
			//z.style.filter = 'alpha(opacity=' + (1-op) * 100 + ")";
			//z.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op -= op * 0.1;
		}, 10);
		//if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) headerSmall();
	}
}
function headerSmall() {
	document.getElementById("menuicon").style.transition = "0.2s";
	document.getElementById("menuicon").style.height = "25px";
	document.getElementById("menuicon").style.padding = "3px";
	document.getElementById("home").style.lineHeight = "10px";
	document.getElementById("fader").style.lineHeight = "10px";
	document.getElementById("logonm").style.lineHeight = "10px";
	document.getElementById("home").style.fontSize = "14px";
	document.getElementById("fader").style.fontSize = "14px";
	document.getElementById("logonm").style.fontSize = "22px";
	document.getElementById("spacer").style.height = "25px";
	document.getElementById("spoocer").style.height = "25px";
	document.getElementById("logopic").style.height = "25px";
	document.getElementById("logopic").style.width = "25px";
	document.getElementById("logopic").style.padding = "2px";
	//document.getElementById("pagebtns").style.cssFloat = "none";
	//document.getElementById("pagebtns").style.styleFloat = "none";
	//document.getElementById("pageheader").style.textAlign = "center";
	//document.getElementById("pagebtns").style.margin = "auto";
	//document.getElementById("pagebtns").style.width = "70px";
	var w = (document.getElementById("pageheader").offsetWidth - document.getElementById("home").offsetWidth)/2;
	document.getElementById("pageheader").style.paddingRight = ""+w+"px";
	//document.getElementById("pageheader").style.backgroundImage = "linear-gradient(0deg, transparent, #2AB0BF)";
	//document.getElementById("pageheader").style.backgroundColor = "transparent";
	headsize = true;
	setTimeout(function() {document.getElementById("menuicon").style.transition = "0.5s";}, 5);
}
function headerBig() {
	document.getElementById("menuicon").style.transition = "0.2s";
	document.getElementById("menuicon").style.height = "42px";
	if (!usingx) document.getElementById("menuicon").style.padding = "8px";
	else document.getElementById("menuicon").style.padding = "6px";
	document.getElementById("home").style.lineHeight = "25px";
	document.getElementById("fader").style.lineHeight = "25px";
	document.getElementById("logonm").style.lineHeight = "25px";
	document.getElementById("home").style.fontSize = "15px";
	document.getElementById("fader").style.fontSize = "15px";
	document.getElementById("logonm").style.fontSize = "25px";
	document.getElementById("spacer").style.height = "42px";
	document.getElementById("spoocer").style.height = "42px";
	document.getElementById("logopic").style.height = "42px";
	document.getElementById("logopic").style.width = "42px";
	document.getElementById("logopic").style.padding = "5px";
	//document.getElementById("pagebtns").style.cssFloat = "right";
	//document.getElementById("pagebtns").style.styleFloat = "right";
	//document.getElementById("pageheader").style.textAlign = "center";
	//document.getElementById("pagebtns").style.margin = "auto";
	//document.getElementById("pagebtns").style.width = "";
	document.getElementById("pageheader").style.paddingRight = "10px";
	//document.getElementById("pageheader").style.backgroundColor = "#020E26";
	//document.getElementById("pageheader").style.backgroundImage = "";
	headsize = false;
	setTimeout(function() {document.getElementById("menuicon").style.transition = "0.5s";}, 5);
}
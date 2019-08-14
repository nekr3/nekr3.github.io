window.onload = init;
function init() {
	//header.classList.add("sticky");
	if (($(window).height()+0.0)/$(window).width() < 1079.0/1970) {
		$("#bigplate").css("background-size", "100% auto");
	}
	$(".spaceblock").css("height", ($("#descholder").height()+8) + "px");
	var c = document.getElementById("bgcircle");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(24, 24, 24, 0, 2 * Math.PI);
	ctx.fill();
	$("#downarrow").css("left", ($(window).width()/2 - 20.5) + "px");
	$("#downarrow").hover(function() {
		/*var c = document.getElementById("bgcircle");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = "#051940";
		ctx.arc(24, 24, 24, 0, 2 * Math.PI);
		ctx.fill();
		$("#downarrow").css("color", "#fff");*/
		var icon = document.getElementById("downarrow");
		var deg = 360;
		icon.style.webkitTransform = 'rotate('+deg+'deg)';
		icon.style.mozTransform = 'rotate('+deg+'deg)';
		icon.style.msTransform = 'rotate('+deg+'deg)';
		icon.style.oTransform = 'rotate('+deg+'deg)';
		icon.style.transform = 'rotate('+deg+'deg)';
	}, function() {
		/*var c = document.getElementById("bgcircle");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = "white";
		ctx.arc(24, 24, 24, 0, 2 * Math.PI);
		ctx.fill();
		$("#downarrow").css("color", "#051940");*/
		var icon = document.getElementById("downarrow");
		var deg = 0;
		icon.style.webkitTransform = 'rotate('+deg+'deg)';
		icon.style.mozTransform = 'rotate('+deg+'deg)';
		icon.style.msTransform = 'rotate('+deg+'deg)';
		icon.style.oTransform = 'rotate('+deg+'deg)';
		icon.style.transform = 'rotate('+deg+'deg)';
	});
	/*$("#downarrow").mousedown(function() {
		$(this).css("color", "lightgrey");
	});
	$("#downarrow").mouseup(function() {
		$(this).css("color", "#051940");
	});*/
	$("#downarrow").click(function() {
		$("html,body").animate({scrollTop:$(window).height()-45},300);
	});
}
$(window).resize(function() {
	if (headsize) headerSmall();
	else headerBig();
	if (($(window).height()+0.0)/$(window).width() < 1079.0/1970) {
		$("#bigplate").css("background-size", "100% auto");
	}
	else {
		$("#bigplate").css("background-size", "auto 100%");
	}
	$(".spaceblock").css("height", ($("#descholder").height()+8) + "px");
	$("#downarrow").css("left", ($(window).width()/2 - 20.5) + "px");
});
var usingx = false;
var headsize = false;
var ahover = false;
var rhover = false;
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
		if (headsize || !usingx) active.style.borderRadius = "4px";
		else active.style.borderRadius = "4px 0px 0px 4px";
		ahover = true;
	}
}
function rightHover() {
	var right = document.getElementById("resumetab");
	if (rhover) {
		right.style.backgroundColor = "#020E26";
		right.style.color = "#ffffff";
		right.style.borderRadius = "0px";
		rhover = false;
	}
	else {
		right.style.backgroundColor = "#ffffff";
		right.style.color = "#020E26";
		if (headsize || !usingx) right.style.borderRadius = "4px";
		else right.style.borderRadius = "0px 4px 4px 0px";
		rhover = true;
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
	document.getElementById("projects").style.borderRight = "1px solid white";
	document.getElementById("work").style.borderRight = "1px solid white";
	document.getElementById("pubs").style.borderRight = "1px solid white";
	document.getElementById("awards").style.borderRight = "1px solid white";
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
	document.getElementById("projects").style.borderRight = "0px solid white";
	document.getElementById("work").style.borderRight = "0px solid white";
	document.getElementById("pubs").style.borderRight = "0px solid white";
	document.getElementById("awards").style.borderRight = "0px solid white";
}
function toggleFade() {
	var x = document.getElementById("resumetab");
	var y = document.getElementById("logonm");
	var z = document.getElementById("projects");
	var a = document.getElementById("work");
	var b = document.getElementById("pubs");
	var c = document.getElementById("awards");
	//var a = document.getElementById("logopic");
	if (x.style.display === "none") {
		rotateImgX();
		//x.style.display = "block";
		var op = 0.1;  // initial opacity
		x.style.display = 'block';
		y.style.display = 'block';
		z.style.display = 'block';
		a.style.display = 'block';
		b.style.display = 'block';
		c.style.display = 'block';
		var timer = setInterval(function () {
			if (op >= 1){
				clearInterval(timer);
				//a.style.display = 'none';
				//z.style.display = 'none';
			}
			x.style.opacity = op;
			y.style.opacity = op;
			z.style.opacity = op;
			a.style.opacity = op;
			b.style.opacity = op;
			c.style.opacity = op;
			//a.style.opacity = 1-op;
			x.style.filter = 'alpha(opacity=' + op * 100 + ")";
			y.style.filter = 'alpha(opacity=' + op * 100 + ")";
			z.style.filter = 'alpha(opacity=' + op * 100 + ")";
			a.style.filter = 'alpha(opacity=' + op * 100 + ")";
			b.style.filter = 'alpha(opacity=' + op * 100 + ")";
			c.style.filter = 'alpha(opacity=' + op * 100 + ")";
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
				z.style.display = 'none';
				a.style.display = 'none';
				b.style.display = 'none';
				c.style.display = 'none';
			}
			x.style.opacity = op;
			y.style.opacity = op;
			//a.style.opacity = 1-op;
			//z.style.opacity = 1-op;
			z.style.opacity = op;
			a.style.opacity = op;
			b.style.opacity = op;
			c.style.opacity = op;
			x.style.filter = 'alpha(opacity=' + op * 100 + ")";
			y.style.filter = 'alpha(opacity=' + op * 100 + ")";
			//a.style.filter = 'alpha(opacity=' + (1-op) * 100 + ")";
			//z.style.filter = 'alpha(opacity=' + (1-op) * 100 + ")";
			z.style.filter = 'alpha(opacity=' + op * 100 + ")";
			a.style.filter = 'alpha(opacity=' + op * 100 + ")";
			b.style.filter = 'alpha(opacity=' + op * 100 + ")";
			c.style.filter = 'alpha(opacity=' + op * 100 + ")";
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
	document.getElementById("resumetab").style.lineHeight = "10px";
	document.getElementById("projects").style.lineHeight = "10px";
	document.getElementById("work").style.lineHeight = "10px";
	document.getElementById("pubs").style.lineHeight = "10px";
	document.getElementById("awards").style.lineHeight = "10px";
	document.getElementById("logonm").style.lineHeight = "10px";
	document.getElementById("home").style.fontSize = "14px";
	document.getElementById("resumetab").style.fontSize = "14px";
	document.getElementById("projects").style.fontSize = "14px";
	document.getElementById("work").style.fontSize = "14px";
	document.getElementById("pubs").style.fontSize = "14px";
	document.getElementById("awards").style.fontSize = "14px";
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
	document.getElementById("resumetab").style.lineHeight = "25px";
	document.getElementById("projects").style.lineHeight = "25px";
	document.getElementById("work").style.lineHeight = "25px";
	document.getElementById("pubs").style.lineHeight = "25px";
	document.getElementById("awards").style.lineHeight = "25px";
	document.getElementById("logonm").style.lineHeight = "25px";
	document.getElementById("home").style.fontSize = "15px";
	document.getElementById("resumetab").style.fontSize = "15px";
	document.getElementById("projects").style.fontSize = "15px";
	document.getElementById("work").style.fontSize = "15px";
	document.getElementById("pubs").style.fontSize = "15px";
	document.getElementById("awards").style.fontSize = "15px";
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
/*window.onscroll = function() {myFunction()};

var header = document.getElementById("pageheader");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}*/
window.onscroll = function() {scrollFunction()};

var header = document.getElementById("pageheader");
var sticky = header.offsetTop;

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && !usingx) {
    headerSmall();
	header.classList.add("sticky");
	headsize = true;
  } else {
    headerBig();
	header.classList.remove("sticky");
	headsize = false;
  }
}

var menu, yPos, navbarNav;

function yScroll(){
	menu = document.getElementById("menu");
	yPos = window.pageYOffset;
	navbarNav = document.getElementsByClassName("navbar-nav");

	if (yPos > 90) {
		menu.style.background = "rgba(51,51,51,0.9)";
		menu.style.height = "90px";
	} else {
		menu.style.background = "transparent";
	}
}

window.addEventListener("scroll", yScroll);
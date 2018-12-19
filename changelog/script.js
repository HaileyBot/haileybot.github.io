function resize() {
	var table = document.getElementsByTagName("table")[0];
 table.style.height = `${window.innerHeight-90}px`;
 table.style.width = `${window.innerWidth-10}px`;
 document.getElementById("topbar").style.width = `${window.innerWidth-40}px`;
}

window.addEventListener("resize", resize);
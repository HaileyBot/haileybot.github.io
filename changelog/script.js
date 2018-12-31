let scope = window.innerWidth >= window.innerHeight ? "d" : "m";

function loadBody() {
 document.getElementById("body").innerHTML = window.innerWidth >= window.innerHeight ?
  '<table><tr><td id="input_d" rowspan="2"><div class="header">JSON</div><div class="content">test</div></td><td id="formatted_d"><div class="header">Formatted</div><div class="content">test</div></td></tr><tr><td id="raw_d"><div class="header">Raw</div><div class="content">test</div></td></tr></table>' :
  '<table><tr><td id="input_m"><div class="header">JSON</div><div class="content">test</div></td></tr><tr><td><div class="header">Formatted</div><div class="content">test</div></td></tr><tr><td id="raw_m"><div class="header">Raw</div><div class="content">test</div></td></tr></table>';
 scope = window.innerWidth >= window.innerHeight ? "d" : "m";
}

function loadJSON(file, callback) {
 // if (window)
 let xobj = new XMLHttpRequest();
 xobj.overrideMimeType("application/json");
 xobj.open('GET', file, true);
 xobj.onreadystatechange = function() {
  if (xobj.readyState == 4 && xobj.status == "200") callback(xobj.responseText)
 };
 xobj.send(null);
}

function resize() {
 if ((window.innerWidth >= window.innerHeight && scope === "m") || (window.innerWidth < window.innerHeight && scope === "d")) loadBody();
 let table = document.getElementsByTagName("table")[0];
 table.style.height = `${window.innerHeight - 90}px`;
 table.style.width = `${window.innerWidth - 10}px`;
 document.getElementById("topbar").style.width = `${window.innerWidth - 40}px`;
}

window.addEventListener("resize", resize);
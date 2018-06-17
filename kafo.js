var esperantistoj = 0;
var esperantistojEle = document.getElementById("esperantistoj");
var mono = 0;

function varbi(n) {
	esperantistoj += n;
	esperantistojEle.innerHTML = esperantistoj;
}

var flagoEle = document.getElementById("flago");
flagoEle.setAttribute("onclick", "varbi(1);");

esperantistojEle.innerHTML = esperantistoj;

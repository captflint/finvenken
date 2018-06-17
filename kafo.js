var esperantistoj = 0;
var esperantistojEle = document.getElementById("esperantistoj");
var mono = 0;
var monoEle = document.getElementById("mono");

function varbi(n) {
	esperantistoj += n;
	esperantistojEle.innerHTML = esperantistoj;
}

function ĝisdatigiNombrojn() {
	mono += esperantistoj;
	let spesmiloj = mono / 1000;
	esperantistojEle.innerHTML = esperantistoj;
	monoEle.innerHTML = spesmiloj;
}

var ĝisdatigiSekunde = setInterval(ĝisdatigiNombrojn, 1000);

var flagoEle = document.getElementById("flago");
flagoEle.setAttribute("onclick", "varbi(1);");

esperantistojEle.innerHTML = esperantistoj;
monoEle.innerHTML = mono;

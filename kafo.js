var esperantistoj = 0;
var esperantistojEle = document.getElementById("esperantistoj");
var mono = 0;
var monoEle = document.getElementById("mono");

function doniKuketon(nomo, nombro) {
	let kuketo = nomo + "=" + nombro + ";max-age=" + 60 * 60 * 24 * 365;
	document.cookie = kuketo;
}

function akiriKuketon(nomo) {
	let nombro = "";
	let kuketoj = document.cookie.split(";");
	for (kuketo of kuketoj) {
		kuketo = kuketo.split("=");
		if (kuketo[0] == nomo) {
			return(parseInt(kuketo[1]));
		}
	}
	return("");
}

function varbi(n) {
	esperantistoj += n;
	esperantistojEle.innerHTML = komigiNombron(esperantistoj);
}

function komigiNombron(n) {
	n = "" + n;
	let s = "";
	let x = 3;
	let l = n.length;
	while (l > 0) {
		l -= 1;
		if (x > 0) {
			s = n[l] + s;
			x -= 1;
		}
		else {
			x = 2;
			s = n[l] + "," + s;
		}
	}
	return(s);
}

function spesojAlSpesmiloj(m) {
	m = "" + m;
	let s = "";
	let x = 3;
	let l = m.length;
	let punkto = true;
	if (m.length == 0) {
		return("nul");
	}
	else if (m.length == 1) {
		return("0.00" + m);
	}
	else if (m.length == 2) {
		return("0.0" + m);
	}
	else if (m.length == 3) {
		return("0." + m);
	}
	else {
		while (l > 0) {
			l -= 1;
			if (x > 0) {
				s = m[l] + s;
				x -= 1;
			}
			else {
				x = 2;
				if (punkto) {
					s = m[l] + "." + s;
					punkto = false;
				}
				else {
					s = m[l] + "," + s;
				}
			}
		}
		return(s);
	}
}

function ĝisdatigiNombrojn() {
	mono += esperantistoj;
	esperantistojEle.innerHTML = komigiNombron(esperantistoj);
	monoEle.innerHTML = spesojAlSpesmiloj(mono);
}

var ĝisdatigiSekunde = setInterval(ĝisdatigiNombrojn, 1000);

var flagoEle = document.getElementById("flago");
flagoEle.setAttribute("onclick", "varbi(1);");

esperantistojEle.innerHTML = komigiNombron(esperantistoj);
monoEle.innerHTML = spesojAlSpesmiloj(mono);

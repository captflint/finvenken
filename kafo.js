var e7istaTuto = 0;
var esperantistojEle = document.getElementById("esperantistoj");
var e7istaKresko = 0;
var mono = 0;
var monoEle = document.getElementById("mono");
var tempo = 0;

function akiriTempon() {
	let t = Date.now();
	t /= 1000;
	t = Math.trunc(t);
	return(t);
}

function doniKuketon(nomo, nombro) {
	let kuketo = nomo + "=" + nombro + ";max-age=" + 60 * 60 * 24 * 365;
	document.cookie = kuketo;
}

function akiriKuketon(nomo) {
	let nombro = "";
	let kuketoj = document.cookie.split("; ");
	for (let kuketo of kuketoj) {
		kuketo = kuketo.split("=");
		if (kuketo[0] == nomo) {
			return(parseInt(kuketo[1]));
		}
	}
	return("");
}

function konservi() {
	doniKuketon("e7istaTuto", e7istaTuto);
	doniKuketon("e7istaKresko", e7istaKresko);
	doniKuketon("mono", mono);
	doniKuketon("tempo", tempo);
}

function memori() {
	e7istaTuto = akiriKuketon("e7istaTuto");
	e7istaKresko = akiriKuketon("e7istaKresko");
	mono = akiriKuketon("mono");
	tempo = akiriKuketon("tempo");
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
		return('0.00<span class="spesoj">' + m + "</span>");
	}
	else if (m.length == 2) {
		return('0.0<span class="spesoj">' + m + "</span>");
	}
	else if (m.length == 3) {
		return('0.<span class="spesoj">' + m + "</span>");
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
					s = m[l] + '.<span class="spesoj">' + s + "</span>";
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

function kalkuli() {
	let t = akiriTempon() - tempo;
	let e7istaNovaTuto = e7istaTuto + e7istaKresko * t;
	let paro = e7istaTuto + e7istaKresko + e7istaNovaTuto;
	let novaMono = mono + paro * (t / 2);
	return([e7istaNovaTuto, novaMono]);
}

function varbi(n) {
	nombroj = kalkuli();
	e7istaTuto = nombroj[0] + 1;
	mono = nombroj[1];
	tempo = akiriTempon()
	esperantistojEle.innerHTML = komigiNombron(e7istaTuto);
}

function ĝisdatigiNombrojn() {
	let nombroj = kalkuli();
	esperantistojEle.innerHTML = komigiNombron(nombroj[0]);
	monoEle.innerHTML = spesojAlSpesmiloj(nombroj[1]);
}

if (akiriKuketon("e7istaTuto") === "") {
	tempo = akiriTempon();
	konservi();
}
else {
	memori();
}

var ĝisdatigiSekunde = setInterval(ĝisdatigiNombrojn, 1000);

var flagoEle = document.getElementById("flago");
flagoEle.setAttribute("onclick", "varbi(1);");

esperantistojEle.innerHTML = komigiNombron(e7istaTuto);
monoEle.innerHTML = spesojAlSpesmiloj(mono);

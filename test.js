function malrapida(e7istaTuto, e7istaKresko, mono, tempo) {
	while (tempo > 0) {
		e7istaTuto += e7istaKresko;
		mono += e7istaTuto;
		tempo -= 1;
	}
	return([e7istaTuto, mono]);
}

function rapida(e7istaTuto, e7istaKresko, mono, tempo) {
	let e7istaNovaTuto = e7istaTuto + e7istaKresko * tempo;
	let paro = e7istaTuto + e7istaKresko + e7istaNovaTuto;
	let novaMono = mono + paro * (tempo / 2);
	return([e7istaNovaTuto, novaMono]);
}

console.log(malrapida(100, 5, 15000, 86400));
console.log(rapida(100, 5, 15000, 86400));
console.log(malrapida(100, 5, 15000, 86401));
console.log(rapida(100, 5, 15000, 86401));
console.log(rapida(10, 0, 100, 5));
console.log(rapida(10, 0, 100, 6));

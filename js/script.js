function calc(){
	var text = document.getElementById('texto');
	var usuario = document.getElementById('nome');
	var alt = document.getElementById('altura');
	var peso = document.getElementById('peso');


	var x = Number(alt.value);
	var y = Number(peso.value);
	var uso = String(usuario.value);
	
	/*
		var b = String(text.value);
	*/

	var cal = x*x;

	var res = y/cal;

	/*var f = res.toFixed(2)*/

	text.innerHTML = `${uso} seu <strong>IMC</strong> é <strong>${res.toFixed(2)}</strong>`
}
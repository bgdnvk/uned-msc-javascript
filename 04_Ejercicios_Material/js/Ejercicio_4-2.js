// JavaScript Document


// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto){
	
	document.getElementById("cuadro_texto").innerHTML=texto;
	
}


function ponhora(){
	
// Aqui se tiene que poner el código que haga lo que pide el enunciado.

	const d = new Date();
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
	/*
		hour12
		Whether to use 12-hour time (as opposed to 24-hour time). 
		Possible values are true and false; the default is locale dependent. This option overrides the hc language tag and/or the hourCycle option in case both are present.
	*/
	let hora = d.toLocaleTimeString("es-ES", {hour12: false});
	// console.log(hora);
	
	escribe(`<h1>${hora}</h1>`);

	t = setTimeout(function () {
		ponhora()
	}, 500);
}

//implementación sin usar toLocaleTimeString
function ponhora1(){
	const d = new Date();
	const hora = ponCero( d.getHours());
	const min = ponCero( d.getMinutes());
	const sec = ponCero( d.getSeconds());

	escribe(`
	<h1>${hora}:${min}:${sec}</h1>
	`)

	t = setTimeout(function () {
		ponhora1()
	}, 500);
	
}
function ponCero(hora){
	return (hora < 10 ? "0"+hora: hora);
}
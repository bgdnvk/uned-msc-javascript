// JavaScript Document


// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto){
	
	document.getElementById("cuadro_texto").innerHTML=texto;
	
}

function ponfecha(){

// Aqui se tiene que poner el código que haga lo que pide el enunciado.

	const d = new Date();
	//quería saber como escribir fechas sin tener que hacer arrays de datos
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	//quitado la coma con replace() para que quede como en el ejemplo
	const fechaLocal = d.toLocaleDateString("es-ES", options).replace(",", "");
	const fechaFinal = `Hoy es <b> ${fechaLocal} </b>`;
	
	escribe(fechaFinal);

	//código que empecé a escribir antes de darme cuenta
	//de que tendría que escribir los meses y días
	// const dia = d.getDay();
	// const diaNum = d.getDate();
	// const mes = d.getMonth()+1;
	// const año = d.getFullYear();
}
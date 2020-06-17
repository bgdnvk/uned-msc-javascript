// JavaScript Document


function obtenerLetra(){

	//se obtiene el nodo donde esta el dni
	const dniNum = document.querySelector("form input");
	//se obtiene la letra
	const letra = letraDNI(dniNum.value);
	//se agrega a la info que tenemos la letra
	dniNum.value += letra;
	/**
	 * usando getElementById sería lo mismo pero hay que añádir
	 * la id dentro del html tag y luego dniNum = doc.getElebyId("idAñadida")
	 */
}

function letraDNI(dni){
	let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
	let numeroLetra = dni%23;
	return cadena.charAt(numeroLetra)
}

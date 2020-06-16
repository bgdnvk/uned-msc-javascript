// JavaScript Document


function obtenerLetra(){

		//  TRWAGMYFPDXBNJZSQVHLCKET  
	const dniNum = document.querySelector("form input");
	const letra = letraDNI(dniNum.value);

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

// JavaScript Document


window.onload = function() {
	
// COMPLETAR ESTA FUNCION
    const enlaces = document.getElementsByTagName("a");
    // Numero de enlaces de la pagina
    const numEnlaces = document.getElementsByTagName("a").length;
    // Dirección a la que enlaza el TERCER enlace
    const enlace3 = document.getElementsByTagName("a")[2];    
    // Numero de enlaces que NO enlazan a http://prueba
    let numNoPrueba = 0;
    for(enlace of enlaces){
        if(enlace.href !== "http://prueba/"){
            numNoPrueba++;
        }
    }
    // Número de enlaces del SEGUNDO párrafo  
    const enlacesParrafo = document.getElementsByTagName("p")[1].getElementsByTagName("a").length;

    let info = document.getElementById("informacion").innerHTML=`
    Numero de enlaces de la pagina: <b> ${numEnlaces} </b>
    </br>
    Dirección a la que enlaza el TERCER enlace: <b> ${enlace3} </b>
    </br>
    Numero de enlaces que NO enlazan a http://prueba: <b> ${numNoPrueba} </b>
    </br>
    Número de enlaces del SEGUNDO párrafo: <b> ${enlacesParrafo} </b>
    `;

}


// JavaScript Document
//no sabía lo que hacer pues el ejercicio estaba resuelto en el pdf
//he usado algunas partes y las otras las he cambiado

//si no se pone el script al final de html se tiene que usar onload
window.onload = function(){
    //cogemos la casilla de textodni
    const textDniForm = document.getElementById("textoDNI");
    //más facil con <input type="number"> en html
    //leemos las teclas y solo se permiten los números
    textDniForm.addEventListener("input", e =>{
        let value = textDniForm.value;
        //regex para los números
        let rgx = new RegExp(/^[0-9]*$/);
        //valor del texto antes de agregar la última tecla
        let txt = e.currentTarget.value.slice(0,-1);
        //si no es un número se vuelve a cargar el texto que había
        //antes de introducir el nuevo char
        (!rgx.test(e.target.value)) && (textDniForm.value = txt);

    })
    //se leen los números y se calcula la letra
    textDniForm.addEventListener("keyup", e => {
        // console.log(Number(e.key));
        let longitud = textDniForm.value.length;
        //valor dentro del formulario
        let value = textDniForm.value;
        let rgx = new RegExp(/^[0-9]*$/);
        //se escribe la letra si input son 8 números
        (longitud  === 8 && rgx.test(value)) && cambiaEstado();
        //si tenemos ya el dni escrito y pulsamos backspace dejamos solo los números
        //y se vuelve gráficamente al estado original
        (e.key === "Backspace" && longitud >= 8) && (textDniForm.value = value.slice(0,8)) && estadoOriginal();
    })
}

function cambiaEstado() {
    escribirLetra();
    cambiarTexto();
    cambiarColorFondo();
}

function escribirLetra(){
    var dni = document.getElementById("textoDNI").value;
    var letras="TRWAGMYFPDXBNJZSQVHLCKET"
    var posicion=dni%23;
    letra = letras.charAt(posicion);
    // document.getElementById("textoDNI").value = dni+"-"+letra;
    //cambiado para parecer más al ejercicio del ejemplo
    document.getElementById("textoDNI").value +=" - "+letra;

}

function cambiarTexto(){
    document.getElementById("capaTextoId").innerHTML = "DNI completo";
}

function cambiarColorFondo() {
    //cambiado el color para parecerse al de ejercicio
    document.getElementById("form").style.backgroundColor ="#00b0ff";
    // y se cambia también el color de background
    document.body.style.backgroundColor = "#0081cb";
    //he usado la paleta de material design
}

//se pone todo a su estado original
function estadoOriginal(){
    document.getElementById("form").style.backgroundColor ="#dcdcdc";
    document.body.style.backgroundColor = "white";
    document.getElementById("capaTextoId").innerHTML = "Teclea los 8 dígitos numéricos del DNI y se añade la letra automáticamente";
}
// JavaScript Document
//array donde se guardan las imagenes
const imgArr = [];

//no se usa el array ver L44
//const textoArr = [];

function cambiarFoto(){
        
        let textGet = document.getElementById("titulos");
        let imageGet = document.getElementById("facultades").getAttribute("src");
        //se pasan los nodos de la página a editar
        imageNueva(imageGet, textGet);

        //se actualiza la página cada 2s
        tiempo=setTimeout("cambiarFoto()", 2000);
}

//se pone la imagen nueva
function imageNueva(imageGet, textGet){
    //calculo aleatorio de la posicion del array
    //donde estan todas las imgs
    let numAleatorio = Math.floor(Math.random()*imgArr.length);
    //se coge la imagen(dir de la imagen) del array con el num aleatorio
    let imagenAleatoria = imgArr[numAleatorio];

    //variable no se usa: ver línea 44
    //let textoAponer = textoArr[numAleatorio];

    console.log("img puesta: "+imageGet);
    console.log("img a poner: "+imagenAleatoria);
    
    //si la imagen que ya esta es la misma que la aleatoria se vuelve a calcular
    if(imageGet === imagenAleatoria){
        imageNueva(imageGet,textGet);
        
    } else{
        //se carga la direccion de la imagen en ID facultades
        document.getElementById("facultades").setAttribute("src", imagenAleatoria);
        //se recorta y edita (si es necesario) el texto de la imagen que cogemos
        //se carga en ID titulos
        textGet.textContent = `Facultad de ${cortarTexto(imagenAleatoria)}`;

        /**  si el nombre de las facultades (al cargarlas, usando cargarFacultad())
        * no estuviese alterado (si las imagenes tuviesen los nombres correctamente editados
        * por ejemplo industriales.jpg en vez de industriales130.jpg)
        * se podría usar el array textoArr y la siguiente carga a HTML: 
        */
        // textGet.textContent = `${textoAponer}`;
    }
}

/**
 * Se recorta el texto de la direccion de las imagenes
 * para que solo quede el nombre de las facultades
 */
function cortarTexto(texto){
    texto = texto.slice(8,-4);
    if(texto.includes("130")){
        return texto.slice(0,-3);
    }
    if(texto.includes("Historia")){
        return "Geografia e Historia"
    }
    return texto;
}
//------------ se cargan las imagenes en el array imgArr[]----

//funcion para cargar la img
//solo sabiendo el nombre de la facultad
function cargarFacultades(facultad){
    imgArr.push(`img/foto${facultad}.jpg`);

    //array de textos no se usa: ver linea 44
    //textoArr.push(`Facultad de ${facultad}`);
}

// se cargan tas las imagenes dentro del array
// dado su nombre correspondiente
// IIFE
(function cargarImgs(){
    cargarFacultades("Ciencias");
    cargarFacultades("Derecho");
    cargarFacultades("Economicas");
    cargarFacultades("Filologia");
    cargarFacultades("Filosofia");
    cargarFacultades("GeografiaHistoria");
    cargarFacultades("Industriales130");
    cargarFacultades("Informatica");
    cargarFacultades("Psicologia");
})()









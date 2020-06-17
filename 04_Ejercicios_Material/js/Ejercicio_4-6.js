// JavaScript Document
//arrays donde se guardan las imagenes y sus textos
const imgArr = [];
const textoArr = [];

function cambiarFoto(){
        
        let textGet = document.getElementById("titulos");
        
        let imageGet = document.getElementById("facultades").getAttribute("src");
        imageNueva(imageGet, textGet);

        tiempo=setTimeout("cambiarFoto()", 2000);

}

//se pone la imagen nueva
function imageNueva(imageGet, textGet){
    //calculo aleatorio de la posicion del array
    //donde estan todas las imgs
    let numAleatorio = Math.floor(Math.random()*imgArr.length);
    let imagenAleatoria = imgArr[numAleatorio];
    
    let textoAponer = numAleatorio;

    console.log("img puesta: "+imageGet);
    console.log("img a poner: "+imagenAleatoria);
    
    //si la imagen que ya esta es la misma que la aleatoria se vuelve a calcular
    if(imageGet === imagenAleatoria){
        imageNueva(imageGet,textGet);
        
    } else{
        document.getElementById("facultades").setAttribute("src", imagenAleatoria);
        
        textGet.textContent = `Facultad de ${cortarTexto(imagenAleatoria)}`;


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

//funcion para cargar la img
//solo sabiendo el nombre de la facultad
function cargarFacultades(facultad){
    imgArr.push(`img/foto${facultad}.jpg`);
    textoArr.push(`Facultad de ${facultad}`);
}
//se cargan tas las imagenes dentro del array
//dado su nombre correspondiente
//IIFE
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









// JavaScript Document
//array donde se guardan las imagenes
const imgArr = [];

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
    //se coge la imagen(dir de la imagen) del array con el num aleatorio
    let imagenAleatoria = imgArr[Math.floor(Math.random()*imgArr.length)];

    console.log("img puesta: "+imageGet);
    console.log("img a poner: "+imagenAleatoria.dir);
    
    //si la imagen que ya esta es la misma que la aleatoria se vuelve a calcular
    if(imageGet === imagenAleatoria.dir){
        imageNueva(imageGet,textGet);
        
    } else{
        //se carga la direccion de la imagen en ID facultades
        document.getElementById("facultades").setAttribute("src", imagenAleatoria.dir);
        //se recorta y edita (si es necesario) el texto de la imagen que cogemos
        //se carga en ID titulos
        textGet.textContent = `Facultad de ${imagenAleatoria.facultad}`;
    }
}

//------------ se cargan las imagenes en el array imgArr[]----

//funcion para cargar la img
//solo sabiendo el nombre de la facultad
function cargarFacultades(facultad){
    /**
     * se crea obj imagen
     * dir donde la img esta alojada
     * facultad = nombre de la facultad
     */
    let imagen ={
        dir: `img/foto${facultad}.jpg`,
        facultad: facultad,
    }
    console.log("antes d cortar: "+imagen.facultad);
    
    //se editan los nombres de las imagenes
    if(imagen.facultad.includes("130")){
        imagen.facultad = imagen.facultad.slice(0,-3)
    }
    if(imagen.facultad.includes("Historia")){
        imagen.facultad = "Geografia e Historia"
    }

    console.log("dps de cortar: "+ imagen.facultad);
    
    imgArr.push(imagen);
}

// se cargan tas las imagenes dentro del array
// dado su nombre correspondiente
// IIFE
(function cargarImgs(){
    console.log("##############CARGANDO IMAGENES################");
    
    cargarFacultades("Ciencias");
    cargarFacultades("Derecho");
    cargarFacultades("Economicas");
    cargarFacultades("Filologia");
    cargarFacultades("Filosofia");
    cargarFacultades("GeografiaHistoria");
    cargarFacultades("Industriales130");
    cargarFacultades("Informatica");
    cargarFacultades("Psicologia");

    console.log("##########IMAGENES CARGADAS###############");
    imgArr.forEach( i => console.log(i));
    console.log("##########INICIO DEL PROGRAMA############");
})()









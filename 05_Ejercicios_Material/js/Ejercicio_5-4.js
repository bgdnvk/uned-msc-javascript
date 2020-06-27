// JavaScript Document
//se cogen todos los elementos
const video = document.getElementById("player");
const tiempoTxt = document.getElementById("tiempo");
const diapositiva = document.getElementById("diapo");

//"menu" con datos del player/video
//he creado un objeto porque es fácil de leer/entender
//cada atributo es una función
const player = {
    play: () =>{
        video.paused ? video.play() : video.pause();
    },
    small: () => video.width = 480,
    normal: () => video.width = 720,
    big: () => video.width = 840,
    getTime: () => video.currentTime,
    setTime: (x) => video.currentTime = x,
}
//función para actualizar los datos en pantalla
let actualizarDatos = () =>{
    //obtenemos 2 tiempos: para texto e imagenes
    //pues visualmente hay desincronización si usamos solo uno
    //primero se recoge el máximo menor de un número
    //luego quitamos los decimales
    //de esta manera el texto no esta desincronizado
    let tiempoTexto =  Math.floor(player.getTime()).toFixed(0);
    tiempoTxt.innerHTML = tiempoTexto;
    //para cambiar las imagenes se coge el tiempo con mayor precision posible
    let tiempo = player.getTime().toFixed(0);
   //solo actualizar los datos cuando el video se reproduzca
   if(!video.paused){
        comprobarActualizar(tiempo);
   } 
   //se mantiene la imagen original si el tiempo es 0
   //y la imagen cambia si el video esta pausado también
   if(video.paused && tiempo === "0"){
        diapositiva.src = "img/Imageninicial.png"
   } else{
        comprobarActualizar(tiempoTexto);
   }
} 
//se pone el intervalo de actualización
setInterval(actualizarDatos, 100);

//se actualiza la imagen si el tiempo esta en el array
function comprobarActualizar(tiempoQcomprobar){
    for(e of arrayTiempos){
        Number(e) === Number(tiempoQcomprobar) && actualizarImagen(arrayImagenes[arrayTiempos.indexOf(e)]);
    }
    //ver más comentarios en la última línea
}

//se actualizan el source en el html
function actualizarImagen(x){
    diapositiva.src = x;
}

//se cargan los eventListeners para clicks usando el objeto player
document.getElementById("play").addEventListener("click", player.play);
document.getElementById("small").addEventListener("click", player.small);
document.getElementById("normal").addEventListener("click", player.normal);
document.getElementById("big").addEventListener("click", player.big);

//se cargan 2 arrays con las imagenes: su posición y el path
//considero que sería más facil usar un array de objetos
//pero he seguido el enunciado con 2 arrays
const arrayImagenes = [];
const arrayTiempos = ["00","07",12,17,23,27,31,32];
//cargamos las imagenes en arrayImagenes en relación de su tiempo
(function cargarArrays(){
    for (let i = 0; i<8; i++){
        arrayImagenes.push(
            `img/Imagen0${i+1}_0${arrayTiempos[i]}.jpg`
        )
    }
})();
//comprobar que las imagenes se han cargado por consola
console.log(arrayImagenes);

//ver L51
//sin corto circuito:
        //     if(Number(e) === Number(tiempo)){
        //         actualizarImagen(arrayImagenes[arrayTiempos.indexOf(e)]);
        //     }

        /**
         * Si tiempo de ejecución es un problema con for bucles
         * se podría usar un switch 
         */
    //    switch(tiempo){
    //        case "0.0":
    //            actualizarImagen(arrayImagenes[0]);
    //            break;
    //         case "7.0":
    //             actualizarImagen(arrayImagenes[1]);
    //             break;
    //    }

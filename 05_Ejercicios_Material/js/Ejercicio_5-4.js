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
//función para actualizar el tiempo de reproducción
//se coge solo una décima con toFixed()
let actualizaTiempo = () =>{
   let tiempo = tiempoTxt.innerHTML = player.getTime().toFixed(0);
   //solo actualizar los datos cuando el video se reproduzca
   if(!video.paused){
       console.log(tiempo);
       console.log(typeof(tiempo));
       
        arrayTiempos.forEach(e => {
            // console.log("tiempo es: "+Number(tiempo));
            // console.log(typeof(tiempo));
            
            // console.log("e es : "+Number(e));
            // console.log(typeof(e));
            
            
            
            if(Number(e) === Number(tiempo)){
                console.log("##########");
                console.log("tiempo es: "+tiempo);
                console.log("e es : "+e);
                
                actualizarImagen(arrayImagenes[arrayTiempos.indexOf(e)]);
            }
            // Number(e) === Number(tiempo) && actualizarImagen(arrayTiempos[e])
        })

    //    switch(tiempo){
    //        case "0.0":
    //            actualizarImagen(arrayImagenes[0]);
    //            break;
    //         case "7.0":
    //             actualizarImagen(arrayImagenes[1]);
    //             break;
    //    }
   }
   
   
} 
//se pone el intervalo de actualización
setInterval(actualizaTiempo, 100);

//se cargan los eventListeners para clicks usando el objeto player
document.getElementById("play").addEventListener("click", player.play);
document.getElementById("small").addEventListener("click", player.small);
document.getElementById("normal").addEventListener("click", player.normal);
document.getElementById("big").addEventListener("click", player.big);

//se cargan 2 arrays con las imagenes: su posición y el path
const arrayImagenes = [];
const arrayTiempos = ["00","07",12,17,23,27,31,32];

(function cargarArrays(){
    
    for (let i = 0; i<8; i++){
        arrayImagenes.push(
            `img/Imagen0${i+1}_0${arrayTiempos[i]}.jpg`
        )
    }
    // return arrayImagenes;
})();
console.log(arrayImagenes);

// const arrays2 = [00,07,12,17,23,27,31,32];
// let cargarArrays2 = () =>{
//    let newArr= arrays2.map(x => `img/Imagen0${arrays2.indexOf(x)+1}_0${arrays2.indexOf(x)}.jpg`);
//    console.log(newArr);
   
// }
// cargarArrays2();




function actualizarImagen(x){
    diapositiva.src = x;
}
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
let actualizaTiempo = () => tiempoTxt.innerHTML = player.getTime().toFixed(1);
//se pone el intervalo de actualización
setInterval(actualizaTiempo, 100);


document.getElementById("play").addEventListener("click", player.play);
document.getElementById("small").addEventListener("click", player.small);
document.getElementById("normal").addEventListener("click", player.normal);
document.getElementById("big").addEventListener("click", player.big);



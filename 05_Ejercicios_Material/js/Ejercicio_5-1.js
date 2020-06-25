// JavaScript Document

//hice este ejercicio antes de leer 5-2
//al leerlo simplemente he retocado 5-1.html con las funciones deseadas
//dentro de un tag script y he eliminado la dependencia/src de 5-1.js
//en 5-2 he reusado este código sin usar import


/**
 * arrays con instrucciones según ejercicio
 * se puediese haber usado [x,x,x].forEach
 * pero con las variables se lee mejor
 */
const encima = ["mouseover", "Donald_2.png"];
const retira = ["mouseout", "Donald_1.png"];
const click = ["click", "Goofi_1.png"];
const dblclick = ["dblclick", "Goofi_2.png"];

const instrucciones = [encima, retira, click, dblclick];

window.addEventListener('load', function() {
    //se identifica la imagen a cambiar
    const cambioImg = document.getElementById('cambio');
    //se usa un foreach para iterar sobre el array de instrucciones
    instrucciones.forEach(function(element){
         //se crean event listeners con sus instrucciones específicas
         //he usado function en vez de => para poder usar "this" (como en el enunciado)
        cambioImg.addEventListener(element[0], function(e){
            this.src = `img/${element[1]}`;
        });
    })

})





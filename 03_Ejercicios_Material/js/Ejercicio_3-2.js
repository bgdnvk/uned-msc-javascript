// Escribir en este fichero las funciones factorial() y convertir() pedidas en el enunciado
//recursion+ternary
function factorial(x){
    let miNum = parseFloat(x);
    return (miNum === 1? 1:
        miNum* factorial(miNum-1)
        );
}

function convertir(x){
    return parseFloat(x*9/5+32);
}





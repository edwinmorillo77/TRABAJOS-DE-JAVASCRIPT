var cuadrado = prompt("Inserte el lado del cuadrado: ");
cuadrado = parseInt(cuadrado);


function perimetrocuadrado(lado) {
    return lado*4;
}

function superficiecuadrado(lado) {
    return Math.pow(lado,2)
}

document.write(`<h2> Perimetro= ${perimetrocuadrado(lado)}<h2> <h2> Área= ${superficiecuadrado(lado)} `)




    
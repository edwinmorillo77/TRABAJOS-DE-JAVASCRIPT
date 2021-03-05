var valor1 = prompt("Inserte el primer valor:  ");
valor1 = parseInt(valor1);

var valor2 = prompt("Inserte el segundo valor:  ");
valor2 = parseInt(valor2);


var valor3 = prompt("Inserte el tercer  valor:  ");
valor3 = parseInt(valor3);

function numero_maximo(a,b,c) 

{
    return Math.max(a,b,c);
}

document.write(`<h1> El valor mayor fue: ${numero_maximo(valor1,valor2,valor3)}`)
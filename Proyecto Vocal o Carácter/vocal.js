var input = prompt("Inserte una vocal o un carácter por favor: ");

var vocales = ["a", "e", "i", "o", "u"];

for (let i = 0; i < vocales.length; i++) {
    if (input == vocales[i]) {
        document.write(`Lo que usted inserto fue una vocal :  ${vocales[i]} `);
        break;
    }
    else {
        document.write(`Lo que usted inserto fue un cáracter :  ${input} `);
        break;
    }
}
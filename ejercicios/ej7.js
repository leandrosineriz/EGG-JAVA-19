/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

let limite = parseInt(prompt("Ingrese el limite positivo"));
let suma = 0;

do {
    suma += parseInt(prompt("Ingrese un numero:"));
    console.log(`Suma: ${suma}`)
} while (suma<limite);
console.error(`Se supero el limite ${limite}, la suma fue de ${suma}`)
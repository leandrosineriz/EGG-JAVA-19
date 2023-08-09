/*Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

let palabra = prompt("Ingrese una frase:");

let array = palabra.split(" ");
let masLarga= "";
for (const a of array) {
    if (masLarga.length < a.length) {
        masLarga = a;
    }
}

console.log(masLarga);
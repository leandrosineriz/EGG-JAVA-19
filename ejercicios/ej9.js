/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/

let frase = prompt("Ingrese una frase:");
let nuevaFrase = "";
for (let i = 0; i < frase.length; i++) {
    //console.log(frase.substring(i, i + 1));
    nuevaFrase = nuevaFrase.concat(frase.substring(i, i + 1), " ");

}
console.log(nuevaFrase);
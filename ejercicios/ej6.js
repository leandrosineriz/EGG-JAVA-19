/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/

let num1 = parseInt(prompt("Ingrese un numero"));

if (num1%2==0) {
    console.log("Es par");
} else {
    console.warn("Es impar");
}

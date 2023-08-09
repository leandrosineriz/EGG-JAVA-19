/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/
let max = 0;
let min = 0;
let promedio = 0;
let suma = 0;
let cant = 0;
do {
    var num = parseInt(prompt("Ingrese un numero, 0 para salir:"));
    if(num==0) break;
    if (cant == 0) {
        max=num;
        min=num;
    } else {
        if (max < num) {
            max = num;
        }
        if (min>num) {
            min = num;
        }
    }
    suma+=num;
    cant++;
} while (num!=0);

console.log(`El numero maximo fue: ${max}
El numero minimo fue: ${min}
El promedio fue: ${suma/cant}`);
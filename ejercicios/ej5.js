/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));
let operador = prompt(`Ingrese el operador de la equacion:
(s- suma, r-resta, m-multiplicacion, d-division)`);

if(operador.toLowerCase()!="s" && operador.toLowerCase()!="r" && operador.toLowerCase()!="m" && operador.toLowerCase() !="d"){
    console.log("Operador incorrecto.");
} else {
    switch (operador) {
        case "s":
                console.log(num1+num2);
            break;
        case "r":
                console.log(num1-num2);
            break;
        case "m":
                console.log(num1*num2);
            break;
        case "d":
                console.log(num1/num2);
            break;
        
        default:
            break;
    }
}
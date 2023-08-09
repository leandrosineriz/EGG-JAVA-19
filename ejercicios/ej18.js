/*A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/

var valores = [true, 5, false, "hola", "adios", 2];
let masLargo = "";
let num1 = null;
let num2 = null;
for (const e of valores) {
    if (typeof e == "string") {
        if (masLargo.length < e.length) {
            masLargo = e;
        }
    } else if ( typeof e == "boolean" ) {
        if (e) {
            console.log("Es verdadero");
        } else {
            console.log("Es falso")
        }
    } else if ( typeof e == "number" ) {
        if (num1 == null) {
            num1 = e;
        } else if (num2 == null) {
            num2 = e;
        }
    }
}

console.log(`El string mas largo fue: ${masLargo}
Suma: ${num1+num2}
Resta: ${num1-num2}
Multiplicacion: ${num1*num2}
Division: ${num1/num2}`)
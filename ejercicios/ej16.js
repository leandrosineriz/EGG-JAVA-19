/*Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/

let array1 = new Array();
let array2 = new Array();

for (let index = 0; index < 5; index++) {
    array1.push(parseInt(Math.random()*100));
    array2.push(parseInt(Math.random()*100));
}
console.log(array1);
console.log(array2);
/*Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/

let array1 = new Array();
let array2 = new Array();

for (let index = 0; index < 50; index++) {
    array1[index] = Math.random() * 100;
}

console.log(array1);

array1.sort((a, b)=> a - b);

console.log(array1);

for (let index = 0; index < 20; index++) {
    if(index>=10){
        array2[index] = 0.5;
        continue;
    }
    array2[index] = array1[index];
}

console.log(array2);
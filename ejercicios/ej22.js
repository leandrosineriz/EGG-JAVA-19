/*Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección.*/

let button = document.getElementById("btn");
let respuesta = document.getElementById("resultado");

button.onclick = () => {
    respuesta.innerHTML = "Hice un click!!";
    respuesta.hidden = !respuesta.hidden;
}
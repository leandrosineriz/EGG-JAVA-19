/*Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.*/

let btn = $( "#btn1" );
let input1 = $("#input1");
let result = $("#result");

btn.on("click", function (event){
    result.html("El día de hoy está... "+input1.val());
    result.attr({
        hidden: !result.attr("hidden")
    });
})
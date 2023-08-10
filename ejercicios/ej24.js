/*Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.*/

let btn = document.getElementById("btn");
let result = document.getElementById("result");
let radio = document.getElementById("radio");
let selector = document.getElementById("selector");
//console.log(selector.value);
btn.onclick = () => {
    //console.log(radio.value);
    
    switch (selector.value) {
        case "area":
            result.innerHTML = 3.14*(parseFloat(radio.value)**2);
            
            break;
        case "perimetro":
            result.innerHTML = 3.14*(parseFloat(radio.value)*2);
            break;
    
        default:
            break;
    }
    result.hidden = false;
}
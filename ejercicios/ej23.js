/*Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
amarillo, por ejemplo)*/

let btn = document.getElementById("btn");
let texto = document.getElementById("texto");
let textOriginal = texto.innerHTML;

btn.onclick = () => {
    let textArray = textOriginal.split(" ");

    for (let index = 0; index < textArray.length; index++) {
        if (textArray[index].length>8) {
            
            textArray[index] = `<span style="background-color:yellow;">${textArray[index]}</span>`;
        }
        
    }
    
    console.log(textArray.join(" "));
    texto.innerHTML = textArray.join(" ");
}
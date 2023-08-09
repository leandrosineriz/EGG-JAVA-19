/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

let radio = parseFloat(prompt("Ingrese el radio del circulo:"));

function calcularAreaCirculo(radio){
    return 3.14*(radio**2);
}

function calcularPerimetroCirculo(radio){
    return 3.14*(radio*2);
}

console.log(`El area del circulo es: ${calcularAreaCirculo(radio)}
El perimetro del circulo es: ${calcularPerimetroCirculo(radio)}`);
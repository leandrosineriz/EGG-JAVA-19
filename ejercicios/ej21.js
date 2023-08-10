/*Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/

class Persona{
    nombre;
    edad;
    sexo;
    peso;
    altura;
}

let p1 = new Persona();
p1.nombre="Jose";
p1.altura=1.88;
p1.edad=30;
p1.peso=110;
p1.sexo="H";

let array1 = Object.keys(p1);
console.log(array1);
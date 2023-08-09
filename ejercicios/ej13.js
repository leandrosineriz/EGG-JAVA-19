/*Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/

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

console.log(p1);
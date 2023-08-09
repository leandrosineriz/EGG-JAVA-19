/*Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/

class Libro{
    isbn;
    titulo;
    autor;
    npaginas;

    constructor(isbn, titulo, autor, npaginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.npaginas = npaginas;
    }
}

let l1 = new Libro();


function LlenarLibro(libro){
    libro.isbn= prompt("Ingrese el ISBN:");
    libro.titulo= prompt("Ingrese el Titulo:");
    libro.autor= prompt("Ingrese el Autor:");
    libro.npaginas= prompt("Ingrese el Numero de Paginas:");
}

LlenarLibro(l1);

console.log(l1)
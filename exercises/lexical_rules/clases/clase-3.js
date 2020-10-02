//Tipos: primitivos (numéricos, booleanos,...) y objeto (colección de propiedades, cada una con nombre y valor) 

//Objeto: todo lo que no sea esto es un primitivo
const obj = { a: 1, b: {} }; //Objetos fundamentales 
const arr = [1, 2, 4, 3]; //Arrays

//Sólo los objetos tienen métodos
//Null y Undefined no tienen métodos

//Los tipos de objetos son mutables, de los primitivos no excepto en strings

// Tipo numérico: Number
// Operadores aritméticos: +, -, *, /, %(resto), ** (exponenciación)

const str = "Hello World";

str.substring(1, 3); //lo que está contenido desde el 1 al 3
str.indexOf("l, 3"); //posición de la primera l y después de 3 posiciones que haya
str.startsWith("Hell"); //booleano
str.includes("World"); //booleano
str.replace("llo", "ya"); //cambia el llo por ya
str.trim(); //elimina espacios en blanco

//TEMPLATE STRINGS
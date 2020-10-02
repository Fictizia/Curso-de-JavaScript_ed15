let nombre = "Pablo ";
let apellido = "Garcia";

console.log(nombre + apellido);

nombre += apellido
console.log(nombre);


//2
let name = "Pablo";
let firstQuote = "Mi nombre es";
let lastQuote = "¿Cómo estás?";
let blank = " ";

firstQuote
    .concat(blank)
    .concat(name)
    .concat(blank)
    .concat(lastQuote);

//Template string
const name = "Pablo";
const firstQuote = "Mi nombre es";
const lastQuote = "¿Cómo estás?";
const result = `${firstQuote} ${name}, ${lastQuote}`; 


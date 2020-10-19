# Objects lookup

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios

## Descripción

Empiezas con una funcion que coje el objeto collection, una id, una prop (como artist o tracks) y un valor. Completa la funcion usando las siguientes reglas para modificar el objeto coleccion:

- La función siempre debe retornar el objeto entero
- Si una prop no es tracks y values no es un string vacio, actualiza o crea el nuevo album que entra en la prop al valor correspondiente.
- Si la prop es tracks pero el almbum no tiene tracks, crea un array vacio y añade el valor correspondiente a él.
- Si la prop es tracks y el valor no es un string vacio, añade el valor al final del array de tracks.
- Si el valor es un string vacio, borra la prop del album correspondiente.

```js
const collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(object, id, prop, value) {
  return object;
}

updateRecords(collection, 5439, "artist", "ABBA");
```

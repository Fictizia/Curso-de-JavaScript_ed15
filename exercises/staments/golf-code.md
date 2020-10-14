# Golf Code

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios asociado a un `.html` que renderizaras con la extensión live server de vscode

## Descripción

En el juego de golf, cada hoyo tiene un par, lo que significa el número promedio de golpes que se espera que haga un golfista para meter la bola en un hoyo para completar el juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, hay un apodo diferente.

A la función se le pasarán argumentos `par` y `strokes`. Devuelve la cadena correcta de acuerdo con esta tabla que enumera los golpes en orden de prioridad; de arriba (más alto) a abajo (más bajo):

| Strokes    | Return         |
| ---------- | -------------- |
| 1          | "Hole-in-one!" |
| <= par - 2 | "Eagle"        |
| par - 1    | "Birdie"       |
| par        | "Par"          |
| par + 1    | "Bogey"        |
| par + 2    | "Double Bogey" |
| >= par + 3 | "Go Home!"     |

```js
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  return "Change Me";
}

golfScore(5, 4);
```

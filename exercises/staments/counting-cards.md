# Contando cartas

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios asociado a un `.html` que renderizaras con la extensión live server de vscode

## Descripción

En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa si lleva un registro del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama conteo de cartas.

Tener más cartas altas en el mazo favorece al jugador. A cada carta se le asigna un valor de acuerdo con la tabla siguiente. Cuando la cuenta es positiva, el jugador debe apostar alto. Cuando la cuenta es cero o negativa, el jugador debe apostar poco.

Escribe una función de conteo de cartas. Recibirá un parámetro de `card`, que puede ser un número o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo con el valor de la `card`. La función devolverá una cadena con el recuento actual y la cadena `Bet` si el recuento es positivo, o `Hold` si el recuento es cero o negativo. El recuento actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

| Count | Cards          |
| ----- | -------------- |
| +1    | 2,3,4,5,6      |
| 0     | 7,8,9          |
| -1    | 10, J, Q, K, A |

Ejemplo:

`-3 Hold`
`5 Bet`

```js
let count = 0;

function cc(card) {
  return "Change Me";
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
```

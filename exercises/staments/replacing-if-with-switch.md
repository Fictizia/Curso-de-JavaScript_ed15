# Reemplazando con switch

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios

## Descripción

Susituye la cadena de if/else por un estamento switch

```js
function chainToSwitch(val) {
  let answer = "";

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  return answer;
}

chainToSwitch(7);
```

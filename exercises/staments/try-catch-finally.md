# try/catch/finally

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios

## Descripción

- Lanza un error desde ambas funciones de suma si el tipo del parametro no es un numero
- Captura el error en la expresion final y en el catch implementa un console.error del error, ejemplo:

```js
function sum(x, y) {
  return x + y;
}

function sum10(x) {
  return sum(x, 10);
}

sum10("foo") + sum(5, 8);
```

# Objects lookup

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios

## Descripción

Convierte el estamento switch en un objeto llamado tabla. Usa el val para retornar el string correcto y asocialo en la variable result

```js
// Setup
function phoneticLookup(val) {
  let result = "";

  switch (val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  return result;
}

phoneticLookup("charlie");
```

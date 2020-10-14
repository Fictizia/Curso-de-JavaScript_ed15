# Ricitos de oro y los tres osos

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios asociado a un `.html` que renderizaras con la extensión live server de vscode

## Descripción

La historia presenta a una joven llamada Ricitos de Oro que se encuentra con una extraña cabaña en el bosque, allí encuentra tres tazones de avena, los prueba con avidez y descubre que uno está demasiado caliente, el otro demasiado frío y el último está bien. . Continúa encontrando tres sillas en la sala de estar, por supuesto, las prueba todas y descubre que una es demasiado grande, la otra es demasiado grande y la última es la correcta. Cansada, después de toda esa papilla, se cruza con el dormitorio donde hay tres camas, según va el patrón, decide volver a probarlas todas, la primera es demasiado dura, la segunda es demasiado blanda pero claro que la última. está bien, por lo que cae en un sueño profundo y se despierta para encontrar una familia de osos muy enojada.

Vamos a crear un juego de elige tu aventura basado en este cuento de hadas.

A diferencia del cuento de hadas original, Ricitos de Oro elegirá qué papilla come, en qué silla se sienta y en qué cama duerme. Para agregar un poco más de giro, el juego solo continuará si ella toma la decisión "correcta".

Hay cuatro opciones principales en nuestro juego:

- ¿Entramos en la cabaña en primer lugar?
- ¿Qué plato de avena comemos?
- ¿En qué silla nos sentamos?
- ¿En qué cama dormimos?

```js
const confirmation = confirm(
  "Esto sirve para realizar una seleccion de true o false"
);
const prompt = prompts("Esto sirve para pedir impt al usuario");
```

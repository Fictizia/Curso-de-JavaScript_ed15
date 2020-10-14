# Estamentos

Si las expresiones en JS son frases. Los estamentos en JS son sentencias u ordenes. Tal como en nuestro lenguaje las sentencias son separadas unas de otros o terminadas, con un punto. Los estamentos en JS son terminados con punto y coma `;`. Las expresiones son evaluadas para producir un valor, pero los estamentos son **ejecutados** para hacer que algo ocurra.

Una de las maneras de hacer que algo ocurra es evaluar una expresión que tiene efectos secundarios. Las expresiones con efectos sencundarios, tales como las asignaciones o las invocaciones, son por si mismas estamentos, y cuando son usadas de esa manera se las conoce como _expresiones estamento_. En una categoría parecida están los _estamentos declarativos_ que declaran nuevas variables y definen nuevas funciones.

Los programas escritos en JS no son más que una secuencia de estamentos a ejecutar. Por defecto, el intérprete de JS ejecuta dichos estamentos uno detrás del otro en el orden que fueron escritos.

Otra manera de hacer que algo suceda, es alterar el orden de ejecución y JS tiene algunos estamentos o _estructuras de control_ para justo esa acción:

- Condicionales: estamentos como `if` o `switch`hacen que el intérprete de JS ejecute o salte algunos estamentos dependiendo del valor de una expresión.
- Loops: estamentos como `while` o `for` que ejecutar otros estamentos de manera repetida.
- Saltos: estamentos como `break`, `return` y `throw` que hacen que el interprete salte de una parte a otra del programa.

## Estamentos expresión

La forma más simple de estamentos en JS son las expresiones que tienen efectos secundarios:

```js
greetings = "Hello " + name;
i *= 3;
```

A su vez los operadores de incremento y decremento (`++`, `--`) son también estamentos de asignación por su naturaleza.

```js
counter++;
```

Ciertas llamadas a funciones que producen efectos secundarios son también estamentos de expresión:

```js
displaySpinner();
const x = Math.cos(y);
```

## Estamentos compuestos y vacíos

TODO: IMPLEMENTAR

## Condicionales

Los estamentos de condicionales ejecutan o saltan otros estamentos dependiendo del valor de una expresión específica. Estos estamentos son puntos de decisión en tu código, y son conocidos como ramificaciones. Si imaginamos al intérprete de JS siguiendo un camino a través del código, los condicionales serían lugares donde el código se ramifica en dos o más caminos y el intérprete debe elegir cual de ellos seguir.

### if

El estamento `if` es el estamento de control fundamental que permite a JS tomar decisiones, o más preciso, ejecutar estamentos condicionalmente. Tiene dos formas, la primera:

```text
if (expresión)
  estamento
```

En esta forma, la expresión es evaliada. Si el resultado de la evaluación es un valor verdadero, el estamento es ejecutado. Si el resultado de la evaluación es falso, entonces no se ejecuta. Por ejemplo:

```js
if (username == null) {
  username = "Iván Zamarro";
}

// o su equivalente

if (username == null) username = "Iván Zamarro";
```

Los parentesis alrededor de la expresión a evaluar, **son requeridos** y son parte de la sintáxis de `if`.

Aunque JS requiere en sus `if` al menos un estamento, podemos usar un bloque de estamento para combinar múltiples en uno.

```js
if (!address) {
  address = "";
  message = "Escribe una dirección de email";
}
```

La segunda forma de los `if` introduce una cláusula `else` que es ejecutada cuando la expresión evalua a `false`:

```text
if (expresión)
  estamento1
else
  estamento2
```

Esta forma de estamento ejecuta el primer estamento si la expresión es verdadera y la segunda si es falsa:

```js
if (n === 1) console.log("Tienes un nuevo mensaje!");
else console.log(`Tienes ${n} nuevos mensajes!`);
```

Si tenemos múltiples `if` anidados con cláusulas `else`, hay que poner cuidado en asegurarse de quenuestro `else` va con el `if` apropiado:

```js
if (i === j) {
  if (j === k) console.log("i es igual a k");
  else console.log("i no es igual a j");
}
```

La regla en JS es que por defecto un `else` es parte de su `if` más cercano. En general para mantener los estamentos `if` mejor ordenados, legibles y debugeables, es mejor usar llaves:

```js
if (i === j) {
  if (j === k) {
    console.log("i es igual a k");
  }
} else {
  console.log("i no es igual a j");
}
```

### else if

El estamento `if/else` evalua la expresión y ejecuta una o dos piezas de código, dependiendo de su valor. Pero ¿qué pasa cuando necesitamos ejecutar una o más piezas de código? Una forma de hacerlo es con un estamento `else if`. `else if` no es en realidad un estamento de JS, sino algo de azúcar sintáctico para aquellas veces en las que debemos repetir estamentos `if/else`:

```js
if (n === 1) {
  // pasan cosas
} else if (n === 2) {
  // pasan más cosas
} else if (n === 3) {
  // pues otras cosas pasan
} else {
  // si todo lo anterior falla, pasan cosas aquí
}
```

No tiene nada especial este código. Solo es una serie de estamentos `if`, en el que cada `if` es parte de una cláusula `else` del estamento previo. Esto hace más legible el código, lo siguiente sería equivalente:

```js
if (n === 1) {
  // pasan cosas
} else {
  if (n === 2) {
    // pasan más cosas
  } else {
    if (n === 3) {
      // pues otras cosas pasan
    } else {
      // si todo lo anterior falla, pasan cosas aquí
    }
  }
}
```

### switch

Un estamento `if` causa una ramificación en el flujo de ejecución de nuestros programas, y podemos usar su forma `else if` para realizar una multiramificación. Aunque esta no es la mejor solución cuando nuestrar ramas dependen del valor de la misma expresión. En estos casos, es un gasto de tiempo evaluar la misma expresión en múltiples `if`.

El estamento `switch` maneja justo esta situación. La palabra clave `switch` es seguida de una expresión entre paréntesis y un bloque de llaves:

```text
switch (expresión) {
  estamentos
}
```

Aunque su sintáxis es algo más complicada que lo anterior. En el bloque entre llaves varias variaciones son etiquetadas con la palabra clave `case` seguida de una expresión y dos puntos `:`. Cuando un `switch` se ejecuta, calcula el valor de la expresión y luego busca el `case` cuya expresión evalua al mismo valor (donde la igualdad la determina el operador `===`). Si encuentra una ejecuta el bloque de código del estamento etiquetado para ese `case`. Sino encuentra ningún `case` que coincida con dicho valor, ejecutara el estamento etiquetado como `default:`. Si no existe un `default` el `switch` sera saltado completamente.

`switch` es dificil de explicar, asi que refactorizemos el anterior `if/else` a un `switch`:

```js
switch (n) {
  case 1: // empieza aqui si n === 1
    // pasan cosas
    break; // para aquí
  case 2:
    // pasan más cosas
    break;
  case 3:
    // pues otras cosas pasan
    break;
  default:
    // si todo lo anterior falla, pasan cosas aquí
    break;
}
```

La palabra `break` usada al final de cada `case` hace que el intérprete salte al final del estamento `switch` y continue con el siguiente. Cada `case` en un `switch` especifica solamente el punto de entrada del código deseado a ejecutar, no un punto de salida. Si no hay un estamento de salto `break`, entonces `switch` empieza a ejecutar primero el estamento que coincide con el valor de la expresión, pero luego continuaria ejecutando estamentos hasta que alcanzara el final del bloque. Aunque aveces este comportamiento de caer de un `case` a otro es útil, el 99% de las veces debemos preocuparnos de salir del `case`, bien sea con un `break` o un `return`.

```js
function convert(x) {
  switch (typeof x) {
    case "number":
      return x.toString(16);

    case "string":
      return `"${x}"`;

    default:
      return String(x);
  }
}
```

Aunque normalmente usaremos los `case` seguidos de literales de números y strings, JS permite que cada `case` sea seguido de una expresión cualquiera (aunque esto es poco útil).

El estamento `switch` primero evalua la expresión que sigue a su palabra clave y luego cada expresión de `case` hasta que encuentra la que coincide. La coincidencia es determinada usando el operador de igualdad estricta `===` por lo que no habrá conversión de tipos.

Como no todas las expresiones `case` son evaluadas cada vez que el estamento `switch` es ejecutado, debes evitar usar expresiones en `case` que tengan efectos secundarios como asignaciones o llamadas a funciones.

Si ninguno de los `case` coincide con la expresión evaluada del `switch`, se ejecutará el cuerpo del estamento etiquetado como `default`. Si no hay un `default` entonces se saltará todo el cuerpo del switch. Aunque `default` puede aparecer en cualquier lado del `switch` lo lógico es establecerlo como último estamento después de todos los `case`.

_Nota: Puedes agrupar estamentos `case` con las mismas condiciones_

```js
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

## Loops

Para entender los estamentos condicionales, hemos imaginado al intérprete de js siguiendo un camino ramificado a través de nuestro código. Los estamentos de loop son aquellos que doblan dicho camino sobre si mismo para repetir porciones del código. JS tiene 5 tipos de loops: `while`, `do/while`, `for`, `for/of`-(`for/await`), `for/in`. Un uso muy común de ellos es iterar sobre elementos de un array.

### while

El estamento `while` es el loop básico de JS. Tiene la siguiente sintáxis:

```text
while(expression)
  estamento
```

Para ejecutar el estamento `while` el intérprete primero evalua la expresión. Si el valor de la expresión es falso, entonces el intérprete salta sobre dicho estamento y pasa al siguiente sin ejecutar el cuerpo del `while`. Si es cierto, el intérprete ejecutara el estamento y repetira, evaluando la expresión de nuevo. Es decir, ejecutará de manera repetida el estamento mientras la expresión sea cierta. Con lo cual podemos crear loops infinitos con `while(true)`.

Normalmente no queremos que JS repita la misma operación de manera continua. En casi todos los loop, una o más variables cambian en cada iteración. En el momento en el que las variables cambian, cada acción ejecutada en el cuerpo del loop, el estamento, puede diferir en cada iteración. Iendo más lejos, si el cambio de variable o variables involucra a la expresión del `while`, el valor de la expresión diferira en cada iteración. Esto es importante, puesde otra manera una expresión que comienza cierta podria no cambiar nunca y el loop no terminaría.

```js
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
```

### do/while

TODO: Implementar

### for

El estamento `for` provee un constructor de loop que suele ser mas conveniente que el de `while`. `for` simplifica los loops que sigen un patrón común. Muchos loops tienen una variable contador de algún tipo. Esta variable es inicializada antes de que empieze el loop y testeada antes de cada iteración del loop. Finalmente, la variable contador es incrementada o actualizada al final cuerpo del loop, justo antes de que la variable sea testeada de nuevo. En este tipo de loops, la inicialización, el testeo y la actualización son las tres manipulaciones cruciales sobre la variable del loop. El estamento `for` enclausula estas tres manipulaciones como expresiones y hace de esas expresiones parte de la sintaxis del loop:

```text
for (inicializacion; test; incremento)
  estamento
```

La inicialización, testeo e incremento son tres expresiones, separadas por `;` que son responsables de manipular la variable del loop. Poniendolas todas al inicio de la primera línea del loop se hace más fácil de entender que hace el `for` y previene errores como evitar inicializar o incrementar la variable del loop.

A nivel del switch sería como:

```text
inicializacion;
while(test) {
  estamento;
  incremento;
}
```

En otras palabras, la expresión de inicialización es evaluada una vez, antes de que el loop empieze. Para ser útil, esta expresión debe tener efectos secundarios, normalmente una asignación. JS también permite que la inicialización sea la declaración de una variable de tal manera que puedes declarar e inicializar la variable del loop al mismo tiempo. La expresión de testeo es evaluada antes de cada iteración y controla cuando el cuerpo del loop debe ser ejecutado. Sólo será ejecutado si el test evalua a un valor cierto. Finalmente la expresión de incremento es evaluada, debe ser una vez más una expresión con efectos secundarios para ser útil. Normalmente se usa una expresión de asignación, usando los operadores `++` o `--`.

```js
// imprime los numeros del 0 al nueve

for (let count = 0; count < 10; count++) {
  console.log(count);
}
```

Los loops pueden ser mucho más complejos que el anterior ejemplo, y hay veces que más de una variable cambia en cada iteración. Esta situación es el único ligar donde el operador por coma es muy usado en JS, provee una manera de combinar múltiples inicializaciones y expresiones de incremento en una sola expresión capaz de usarse en un loop `for`:

```js
let i,
  j,
  sum = 0;
for (i = 0, j = 10; i < 10; i++, j--) {
  sum += i * j;
}
```

Aunque normalmente la variable de un loop es numérica. No es necesario. A continuación vemos un loop `for` que itera una lista linkeada y retorna el último objeto de la lista (el primero que tiene la propiedad `next`):

```js
function tail(o) {
  for (; o.next != null; o = o.next) {
    // solo itera mientras o.next exista
    return o;
  }
}
```

El código anterior no tiene expresión de inicialización. Cualquiera de las tres expresiones comentadas pueden ser omitidas en un loop `for`, pero los `;` son requeridos. Si omitimos la expresión de test, el loop se repetirá para siempre, `for(;;)` es equivalente a un `while(true)`

## Recursión

La recursividad es el concepto de que una función se puede expresar en términos de sí misma. Para ayudar a comprender esto, piensa en la siguiente tarea: multiplica los primeros n elementos de un array para crear el producto de esos elementos. Usando un bucle `for`, puedes hacer esto:

```js
function multiply(arr, n) {
  let product = 1;
  for (var i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
```

Sin embargo, si observas `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. Esto significa que podemos reescribir esta función para no necesitar un loop:

```js
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
```

La versión recursiva de `multiply` se descompone así. En el caso base, donde `n <= 0`, devuelve 1. Para valores más grandes de n, se llama a sí mismo, pero con `n - 1`. Esa llamada de función se evalúa de la misma manera, llamando a `multiolay` nuevamente hasta que `n <= 0`. En este punto, todas las funciones pueden retornar y la `multiply` original devuelve la respuesta.

_Nota: Las funciones recursivas deben tener un caso base cuando regresan sin llamar a la función nuevamente (en este ejemplo, cuando `n <= 0`), de lo contrario nunca podrán terminar de ejecutarse._

_Lee: [El siguiente enlace](https://portfoliostuff-parenttobias.codeanyapp.com/2020/01/29/recursion-all-the-way-down/)_

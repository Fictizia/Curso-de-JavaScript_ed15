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

### Recursión

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

### for/of

TODO: IMPLEMENTAR

## Saltos

Otra categoría de los estamentos de JS son los saltos. Como su nombre implica, estos causan que el interprete de JS salte a una nueva localización en el código. El estamento `break` hace que el intérprete salte al final del loop o de otro estamento. `continue` hace que el intérprete pase del resto del cuerpo de un loop y vuelva al principio del mismo a empezar una nueva iteración. A su vez JS, permite etiquetar estamentos, de tal manera que `break` y `continue` puedan identificar el loop objetivo a saltar u otro estamento.

El estamento `return` hace que el intérprete salte de la invocación de una función de vuelta al código que la invocó y a su vez remite el valor de la invocación a dicha función. El estamento `throw` es una especie de generador dentro de una función, lanzando una exepción y es diseñado para trabajar con estamentos `try/catch/finally`, los cuales nos permiten establecer bloques de código donde manejar errores. Es un estamento de salto complicado, pues cuando una excepción es lanzada el intérprete saltará al manejador más cercano, que puede estar dentro de la misma función o en el stack que rodea a la invocación dela misma.

### Estamentos etiquetados

TODO: IMPLEMENTAR

### Break

El estamento `break`, usado en solitario, hace que el loop o `switch` más cercano que lo envuelve termine inmediatamente. Su sintáxis es simple:

```js
break;
```

Como causa que un loop o `switch` salgan, esta forma del estamento `break` solo es legal si aparece dentro de dichos estamentos. En los loops es usado normalmente para causar que salgan de forma prematura, da igual la razón, si no hay necesidad de completar el loop. Cuando un loop tiene condiciones de finalización complejas, es normalmente más facil implementar dichas condiciones con estamentos break, en vez de intentar expresar todo en una única expresión.

Por ejemplo, el siguiente código busca los elementos de un array que tienen un valor particular. El loop termina de manera normal cuando alcanza el final del array, pero también con un `break` si alcanza su objetivo de búsqueda:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === target) {
    break;
  }
}
```

TODO: Implementar información con etiqueta

### continue

El estamento `continue` es similar al estamento `break`. En vez de salir de un loop, `continue` reinicia el loop hasta la siguiente iteración. Su sintaxis es simple:

```js
continue;
```

Solo puede ser usado dentro de un loop, en cualquier otro lado causará un error de sintáxis.
Cuando el estamento `continue` se ejecuta, la iteración del loop actual finaliza, y la siguiente iteración empieza. Dependiendo del tipo de loop:

TODO: Completar

- En un loop `while`, la expresión al inicio del loop es testeada de nuevo y el loop empieza desde el top del mismo si esta expresión se evalua como `true`.
- En un loop de tipo for, la expresión de incremento es evaluada y la expresión de test vuelta a ejecutar para determinar si la iteración debe ser realizada.

La diferencia en comportamiento de `continue` entre un bucle `while` y un `for` es: que un loop `while` retorna directamente a la condición, pero el `for` evalua el incremento y retorna a la condición.

Hemos considerado el comportamiento de un loop `for` en terminos de equivalencia de un `while`, Como el estamento `continue` se comporta diferente entre estos dos loops, no es posible simular un `for` perfectamente como un `while` en solitario..

El siguiente ejemplo muestra un estamento `continue` usado para saltar el resto de la iteración si el error ocurre:

```js
for (let i = 0; i < data.length; i++) {
  if (!data[i]) {
    continue; // No puedo continuar si no tengo datos
  }

  total += data[i];
}
```

### return

Teniendo en cuenta que la invocación a funciones son expresiones y todas las expresiones evaluan a valores. Un estamento `return` dentro de una función especifica el valor de la invocación de dicha función. Su sintáxis es simple:

```js
return expression;
```

Un estamento `return` puede aparecer solo dentrod del cuerpo de una funcuón. Si aparece en cualquier otro lado JS lanzará un un error de sintáxis. Cuando un estamento `return` es ejecutado, la función que lo contiene retornará un el valor de la expresión al que la invoca. Por ejemplo:

```js
function square(x) {
  return x * x; // Retorna la evaluación de la expresión de su derecha
}

square(2); // => 4
```

Cuando uno existe dicho estamento `return`, la función al ser invocada simplemente ejecuta cada estamento de su cuerpo de uno en uno hasta que alcanza el final de la misma y retorna el control a quien la invoca. En este caso, la expresión de invocación siempre evaluará a `undefined`. El estamento `return` normalmente aparece como el último estamento de una función, pero no es necesario: la función retorna el control a su invocador cuando `return` es ejecutado, independientemente de si quedan estamentos por ejecutar en su cuerpo.

El estamento `return` puede ser usado sin expresión para hacer que una función retorne `undefined` a su invocador, por ejemplo:

```js
function displayObject(o) {
  if (o == null) {
    return; // Retorna inmediatamente si el objeto null o undefined
  }

  // ....
}
```

No se pueden meter saltos de línea entre el return y su expresión.

### throw

Una excepción es una señal que indica alguna clase de condicion excepcional o error que ocurre en el código. Lanzar una excepción es como señalizar un error o dicha condición excepcional. Capturar la excepción y manejarla significa tomar las acciones necesarias para recuperarse de dicha excepción. En JS, las ecepciones son lanzadas donde quiera que un error en tiempo de ejecución ocurra o donde un estamento `throw` esté implementado. Las excepciones son capturadas con el estamento `try/catch/finally`.

La sintáxis de un `throw` es:

```text
throw expresión;
```

La expresión puede evaluarse a un valor de cualquier tipo. Puedes lanzar un número que representa un código de error o un string que contiene un mensaje legible por otros programadores. La clase `Error` y sus subclases son usadas cuando el intérprete JS lanza un error por si mismo y también podemos usarlas nosotros. Un objeto `Error` tiene una propiedad llamada `name` que especifica el tipo de error y una propiedad `message` que guarda el string pasado al constructor de la función.

```js
function factorial(x) {
  if (x < 0) {
    throw new Error("x must not be negative"); // se lanza una excepción ante un argumento inválido
  }
  // de otra manera se continua computando el valor de retorno
  let f;
  for (f = 1; x > 1; f *= x, x--);

  return f;
}
```

Cuando una excepción es lanzada, el intérprete de JS finaliza inmediatamente la ejecución del programa y salta a manejador de excepción más cercano. Los manejadores de excepciones se escriben usando las cláusulas `catch` del estamento `try/catch/finally`. Si el bloque de código que lanza la excepción no esta asociada a una cláusula `catch`, el intérprete busca el código que la envuelve para comprobar si existe un manejadore de excepción.

En otras palabras, si la excepción se lanza en una función que no contiene un estamento `try/catch/finally` que la maneje esta es propagada a lo largo del bloque que la invoca. Si al propagarse en la cadena de invocaciones, no se encuentra ningún manejador, la excepción es tratada como un error y reportada al usuario.

### try/catch/finally

El estamento `try/catch/finally` es un mecanismo de manejo de excepciones en JS. La cláusula `try` de este estamento, simplemente define el bloque del código cuya excecpión ha de ser manejada. El `try` es seguido de una cláusula `catch`, la cual es un bloque que es invocado cuando una excepción ocurre en cualquier lado del bloque `try`. La clausula `catch` es seguida de un bloque `finally` cuyo cuerpo contiene el código de limpieza que es garantizado de ser ejecutado independientemente de lo que ocurra en el `try`. Ambos, `catch` y `finally` son opcionales, pero un `try` debe ser acompañado como mínimo de uno de los dos. Como los tres son cláusulas que definen bloques de código, deben ser acompañados de llaves y no son omisibles, incluso si la cláusula solo contiene un estamento:

```js
try {
  /*
    Normalmente este código es ejecutado sin problemas, pero hay veces que una excepción es lanzada, 
    bien de manera directa o bien porque parte del código del bloqe use alguna función que la lanza.
  */
} catch (e) {
  /*
    Este estamento es ejecutado si y solo si el bloque try lanza una excepción. 
    Pudiendo usar la variable local "e" que se refiere al objeto error o valor lanzado por el throw.
    Aqui podemos manejar la excepción, ignorarla o lanzar una nueva si es necesario.
  */
} finally {
  /*
    Este bloque de código siempre sera ejecutado, independientemente de si existe o no una excepción el el try:
    Será ejecutado si:
    1. Normalmente, cuando se alcanza el final del bloque try
    2. Porque se lanze un break, continue, o return
    3. Porque una excepción es manejada por el catch
    4. Por una excepción no manejada que todavia se propaga
  */
}
```

Nota que el `catch` es acompañado de un identificador entre paréntesis. Este identificados es como el parámetro de una función. Cuando una excepción es capturada, el valor asociado a la excepción (un objeto `Error`, por ejemplo) es asignado a este parámetro. El identificador asociado con la cláusula `catch` tiene un scope de bloque, es decir, solo está definido dentro del `catch`.

Si usamos el ejemplo anterior, la función de factoriales con un `try/catch/finally`:

```js
try {
  const n = Number(prompt("Inserta un entero positivo"));
  const f = factorial(n); // usamos la funcion factorial asumiendo que el valor de n es válido

  alert(`${n}! = ${f}`);
} catch (e) {
  alert(e); // si el input que inicializa a n en el try es inválido y la excepción es lanzada la capturamos y mostramos por pantalla
}
```

El anterior ejemplo no usa la cláusula `finally`. `finally` no es tan usada como `catch`, pero puede ser útil. La cláusula `finally` es ejecutada independientemente de lo que ocurra en el `try`. Es usada generalmente para limpiar después del `try`.

En un caso normal, el intérprete de JS alcanzará el final del bloque `try` y procedera con el bloque `finally`, que realiza la limpieza necesaria. Si el intérprete abandona el `try` por causa de un estamento `return`, `continue` o `break`. `finally` es ejecutado antes de que el intérprete salte a su nuevo destino.

Si una excepción ocurre en un bloque `try` y tiene un bloque `catch` asociado para manejar dicha excepción, el intérprete primero ejecutará el bloque `catch` y finalmente el bloque `finally`. Si no hay un bloque `catch` para manejar la excepción, el intérprete primero ejecutará el `finally` y luego saltará al `catch` más cercano en el stack de llamadas.

Si un bloque `finally` causa un salto debido a un estamento `return`, `continue` o `break`, o por llamar a un método que lanza una excepción, el intérprete abandonara cualquier salto que estuviera pendiente y ejecutará uno nuevo. Por ejemplo, si una cláusula `finally` lanza una excepción, dicha excepción reemplaza a cualquiera que estuviera en proceso de ser lanzada. Si `finally` lanza un `return`, el método retorna de manera normal, incluso si hay una excepción que ha sido lanzada y no manejada de todo.

`try` y `finally` pueden ser usados juntos sin `catch`. En este caso, el bloque `finally` simplemente es código de limpieza cuya ejecución está garantizada.

## Otros estamento

TODO: IMPLEMENTAR

## Declaraciones

TODO: IMPLEMENTAR

# Expresiones y operadores

Una expresión es una frase de JS que puede ser evaluada para producir un valor. Una constante incluida literalmente en tu programa es una forma muy simple de expresión. El nombre de una variable es otra expresión simple que evalua a lo que quiera que el valor de dicha variable tenga asignado. Las expresiones mas complejas vienen de construirlas con expresiones simples.

La expresión de acceso a un array, pro ejemplo, consiste en una expresión que evalua el array, seguido de la apertura de corchetes, una expresión que evalua enteros y el cierre de corchete. Esta expresión compleja evalua al acceso de un index especificado de un array especificado: `a[1]`.

De la misma manera ocurre con las invocaciones de las funciones, que son expresiones compuestas por la evaluación de un objeto función y uno o mas expresiones adicionales que son los argumentos de la función: `foo(1)`.

La manera más comun de construir expresiones complejas fuera de las expresiones simples es con un operador. Un operador combina valores de sus operandos de alguna manera y evalua a un nuevo valor. La multiplicación y su operador `*` es un ejemplo. La expresión `x * y` evalua el producto de los valores de la expresión `x` e `y`. Por simplicidad solemos decir que un operador retorna el valor en vez de que lo evalua.

## Expresiones primarias

La forma más simple de expresiones, conocidas como expresiones primarias, son aquellas que están solas, no incluyen ninguna expresión simple. Las expresiones primarias en JS son constantes, o valores literales, algunas palabras claves del lenguaje y referencias a variables.

Los literales son valores constantes que son embebidos directamente en el software:

```js
1.43
"hello"
/pattern/
```

Algunas palabras reservadas de JS son expresiones primarias:

```js
true;
false;
null;
this;
```

A diferencia de las otras palabras clave, `this`no es constante, evalua diferente valores en diferentes puntos del software. La palabra clave `this`es usada en programación orientada a objetos. Junto al cuerpo de un método, `this` retorna o evalua el objeto del cual el método ha sido invocado.

Finalmente, la tercera forma de expresiones primarias es una referencia a las variables, constantes o propiedades del objeto global:

```js
i; // una variable i
undefined; // el valor undefined del propiedad del objeto global
```

Cuando cualquier identificador aparece por si ismo en un programa, JS asume que es una variable, constante o propiedad del objeto global y busca su valor. Si ninguna variable con dicho nombre existe, el intento de evaluar una variable inexistente lanza un error `ReferenceError` a cambio.

## Inicializadores de objetos y arrays

Los inicializadores de objetos y arrays son expresiones cuyo valor es un nuevo objeto o array. Estas expresiones de inicialización son llamadas literales de objetos o literales de arrays. A diferencia de los verdaderos literales, no son expresiones primarias porque incluyen un número de subexpresiones que especifican propiedades y valores de elementos. Los inicializadores de array tienen una sintaxis un poco más simple que la de objetos.

Un inicializador de array es una lista separada por comas de expesiones contenidas entre corchetes. El valor de un inicializador de array es un array recién creado. Los elementos de este nuevo array son inicializados a los valores de las expresiones separadas por coma:

```js
[]; // un array vacío sin expresiones dentro, por lo que sin elementos
[1 + 2, 3 + 4]; // Un array de 2 elementos. El primer elemento es 3 y el segundo 7
```

Las expresiones de los elementos en el inicializador de array pueden ser ellas mismas inicializadores de arrays, lo cual signifíca que dichas expresiones pueden crear arrays anidados:

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

Las expresiones de elementos en un inicializador de array son evaluadas cada vez que el inicializador de array es evaluado. Esto significa que el valor de una expresión inicializadora de un array puede ser diferente cada vez que esta se evalua.

Los elementos `undefined`, pueden ser incluidos en un literal de array, simplemente omitiendo un valor entre comas:

```js
const sparseArr = [1, , , , 5]; // Un array de 5 elementos, incluyendo 3 elementos undefined
```

Una coma final está permitida después de la última expresion de un inicializador de array y no creara un elemento `undefined`. Pero cualquier expresión de acceso al array para un index que venga después de la última expresión que este contiene, necesariamente sera evaluada a `undefined`.

Las expresiones inicializadoras de objetos son como las de array, pero los corchetes son reemplazados por llaves y cada subexpresión es prefijada por un nombre de propiedad y un colon `:`:

```js
const p = { x: 2.3, y: -1.2 }; // Un objeto con dos propiedades
const q = {}; // Un objeto vacío, sin propiedades

q.x = 2.3;
q.y = -1.2; // Ahora q tiene las mismas propiedades que p
```

Los literales de objetos, pueden ser anidados:

```js
const rectangle = {
  upperLeft: { x: 2, y: 2 },
  lowerRight: { x: 4, y: 4 },
};
```

## Expresiones de definicion de funciones

Una expresión de definición de una función, define una función de JS y el valor de dicha expresión es la nueva función definida. De alguna manera, podemos entender estas expresiones como el literal de una función, de la misma manera que el literal de un objeto es una expresión inicializadora de un objeto.

Una expresión de definición de función normalmente consiste en la palabra clave `function` seguida de una lista separada por comas de cero o más identificadores (los nombres de los parámetros) entre paréntesis y un bloque de código JS (el cuerpo de la función) entre llaves:

```js
const square = function (x) {
  return x * x;
};
```

La expresión de definición de una función puede también incluir un nombre para dicha función. Las funciones pueden ser definidas también usando un estamento de función en vez de una expresión de función. En ES6, las expresiones de función pueden usar una nueva forma compacta llamada sintaxis de "arrow function".

## Expresiones de acceso a de propiedades

Una expresión de acceso a propiedad evalua el valor de una propiedad de un objeto o un elemento de array. JS define dos sintaxis para acceder a una propiedad:

```txt
expresión . identificador
expresión [ expresión ]
```

El primer estilo de acceso a propiedad es una expresión seguida por un periodo y un identificador. La expresión especifica el objeto, y el identificado especifica e lnombre de la propiedad deseada.

El segundo estilo de acceso a propiedad sigue a la primera expresión (objeto u array) con otra expresión entre corchetes. La segunda expresión especifica el nombre de la propiedad deseada o el index del elemento deseado en el array.

```js
const o = { x: 1, y: { z: 3 } };
const a = [o, 4, [5, 6]]; // un array que contiene el objeto anterior

o.x; // => 1: propiedad x de la expresión o
o.y.z; // => 3: propiedad z de la expresión o.y
o["x"]; // => 1: propiedad x del objeto o
a[1]; // => 4: elemento del index 1 de la expresión a
a[2]["1"]; // => 6: elemento del index 1 de la expresión a[2]
a[0].x; // => 1: propiedad x de la expresión a[0]
```

Cuando cualquiera de los tipos de acceso a propiedad, es evaluado. Si el valor es `null` o `undefined`, la expresión lanza un error `TypeError`, dado que estos son valores de JS que no tienen propiedades.

Si la expresión de objeto es seguida de un punto y un identificador, el valor de la propiedad nombrada por el identificador es buscado y viene a ser el valor de la expresión total.

Si la expresión de objeto es seguida de otra expresión entre corchetes, la segunda expresión es evaluada y convertida a string. El valor total de la expresión es entonces el valor de la propiedad cuyo nombre tiene ese string. En ambos casos si la propiedad nombrada no existe, entonces el valor de la expresión de acceso a la propiedad es `undefined`.

### Acceso condicional a propiedades

TODO: IMPLEMENTAR

## Expresiones de invocación

Una expresión de invocación de JS, es la sintaxis que tenemos para ejecutar un método o funcion. Empieza con la expresión de una función que identifica la función que desea ser llamada. La expresión de función es seguida por la apertura de parentesis, una lista separada por comas de cero o mas expresiones de argumentos, y el cierre de parentesis:

```js
f(0);
Math.max(x, y, z);
a.sort();
```

Cuando una expresión de invocación es evaluada, la expresión de la función es lo primero que se evalua, luego las expresiones de los argumentos, para producir una lista de valores. Si el valor de la expresión de la función no es una función, un error `TypeError` es lanzado. Seguido, los valores de los argumentos son asignados, en orden, al nombre de los parametros especificados cuando la función fue definida, y el cuerpo de la función es ejecutado. Si la función usa el estamento `return` para retornar un valor, entonces el valor viene a ser el valor de la invocación de la función. De otra manera, el valor de la expresión de invocación es `undefined`.

Cada expresuón de invocación incluye un par de parentesis y una expresión antes de su apertura. Si la expresión es una expresión de acceso a propiedad, entonces la invocación es conocida como metodo de invocación. En los métodos de invocación los objetos o arrays de los la propiedad a la que se accede son parte, viene a tomar el valor del valor `this` cuando el cuerpo de la función es ejecutado. Esto habilita la programación orientada a objetos en JS, donde las funciones (metodos), operan en el objeto del que pertenecen.

Aunque la sintaxis `.identifier`es la más simple de las dos opciones de acceso, ten en cuenta que solo puede ser usada cuando la propiedad a la que quieres tener acceso tiene un identificador legal, y existe. Si el nombre propiedad incluye espacios o caracteres de puntuacion, o es un numero, entonces debes usar la propiedad por corchetes. La sintaxis de acceso por corchetes tambien es util si el nombre de la propiedad no es estatico, sino resultado de otro calculo.

### Invocación condicional

TODO: IMPLEMENTAR

## Expresiones de creacion de objetos

Una expresión de creación de un objeto, crea un nuevo objeto e invoca una función, llamada constructor, para inicializar las propiedades de dicho objeto. Las expresiones de creacion de objetos son como las de invocación, a excepción de que van prefijadas con la palabra reservada `new`:

```js
new Object();
new Point(2, 3);
```

Si ningun argumento es pasado a la función de construccion durante la expresión de creacion del objeto, el par par entero de parentesis puede ser omitido:

```
new Object;
new Date;
```

La evaluación de estas expresiones en un nuevo objeto creado.

## Operadores

Los operadores se utilizan para las expresiones aritméticas de JavaScript, comparación expresiones, expresiones lógicas, expresiones de asignación...

La mayoría de los operadores están representados por caracteres como `+` y `=`. Algunos, sin embargo, están representados por palabras clave `delete` y `instanceof`. Los operadores de palabras clave son operadores regulares, como los de puntuacion, pero tienen una sintaxis más textual.

La siguiente lista, está ordenada por la precedencia de los operadores. Y direccion de la evaluación (derecha a izquierda o izquierda a derecha):

![](media/expressions-operators/operators-table1.png)
![](media/expressions-operators/operators-table2.png)
![](media/expressions-operators/operators-table3.png)

### Numero de operandos

Los operadores pueden ser categorizados basados en el número de operandos que esperan, su aridad. La mayoría de operadores JS, como el operador de multiplicación `*`, son operadores binarios que combinan dos expresiones en una sola más compleja. Es decir, esperan dos operandos. JS también soporta un numero de operadores unarios, los cuales convierten una unica expresión en otra más compleja. El operador `-` en la expresión `-x` es un operador unario que realiza la operación de negación en el operando x. Finalmente, JS soporta el operador ternario u operador condicional `?:`, el cual combina tres expresiones en una sola.

### Operandos y tipo de resultados

Algunos operadores trabajan sobre valores de cualquier tipo, pero la mayoría esperan que sus operandos sean de un tipo específico y la mayoría retornan (o evaluan) a un tipo específico.

Los operadores JS normalmente convierten el tipo de sus operandos segun lo necesitan. El operador de multiplicación `*` espera operandos numericos, pero la expresión `"3" * 5` es egal porque JS puede convertir los operandos a números. El valor de dicha expresión es el número 15, no el string `"15"`. Recuerda que todos los valores JS son ciertos o falsos, por lo que un operador que espera operandos booleanos puede trabajar con operandos de cualquier tipo.

Algunos operadores se comportan de manera diferente dependiendo del tipo de operandos que se usan con ellos. El más remarcable, el operador `+` suma operandos numericos pero concatena operandos de tipo string. De manera similar, el operador de comparación como `<` realiza una comparación numérica o de orden alfabetico dependiendo del tipo de operandos.

### Operadores y sus efectos secundarios

Evaluar una expresión simple como `2 * 3` nunca afecta al estado de tu programa, y cualquier futuro cálculo de tu programa no sera afectado por dicha evaluación. Algunas expresiones, sin embargo, tienen efectos secundarios y su evaluación afecta al resultado de futuras evaluaciones. El operador de asignación es el ejemplo más obvio: si asignas un valor a una variable o propiedad, eso cambia el valor de cualquier expresión que use dicha variable o propiedad.

Los operadores de incremento `++` y decremento `--` son similares, dado que realizan una asignación de manera implicita. El operador `delete` también tiene efectos secundarios: borrar una propiedad es como asignar `undefined` a la propiedad.

Ningún otro operador de JS tiene efectos secundarios, pero las expresiones de creación de un objeto o invocacación de una función pueden tener efectos secundarios si alguno de los operadores usados en la función o en el cuerpo del constructor del objeto tienen efectos secundarios.

### Precedencia de operadores

La precedencia de los operadores controla el orden en el que las operaciones son realizadas. Operaciones con mayor precedencia son realizadas antes que aquellos que tienen una menor, por ejemplo:

```js
const w = x + y * z;
```

El operador de multiplicación `*` tiene un orden de precedencia mayor que el del operador de suma `+`, por lo que la multiplicación se realiza antes que la suma. De hecho el operador `=` es el que menos precedencia tiene, asique la asignación se producirá después de que todas las operaciones a su lado derecho sean completadas.

La precedencia de los operadores puede ser sobreescrita con el uso explícito de paréntesis. Para forzar la suma a ser evaluada primero, en el anterior ejemplo, escribimos:

```js
const w = (x + y) * z;
```

El acceso a propiedades o las invocaciones tienen mayor precedencia que cualquier operador de la tabla:

```js
/*
  mis es un objeto con una propiedad llamada funciones cuyo valor es un array de funciones.
  Invocamos la funcion de numero x, pasandole un argumento y, luego preguntamos por el tipo del valor retornado
*/
typeof mis.funciones[x](y);
```

Anque `typeof`es uno de los operadores con mayor prioridad, su operación es realizada en el resultado del acceso a la propiedad, el index del array y la invocación de la función, que tienen mayor precedencia todos que cualquier operador.

En la práctica, si no estas seguro de la precedencia de tu operador, la más simple que puedes hacer es usar paréntesis para hacer el orden de evaluación explícito. Las reglas importantes a conocer es que: la multiplicación y división son realizadas antes que la suma y la resta, y las asignaciones tienen una precedencia muy baja y en casi todos los casos son realizadas las últimas.

Cuando operadores nuevos son incluidos en JS, no siempre se ajustan a este esquema de precedencias y debemos usar de manera explícita paréntesis si se mezclan. Por ejemplo, el operador de exponenciación `**` no tiene una precedencia bien definida con el operador unario de negación `!`, y debes usar parentesis cuando combinas negación y exponenciación.

### Asociatividad de operadores

La asociatividad de un operador especifica el orden en el cual las operaciones de misma precedencia son realizadas. Una asociatividad de izquierda a derecha significa que las operaciones son realizadas en esa dirección. Por ejemplo, el operador de resta, tiene este tipo de asociatividad:

```text
const w = x - y - z;
// es lo mismo que:
const w = ((x - y) - z)
```

### Orden de evaluación

La precedencia y la asociatividad especifican el orden en el que las operaciones son realizadas en una expresión compleja, pero no especifican el orden en el cual las subexpresiones son evaluadas. JS siempre evalua las expresiones de manera estricta de izquierda a derecha. En la expresión `w = x + y * z`, la subexpresión `w` es evaluada primero, seguido de `x`, `y` y `z`. Luego los valores de `y` y `z` son multiplicados, añadidos al valor de `x` y asignados a la variable o propiedad especificada por la expresión `w`. Añadir paréntesis a las expresiones cambia el orden relativo de la multiplicación, adición y asignación, pero no el orden de evaluación de izquierda a derecha.

El orden de evaluación solo marca la diferencia si algunas de las expresiones que son evaluadas tienen efectos secundarios que afectan al valor de otra de las expresiones. Si la expresion `x` incrementase la variable que es usada por la expresión `z`, entonces el hecho de que `x` sería evaluada antes que `z` es importante.

## Expresiones aritméticas

La mayoría de operadores aritméticos pueden ser usados con operandos de tipo `BigInt` o con numeros normales, siempre que no mezclemos ambos tipos.

Los operadores aritméticos básicos son: `**` (exponenciación), `*` (multiplicación), `/` (división), `%`(módulo: el resto después de una divisón), `+` (suma o adición), `-` (resta o substracción). Quitando el caso especial del operador de suma `+`, todos los operadores evaluan sus operandos, convirtiendo los valores a nçumeros si es necesario y calculando la potencia, producto, cociente, resto o diferencia. Los operandos no numéricos que no pueden ser convertidos a números, convierten al valor `NaN`. Si cualquier operando es o convierte a `NaN`, el resultado de la operación, casi siempre, es `NaN`.

El operador `**` tiene una precedencia más alta que `*`, `/` y `%` (los cuales ya tiene mayor precedencia que `+` y `-`). A diferencia de otros operadores, `**` funciona de derecha a izquierda, por lo que `2**2**3` es lo mismo que `2**8`, no `2**4`. Existe una amigüedad natural en expresiones como `-3**2`. Dependiendo de la precedencia relativa del operador unario `-` y la exponenciación (`**`), esa expresión puede significar `(-3)**2` o `-(3**2)`. Cada lenguaje maneja esto de manera diferente, JS te lanzará un error de sintaxis si omitimos los paréntesis en este caso, obligandote a desambiguar la expresión.

`**` es el último de los operadores, añadido en ES6. La función `Math.pow()` estaba disponible desde las primeras versiones de JS, pero realiza la misma operación que el operador `**`.

El operador `/` divide su primer operando entre el segundo. En JS todos los números son de punto flotante, por lo que todas las operaciones de división tienen un resultado de punto flotante: `5/2` evalua a `2.5` no a `2`. Las divisiones por cero producen `Infinity` positivos o negativos, mientras que `0/0` evalua a `NaN`, en ningun de ambos casos se lanza un error.

El operador `%` calcula el resto después de la división del primer operando entre el segundo operando. El signo del resultado es el mismo que el del primer operando: `5 % 2` evalua a `1` y `-5 % 2` evalua a `-1.`. Aunque normalmente es usado con operandos que son enteros, tambien funciona con números reales.

### El operador +

El operador binario `+` suma operandos numéricos o concatena operandos strings.

```js
1 + 2; // => 3
"hello" + " " + "world"; // => "hello world"
"1" + "2"; // => "12"
```

Cuando los valores de ambos operandos son números, o ambos son strings, entonces es obvio lo que el operador `+` hace. Pero hay casos en los que la conversión del tipo se hace necesaria y la operación a realizar depende de la conversión realizada. las reglas de conversión para `+` dan prioridad a la concatenación de strings: si cualquier operando es un string o un objeto que convierte a string, el otro operando es convertido a string y se realiza una concatenación de los mismos. La suma solo es realizada si ninguno de los operandos son strings.

Técnicamente el operador `+` funciona así:

- Si alguno de los valores de los opreandos es un objeto, este convierte a primitivo usando el algoritmo de objeto-a-primitivo. Objetos `Date` son convertidos usando su método `toString()`, y todos los demás objetos son convertidos via `valueOf()` si dicho método retorna un valor primitivo. Como muchos objetos no tienen un método `valueOf()`, suelen ser convertidos usando `toString()` también.
- Después de la conversión a de objeto-a-primitivo, si cualquier operando es un string, el otro operando es convertido a string y se realiza la concatenación.
- De otra manera, ambos operandos son convertidos a números o `NaN` y se realiza la suma.

```js
1 + 2; // => 3: suma
"1" + "2"; // => "12": concatenación
"1" + 2; // => "12": concatenación después de convertir número-a-string
1 + {}; // => "1[object Object]": concatenacion después de convertir objeto-a-string
true + true; // => 2: suma después de convertir booleano-a-número
2 + null; // => 2: suma después de convertir null a 0
2 + undefined; // => NaN: suma tras convertir undefined a NaN
```

Es importante destacar que cuando el operador `+` es usado con strings y números, puede no ser asociativo. Esto significa que el resultado puede depender del orden en el que las operaciones son realizadas:

```js
1 + 2 + " hello world"; // => "3 hello world"
1 + (2 + " hello world"); // => "12 hello world"
```

La primera línea no tiene paréntesis y el operador `+` tiene una asociatividad de izquierda a derecha, por lo que los números son sumados primero y la suma es concatenada al string.
En la segunda línea los paréntesis alteran el orden de las operaciones: el número 2 es concatenado con el string, produciendo un nuevo string. Luego el número 1 es concatenado con el nuevo string produciendo el string final.

### Operadores aritméticos unarios

Los operadores unarios modifican el valor de un único operando para producir nun nuevo valor. En JS, todos los operadores unarios tienen una alta precedencia y son asociativos de derecha a izquierda. Los siguientes operadores aritméticos unarios (`+`, `-`, `++` y `--`) convierten su único operando a un número si es necesario. Destacar que los caracteres `+` y `-` pueden usarse de operadores unarios o binarios.

- _Unario más (`+`)_: El operador unario más convierte su operando a un número o `NaN`y retorna el valor convertido. Cuando es usado con un operando que ya es un número, este no hace nada, por ejemplo: `+3`. Este operador no puede ser usado con valores de tipo `BigInt` dado que estos no convierten a números regulares.
- _Unario menos (`-`)_: Cuando `-` es usado como operador unario, este convierte su operando a un número si es necesario y después cambia el signo del resultado.
- _Incremento (`++`)_: El operador `++` incrementa su operando, por ejemplo añade 1, el cual debe ser una variable, un elemento de un array o la propiedad de un objeto.
  El operador convierte su operando a número, añade 1 al número y asigna el valor incrementado de vuelta a la variable, elemento o propiedad.
  El valor retornado por el operador `++` depende de su posición relativa en el operando.

  - Cuando es usado antes del operando, conocido como operador preincremental, entonces incrementa el operando y devuelve el valor incrementado del operando.
  - Cuando es usado después del operando, es conocido como operador postincremental, entocnes incrementa el operando pero devuelve el valor antes del incremento del operando:

    ```js
    const i = 1;
    const j = ++i; // i y j tienen un valor de 2 ambos

    const n = 1;
    const m = n++; // n vale 2 y m vale 1
    ```

  Destacar que la expresión `x++` no significa siempre lo mismo que `x = x + 1`. El operador `++` nunca realiza concatenación de strings: siempre convierte su operando a un número y lo incrementa. Si `x` es el string `"1"`, `++x` es el número `2`, pero `x+1` es el string `"11"`.

  También destacar que como JS inserta de manera automática un semicolon, no vas a poder insertar un salto de línea despues del operador de incremento y el operando que le precede. Si lo haces, JS tratará el operando como un estamento nuevo e insertará un semicolon antes de él.

  Tanto la forma pre, como la post incremental, son muy usadas para incrementar el contador que con controla un loop `for`.

- _Decremento (`--`)_: El operador `--` expera un valor que sea una variable, un elemento de un array o una propiedad de un objeto. Convierte el valor del operando a número, resta 1, y asigna el valor decrementado al operando. Al igual que el operador `++`, el valor retornado por `--` depende de su posición relativa en el operando. Cuando es usado antes del operando, decrementa el valor y lo retorna. Cuando es usado depués del operando, decrementa el valor y devuelve el valor antes del decremento. Tampoco permite saltos de línea entre el operando y su operador.

### Operadores Bitwise

TODO: POR IMPLEMENTAR

## Expresiones relacionales

TODO: POR IMPLEMENTAR

### Operadores de igualdad e inegualdad

TODO: POR IMPLEMENTAR

#### Igualdad estricta

TODO: POR IMPLEMENTAR

#### Igualdad con conversión de tipo (no estricta)

TODO: POR IMPLEMENTAR

### Operadores de comparación

TODO: POR IMPLEMENTAR

### Operador: in

TODO: POR IMPLEMENTAR

### Operador: instanceof

TODO: POR IMPLEMENTAR

## Expresiones lógicas

TODO: POR IMPLEMENTAR

### AND (&&)

TODO: POR IMPLEMENTAR

### OR (||)

TODO: POR IMPLEMENTAR

### NOT (!)

TODO: POR IMPLEMENTAR

## Expresiones de asignación

TODO: POR IMPLEMENTAR

### Asginación con operación

TODO: POR IMPLEMENTAR

## Expresiones de evaluación

TODO: POR IMPLEMENTAR

### eval()

TODO: POR IMPLEMENTAR

### global eval()

TODO: POR IMPLEMENTAR

### strict eval()

TODO: POR IMPLEMENTAR

## Otros operadores

TODO: POR IMPLEMENTAR

### Operador condicional (?:)

TODO: POR IMPLEMENTAR

### Operador primero definido (??)

TODO: POR IMPLEMENTAR

### Operador typeof

TODO: POR IMPLEMENTAR

### Operador delete

TODO: POR IMPLEMENTAR

### Operador void

TODO: POR IMPLEMENTAR

### Operador de coma (,)

TODO: POR IMPLEMENTAR

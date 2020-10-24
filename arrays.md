# Arrays

Unos de los tipos de datos fundamentales en JS y en otros lenguajes de programación es el array. Un array es una **colección ordenada de valores**. Cada valor es llamado elemento, y cada elemento tiene una posición numerica en el array, conocido como index. Los arrays en JS carecen de tipo: un elemento de un array puede ser de cualquier tipo, y un array puede estar compuesto de elementos de diferentes tipos. Los elementos de un array pueden ser objetos u otros arrays, lo cual nos permite crear estructuras de datos complejas, como arrays de objetos o arrays de arrays. Los arrays en JS son en base cero y usan index de 32-bits: el index del primero elemento es 0 y el mas alto posible 4294967294(2<sup>32</sup>-2), para un tamaño maximo de 4.294.967.296 elementos. Los arrays de JS son dinamicos: pueden crecer o decrecer segun se necesite, no es necesario declarar el tamaño de un array cuando lo creamos ni redistribuirlos cuando el tamaño cambia. Los arrays de JS pueden ser dispersos, los elementos no tienen porque tener index contiguos, y puede haber gaps. Cada array de JS tiene una propiedad longitud. Para los arrays sin gaps, estos especifican el numero de elementos en el array. Para los arrays con gaps especifica el index del elemento más alto.

En realidad los arrays son una forma especializada de los objetos JS, los index no son mas que nombres de propiedades que resultan ser enteros. Pero estan algo optimizados para que el acceso numerico por index sea mas rapido que el acceso a las propiedades de un objeto fundamental de JS.

Los arrays tienen una serie de metodos de manipulación, en su mayoria genericos que funcionan bien para arrays y para objetos que se comportan como arrays.

ES6 introdujo un nuevo conjunto de arrays conocidos como arrays tipados. A diferencia de los arrays comunes en JS. estos tienen una longitud determinada y un tipo numerico fijo. Dan un alto rendimiento y acceso binario a sus datos.

## Creando arrays

Hay varias maneras de crear un array:

- Con el literal de array
- El operador spread `...`
- El constructor `Array()`
- Los métodos de factoria `Array.of()` y `Array.from()`

### Literales de arrays

El método más simple para crear un array es con su literal, el cual es una lista de elementos separados por coma y encerrados entre corchetes `[]`.

```js
const empty = []; // un array vacio
const primes = [2, 3, 5, 7, 11]; // un array de 5 elementos numericos
const misc = [1.2, true, "foo"]; // un array de 3 elementos de tipos mixtos
```

Los valores en un array no tienen que ser literales de tipos constantes, pueden ser expresiones:

```js
const base = 1024;
const table = [base, base + 1, base + 2, base + 3];
```

Un array puede contener literales de objetos o de otros arrays:

```js
const arr = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }],
];
```

Si un array, contiene multiples comas en una fila sin valores enmedio, el array es disperso. Los elementos cuyos valores son omitidos no existe, pero aparecen como `undefined` cuando se los consulta:

```js
const count = [1, , 3]; // index 0 y 2 declarados, pero no hay elemento en el 1
const undef = [, ,]; // un array sin elementos pero de longitud 2
```

### Spread operator

En ES6, podemos usar el operador de spread `...` para incluir los elementos de un array en el literal de otro:

```js
const a = [1, 2, 3];
const b = [0, ...a, 4]; // b === [0,1,2,3,4]
```

Los tres puntitos, extienden (spread) el array anterior de tal manera que sus elementos forman parte del que se ha creado. Es como su los tres puntos reemplazaran los elementos del array a, listandolos como si fueran parte del siguiente array.

Tambien nos vale para realizar copias parciales de un array:

```js
const original = [1, 2, 3];
const copy = [...original];

copy[0] = [0]; // modificar la copia no cambia el original
original[0]; // 1
```

El spread operator funciona perfectamente en cualquier objeto iterable. Como los strings son iterables, podemos usarlo para volver un string en un array en el que cada elemento es un caracter.

```js
const digits = [..."01234ABCDE"];
digits; // ["0","1","2","3","4","A","B","C","D","E"]
```

Los objetos `Set` son iterables y una manera facil de eliminar elementos duplicados de un array, lo unico que tenemos que hacer es convertir el array a un `Set` y luego inmediatamente volver a convertirlo en un array usando el operador de spread.

```js
const letters = [..."hello world"];
[...new Set(letters)]; // => ["h","e","l","o"," ","w","r","d"]
```

### Constructor Array()

TODO: Implementar

### Metodo Array.of()

TODO: Implementar

### Metodo Array.from()

TODO: Implementar

## Lectura y escritura de elementos del array

Puedes accesde a un elemento de un array usando el operador `[]`. El array al que se desea acceder debe aparecer a la izquierda de los corchetes. Dentro de los corchetes debemos especificar cualquier expresión que no tenga un valor de entero negativo. Podemos usar esta sintaxis tanto para escribir como para leer elementos de un array.

```js
const arr  = ["world"];
const value = a[0] // leyendo el primer elemento y asignandolo a una variable
const arr[1] = 3.14 // escribiendo el segundo elemento

let i = 2;
a[i] = 3; // escribiendo el tercer elemento
a[i + 1] = "hello" // escribiendo el cuarto elemento
a[a[i]] = a[0] // lee los elementos 0 y 2 y escribe el elmento 3
```

Una caracteristica de los arrays es que cuando usamos nombres de propiedades que nos son enteros negativos, menores que 2<sup>32</sup>-1, el array mantiene el valor de su propiedad `length` por nosotros. En el anterior ejemplo hemos asignado valores en los index 1,2 y 3. La propiedad `length` ha cambiado segun lo hacemos:

```js
arr.length; // => 4
```

Recuerda que los arrays son una forma especializada de los objetos. La notación por corchetes para acceder a los elementos de un array funciona igual que los corchetes usados para acceder a las propiedades de un objeto. JS convierte el index numerico especificado a un string, el index 1 viene a ser el string "1", luego usa ese string como nombre de la propiedad. No hay nada especial sobre la conversion de un index de numero a string, lo podemos hacer con objetos fundamentales tambien:

```js
const arrObj = {};
o[1] = "one";
o["1"]; // => one
```

Sirve de ayuda distinguir claramente el index de un array del nombre de la propiedad de un objeto. Todos los index son nombres de propiedad, pero solo nombres de propiedad que son enteros entre 0 y 2<sup>32</sup>-2 son index. Todos los arrays son objetos y puedes crear propiedades de cualquier nombre en ellos. Si usas propiedades que son index de array, entonces, el array tendra el comportamiento especial de actualizar su propuedad length cuando lo necesita.

Podemos usar index en el array usando numeros negativos o incluso no enteros. Cuando lo hacemos, el numero es convertido a string y usado como nombre de una propiedad. Si el no es un entero negativo, entonces es tratado como una propiedad mas del objeto no como un index. Incluso si crear un index de array con un string que resulta no ser un numero entero negativo, entonces se comportara como un index más no como una propiedad del objeto. Lo mismo ocurre si usamo un numero flotante que sea igual que un entero:

```js
a[-1.23] = true; // crea la propiedad "-1.23"
a["1000"] = 0; // El elemento 1000 del array
a[1.0] = 1; // El index 1, igual que si a[1] = 1
```

El hecho de que los index de array no sean mas que una forma especializada de las propiedades de un objeto significa que los arrays de JS no tienen una clase de error "fuera de los limites". Cuando intentas obtener una propiedad que no existe en un objeto no obtienes un error, solo `undefined`. Lo mismo ocurre para los arrays que para los objetos.

```js
const a = [true, false];
a[2]; // => undefined
a[-1]; // => undefined
```

## Arrays dispersos

TODO: IMPLEMENTAR

## Array.length

Cada array tiene una propiedad `length`y esta propiedad es la que hace a los arrays diferir de los objetos regulares de JS. Para arrays densos, aquellos que no son dispersos, la propiedad `length` especifica el numero de elementos dentro del array. Su valor es 1 más que el más alto de los index dentro del array.

```js
[].length[(1, 2, 3)].length; // => 0 // => 3: el index mas alto es 2, length 3
```

Cuando un array es disperso, la propiedad `length`es mayor que el numero de elementos, lo cual nos garantiza que el `length` siempre es mayor que el index de cualquier elemento en el array. Dicho de otra manera, un array disperso o no, nunca tendrá un index mayor o igual a su `length`. Para mantener este invariante, los arrays tienen 2 comportamientos especiales.

- Si asignamos un valor a un elemento del array cuyo index i es mayor o igual que el `length` actual, el valor del `length` es establecido como i+1.
- Si establecemos la propiedad `length` como un entero negativo n menor que su actual valor, cualquier elemento del array cuyo index es mayor o igual que n, es borrado del array.

```js
a = [1, 2, 3, 4, 5];
a.length = 3; // a ahora es [1,2,3]
a.length = 0; // a ahora es []
a.length = 5; // a ahora tiene un length de 5, pero sin elementos
```

Tambien podemos establecer el length como mayor a su valor actual, esto no añade elementos al array simplemente crea un area disperas al final del mismo.

## Añadiendo y eliminando elementos

Aparte de asignar añadir elementos asignando valores a nuevos index, podemos utilizar algunos metodos. El metodo `push()`añade uno o mas valores al final del array:

```js
const a = [];
a.push(0); // añade el valor 0 al final del array
a.push(1, 2); // añade los valores 1, 2 al final del array
a; // => [0,1,2]
```

Añadir un valor al array es lo mismo que asignar el valor a `a[a.length]`. Podemos usar tambien el metodo `unshift()` para insertar un valor al inicio del array. Cambiando los elementos del array a index más altos.
El método `pop()` el el opuesto a `push()`: elimina el ultimo elemento del array y lo retorna, reduciendo su `length` en 1. De manera similar el metodo `shift()` elimina y retorna el primer elemento del array, reduciendo su `length` en 1 y cambiando los index de los elementos a 1 por debajo de sua actual index.

Podemos eliminar elementos de un array con el operador `delete`:

```js
const a = [1, 2, 3];
delete a[2]; // elimina el index 2
2 in a; // => false: no hay un index 2 especificado
a.length; // => 3: delete no afecta al length del array
```

Usar este operador es similar a asignar `undefined` a dicho elemento. Recuerda que no altera la propiedad `lenght` ni cambia los index de los elementos, para rellenar el hueco que ha dejado la propiedad eliminada. Si borras un elemento del array con dicho operador, este se convierte en un array disperso.

Como hemos visto, la otra manera de eliminar elementos del funal de un array es simplemente establecer la propiedad `length` del array al valor deseado.

Por último el metodo `splice()`es el metodo de proposito general para insertar, borrar o reemplazar los elementos de un array. Altera su `length` y cambia los valores de los index a un orden superior o inferior segun se necesite.

## Iterando arrays

El modo más semcillo de iterar sobre los elementos de un array (o cualquier objeto iterable) es el loop `for/of`.

```js
const letters = ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
let string = "";

for (let letter of letters) {
  string += letter;
}

letter; // "Hello world"; recomponemos el texto original
```

El iterador `for/of` nos va a recorrer el array en orden de index ascendente. No tiene otro comportamiento especial para los arrays dispersos y simplemente retorna `undefined` en aquellos elementos que no existen.

Si queremos usar un `for/of` en un array y necesitamos conocer el índice de cada elemento del array, podemos usar el método `entries()` del array, junto a la desestructuración:

```js
for (let [index, letter] of letters.entries()) {
  // {...}
}
```

Otra manera de iterar un array es con el método `forEach()`. Este es un método de los arrays que ofrece una aproximación funcional a la iteración de los mismos. Podemos pasar una función a `forEach()` y este invocará nuestra función una vez en cada elemento del array:

```js
let sum = 0;
[1, 2, 3, 4, 5].forEach((n) => (sum += n));
```

`forEach()` itera el array en orden y pasa el elemento como primer argumento a nuestra función y el index como segundo elemento a nuestra función, lo cual puede ser útil. A diferencia de `for/of`, este método, no invoca tu función sobre elementos que no existen como los de los arrays dispersos.

Por supuesto es posible iterar un array en JS con un loop `for` tradicional:

```js
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  // {...}
}
```

En loops anidados o contextos donde el rendimiento es crítico, es clásico utilizar este tipo de arrays que sólo consultan la longitud del mismo una sola vez, pero no está claro que en intérpretes modernos de JS tenga un impacto significativo sobre el rendimiento.

## Arrays multidimensionales

TODO: IMPLEMENTAR

## Métodos de array

### Métodos de iteración en arrays

Los siguientes métodos, son métodos que ofrecen los objetos array, iteran sobre el arrary aceptando una función que debemos programar y permiten mapear, filtrar, testear o reducir arrays.

La función que entregamos, es invocada cada vez sobre cada elemento del array o sobre algunos de ellos. Si el array es disperso, esta función no se invoca sobre elementos que no existen. La función, en la mayoría de casos es invocada con 3 argumentos: el valor del elemento en el array, su index, y el array en si mismo. Ninguno de los siguientes métodos modifican el array.

#### forEach()

El método `forEach()` itera a través del array, invocando una función especificada para cada elemento. Esta función es el primer argumento de `forEach()`. `forEach()` invoca la función con tres argumentos: el valor del elemento en el array, su index, y el array en si mismo. Si sólo necesitamos el valor del elemento del array, podemos escribir nuestra función con un único parámetro, y el resto serán ignorados:

```js
let sum = 0;
const data = [1, 2, 3, 4, 5];

data.forEach((value) => (sum += value)); // suma el valor de cada elemento del array en sum

// Incrementando el valor de cada elemento
data.forEach((value, index, array) => (array[i] = v + 1));
```

`forEach` no provee ninguna manera de terminar la iteración antes de que todos los elementos hayan terminado de pasar por nuestra función. Es decir, no hay equivalente a `break` como en los `for`.

#### map()

El método `map()` pasa cada elemento del array en el que es invocado a la funcion que especificamos y retorna un nuevo array conteniendo los valores retornados por tu función:

```js
const a = [1, 2, 3];
const mapped = a.map((value) => value * value);

mapped; // => [1,4,9]: la funcion toma el value y retorna value*value
```

La función que proveemos a `map()` es invocada de la misma manera que la función pasada a `forEach()`. Pero para `map()`, la función que pasamos debe retornar un valor, a diferencia de `forEach()`. `map()` siempre returna un nuevo array: no modifica el array original sobre el que lo invocamos. Si el array es disperso, la función no es llamada sobre los elementos no existentes, pero el array retornado estará disperso de la misma manera que el original: tendrá el mismo length y los mismos elementos no existentes.

#### filter()

El método `filter()` retorna un array conteniendo un subconjunto de elementos del array original sobre el que lo invocamos. La función que le proveemos al método `filter()` debe ser un predicado: retorna `true` o `false`. El predicado es invocado igual que `forEach()` o `map()`, sobre cada elemento del array. Si el valor de retorno es `true` o convierte a `true` entonces ese elemento pasa el predicado y se convierte en miembro del subset, siendo añadido al array que nos retornará `filter()`.

```js
const a = [5, 4, 3, 2, 1];
a.filter((value) => value < 3); // => [2,1]: filtra valores inferiores a 3
a.filter((value) => value % 2 === 0); // => [2,4]: filtra valores pares
```

`filter()` salta los elementos de un array disperso que no existen y siempre retorna un array denso. Si queremos filtrar los gaps en un array disperso podemos hacer:

```js
const dense = sparseArr.filter((x) => x != null);
```

#### find() y findIndex()

`find() y findIndex()` son métodos que como `filter()` iteran sobre el array buscando aquellos elementos que cumplen el predicado de nuestra función. Pero a diferencia de `filter()`, estos dos metodos paran de iterar en el primer momento que encuentran un elemento que cumple el predicado. Cuando esto ocurre `find()` retorna el elemento que cumple el predicado, y `findIndex()` retorna el index de dicho elemento. Si no se encuentra ningun elemento que cumpla el predicado `find()` retorna `undefined` y `findIndex()` retorna `-1`:

```js
const a = [1, 2, 3, 4, 5];
a.findIndex((value) => value === 3); // => 2; el valor 3 aparece en el index 2
a.findIndex((value) => value < 0); // => -1; no tenemos números negativos en el array
a.find((value) => value % 5 === 0); // 5: es el primer mútiplo de 5
a.find((value) => value % 7 === 0); // undefined: no hay múltiplos de 7 en el array
```

#### every() y some()

TODO: Implementar

#### reduce() y reduceRight()

Los métodos `reduce()` y `reduceRight()` combinan los elementos de un array, usando la función que pasamos, para producir un único valor. Es una operación muy común en programación funcional y recibe también los nombres de "inject" o "fold".

```js
const a = [1, 2, 3, 4, 5];

a.reduce((acc, value) => value + acc, 0); // 15: suma de valores
a.reduce((acc, value) => value * acc, 1); // 120: producto de valores
a.reduce((acc, value) => (value > acc ? value : acc)); // 120: producto de valores
```

`reduce()` toma dos argumentos. El primero es la función que realiza la operación de reducción. La tarea de dicha función es combinar de alguna manera o reducer dos valores en uno sólo y retornar dicho valor reducido. En los ejemplos, la función combina dos valores sumándolos, multiplicandolos o eligiendo el más largo. El segundo argumento, opcional, es el valor inicial que se le pasa a la función.

Las funciones que pasamos a `reduce()` son diferentes que las funciones usadas con `forEach()` y `map()`. Los valores, index y el array en sí mismo son el segundo, tercero y cuarto argumento que nuestra función de reducción recibirá. El primer argumento es el resultado acumulado de la reducción en cada iteración. En la primera llamada a la función, el primer argumento es el valor inicial que hemos pasado como segundo argumento a `reduce()`. En llamadas subsecuentes, este valor es el retornado por la invocación previa de la función reductora.

En el primer ejemplo, la función de reducción es llamada con los argumentos `0` y `1`. Los suma y retorna `1`. Después es llamada de nuevo con los argumentos `1` y `2` retornando `3`. Luego calcula `3+3=6`, luego `6+4=10` y finalmente `10+5=15`. El valor final, `15` se convierte en el valor que retorna `reduce()`.

Si nos fijamos en el tercer ejemplo, solo hay un argumento pasado a `reduce()`, no hay valor inicail. Cuando invocamos `reduce()` de esta forma, usa el primer elemento del array como valor inicial. Esto significa que la primera llamada a tu función de reducción, tendrá el primer y segundo elementos del array como primer y segundo argumentos. En los dos primero ejemplos, podríamos haber omitido el valor inicial.

TODO: Implementar reduceRight()

### Aplanando arrays con flat() y flatMap()

TODO: Implementar

### Añadiendo arrays con concat()

TODO: Implementar

### Stacks y colas con push(), pop(), shift() y unshift()

Los métodos `push()` y `pop()` nos permiten trabajar con arrays como si fueran stacks. El método `push()` añade uno o más elementos al final del array y retorna el length del array. A diferencia de `concat()` no aplana aquellos argumentos que son arrays. El método `pop()` hace el contrario: elimina el último elemento del array, decrementando el length y retorna el elemento eliminado. Ambos métodos modifican el array. Estos métodos permiten usar los arrays de JS como un stack (first-in, last-out):

```js
const stack = [];
stack.push(1, 2); // [1,2]
stack.pop(); // [1] retorna 2
```

TODO: implementar con spread operator

Los métodos `unshift()` y `shift()` se comportan parecido a los métodos `push()` y `pop()`, excepto que insertan y eliminan elementos del inicio del array en vez del final.

`unshift()` añade elementos al inicio del array y `shift()` elimina y retorna el primer elemento del array.

TODO: AMPLIAR

### Subarrays con slice(), splice(), fill() y copyWithin()

TODO: Implementar

### Métodos de búsqueda y ordenado de arrays

TODO: Implementar

#### indexOf() y lastIndexOf()

TODO: Implementar

#### includes()

El método `includes()`, introducido en ES2016, toma un único argumento y retorna `true` si el array contiene el valor o `false` de otra manera. No te dice el index del valor, solo si existe. El método `includes()` es parte de los métodos set de testing de arrays.

TODO: Ampliar

```js
const a = [1, true, "foo"];
a.includes(true); // true
a.includes("bar"); // false
```

#### sort()

`sort()` ordena los elementos de un array y retorna el array ordenado. Cuando `sort()` es llamado sin argumentos, ordena los elementos en orden alfabético (convirtiendo a string aquellos que no lo son para la comparación):

```js
const a = ["banana", "cherry", "apple"];
a.sort(); // => ["apple", "banana", "cherry"]
```

Si un array contiene elementos `undefined`, son ordenados al final del array.

Para ordenar un array de otra manera que alfabéticamente, debemos pasar una función de comparación como primer argumento de `sort()`.
Esta función decidirá cual de sus dos argumentos debe aparecer primero en el array ordenado. Si el primer argumento debe aparecer antes que el segundo, la función de comparación debe retornar un número inferior a cero. Si el primer argumento debe aparecer después del segundo en el array ordenado, la función de comparación debe retornar un número mayor que cero. Si los dos valores son equivalentes (su orden es irrelevante), la función de comparación debe retornar cero. Por ejemolo, para ordenar elementos de un array de manera numérica en vez de alfabética:

```js
const arr = [33, 4, 1111, 222];

arr.sort((a, b) => a - b); // => [4,33,222,1111]
arr.sort((a, b) => b - a); // => [1111,222,33,44]
```

TODO: Ampliar

#### reverse()

El método `reverse()` da la vuelta al orden de un array y retorna el array dado la vuelta. No crea un nuevo array, sino que modifica el original.

```js
const arr = [1, 2, 3];
a.reverse(); // => [3,2,1]
```

### Conversión de arrays a string

TODO: Implementar

### Funciones staticas de array

TODO: Implementar

## Arrays como objetos

TODO: Implementar

## Strings como arrays

TODO: Implementar

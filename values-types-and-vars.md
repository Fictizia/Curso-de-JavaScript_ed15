# Tipos, valores y variables

El software, sea del lenguaje que sea, funciona manipulando valores. La clase de valores que podemos manipular con un lenguaje de programación son conocidos como tipos, y son una de las características fundamentales del mismo, los tipos que soporta. Cuando necesitamos retener la manipulación de un tipo, su valor, para un uso futuro en la ejecución, lo asignamos a una variable. Las variables tienen nombres a los que nos podemos referir para obtener sus valores. La forma en que cada lenguaje trabaja con sus variables es diferente, aunque comparten características comunes.

## Descripción general

Los tipos de JS pueden ser divididos en dos categorías: tipos primitivos y tipos objetos.
Los tipos primitivos incluyen los numeros, strings y valores booleanos. Los valores como `null` y `undefined`, que son especiales, son considerados primitivos, pero no entran dentro de la categoría de los numeros, strings o booleanos.

ES6 incluyó un nuevo tipo, de caracter especial, conocido como `Symbol`. El cual nos permite extender las definiciones de tipos sin romper retrocompatibilidad.

**Cualquier valor en JS que no sea un primitivo, es un objeto**. Un objeto, miembro del tipo `object` es una colección de propiedades, donde cada propiedad tiene un nombre y un valor, pudiendo ser esta un primitivo u otro objeto. Un objeto especial es el objeto `global`.

Un objeto JS común es una colección **desordenada** de ombres y valores. El lenguaje tambien nos define un objeto espcial, conocido como arrays, que representa una coleccion de valores **ordenados** e **indexados** y tienen comportamientos diferentes a los objetos comunes.

Además JS define algunos tipos de objetos que nos resultan utiles en la programación del dia a dia. Por ejemplo:

- `Set`: un conjunto de valores.
- `Map`: un mapa de claves y valores
- Algunos arrays tipados, para trabajar con datos binarios.
- `RegExp`: que permite representar patrones de texto y realizar complejas operaciones de coincidencia o busqueda de strings.
- `Date`: que representa fechas y momentos para realizar operaciones con las mismas.
- `Error`: tiene subtipos y nos permite representar errores que pueden lanzarse en tiempo de ejecución del código.

JS se diferencia de otros lenguajes en el sentido de que sus funciones y clases no son parte de la syntaxis propia del lenguaje, en si mismos son valores que pueden ser manipulados por JS. Las funciones y clases son una forma especializada de los objetos.

Por otra parte JS implementa un recolector de basura para el mantenimiento de la memoria. Con lo cual no necesitamos preocuparnos de liberar espacio en la misma de valores y objetos que hayamos introducido. Cuando un valor ya no es alcanzable por el código, el interprete reclama el espacio del mismo y lo libera de la memoria.

_Nota: Lo cual significa que debemos evitar en la medida de lo posible que nuestros valores sean alcanzables por olvido (globales)_

JS soporta el estilo de programación orientada a objetos. En resumidas, esto significa que en vez de definir funciones que operan sobre los valores de los distintos tipos, podemos definir tipos en si mismos que contienen metodos para trabajar con los valores. De hecho JS implementa algunos métodos en sus propios objetos.

```js
const array = [3, 5, 1];
arr.sort(); // => [1,3,5] sort es un metodo que podemos invocar sobre los objetos array
```

Técinicamente en JS, solo los objetos tienen metodos, pero los valores de primitivos y simbolos se comportan como si los tuvieran. Solo los valores de `null` y `undefined` carecen de metodos.

Los tipos de objetos son mutables en JS y sus primitivos inmutables. Un valor de tipo mutable puede cambiar, pero un primitivo no (tampoco tendria sentido). **Los strings son arrays de caracteres** pero de caracter inmutable, puedes acceder a cada caracter, pero JS no te va a dar ninguna manera de alterar el texto de un string existente.

JS de manera deliberada convierte los valores de un tipo a otro. Si un programa espera un string pero le das un numero, automaticamente se convierte el numero en string. Lo mismo ocurre con los booleanos. Las reglas que siguen a su conversión afectan a su definicion de igualdad y el operador de igualdad `===` realiza conversiones de tipo.

Las constante y variables nos permiten usar nombres con los que referirnos a los valores en nuestros programas. Las constantes las declararemos con `const` y las variables con `let`. Tanto unas como otras carecen de tipo, es decir JS no especifica que tipos de valores han sido asignados a las mismas.

## Numeros

El tipo numerico de JS es `Number`, usado para representar enteros y **aproximar** numeros reales. JS los representa usando una coma flotante de 64-bits. Tecnicamente eso significa que podemos representar numeros tan largo como ±1.7976931348623157 x 10<sup>308</sup> y tan pequeños como ±5 x 10 <sup>-324</sup>.

Exactamente enteros entre: −9.007.199.254.740.992(−2<sup>53</sup>) y 9.007.199.254.740.992(2<sup>53</sup>), incluidos ambos.
Por encima de esas longitudes, perdemos precisión.

Cuando un numero aparece directamente en un programa de JS, es llamado literal numerico. JS soporta literales numericos de varios formatos y puede ser precedido del signo `-` para representar sus negativos.

### Literales de numeros enteros

En JS, un entero en base 10 es escrito con una secuencia de digitos:

```js
0;
3;
400000;
```

Ademas JS reconoce los valores en base-16, hexadecimales. Un hexadecimal empieza con `0x` o `0X` seguido de un string de digitos hexadecimales. Sus digitos van de 0 hasta 9 o de la letra `a` o `A` hasta `f`o `F` que representa valores del 10 al 15:

```js
0xff; // => 255: (15 * 16 + 15)
0xbadcafe; // => 195939070
```

En ES6 ademas se pueden expresar enteros binarios u octales (base-2 o base-8) usando los prefijos `0b` y `0o`:

```js
0b10101; // => 21
0o377; // 255
```

### Literales de numeros reales

Los literales de numeros reales, pueden tener un punto decimal. Un valor real es representado por la parte integral de un numero seguido de un punto decimal y su parte fraccional.

Los literales de numeros reales pueden ser representados con la notacion exponencial, un numero real seguido de la letra `e` o `E`, seguido de un signo opcional de `+` o `-` y la parte entera del exponente. Esta notacion representa el numero real multiplicado por 10 y exponenciado.

Sintaxis:

`[digits][.digits][(E|e)[(+|-)]digits]

Por ejemplo:

```js
3.14;
23.6789;
0.3333;
6.02e23; // 6.02 x 10²³
```

A finales de este año 2020 podremos usar el signo `_` para con los literales numericos para separar en trozos los numeros largos y hacerlos mas legibles:

```js
const milMillones = 1_000_000_000;
const unaFraccion = 0.12_457_789;
```

### Aritmetica en JavaScript

JS trabaja con los numeros usando operadores aritmeticos. Estos incluyen:

- `+`: adicion
- `-`: resta
- `*`: multiplicación
- `/`: división
- `%`: modulo (resto de una division)
- `**`: exponenciacion

Ademas JS nos provee una serie de funciones y constantes para realizar arimetica avanzada, con el objeto `Math`:

```js
Math.pow(2, 53); // => 9007199254740992: 2 exponenciado a 53
Math.round(0.6); // => 1.0: redondeo al mas cercano
Math.ceil(0.6); // => 1.0: redondeo hacia arriba
Math.floor(0.6); // => 0.0: redondeo hacia abajo
Math.abs(5); // => 5: valor absoluto
Math.max(x, y, z); // Retorna el argumento mas largo
Math.min(x, y, z); // Retorna el argumento mas pequeño
Math.random(); // Devuelve un numero pseudorandomizado x donde 0 <= x < 1.0
Math.PI; // π: Circunferencia de un circulo / diametro
Math.E; // e: La base de logaritmo natural
Math.sqrt(3); // Raiz cuadrada de 3
Math.pow(3, 1 / 3); // Raiz cubica de 3
Math.sin(0); // Trigonometria: Tambien tenemos disponibles el Math.cos, Math.atan, etc.
Math.log(10); // Logaritmo de 10
// [... etc]
```

_Nota_: más referencias en https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math

Es importante destacar que la aritmetica en JS no lanza errores en caso de desbordamiento, subdesbordamiento o division por cero. Cuando esto ocurre, JS representa el numero con un valor especial conocido como `Infinity`. Como es de esperar cualquier operacion sobre `Infinity` dará como resultado un valor `Infinity` positivo o con el signo inverso ;D.

Solo hay algunos casos excepcionales, `0/0` o `Infinity/Infinity` no tienen una representacion definida, por lo que JS retornara un valor especial llamado `not-a-number`, `NaN`.

`NaN` tambien aparecerá si intentamos dividir numeros entre letras que no pueden ser convertidas a numeros o usamos raizes negativas.

Algunos metodos y constantes que implementa JS en los valores asociados al tipo `Number` son:

```js
Number.parseInt("1"); // Convierte un string numerico a tipo Number
Number.parseFloat("2.0"); // Convierte un string numerico a tipo Number
Number.isNaN(x); // Es x un valor NaN?
Number.isFinite(x); // Es x un numero finito?
Number.isFinite(x); // Es x un numero finito?
Number.isInteger(x); // Es x un numero entero?
Number.isSafeInteger(x); // Es x un numero entero entre los valores maximos y minimos a representar?
Number.MIN_SAFE_INTEGER; // => -(2**53-1)
Number.MAX_SAFE_INTEGER; // => 2**53-1
```

El valor `NaN` ademas no puede ser comparado con otro valor, nisiquiera consigo mismo. Lo siguiente no funcionaría:

```js
x === NaN;
```

Es mejor siempre usar:

```js
Number.isNaN(x);
```

que retornara `true` si el numero es `NaN` o un valor que no puede ser convertido a un tipo numerico.

### Errores en la precisión de la coma flotante de JS

Existen infinitos numeros reales, solo un numero finito de ellos pueden representarse en JS, concretamente 18.437.736.874.454.810.627. Esto significa que **al trabajar con numeros en JS algunos tienen una representacion aproximada**.

Aunque JS tiene una precision buena y puede aproximarse a 0.1 bastante, hay veces en calculos extremos como los financieros que esto puede dar problemas, ya que la aproximacion exacta a 0.1 no puede ser alcanzada, por ejemplo:

```js
const x = 0.3 - 0.2;
const y = 0.3 - 0.2;

x === y; // false
x === 0.1; // false
y === 0.1; // true
```

Esto es debido a errores en el redondeo de su aproximación, por ello la diferencia en el ejemplo anterior. Pero este problema no es exclusivo de JS y afecta a muchos otros lenguajes. Aunque en la mayoria de calculos diarios no hace falta dicha precisión, si necesitas hacerlos te recomiendo usar enteros escalados, por ejemplo: para valores de dinero usa centimos como enteros en vez de fracciones.

_Consulta:_ https://en.wikipedia.org/wiki/Scale_factor_(computer_science)

## Fechas

JS define un objeto `Date` muy simple para la representacion y tratamiento de numeros que representan fechas y momentos. En concreto **la representación numerica como `timestamp` especifica el numero de milisegundos transcurridos desde el 1 de Enero de 1970**

```js
const timestamp = Date.now(); // El momento actual como timestamp
const now = new Date(); // el momento actual como objeto
const ms = now.getTime(); // timestamp a milisegundos
const iso = now.toISOString(); // conversion al string formateado
```

## Texto

El tipo de JS para representar texto es el `string`. Un string es una secuencia inmutable y ordenada de valores de 16-bit, cada uno representado como un caracter de Unicode. La longitud del string es el numero de valores en 16-bit que contiene. Los strings de JS y sus arrays, usan una indexacion en base 0, lo que significa que la primera posicion es la 0, la segunda la 1, etc.

Un string vacio tiene una longitud de 0. JS no tiene un tipo para representar un caracter, todo son strings.

Los strings en ES6 son iterables por bucles `for/of` o el operador `...`, para iterar sobre cada caracter del string, **no sobre sus bits**.

### Literales de texto

Para incluir un string en JS, simplemente lo encerramos entre un par de comillas dobles `"` o simples `'` o backtips `` ` ``.

```js
""; // string vacio
"testing";
`foo`;
```

Los strings con backtips, conocidos como `templates strings`, nos permiten interpolar texto o dividir lineas:

```js
const cow = {
  name: "cow",
  sound: "Muuu",
};

`The sound that the ${cow} makes is: ${sound}`;

`dos
lineas`;
```

En el lado del cliente de JS, el codigo JS puede contener strings de codigo HTML. Si deseamos usar un string dentro de otro, intentaremos encerrarlo en comillas dobles y dentro en simples:

```js
const str = "Says: 'yeaaah'";
```

### Escapando secuencias de literales

El caracter backslash `\` nos permite combinarlo con strings en JS, para representar caracteres que de otra forma no podriamos representar en JS, es conocido como secuencia de escape.

Por ejemplo:

```js
"Hola\n"; // \n escapa una nueva linea
"Puedo escapar \"Otras comillas dobles\".";

```

### Trabajando con strings

Una de las características de JS es su abilidad para concatenar strings. Si usamos el operador `+` con numeros los sumamos. Pero si lo hacemos con strings, los unimos.

```js
const msg = "Hello, " + "world!";
const userName = "Iván";
const greeting = "Welcome to my store," + " " + userName;
```

Los strings puedes ser comparados con el operador de igualdad `===` y de inegualdad `!==`. Dos strings son iguales si y solo si tienen la misma secuencia de caracteres. Tambien podemos usar los operadores `<`, `<=`, `>` y `>=`, que realizan una comparacion de los valores.

Para determinar la longitud de un string usamos la propiedad `length` del mismo:

```js
const str = "foo";
str.length; // 3
```

Ademas de la propiedad length, JS nos ofrece una API bastante buena para trabajar con ellos:

```js
const s = "Hello, world"; // empezamos con un texto

// Obteniendo posiciones
s.substring(1, 3); // => ell: 2º y 3º y 4º caraceter
s.slice(1, 4); // => ell: lo mismo
s.slice(-3); // => rld: ultimos 3 caracteres
s.split(", "); // => ["Hello", "world"]: parte por string delimitador

// Buscando un string
s.indexOf("l"); // => 2: posicion de la primera letra "l"
s.indexOf("l", 3); // => 3: posicion de la primera "l" en o despues de 3 posiciones
s.indexOf("zz"); // => -1: no existe el substring
s.lastIndexOf("l"); // => 10: posicion de la ultima "l"

// Busqueda booleana
s.startsWith("Hell"); // => true: el string empieza asi
s.endsWith("!"); // => false: el string no finaliza asi
s.includes("or"); // => true: el string incluye el substring "or"

// Creando o modificando versiones de un string
s.replace("llo", "ya"); // => Heya, world
s.toLowerCase(); // => "hello, world"
s.toUpperCase(); // => "HELLO, WORLD"

// Inspeccionando strings
s.charAt(0); // => H: el primer caracter
s.charAt(s.length - 1); // => d: el ultimo caracter

// Padding
"x".padStart(3); // => "  x": añade espacios a la izquierda hasta una longitud de 3
"x".padEnd(3); // => "x  ": añade espacios a la izquierda hasta una longitud de 3
"x".padStart(3, "*"); // => "**x": añade * a la izquierda hasta una longitud de 3
"x".padEnd(3, "-"); // => "x--": añade - a la izquierda hasta una longitud de 3

// Triming
" test ".trim(); // => "test": elimina los espacions en blanco
" test ".trimStart(); // => "test ": elimina los espacions en blanco al inicio
" test ".trimEnd(); // => " test": elimina los espacions en blanco al final
```

Recuerda que **los strings son inmutables en JS**. Metodos como `replace()` o `toUpperCase()` devuelven un nuevo string, no modifican el original. Para que lo entendamos mejor, los strings debes pensar en ellos como arrays de caracteres.

```js
const s = "hello";
s[0]; // h
s[0] = "i"; // ERROR!
```

# Tipos, valores y variables

El software, sea del lenguaje que sea, funciona manipulando valores. La clase de valores que podemos manipular con un lenguaje de programación son conocidos como tipos, y son una de las características fundamentales del mismo, los tipos que soporta. Cuando necesitamos retener la manipulación de un tipo, su valor, para un uso futuro en la ejecución, lo asignamos a una variable. Las variables tienen nombres a los que nos podemos referir para obtener sus valores. La forma en que cada lenguaje trabaja con sus variables es diferente, aunque comparten características comunes.

## Descripción general

Los tipos de JS pueden ser divididos en dos categorías: tipos primitivos y tipos objetos.

Los tipos primitivos incluyen los números, strings y valores booleanos. Los valores como `null` y `undefined`, que son especiales, son considerados primitivos, pero no entran dentro de la categoría de los números, strings o booleanos.

ES6 incluyó un nuevo tipo, de caracter especial, conocido como `Symbol`. El cual nos permite extender las definiciones de tipos sin romper retrocompatibilidad.

**Cualquier valor en JS que no sea un primitivo, es un objeto**. Un objeto, miembro del tipo `object` es una colección de propiedades, donde cada propiedad tiene un nombre y un valor, pudiendo ser esta un primitivo u otro objeto. Un objeto especial es el objeto `global`.

Un objeto JS común es una colección **desordenada** de nombres y valores. El lenguaje también nos define un objeto especial, conocido como arrays, que representa una colección de valores **ordenados** e **indexados** y tienen comportamientos diferentes a los objetos comunes.

Además JS define algunos tipos de objetos que nos resultan útiles en la programación del día a dia. Por ejemplo:

- `Set`: un conjunto de valores.
- `Map`: un mapa de claves y valores.
- Algunos arrays tipados, para trabajar con datos binarios.
- `RegExp`: que permite representar patrones de texto y realizar complejas operaciones de coincidencia o búsqueda de strings.
- `Date`: que representa fechas y momentos para realizar operaciones con las mismas.
- `Error`: tiene subtipos y nos permite representar errores que pueden lanzarse en tiempo de ejecución del código.

JS se diferencia de otros lenguajes en el sentido de que sus funciones y clases no son parte de la sintaxis propia del lenguaje, en si mismos son valores que pueden ser manipulados por JS. Las funciones y clases son una forma especializada de los objetos.

Por otra parte JS implementa un recolector de basura para el mantenimiento de la memoria. Con lo cual no necesitamos preocuparnos de liberar espacio en la misma de valores y objetos que hayamos introducido. Cuando un valor ya no es alcanzable por el código, el intérprete reclama el espacio del mismo y lo libera de la memoria.

_Nota: Lo cual significa que debemos evitar en la medida de lo posible que nuestros valores sean alcanzables por olvido (globales)_

JS soporta el estilo de programación orientada a objetos. En resumidas, esto significa que en vez de definir funciones que operan sobre los valores de los distintos tipos, podemos definir tipos en si mismos que contienen métodos para trabajar con los valores. De hecho JS implementa algunos métodos en sus propios objetos.

```js
const array = [3, 5, 1];
arr.sort(); // => [1,3,5] sort es un metodo que podemos invocar sobre los objetos array
```

Técnicamente en JS, solo los objetos tienen métodos, pero los valores de primitivos y símbolos se comportan como si los tuvieran. Solo los valores de `null` y `undefined` carecen de métodos.

Los tipos de objetos son mutables en JS y sus primitivos inmutables. Un valor de tipo mutable puede cambiar, pero un primitivo no (tampoco tendría sentido). **Los strings son arrays de caracteres** pero de caracter inmutable, puedes acceder a cada carácter, pero JS no te va a dar ninguna manera de alterar el texto de un string existente.

JS de manera deliberada convierte los valores de un tipo a otro. Si un programa espera un string pero le das un número, automáticamente se convierte el número en string. Lo mismo ocurre con los booleanos. Las reglas que siguen a su conversión afectan a su definición de igualdad y el operador de igualdad `===` realiza conversiones de tipo.

Las constante y variables nos permiten usar nombres con los que referirnos a los valores en nuestros programas. Las constantes las declararemos con `const` y las variables con `let`. Tanto unas como otras carecen de tipo, es decir JS no especifica qué tipos de valores han sido asignados a las mismas.

## Números

El tipo numerico de JS es `Number`, usado para representar enteros y **aproximar** números reales. JS los representa usando una coma flotante de 64-bits. Técnicamente eso significa que podemos representar números tan grandes como ±1.7976931348623157 x 10<sup>308</sup> y tan pequeños como ±5 x 10 <sup>-324</sup>.

Exactamente enteros entre: −9.007.199.254.740.992(−2<sup>53</sup>) y 9.007.199.254.740.992(2<sup>53</sup>), incluidos ambos.
Por encima de esas longitudes, perdemos precisión.

Cuando un número aparece directamente en un programa de JS, es llamado literal numérico. JS soporta literales numéricos de varios formatos y puede ser precedido del signo `-` para representar sus negativos.

### Literales de números enteros

En JS, un entero en base 10 es escrito con una secuencia de dígitos:

```js
0;
3;
400000;
```

Además JS reconoce los valores en base-16, hexadecimales. Un hexadecimal empieza con `0x` o `0X` seguido de un string de dígitos hexadecimales. Sus dígitos van de 0 hasta 9 o de la letra `a` o `A` hasta `f`o `F` que representa valores del 10 al 15:

```js
0xff; // => 255: (15 * 16 + 15)
0xbadcafe; // => 195939070
```

En ES6 además se pueden expresar enteros binarios u octales (base-2 o base-8) usando los prefijos `0b` y `0o`:

```js
0b10101; // => 21
0o377; // 255
```

### Literales de números reales

Los literales de números reales, pueden tener un punto decimal. Un valor real es representado por la parte integral de un número seguido de un punto decimal y su parte fraccional.

Los literales de números reales pueden ser representados con la notación exponencial, un número real seguido de la letra `e` o `E`, seguido de un signo opcional de `+` o `-` y la parte entera del exponente. Esta notación representa el número real multiplicado por 10 y exponenciado.

Sintaxis:

`[digits][.digits][(E|e)[(+|-)]digits]

Por ejemplo:

```js
3.14;
23.6789;
0.3333;
6.02e23; // 6.02 x 10²³
```

A finales de este año 2020 podremos usar el signo `_` con los literales numéricos para separar en trozos los números largos y hacerlos mas legibles:

```js
const milMillones = 1_000_000_000;
const unaFraccion = 0.12_457_789;
```

### Aritmética en JavaScript

JS trabaja con los números usando operadores aritméticos. Estos incluyen:

- `+`: adición
- `-`: resta
- `*`: multiplicación
- `/`: división
- `%`: módulo (resto de una división)
- `**`: exponenciación

Además JS nos provee una serie de funciones y constantes para realizar arimética avanzada, con el objeto `Math`:

```js
Math.pow(2, 53); // => 9007199254740992: 2 exponenciado a 53
Math.round(0.6); // => 1.0: redondeo al más cercano
Math.ceil(0.6); // => 1.0: redondeo hacia arriba
Math.floor(0.6); // => 0.0: redondeo hacia abajo
Math.abs(5); // => 5: valor absoluto
Math.max(x, y, z); // Retorna el argumento más largo
Math.min(x, y, z); // Retorna el argumento más pequeño
Math.random(); // Devuelve un número pseudorandomizado x donde 0 <= x < 1.0
Math.PI; // π: Circunferencia de un círculo / diámetro
Math.E; // e: La base de logaritmo natural
Math.sqrt(3); // Raíz cuadrada de 3
Math.pow(3, 1 / 3); // Raíz cúbica de 3
Math.sin(0); // Trigonometría: También tenemos disponibles el Math.cos, Math.atan, etc.
Math.log(10); // Logaritmo de 10
// [... etc]
```

_Nota_: más referencias en https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math

Es importante destacar que la aritmética en JS no lanza errores en caso de desbordamiento, subdesbordamiento o división por cero. Cuando esto ocurre, JS representa el número con un valor especial conocido como `Infinity`. Como es de esperar cualquier operación sobre `Infinity` dará como resultado un valor `Infinity` positivo o con el signo inverso ;D.

Solo hay algunos casos excepcionales, `0/0` o `Infinity/Infinity` no tienen una representacion definida, por lo que JS retornará un valor especial llamado `not-a-number`, `NaN`.

`NaN` también aparecerá si intentamos dividir números entre letras que no pueden ser convertidas a números o usamos raíces negativas.

Algunos métodos y constantes que implementa JS en los valores asociados al tipo `Number` son:

```js
Number.parseInt("1"); // Convierte un string numérico a tipo Number
Number.parseFloat("2.0"); // Convierte un string numérico a tipo Number
Number.isNaN(x); // Es x un valor NaN?
Number.isFinite(x); // Es x un número finito?
Number.isFinite(x); // Es x un número finito?
Number.isInteger(x); // Es x un número entero?
Number.isSafeInteger(x); // Es x un número entero entre los valores máximos y mínimos a representar?
Number.MIN_SAFE_INTEGER; // => -(2**53-1)
Number.MAX_SAFE_INTEGER; // => 2**53-1
```

El valor `NaN` además no puede ser comparado con otro valor, ni siquiera consigo mismo. Lo siguiente no funcionaría:

```js
x === NaN;
```

Es mejor siempre usar:

```js
Number.isNaN(x);
```

que retornará `true` si el número es `NaN` o un valor que no puede ser convertido a un tipo numérico.

### Errores en la precisión de la coma flotante de JS

Existen infinitos números reales, solo un número finito de ellos pueden representarse en JS, concretamente 18.437.736.874.454.810.627. Esto significa que **al trabajar con números en JS algunos tienen una representación aproximada**.

Aunque JS tiene una precisión buena y puede aproximarse a 0.1 bastante, hay veces en cálculos extremos como los financieros que esto puede dar problemas, ya que la aproximación exacta a 0.1 no puede ser alcanzada, por ejemplo:

```js
const x = 0.3 - 0.2;
const y = 0.3 - 0.2;

x === y; // false
x === 0.1; // false
y === 0.1; // true
```

Esto es debido a errores en el redondeo de su aproximación, por ello la diferencia en el ejemplo anterior. Pero este problema no es exclusivo de JS y afecta a muchos otros lenguajes. Aunque en la mayoría de cálculos diarios no hace falta dicha precisión, si necesitas hacerlos te recomiendo usar enteros escalados, por ejemplo: para valores de dinero usa céntimos como enteros en vez de fracciones.

_Consulta:_ https://en.wikipedia.org/wiki/Scale_factor_(computer_science)

## Fechas

JS define un objeto `Date` muy simple para la representación y tratamiento de números que representan fechas y momentos. En concreto **la representación numérica como `timestamp` especifica el número de milisegundos transcurridos desde el 1 de Enero de 1970**

```js
const timestamp = Date.now(); // el momento actual como timestamp
const now = new Date(); // el momento actual como objeto
const ms = now.getTime(); // timestamp a milisegundos
const iso = now.toISOString(); // conversión al string formateado
```

## Texto

El tipo de JS para representar texto es el `string`. Un string es una secuencia inmutable y ordenada de valores de 16-bit, cada uno representado como un carácter de Unicode. La longitud del string es el número de valores en 16-bit que contiene. Los strings de JS y sus arrays, usan una indexación en base 0, lo que significa que la primera posición es la 0, la segunda la 1, etc.

Un string vacío tiene una longitud de 0. JS no tiene un tipo para representar un carácter, todo son strings.

Los strings en ES6 son iterables por bucles `for/of` o el operador `...`, para iterar sobre cada carácter del string, **no sobre sus bits**.

### Literales de texto

Para incluir un string en JS, simplemente lo encerramos entre un par de comillas dobles `"` o simples `'` o backtips `` ` ``.

```js
""; // string vacío
"testing";
`foo`;
```

Los strings con backtips, conocidos como `templates strings`, nos permiten interpolar texto o dividir líneas:

```js
const cow = {
  name: "cow",
  sound: "Muuu",
};

`The sound that the ${cow} makes is: ${sound}`;

`dos
líneas`;
```

En el lado del cliente de JS, el código JS puede contener strings de código HTML. Si deseamos usar un string dentro de otro, intentaremos encerrarlo en comillas dobles y dentro en simples:

```js
const str = "Says: 'yeaaah'";
```

### Escapando secuencias de literales

El caracter backslash `\` nos permite combinarlo con strings en JS, para representar caracteres que de otra forma no podríamos representar en JS, es conocido como secuencia de escape.

Por ejemplo:

```js
"Hola\n"; // \n escapa una nueva línea
"Puedo escapar \"Otras comillas dobles\".";

```

A la hora de escapar caracteres podemos usar no solo el caracter `\` sino también una secuencia de tres, que permite ser usada para escapar cualquier carácter Unicode o un número hexadecimal.

| Secuencia | Representación                                                   |
| --------- | ---------------------------------------------------------------- |
| \0        | NUL                                                              |
| \b        | Backspace                                                        |
| \t        | Tab Horizontal                                                   |
| \n        | Nueva línea                                                      |
| \v        | Tab Vertical                                                     |
| \f        | Form feed                                                        |
| \r        | Retorno de carro                                                 |
| \"        | Comillas dobles                                                  |
| \'        | Comillas simples                                                 |
| \\        | Backslash                                                        |
| \xnn      | Un carácter Unicode especificado en dos digitos hexadecimales    |
| \xnnnn    | Un carácter Unicode especificado en cuatro digitos hexadecimales |
| \u{n}     | Un carácter Unicode especificado por su codigo                   |

Si el carácter `\` precede a cualquier otro carácter que no sea de los anteriores, simplemente es ignorado.

```js
"\#";
// es lo mismo que
"#";

```

### Trabajando con strings

Una de las características de JS es su habilidad para concatenar strings. Si usamos el operador `+` con números los sumamos. Pero si lo hacemos con strings, los unimos.

```js
const msg = "Hello, " + "world!";
const userName = "Iván";
const greeting = "Welcome to my store," + " " + userName;
```

Los strings pueden ser comparados con el operador de igualdad `===` y de inigualdad `!==`. Dos strings son iguales si y solo si tienen la misma secuencia de caracteres. También podemos usar los operadores `<`, `<=`, `>` y `>=`, que realizan una comparación de los valores.

Para determinar la longitud de un string usamos la propiedad `length` del mismo:

```js
const str = "foo";
str.length; // 3
```

Además de la propiedad length, JS nos ofrece una API bastante buena para trabajar con ellos:

```js
const s = "Hello, world"; // empezamos con un texto

// Obteniendo posiciones
s.substring(1, 3); // => ell: 2º y 3º y 4º carácter
s.slice(1, 4); // => ell: lo mismo
s.slice(-3); // => rld: últimos 3 caracteres
s.split(", "); // => ["Hello", "world"]: parte por string delimitador

// Buscando un string
s.indexOf("l"); // => 2: posición de la primera letra "l"
s.indexOf("l", 3); // => 3: posición de la primera "l" en o después de 3 posiciones
s.indexOf("zz"); // => -1: no existe el substring
s.lastIndexOf("l"); // => 10: posición de la última "l"

// Busqueda booleana
s.startsWith("Hell"); // => true: el string empieza así
s.endsWith("!"); // => false: el string no finaliza así
s.includes("or"); // => true: el string incluye el substring "or"

// Creando o modificando versiones de un string
s.replace("llo", "ya"); // => Heya, world
s.toLowerCase(); // => "hello, world"
s.toUpperCase(); // => "HELLO, WORLD"

// Inspeccionando strings
s.charAt(0); // => H: el primer carácter
s.charAt(s.length - 1); // => d: el último carácter

// Padding
"x".padStart(3); // => "  x": añade espacios a la izquierda hasta una longitud de 3
"x".padEnd(3); // => "x  ": añade espacios a la izquierda hasta una longitud de 3
"x".padStart(3, "*"); // => "**x": añade * a la izquierda hasta una longitud de 3
"x".padEnd(3, "-"); // => "x--": añade - a la izquierda hasta una longitud de 3

// Triming
" test ".trim(); // => "test": elimina los espacios en blanco
" test ".trimStart(); // => "test ": elimina los espacios en blanco al inicio
" test ".trimEnd(); // => " test": elimina los espacios en blanco al final

// Otros
s.concat("!"); // => "Hello, world!"
"*".repeat(5); // => "*****": repite n copias
```

Recuerda que **los strings son inmutables en JS**. Métodos como `replace()` o `toUpperCase()` devuelven un nuevo string, no modifican el original. Para que lo entendamos mejor, los strings debes pensar en ellos como arrays de caracteres.

```js
const s = "hello";
s[0]; // h
s[0] = "i"; // ERROR!
```

### Template strings

En ES6 podemos definir literales de strings con backtips:

```js
const str = `soy un template string`;
```

Ofrecen características que la construcción de strings con comillas simples o dobles no ofrecen, por ejemplo podemos incluir expresiones de JS dentro de ellos. El valor final del template string es calculado evaluando cualquier expresión incluida, convirtiendo los valores de dichas expresiones en strings y combinando dichos strings con los caracteres literales que estén dentro de los backtips:

```js
const name = "Iván";
const greeting = `Hello ${name}.`; // "Hello Iván."
```

Todo lo que se encuentre dentro de `${expresión}` es interpretado como una expresión JS. Todo lo que se encuentra fuera de las llaves como un string de texto literal. La expresión dentro de las llaves es evaluada y luego convertida a string para posteriormente ser insertada en el template, reemplazando el signo de `$` y las llaves `{}` y todo lo que tenga dentro.

No hay límites en el número de expresiones que podemos interpolar en un template string. Y pueden usar cualquier carácter de escape que el resto de los strings usan, ademas pueden abrir nuevas líneas sin ninguna secuencia de escape requerida.

```js
/*
  4 expresiones
  4 líneas
*/

const errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${error.message}
Stack trace:
${error.stack}
`;
```

#### Tagged template string

Una funcionalidad poderosa y poco usada de los template strings es que, si el nombre de una función (el "tag") antecede a la apertura de un backtick, entonces el texto y los valores de las expresiones del template string son pasados como argumentos de dicha función. Lo cual es útil para construir HTML, escapar sentencias SQL, etc.

```js
fn`Hello ${you}! You're looking ${adjective} today!`;

// desazucarando...

fn(["Hello ", "! You're looking ", " today!"], you, adjective);
```

### Coincidencia de patrones

JS define un tipo de dato conocido como expresiones regulares, `RegExp`, para describir y encontrar patrones en strings de texto. `RegExp` no es un tipo fundamental en JS, pero tienen un literal de sintaxis como los números o los strings, así que como si lo fueran ;D.

La gramática de escribir una expresión regular es compleja y la api que las define complicada.

El texto encerrado entre un par de `/` constituye el literal de una expresión regular:

```js
/^FOO/; // Busca coincidencias de las letras F O O desde el inicio del string
/[1-9][0-9]*/; // Busca cualquier dígito que no sea 0, seguido de cualquier número de dígitos
/\bjavascript\b/i; // Busca "javascript" como palabra, sin distinguir mayúsculas de minúsculas
```

Los objetos `RegExp` exponen una API con métodos útiles, los strings también tienen algunos métodos que aceptan `RegExp` en sus argumentos:

```js
let text = "testeando: 1, 2, 3"; // donde vamos a buscar
let pattern = /\d+/g; // coincidencia de cualquier instancia de uno o más dígitos
pattern.test(text); // => true: existe coincidencia
text.search(pattern); // => 11: posición de la primera coincidencia
text.match(pattern); // => ["1", "2", "3"]: array de todas las coincidencias
text.replace(pattern, "*"); // => "testeando: *, *, *"
text.split(/\D+/); // => ["", "1", "2", "3"]: split sobre lo que no es un dígito
```

_Nota: puede ser útil visitar la siguiente web para probar regexp https://regex101.com/_

## Booleanos

Un booleano representa verdad o falsedad, activado o desactivado, sí o no. Solo existen dos posibles valores en este tipo: `true` o `false`.

Los valores booleanos normalmente son el resultado de una comparación realizada en tu código JS.

```js
myVar === 4;

/*
  Este código comprueba si el valor de la variable "myVar" es igual al número 4. 
  Si el resultado de dicha comparación es cierto, el valor de la comparación es "true", si no es "false".
*/
```

Los valores booleanos son usados normalmente en JS como estructuras de control. Por ejemplo, el estamento `if` en JS realiza una acción si el valor booleano es `true` y otra si es `false`. Normalmente combinamos comparaciones con estamentos.

```js
if (myVar === 4) {
  myVar2++; // si el valor de "myVar" es igual a 4 entonces incrementa "myVar2"
} else {
  myVar--; // si no decrementa "myVar"
}
```

Cualquier valor en JS puede ser convertido a un valor booleano.
Los siguientes valores se convierten y funcionan como `false`:

```js
undefined;
null;
0 - 0;
NaN;
(""); // string vacío
```

El resto de valores, incluidos los objetos y arrays, convierten y funcionan como `true`. `false` y los 6 valores que convierten a él, son a veces llamados valores falsos (`falsy`) y el resto verdaderos (`truthy`). Cuando JS espera un valor booleano los valores falsos actual como `false` y los verdaderos como `true`.

Por ejemplo, suponiendo una variable `a` que guarda un objeto o el valor `null`. Puedes testear explícitamente para ver si es o no es `null` con el estamento `if`:

_Nota: Recuerda, solo usaremos `!=` para comparar contra null y undefined_

```js
if (a != null) {
  // ...
}
```

El operador de inigualdad compara `a` con null y evalúa hacia `true` o `false`.

_Nota: aunque verás en algunos sitios que se puede omitir la comparación y confiar en el hecho de que `null` es falso y un objeto verdadero, se considera una mala práctica. Mejor explícitos que implícitos ;D_

```js
// ESTO ES UNA MALA PRÁCTICA
if (a) {
  // ...
}
```

En el primer ejemplo, el cuerpo del estamento `if` es ejecutado si y solo si `a` no es `null` o `undefined`. En el segundo ejemplo será ejecutado si `a` no es `false` o cualquier valor falso (como `null` o `undefined`). Con lo cual el segundo estamento va a depender de más valores, los 6 que pueden convertir a `false`, y tenemos que tener más cuidado de que almacenamos en `a`. **MEJOR SER EXPLÍCITOS**

Los valores booleanos tienen un método `toString()` que se puede usar para convertirlos en los strings `"true"` y `"false"`, pero no tienen ningún otro método útil. Aparte de su API, hay 3 operadores booleanos importantes.

- El operador `&&` realiza la operación booleana `AND`.
  - Evaluando a un valor verdadero si y solo si ambos operandos son verdaderos, si no evalúa a falso.
- El operador `||` realiza la operación booleana `OR`.
  - Evaluando a un valor verdadero si uno de los dos (o ambos) operandos son verdaderos, si no evalúa a falso si ambos operadores son falsos.
- El operador unario `!` realiza la operación booleana `NOT`.
  - Evaluando a `true` si su operando es falso y evaluando a `false` si su operando es verdadero.

```js
if ((x === 0 && y === 0) || !(z === 0)) {
  // "x" e "y" ambos valores son cero o "z" no es cero
}
```

## null y undefined

`null` es una palabra reservada que evalúa a un valor especial, suele indicar ausencia de valor. Si usamos el operador `typeof` sobre `null` este retorna `"object"`, lo cual indica que `null` es un objeto especial que indica "ausencia de objeto". Técnicamente `null` es considerado el único miembro de su tipo y puede ser para indicar que no existe valor para números, strings u objetos.

JS tiene otro objeto que indica ausencia de valor: `undefined`. `undefined` representa un tipo de ausencia más profundo. Es el valor de variables que no han sido inicializadas o el valor que recibes cuando al consultar sobre la propiedad de un objeto o un elemento de un array este no existe. `undefined` también es el valor que retorna una función que explícitamenta no retorna valor y es el valor de los argumentos de una función que carece de ellos. `undefined` es una constante global predefinida, no una palabra reservada como `null`, inicializada al valor `undefined`. Si aplicamos el operador `typeof` sobre `undefined`, este retorna `"undefined"` lo cual indica que también es miembro único de su tipo.

A pesar de las diferencias entre `null` y `undefined` ambos indican ausencia de valor y suelen usarse de manera intercambiable. _Nota: casi siempre es mejor usar null, ya que es conocido por todos los programadores de diferentes lenguajes_.

Con ellos es recomendable trabajar con el operador de igualdad `==` para cubrir ambos, pero para distinguirlos explícitamente usaremos el comparador de igualdad estricta `===`.

```js
null == undefined; // => true
null === undefined; // => false
```

Ambos son valores falsos, es decir, se comportan como `false` cuando un valor booleano es requerido. Ni `null` ni `undefined` tienen métodos o propiedades asociadas.

## Symbol

Los símbolos fueron introducidos en ES6 para servir como propiedades que no son strings. Para entenderlos hay que comprender que los objetos fundamentales de JS son una colección no ordenada de propiedades, cada propiedad tiene un nombre y un valor. Las propiedades son normalmente strings. Pero con los símbolos, estos pueden actuar como tal.

```js
const strname = "string name"; // un string para usar como nombre de propiedad
const symbolname = Symbol("prop name"); // un Symbol para usar como nombre de propiedad
typeof strname; // => "string"
typeof symbolname; // => "symbol"
const obj = {}; // creamos un objeto
o[strname] = 1; // definimos una propiedad con el nombre basado en strings y le damos un valor
o[symbolname] = 2; // definimos una propiedad con el nombre basado en símbolos y le damos un valor
o[strname]; // => 1: accedemos a la propiedad basada en nombre
o[symbolname]; // => 2: accedemos a la propiedad basada en símbolo
```

`Symbol` no tiene un literal en la sintaxis JS. Para obtener el valor de un símbolo, llamamos a la función `Symbol()`. Esta función no retorna el mismo valor dos veces, incluso si la pasamos como el mismo argumento. Esto significa que si llamas a `Symbol()`para obtener un valor, puedes estar seguro de que al usarlo para añadir una propiedad a un objeto no estarás sobreescribiendo ninguna propiedad con el mismo nombre. De la misma manera, si usamos propiedades simbólicas y no compartimos los símbolos que la definen, puedes estar seguro de que otros módulos en tu programa no van a poder borrar las propiedades por un descuido en su programación.

Técnicamente los simbolos sirven como un mecanismo de extension del lenguaje. Cuando ES6 introdujo el loop `for/of` y los objetos iterables, era necesario definir un metodo estándar que las clases pudieran implementar por si mismas para hacerse iterables. Pero estandarizar cualquier nombre de propiedad como un string podría haber roto código ya existente, por eso se usó un nombre simbólico en vez de un string. `Symbol.iterator` es un valor de `Symbol` que puede ser usado como el nombre de un método para hacer un objeto iterable.

La función `Symbol()` toma un string de manera opcional en su argumento, y retorna un valor de `Symbol` único. Si le damos dicho argumento, el string será incluido en el output del metodo `toString()` de dicho símbolo. Pero recuerda que llamar al método `Symbol()` con el mismo string varias veces produce valores de `Symbol` diferentes.

```js
const sym = Symbol("foo");
sym.toString(); // => "Symbol("foo")"
```

El método `toString()` es el único método interesante de las instancias de un `Symbol`. Existen otros dos métodos a conocer. Normalmente cuando usamos símbolos, es porque queremos mantenerlos privados en una zona de nuestro código, de tal manera que nuestras propiedades definidas con ellos nunca entren en conflicto con código ya existente. Otras veces, podemos definir un valor basado en `Symbol` y compartirlo de manera más extensa con otras partes del código. Por ejemplo, si estamos definiendo una extensión en la que quieres que participen otras partes del código.

Para este último caso, JS define un registro de símbolos globales. La función `Symbol.for()` toma un string en su argumento y retorna un símbolo que es asociado con el string que has pasado. Si no existe un `Symbol` ya asociado a dicho string, entonces uno nuevo es creado y retornado.

El string pasado a la función `Symbol.for()` también aparece como output del método `toString()` del símbolo retornado y puede ser obtenido mediante llamar al método `Symbol.keyFor()` del símbolo retornado.

```js
const s = Symbol.for("shared");
const t = Symbol.for("shared");

s === t; // => true
s.toString(); // => "Symbol(shared)"
Symbol.keyFor(t); // => "shared"
```

## El objeto global

El objeto global, es un objeto fundamental de JS que sirve para un propósito importante: sus propiedades sirven como identificadores globales que están disponibles en un programa de JS. Cuando el intérprete de JS se lanza en Node, o cuando un navegador carga una nueva página, estos crean un nuevo objeto global y le dan una colección de propiedades que definen:

- Constantes globales como `undefined`, `Infinity` o `NaN`.
- Funciones globales como `isNaN()`, `parseInt()` o `eval()`.
- Funciones constructoras como `Date()`, `String()`, `Object()` o `Array()`.
- Objetos globales como `Math` o `JSON`.

Las propiedeades iniciales del objeto global no son palabras reservadas, pero deben tratarse como si lo fueran.

En Node, el objeto global tiene una propiedad llamada `global` cuyo valor es el objeto global en sí mismo, pudiendo referirte a él en tu programa escrito para Node con el nombre `global`.

En los navegadores, `window` sirve como objeto global para todo el código JS contenido en la ventana de dicho navegador. Este objeto global se referencia a sí mismo con la palabra `window` y define el core de las propiedades globales, pero también algunas propiedades específicas de cada navegador o del lado del cliente de JS.

Los web workers, definen otro objeto global diferente a `window`, y puede referenciarse con el objeto global `self`.

ES2020 define `globalThis` como la manera estándar de definir un objeto global independientemente del contexto y ya está implementada por casi todos los navegadores actuales y Node.

## Valores primitivos inmutables - Referencias a objetos mutables

Hay una diferencia básica en JS entre los valores primitivos (`undefined`, `null`, booleanos, números y strings) y los objetos (`arrays` y `function` incluidos). Los primitivos son inmutables: no hay manera de cambiar el valor de un primitivo. Esto tiene mucho sentido para los booleanos o los números, carece de sentido cambiar el valor de un número, pero no tanto para los strings. Los strings son _como_ arrays de caracteres, por lo que parece esperable ser capaz de alterar un carácter en un index específico. Pero JS no permite este comportamiento, de hecho todos los métodos que parecen alterar un string en realidad devuelven un valor nuevo.

```js
const s = "foo";
s.toUpperCase(); // "FOO" sin alterar s
s; // => "foo": el valor original de s no ha sido alterado
```

Los primitivos además son comparados por valor: dos valores son el mismo solo si tienen el mismo valor. Suena redundante para números, booleanos, `null` y `undefined`, ya que no hay otra manera de compararlos. Pero nuevamente esto no es tan obvio en el caso de los strings. Si dos valores distintos de strings son comparados, JS los trata igual si y solo si tienen la misma longitud y el carácter de cada index es el mismo.

Los objetos se comportan de manera diferente a los primitivos. Primero porque son mutables, su valor puede cambiar:

```js
const obj = { x: 1 };
obj.x = 2; // mutacion de la propiedad x cambiando su valor
obj.y = 3; // se añade una nueva propiedad al objeto

const arr = [1, 2, 3];
a[0] = 0; // cambio en el valor de un elemento del array
a[3] = 4; // se añade un nuevo elemento al array
```

Los objetos no son comparados por valor: dos objetos no son iguales aunque tengan las mismas propiedades y valores. Y dos arrays no son iguales aunque tengan los mismos elementos en el mismo orden:

```js
const objA = { x: 1 };
const objB = { x: 1 };

objA === objB; // => false

const arrA = [];
const arrB = [];

arrA === arrB; // => false
```

Los objetos son comumente llamados _tipos referenciales_ para distinguirlos de los _tipos primitivos_. Haciendo una analogía, los valores objetos son referencias y podemos decir que los objetos son comparados por referencia: dos valores objeto son iguales si y solo si referencian el mismo objeto subyacente.

```js
const arrA = [];
const arrB = arrA; // arrB referencia al mismo array

arrB[0] = 1; // mutamos el array referenciado por la constante arrB
arrA[0]; // => 1: el cambio es visible en la variable arrA
arrA === arrB; // => true: arrA y arrB referencian el mismo objeto, entonces son iguales
```

Asignar un objeto, o array, a una variable simplemente asigna la referencia: no creas una nueva copia del objeto. Si deseas crear una nueva copia del objeto o array, debes copiar explícitamente sus propiedades. Por ejemplo:

```js
const arrA = [1, 2, 3, 4];
const arrB = [];

for (let i = 0; i < arrA.length; i++) {
  // por cada index de arrA[]
  arrB[i] = arrA[i]; // copiamos el elemento en arrB
}

// ES6 define una forma más sencilla de hacer lo mismo
const arrC = Array.from(arrA);
```

De la misma forma si queremos comparar dos objetos distintos o dos arrays distintos, debemos compararlos por sus propiedades o elementos:

```js
// nuestro módulo arrays.js
const isEqual = (a, b) => {
  if (a === b) {
    // los arrays son iguales por referencia?
    return true;
  }

  if (a.length !== b.length) {
    // tienen la misma longitud?
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    // recorriendo sus elementos...
    if (a[i] !== b[i]) {
      // son idénticos?
      return false;
    }
  }

  return true; // entonces son iguales
};
```

## Conversión de tipos

TODO: IMPLEMENTAR

## Declaraciones de variables y asignaciones

Una de las técnicas fundamentales al programar es el uso de nombres o identificadores para representar valores. Asignar un nombre a un valor nos da la oportunidad de referirnos a dicho valor en el programa que escribimos. Cuando lo hacemos, normalmente decimos que asignamos un valor a una _variable_. El término variable, implica que nuevos valores pueden ser asignados: es decir, que el valor asociado a dicha variable puede variar en tiempo de ejecución. Si asignamos permanentemente un valor a un nombre, entonces lo llamamos constante, no variable.

Antes de poder usar variables o constantes en JS, debemos declararlas. En ES6 en adelante esto se hace mediante el uso de `let` y `const`. Antes de ES6 usábamos `var` que tiene su propia idiosincrasia.

### Declarando con let y const

En un JS moderno, las variables son declaradas con `let`:

```js
let i;
let sum;
```

También podemos declarar varias variables en un solo estamento `let`:

```js
let i, sum;
```

Es una buena práctica en programación asignar un valor inicial a una variable al declararla, siempre que sea posible:

```js
let message = "hola";
let i = 0,
  j = 1,
  k = 2;
let x = 3,
  y = x * x; // la inicialización puede usar variables declaradas previamente
```

Si no especificamos un valor inicial para una variable en el estamento `let`, entonces la variable es declarada, pero su valor es `undefined` hasta que tu código le asigne un valor.

Para declarar una constante en vez de una variable, usamos `const` en vez de `let`. `const` funciona igual que `let` a excepción de que debes inicializar la constante cuando la declaras.

```js
const H0 = 74;
const GREETING = `Saludos desde ${region}`;
```

Como su nombre implica, las constantes no pueden ser reasignadas, cualquier intento de realizarlo lanzará un `TypeError`.

_Nota: Es una práctica común, declarar las constantes en mayúsculas para distinguirlas de variables._

_Nota: contar escuelas de pensamiento_

En los loops (`for`, `for/in`, `for/of`) se incluye una variable que obtiene un nuevo valor en cada iteración del loop. JS nos permite declarar la variable del loop como parte de su sintaxis, es otra forma común de usar `let`:

```js
for (let i = 0; len = data.length; i < len; i++) console.log(data[i]);
for (let datum of data) console.log(datum);
for (let prop in obj) console.log(prop);
```

Puede parecer raro, pero también podemos usar `const` para declarar las variables de un loop `for/in` o `for/of` siempre que el cuerpo del loop no reasigne la variable a un nuevo valor, es decir, permanezca constante.

#### Scope de variables y constantes

El scope de una variable es una región del código de tu programa donde esta ha sido definida. Variables y constantes declaradas con `let` y `const` tienen un scope de bloque. Esto significa que solo son definidas en un bloque de código en el cual los estamentos de `let` o `const` aparecen. A grandes rasgos, si una variable o constante es declarada entre un set de llaves, entonces esas llaves delimitan la región del código en el cual la variable o constante definidas pueden ser referenciadas. _Tampoco es legal hacer referencia a una variable antes de ser declarada._

Cuando una declaración aparece a un nivel superior, fuera de un bloque de código, decimos que son variables o constantes globales, su scope es global. Los módulos JS, en Node o el navegador, sus variables globales son el archivo en el que están definidas. En el navegador tradicionalmente cualquier variable definida en una etiqueta `<script>` está disponible a cualquier elemento `<script>` del documento HTML.

#### Declaraciones repetidas

Es un error sintáctico usar el mismo nombre con más de una declaración `let` o `const` dentro del mismo scope. Es legítimo, pero una práctica que no debe usarse, declarar una nueva variable con el mismo nombre en un scope anidado.

```js
const x = 1; // global scope

if (x === 1) {
  let x = 2;
  console.log(x); // => 2
}
console.log(x); //=> 1 se refiere al scope global
let x = 3; // ERROR!
```

#### Declaraciones y tipos

Una variable JS puede guardar cualquier valor de cualquier tipo. Por ejemplo, es legítimo, pero mala práctica, asignar un número a una variable y luego asignar un string a esa variable, a diferencia de un lenguaje fuertemente tipado como C o Java:

```js
let i = 10;
i = "diez";
```

### Declarando con var

En versiones pre ES6, la única manera de declarar variables es la palabra `var`, y no existían constantes. La sintaxis de `var` es muy parecida a la de `let`:

```js
var x;
var data = [],
  count = data.length;

for (var i = 0; i < count; i++) console.log(data[i]);
```

Aunque `var`y `let`tienen la misma sintaxis, hay diferencias importantes en como funcionan:

- Las variables declaradas con `var` no tienen scope de bloque. En vez de eso, su scope es el cuerpo de la función que las contienen, dando igual lo anidadas que estén dentro de dicha función.
- Si usas `var` fuera del cuerpo de una función esta es declarada globalmente. Pero las variables declaradas globalmente con `var` difieren de las globales declaradas con `let`. Las globales declaradas con `var` son implementadas como parte del objeto global! Entonces si escribes `var x = 2`; fuera del cuerpo de una función, es como si escribieras `globalThis.x = 2`. Aunque esta analogía no es perfecta: las propiedades creadas con global `var` no pueden ser eliminadas con el operador `delete`. Las constantes y variables declaradas con `let` y `const` no son propiedades del objeto global.
- A diferencia de las variables declaradas con `let` es legal declarar la misma variable múltiples veces con `var`. Y como su scope es el de la función en la que han sido declaradas, es común hacer redeclaraciones. Por ejemplo, la variable `i` es frecuentemente usada para referenciar los valores de un entero, o los index en un loop. En una función con múltiples loops, es típico por cada uno empezar con un `for(var i = 0; ...)` porque `var` no tiene scope en el cuerpo de dicho loop, con lo cual redeclaran y reinicializan la misma variable.
- Uno de los efectos de las declaraciones de `var` se conoce como _hoisting_. Cuando una variable es declarada con `var`, la declaración es elevada (hoisted) hacia el top de la función donde están encerradas. Da igual donde las escribiste, serán movidas al top de la función. Por lo que pueden ser usadas en tu código, sin producir error, antes de su declaración.

## Asignación por desestructuración

ES6 implementa un tipo de composición para la sintaxis de declaración y asignación conocida como asignación por desestructuración.

En la asignación por desestructuración, el valor a la derecha del `=` es un valor estructurado, un objeto o un array y a la izquierda se especifica uno o más nombres de variables usando una sintaxis que replica el literal del objeto u array. Cuando una asignación por desestructuración aparece, uno o más valores son extraídos, desestructurados, del valor de la derecha y guardados en los nombres de las variables de la izquierda. La asignación por desestructuración es comunmente usada para inicializar variables como parte de los estamentos de declaración `const` o `let`, pero también puede funcionar al asignar valores a variables ya declaradas.

Por ejemplo, usando la asignación por desestructuración en valores de arrays:

```js
const [x, y] = [1, 2]; // es como escribir const x = 1; const y = 2;
[x, y] = [x + 1, y + 1]; // igual que x = x+1, y = y+1
[x, y] = [y, x][(x, y)]; // damos la vuelta a los dos valores // => [3,2]: los valores incrementados y dados la vuelta
```

La asignación por desestructuración funciona muy bien con funciones que retornan valores de arrays:

```js
// Convierte coordenadas [x, y] en coordenadas polares [r, theta]
function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

// Convierte coordenadas polares a Cartesianas
function toCartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

const [r, theta] = toPolar(1.0, 1.0);
const [x, y] = toCartesian(r, theta);
```

Las variables y constantes pueden ser declaradas como parte de uno de los tipos de loop `for` de JS. Con lo que podemos usar la asignación por desestructuración en este contexto. El siguiente código itera sobre el par nombre/valor de todas las propiedades de un objeto y usa la asignación por desestructuración para convertir dichos pares en dos elementos de un array en variables individuales:

```js
const o = { x: 1, y: 2 };
for (const [name, value] of Object.entries(o)) {
  console.log(name, value);
}
```

El número de variables a la izquierda de la asignación por desestructuración no tiene por qué casar con el número de elementos del array de su derecha. Variables extra en el lado izquierdo serán establecidas como `undefined`, y los valores extra en el lado derecho serán ignorados. La lista de variables en el lado izquierdo, puede incluir comas extra para saltar ciertos valores de la derecha:

```js
const [x, y] = [1]; // x === 1; y == undefined
[x, y] = [1, 2, 3]; // x === 1; y === 2
[, x, , y] = [1, 2, 3, 4]; // x === 2; y === 4
```

Si queremos colleccionar todos valores no usados o restantes en una sola variable cuando desestructuramos un array, usamos `...` antes del nombre de la última variable en el lado izquierdo:

```js
let [x, ...y] = [1, 2, 3, 4]; // x === 1; y === [2,3,4]
```

La asignación por desestructuración también puede ser usada con arrays anidados. En este caso, en el lado izquierdo de la asignación deberíamos incluir un literal de array anidado:

```js
const [a, [b, c]] = [1, [2, 2.5], 4]; // a === 1; b === 2; c === 2.5
```

Una de las características más importantes de la asignación por desestructuración es que no requiere un array. Puede ser usada con cualquier objeto iterable en el lado derecho de la asignación, cualquier objeto que puede usarse en un loop `for/of` puede desestructurarse:

```js
const [first, ...rest] = "Hello"; // first === "H"; rest === ["e", "l", "l", "o"]
```

La asignación por desestructuración también funciona cuando el lado derecho es un objeto regular. En este caso, el literal del lado izquierdo de la asignación debe ser un literal de objeto: una lista separada por comas de nombres de variables entre llaves:

```js
const transparent = { r: 0.0, g: 0.0, b: 0.0, a: 0.0 };
const { r, g, b } = transparent; // r === 0.0; g === 0.0; b === 0.0
```

El siguiente ejemplo, copia las funciones globales del objeto `Math` en variables, lo cual puede simplifcar un código que haga un constante uso de ellas:

```js
const { sin, cos, tan } = Math; // igual que hacer const sin=Math.sin, cos=Math.cos, tan=Math.tan
```

Ten en cuenta que en el código anterior el objeto `Math` tiene muchas más propiedades que las que están desestructuradas en el lado izquierdo en forma de variables. Aquellas que no nombramos, son ignoradas. Si el lado izquierdo de la asignación incluye una variable cuya propiedad no es parte de `Math`, entonces esa variable se establece como `undefined`.

Hasta ahora cada variable elegida al desestructurar casa con el nombre de la propiedad del objeto que estamos desestructurando. Pero esto no es requerido, aunque hace las cosas más faciles de leer. Cada identificador del lado izquierdo de un objeto desestructurado, puede también ser una par de identificación separado por `:`, donde el primero es el nombre de la propiedad cuyo valor se va asignar y el segundo el nombre de la variable asignada:

```js
// igual que const cosine = Math.cos, tangent = Math.tan;
const { cos: cosine, tan: tangent } = Math;
```

_Nota: Usar este tipo de sintaxis de desestructuracion, con alias, resulta demasiado complicado para ser útil cuando los nombres de variables y las propiedades no son los mismos y casi resulta mejor no usarlo. Si lo haces recuerda que los nombres de las propiedades van siempre con `:` en el lado izquierdo, tanto en los literales de objetos como en el lado izquierdo de una asignación por desestructuración_

TODO: IMPLEMENTAR CASOS COMPLICADOS

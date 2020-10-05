# Reglas Léxicas de JavaScript

La estructura léxica de un lenguaje de programación es el conjunto de reglas elementales que especifican cómo escribir programas en ese lenguaje. Es la sintaxis de nivel más bajo de un idioma: especifica el aspecto de los nombres de las variables, los caracteres delimitadores de los comentarios, y cómo una declaración de programa se separa de la siguiente.

## Texto escrito

JavaScript es un lenguaje que distingue mayúsculas de minúsculas. Esto significa que las palabras reservadas, variables, nombres de funciones o cualquier otro identificador debe estar siembre escritos con coherencia. Por ejemplo, si usamos la palabra reservada `while`, no es lo mismo que usar `WHILE` o `While`.

JS ignora espacios que aparecen entre los tokens. Y, salvo algunas excepciones, también ignora los saltos de línea. Lo cual significa que podemos usar espacios y nuevas líneas de manera libre y formatear con identación nuestro código, adecuándolo a la lectura y entendimiento que le queramos dar.

## Comentarios

Js soporta dos tipos de comentarios, cualquier cosa entre `//` y el final de una linea será tratado como un comentario e ignorado por JS. Cualquier cosa entre `/*` y `*/` ocurrirá lo mismo.

```js
// Comentario de una sola línea
/* Comentario de bloque */
```

## Literales

Un literal es un valor que aparece directamente en nuestro programa:

```js
1; // number
2.2; // number
"Hola" // string
`Adios`; // template string
true; // boolean
null; // ausencia de objeto
```

## Identificadores y palabras reservadas

Un identificador es simplemente un nombre. En JS los identificadores se usan para nombrar constantes, variables, funciones, propiedades y clases o darle etiquetas a algunos loops. Reglas al crear una identificación:

- Deben empezar por una letra, el carácter `_`, el signo `$`
- No admite empezar por un carácter numérico

```js
i;
my_let;
constant1;
_another_let;
$withDollar;
```

_Nota: por convención usaremos la forma de `camelCase` para crear identificadores, excepto de constantes que lo haremos con `MAYÚSCULAS` y en estilo `snake_case`_

Algunas palabras están reservadas para uso interno del lenguaje y no pueden usarse como identificadores.

### Palabras reservadas

Hay palabras que no podemos usar como identificadores, que son parte del propio lenguaje de JS, aunque a veces se pueden usar como parte de propiedades de un objeto, como `if`. Algunas tienen una reserva por parte del lenguaje en un contexto determinado, como es `set` o `get`. Otras están completamente reservadas como `let`.

Para evitarnos memorizar las reglas de contexto de uso de dichas palabras en JS, lo mejor será evitarlas siempre:

`as` `const` `export` `get` `null` `target` `void`
`async` `continue` `extends` `if` `of` `this` `while`
`await` `debugger` `false` `import` `return` `throw` `with`
`break` `default` `finally` `in` `set` `true` `yield`
`case` `delete` `for` `instanceof` `static` `try`
`catch` `do` `from` `let` `super` `typeof` `arguments`
`class` `else` `function` `new` `switch` `var` `eval`

Otras palabras reservadas, de cara al futuro son:

`enum` `implements` `interface` `package` `private` `protected` `public`

## Codificación: Unicode

Los programas en JS se escriben utilizando el juego de caracteres Unicode y puedes utilizar cualquier carácter Unicode en cadenas y comentarios. Por convención, es común usar solo letras y dígitos ASCII en identificadores. El lenguaje permite letras, dígitos e ideogramas (pero no emojis) en identificadores. Esto significa que podemos usar símbolos matemáticos y palabras que no están en inglés.

```js
const π = 3,14;
const sí = true;
```

## Semicolons

JS usa el semicolon `;` para separar sus estamentos. Es importante pues le da a tu código un carácter de separación visualmente identificable. Pero puedes omitirlo si lo deseas. Elijas el estilo que elijas adhiérete a él en todo tu código. Pero mi consejo es, si estás empezando a programar, que los uses.

```js
// El primer semicolon puede omitirse en esta circunstancia
a = 3;
b = 3;
```

_Regla general: al final de cada expresión o estamento usaremos un semicolon._

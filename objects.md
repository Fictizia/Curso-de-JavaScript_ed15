# Objetos

## Introducción a los objetos

Un objeto es un valor compuesto: agrega múltiples valores, primitivos u otros objetos, y permite guardar y obtener dichos valores por nombre. Un objeto es una colección no ordenada de propiedades, cada cual tiene un nombre y un valor. Los nombres de las propiedades suelen ser strings, por lo que podemos decir que un objeto mapea strings a valores. Este mapeo de strings a valores tiene varios nombres (hash, diccionario, array asociativo). Pero un objeto es más que un simple mapa de strings a valores. Además de mantener su propio set de propiedades, un objeto JS también hereda las propiedades de otro objeto, conocido como "prototype". Los métodos de un objeto son normalmente propiedades heredadas, y esta herencia de prototipos es una característica clave de JS.

Los objetos JS son dinámicos, las propiedades pueden ser añadidas y borradas, pero pueden ser usados para simular objetos estaticos y estructuras de los lenguajes tipados. También pueden ser usados, ignorando el valor de la parte del mapeo de strings a valores, para representar sets de strings.

Cualquier valor en JS que no es un primitivo es un objeto, incluso los strings, número y booleanos que aunque no son objetos, se comportan como objetos inmutables.

Si recuerdas, los objetos son mutables y manipulados por referencia y no por valor. Si la variable `x` se refiere a un objeto y el código `const y = x` es ejecutado, la variable `y` guardará una referencia al mismo objeto, no una copia del mismo. Cualquier modificación sobre el mismo a través de la variable `y` será visible a través de `x`.

Lo más común que podemos hacer con objetos es crearolos y establecer, consultar, borrar, testear y enumerar su propiedades.

Una propiedad tiene un nombre y un valor. El nombre de una propiedad puede ser un string, incluido el string vacio (o un `Symbol`), pero un objeto no puede tener dos propiedades con el mismo nombre. El valor puede ser de cualquier tipo fundamental de JS o incluso una función de tipo `getter` o `setter`.

Aveces es importante ser capaces de distinguir entre propiedades definidas directamente en un objeto y las que son heredadas por el prototipo del objeto. JS usa el termino `own property` para referirse a aquellas no heredadas.

Además de su nombre y valor, cada propiedad tiene 3 atributos de propiedad:

- El atributo `writable` especifica cuando una propiedad puede ser establecida.
- El atributo `enumerable` especifica cuando esa propiedad puede ser retornada por un bucle for/in.
- El atributo `configurable` especifica cuando la propiedad puede ser borrada y sus atributos alterados.

Casi todos los objetos de JS que pertenecen al lenguaje son de tipo solo lectura, no enumerables y no configurables. Por defecto, los que nosotros creamos son escribibles, enumerables y configurables.

## Creando objetos

Los objetos son creados con literales de objeto, con la palabra clave `new` y con la función `Object.create()`.

### Literal de objeto

La forma más sencilla y común de crear un objeto es incluir un literal del mismo en tu código JS. En su forma más simple, un literal de objeto es una lisdta separada por comas, de una lista separada por `:` de nombres: pares de valores, encerrados entre llaves. El nombre de una propiedad es un identificados JS o un literal de string. El valor de una propiedad puede ser cualquier expresión JS (primitivo u objeto) que se convierte en el valor de la propiedad:

```js
const empty = {}; // Objeto vacio
const point = {x: 0, y: 0,}: // Dos propiedades
const book = {
  "main title": "El señor de los anillos",
  "sub title": "La comunidad del anillo",
  lang: "es",
  author: {
    firstname: "J.R"
    surname: "Tolkien"
  },
};
```

Es aconsejable que la última propiedad de un objeto terminen en coma, así no obtendras un error de sintáxis si añades posteriormente una nueva propiedad al objeto.

Un literal de objeto es una expresión que crea e inicializa un nuevo y distinto objeto cada vez que es evaluada. El valor de cada propiedad es evaluado cada vez que el literal es evaluado. Esto significa que un solo literal de objeto puede crear muchos objetos si aparece en el cuerpo de un loop o de una función que es llamada de manera repetida, y las propiedades de dicho objeto pueden diferir unas de otras.

### Creando objetos con new

El operador `new` crea e inicializa un nuevo objeto. La palabra `new` debe ser seguida de una nvocación a una función. Una función usada de esta manera es llamada `constructor` y sirve para inicializar el nuevo objeto creado. JS incluye constructores para sus objetos incluidos en el lenguaje:

```js
const o = new Object();
const a = new Array();
const d = new Date();
const r = new Map();
```

También podemos definir nuestros propios constructores de objetos para inicializar objetos.

### Prototipos

Casi todos los obetos de JS tienen un segundo objeto asociado a ellos. Este segundo objeto es conocido como prototipo, y el primero hereda propiedades del prototipo.

Todos los objetos creados con el literal de objeto tienen el mismo objeto prototipo, y podemos referirnos al prototipo de un objeto en JS con `Object.prototype`. Los objetos creados usando la palabra clave `new` y la invoación a su constructos usan el valor de la propiedad `prototype` de la función constructora de su propio prototipo. Entonces un objeto creado con `new Object()` hereda de `Object.prototype`, tal y como un objeto creado con `{}`. De manera similar un objeto creado con `new Array()` usa `Array.protoype` como su prototipo. Esto puede ser lioso, pero simplemente recuerda: **todos los objetos tienen un prototipo, pero solo un número limitados objetos tienen la propiedad `prototype`. Son estos objetos con la propiedad `prototype`los que definen los prototipos del resto de objetos.**

`Object.prototype` es uno de los objetos raros que no tienen prototipo: no hereda de nadie ninguna propiedad. Otros prototipos de objetos son objetos normales que no tienen prototipo. La mayoría de constructores, incluidos los definidos por los programadores JS, tienen un prototipo que hereda de `Object.prototype`. Por ejemplo, `Date.prototype` hereda sus propiedades de `Object.prototype`, por lo que un objeto creado con `new Date()` hereda de ambos `Date.prototype` y `Object.prototype`. Esta serie de prototipos linkeados, es conocida como la _cadena de prototipos_.

### Object.create()

`Object.create()` crea un nuevo objeto, usando como su primer argumento el prototipo de dicho objeto a crear:

```js
const o1 = Object.create({ x: 1, y: 2 }); // o1 hereda propiedades x e y
o1.x + o1.y; // => 3
```

Podemos pasar `null` al crear un nuevo objeto que no tiene prototipo, pero si lo hacemos, el nuevo objeto no hereda de nada, ni siquiera los métodos básicos como `toString()` (lo que significa que no funcionaría con el operador `+` siquiera).

```js
const o2 = Object.create(null); // o2 no hereda ni propiedades ni métodos
```

Si queremos crear un objeto vacío, como el retornado por `{}` o `new Object()`, pasamos `Object.prototype`:

```js
const o3 = Object.create(Object.prototype); // o3 es como {}
```

La habilidad para crear un nuevo objeto con un prototipo cualquiera es muy poderosa. `Object.create()` también acepta un segundo argumento que especifica las propiedades del nuevo objeto.

Un uso común para `Object.create()` es cuando queremos protegernos ante modificaciones no deseadas de un objeto por una función de una librería de la que no tengamos control. En vez de pasar el objeto directamente a la función, podemos pasar un objeto que hereda del mismo. Si la función lee las propiedades del objeto, verá qe son valores heredados. Establecerá las propiedades que desee pero no afectará al objeto original, el prototipo.

```js
const o = { x: "No cambies este valor" };
library.function(Object.create(o)); // Protejemos o ante modificaciones indeseadas
```

## Consultando y estableciendo propiedades

Para obtener el valor de una propiedad usamos, la notación por punto `.` o corchetes `[]` ya vistas. El lado izquierdo debe ser una expresión cuyo valor es un objeto. Si usamos el operador por punto, el lado derecho debe ser un identificador simple del nombre de la propiedad. Si susamos los corchetes, el valor entre corchetes debe ser una expresión que evalue a un string que contiene el nombre de dicha propiedad:

```js
const author = book.author;
const title = book["main title"];
```

Para crear o establecer una propiedad, podemos usar ambos operadores, el de corchetes o punto, pero en la parte izquierda de la expresión de asignación:

```js
book.edition = 3;
book["main title"] = "LOTR";
```

_Nota: Cuando usamos la notación por corchetes, la expresión debe evaluar a un string o un valor que pueda ser convertido a un string o un `Symbol`_

### Objetos como arrays asociativos

Como ya he explicado, las siguientes expresiones JS tienen el mismo valor:

```js
object.property;
object["property"];
```

La primera sintáxis usando el punto y el identificador, es como la sintáxis usada para acceder a un acmpo estático o `struct` u objeto en C o Java. La segunda sintáxis, usando corchetes y strings, se parece mucho al acceso a un array, pero como si los índices fueran strings en vez de números. Esta clase de arrays es conocido como array asociativo. Los objetos JS son arrays asociativos, y esto es importante.

En C, C++, Java y lenguages fuertemente tipados similares, un objeto puede tener sólo un número fijo de propiedades y los nombres de dichas propiedades son definidos con antelación. Como JS es un lenguage dinámico, esta regla no aplica: un programa puede crear cualquier número de propiedades en cualquier objeto. Cuando usamos el operador `.` para acceder a la propiedad de un objeto, entonces el nombre de la propiedad es expresado como identificador. Los identificadores puedes ser tipados literalmente en el código JS, no son un tipo de datos, por lo que no pueden ser manipulados por el software.

Por otro lado, cuando accedemos a una propiedad con la notación por corchetes `[]`, el nombre de la propiedad es expresado como un string. Los strings en JS son tipos de datos, pueden ser manipulados y creador durante la ejecución del software.

Por ejemplo, se puede escribir el siguiente código en JS:

```js
let addr = "";

for (let i = 0; i < 4; i++) {
  addr += custommer[`address${i}`] + "\n";
}
```

Este código lee y concatena las propiedades `address0`, `address1`, `address2` y `address3` del objeto `customer`.

Esto demuestra la flexibilidad de usar la notación por corchetes al acceder a las propiedades de un objeto con una expresión string. Este código podría ser escrito con la notación por punto, pero hay casos en los que solo la notación por corchete puede realizar el trabajo de acceso. Por ejemplo, si escribimos un programa que usas recursos de la red para calcular el valor de el stock de un usuario en inversion de mercados. El programa permite al usuario escribir el nombre de cada stock que tiene, así como el número de acciones de cada uno. Podeos usar un objeto llamado `portfolio` para guardar dicha información. El objeto tiene una propiedad por cada stock. El nombre de la propiedad es el nombre del stock y su valor es el número de acciones de dicho stock. Por ejemplo, si un usuario guarda 50 acciones de IBM, entonces `portfolio.ibm` tiene el valor `50`.

Parte del programa podria ser una función para añadir nuevo stock al portfolio:

```js
function addstock(portfolio, stockname, shares) {
  portfolio[stockname] = shares;
}
```

Desde el momento en el que usuario introduce el nombre de los stocks en tiempo de ejecución, no hay manera de que sepamos los nombres de las propiedades de antemano. Como no podemos conocer los nombres de las propiedades cuando escribimos el programa, no hay manera de usar el operador `.` para acceder a las mismas dentro del objeto `portfolio`. Pero al usar el operador `[]`, como hace uso de un string que es dinamico y puede cambiar en tiempo de ejecución, en vez de un identificador (estático y hardcodeado en el software) para nombrar las propiedades.

El bucle `for/in` muestra su poder a la hora de usarlo con arrays asociativos. Por ejemplo para obtener el valor de nuestro portfolio:

```js
function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {
    // Para cada stock portfolio:
    const shares = portfolio[stock]; // obtenemos el numero de acciones
    const price = getQuote(stock); // buscamos el precio de cada accion

    total += shares * price; // añadimos el valor del stock al total
  }
  return total; // retornamos el total
}
```

### Herencia

Los objetos JS tienen un conjunto de propiedades propias, y tanbién heredan un conjunto de propiedades de su objeto prototipo. Para entender esto, debemos ver el acceso a propiedades en más detalles.

Suponiendo que obtenemos una propiedad `x` del objeto `o`. Si `o` no tiene propiedades propias con dicho nombre, el prototipo del objeto `o` es consultado para ver si tiene la propiedad `x`. Si el prototipo del objeto no tiene ninguna propiedad propia con dicho nombre, pero tiene prototipo, se sigue consultando en la cadena de los mismos hasta que `x` es encontrado o se alcanza un prototipo con valor `null`. Como podemos ver, el atributo `prototype` de un objeto crea una cadena o lista linkeada de cuales son las propiedades heredadas.

```js
const o = {}; // o hereda metodos de objeto de Object.prototype
o.x = 1; // establecemos una propiedad
const p = Object.create(o); // p hereda de o
p.y = 2;
const q = Oject.create(p); // q hereda de p que hereda de o
q.z = 3;
const f = q.toString(); // toString es heredado de Object.prototype
q.x + q.y;
```

Ahora supongamos que asignamos la propiedad `x` del objeto `o`. Si `o` ya tiene su propia propiedad llamada `x` (no heredada), entonces la asignación simplemente cambia el valor de la propiedad existente. De otra manera, la asignación crea una nueva propiedad llamada `x` en el objeto `o`. Si `o` previamente hereda la propiedad `x`, esa herencia es ocultada por la nueva propiedad propia con el mismo nombre.

La asignación de una propiedad examina la cadena de prototipos solo para determinar cuando una asignación es permitida. Si `o` hereda una propiedad de tipo solo lectura llamada `x`, por ejemplo, entonces la asignación no es permitida. Si la asignación es permitida, siempre crea o establece la propiedad en el objeto original y nunca modifica la cadena de prototipos. El hecho de que la herencia ocurra cuando consultamos propiedades pero no cuando las establecemos es una de las características claves de JS porque permite sobreescribir propiedades heredadas de manera selectiva.

```js
const unitCircle = { r: 1 };
const c = Object.create(unitCircle); // heredamos de unitCircle
c.x = 1;
c.y = 1; // creamos nuevas propiedades propias de c
c.r = 2; // sobreescribimos la propiedad r heredada de c
unitcircle.r; // => 1: el prototipo no ha sido afectado
```

Sólo existe una excepción a la regla de que la asignación de propiedades o bien falla o bien crea o establece una propiedad en el objeto original. Si `o` hereda la propiedad `x`, y dicha propiedad es una propuedad de acceso con un metodo de tipo `setter`, entonces dicho `setter` es invocado en vez de crear una nueva propiedad `x` en `o`. Aunque el método `seetter` es invocado en el objeto `o` no en el objeto prototipo que define dicha propiedad, por lo que si el `setter` define cualquier propiedad, lo hará en `o` manteniendo la cadena de prototipos sin modificar.

### Error en el acceso a propiedades

El acceso a propiedades no siempre retorna o establece un valor.
No es un error consultar una propiedad que no existe. Si la propiedad `x` no es encontrada como propia de un objeto o heredada en `o`, entonces la expresión `o.x` evalua a `undefined`.

Si volvemos al ejemplo del objeto `book`, vemos que teine una propiedad llamada `sub title` pero no `subtitle`:

```js
book.subtitle; // => undefined: no existe dicha propiedad
```

Lo que sí es un error es intentar consultar propiedades de objetos que no existen. `null` y `undefined` son valores, no propiedades, y es un error consultar propiedades a dichos valores. Por ejemplo:

```js
const len = book.subtitle.lenght; // TypeError: undefined no tiene length
```

Las expresiones de acceso a propiedades fallarán si el lado izquierdo del `.` es `null` o `undefined`. Cuando escribimos una expresión como `book.author.surname`, debemos tener cuidado si no sabemos que `book` o `book.author` están actualmente definidas. El siguiente código, nos protege ante dicho problema:

```js
let surname = undefined;
if (book != null) {
  if (book.author != null) {
    surname = book.author.surname;
  }
}
```

o alternativamente...

```js
const surname = book && book.author && book.author.surname;
```

o con ES2020:

```js
const surname = book?.author?.surname;
```

Intentar establecer una propiedad en `null` o `undefined` también causará un `TypeError`. Hay que tener en cuenta que intentos de establecer propiedades a otros valores no siempre va a funcionar: si la propiedad es de tipo solo lectura no podremos hacerlo y si algunos objetos no permiten la adición de nuevas propiedades tampoco. En modo estricto, se lanzará un `TypeError` cada vez que el intento de establecer una propiedad falle.

Las reglas que especifican cuando una asignacion a una propiedad funcionará y cuando fallará son intuitivas pero dificiles de expresar. El intento de establecer una propiedad `p` en un objeto `o` fallará en las siguientes circunstancias:

- `o` tiene una propiedad `p` que es de tipo solo lectura
- `o` hereda una propiedad `p` que es de tipo lectura
- `o` no tiene una propiedad `p`, ni la hereda, ni tiene un `setter` para `p`, pero su atributo `extensible` es `false`. Como `p` no existe en `o` ni hay ningun método `setter` que llamar, `p` podría ser establecida en `o`. Pero no es extensible, por lo que ninguna propiedad nueva se puede establecer.

## Borrando propiedades

El operador `delete` elimina una propiedad de un objeto. Su unico operando suele ser un expresión de acceso a una propiedad. Sorprendentemente, el operador `delete` no opera en el valor de la propiedad sino en la propiedad en sí misma:

```js
delete book.author;
delete book["main title"];
```

El operador `delete` solo borra propiedades propias del objeto, no las heredadas, para hacer eso deberíamos borrarlas del objeto prototipo en el que estan definidas, lo cual afectaría a cualquier objeto que heredara del mismo.

La expresión `delete` evalua a `true` si ha podido borrar o incluso si intenta borrar una propiedad que no existe. `delete` tambien evalua a `true` cuando es sado con una expresión que no es una expresión de acceso a una propiedad:

```js
const o = { x: 1 };
delete o.x; // => true: borra la propiedad x
delete o.x; // => true: no borra nada, es true igualmente
delete o.toString; // => true: no borra nada, es un metodo heredado
delete 1; // => true: sin sentido, pero true igualmente
```

`delete` no elimina propiedades que tienen el atributo `configurable` a `false`. Algunas propiedades de los objetos de JS, no son configurables, como son propiedades parte del objeto global, creadas por declaración devariables y declaración de funciones. Intentarlo en modo estricto lanzará la excepción `TypeError`. En modo no estricto, evaluara a `false`:

```js
delete Object.prototype; // => false: propiedad no configurable
globalThis.x = 1;
delete globalThis.x; // => false: no se puede borrar una propiedad del objeto global
```

## Testeando propiedades

TODO: IMPLEMENTAR

## Extendiendo objetos

TODO: IMPLEMENTAR

## Serializando objetos

La serialización de objetos es el proceso de convertir el estado de un objeto a un string del cual podamos restaurar el mismo posteriormente. Las funciones `JSON.stringify()` y `JSON.parse()` serializan y restaurar objetos en JS. Estas funciones usan el formato de intercambio JSON (JavaScript Object Notation) y su sintáxis es muy similar a la de los literales de los objetos y arrays de JS.

```js
const o = { x: 1, y: { z: [false, null, ""] } };
const s = JSON.stringify(o);
const p = JSON.parse(s);
```

La sintáxis JSON es un subset de la sintáxis de JS, y no tiene porque representar todos los valores presentes en el lenguaje. Objetos, arrays, strings, números finitos, `true`, `false` y `null` son soportados y serializados, así como restaurados. `NaN` e `(-)Infinity` son serializados a `null`. Objetos `Date` son serializados al formato ISO de fechas (`Date.toJSON()` aclará algo al respecto), pero al ser parseadas `JSON.parse()` las deja en formato string no restaurando un objeto `Date`.

`Function`, `RegExp` y objetos `Error` o `undefined` **no son serializados o restaurados.**

`JSON.stringify()` serializa sólo aquellas propiedades de un objeto que son enumerables y propias del objeto. Si una propiedad no puede ser serializada simplemente se omite del output final.
Ambos `JSON.stringify()` y `JSON.parse()` aceptan un argumento secundario opcional que puede ser usado para customizar la serialización/restauración especificando una lisa de propiedades a ser serializadas, por ejemplo, o convirtiendo ciertos valores durante la serialización/restauración.

## Métodos de objetos

TODO: IMPLEMENTAR

## Sintáxis de extensión de literales de objetos

TODO: IMPLEMENTAR

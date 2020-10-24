# Listado telefónico

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios asociado a su index.html correspondiente

## Descripción

La idea es construir un listado de contactos como el de tu teléfono. El listado telefónico será un objeto, donde cada propiedad es un identificador único (deberás generar la función que genera dicho identificador y debe ser llamada `genId()`).

En dicho listado telefónico, genera las siguientes funciones:

- Generación de un contacto. Un contacto es un objeto que debe tener la siguiente forma:

  ```js
  {
    id: String,
    name: String,
    surname: String,
    phones: [
      {
        tag: String || null
        value: String
      }
    ],
    email: String || null,
    image: String // una url de imagen
  }
  ```

  _Nota: Los campos como opcionalmente nulos no tienen porque ser introducidos al crear un contacto, el resto SI_

- Genera funciones que me permitan actualizar cada campo de contacto **excepto la id, la ID NUNCA SE PODRÁ ACTUALIZAR**

  - Incluyendo añadir nuevos teléfonos y sus etiquetas
  - Cada etiqueta de un teléfono nuevo puede ser del tipo:
    - Movil
    - Trabajo
    - Casa
    - Principal
    - Otro

- El listado telefónico tendrá un array de contactos favoritos
- Debo poder añadir un contacto como favorito al listin telefónico

Puedo ademas buscar cualquier contacto por:

- Nombre
- Apellido
- Teléfono
- Email

Obteniendo al buscarlos un array de n contactos con la coincidencia.

En cuanto a los añadidos a los favoritos:

- La lista de favoritos guardada en el listin, solo contendrá la id de aquellos contactos que son favoritos.
- Debo poder obtener la lista de todos los contactos que son favoritos, obteniendo una lista de objetos contactos.
- Debo poder eliminar un contacto de favoritos.

A continuación un ejemplo del objeto del listado telefonico:

```js
const contacts = {
  favorites: ["1jfoo"]
  list: {
    "1jfoo": {
      id: "1jfoo",
      name: "Foo",
      surname: "Bar",
      phones: [
        {
          tag: null
          value: "666777999"
        }
      ],
      email: "foo@bar.es",
      image: "https://foo.bar/img.jpeg"
    }
  }
}
```

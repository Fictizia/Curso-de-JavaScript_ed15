# Métodos de array

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios asociado a su index.html correspondiente

## Descripción

Dado el siguiente array:

```js
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
```

- Mapealo a un array de strings: `firstName-lastName: role`
- Filtra aquellos usuarios con role de `Full Stack Resident`
- Reduce el array a un objeto en el que cada propiedad es un `role` y su valor un array con los objetos usuarios que tienen dicho `role`
- Genera una función de búsqueda de un usuario por `firstName` con find.

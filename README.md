# Lab songs con un framework

## Objetivo

Programar un ranking de canciones por artista elegido.

**Demo:** 

![labsongs](https://user-images.githubusercontent.com/25906896/45911146-6978ac80-bdd5-11e8-9927-fe2e98717bae.gif)

## Consideraciones generales

Este proyecto se debe "resolver" de forma individual.

Se deberá desarrollar con una de estas tres herramientas: Angular, 
React o Vue; previamente elegida por ti.

Se puede replicar el diseño propuesto o crear su propio estilo.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## Recursos

### React

* [React - docs oficiales](https://reactjs.org/)
* [React - tutorial](https://egghead.io/courses/the-beginner-s-guide-to-react)
* [create-react-app](https://github.com/facebook/create-react-app)
* [React js en español - tutorial básico, primeros pasos y ejemplos - frontendlabs.io](https://frontendlabs.io/3158--react-js-espanol-tutorial-basico-primeros-pasos-ejemplos)

### Angular

* [Angular - docs oficiales](https://angular.io/)
* [Angular CLI](https://cli.angular.io/)
* [Angular - tutorial](https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ)
* [Angular - crud](https://www.youtube.com/watch?v=6wVolJfXn1c)

### Vue

* [Vue - docs oficiales](https://vuejs.org/)
* [Vue CLI](https://cli.vuejs.org/)
* [Vue- adicional](https://scotch.io/search?q=vue)
* [Vue- school](https://vueschool.io/)


## Checklist

### Parte obligatoria

#### General

* [ ] El `README.md` debe contener un resumen de lo que encontraremos en tu 
proyecto.
* [ ] Utilizarás la API de [last.fam](https://www.last.fm/api), solo debes 
registrarte y crear un key, es simple! (Recuerda que al colocar la URL 
debes usar `https` en lugar de `http`).

#### Funcionalidades

* [ ] Permite cambiar de artista.
* [ ] Al cambiar de artista deberá mostrar la imagen, nombre y lista de 
canciones de la opción seleccionada.
* [ ] Deberás crear la propiedad de votos para las canciones e inicializar 
los votos en cero (0).
* [ ] Debe tener un botón que permita sumar votos a las canciones.
* [ ] Debe tener otro botón que permita restar los votos hasta el tope de 
cero 0 (No debería contar en negativo).
* [ ] Las canciones se deben ordenar por cantidad de votos de forma 
descendente (de mayor a menor).
* [ ] Debe contener como mínimo la información de 5 artistas y mínimo 10 
canciones por cada uno.
* [ ] Deberá contener mínimo 3 componentes.

#### Desplegado

* [ ] Deberá ser desplegado en gh-pages, Heroku, etc.

### Hacker Edition

* [ ] Agregar un botón que permita reordenar de forma ascendente las 
canciones del artista (menor a mayor).
* [ ] Reemplazar los votos inicializados en cero (0) por la cantidad de 
reproducciones (información en la API).
* [ ] Buscador de artistas.

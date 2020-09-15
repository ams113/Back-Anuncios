# Backend MERN - Anuncios

## Descripción
Backend utilizando la plataforma apollo con node.

El proyecto esta estructurado por varios directorios cada uno con una tarea específica:

- **controllers:** Directorio encargado de realizar las consultas a la BD
- **models:** Directorio se alojan los esquemas de las colleciones de la base de datos.
- **gql:** Directorio encargado de gestionar las rutas y peticiones mediante graphQL.

## Desplieque mediante docker

docker run --name anuncios-server -p 4000:4000 -d anuncios-server
(No esta subido al dockerHub)

## Instalación
Tener previamente instalado en el equipo [Node.js](https://nodejs.org/es/). 

Instalación de las dependencias del server.

### `npm install`

## Puesta en marcha

En el directorio del proyecto para levantar el servidor

### `yarn dev` / `node index.js` / `npm start`
<br />

Playground<br />
Abrir [http://localhost:4000/graphql/](http://localhost:4000/graphql/) para ver en el navegador y consultar la api
<br />

Falta configurar apache kafka e integrarlo en el backend para poder desplegarlo todo con docker-compose

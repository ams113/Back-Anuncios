# Backend MERN - Anuncios

## Descripción
El proyecto esta estructurado por varios directorios cada uno con una tarea específica:

- **database:** Directorio encargado de instanciar la conexión con la BD
- **controllers:** Directorio encargado de realizar las consultas a la BD
- **helpers:** Directorio con funciones adicionales como realizar la puntuación de un anuncio.
- **middlewares:** Directorio encargado de validaciones o integraciones con otros elementos Oauth2,  GraphQL.
- **models:** Directorio se alojan los esquemas de las colleciones de la base de datos.
- **routes:** Directorio encargado de gestionar las rutas y peticiones mediante express.


## Instalación
Tener previamente instalado en el equipo [Node.js](https://nodejs.org/es/). 


**Instalar en el equipo la base de datos MongoDB:** [Link de instalación](https://docs.mongodb.com/manual/administration/install-community/).

Opcionalmente puede descargar el cliente Mongo [Robo 3T](https://robomongo.org/).

- Crear la base de datos *Prueba*
- Crear la collección Anuncios.


Realizar un *insert* en la BD con los datos de ejemplo de fichero data.json: [Datos anuncio](https://github.com/ams113/Back-Anuncios/tree/master/Data).

Instalación de las dependencias del server.

### `npm install`

## Puesta en marcha

En el directorio del proyecto para levantar el servidor

### `npm start`
<br />

API REST de desarrollo.<br />
Abrir [http://localhost:4000/api/](http://localhost:4000/api/) para ver en el navegador.
<br />

API REST de Anuncios.<br />
Abrir [http://localhost:4000/api/ads/](http://localhost:4000/api/ads/) para ver en el navegador.

Interfaz de consulta graphQL.<br />
Abrir [http://localhost:4000/graphql](http://localhost:4000/graphql) para ver en el navegador.

Métodos de consulta disponibles [GET, POST]

**Nota:**

La directorio Apollo contiene la implementación de graphQL con Node pero esta implemnetación no se ha desarrollado con éxito.
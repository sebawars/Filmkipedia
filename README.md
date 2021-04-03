## Web VideoClub ⚛️

#### Gestión de peliculas.  

  <details>
	<summary> Consigna </summary>

<br>Imaginate que te contratan de un videoclub que quiere construir un catálogo web y exponer todas sus películas a través de una API REST. 

+ El dueño del local espera que esta API pueda usarse para:
    + Consultar el catálogo de películas de manera paginada y ordenada por título de la película.
    + Buscar películas por nombre.
    + Crear una nueva película.
    + Modificar una película existente.
    + Eliminar una película.

+ Las películas tienen que tener:
    + Nombre.
    + País de origen.
    + Fecha de estreno.
    + Director.
    + Link de imágen de portada.
    + Reparto: Es una lista de actores donde cada uno consta de nombre y apellido.

+ En cuanto al catálogo web, el videoclub quiere que sea accesible desde un navegador, este catálogo debe constar de las siguientes funciones:
    + Listado de películas, con filtro por nombre y de forma paginada.
    + Formulario de creación de película.
    + Botón para eliminar una película.

+ Requerimientos técnicos:
    + Usar Typescript para el backend.
    + La interfaz web del catálogo tiene que estar hecha con React.js
    + El motor de base de datos puede ser MySQL o MariaDB.
    + En el proyecto debe estar el esquema de la base y los datos de prueba para que podamos correr el proyecto en local..
    + En cuanto a frameworks, podés las librerías ExpressJS y TypeORM. Alternativamente podés utilizar un framework llamado Nest.js.

+ Vamos a valorar los siguientes aspectos:
    + Que cumpla con los requerimientos funcionales.
    + Claridad y prolijidad del código.
    + Facilidad para desplegar.
    + Diagrama de clases de la solución.
    + Login.
    + Tests unitarios de la capa de servicio.
    + Utilización de una arquitectura de 3 capas.
  </details>
	
#### Desplegada en: 
	
  * API: http://ec2-52-87-152-250.compute-1.amazonaws.com:3010
  * FRONT: http://ec2-52-87-152-250.compute-1.amazonaws.com:3011
    
#### Diagrama de clases:

  * https://app.diagrams.net/#G1B5BsmrNDS8ifElJnjf0V8BynSa1hWRay

#### Swagger:

  * http://ec2-52-87-152-250.compute-1.amazonaws.com:3010/api/


#### Para su armado se utilizó:
	
  * Obtención de datos:
       fetch hacia la API.  
       Servidor en Nest JS con TypeORM.  
       BD: MYSQL  
       
  * Despliegue:
       Contenedor Docker.  
       AWS EC2.  
  
  * Empaquetador y transpilador front:
       Webpack, Babel (interno de create-react-app)
			
  * Estilado con CSS en JS con:
       styled-components

  * Enrutado SPA:
       Reach Router
			
  * Testing:
       Jest. Pruebas unitarias de servicios en server.  
       Cypress en front.  

#### Pasos despliegue (necesario tener libres puertos 3010 y 3011):

  * con docker:

       git clone https://github.com/sebawars/VideoClub  
       cd VideoClub/  
       docker-compose build  
       docker-compose up  
       ó  
       docker-compose up -d para independizar CLI  
       
  * sin docker:

       git clone https://github.com/sebawars/VideoClub  
       cd VideoClub/back  
       npm install  
       npm run start  
       (volver a raíz)  
       cd VideoClub/front  
       npm install  
       npm run start  

## Web VideoClub ⚛️

#### Gestión de peliculas.  
	
#### Desplegada en: 
	
  * API: http://ec2-35-153-167-17.compute-1.amazonaws.com:3010/api
  * FRONT: http://ec2-35-153-167-17.compute-1.amazonaws.com:3011
    
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

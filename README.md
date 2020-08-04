## Web VideoClub ⚛️

#### Gestión de peliculas.  
	
#### Desplegada en: 
	
  * API: http://ec2-35-153-167-17.compute-1.amazonaws.com:8081/api
  * FRONT: http://ec2-35-153-167-17.compute-1.amazonaws.com:8080
    
#### Para su armado se utilizó:
	
  * Obtención de datos:
       BD: JSON dummy en memoria (a futuro TyperORM y MYSQL)
       fetch hacia la API.  
       Servidor en Express.  
       
  * Despliegue:
       Contenedor Docker.  
       AWS EC2.  
  
  * Empaquetador y transpilador front:
       Webpack, Babel
			
  * Estilado con CSS en JS con:
       styled-components

  * Enrutado SPA:
       Reach Router
			
  * Testing:
       Supertest, mocha, sinon, proxyquire en server.  
       Cypress en front.  

#### Pasos despliegue:

       git clone https://github.com/sebawars/VideoClub
       cd VideoClub/
       docker-compose build
       docker-compose up
       ó
       docker-compose up -d para independizar CLI

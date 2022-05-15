# Hack The Ocean API
API creado para el Hackaton de #InnovaccionVirtual #LaunchX

## Como iniciar
Para montar el API se requiere hacer lo siguiente:

1. Clonar repo y hacer CD a carpeta "Backend"  
2. Instalar dependencias con:  
    ```
	npm install express --save-dev
	npm install jest --save-dev
	npm install eslint --save-dev
	```
3. Correr pruebas 
Las pruebas se ejecutan en automatico gracias al uso de Github actions... sin embargo es recomendable ejecutar las pruebas nuevamente:  
	```
	# Si usas windows:
	npm run test_windows
	
	# Si usas Linux o MacOS
	npm run test
	```
4. Ejecutar express  
Ejecutar servidor de express con:  
	```
	npm run server
	```

## Accesar endpoints  
Ya sea usando [postman](https://www.postman.com), [hoppscotch](https://hoppscotch.io/es/) o tu navegador web, accede a los siguientes endpoints (todos son GET, reemplazar "parametro" por el dato a filtrar):  
- http://localhost:3000/v1/animals/name/:parametro:
  Se filtra por nombre comun, trae todos los registros filtrados. Tipo de dato: String
- http://localhost:3000/v1/animals/scientificName/:parametro:
  Se filtra por nombre cientifico, trae todos los registros filtrados. Tipo de dato: String
- http://localhost:3000/v1/animals/status/:parametro:
  Se filtra por el estatus, trae todos los registros filtrados. Tipo de dato: String
# TAREA 8 MIDDLEWARES
Este proyecto es una API que gestiona información de estudiantes utilizando Express como framework de Node.js. Implementa middlewares para autorización y validación de datos en las rutas correspondientes.

**instala las dependencias del proyecto**

```bash
npm install
```
**Ejecuta el servidor**

```bash
node app.js
```
El servidor estará escuchando por el puerto 3002

## Parte 1. Implementación de Middleware de Autorización

### Prueba de Bearer Token 

**Método GET**

![método GET](./images/P1metodoGET.png)

**Método POST**

![método POST](./images/P1metodoPOST.png)

**Método PUT**

![método POST](./images/P1metodoPUT.png)  

Verificación del cambio en el **name** estudiante con id = 5  
![método POST verificación](./images/P1metodoPUT2.png)

**Método DELETE**

eliminamos el estudiante con id = 4

![método DELETE](./images/P1metodoDELETE.png)

verificamos con una petición GET que el estudiante con id = 4 fue eliminado.  

![método DELETE verificación](./images/P1metodoDELETE2.png)


## Parte 2

### Pruebas

**Método POST**

Con datos válidos  
![Método POST](./images/P2metodoPOST.png)

Con datos No válidos  
Nombre vacío  
![Método POST nombre vacio](./images/P2metodoPOST2.png)

Edad en string  
![Método POST edad](./images/P2metodoPOST3.png)

Major vacío  
![Método POST major](./images/P2metodoPOST4.png)

**Método PUT**

Con datos correctos  
modifica el name  
![Método PUT nombre](./images/P2metodoPUT1.png)

Nombre vacío  
![Método PUT nombre vacio](./images/P2metodoPUT2.png)

Edad como String  
![Método PUT edad ](./images/P2metodoPUT3.png)

Major vacío  
![Método PUT major vacio](./images/P2metodoPUT4.png)


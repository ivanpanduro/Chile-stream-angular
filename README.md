# Chile Stream 

##  Descripción y Objetivo

Chile Stream es una plataforma de streaming 
##  Autor

Iván Careaga Panduro

## Captura del Proyecto en Ejecución

![Vista principal](./src/assets/captura-ejecucion.png)

![ng serve](https://github.com/user-attachments/assets/dbdf9b39-1ad3-43ff-97a6-6f36cb0230a8)
![home](https://github.com/user-attachments/assets/f4bf5213-d25c-4847-812f-522b11a44704)
![login](https://github.com/user-attachments/assets/86fcedde-3980-45ec-b10b-cff5d9125232)
![Backend](https://github.com/user-attachments/assets/41930cd3-da1b-432e-8c06-3d76b94255d0)



##  Instrucciones de Instalación y Uso

```bash
# Clona el repositorio
git clone https://github.com/ivanpanduro/chile-stream-angular.git
cd chile-stream-angular
##  Entra al proyecto y ejecuta el Fronet
cd chile-stream-angular
npm install
ng serve

## Ejecuta el backend:
cd ChileStream.API
dotnet run


##  Asegúrate de tener SQL Server corriendo y ejecuta el script chile_stream.sql dentro de la carpeta database.





##  Dependencias

Angular
Angular CLI

Angular Router

Bootstrap

Backend C#
ASP.NET Core Web API

Entity Framework Core

Pomelo.EntityFrameworkCore.MySql

Swagger

##  Diagrama de Entidad-Relación
 Incluido en la carpeta database/er-diagram.png

## ¿Cómo se hizo?

Angular para frontend SPA

ASP.NET Core Web API para backend

Base de datos relacional en MySQL

Conexión mediante servicios Angular (HttpClient)

CORS habilitado

Lazy loading en módulos

Login simulado desde BD

Opiniones persistentes

##  Reporte de Testing y Code Coverage

```plaintext
Statements   : 88.23% (15/17)
Branches     :  0%    (0/2)
Functions    : 60%    (3/5)
Lines        : 85.71% (12/14)
```

> Para ver el reporte visual, abre `coverage/index.html`.

##  Problemas Conocidos

Falta de validación completa de formularios

No se incluyen filtros de búsqueda avanzados

Opiniones no se pueden editar

##  Retrospectiva

###  ¿Qué hice bien?
- Se logró configurar Angular 19 con pruebas y code coverage exitosamente.
- Se mantuvo orden en el código y carpetas.
- Se usó Git de forma correcta para mantener control de cambios.

###  ¿Qué no salió bien?
- Hubo varios errores de compatibilidad entre versiones.
- Falló inicialmente la detección de archivos `.spec.ts`.
- Se intentaron soluciones incorrectas como usar `require.context`.

### ¿Qué puedo hacer diferente?
- Planificar mejor la compatibilidad entre paquetes antes de instalar.
- Seguir la documentación oficial más rigurosamente.


---

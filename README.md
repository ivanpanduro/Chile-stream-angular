# Chile Stream 

##  Descripción y Objetivo

Chile Stream es una plataforma de streaming 
##  Autor

Iván Careaga Panduro

## Captura del Proyecto en Ejecución

![Vista principal](./src/assets/captura-ejecucion.png)



##  Instrucciones de Instalación y Uso

```bash
# Clona el repositorio
git clone https://github.com/ivanpanduro/chile-stream-angular.git
cd chile-stream-angular

# Instala dependencias
npm install

# Ejecuta el servidor
ng serve

# Corre las pruebas unitarias
ng test --code-coverage

# Visualiza el reporte de cobertura
# Abre el archivo: coverage/index.html
```

##  Dependencias

- Angular CLI: 19.2.8
- Angular: 19.2.7
- Node.js: 22.14.0
- TypeScript: 5.3.3
- Zone.js: 0.15.0
- Karma: 6.4.4

## ¿Cómo se hizo?

Se inició el proyecto usando Angular CLI. Se diseñaron componentes personalizados, se implementó autenticación simulada y luego se integró el sistema de pruebas con Karma y Jasmine. También se configuró el archivo `karma.conf.js` y `test.ts` para el reporte de cobertura. Finalmente, se documentó todo el proceso y se subió a GitHub.

##  Reporte de Testing y Code Coverage

```plaintext
Statements   : 88.23% (15/17)
Branches     :  0%    (0/2)
Functions    : 60%    (3/5)
Lines        : 85.71% (12/14)
```

> Para ver el reporte visual, abre `coverage/index.html`.

##  Problemas Conocidos

- Las imágenes de películas arrojan error 404 si no están en la carpeta `assets/peliculas`.
- El atributo `.title` en `AppComponent` puede generar conflictos si no está declarado explícitamente.
- Algunas dependencias de pruebas pueden entrar en conflicto si no coinciden con la versión exacta de Angular.

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

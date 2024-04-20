# PWA-RIA-React

Repositorio para la materia Programacion Avanzada respecto a los proyectos de RIA+REACT.

## Instrucciones de uso
1. Clonar el repositorio en tu carpeta de preferencia con el siguiente comando: git clone https://github.com/veraAlan/PWA-RIA-React.git
2. Instalar todas las librerias necesarias con el comando ```npm install```
3. Posicionarse en /tp1-react con ```cd /tp1-react```
4. Abrir el servidor con el comando ```npm run dev``` (Falta hacer build)
5. ir a la direccion: http://localhost:3000/

### Integrantes del grupo


- **Vera Alan Cristian Gaston** 
    - Legajo FAI - 2622  
    - Mail Personal: alan.vera@est.fi.uncoma.edu.ar
    - Usuario GitHub: veraAlan
- **Yaitul Santiago Alejo**
    - Legajo FAI - 2339
    - Mail Personal: santiago.yaitul@est.fi.uncoma.edu.ar
    - Usuario GitHub: SantiagoYaitul

---
### Funciones

index.js : archivo comunmente default de routing, en la mayoria de frameworks este es el archivo con las funciones de renderizado del DOM. En nuetro proyecto se encuentra en app/page.js tenemos nuestro entry point.
App.js: El componente principal de la aplicacion, aqui se encuentra la logica de la aplicacion. En el caso de este proyecto, nuestra App es "Home.js" por ser creado con NextJS
index.css: Archivo de estilazado global, contiene las variables que pueden usarse en todo el proyecto, como configuraciones base de html/body o incluso * (wildcards).
package-json.js: contiene la referencia (en JSON) de las librerias instaladas por NPM, aqui se puede agregar manualmente una libreria para instalar con "npm install".

### Estructura

```bash
E:\CODING\WORKSPACES\VISUAL STUDIO\GITHUB\TESTEST\PWA-RIA-REACT
│   .gitattributes
│   .gitignore
│   README.md
│
└───tp1-react
    │   .gitignore
    │   jsconfig.json
    │   next.config.mjs
    │   package-lock.json
    │   package.json
    │   README.md
    │
    ├───public
    │       next.svg
    │       vercel.svg
    │
    └───src
        └───app
            │   favicon.ico
            │   globals.css
            │   layout.js
            │   page.js
            │   page.module.css
            │
            ├───components
            │   ├───Button
            │   │       Button.jsx
            │   │       Button.module.css
            │   │
            │   ├───Counter
            │   │       Counter.jsx
            │   │       Counter.module.css
            │   │
            │   ├───CreateTask
            │   │       CreateTask.jsx
            │   │       CreateTask.module.css
            │   │
            │   ├───Input
            │   │       Input.jsx
            │   │       Input.module.css
            │   │
            │   ├───Search
            │   │       Search.jsx
            │   │       Search.module.css
            │   │
            │   ├───Task
            │   │       Task.jsx
            │   │       Task.module.css
            │   │
            │   ├───TaskContext
            │   │       TaskContext.jsx
            │   │
            │   ├───TaskList
            │   │       TaskList.jsx
            │   │       TaskList.module.css
            │   │
            │   ├───Title
            │   │       Title.jsx
            │   │       Title.module.css
            │   │
            │   └───Toast
            │           Toast.jsx
            │           Toast.module.css
            │
            └───pages
                └───Home
                        Home.js
                        Home.module.css
```

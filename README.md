# PWA-RIA-React

Repositorio para la materia Programacion Avanzada respecto a los proyectos de RIA+REACT.

Preview del proyecto en [README.MD](tp1-react/README.md)

## Integrantes del grupo

- **Vera Alan Cristian Gaston**
  - Legajo FAI - 2622
  - Mail Personal: alan.vera@est.fi.uncoma.edu.ar
  - Usuario GitHub: veraAlan
- **Yaitul Santiago Alejo**
  - Legajo FAI - 2339
  - Mail Personal: santiago.yaitul@est.fi.uncoma.edu.ar
  - Usuario GitHub: SantiagoYaitul

---

## Requisitos

Tener instalado [NodeJS](https://nodejs.org/en/download)

## Instrucciones de uso

1. Clonar el repositorio en tu carpeta de preferencia con el siguiente comando: `git clone https://github.com/veraAlan/PWA-RIA-React.git`
2. Instalar todas las librerias necesarias con el comando `npm install` //Primero hacer paso 3 y despues hacer paso 2.
3. Posicionarse en /tp1-react con `cd /tp1-react`
4. Abrir el servidor local con el comando `npm run dev`
5. ir a la direccion: http://localhost:3000/

## Funciones principales

**_index.js_** : archivo comunmente default de routing, en la mayoria de frameworks este es el archivo con las funciones de renderizado del DOM. En nuetro proyecto se encuentra en app/page.js tenemos nuestro entry point.

**_App.js_**: El componente principal de la aplicacion, aqui se encuentra la logica de la aplicacion. En el caso de este proyecto, nuestra App es "Home.js" por ser creado con NextJS.

**_index.css_**: Archivo de estilazado global, contiene las variables que pueden usarse en todo el proyecto, como configuraciones base de html/body o incluso \* (wildcards).

**_package-json.js_**: contiene la referencia (en JSON) de las librerias instaladas por NPM, aqui se puede agregar manualmente una libreria para instalar con "npm install".

## Estructura

```
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
    ├───public
    └───src
        └───app
            │   favicon.ico
            │   globals.css
            │   layout.js
            │   page.js
            │   page.module.css
            ├───components
            │   ├───Button
            │   │       Button.jsx
            │   │       Button.module.css
            │   ├───Counter
            │   │       Counter.jsx
            │   │       Counter.module.css
            │   ├───CreateTask
            │   │       CreateTask.jsx
            │   │       CreateTask.module.css
            │   ├───Input
            │   │       Input.jsx
            │   │       Input.module.css
            │   ├───Search
            │   │       Search.jsx
            │   │       Search.module.css
            │   ├───Task
            │   │       Task.jsx
            │   │       Task.module.css
            │   ├───TaskContext
            │   │       TaskContext.jsx
            │   ├───TaskList
            │   │       TaskList.jsx
            │   │       TaskList.module.css
            │   ├───Title
            │   │       Title.jsx
            │   │       Title.module.css
            │   └───Toast
            │           Toast.jsx
            │           Toast.module.css
            └───pages
                └───Home
                        Home.js
                        Home.module.css
```

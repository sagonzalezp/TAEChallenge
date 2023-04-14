Este documento README proporciona una descripción general del proyecto TAE Challenge y cómo ejecutarlo.

#Introducción
Este proyecto Cypress es una prueba automatizada de extremo a extremo que cubre:

Navegar a https://www.demoblaze.com/index.html
Seleccionar dos productos y agregarlos al carrito
Realizar el pedido
#Instalación
Antes de ejecutar el proyecto, asegúrese de tener instalado Node.js en su sistema. Puede descargar Node.js desde el sitio web oficial https://nodejs.org/.

Después de instalar Node.js, puede instalar el proyecto Cypress ejecutando el siguiente comando:
npm install cypress --save-dev
Este comando descargará e instalará el proyecto Cypress junto con sus dependencias.

#Estructura del proyecto
El proyecto Cypress tiene la siguiente estructura de directorios:

cypress/
e2e/
placeOrder.cy.js
page-objects/
CartPage.js
HomePage.js
ProductPage.js
support/
commands.js
e2e.js
cypress.config.js

El directorio e2e contiene el archivo 'placeOrder.js' que tiene el código de prueba.

El directorio page-objects contiene los modelos de objetos de página. Cada uno de ellos tiene los métodos o acciones que se pueden realizar en su página respectiva.

El directorio support contiene cualquier archivo JavaScript que permita al usuario crear comandos personalizados. Estos archivos no se utilizan en este proyecto.

#Ejecución de pruebas
Para ejecutar las pruebas, navegue hasta el directorio del proyecto en la terminal y ejecute el siguiente comando:

npx cypress open
Este comando abrirá el Cypress Test Runner, que le permite ejecutar pruebas individuales.

También puede ejecutar las pruebas en la línea de comando usando el siguiente comando:

npx cypress run
Este comando ejecutará todas las pruebas en el directorio de integración en modo headless.
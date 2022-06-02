# TSLS
Repo para el proyecto de CODER de la cursada de React

## CREAR EL PROYECTO
Correr el comando:

`npx create-react-app <nombredelaapp>`

>Se utiliza npx para crearlo desde el repo de npm sin tener que instalar la librería en la computadora. De esa manera es más eficiente la construcción del proyecto y SIEMPRE estarán las dependencias a la última versión disponible.

Este comando instalará todas las dependencias en node_modules, junto con las carpetas public, src y los archivos
.gitignore y .json necesarios.

En package.json podemos ver todas las librerías instaladas para poder utilizar en nuestro proyecto y los comandos de consola para poder correr el código en el navegador y crear versión de producción optimizado entre otros.

Para correrlo en el navegador usar:

`npm start`

## NAVEGACIÓN

### LOGO Y CATALOGO GENERAL

La página inicia mostrando el catálogo general (ubicado en la ruta principal) con todo el portafolio de productos a ofrecer, cada uno con un titulo descriptivo, imagen, inventario disponible y un contador de productos a comprar para poder hacer posteriormente la compra.

Igualmente cuenta con un botón de detalle, el cual nos redirije a la ruta donde se puede encontrar una descripción más detallada del producto al igual que el precio de venta del mismo.

### NAVBAR

La mejor forma de navegar la aplicación es a través del navbar en la parte superior. Cada categoria filtrará los productos para desplegar únicamente aquellos que cumplen con la categoría. Actualmente tenemos productos para hombre y mujer en categorías sport y casual, todas fácilmente accesibles a través del navbar proporcionado.

Para volver al catálogo general basta con dar click en el logo de nuestra tienda y serás redirigido inmediatamente.

## CARRITO

Finalmente, contamos también con un botón para acceder al carrito de compras el cual irá indicando la cantidad de productos que se han seleccionado para comprar.
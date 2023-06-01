# E-commerce - Proyecto ReactJS Coderhouse

Enlace del deploy: [Web App de E-commerce](https://entrega-final-romero-react-leandromaxromero.vercel.app).

## Herramientas, frameworks y librerías

[![Generic badge](https://img.shields.io/badge/node-v18.14-lemon.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/npm-8.19.2-darkred.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/react-^18.2.0-aqua.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/react--bootstrap-^2.7.2-cyan.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/react--dom-^18.2.0-aquamarine.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/react--icons-^4.7.1-deeppink.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/react--router--dom-^6.11.0-crimson.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/react--scripts-5.0.1-cadetblue.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/bootstrap-^5.2.3-blueviolet.svg)](https://shields.io/)\
[![Generic badge](https://img.shields.io/badge/firebase-^9.22.1-orangered.svg)](https://shields.io/)


## Comandos

**En la terminal del proyecto, puede ejecutar:**


### `npm install`
Descarga todas las dependencias necesarias para correr la aplicación en la carpeta `node_modeles`.

#### `npm start`
Corre la aplicación en modo desarrollador.\
Abre [http://localhost:3000](http://localhost:3000) para visualizarlo en su navegador.

La página refrescará cuando realice cambios.\
También puede ver errores de codificación, sintaxis, de código ineficiente o no portable en la consola

#### `npx create-react-app 'name'`
Crea una nueva aplicación en React con una plantilla predeterminada de Create React App.

#### `npm install react-router-dom`
Instala React Router Dom.

#### `npm install react-icons -save`
Instala React Icons.

#### `npm install firebase@9.22.1`
Instala Firebase v. 9.22.1.

#### `npm run build`

Construye la aplicación para producción en la carpeta `build`.
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.
La compilación se minimiza y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser implementada!

## Descripción del proyecto

El proyecto es una SPA de un E-commerce ficticio. Está realizado en ReactJS, utilizando Bootstrap para su diseño de estilo y firebase-database para almacenar los items que se renderizan y la orden de compra generada por los usuarios.

*La elección de los productos no pretende ridiculizar o subestimar el trabajo presentado, sino enfatizar el proceso de elaboración de la página web y la lógica aplicada en sus componentes desestimando su función comercial intrínseca.*

### Navbar :boat:

El Navbar cumplirá la función de navegación a través de las diferentes secciones del sitio.
Tanto el link de `Inicio` como el `logo del sitio` llevarán al usuario al *Home*, donde se visualizan todos los productos ofrecidos.
Los links de las `categorías` filtrarán los productos diferenciándolos por su variedad.

### Items :potato:

Los ítems se presentarán en la página de `Inicio`, o en su defecto cuando sean filtradas por categorías. En ésta, se mostrará una imagen representativa del producto, su precio unitario, su stock, su variedad y un botón de `Ver detalles`.
Ingresando a los detalles, se visualizará el producto con la misma información presentada en el Inicio, una breve descripción, un seleccionador de cantidades que se desea comprar (el cual está concebido para que nunca sea menor a 1 ni mayor al stock).
Los productos están almacenados en el data-base de firebase y tienen sus respectivo IDs generados por esta plataforma.
Para realizar la compra se exhibe el botón `Agregar al carrito`, el cual permite al usuario `Finalizar la compra` y dirijirse al **Carrito** o volver al Inicio para comtinuar agregando productos al Carrito.

### Carrito :shopping_cart:

El ícono del carrito se visualizará en el **NavBar** solamente cuando se agreguen productos en él. En el mismo se visualizarán las cantidades totales de productos seleccionados por el usuario.
Dentro del renderizado del Carrito, se podrán ver los productos seleccionados, las cantidades de los mismos, sus respectivos precios unitarios y subtotales; a su vez, se mostrará el Total de la compra seleccionada por el usuario.
Se presentarán los botones para `Remover` un ítem del carrito, o en su defecto, `Limpiar el carrito` el cual removerá todos los productos.
En el caso de confirmar la compra, se presentará el botón para realizar el correspondiente **Checkout**.


### Checkout :memo:

En esta sección se solicitará al usuario datos personales , a través de un formulario, para la generación de una orden de compra.
Serán validados los formatos de los campos a completar, como también la validación de la dirección de mail a través de la repetición.
De no ser válido alguno de los campos solicitados, saldrá un alerta de error y no se habilitará la generación de la orden.
Una vez completado el formulario adecuadamente, a través del botón `Generar orde de compra`, el usuario enviará los datos personales y de los ítems cargados al carrito a una colección en el data-base de firebase, y recibirá a través de la pantalla su ID de orden de compra.
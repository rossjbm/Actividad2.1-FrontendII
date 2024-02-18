# Actividad2.1-FrontendII

<br><h4>
Estudiantes de la Universidad Valle del Momboy
Facultad de Ingeniería
Carrera Ingeniería en Computación
Asignatura Frontend II
</h4>
<br>
<h3>Colaboradores
</h3>
<ul>
<li>Rosimar Barrios  <i>C.I: 30.976.217</i></li>
<li>Cristian Rangel  <i>C.I: 31.898.075</i></li>
</ul>


<h2>Descripción</h2>
<b>Link del video explicativo:  </b>
<b>Link del Diseño en Figma: https://www.figma.com/file/GqftY2LIebyMwlHnNMLTNM/e-actividad-2.1?type=design&node-id=3-29&mode=design&t=azTP9jnDpxgGrSRa-0</b>

Esta aplicación consiste en una tienda online de electrodomésticos, donde los usuarios administradores podrán gestionar todos los productos y ver los clientes registrados. De igual forma, el cliente puede comprar, ver productos y añadirlo a favoritos.

¡Importante! para le realización de proyecto empleamos el servidor de desarrollo Vite, librerías como React-Bootstrap, React-Icons, y frameworks CSS como Tailwind. Para backend Nodejs y como base de datos MongoDB.


<h2>Instalación y Arranque del Sistema</h2>
Todos estos procesos los realizaremos por "Símbolos de Sistema", es decir, el <b>terminal cmd</b>.

<h3>Paso 1 - Clonar Repositorio</h3>
<ol>
	<li>Luego de abrir el terminal, nos ubicamos en la ruta en donde deseamos clonar el repositorio, para ello usamos el comando <b>cd</b> junto con la dirección:
	```
	$ cd C:\ruta\Github\ruta
	```</li>
	<li>En el momento que nos encontremos en el lugar deseado, ahora ejecutaremos el comando de git <b>clone</b> junto con la ruta URL del repositorio en la web.
	```
	$ git clone https://github.com/rossjbm/Actividad2.1-FrontendII
	```</li> 
	<li>Y con esto el repositorio habrá sido clonado. Ahora si puedes ingresar a al por Visual Studio Code.</li>
</ol>
<h3>Paso 2.1 - Importar DB (Abrir Servidor MongoDB)</h3>
<ol>
	<li>Dirigete al Disco Local, seguido de Archivos de Programa, y buscas MongoDB, allí seguirás la siguiente dirección <i>MongoDB\Server\5.0\bin</i>. </li>
	<li>Dentro de la carpeta bin se encuantran las Aplicaciones que acompañan a MongoDb, vas a presionar <b>mongod.exe</b></li>
	<li>Se te abrirá un terminal, y con eso estariamos iniciando el servidor de MongoDB</li>
</ol>
<h3>Paso 2.2 - Importar DB (Importación)</h3>
<ol>
	<li>Para esto es necesario tener previamente instalado de las herramientas de MongoDB la siguiente: <i>MongoDB Command Line Database Tools Download</i>.
	(si aín no la tienes aqui te dejamos el link de descarga: ttps://www.mongodb.com/try/download/database-tools</li>
	<li>Abrimos el terminal de nuestra computadora, y escribieremos el comando <b>mongorestore</b> seguido de <b>--db</b>, luego colocas el nombre de la DB en este caso <b>electronics</b> y por último la dirección de la DB desde nuestro repositorio la cual se encuentra en <i>..\E-Actividad-FrontEnd-4.3\backend\database\electronics></i>. Ejemplo:
	```
	$ mongorestore --d electronics C:\ruta\GitHub\FRONT-II\Actividad2.1-FrontendII\backend\database\electronics
	```</li> 
	<li>Das enter, y después de unos segundos la importación estará lista. De hecho te dirá el número de collecciones creadas y documentos. Para confirmar que ya cuentes con la DB ingresa los siguientes comandos en un nuevo terminal para ver las base de datos disponibles:
	```
	$ mongo
	```
	```
	$ show dbs
	```</li>
</ol>
<h3>Paso 3.1- Iniciar el Sistema (backend)</h3>
<ol>
	<li>Abrimos en un Visual Studio Carperta de <b>backend</b>.</li>
	<li>Creamos un archivo de variables de entorno <b>.env</b> en cual indicaremos la URL de conexión con la DB.
	Esta URL la podemos encontrar al iniciar el cliente de MongoDB (teniendo abierto su servidor). Luego de decirnos la versión nos dirá lo siguiente: 
	```
	connecting to: mongodb://IP:27017/
	```
	En IP te aprarecerá una serie de números que son tu identificador, copiamos esa ruta y lo colocamos en el <b>.env</b> de la siguiente forma:
	```
	DATABASE=mongodb://IP:27017/
	```
	</li>
	<li>Abrir el terminal de Visual Studio Code, e instalar npm con el siguiente comando:
	```
	$ npm i
	```</li> 
	<li>Al instalarse completamente el npm, podemos arrancar el Sistema del Cliente con:
	```
	$ npm run server
	```</li> 
	<li>Y con esto tenemos funcionando el Sistema del Servidor en la ruta <b>http://localhost:3000</b>.</li>
</ol>
<h3>Paso 3.2 - Iniciar el Sistema (frontend)</h3>
<ol>
	<li>Abrimos en un Visual Studio Carperta de <b>frotend</b>.</li>
	<li>Creamos un archivo de variables de entorno <b>.env</b> en cual indicaremos el puerto en el que escuchará el cliente, en nuestro caso será el puerto <b>5000</b>, colocamos lo siguiente:
	```
	PORT=5000
	```</li>
	<li>Abrir el terminal de Visual Studio Code, e instalar npm con el siguiente comando:
	```
	$ npm i
	```</li> 
	<li>Al instalarse completamente el npm, podemos arrancar el Sistema del Cliente con:
	```
	$ npm run dev
	```</li> 
	<li>Y con esto tenemos funcionando el Sistema del Cliente, de forma automática este abrirá nuestro navegador predeterminado con la ruta <b>http://localhost:5000</b>.</li>
</ol>
<h3>
PASO 4.1- Iniciar Sesión
</h3>
<ul>
<li>Debido a las autorizaciones, es necesario inicar sesión, por lo que la BD tendrá un usuario Administrador de Prueba y Cliente de Prueba. También puedes regístrate sin problemas.</li>
<li>ADMINISTRADOR: 
<b>Usuario:</b> adminPrueba 
<b>Contraseña:</b> admin</li>
<li>CLIENTE: 
<b>Usuario:</b> clientePrueba  
<b>Contraseña:</b> cliente</li>
</ul>

<h2>FIN</h2>

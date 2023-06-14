# Analizador de texto

¡Bienvenidos al Analizador de Texto! Este proyecto te ayudará a mejorar tus habilidades de escritura y perfeccionar la calidad de tus textos, en donde podrás obtener métricas detalladas sobre tu texto, lo que te permitirá identificar áreas de mejora y elevar tu capacidad de redacción.

  A continuación verás una serie de indicaciones de como puedes sacar todo tu potencial por medio de esta herramienta:

  Una vez que hayas abierto El Analizador de Texto en el navegador, verás una interfaz  con las siguientes secciones:

  Un area de entrada de texto: donde se puede  ingresar  texto para analizarlo. Simplemente se escribe o pega el texto en el cuadro proporcionado.

  Métricas: en base a lo descrito anteriormente en esta sección, se mostrarán las métricas sobre tu texto, estas incluyen el recuento de caracteres, el recuento de caracteres sin espacios, el recuento de palabras, el recuento de números, la suma total de números y el promedio de longitud de las palabras.

  Al finalizar,  el botón de limpiar: Si deseas borrar el texto ingresado y reiniciar las métricas, sólo haz clic en el botón "Limpiar".

    Las métricas se actualizan automáticamente con la información correspondiente al texto ingresado.
    ¡Continúa utilizando el Analizador de Texto para mejorar tus habilidades de escritura y obtener información útil sobre tus textos!

## 2. Preámbulo

Un analizador de texto es una aplicación para extraer información útil de un
texto utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos. Otras métricas incluyen el análisis
de sentimientos, que utiliza técnicas de NLP para determinar el tono
general positivo, negativo o neutral del texto, y el análisis de
legibilidad, que utiliza algoritmos para evaluar la complejidad y la
legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información
valiosa y métricas sobre los textos que pueden ayudar a los usuarios a
tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, los usuarios pueden
obtener una comprensión más profunda de los textos.
_____________________________________________________________________________

_____________________________________________________________________________

## 3. Funcionalidades

En este proyecto se implemento un analizador de texto web para calcular
y mostrar métricas de un texto enviado por el usuario.

El listado de funcionalidades es el siguiente:

1. La aplicación debe permitir al usuario ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación debe calcular las siguientes métricas y actualizar el
resultado en tiempo real a medida que el usuario escribe su texto:

    - **Recuento de palabras**: la aplicación debe poder contar el número de
    palabras en el texto de entrada y mostrar este recuento al usuario
    - **Recuento de caracteres**: la aplicación debe poder contar el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y mostrar este recuento al usuario.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación debe poder contar el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento
    al usuario.  
    - **Recuento de números**: la aplicación debe contar cúantos números hay en
    el texto de entrada y mostrar este recuento al usuario.
    - **Suma total de números**: la aplicación debe sumar todos los números que
    hay en el texto de entrada y mostrar el resultado al usuario.
    - **Longitud media de las palabras**: la aplicación debe calcular la
    longitud media de las palabras en el texto de entrada y mostrársela al usuario.

3. La aplicación debe permitir limpiar el contenido de la caja de texto haciendo
clic en un botón.

## 4. Herramientas utilizadas 
  MIRO: con miro inicie el prototipo de baja fidelidad, en donde se inicio viendo las funciones principales e iniciales del proyecto.
  FIGMA: por medio de Figma, se organizo una mejor visión de a donde se queria llegar haciendo un prototipo de alta fidelidad.
  TRELLO: se planifico y organizo como iba a estar estructurado el proceso del proyecto.
  HTML: Utilicé HTML para construir la estructura o  esqueleto del Analizador de Texto.
  CSS: para dar vida y esencia al Analizador de Texto, y de esa forma llamar la atención de los usuarios que ingresen.
  JavaScript: con JavaScript, use la lógica y funciones para según cada función lograra darle esa interacción a las metricas del texto. 
  Visual Studio Code: para escribir código según la planificación que iba llevando.
  Git: Utilicé Git como mi sistema de control de versiones para mantener un seguimiento de cada cambio y asegurar la integridad de mi código fuente.


#### Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

El comando `npm run deploy` puede ayudarte con esta tarea y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).

## 5. Criterios de aceptación mínimos del proyecto

A continuación encontrarás los criterios de aceptación mínimos del proyecto
relacionados con cada objetivo de aprendizaje.


## 6. Pruebas

Este proyecto cuenta con 3 conjuntos de pruebas que te ayudarán a conocer si
cumples los criterios mínimos de aceptación, entre ellas se pueden encontrar pruebas unitarias para ejecutar los metodos encontrados en el Analyzer, con el comando `npm run test`, seguidas de pruebas de criterios minimos de aceptacion con el comando `npm run test:oas`; y para concluir Una prueba end-to-end (E2E), por medio del comando `npm run test:e2e`

### Prepara tu PC para trabajar
Para iniciar el proyecto primero se llevaron a cabo una serie de pasos para que el equipo que se vaya a utilizar quedara en funcionamiento acorde a los requerimientos: 

Instalando y creando herramientas como:
  1. Node.js 
  2. Git
  3. Visual Studio Code
  4. Creacion de cuenta en GitHub

  En Base a estas herramientas, se Procede a hacer fork del proyecto, Crear en la terminal correspondiente la llave Ssh, instalar dependencias del proyecto, y playwright para arrancar el servidor, empezar a codear y finalmente hacer que los sitios esten desplegados.

  #### Prototipos de baja fidelidad
    A continuación, se muestran los prototipos de baja fidelidad que fueron creados para ver la estructura y el diseño básico del Analizador:

  ###### Prototipos de alta fidelidad   
    Posteriormente, se desarrollo un prototipo de alta fidelidad para refinar el diseño y la apariencia, por medio de este prototipo se muestrae una representación más cercana a la apariencia final del producto.

  ###### Proceso de Construcción 

    Para llevar a cabo este Proyecto me base en hacer paso a paso los Críterios de aceptación  mínima del proyecto:
      *Empezando por el esqueleto del html con una estructura básica haciendo una etiqueta <header>, padre de <h1> donde escribí el título de mi Text Analyzer; seguido de un <textarea>, que sirve para crear un area de texto en donde los usuarios van a escribir o pegar sus escritos, este lleva atributo name, y valor o aisgnandole el nombre de  user-input.
      * Luego vienen los <ul> que es una lista desordenada, con 6 hijos <li> que nos dan cada metrica (estos hijos igual deben estar segun el orden dado en el readme ), y llevan atributo class con el nombre de metric-item para mis metricas correspondientes.
      *Al final un <footer>, padre de un <p> que escribe mi nombre , este footer, me define el pie de página.
      * y finalmente un <button>, con el texto limpiar, para vaciar nuestra area de texto, con un id o nombre de reset-button para poder llamarlo en el JavaScript.
      *Luego ordene esa estructura de modo que me quedaba primero el ul, luego el textarea, seguido de el boton, y al final el footer, para que tuviera como mejor orden en el html.
      *De alli me fui a el css para darle vida, y siguiendo el paso a paso, cree un selector para cada elemento:
          Siendo header y footer con Selectores de tipo, escribiendolo solo el nombre de la etiqueta
          ul y sus li con selector de class, que se caracteriza por llevar punto (.), con propiedades de modelo de caja con backround, border, margin, padding.
          textarea con selector de atributo, entre corchetes ([])
          Button con selector de id, usando el simbolo # seguido de mi id para dar estilo.

      * De ahi me fui al Index. js usando el 
        -querySelector acompañado de document, usando una cons text tarea, para seleccionar el primer <textarea> que encuentra en el documento y  asignar a la variable textarea. y con document.querySelectorAll para seleccionar todos los elementos con  .metric-item y se asignan a la variable metrics(con el const metric)

        -getElementById, para seleccionar el elemento del botón de reinicio por su ID.

        -textarea.addEventListener , este se uso para escuchar los eventos del area de texto , con el keyup que se dispara o actualiza cuando se suelta una tecla despuues de presionarla 

        -updateMetrics es una función que se encarga de actualizar las métricas en respuesta a los cambios en el texto ingresado en el área de texto. Obtiene el valor del texto ingresado en el área de texto mediante textarea.value paradespues actualizar el contenido de cada elemento de métrica utilizando las funciones del objeto analyzer y el texto ingresado. en donde el ${} con las funciones dentro permite insertar o llamar el resultado de las funciones dentro de una cadena de texto, eso se llama interpolación de cadenas (Es una forma más conveniente de concatenar variables o expresiones en una cadena sin tener que usar el operador de concatenación (+).)
        

        -resetButton.addEventListener se utiliza para agregar un escuchador de eventos al botón.
            con esto document.getElementById se utiliza para seleccionar el elemento del botón de reinicio mediante su ID de reset button





## 9. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de datos primitivos**

  <details><summary>Links</summary><p>

  * [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadenas de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  * [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Diseñar en distintos niveles de fidelidad**

- [ ] **Seguir los principios básicos de diseño visual**

## 10. Funcionalidades opcionales

Si terminaste con todas las [funcionalidades requeridas](#3-funcionalidades),
intenta implementar las siguientes funcionalidades opcionales para
profundizar en los objetivos de aprendizaje del proyecto:

* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto vacía.
* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto con solo espacios.
* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto con solo caracteres de puntuación.

Puedes habilitar las pruebas unitarias y en _end to end_ de estos casos
en los archivos [test/analyzer.spec.js](test/analyzer.spec.js) y
[read-only/test/e2e/app.spec.js](read-only/test/e2e/app.spec.js).




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
## Consideraciones Generales
  -Este proyecto lo resolvemos de manera individual.
  -El rango de tiempo estimado para completar el proyecto es de 1 a 3 Sprints.
  

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

Boilerplate
La lógica del proyecto debe estar implementada completamente en JavaScript. En este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio que contiene un boilerplate con tests (pruebas). Un boilerplate es la estructura básica de un proyecto que sirve como un punto de partida con archivos y configuración inicial de dependencias y tests.

El boilerplate que les damos contiene esta estructura:

./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js
Descripción de scripts / archivos
README.md: debes modificarlo para explicar la información necesaria para el uso de tu aplicación web, así como una introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.

.github/workflows: esta carpeta contine la configuracion para la ejecution de Github Actions. No debes modificar esta carpeta ni su contenido.

docs/images: contiene las imagenes de este README.

read-only/: esta carpeta contiene las pruebas de criterios mínimos de aceptación y end-to-end. No debes modificar esta carpeta ni su contenido.

src/index.html: este es el punto de entrada a tu aplicación. Este archivo debe contener tu HTML.

src/style.css: este archivo debe contener las reglas de estilo. Queremos que escribas tus propias reglas, por eso NO está permitido el uso de frameworks de CSS (Bootstrap, Materialize, etc).

src/analyzer.js: acá debes implementar el objeto analyzer, el cual ya está exportado en el boilerplate. Este objeto (analyzer) debe contener seis métodos:

analyzer.getWordCount(text): esta función debe retornar el recuento de palabras que se encuentran en el parámetro text de tipo string.
analyzer.getCharacterCount(text): esta función debe retornar el recuento de caracteres que se encuentran en el parámetro text de tipo string.
analyzer.getCharacterCountExcludingSpaces(text): esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro text de tipo string.
analyzer.getNumberCount(text): esta función debe retornar cúantos números se encuentran en el parámetro text de tipo string.
analyzer.getNumberSum(text): esta función debe retornar la suma de todos los números que se encuentran en el parámetro text de tipo string.
analyzer.getAverageWordLength(text): esta función debe retornar la longitud media de palabras que se encuentran en el parámetro text de tipo string. En este caso usa 2 dígitos decimales.

## . Herramientas utilizadas 
  MIRO: con miro inicie el prototipo de baja fidelidad, en donde se inicio viendo las funciones principales e iniciales del proyecto.

  FIGMA: por medio de Figma, se organizo una mejor visión de a donde se queria llegar haciendo un prototipo de alta fidelidad.

  **TRELLO:** se planifico y organizo como iba a estar estructurado el proceso del proyecto.

  **HTML:** Utilicé HTML para construir la estructura o  esqueleto del Analizador de Texto.

  **CSS:** para dar vida y esencia al Analizador de Texto, y de esa forma llamar la atención de los usuarios que ingresen.

  **JavaScript:** con JavaScript, use la lógica y funciones para según cada función lograra darle esa interacción a las metricas del texto. 

  **Visual Studio Code:** para escribir código según la planificación que iba llevando.
  Git: Utilicé Git como mi sistema de control de versiones para mantener un seguimiento de cada cambio y asegurar la integridad de mi código fuente.


#### Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

El comando `npm run deploy` puede ayudarte con esta tarea y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).


## . Pruebas

Este proyecto cuenta con 3 conjuntos de pruebas que te ayudarán a conocer si
cumples los criterios mínimos de aceptación, entre ellas se pueden encontrar pruebas unitarias para ejecutar los metodos encontrados en el Analyzer, con el comando `npm run test`, seguidas de pruebas de criterios minimos de aceptacion con el comando `npm run test:oas`; y para concluir Una prueba end-to-end (E2E), por medio del comando `npm run test:e2e` 

Github actions
Este repositorio usa una GitHub Action para ejecutar automáticamente las pruebas unitarias, pruebas de criterios mínimos de aceptación y y pruebas end-to-end cada vez que se hagas un push en la rama main de tu repositorio.

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
    
  ![Prototipo 1](https://github.com/Diana03m/DEV009-text-analyzer/raw/main/Prototipo%201.JPG)


  ###### Prototipos de alta fidelidad   
    Posteriormente, se desarrollo un prototipo de alta fidelidad para refinar el diseño y la apariencia, por medio de este prototipo se muestrae una representación más cercana a la apariencia final del producto.
    
    
   ![Texto alternativo](https://github.com/Diana03m/DEV009-text-analyzer/raw/main/Prototipoo2.JPG)



  
  ____________________________________________________________________________________________________
  ¿Cómo unirte al proyecto?
    Si deseas unirte al desarrollo del Analizador de Texto, sigue estos pasos:

    - Clona este repositorio en tu computadora local.
    - Abre el código en tu editor de código favorito.
    - Explora los archivos HTML, CSS y JavaScript para familiarizarte con la estructura y el funcionamiento del proyecto.
    - Haz mejoras o implementa nuevas funcionalidades según tus habilidades y creatividad.
   - Realiza commits y push a tu repositorio personal.
    Siéntete libre de  compartir tus cambios con nosotros.


















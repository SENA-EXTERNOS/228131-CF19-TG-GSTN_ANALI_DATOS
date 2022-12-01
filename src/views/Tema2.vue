<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Implementar modelos a través de API #[em REST]
    p.mb-5(data-aos='fade-right') En estes apartado hablaremos sobre uno de los conceptos más mencionados en el mundo del desarrollo de software, hablamos de API #[em REST.]
    .row.justify-content-center.mb-5
      .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="API").align-items-center
            .col-md-2.col-6
              figure
                img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Es el acrónimo de Interfaz de Programación de Aplicaciones. Básicamente, es un intermediario de #[em software] que permite que dos aplicaciones se comuniquen entre sí. Por ejemplo, cuando se envía un mensaje de texto a través de un servicio de mensajería se está haciendo uso de las API
          .row(titulo="<em>REST</em>").align-items-center
            .col-md-2.col-6
              figure
                img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Es el acrónimo de Transferencia de Estado de Representación. Es una interfaz que permite la conexión entre varios sistemas que utilizan el protocolo HTTP y determina cómo los usuarios visualizan la API. #[em REST] emplea los métodos de HTTP como #[em GET, PUT, POST] y #[em DELETE] para crear, modificar y borrar recursos de las bases de datos (López, 2019).
          .row(titulo="<em>API REST</em>").align-items-center
            .col-md-2.col-6
              figure
                img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Transfiere al usuario el estado de un recurso solicitado, lo cual es de gran utilidad en la analítica de datos, porque permite solicitar a los modelos de #[em Machine Learning] sus respectivas predicciones. Para ello, el servidor pasará las predicciones a un usuario que puede ser una aplicación web, una APP móvil o cualquier plataforma que soporte HTTP.
                br
                br
                |Una API #[em REST] brinda las siguientes ventajas en el despliegue de una solución de #[em Machine Learning]:
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Permite desplegar predicciones sincrónicas que sirven para aumentar el número de usuarios. 
                li
                  i.fas.fa-angle-right
                  | Permite combinar múltiples modelos dependiendo de los requerimientos finales de las API.
                li
                  i.fas.fa-angle-right
                  | Permite escalar la solución con el aumento de instancias a través de un balanceador.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Ejecución de la API localmente
    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-derecha 
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/5.svg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Los analistas de datos crean modelos de inteligencia artificial que requieren de aplicaciones web para que los usuarios puedan usarlos. Luego de la creación y entrenamiento de un modelo de aprendizaje automático, este se debe preparar para enviar a producción, sin embargo, es apropiado que antes pase por los ambientes de desarrollo y prueba. En estos ambientes se realizan despliegues a través de APIS locales y, por lo tanto, solo se podrá acceder a ellos desde la misma red. Para profundizar en este tipo de despliegues, se mostrará la puesta en producción local de un modelo de machine learning, utilizando el Frameworks Flash del lenguaje de programación Python.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Instalar <em>Frameworks</em>" :icono="require('@/assets/curso/temas/tema2/6.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Se recomienda instalar Python a través de la herramienta Anaconda, ya que, cuenta con librerías preinstaladas; sin embargo, el Frameworks Flash debe ser instalado de forma independiente. Una opción para instalar Flash en un entorno local es a través de una consola de comandos o Shell, donde se deben ejecutar las siguientes líneas de comandos:
            p.fst-italic pip install Flask
              br
              |pip install Flask-RESTful
          .col-md-5: img(src='@/assets/curso/temas/tema2/7.png', alt='')
      .py-4.py-md-5(titulo="Crear modelo" :icono="require('@/assets/curso/temas/tema2/8.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Una vez instaladas las herramientas, se inicia con la creación del modelo a desplegar. En este ejemplo se trabajará con un dataset o conjunto de datos de scikit-learn llamado Iris, que contiene información de una planta con tres clases de flores: virginica, setosa y versicolor. Cada clase tiene propiedades distintas que permiten clasificarla y predecir, a partir de estas variables, qué tipo de clase es.
          .col-md-5: img(src='@/assets/curso/temas/tema2/9.png', alt='')
      .py-4.py-md-5(titulo="Algoritmo de entrenamiento" :icono="require('@/assets/curso/temas/tema2/10.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Para realizar el entrenamiento se utilizará el algoritmo de árboles de decisión. Luego de entrenado el modelo, se guardará su estado con la librería joblib y de este modo, en el proceso de despliegue, solo será necesario llamar al modelo e ingresar los nuevos datos a predecir sin necesidad de entrenar nuevamente. Se inicia con la creación de un archivo de nombre modelo.py que contiene el siguiente código: 
            p.fst-italic #[span.r--v # Se importan las librerías necesarias]
              br
              |#[span.r--m from] sklearn #[span.r--m import] datasets
              br
              |#[span.r--m from] sklearn.model_selection i#[span.r--m mport] train_test_split
              br
              |#[span.r--m from] sklearn.tree #[span.r--m import] DecisionTreeClassifier
              br
              |#[span.r--m import] joblib
              br
              |#[span.r--m from] sklearn.metrics #[span.r--m import] accuracy_score


              br
              br
              |#[span.r--v # Se crea una función para el entrenamiento del modelo ]
              br
              |#[span.r--a def] #[span.r--b train_model]():

              br
              br
              |#[span.r--v # Se cargan los datos del dataset Iris a un dataframe ]
              br
              span.ms-4 iris_df = datasets.load_iris()
    
              br
              br
              |#[span.r--v # Se separa la variable objetivo del dataset ]
              br
              span.ms-3 data = iris_df.data
              br
              span.ms-3 objetivo = iris_df.target
    
              br
              br
              |#[span.r--v # Se dividen los datos en entrenamiento y pruebas (80% y 20% respectivamente) ]
              br
              span.ms-3 X_train, X_test, y_train, y_test = train_test_split(data, objetivo, test_size=#[span.r--a 0.20])

              br
              br
              |#[span.r--v # Se entrena el modelo  ]
              br
              span.ms-3 model = DecisionTreeClassifier().fit(X_train, y_train)
    
              br
              br
              |#[span.r--v # Se obtiene la predicción ] 
              br
              span.ms-3 prediccion = model.predict(X_test)
              br
              br
              |#[span.r--v # Se obtiene la precisión ]
              br
              span.ms-3 accuracy = accuracy_score(y_test, prediccion)
    
              br
              br
              |#[span.r--v # Se guarda el modelo  ]
              br
              span.ms-3 joblib.dump( model, '#[span.r--r iris-model.model]') 
              br
              span.ms-3 print(#[span.r--r 'Entrenamiento del modelo finalizado\n La exactitud es: {}]'#[span.r--d .format](accuracy))
          .col-md-5: img(src='@/assets/curso/temas/tema2/11.png', alt='')
      .py-4.py-md-5(titulo="Lanzar modelo" :icono="require('@/assets/curso/temas/tema2/12.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Con el modelo entrenado y almacenado se crea un nuevo archivo de nombre #[b app.py], que tendrá las instrucciones necesarias para lanzar el modelo a producción:
            p.fst-italic #[span.r--v # Se importan las librerías requeridas]
              br
              |#[span.r--m from] flask #[span.r--m import] Flask, jsonify, request
              br
              |#[span.r--v # importación del modelo]
              br
              |#[span.r--m from] model.Train #[span.r--m import] train_model
              br
              |#[span.r--m from] flask_restful #[span.r--m import] Api, Resource
              br
              |import os
              br
              |#[span.r--m import] joblib
              br
              br
              |#[span.r--v # Se crea una instancia de Flask]
              br
              |app = Flask(__name__)
              br
              |api = Api(app)

              br
              |#[span.r--v # Se verifica que el modelo esta entrenado]
              br
              |#[span.r--m if] #[span.r--a not] os.path.isfile(#[span.r--r ‘modelo.model’]):
              br
              span.ms-3 train_model()

              br
              br
              |modelo = joblib.load(#[span.r--r ‘modelo.model’])

              br
              br
              |#[span.r--v # Se declara una clase para hacer predicciones]
              br
              | #[span.r--a class HacerPrediccion(Resource): ]
              br
              |#[span.r--d.ms-3 @staticmethod]
              br
              |#[span.r--a.ms-3 def] #[span.r--d post]():
              br
              span.ms-4 datos_publicados = request.get_json()
              br
              span.ms-4 Longitud_sepalo = datos_publicados[#[span.r--r ‘sepal_length’]]
              br
              span.ms-4 ancho_sepalo = datos_publicados[#[span.r--r ‘sepal_width’]]
              br
              span.ms-4 Longitud_petado = datos_publicados[#[span.r--r ‘petal_length’]]
              br
              span.ms-4 ancho_petalo = datos_publicados[#[span.r--r ‘petal_width’]]
              br
              br
              |#[span.r--v # Se realiza la predicción ]
              br
              span.ms-4 prediccion = modelo.predict([[Longitud_sepalo, ancho_sepalo, Longitud_petado, ancho_petalo]])[#[span.r--a 0]]
              br
              span.ms-3 #[span.r--m if] prediccion == #[span.r--a 0]:
              br
              span.ms-4 predicted_class = #[span.r--r ‘Es una Iris setosa’]
              br
              span.ms-3 elif prediccion == 1:
              br
              span.ms-4 predicted_class = #[span.r--r ‘ Es una Iris versicolor’]
              br
              span.ms-3 else:
              br
              span.ms-4 predicted_class = #[span.r--r ‘ Es una Iris virginica’]
              br
              br
              span.ms-3 #[span.r--m return] jsonify({
              br
              span.ms-4 #[span.r--r ‘Prediccion’]: predicted_class
              br
              |})
              br
              br
              |api.add_resource(HacerPrediccion, #[span.r--r ‘/prediccion’])
              br
              br
              |if __name__ == #[span.r--r ‘__main__’]:
              br
              span.ms-2 app.run( debug = #[span.r--a True] )
          .col-md-5: img(src='@/assets/curso/temas/tema2/13.png', alt='')
      .py-4.py-md-5(titulo="Ejecutar el modelo" :icono="require('@/assets/curso/temas/tema2/14.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Finalmente se puede lanzar el modelo ejecutando #[b #[em  app.py]] desde la consola y realizar predicciones desde un navegador web a través de: #[span.r--a http://127.0.0.1:5000/]. En este punto no se tiene una interfaz gráfica que permita ingresar las variables requeridas por el modelo para realizar la predicción, por tanto, se puede utilizar una herramienta como Selenium o Postman para enviar datos a través del método POST y JSON.
          .col-md-5: img(src='@/assets/curso/temas/tema2/15.png', alt='')
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Heroku (Plataforma como servicio PaaS)     
    .row.justify-content-center.mb-5
      .col-lg-5.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/16.png', alt='')
      .col-lg-7 
        p Heroku es una plataforma como servicio (#[b PaaS]) que se ejecuta en la nube con capacidad para soportar diferentes lenguajes de programación. Al igual que todas las PaaS permite la manipulación de servidores y sus respectivas configuraciones. Esta plataforma se ha convertido en una de las más populares gracias a su enfoque en el despliegue de aplicaciones. 
          br
          br
          | Heroku despliega aplicaciones en contenedores virtuales que se ejecutan en un entorno seguro. Estos contenedores son llamados  Dynos. Heroku permite al desarrollador escalar la aplicación de forma instantánea, simplemente aumentando el número de  Dynos. (Danielsson et al., 2021). 
          br
          br
          |Las características principales de #[em Heroku] son:  
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Multifuncional" style="background-color: #dbeefe ")
            p Esta plataforma permite la ejecución de lenguajes de programación como Java, Python, Ruby, Node, Go, PHP, Scala, entre otros.
          .tarjeta.p-4(titulo="Diversidad" style="background-color: #dbeefe ")
            p Con Heroku se pueden ejecutar aplicaciones a través de contenedores y más de 200 complementos.
          .tarjeta.p-4(titulo="Seguridad" style="background-color: #dbeefe ")
            p Esta plataforma ofrece mecanismos de seguridad como certificados SSL, autenticación de múltiples factores, monitoreo de amenazas, actualizaciones de seguridad constante, mitigación de ataques de denegación de servicios o DDoS, copias de seguridad entre otros. 
          .tarjeta.p-4(titulo="Monitoreo de rendimiento" style="background-color: #dbeefe ")
            p La plataforma permite supervisar el rendimiento, la memoria, los tiempos de respuesta, la carga de la CPU y las fallas del sistema. 
          .tarjeta.p-4(titulo="Escalabilidad" style="background-color: #dbeefe ")
            p Heroku permite aumentar y disminuir automáticamente la infraestructura contratada, lo cual garantiza que las aplicaciones sigan funcionando aun cuando la carga de usuarios concurrentes es alta.
              br
              br
              |La ventaja de implementar en Heroku es que no es necesario tener en cuenta el sistema operativo subyacente, es decir, esta plataforma no requiere la instalación de actualizaciones, dependencias o el mantenimiento donde se ejecutarán las aplicaciones en producción. 
          .tarjeta.p-4(titulo="Despliegue" style="background-color: #dbeefe ")
            p Los despliegues que utilizan infraestructura como servicio (IAAS) requieren la creación de servidores virtuales y la instalación de sistemas operativos como Linux o Windows con sus versiones y actualizaciones. Por esta razón, los analistas de datos deben preocuparse porque sus modelos y aplicaciones usen requisitos compatibles con el servidor de despliegue, reduciendo los tiempos de entrega de la solución. 
              br
              br
              |Los dynos son contenedores aislados basados en sistemas operativos Linux que sirven como componentes básicos para el despliegue de modelos y aplicaciones. Se pueden crear de acuerdo con las necesidades del usuario, desde pequeños y económicos, los cuales ofrecen 1 procesador de CPU y 512 MB de capacidad de RAM, hasta contenedores más grande y costosos con procesadores de CPU ilimitados y hasta 32 GB de RAM.
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/17.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-3.mb-5(style='background-color: #c4e4fe')
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/18.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para reforzar y profundizar en este tema, lo invitamos a leer el siguiente artículo.” #[em #[b Automated Framework for Screening of Glaucoma Through Cloud Computing”]] Soorya, M., Issac, A., & Dutta, M. (2019).  Recuerde que también se encuentra disponible en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Despliegue de la API con contenedores
    .row.justify-content-center.mb-5
      .col-lg-11
      .bloque-derecha 
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/19.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Los contenedores se crearon, en principio, para implementar juegos en línea, debido a que reducen la sobrecarga del sistema, tienen tiempos de implementación más rápidos y permiten a los equipos de desarrollo pensar menos en la implementación y más en el contenido en producción. Por lo tanto, los creadores de juegos como Riot Games de League of Legends, los incorporan en sus proyectos.
    //TODO! montar al final las tarjetas
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/20.png", alt="alt")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Los contenedores 
            p.mb-0 son la mejor opción para la virtualización. Estos virtualizan el sistema operativo, por lo general Linux, en lugar del hardware, dejando que cada contenedor individual almacene el programa, sus bibliotecas y dependencias.  Debido a que no siempre necesitan un sistema operativo huésped, como lo hacen las máquinas virtuales, los contenedores pueden hacer uso de las capacidades y recursos del sistema operativo host, ya que son pequeños, rápidos y portátiles. Entre los más usados están Docker y Kubernetes.
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/21.png", alt="alt")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center La CPU
            p.mb-0 Los contenedores brindan a los desarrolladores la misma capacidad para aumentar el uso de CPU y memoria que las máquinas virtuales. Sin embargo, los contenedores van un paso más adelante, ya que, también admiten diseños de microservicios que permiten la utilización y escalado más preciso de los componentes de la aplicación. Debido a que solo un componente soporta la carga, este es un método rentable para ampliar las aplicaciones monolíticas.
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/22.png", alt="alt")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center La Implementación
            p.mb-0 Usando los contenedores, los desarrolladores pueden crear e implementar aplicaciones de forma rápida y frecuente gracias a las mejoras en los métodos de integración y a las entregas continuas, cada vez más usuales en los proyectos de desarrollo basados en metodologías ágiles. 
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4  Docker
    .row.justify-content-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/23.svg', alt='')
      .col-lg-10
        p.mb-0 Docker es una herramienta útil para empaquetar, enviar y ejecutar aplicaciones dentro de contenedores. Los contenedores y las máquinas virtuales tienen un objetivo afín: separar las aplicaciones de sus dependencias en unidades aisladas que puedan ejecutarse en cualquier entorno. Además, los contenedores y las máquinas virtuales ponen fin al requisito del hardware, lo que permite un uso más eficiente de recursos como memoria, CPU y disco, Así mismo minimizan el consumo de energía y los costos de mantenimiento. 
    .tarjeta.p-5.mb-5(style="background-color:#f5fafe ")
      SlyderA(tipo='b')
        .row
          .col-md-7.mb-4.mb-md-0
            p La principal diferencia entre Docker y máquinas virtuales está en su enfoque arquitectónico. Una máquina virtual es, básicamente, una emulación de un computador que ejecuta todo tipo de programas o aplicaciones. Las máquinas virtuales se ejecutan en la parte superior de una máquina física mediante un hipervisor. Por su parte, Docker no emula un sistema operativo, sino que está compuesto por el #[em kernel] y los componentes esenciales que soportan las aplicaciones para las que fue diseñado. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/24.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            p Docker es una de las herramientas más utilizadas por los desarrolladores de software y analistas de datos para enviar a producción las aplicaciones y modelos. Incluso gigantes tecnológicos como Amazon, Google, IBM, Microsoft y VMware desarrollan servicios para soportar Docker en sus plataformas.  
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/25.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            p La tecnología Docker se basa, principalmente, en la arquitectura cliente-servidor. El cliente se comunica con Docker, que actúa como un servidor presente en la máquina anfitriona. El servicio de Docker funciona con tres procesos principales que ejecutan, construyen y distribuyen contenedores. Tanto el contenedor Docker como el servicio pueden estar ubicados en una sola máquina. (Potdar et al., 2020)
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/26.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            p Los contenedores Docker son creados de una imagen que contiene únicamente los requerimientos necesarios para ejecutar la aplicación deseada, por ejemplo, si se quiere desplegar un modelo de machine learning en una aplicación #[em web], la imagen del contenedor Docker deberá tener instalado, como mínimo, el lenguaje de programación del modelo, ya sea Python, R o Java. Además, un servidor #[em web] como Apache o Nginx y las librerías requeridas para que la aplicación o modelo funcione correctamente.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/27.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            p La arquitectura de Docker es muy práctica para realizar pruebas, ya que permite clonar las imágenes de una misma aplicación o modelo y ejecutarlas al tiempo en el mismo servidor, como lo ilustra la siguiente figura.
              br
              br
              |En la figura se muestra que los contenedores empaquetan solo el espacio que el usuario requiere para el despliegue de la aplicación o modelo, y no el hardware, como lo haría una máquina virtual. Cada contenedor tiene su propio espacio aislado dentro del sistema para permitir que varios de ellos se ejecuten en una sola máquina host. Podemos ver que toda la arquitectura del sistema operativo se comparte entre contenedores, que junto a las bibliotecas, son las únicas partes que se crean desde cero, razón por la cual son tan livianos.
          .col-md-5
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4
              br
              span.fst-italic Arquitectura Docker
            figure
              img(src='@/assets/curso/temas/tema2/28.svg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Docker es una de las tecnologías a tener en cuenta en el proceso de despliegue de cualquier aplicación o modelo de inteligencia artificial. Las siguientes son algunas de sus ventajas:
    .tarjeta.p-4.mb-5(style="background-color: #fffcf2 ")
      LineaTiempoC.color-acento-botones
        .row(titulo="Facilidad <br> de uso").px-5
          .col-md-6.mb-4.mb-md-0
              p Docker ha brindado a desarrolladores, analistas de datos, administradores de sistemas y arquitectos la creación fácil y eficiente de contenedores para probar rápidamente aplicaciones portátiles. Además, permite que cualquier usuario empaquete las aplicaciones en un computador portátil y de igual forma, pueda implementarlas sin mayores ajustes en cualquier nube privada, pública o servidor local. Lo ideal con Docker es construir una vez y ejecutar en cualquier lugar.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/29.png', alt='Texto que describa la imagen')
        .row(titulo="Velocidad").px-5
          .col-md-6.mb-4.mb-md-0
              p Los contenedores Docker son livianos y rápidos, dado que se ejecutan en entornos separados del #[em kernel] del sistema operativo y, por tanto, hacen uso de pocos recursos. Así mismo, su creación y ejecución se puede realizar en pocos segundos en comparación con las máquinas virtuales que requieren más tiempo para iniciar el sistema operativo y cargar todos sus servicios y componentes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/30.png', alt='Texto que describa la imagen')
        .row(titulo="Docker <em>Hub</em>").px-5
          .col-md-6.mb-4.mb-md-0
              p Los usuarios de esta herramienta tienen a su disposición la variedad de posibilidades de Docker #[em Hub], un almacén de aplicaciones para imágenes de Docker que cuenta con un gran número de imágenes públicas creadas y soportadas por la comunidad que la conforma, fáciles de buscar, que cumplen con los requerimientos y están listas para desplegar y usar sin modificaciones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/31.png', alt='Texto que describa la imagen')
        .row(titulo="Modularidad y <br> flexibilidad").px-5
          .col-md-6.mb-4.mb-md-0
              p Docker permite la división de aplicaciones en módulos o contenedores, de modo que, se puede implementar la base de datos de una aplicación en un contenedor y la interfaz o visualización en otro. Con Docker, también se pueden integrar varios componentes o partes del sistema en un solo contenedor y con ello tener un único archivo para la base de datos, el #[em backend] y la interfaz de usuario, lo cual ayuda al mantenimiento futuro de la aplicación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/32.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Docker es una herramienta muy utilizada para desplegar aplicaciones y modelos de analítica de datos.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 5
      span.fst-italic Funcionamiento Docker
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/33.png', alt='Texto que describa la imagen')
      .tarjeta.bg-white(x="7.5%" y="87%" numero="").overflow-hidden
        div(style="background-color: #feca2e").w-100.py-3
        .p-4
          p.text-center Desde el repositorio de Docker Hub se descargan copias de imágenes o sistemas operativos
      .tarjeta.bg-white(x="24.5%" y="87%" numero="").overflow-hidden
        div(style="background-color: #feca2e").w-100.py-3
        .p-4
          p.text-center Las imágenes contienen todo el código necesario para ejecutar la aplicación.
      .tarjeta.bg-white(x="41.5%" y="87%" numero="").overflow-hidden
        div(style="background-color: #feca2e").w-100.py-3
        .p-4
          p.text-center Con las imágenes el analista de datos podrá construir y desplegar los contenedores.
      .tarjeta.bg-white(x="58.5%" y="87%" numero="").overflow-hidden
        div(style="background-color: #feca2e").w-100.py-3
        .p-4
          p.text-center Empresa de comercio y servicios de tecnología, integra a Docker dentro de sus servidores de computación.
      .tarjeta.bg-white(x="75.3%" y="87%" numero="").overflow-hidden
        div(style="background-color: #feca2e").w-100.py-3
        .p-4
          p.text-center Red Hat es una multinacional que provee #[em sofware] especialmente para empresas. Utiliza Docker en sus productos.
      .tarjeta.bg-white(x="92%" y="87%" numero="").overflow-hidden
        div(style="background-color: #feca2e").w-100.py-3
        .p-4
          p.text-center Empresa de comercio y servicios de tecnología, integra a Docker dentro de sus servidores de computación.
      .tarjeta.bg-white(x="50%" y="35%" numero="").overflow-hidden
        div(style="background-color: #feca2e").w-100.py-3
        .p-4
          p.text-center Herramienta que permite la creación y ejecución de aplicaciones a través de contenedores.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-3.mb-5(style='background-color: #c4e4fe')
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/18.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para reforzar y profundizar los conceptos en este tema, lo invitamos a leer el #[em e-book.]” #[em #[b Primeros pasos y puesta en práctica de una arquitectura basada en micro-servicios]]”) Gouigoux, J. (2018. Recuerde que también se encuentra disponible en el material complementario. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link


























</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

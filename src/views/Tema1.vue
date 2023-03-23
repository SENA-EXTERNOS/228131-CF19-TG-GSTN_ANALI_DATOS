<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la implementación de modelos de #[em Machine Learning]

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El proceso de implementación de modelos de #[em Machine Learning], consiste en pasar, un modelo previamente construido, hacia un ambiente donde estará disponible para ser accedido por los usuarios o clientes. Este ambiente, por lo general, está alojado en la nube y a través de Internet, proporciona disponibilidad para que se pueda usar en tiempo real. 

    .tarjeta.p-5(style="background-color: #f5fafe ")
      SlyderA(tipo='b')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La implementación o despliegue de modelos de #[em Machine learning], ofrece a las empresas ventajas competitivas en el mercado y contexto actual, porque permite integrarlos con los demás módulos del ecosistema de la organización, generar valor agregado al negocio y maximizar la operación comercial.
          .col-md-6
              //.titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 1
                br
                span.fst-italic Ecosistema

              img(src='@/assets/curso/temas/tema1/2.svg', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los modelos de #[em Machine learning] se pueden aplicar en todas las industrias; por ejemplo, en un sector como el comercio electrónico, donde los usuarios realizan compras a través de un sitio web, se implementan sugerencias o recomendaciones sobre los productos, de acuerdo con perfil del cliente, creado previamente, para maximizar la probabilidad de compra.
          .col-md-6

              img(src='@/assets/curso/temas/tema1/3.png', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Las implementaciones actuales necesitan que el flujo y procesamiento de la información sea sincrónico, es decir, que la información debe ser procesada al instante. Además, deben soportar el registro y consulta de grandes volúmenes de datos desde diferentes fuentes y tipos.  
          .col-md-6
              img(src='@/assets/curso/temas/tema1/4.png', alt='Texto que describa la imagen')

    Separador
    
    h3 Implementación de <em>Pipelines</em>
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        p Un <em>pipeline</em> de datos es un conjunto de fases y herramientas tecnológicas que se integran para realizar los procesos de transformación de los datos, desde el inicio hasta su almacenamiento persistente. La creación de <em>pipelines</em>, es un componente central de la ciencia de datos que permite crear aplicaciones para recopilar datos de millones de usuarios y procesar los resultados casi en tiempo real. 

        p Así mismo, los <em>pipelines</em> se entienden como una composición de tareas, donde cada una toma un conjunto de entradas y produce un conjunto de salidas. Estas canalizaciones combinan las tareas en formas especificadas por el analista de datos que las crea. (Cedeno, 2020)

        p Generalmente, los <em>pipelines</em> canalizan los datos hacia repositorios o lagos de datos, que se encuentran en la nube, como Hadoop, S3 de AWS o bases de datos relacionales como Redshift. 

        p Los <em>pipelines</em> tienen las siguientes propiedades:
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/5.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/6.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--a")
          div(titulo="Baja latencia")
            p Un <em>pipeline</em> permite consultas de datos a segundos de la fase final del proceso. Esto posibilita, a los científicos de datos, la creación de productos que se actualicen de forma inmediata.
          div(titulo="Escalabilidad")
            p Un <em>pipeline</em> se puede utilizar tanto para procesar desde un centenar de datos, hasta miles o millones de ellos. Los sistemas de alto rendimiento no solo deben tener la capacidad de almacenar datos, sino también ofrecer el acceso para consultas de la totalidad de estos.  
          div(titulo="Control de versiones")
            p Un <em>pipeline</em> podrá realizar cambios de versión sin interrumpir el proceso de los datos o generar pérdida de estos. 
          div(titulo="Monitoreo")
            p Los <em>pipelines</em> deben generar alertas cuando en una fase, no se reciben datos o eventos; esto, con la finalidad que el analista de datos examine la anomalía y realice los correctivos pertinentes. 
          div(titulo="<em> Testing</em>")
            p Los <em>pipelines</em> permiten las pruebas de datos cuando ingresan a una de sus fases, aun cuando no terminan en un base o lago de datos. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-5.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/7.svg', alt='')
      .col-lg-10
        p.mb-0 Uno de los estándares más comunes para el almacenamiento de datos masivos en la industria es el data #[em lake] o lago de datos, el cual permite almacenar datos semiestructurados en una base de datos distribuida y ejecutar procesos ETL para extraer los datos más relevantes y almacenarlos en las bases de datos de análisis. Se pueden usar diferentes herramientas para la base de datos distribuida, como Hadoop, Cosmos o S3.
    .row.justify-content-center.mb-5
      .col-lg-10
        //.titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2
          br
          span.fst-italic Estructura de pipeline con lago de datos
        img(src='@/assets/curso/temas/tema1/8.svg', alt='')
    .tarjeta.p-5(style="background-color: #fffcf2 ")
      LineaTiempoC.color-acento-contenido(text-small).px-5
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p Los lagos de datos proporcionan a los analistas la capacidad de procesar información desde distintos volúmenes de datos con altos niveles de tolerancia a fallas. Sin embargo, presentan complejidad en el acceso a los datos en comparación con las bases datos tradicionales, debido a la falta de herramientas o políticas de acceso.   
          .col-md-6: img(src='@/assets/curso/temas/tema1/9.png', alt='')
        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p Los <em>pipelines</em> son ampliamente usados en la automatización de flujos de trabajo, para ahorrar tiempo y aumentar la eficiencia. El conocimiento de los procesos que se van a automatizar, es importante en el diseño del <em>pipeline</em>, para que se pueda repetir en varios servicios y configurarse una sola vez. 
          .col-md-6: img(src='@/assets/curso/temas/tema1/9.png', alt='')
        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p En el campo del <em>Data Science</em>, los <em>pipelines</em> hacen que el preprocesamiento de los datos se realice muy rápido. Además, el <em>pipeline</em> se puede reutilizar en las fases de pruebas o testeo, donde los datos aún no se han transformado o con nuevos datos que ingresen al modelo. 
          .col-md-6: img(src='@/assets/curso/temas/tema1/9.png', alt='')
    
    p.mb-5(data-aos='fade-right') A continuación, se muestra un ejemplo de la creación de un <em>pipeline</em> usando: el lenguaje de programación Python, la librería Scikit Learn y la herramienta Google Colab. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/12.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta ")
          div.fst-italic(titulo="Paso1: Importar librerías ")
            p 
              span.r--v # Se importan las librerías esenciales de pandas y numpy
              br
              span.r--m import 
              | pandas 
              span.r--m as 
              | pd
              br
              span.r--m import 
              | numpy 
              span.r--m as 
              | np

              br
              br
              span.r--v # Se importa Pipeline
              br
              span.r--m from 
              | sklearn.pipeline 
              span.r--m import 
              | Pipeline

              br
              br
              span.r--v # Se importan los requisitos para el funcionamiento del modelo
              br
              |#[span.r--m from] sklearn.preprocessing #[span.r--m import] StandardScaler
              br
              |#[span.r--m from] sklearn.linear_model #[span.r--m import] LinearRegression
              br
              |#[span.r--m from] sklearn.model_selection #[span.r--m import] train_test_split
          div(titulo='Paso 2: Crear conjunto de datos')
            p Ahora crearemos un conjunto de datos para el ejemplo:
            p.fst-italic #[span.r--v # Creación aleatoria de un Dataframe]
              br
              |Caracteristica1 = np.random.randint#[span.r--v (10,99, 999)]
              br
              |Caracteristica2 = np.random.choice(np.random.randint#[span.r--v (15,200), 999)]
              br
              |a = np.random.randn#[span.r--v (999)]
              br
              |y1 = #[span.r--v 0.195]
              br
              |y2 = #[span.r--v 0.377]
              br
              |dataframe = pd.DataFrame({ #[span.r--r ‘grupo’]: np.random.choice([10, 20, 30], 999),
              br
              |#[span.r--r ‘Caracteristica1’]: Caracteristica1 ,  #[span.r--r ‘ Caracteristica2’]: Caracteristica2,
              br
              |#[span.r--r ‘Tipo’]: np.random.choice([#[span.r--v 11, 12, 21, 22, 3]], #[span.r--v 999]),
              br
              |#[span.r--r ‘Resultado’]: ((Caracteristica1*y1) + (Caracteristica2*y2) + a) })
          div(titulo='Paso 3: Aplicar modelo de regresión')
            p El conjunto de datos creado, tiene la estructura a continuación. A estos datos se les aplicará un modelo de regresión, con el fin de predecir la variable resultante.
            .row.justify-content-center.mb-5
              .col-lg-6
                //.titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura.
                  br
                  span.fst-italic  Dataframe
                img(src='@/assets/curso/temas/tema1/13.png', alt='')
          div(titulo='Paso 4: Crear lista de tuplas')
            p Para crear <em>pipelines</em>, es indispensable conocer previamente los pasos que conforman el proceso; la notación es “(nombre_del_paso', Instancia() )”, donde el primer parámetro es el nombre del paso y el segundo, su respectiva instancia. 
              br
              br
              |Luego de conocer los pasos del <em>pipeline</em>, se creará una lista de tuplas:
            p.fst-italic #[span.r--v # Crear los pasos a realizar ]
              br
              |pasos = [(#[span.r--r ‘Estandar’], StandardScaler()), 
              br
              | #[span.ms-5 (#[span.r--r ‘Regresion_Lineal’], LinearRegression()) ]]
          div(titulo='Paso 5: Crear objeto')
            p Seguidamente, se crea el objeto para el <em>pipeline</em> o tubería.
              br
              br
              | #[em tuberia = Pipeline(pasos)]

          div(titulo='Paso 6: Crear <em>dataframe</em> de entrenamiento')
            p La siguiente fase no hace parte de la creación del <em>pipeline</em>, pero será necesaria para la articulación e implantación del modelo.
            p.fst-italic #[span.r--v # Se crea un nuevo dataframe para el entrenamiento del modelo]
              br
              |df_train = dataframe
              br
              br


              |#[span.r--v #Se separa la columna que contiene la variable objetivo “Resultado”]
              br
              |X = np.array(df_train.drop([#[span.r--r ‘Resultado’]],1))
              br
              |y = np.array(df_train[#[span.r--r ‘Resultado’]])

              br
              br
              |#[span.r--v #Se dividen los datos en entrenamiento y prueba]
              br
              |X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = #[span.r--v 0.2], random_state = #[span.r--v 10])
              br
              |#[span.r--v #Se usa 20% de datos para prueba y una semilla de 10.]
          div(titulo='Uso del <em>pipeline</em>')
            p Finalmente, se hace uso del <em>pipeline</em> en los procesos de entrenamiento, medición de métricas y predicción.
            p.fst-italic #[span.r--v # Pipeline para el entrenamiento]
              br
              |tuberia.fit(X,y)
              br
              |(span.r--v="", #="", Pipeline="", para="", el="", Score="") 
              br
              |tuberia.score(X, y)
              br
              |#[span.r--v # Pipeline para la predicción](span.r--v="", #="", Pipeline="", para="", el="", Score="") 
              br
              |tuberia.predict(X_test)

    p.mb-4(data-aos='fade-right') En el ejemplo anterior se muestra la implementación de un <em>pipeline</em> para realizar el proceso de entrenamiento del modelo y la predicción de la variable resultado con el algoritmo de regresión lineal. 
    
    //TODO! agregar documento
    //.row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-3.mb-5(style='background-color: #c4e4fe')
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para profundizar en el uso de los pipelines con #[em Scikit Learn] consulte el artículo: #[em #[b ‘How to Use Sklearn Pipelines For Ridiculously Neat Code’]], disponible en 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    h3 Optimización de la implementación de modelos
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/15.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        p Generalmente, las organizaciones cuentan con datos sin procesar, recopilados y almacenados en bases de datos. Estos datos no son adecuados para entrenar modelos de #[em Machine learning] o como insumo a modelos ya existentes, para generar una predicción. El ingeniero de datos, por su parte, debe realizar una serie de transformaciones antes que los algoritmos de #[em Machine learning] puedan utilizar estas variables. A estas transformaciones, se les conoce como ingeniería de funciones. 
          br
          br
          | La ingeniería de funciones utiliza el conocimiento que el experto del dominio tiene de los datos para crear métodos que realicen imputación de datos faltantes, codificación de variables categóricas, transformación de variables numéricas y creación de nuevas características, entre otras. Estos métodos deben devolver un conjunto de datos idóneo para el entrenamiento de los modelos de aprendizaje automático. 
          br
          br
          |Los científicos de datos dedican hasta el 60 % del tiempo en tareas relacionadas con la ingeniería de funciones o características. Este tiempo se justifica por las siguientes razones:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Primera razón" style="background-color: #dbeefe")
            p Librerías populares de #[em Machine learning], como Scikit-Learn, no admiten campos faltantes o datos categóricos en sus entradas, por lo tanto, esos campos deben ser imputados con algún valor que los represente, como la media o la moda.
          .tarjeta.p-4(titulo="Segunda razón" style="background-color: #dbeefe")
            p Algunos algoritmos, como la regresión lineal, las redes neuronales y el K vecino más cercano, son sensibles a la escala variable, de modo que todos los valores de una variable deben tener la misma unidad o métrica. Por ejemplo, en un campo que contiene datos de tiempo, todos los registros deben entenderse ya sea por días, semanas, meses o años, pero no deben contener diferentes escalas. 
          .tarjeta.p-4(titulo="Tercera razón" style="background-color: #dbeefe")
            p Algunos algoritmos, como la regresión lineal, son muy sensibles a valores atípicos. Por ejemplo, si tenemos una base de datos con información sobre el costo de las casas en una región del país y uno de sus registros tiene un valor excesivamente bajo, este valor se cataloga como atípico y debe tratarse, ya sea con una imputación o una eliminación.
          .tarjeta.p-4(titulo="Cuarta razón" style="background-color: #dbeefe")
            p Se pueden obtener muchos datos útiles de los datos en crudo. Por ejemplo, fechas, series temporales, transacciones, entre otros.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/16.png', alt='')
    
    p.mb-4(data-aos='fade-right') En la creación de nuevas características para la optimización de los modelos de #[em Machine learning], se destacan los siguientes procesos de la ingeniería de funciones:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--a")
      div(titulo="Imputación de datos faltantes ")
        p Este proceso consiste en el reemplazo de valores faltantes de la base de datos, por números. Estos números, por lo general, son estimaciones estadísticas. A continuación, se muestra un ejemplo de esta técnica empleando la clase SimpleImputer de librería Scikit-Learn:
        .row
          .col-md-5.mb-4.mb-md-0
            p.fst-italic #[span.r--v # Se importan las librerias requeridas para el proceso de imputación]
              br
              |#[span.r--m from] sklearn.impute #[span.r--m import] SimpleImputer
              br
              |#[span.r--m import] numpy #[span.r--m as] np

              br
              br
              |#[span.r--v # Se crea una matriz de ejemplo con datos que contiene valores vacios]
              br
              |matriz = [[#[span.r--v 3], #[span.r--v 8]], [np.nan, #[span.r--v 6]], [#[span.r--v 1], #[span.r--v 5]]]
              br
              |print(matriz)

              br
              br
              |#[span.r--v #Salida:]  [[3, 8], [nan, 6], [1, 5]]

              br
              br
              |#[span.r--v # se crea el objeto de imputación con la media estadística]
              br
              |imputacion = SimpleImputer(missing_values=np.nan, strategy=#[span.r--r ‘mean’])

              br
              br
              |# Se imputan los valores vacíos que encuentra en la matriz 
              br
              |imputacion = imputacion.fit(matriz)
              br
              |# Se transforman los datos de la matriz
              br
              |matriz = imputacion.transform(matriz)

              br
              br
              |# se muestra la matriz transformada
              br
              |#[span.r--m print](matriz)

              br
              br
              |#Salida:  

              br
              br
              | # [[3. 8.]
              br
              |# [2. 6.]
              br
              |# [1. 5.]]
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/17.svg', alt='Texto que describa la imagen')
      div(titulo="Discretización ")
        p Este proceso ordena los valores de una variable en intervalos, con el fin de obtener un número limitado de estados. Generalmente, los analistas de datos crean intervalos de igual ancho o frecuencia, para clasificar los valores de las variables. Por ejemplo, cuando se requiere ordenar el campo de edades de una base de datos en los estados de niño, adolescente, adulto y anciano. Modelos como los árboles de decisión y Naive Bayes, tienen mejor rendimiento trabajando con valores discretos. A continuación, se muestra un ejemplo de esta técnica usando la librería Pandas de Python.
        .row
          .col-md-5.mb-4.mb-md-0
            p.fst-italic 
              span.r--v # En el ejemplo siguiente se discretiza la variable “edad”]
                br
                |# en un conjunto de datos, utilizando el método de intervalos iguales. 
                br
                | # Se utilizarán tres intervalos:


                br
                br
                |# 12-21 años
                br
                |# 22-32 años
                br
                |# 33-75 años

                br
                br
                |# Se importa la librería pandas
              br
              |#[span.r--m import] pandas#[span.r--m as] pd

              br
              br
              |#[span.r--v # Se crea un set de datos con valores aleatorios]
              br
              |datos = pd.DataFrame({#[span.r--r ‘edad’]: [#[span.r--v 19, 50, 28, 21, 29, 33, 24, 45, 45, 52,]
              br
              |#[span.r--v 51, 52, 28, 53, 55, 33, 64, 39, 22]]})

              br
              br
              |#[span.r--v # Se discretiza la variable “edad”]
              br
              |datos[#[span.r--r “edad_discreta”]] = pd.cut(datos[#[span.r--r “edad”]], bins=[#[span.r--v 12, 21, 33, 75]],
              br
              |labels=[#[span.r--r “12-21”, “22-32”, “33-75”]])

              br
              br
              |#[span.r--r # Se muestran los 5 primeros valores de forma discreta]
              br
              |#[span.r--m print](datos[#[span.r--r “edad_discreta”]].head(#[span.r--v 5]))

              br
              br
              |#[span.r--v # Salida:]

              br
              br
              |#0    12-21
              br
              |#1    33-75
              br
              |#2    22-32
              br
              |#3    12-21
              br
              |#4    22-32
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/18.svg', alt='Texto que describa la imagen')
      div(titulo="Codificación de variables categóricas ")
        p Las variables categóricas son aquellas que tienen nombres de categorías y no números, como valores; por ejemplo, los valores de la variable “estado civil” pueden ser soltero, divorciado, casado y otros. Es habitual que los analistas de datos agrupen los valores poco comunes o raros en la categoría llamada otros. A continuación, se muestra un ejemplo de esta técnica empleando la clase LabelEncoder de librería Scikit-Learn:
        .row
          .col-md-5.mb-4.mb-md-0
            p.fst-italic #[span.r--v # Se importan las librerías]
              br
              |#[span.r--m import] pandas #[span.r--m as] pd
              br
              |#[span.r--m from] sklearn.preprocessing #[span.r--m import] LabelEncoder

              br
              br
              |#[span.r--r # Se crea un dataframe con los nombres de las categorías]
              br
              |dataframe = pd.DataFrame({#[span.r--r “variable”]: [#[span.r--r ‘soltero’,’casado’,’soltero’,’divorciado’,’casado’]]})

              br
              br
              |#[span.r--v # Se crea el objeto de codificación]
              br
              |codificacion = LabelEncoder()

              br
              br
              |#[span.r--v # Se codifican las variables]
              br
              |dataframe[#[span.r--r “variable”]] = codificacion.fit_transform(dataframe[#[span.r--r “variable”]])

              br
              br
              |#[span.r--v # Se muestra el dataframe codificado]
              br
              |#[span.r--m print](dataframe)

              br
              br
              |# Salida: 

              br
              br
              |#   variable
              br
              |#0         2
              br
              |#1         0
              br
              |#2         2
              br
              |#3         1
              br
              |#4         0
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/19.svg', alt='Texto que describa la imagen')
                
    p.mb-4(data-aos='fade-right') Para una mejor comprensión del tema  #[em Machine learning], se le invita a ver el siguiente video: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-3.mb-5(style='background-color: #c4e4fe')
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-3(src="@/assets/curso/temas/tema1/20.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para realizar los ejercicios explicados en la videoclase, descargue los archivos que se usarán en la práctica:
                    br
                    br
                    |#[b Anexos:] 
                  ol.lista-ol--cuadro.d-flex.justify-content-between
                    li
                      .lista-ol--cuadro__vineta(style='background-color: #ffb30b')
                        span(style="color:black") 1
                      | Datos_A.xlsx
                    li
                      .lista-ol--cuadro__vineta(style='background-color: #ffb30b')
                        span(style="color:black") 2
                      | Datos_B.xlsx
                    li
                      .lista-ol--cuadro__vineta(style='background-color: #ffb30b')
                        span(style="color:black") 3
                      | Optimizacion_de_Dataset.ipynb
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos_videoclase.zip')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    h3  Arquitectura del sistema de #[em Machine learning]   
    .row.justify-content-center.mb-5
      .col-lg-2.col-5.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/21.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Los modelos de #[em Machine learning] se crean utilizando distintos lenguajes de programación como, Java, Python, R, Julia, entre otros. A su vez, cada lenguaje cuenta con librerías de apoyo para su construcción; por ejemplo, Python tiene Scikit-learn, TensorFlow, PyTorch, etc. De acuerdo con los diversos lenguajes y librerías con los que se pueden crear los modelos de #[em Machine learning], es necesario exportarlos en un estándar que funcione en cualquier plataforma.
    .row.justify-content-center.mb-5
      .col-lg-6
        //.titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3
          br
          span.fst-italic Exportación de Modelos Multiplataforma
        img(src='@/assets/curso/temas/tema1/22.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/23.png', alt='')
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-primario
          div(numero="1" titulo="Estándares ")
            p Los estándares para exportación de modelos de #[em Machine learning] son la solución para su portabilidad y disponibilidad, independientemente de la plataforma donde se desplieguen. Entre los estándares más populares se encuentran:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                p.mb-0 #[b PMML:] El estándar PMML (Predictive Model Markup Language), es un lenguaje de marcado que tiene como base a XML. Fue desarrollado por el Grupo de Minería de Datos (DMG), con el fin de soportar modelos estadísticos y de minería de datos. 
              li
                i.fas.fa-angle-right
                p.mb-0 #[b ONNX:] El estándar ONNX (Open Neural Network Exchange) es idóneo para los modelos de #[em Deep learning], porque produce un diagrama de la red que se guarda en un archivo binario y puede ser utilizado en distintas plataformas. 
          div(numero="2" titulo="Diseño del modelo")
            p En los ambientes de producción no importa la plataforma en que se diseñó y construyó un modelo de #[em Machine learning], ya que se debe garantizar que los componentes desarrollados puedan consumirse desde distintas plataformas, por ejemplo, que un modelo diseñado en Python pueda ser utilizado desde una aplicación con sistema operativo Android.
          div(numero="3" titulo="Ambientes de producción")
            p La ciencia de datos generalmente se realiza sobre Python y sus librerías, sin embargo, en los ambientes de producción su uso no es recomendable, debido a que su baja escalabilidad lo limita para procesar grandes cantidades de datos. El entrenamiento de modelos con #[em petabytes] de información, requiere de plataformas de #[em Big data] como Hadoop, Spark, Flink, etc., las cuales son preferidas por los sistemas de producción de las organizaciones.  
          div(numero="4" titulo="Arquitectura")
            p Los sistemas de #[em Machine learning], tienen los siguientes desafíos en los diseños de su arquitectura: 
            ul.lista-ul
              li
                i.fas.fa-angle-right
                p.mb-0 #[b Python] es ideal para la implementación de modelos de alto rendimiento; sin embargo, requiere aumentar su capacidad de procesamiento y escalabilidad, para el entrenamiento de modelos con grandes volúmenes de datos.
              li
                i.fas.fa-angle-right
                p.mb-0 Las plataformas como Hadoop, Spark o Flink, aunque solucionan el inconveniente de la escalabilidad, no son adecuadas para integraciones sincrónicas, donde el cliente requiere de altos rendimientos en los modelos.    














































</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Implementación en IAAS (AWS ECS)
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p IAAS es una plataforma donde un proveedor ofrece infraestructura tecnológica por un determinado costo de acuerdo al #[em hardware] contratado. En este enfoque el despliegue de máquinas virtuales es sencillo y solo requiere de unos cuantos clics para configurar las características como CPU, memoria RAM, disco duro y red. 
          br
          br
          |En estas plataformas existen imágenes precargadas que facilitan la elección del sistema operativo, bases de datos, #[em firewall] y demás herramientas necesarias para el despliegue de las aplicaciones y modelos de #[em machine learning]. 
          br
          br
          |El proveedor suministra una máquina y un sistema operativo, pero los usuarios tienen que instalar todos los paquetes de #[em software] y configurar los tiempos de ejecución de servidores y bases de datos que requieran las aplicaciones. En general, IAAS requiere un equipo para administrar el sistema, aplicar reglas de #[em firewall] y parches de seguridad con frecuencia.
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/1.png', alt='')
    
    
    
    #t_3_1(data-aos='fade-right')
      h3.mb-4 Introducción a AWS
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 AWS o Amazon Web Service, es una de las plataformas más populares y completas del mercado, la cual ofrece más de 200 servicios de computación y almacenamiento en la nube; fue lanzada en el año 2006 y pertenece al holding de empresas de Amazon. 
              br
              br
              |A nivel de infraestructura, esta plataforma está compuesta por regiones, zonas de disponibilidad y #[em data centers]. A continuación, se describen estos conceptos:
    
    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Regiones" style="background-color: #dbeefe")
            p Una región es una zona geográfica física en donde AWS ha implementado sus #[em data centers]. Cabe destacar que una región NO es un país y que cada una de ellas está conformada por zonas de disponibilidad.
          .tarjeta.p-4(titulo="Zonas de disponibilidad" style="background-color: #dbeefe")
            p Conformadas por 2 o más #[em data centers] ubicados en la misma zona, pero aislados geográficamente de manera estratégica.
          .tarjeta.p-4(titulo="<em>Data centers</em>" style="background-color: #dbeefe")
            p Cada uno de los #[em data centers] tiene su propia fuente de alimentación, ventilación y conectividad de red; estos se encuentran separados por aproximadamente 100 km, pero al mismo tiempo están interconectados entre sí para apoyar la zona de disponibilidad en una red redundante, que ofrece latencias muy bajas.
          .tarjeta.p-4(titulo="Servicios AWS" style="background-color: #dbeefe")
            p Para acceder a los servicios de AWS es necesario crear una cuenta a través del diligenciamiento de un formulario con los datos personales, el #[em email] del usuario y una tarjeta de crédito para la verificación de identidad y cobros futuros. 
              br
              br
              |AWS brinda una capa gratuita que permite el acceso a 18 productos y servicios durante los primeros 12 meses; sin embargo, esta capa tiene límites de uso que restringen características esenciales de las máquinas virtuales, como la capacidad de disco duro, memoria RAM y CPU.  
              br
              br
              |AWS incorpora la inteligencia artificial y los algoritmos de #[em machine learning], campos relacionados con la analítica de datos que ofrecen múltiples posibilidades y beneficios para que las empresas puedan obtener predicciones acertadas (Serrano, 2022). 
      .col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/3.svg', alt='')
    
    p.mb-4(data-aos='fade-right') AWS proporciona una serie de ventajas para las organizaciones que deseen migrar sus servicios a la nube.
    .row.justify-content-center.mb-5
      .col-lg-8
        //.titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6
          br
          span.fst-italic Infografía servicios AWS
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/4.svg', alt='Texto que describa la imagen')
          .tarjeta.p-3(x="15%" y="45%" numero="" style="background-color: #e4f8fb ")
            .h5.mb-2 Virtualización
            p AWS permite la creación de muchas instancias en un solo #[em hardware] con eficiente uso de recursos.
          .tarjeta.p-3(x="28%" y="75%" numero="" style="background-color: #e4f8fb ")
            .h5.mb-2 Uso bajo demanda
            p En AWS pagas por lo que consumes. La filosofía es pago bajo demanda.
          .tarjeta.p-3(x="50%" y="85%" numero="" style="background-color: #e4f8fb ")
            .h5.mb-2 Alta disponibilidad
            p AWS ofrece recuperación ante fallos y una enorme Red de #[em data centers] para garantizar la disponibilidad de los servicios.
          .tarjeta.p-3(x="75%" y="75%" numero="" style="background-color: #e4f8fb ")
            .h5.mb-2 Fácil de implementar
            p En AWS puedes iniciar servicios con apenas unos clics. La plataforma es sencilla y fácil de usar.
          .tarjeta.p-3(x="85%" y="45%" numero="" style="background-color: #e4f8fb ")
            .h5.mb-2 Despliegue rápido y escalable
            p En AWS los despliegues son rápidos y se pueden integrar con una gran variedad de tecnologías. Además es adaptable a las necesidades del negocio.
    
    
    #t_3_2(data-aos='fade-right')
      h3 Costos y precauciones de AWS
    p.mb-5(data-aos='fade-right') La filosofía de costos de AWS es pagar solo por lo que se utiliza, lo que supone una ventaja en comparación con otros tipos de plataformas en las que se realizan cobros por los productos y servicios que se ponen a disposición del usuario aun sin hacer uso de ellos.
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/5.png', alt='')
      .col-lg-8(data-aos="fade-left")
        SlyderF.mb-5.slyder-100(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-white.p-4(style="border: 2px solid #e8e8e8 ").h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
            p.text-center AWS cuenta con una característica de administración de costos que se puede utilizar para visualizar y analizar los datos detalladamente, de esta manera es posible estar al día con las tendencias y predecir de manera efectiva los costos futuros estimados de Amazon Web Services.
          .tarjeta.bg-white.p-4(style="border: 2px solid #e8e8e8 ").h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema3/7.svg' alt='AvatarTop')
            p.text-center AWS permite almacenar terabytes o #[em petabytes] de datos, sin generar un alto costo; sin embargo, cuando se hacen transferencias desde estos almacenamientos hacia otras instancias, el costo se eleva considerablemente, por lo es importante tener cuidado con las transferencias y descargas de los datos.  
          .tarjeta.bg-white.p-4(style="border: 2px solid #e8e8e8 ").h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema3/8.svg' alt='AvatarTop')
            p.text-center Beneficios como la alta disponibilidad y escalabilidad son atractivos para cualquier organización que desea brindar a sus usuarios servicios de calidad y sin interrupciones, sin embargo, contratar servicios de redundancia con AWS genera costos adicionales en la facturación que deben analizarse previamente para equilibrar la balanza costo/beneficio.
          .tarjeta.bg-white.p-4(style="border: 2px solid #e8e8e8 ").h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema3/9.svg' alt='AvatarTop')
            p.text-center Para minimizar los costos en AWS, se recomienda identificar y terminar las instancias y recursos no utilizados o mover los datos poco o no utilizados hacia los niveles AWS destinados para almacenamiento en frío. También es preferible utilizar sistemas operativos de código abierto, como Linux, porque otros, como los de la familia Microsoft, generan costos de licenciamiento elevados. 
    
    
    #t_3_3(data-aos='fade-right')
      h3.mb-4 Manejo de AWS
    .row.justify-content-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/10.svg', alt='')
      .col-lg-10 
        p El acceso y manipulación de la plataforma de Amazon Web Services, se puede realizar a través de su consola de administración, la CLI y AWS SDKs o Kit de desarrollo de #[em software]. Cada método tiene sus utilidades, ventajas, desventajas y tipo de usuario. A continuación, se detalla cada uno de ellos:

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Consola de administración AWS")
        .row
          .col-md-6: img(src='@/assets/curso/temas/tema3/11.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Es una interfaz gráfica fácil de utilizar mediante el navegador. La consola de administración es una aplicación web que agrupa y hace mención a un enorme conjunto de servicios para el manejo de recursos de AWS.
              br
              br
              |La consola de administración de AWS también se encuentra disponible para diferentes sistemas operativos y plataformas móviles como Android e iOS, lo cual permite que los encargados de su administración puedan ver y manejar de forma fácil los recursos y gestionar las alarmas que requieran atención desde su teléfono móvil. 
      .py-4.py-md-5(titulo="AWS CLI")
        .row
          .col-md-6: img(src='@/assets/curso/temas/tema3/12.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Proporciona acceso a la plataforma, a través de una consola de comandos discretos. Este acceso permite controlar todos los servicios de Amazon Web Services, por medio de líneas de comandos. 
              br
              br
              |La interfaz de línea de comandos (AWS CLI) es una herramienta #[em open source], que permite manipular los servicios de AWS mediante el uso de comandos en una aplicación que los interpreta y envía las órdenes a la plataforma. Todas las funciones de administración, gestión y acceso de IaaS (infraestructura como servicio) de la AWS Management Console, están disponibles en la AWS API y la AWS CLI.
      .py-4.py-md-5(titulo="AWS SD")
        .row
          .col-md-6: img(src='@/assets/curso/temas/tema3/13.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Este acceso a la plataforma de AWS incorpora conectividad, funcionalidades de la nube de AWS y facilita el acceso, mediante los diversos lenguajes de programación. AWS SDK (kit de desarrollo de #[em software]) ayuda a la codificación de diferentes lenguajes de programación para la interacción con los servicios de AWS. Existen diferentes kits de desarrollo, dependiendo del lenguaje de programación; entre los más populares se encuentran Javascript, Java y Python.
    
    
    #t_3_4(data-aos='fade-right')
      h3.mb-4 Despliegue en ECS

    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-derecha 
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/14.svg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 ECS o Elastic Container Service, es un servicio de la plataforma AWS que permite la orquestación de contenedores completamente administrados para la implementación y escalabilidad de aplicaciones. ECS ofrece las siguientes características, para potenciar los despliegues de aplicaciones y modelos de #[em Machine learning] en la nube:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Compatibilidad" :icono="require('@/assets/curso/temas/tema3/15.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Amazon ECS es compatible con Docker y permite la ejecución e integración con Docker Compose y sus repositorios, desde Docker Hub. Además, se integra con contenedores de Windows, de forma optimizada.
          .col-md-4: img(src='@/assets/curso/temas/tema3/20.png', alt='')
      .py-4.py-md-5(titulo="Administración" :icono="require('@/assets/curso/temas/tema3/16.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Amazon ECS permite, a través de un conjunto de APIs, la integración y ampliación de los servicios desplegados en la plataforma. Las APIs facilitan la creación y eliminación de clústeres y el lanzamiento y terminación de contenedores Docker. 
          .col-md-4: img(src='@/assets/curso/temas/tema3/21.png', alt='')
      .py-4.py-md-5(titulo="Programación de tareas" :icono="require('@/assets/curso/temas/tema3/17.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Amazon ECS incorpora estrategias de programación para administrar los contenedores de los diferentes #[em clústeres] con base en las necesidades de los recursos de #[em hardware] como CPU o RAM y los requerimientos de disponibilidad. 
          .col-md-4: img(src='@/assets/curso/temas/tema3/22.png', alt='')
      .py-4.py-md-5(titulo="Redes" :icono="require('@/assets/curso/temas/tema3/18.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Amazon ECS permite equilibrar el tráfico y conectividad de los contenedores con la implementación de balanceadores de carga de redes. Esto es muy útil para garantizar la disponibilidad de aplicaciones consumidas por muchos usuarios de forma concurrente.
          .col-md-4: img(src='@/assets/curso/temas/tema3/23.png', alt='')
      .py-4.py-md-5(titulo="Monitoreo" :icono="require('@/assets/curso/temas/tema3/19.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Amazon ECS, a través de la herramienta CloudWatch, proporciona a los usuarios la posibilidad de visualizar el registro de las ejecuciones y uso de los recursos de los contenedores, para realizar los respectivos ajustes de seguridad a las aplicaciones y soluciones desplegadas. 
          .col-md-4: img(src='@/assets/curso/temas/tema3/24.png', alt='')
          .row.justify-content-center.mb-5

      //.col-lg-10
        .tarjeta.p-3.mb-5(style='background-color: #c4e4fe')
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para reforzar y profundizar los conceptos de este tema, lo invitamos a ver el siguiente video: #[em #[b “Webinar, Managing Big Data Business Intelligence on the AWS Cloud”]]. #[em Amazon Web Services], & YouTube (2019). Recuerde que también se encuentra disponible en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido(style="background-color: #fff2ca").p-4.mb-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
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

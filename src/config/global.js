export default {
  global: {
    componenteFormativo: 'Despliegue de solución informática',
    descripcionCurso:
      'El despliegue de una solución informática es una de las fases más importantes dentro del proceso de la analítica de datos. Es la fase visible para el usuario o cliente del sistema, por lo tanto, las aplicaciones o modelos implementados deben garantizar su usabilidad, disponibilidad y entrega de respuestas oportunas para las problemáticas que fueron diseñadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Introducción a la implementación de modelos de <em> Machine Learning</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Implementación de <em> Pipelines</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Optimización de la implementación de modelos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Arquitectura del sistema de <em> Machine Learning</em>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Implementar modelos a través de API <em>REST</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ejecución de la API localmente',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Heroku (Plataforma como servicio PaaS)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Despliegue de la API con contenedores',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Docker',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Implementación en IAAS (AWS ECS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción a AWS',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Costos y precauciones de AWS',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Manejo de AWS',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Despliegue en ECS',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'AWS',
      referencia:
        'Amazon Web Services, & YouTube. (2019), Webinar, Managing Big Data Business Intelligence on the AWS Cloud. ',
      tipo: 'Video',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/biblioteca/seminario-web-gestionando-inteligencia-de-negocios-de-datos-masivos-sobre-aws-cloud ',
    },
    {
      tema: 'Docker',
      referencia:
        'Gouigoux, J. (2018), Docker : Primeros pasos y puesta en práctica de una arquitectura basada en micro-servicios (Epsilon). Barcelona: Ediciones ENI.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT2DOC  ',
    },
    {
      tema: 'Heroku',
      referencia:
        'Soorya, M., Issac, A., & Dutta, M. (2019). Automated Framework for Screening of Glaucoma Through Cloud Computing. Journal of Medical Systems, 43(5), 136-17.',
      tipo: 'Artículo',
      link:
        'https://www-proquest-com.bdigital.sena.edu.co/docview/2203597397?accountid=31491&pq-origsite=primo  ',
    },
    {
      tema: 'Implementación de Pipeline',
      referencia:
        'Tuychiev, Bex. (2020), How to Use Sklearn Pipelines For Ridiculously Neat Code. Towards Data Science.',
      tipo: 'Artículo',
      link:
        'https://towardsdatascience.com/how-to-use-sklearn-pipelines-for-ridiculously-neat-code-a61ab66ca90d ',
    },
    {
      tema: 'Optimización de la implementación de modelos',
      referencia:
        'Ortiz Loaiza, A. (2020), Optimización del tiempo de inferencia de un modelo de machine learning usando OpenVINO y despliegue del modelo en un entorno cloud',
      tipo: 'Artículo',
      link:
        'https://eprints.ucm.es/id/eprint/62126/1/ORTIZ_LOAIZA_Inference_time_optimization_on_a_machine_learning_model_using_OpenVINO_and_deployment_of_the_model_in_a_cloud_1603767.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'Acrónimo de Interfaz de Programación de Aplicaciones. Es un intermediario de <em> software</em> que permite que dos aplicaciones se comuniquen entre sí.',
    },
    {
      termino: 'Datacenter',
      significado:
        'Centro de datos con recursos de computación de alta disponibilidad.',
    },
    {
      termino: 'Dynos',
      significado:
        'Contenedores aislados basados en sistemas operativos Linux que sirven como componentes básicos para el despliegue de modelos y aplicaciones.',
    },
    {
      termino: 'Ingeniería de funciones',
      significado:
        'Serie de transformaciones que se realizan previo al ingreso de datos al modelo de <em> Machine Learning.</em>',
    },
    {
      termino: 'ONNX',
      significado:
        'El estándar ONNX (<em> Open Neural Network Exchange</em>) es un formato para crear diagramas de la red en un archivo binario.',
    },
    {
      termino: 'Pipeline',
      significado:
        'Conjunto de fases y herramientas tecnológicas que se integran para realizar los procesos de transformación de los datos desde el inicio hasta el su almacenamiento persistente',
    },
    {
      termino: 'PMML',
      significado:
        'El estándar PMML o <em> Predictive Model Markup Language</em> es un lenguaje de marcado que tiene como base a XML.',
    },
    {
      termino: 'Región de AWS',
      significado: 'Zona geográfica donde AWS ha creado varios Datacenters.',
    },
    {
      termino: 'REST',
      significado:
        'Acrónimo de Transferencia de Estado de Representación. Es una interfaz que permite la conexión entre varios sistemas que utilizan el protocolo HTTP.',
    },
    {
      termino: 'Zona de disponibilidad',
      significado:
        'Agrupación de 2 o más Datacenters asociados a una determinada región.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cedeno-Mieles, V., Hu, Z., Ren, Y., Deng, X., Contractor, N., Ekanayake, S., . . . Self, N. (2020), Data analysis and modeling pipelines for controlled networked social science experiments. PloS One, 15(11), E0242453. Web',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_plos_journals_2464158716  ',
    },
    {
      referencia:
        'Danielsson, P., Postema, T., & Munir, H. (2021), Heroku-Based Innovative Platform for Web-Based Deployment in Product Development at Axis. IEEE Access, 9, 10805-10819. Web ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_proquest_journals_2479888834 ',
    },
    {
      referencia:
        'López García, &. (2019), Deepaas Api: A Rest api for Machine Learning and Deep Learning models. Journal of Open Source Software, 4(42), 1517. Web ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_21105_joss_01517',
    },
    {
      referencia:
        'Potdar, A., D G, N., Kengond, S., & Mulla, M. (2020), Performance Evaluation of Docker Container and Virtual Machine. Procedia Computer Science, 171, 1419-1428. Web ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_1016_j_procs_2020_04_152',
    },
    {
      referencia:
        'Serrano, Javier. "AWS, El Rentable Negocio En La Nube De Amazon." Actualidad Económica (Madrid, Spain) (2022): 17. Web. Web',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_proquest_miscellaneous_2664218413',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

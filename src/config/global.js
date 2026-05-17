export default {
  global: {
    Name:
      'Gestión técnica de requerimientos y atención al usuario en procesos contables y tributarios',
    Description:
      'Este componente desarrolla capacidades para identificar, registrar, priorizar, gestionar y cerrar requerimientos del usuario en procesos contables y tributarios, aplicando protocolos de servicio, criterios técnicos, uso de sistemas de información y comunicación profesional orientada a la calidad, la trazabilidad y la satisfacción del usuario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Identificación del usuario y caracterización del requerimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipología de usuarios internos y externos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Necesidades de atención',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Clasificación y categorías de requerimientos contables y tributarios',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Canales de atención',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Registro inicial del requerimiento, confidencialidad y control de acceso',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión operativa y planificación de la atención',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Mapa de procesos de atención de requerimientos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Recepción, validación y procesamiento del requerimiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Priorización, tiempos de respuesta y matriz impacto-urgencia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Asignación de recursos, carga de trabajo y capacidad operativa',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Formatos de planificación, cronograma, indicadores y planes de contingencia',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de información contable y tributaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Estructura y función de los sistemas de información contable y tributaria',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Consulta de información',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Validación de datos, consistencia de registros y control de calidad de la información',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Seguridad de acceso, confidencialidad y trazabilidad en el uso de la información',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Reportes, consultas estructuradas e integración de datos para la respuesta al usuario',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Respuesta técnica y comunicación en la atención al usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios de servicio al cliente y atención responsable',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de comunicación asertiva, clara y profesional',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Estructura y lenguaje de las comunicaciones técnicas al usuario',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Elaboración de respuestas técnicas con soporte documental y normativo',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Escalamiento, canalización y seguimiento de la resolución',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cierre, trazabilidad y evaluación del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Políticas, criterios y procedimientos de cierre del requerimiento',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Registro de la solución y tiempos de atención en el sistema',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Archivo, trazabilidad y documentación final del requerimiento',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Satisfacción del usuario y mejora continua del servicio',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Verificación del cumplimiento de tiempos objetivo e indicadores de atención',
            hash: 't_5_5',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

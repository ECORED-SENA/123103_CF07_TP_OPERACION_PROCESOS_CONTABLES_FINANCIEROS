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
      termino: 'Acceso',
      significado:
        'Permiso autorizado para consultar, registrar, modificar o gestionar información dentro de un sistema o proceso institucional.',
    },
    {
      termino: 'Archivo',
      significado:
        'Conjunto organizado de documentos y registros que respaldan el trámite realizado y permiten su conservación y consulta posterior.',
    },
    {
      termino: 'Canal de atención',
      significado:
        'Medio a través del cual el usuario presenta, consulta o hace seguimiento a un requerimiento, como correo electrónico, atención presencial, teléfono o plataforma institucional.',
    },
    {
      termino: 'Canalización',
      significado:
        'Remisión formal de un requerimiento a otra área o responsable cuando su atención excede la competencia de quien lo recibe inicialmente.',
    },
    {
      termino: 'Cierre',
      significado:
        'Etapa final del trámite en la que se registra la solución, se consolida la actuación realizada y se verifica la finalización del caso.',
    },
    {
      termino: 'Clasificación',
      significado:
        'Proceso mediante el cual se identifica la naturaleza, categoría, urgencia, complejidad o alcance de un requerimiento.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Principio que protege la información frente a accesos, consultas o divulgaciones no autorizadas.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'Conjunto de medidas que regulan quién puede ingresar a sistemas, consultar datos o gestionar información según su rol y autorización.',
    },
    {
      termino: 'Escalamiento',
      significado:
        'Procedimiento mediante el cual un requerimiento es trasladado a un nivel técnico, jerárquico o funcional superior para su atención especializada.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida utilizada para evaluar el desempeño de la atención, los tiempos de respuesta, la calidad del cierre o la satisfacción del usuario.',
    },
    {
      termino: 'Priorización',
      significado:
        'Proceso de asignación de nivel de atención a un requerimiento según criterios como urgencia legal, impacto operativo o complejidad técnica.',
    },
    {
      termino: 'Protocolo de servicio',
      significado:
        'Conjunto de lineamientos y reglas que orientan la forma en que debe atenderse, registrarse y gestionarse un requerimiento del usuario.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'Solicitud, consulta, validación, reclamo, seguimiento o petición presentada por un usuario frente a un proceso contable o tributario.',
    },
    {
      termino: 'Respuesta técnica',
      significado:
        'Comunicación clara, precisa y sustentada que se emite al usuario con base en información validada y soportes verificables.',
    },
    {
      termino: 'Usuario externo',
      significado:
        'Persona natural o jurídica que se relaciona con la organización desde fuera de su estructura interna y presenta solicitudes o requerimientos.',
    },
    {
      termino: 'Usuario interno',
      significado:
        'Persona que hace parte de la organización y requiere información o gestión relacionada con los procesos contables y tributarios para cumplir sus funciones.',
    },
    {
      termino: 'Validación',
      significado:
        'Revisión técnica de datos, documentos o registros para verificar su exactitud, integridad, coherencia y pertinencia frente al requerimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (2020, noviembre). Modelo de gestión documental y administración de archivos.',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Publicacionees/V3_MGDA-min.pdf',
    },
    {
      referencia:
        'Arévalo, J. (2017). Gestión de la calidad en servicios: herramientas para satisfacción del cliente. Ediciones Uninariño.',
      link: '',
    },
    {
      referencia:
        'Berry, L. L., y Parasuraman, A. (2015). La calidad del servicio: un instrumento competitivo. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'CanalAGNColombia (2025). Videoconferencia - Organización de archivos e inventarios documentales. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=b79LuGZkK2w',
    },
    {
      referencia:
        'Congreso de Colombia. (2000, 14 de julio). Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4275',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales. Función Pública.',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2022). Concepto 186731.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=195324',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2024, diciembre). Manual operativo del Modelo Integrado de Planeación y Gestión.',
      link:
        'https://www1.funcionpublica.gov.co/documents/28587410/56548624/2024-12-18_Manual_operativo_mipg_6V-publicada.pdf',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2025). Modelo de servicio a las ciudadanías.',
      link:
        'https://www.funcionpublica.gov.co/documents/d/guest/modelo-servicio-ciudano',
    },
    {
      referencia:
        'DIAN. (2022). ¿Cómo radicar una PQRSD en servicios digitales? [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=0jwJ2G0VEa0',
    },
    {
      referencia: 'DIAN. (s. f.). Canales virtuales de atención.',
      link:
        'https://www.dian.gov.co/Paginas/canales-virtuales-de-atencion-2020.aspx',
    },
    {
      referencia:
        'Domínguez, J. L. (2012). La gestión de la calidad del servicio al cliente en las organizaciones. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Función Pública. (2024). Estrategia de servicio a las ciudadanías. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=ndLzs2zzN7k',
    },
    {
      referencia: 'Función Pública. (s. f.). Gestión documental.',
      link: 'https://www1.funcionpublica.gov.co/gestion-documental',
    },
    {
      referencia:
        'González, M. E. (2018). Protocolo de atención al cliente en servicios contables y financieros: estudio en empresas colombianas. Revista de Servucción, 8(3), 112-128.',
      link: '',
    },
    {
      referencia:
        'Grupo Geard. (2023). Procedimientos para la atención al ciudadano [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=V6EgRsNWdbM',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Education.',
      link: '',
    },
    {
      referencia:
        'MinTIC. (2025). Documento maestro de los lineamientos del Modelo de Seguridad y Privacidad de la Información.',
      link: '',
    },
    {
      referencia: 'MinTIC. (s. f.). Gobierno digital.',
      link:
        'https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/portal/Estrategias/MSPI/',
    },
    {
      referencia:
        'MinTIC. (s. f.). Modelo de Seguridad y Privacidad de la Información (MSPI).',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (2015). Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
    },
    {
      referencia:
        'República de Colombia. (2015, 30 de junio). Ley 1755 de 2015. Por medio de la cual se regula el Derecho Fundamental de Petición y se sustituye un título del Código de Procedimiento Administrativo y de lo Contencioso Administrativo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334',
    },
    {
      referencia:
        'Zeithaml, V. A. (2018). Services marketing: integrating customer focus across the firm (7.ª ed.). McGraw-Hill Education.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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

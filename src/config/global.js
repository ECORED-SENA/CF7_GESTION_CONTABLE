export default {
  global: {
    componenteFormativo:
      'Reconocimiento y medición de instrumentos financieros',
    descripcionCurso:
      'La contabilidad, como herramienta financiera y operativa para las organizaciones se enfrenta continuamente a mayores retos originados por la exactitud y puntualidad con que se requiere la información que genera, por lo cual Colombia se ha visto beneficiada con la estandarización de la información establecida por la ley 1314 de 2009 y los decretos que la reglamentan; estos ofrecen la posibilidad de preparar información financiera enmarcada dentro de unos criterios de reconocimiento de los hechos económicos y de medición, que implican importes de los elementos de la información financiera acorde con las condiciones macroeconómicas de la región donde se preparan los estados financieros.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
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
          'Instrumentos financieros: activos, pasivos e instrumentos de patrimonio.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Política Contable',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Instrumentos financieros',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Obligaciones con terceros',
            hash: 'botones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Pasivos contingentes',
            hash: 'texto_destacado',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Diferencia entre pasivo financiero e instrumento de patrimonio',
            hash: 'listas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Instrumentos financieros pasivos y activos',
            hash: 'tablas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 'imagen',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Instrumentos financieros: Activos, pasivos e instrumentos de patrimonio.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Reconocimiento, medición, presentación, revelación:',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aportes de capital',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ganancias Acumuladas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Reservas',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Otro resultado integral (ORI)',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
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
      //{
      //  icono: 'fas fa-download',
      //  titulo: 'Descargar material',
      // download: 'downloads/material.zip',
      //},
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Fernando Ibáñez Quiñonez',
        cargo: 'Instructor',
        centro: 'Centros de Servicios Financieros.',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Luis Arévalo'],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Actualicese (2020, 10 de diciembre) Metodo de la tasa de interes efectiva https://actualicese.com',
      link:
        'https://actualicese.com/metodo-del-interes-efectivo-en-que-casos-se-aplica/',
    },
    {
      referencia:
        'Legis (2020, 11 de diciembre) Reserva legales www.gerencie.com/ ',
      link:
        'https://www.gerencie.com/reserva-legal.html#Reserva_legal_en_la_sociedad_en_la_sociedad_anonima',
    },
    {
      referencia:
        'Leyes estatutarias (2020 11 de diciembre) Reserva estatutaria y ocasionales.',
      link: 'https://leyes.co/codigo_de_comercio/',
    },
    {
      referencia:
        'Norma internacional de información financiera (2020, 10 de diciembre) Activos financieros https://www.mef.gob.pe',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/niif/9_NIIF.pdf',
    },
    {
      referencia:
        'Norma internacional de información financiera (2020 10 de diciembre) patrimonio https://www.mef.gob.',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/nic/32_NIC.pdf',
    },
    {
      referencia:
        'Super contable Sage (2020 10 diciembre) Costo de amortización https://www.supercontable.com',
      link:
        'https://www.supercontable.com/informacion/Contabilidad/Definicion_de_Coste_Amortizado.html',
    },
  ],
  glosario: [
    {
      termino: 'Depreciación',
      significado:
        'Es la disminución que sufren los activos fijos, que incluyen la propiedad planta y equipo que pierden valor con motivo de la inflación y el desgaste por su uso que se hacen obsoletos.',
    },
    {
      termino: 'Método de Interés efectivo',
      significado:
        'Es un método de cálculo del costo amortizado de un activo o pasivo financiero y de distribución del ingreso por intereses o gasto por intereses a lo largo del periodo correspondiente. (Moya Moreno, 2015)',
    },
    {
      termino: 'Contabilidad',
      significado:
        'Es la técnica aplicada en el lenguaje comercial que organiza procesos financieros de forma cronológica y sistemática para apoyar en la toma de decisiones a la administración acerca de todos los procesos financieros en una empresa. ',
    },
    {
      termino: 'Cuentas del pasivo',
      significado:
        'Es el reconocimiento de las obligaciones con proveedores, entidades financieras, mediante compromisos firmados y pactados a una fecha determinada, incluye los impuestos descontados antes de pagar en las fechas estipuladas por la administración de impuestos y aduanas nacionales DIAN.',
    },
    {
      termino: 'Cuenta',
      significado:
        'Es la estructura caracterizada por códigos o números que acorde a su naturaleza identifican partidas contables inherentes a estados financieros dentro de cada una de sus estructuras, sirven para construir contabilidad y dar un orden al lenguaje de los negocios, atendiendo siempre el principio universal de la partida doble.',
    },
    {
      termino: 'Debe y Haber',
      significado:
        'Es el reconocimiento que toda cuenta contable presenta aumentos y disminuciones acorde a la naturaleza de las cuentas, en ese sentido las cuentas de activos, presentan sus aumentos en el debe y disminuciones en el haber, para las cuentas del pasivo, los aumentos de realizan en el haber y las disminuciones en el debe, para las cuentas del patrimonio, los aumentos se realizan en el haber y las disminuciones en el debe, para los ingresos los aumentos se registran en el haber y las disminuciones en el debe, en el caso de los gastos los aumentos se efectúan en el debe al igual que las cuentas de costos.',
    },
  ],
  complementario: [
    {
      texto: 'Apuntes de Contabilidad básica.',
      tipo:
        'Capítulo 1-Vilches, Troncoso, Ricardo. Apuntes de contabilidad básica, El Cid Editor, 2019. ProQuest Ebook Central',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=3161303',
    },
    {
      texto: 'Contabilidad 1',
      tipo:
        'Instrumentos Financieros-Guerrero Reyes, J. C. (2015). Contabilidad 1. Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39482?page=16',
    },
    {
      texto: 'Contabilidad general con enfoque NIIF',
      tipo:
        'Capítulo 4-Fierro Martínez, Á. M. (2016). Contabilidad general con enfoque NIIF para las pymes (5a. ed.). Ecoe Ediciones',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/70437?page=11',
    },
    {
      texto:
        'Herramientas financieras y valoración de activos y pasivos financieros bajo NIIF',
      tipo:
        'Instrumentos Financieros-Tello, L. B. (2019). Herramientas financieras y valoración de activos y pasivos financieros bajo NIIF. Editorial Universidad Icesi.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130247?page=271',
    },
    {
      texto:
        'La nueva Formación en NIIF en los programas de contabilidad y finanzas del CSF. Una aproximación desde el conocimiento de los aprendices.',
      tipo:
        'Artículo-Rincón Vargas, J. E., & Castillo Prada, K. N. (2018). La formación en NIIF en los programas de contabilidad y finanzas del CSF. Una aproximación desde el conocimiento de los aprendices. Revista Finnova: Investigación E Innovación Financiera Y Organizacional, 2(4). ',
      link: 'https://doi.org/10.23850/24629758.1389',
    },
    {
      texto: 'Prácticas de Contabilidad',
      tipo:
        'Capítulo 1-Aguilar, Lámbarry, Hanni Angélica. Prácticas de contabilidad, Grupo Editorial Patria, 2017. ProQuest Ebook Central, ',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=5213543',
    },
    {
      texto: 'Valoración de instrumentos financieros',
      tipo:
        'Pasivos financieros-Meza Orozco, J. D. J. (2016). Valoración de instrumentos financieros en NIIF para pymes (2a. ed.). Ediciones de la U.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/70273?page=5',
    },
  ],
}

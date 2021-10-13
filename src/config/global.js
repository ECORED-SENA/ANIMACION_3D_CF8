export default {
  global: {
    componenteFormativo: '<em>Rigging</em>',
    descripcionCurso:
      'El proceso de <em>rigging</em> comprende varias etapas: la creación del esqueleto base, de los sistemas de control, los gestos faciales y la implementación de ciertas líneas de código para preparar el personaje para el equipo de animación. Puede ser entendido como aquel donde se crean las bisagras y cuerdas necesarias para que una marioneta pueda moverse.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Construcción automática del <em>rigging</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Addon Rigify</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Autorig</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Skinning</em> básico',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Construcción de <em>rigging</em> manual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Alistamiento del modelo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Creación de esqueleto y sistemas de control',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em>Skinning</em> avanzado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Curvas de control',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: '<em>Rig</em> facial y <em>blendshapes</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Ajustes finales y <em>scripting</em>',
        desarrolloContenidos: true,
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
  referencias: [
    {
      referencia:
        'Osipa, J. (2010). Stop staring, facial modeling and animation done right. Wiley Publishing, Inc. ',
      link:
        'https://books.google.com.co/books?id=yPGyBwAAQBAJ&lpg=PR4&ots=g0zMgo9LQl&dq=Stop%20Staring%3A%20Facial%20Modeling%20and%20Animation%20Done%20Right&lr&hl=es&pg=PR9#v=onepage&q=Stop%20Staring:%20Facial%20Modeling%20and%20Animation%20Done%20Right&f=false',
    },

    {
      referencia:
        'Pluralsight.com. (2014). Skinning - The Vital Step for Any rigging Project. ',
      link:
        'https://www.pluralsight.com/blog/film-games/understanding-skinning-vital-step-rigging-project',
    },
  ],
  glosario: [
    {
      termino: 'Blendshape',
      terminoHtml: '<em>Blendshape</em>',
      significado:
        'deformación que se realiza sobre una geometría base para variar la posición de sus componentes, sin afectar su forma inicial',
    },
    {
      termino: 'Script',
      terminoHtml: '<em>Script</em>',
      significado:
        'serie de líneas de código que desarrollan una función específica dentro de un compilador según un lenguaje de programación',
    },
    {
      termino: 'Sistema IK',
      significado:
        'sistema de huesos basado en cinemática inversa <em>(Inverse Kinematics)</em>',
    },
    {
      termino: 'Sistema FK',
      significado:
        'sistema de huesos basado en cinemática directa <em>(Forward Kinematics)</em>',
    },
    {
      termino: 'Switch',
      terminoHtml: '<em>Switch</em>',
      significado: 'interruptor que sirve para cambiar entre sistemas',
    },
  ],
  complementario: [
    {
      texto:
        'Escardo. Club de animación 3D. (2014). <em>Tutorial de animación 3D: Brazos IK FK en Personajes / Rigs en Maya, Blender, 3DsMax, C4D.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/oEHBqiq97jA',
    },
    {
      texto:
        'ArnatoMYA. (s.f.). <em>Anatomical basis of facial expression learning tools</em>. ',
      tipo: 'Aplicación web',
      link: 'http://www.artnatomia.net/uk/artnatomya.html',
    },
    {
      texto:
        'Osipa, J. (2010). <em>Stop staring: facial modeling and animation done right</em>. ',
      tipo: 'Libro físico - Biblioteca SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000062162',
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
      {
        nombre: 'John Alexander García Ángel',
        cargo: 'Experto temático',
        centro:
          'Centro De Servicios Y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martín Moreno',
        cargo: 'Experto temático',
        centro:
          'Centro De Servicios Y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Jhon Alexander García Angel',
        cargo: 'Experto temático',
        centro:
          'Centro De Servicios Y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Fabian Andrés Gómez Pico',
        cargo: 'Experto temático',
        centro:
          'Centro De Servicios Y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Johnier Felipe Perafán',
        cargo: 'Experto temático',
        centro:
          'Centro De Servicios Y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Anllelo Andres Reina Montañez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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

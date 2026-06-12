const noticias = [
  {
    id: 22,
    titulo: "Colombia ganó la Liga de Naciones y conquistó su primer título en la historia",
    resumen: "Las cafeteras se consagraron campeonas de la primera edición de la CONMEBOL Liga de Naciones Femenina. Es el primer trofeo oficial de la selección colombiana y las convierte en el tercer combinado del continente con un título.",
    imagen: "colombia-liga-naciones.png.png",
    categoria: "internacional",
    fecha: "9 jun 2026",
    pagina: "colombia-liga-naciones.html"
  },
  {
    id: 21,
    titulo: "Claudia Martínez, 18 años, fue la máxima goleadora de la Liga de Naciones",
    resumen: "Llegó tarde al torneo, se perdió las primeras tres fechas y terminó liderando la tabla de goleadoras con 6 goles en 6 partidos. La delantera paraguaya del Washington Spirit.",
    imagen: "claudia-martinez.png.png",
    categoria: "internacional",
    fecha: "13 jun 2026",
    pagina: "claudia-martinez.html"
  },
  {
    id: 20,
    titulo: "Falfán, Morcillo, Ongaro y Giménez renuevan con DUX Logroño",
    resumen: "Cuatro jugadoras de la Selección Argentina seguirán en la Liga F española la próxima temporada. El DUX estuvo peleando el descenso y finalmente se mantuvo en primera división.",
    imagen: "argentinas-dux.png.png",
    categoria: "seleccion",
    fecha: "13 jun 2026",
    pagina: "argentinas-dux.html"
  },
  {
    id: 19,
    titulo: "Stephanie Melgarejo dio a luz a Amadeo",
    resumen: "El 8 de junio nació Amadeo, el hijo de la futbolista de Primera División. Una mamá y una deportista de alto rendimiento celebran juntas.",
    imagen: "melgarejo-amadeo.png.png",
    categoria: "apertura",
    fecha: "13 jun 2026",
    pagina: "melgarejo-amadeo.html"
  },
  {
    id: 18,
    titulo: "Cardozo y Aguirre de Vélez sufrieron rotura de ligamentos cruzados",
    resumen: "Las dos jugadoras clave del fútbol femenino de Vélez se lesionaron en el entrenamiento del martes. Un golpe muy duro para el equipo de la Primera B.",
    imagen: "velez-lesiones.png.png",
    categoria: "apertura",
    fecha: "13 jun 2026",
    pagina: "velez-lesiones.html"
  },
  {
    id: 17,
    titulo: "Este sábado arranca la fecha 9 del Apertura Femenino",
    resumen: "Siete partidos entre el sábado 13 y el lunes 15 de junio. River vs San Lorenzo es el duelo de la fecha, con el liderato en juego. Todos en vivo y gratis por LPF Play.",
    imagen: "apertura-fecha9.png.png",
    categoria: "apertura",
    fecha: "13 jun 2026",
    pagina: "apertura-fecha9.html"
  },
  {
    id: 15,
    titulo: "España, Alemania, Francia y Dinamarca se clasificaron al Mundial Femenino Brasil 2027",
    resumen: "Las cuatro selecciones europeas sellaron su boleto directo en la última jornada de los clasificatorios de la UEFA. España goleó a Islandia y defendió su título mundial.",
    imagen: "mundial-clasificadas.png",
    categoria: "internacional",
    fecha: "9 jun 2026",
    pagina: "mundial-clasificadas.html"
  },
  {
    id: 16,
    titulo: "8 rojas en el amistoso entre Brasil y EEUU: polémica arbitral y Marta furiosa",
    resumen: "El partido amistoso entre Brasil y Estados Unidos terminó con escándalo. Ocho expulsiones, dos en el banco incluidas, y Marta encaró al árbitro al finalizar el partido.",
    imagen: "brasil-eeuu-rojas.png",
    categoria: "internacional",
    fecha: "9 jun 2026",
    pagina: "brasil-eeuu-rojas.html"
  },
  {
    id: 14,
    titulo: "Argentina es subcampeona de la Liga de Naciones: venció 1-0 a Ecuador pero Colombia fue campeona",
    resumen: "Bonsegundo convirtió en el 90+5 en Quito pero Colombia goleó 4-3 a Paraguay y se quedó con el título. Argentina terminó segunda, invicta en las nueve fechas.",
    imagen: "argentina-subcampeon.png",
    categoria: "seleccion",
    fecha: "9 jun 2026",
    pagina: "argentina-subcampeon.html"
  },
  {
    id: 12,
    titulo: "Argentina vs Ecuador: hoy a las 20 por el título de la Liga de Naciones",
    resumen: "La Selección ya está clasificada al Mundial 2027 pero puede salir campeona. Si gana y Colombia no gana, la Albiceleste se queda con el título.",
    imagen: "argentina-ecuador.png",
    categoria: "seleccion",
    fecha: "9 jun 2026",
    pagina: "argentina-ecuador.html"
  },
  {
    id: 9,
    titulo: "Belgrano recibe a Talleres en el clásico cordobés",
    resumen: "Las Piratas reciben a la T este domingo a las 15.30 en el Gigante de Alberdi por la Fecha 9 del Apertura 2026.",
    imagen: "belgano-talleres.png",
    categoria: "apertura",
    fecha: "9 jun 2026",
    pagina: "belgarano-talleres.html"
  },
  {
    id: 1,
    titulo: "Argentina clasificó al Mundial Femenino Brasil 2027",
    resumen: "La Selección empató 1-1 ante Perú en Lanús. El gol que dio la clasificación fue de Mercedes Diz, de 17 años. Tercera participación mundialista consecutiva.",
    imagen: "argentina-mundial.png",
    categoria: "seleccion",
    fecha: "6 jun 2026",
    pagina: "argentina-mundial.html"
  },
  {
    id: 2,
    titulo: "Argentina vs Perú: el partido tuvo tres estadios en menos de un mes",
    resumen: "El partido por la Fecha 8 de la Liga de Naciones llegó con tres sedes confirmadas. La definitiva fue el Estadio Ciudad de Lanús.",
    imagen: "argentina-peru.png",
    categoria: "seleccion",
    fecha: "2 jun 2026",
    pagina: "argentina-peru.html"
  },
  {
    id: 3,
    titulo: "Eva Espejo es la nueva DT de la selección femenina de Ecuador",
    resumen: "La mexicana exRayadas fue anunciada por la FEF el 31 de mayo. Campeona de Liga MX Femenil en 2021, llega con el objetivo de clasificar al Mundial 2027.",
    imagen: "eva-espejo.png",
    categoria: "internacional",
    fecha: "2 jun 2026",
    pagina: "eva-espejo.html"
  },
  {
    id: 4,
    titulo: "Alexia Putellas deja el Barcelona tras 14 temporadas",
    resumen: "Se va al London City Lionesses de Inglaterra. 10 ligas, 4 Champions League y 189 goles en el club. Se despidió con un video emotivo.",
    imagen: "alexia-putellas.png",
    categoria: "internacional",
    fecha: "26 may 2026",
    pagina: "alexia-putellas.html"
  },
  {
    id: 5,
    titulo: "La Liga MX Femenil es la más vista del mundo con 22 millones",
    resumen: "67.8 millones de espectadores en 2025, superando a la NWSL, la WSL y la Frauen Bundesliga. El Clausura 2026 creció un 85% respecto al año anterior.",
    imagen: "liga-mx.png",
    categoria: "internacional",
    fecha: "26 may 2026",
    pagina: "liga-mx.html"
  },
  {
    id: 6,
    titulo: "River lidera el Apertura 2026 con 20 puntos tras empatar ante Talleres",
    resumen: "Las Millonarias igualaron 1-1 con Talleres en La Boutique con gol de Mercedes Diz. 6 victorias, 2 empates y 0 derrotas en 8 fechas.",
    imagen: "river-tabla.png",
    categoria: "apertura",
    fecha: "26 may 2026",
    pagina: "river-tabla.html"
  },
  {
    id: 7,
    titulo: "River venció 1-0 a Boca en el Superclásico femenino",
    resumen: "Las Millonarias ganaron en Casa Amarilla en el partido reprogramado de la Fecha 6. El resultado consolidó el liderazgo de River en el Apertura 2026.",
    imagen: "river-boca-superclasico.png",
    categoria: "apertura",
    fecha: "May 2026",
    pagina: "river-boca-superclasico.html"
  },
  {
    id: 8,
    titulo: "Barcelona tetracampeón de la Champions League femenina: goleó 4-0 al Lyon",
    resumen: "La final fue en Oslo. Pajor y Paralluelo con doblete cada una. Seis finales consecutivas para el Barça.",
    imagen: "barcelona-champions.png",
    categoria: "internacional",
    fecha: "25 may 2026",
    pagina: "belgrano-talleres.html"
  },
  {
    id: 13,
    titulo: "Portanova convocó a 24 jugadoras para la doble fecha de Liga de Naciones",
    resumen: "La Selección Argentina retomó los entrenamientos en Ezeiza de cara a los partidos ante Perú y Ecuador.",
    imagen: "mercedes-diz.png",
    categoria: "seleccion",
    fecha: "22 may 2026",
    pagina: "mercedes-diz.html"
  }
];

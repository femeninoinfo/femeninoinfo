const noticias = [
  {
    id: 39,
    titulo: "Ferro goleó 6-1 a Independiente en el Sintético de Caballito",
    resumen: "Con doblete de Rocío Correa y goles de Lezcano, Mirr, Abreu y Cisneros, el equipo de Juan Palermo venció con autoridad por la Fecha 10 del Apertura Femenino.",
    imagen: "ferrogoleada.png.png",
    categoria: "apertura",
    fecha: "20 jun 2026",
    pagina: "ferro-independiente-f10.html"
  },
  {
    id: 38,
    titulo: "Boca goleó 3-0 a Unión en la Fecha 10 del Apertura Femenino",
    resumen: "Las xeneizes se impusieron con autoridad en Casa Amarilla y siguen escalando posiciones en la tabla del Apertura Femenino.",
    imagen: "bocaunion.png.png",
    categoria: "apertura",
    fecha: "20 jun 2026",
    pagina: "boca-union-f10.html"
  },
  {
    id: 37,
    titulo: "Pau Gasol propone invertir 55 millones de euros en la Liga F",
    resumen: "Gasol16 Ventures lidera la propuesta junto a otros inversores. De concretarse, sería la mayor inversión privada en la historia del fútbol femenino. Los clubes votan el 29 de junio.",
    imagen: "pau-gasol-ligaf.png.png",
    categoria: "internacional",
    fecha: "17 jun 2026",
    pagina: "pau-gasol-ligaf.html"
  },
  {
    id: 36,
    titulo: "Marta sigue siendo la máxima goleadora histórica en Mundiales, por encima de Messi y Klose",
    resumen: "El hat trick de Messi en el Mundial 2026 lo igualó a Klose como máximo goleador masculino con 16 goles. El récord histórico, sin distinción de género, sigue en manos de Marta, con 17.",
    imagen: "marta.png.png",
    categoria: "internacional",
    fecha: "17 jun 2026",
    pagina: "marta-record-mundiales.html"
  },
  {
    id: 35,
    titulo: "Talleres vs Huracán, el único partido a estadio abierto de la Fecha 10",
    resumen: "De los ocho partidos que tiene la Fecha 10 del Apertura, solo uno se jugará en un estadio abierto. Las Matadoras reciben a Huracán este lunes desde las 19:00 en La Boutique.",
    imagen: "talleres.png.png",
    categoria: "apertura",
    fecha: "17 jun 2026",
    pagina: "talleres-huracan-f10.html"
  },
  {
    id: 34,
    titulo: "Las jugadoras de Unión publicaron un comunicado por falta de pago tras el ascenso a Primera División",
    resumen: "El plantel femenino visibilizó en sus redes una situación que atraviesan desde el ascenso. Aseguran que solo cobraron un mes completo y piden certezas a través del diálogo.",
    imagen: "unionreclamo.png.png",
    categoria: "apertura",
    fecha: "15 jun 2026",
    pagina: "union-reclamo.html"
  },
  {
    id: 33,
    titulo: "Racing goleó 4-0 a Banfield y lidera el Apertura Femenino con 22 puntos",
    resumen: "La Academia venció con goles de Bueno, doblete de Cossio y Maregatti. Comparte la cima con San Lorenzo pero la supera en diferencia de gol.",
    imagen: "racing-tabla.png.png",
    categoria: "apertura",
    fecha: "15 jun 2026",
    pagina: "racing-tabla-f9.html"
  },
  {
    id: 32,
    titulo: "Boca le ganó 1-0 a Independiente y suma tres puntos clave en el Apertura",
    resumen: "Las xeneizes se impusieron en el Predio Santo Domingo por la Fecha 9 y llegaron a 11 puntos, metiéndose de lleno en la pelea por los puestos de arriba.",
    imagen: "boca-independiente.png.png",
    categoria: "apertura",
    fecha: "15 jun 2026",
    pagina: "boca-independiente-f9.html"
  },
  {
    id: 31,
    titulo: "San Lorenzo le rompió el invicto a River y comparte la cima del Apertura",
    resumen: "Las Santitas ganaron 1-0 en el River Camp por la Fecha 9 y llegaron a 22 puntos. River perdió su imbatibilidad y quedó tercero en la tabla.",
    imagen: "sanlorenzo-river.png.png",
    categoria: "apertura",
    fecha: "14 jun 2026",
    pagina: "sanlorenzo-river-f9.html"
  },
  {
    id: 30,
    titulo: "Belgrano y Talleres empataron 0-0 en el clásico cordobés femenino",
    resumen: "Las Piratas jugaron con diez desde el primer tiempo tras la expulsión de Bulacio y sumaron un punto en el Gigante de Alberdi por la Fecha 9 del Apertura Femenino.",
    imagen: "belgranotalleres.png.png",
    categoria: "apertura",
    fecha: "14 jun 2026",
    pagina: "belgrano-talleres-f9.html"
  },
  {
    id: 29,
    titulo: "Lanús venció 1-0 a Unión y sale momentáneamente de la zona de descenso",
    resumen: "Las granates se impusieron en el Estadio 15 de Abril por la Fecha 9. Gol de Verón a los 20 minutos. Lanús llega a 7 puntos y supera a Newell's en la tabla.",
    imagen: "lanus.png.png",
    categoria: "apertura",
    fecha: "13 jun 2026",
    pagina: "lanus-union.html"
  },
  {
    id: 28,
    titulo: "Las 6 árbitras que van a hacer historia en el Mundial masculino 2026",
    resumen: "La FIFA designó seis mujeres en el equipo arbitral del Mundial de Estados Unidos, México y Canadá. Tori Penso y Katia Itzel García arbitran en cancha. Acá están sus nombres y sus historias.",
    imagen: "arbitras-mundial-2026.png.png",
    categoria: "internacional",
    fecha: "13 jun 2026",
    pagina: "arbitras-mundial-2026.html"
  },
  {
    id: 27,
    titulo: "Aitana Bonmatí será comentarista del Mundial masculino 2026 en TUDN",
    resumen: "La triple Balón de Oro y figura del FC Barcelona confirmó que debutará como comentarista en la Copa del Mundo 2026 junto a la cadena mexicana TUDN. Un hito para el fútbol femenino.",
    imagen: "aitana-bonmati.png.png",
    categoria: "internacional",
    fecha: "12 jun 2026",
    pagina: "aitana-bonmati.html"
  },
  {
    id: 26,
    titulo: "El fixture confirmado y el impacto histórico de jugar en casa para Sudamérica",
    resumen: "La FIFA ratificó las fechas: el Mundial de Brasil 2027 se jugará entre el 24 de junio y el 25 de julio. 32 selecciones, 64 partidos y el último torneo con este formato antes de la expansión a 48 equipos.",
    imagen: "mundial-fixture.png.png",
    categoria: "mundial2027",
    fecha: "12 jun 2026",
    pagina: "mundial-fixture.html"
  },
  {
    id: 25,
    titulo: "Las 8 sedes donde se va a escribir la historia del Mundial Femenino Brasil 2027",
    resumen: "El Maracaná albergará la final. Porto Alegre será la sede más cercana al público rioplatense. Las ocho canchas confirmadas por la FIFA para el torneo.",
    imagen: "mundial-sedes.png.png",
    categoria: "mundial2027",
    fecha: "12 jun 2026",
    pagina: "mundial-sedes.html"
  },
  {
    id: 24,
    titulo: "El mapa de la clasificación al Mundial 2027: quiénes ya tienen su lugar asegurado",
    resumen: "Argentina, Colombia, España, Alemania, Japón, Australia y más selecciones cerraron su clasificación. Repaso confederación por confederación de los 32 cupos.",
    imagen: "mundial-clasificacion.png.png",
    categoria: "mundial2027",
    fecha: "10 jun 2026",
    pagina: "mundial-clasificacion.html"
  },
  {
    id: 23,
    titulo: "Centros de entrenamiento y campamentos base: el Mundial se expande por todo Brasil",
    resumen: "Las selecciones no vivirán pegadas a los estadios. Los Team Base Camps llevan la fiebre mundialista al interior y dejan un legado directo para el fútbol femenino formativo local.",
    imagen: "mundial-campamentos.png.png",
    categoria: "mundial2027",
    fecha: "10 jun 2026",
    pagina: "mundial-campamentos.html"
  },
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

if(typeof cargarUltimaNoticia === "function") cargarUltimaNoticia();

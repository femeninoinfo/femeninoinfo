const noticias = [
  {
    id: 73,
    titulo: "Racing es el nuevo campeón del fútbol femenino argentino",
    resumen: "La Academia venció 2-0 a San Luis FC como visitante en la última fecha del Apertura y, con la caída de San Lorenzo ante Lanús, se consagró campeón por primera vez en la historia del club.",
    imagen: "racing-campeon.jpg",
    categoria: "apertura",
    fecha: "22 jul 2026",
    pagina: "racing-campeon-apertura-2026.html"
  },
  {
    id: 72,
    titulo: "La Sub-17 empató con Chile en el primer amistoso rumbo al Mundial de Marruecos",
    resumen: "La Selección femenina Sub-17, dirigida por Christian Meloni, igualó 1-1 ante Chile en Santiago con gol de Agustina Maldonado, en el primero de dos amistosos de preparación para el Mundial.",
    imagen: "seleccion-sub17-chile.jpg",
    categoria: "seleccion",
    fecha: "22 jul 2026",
    pagina: "seleccion-sub17-amistoso-chile.html"
  },
  {
    id: 71,
    titulo: "Alexia Putellas y Mapi León vuelven a compartir club en el London City Lionesses",
    resumen: "Las dos ex Barcelona se reencuentran en Inglaterra: Putellas se sumó al proyecto del London City Lionesses a comienzos de julio y días después llegó Mapi León, tras casi una década juntas en el club catalán.",
    imagen: "putellas-mapileon-londoncity.jpg",
    categoria: "internacional",
    fecha: "22 jul 2026",
    pagina: "putellas-mapileon-londoncity.html"
  },
  {
    id: 70,
    titulo: "Brasil ya promociona el Mundial Femenino 2027 en pleno Mundial masculino",
    resumen: "Con el emblema y el lema \"Vai Ser Épico\" ya presentados en Copacabana, Brasil combina campaña turística, figuras históricas como Formiga y Cristiane, y la infraestructura del Mundial masculino 2026 para instalar su próximo gran evento.",
    imagen: "brasil-mundial2027-promocion.jpg",
    categoria: "mundial2027",
    fecha: "20 jul 2026",
    pagina: "brasil-promociona-mundial-2027.html"
  },
  {
    id: 69,
    titulo: "Estefanía Banini se va a Colo-Colo",
    resumen: "Colo-Colo Femenino oficializó el regreso de la mediocampista argentina, campeona de la Copa Libertadores 2012 con el club, doce años después de su primer paso por Macul.",
    imagen: "baninicolocolo.png",
    categoria: "internacional",
    fecha: "15 jul 2026",
    pagina: "banini-colo-colo.html"
  },
  {
    id: 68,
    titulo: "San Lorenzo y Racing se juegan el título del Apertura en la última fecha",
    resumen: "Las Santitas y la Academia llegaron empatadas en 35 puntos tras la fecha 14. Si ambas ganan y terminan igualadas en 38, el título se definirá en un partido de desempate en cancha neutral.",
    imagen: "san-lorenzo-racing-definicion.jpg",
    categoria: "apertura",
    fecha: "13 jul 2026",
    pagina: "san-lorenzo-racing-definicion-titulo-f15.html"
  },
  {
    id: 67,
    titulo: "Claypole se dio de baja del fútbol femenino de ascenso por falta de recursos",
    resumen: "El club de Almirante Brown no continuará compitiendo en la Primera C Femenina de AFA. La decisión reabre el debate sobre la desigualdad estructural en las categorías inferiores.",
    imagen: "claypole-baja-ascenso.jpg",
    categoria: "apertura",
    fecha: "13 jul 2026",
    pagina: "claypole-baja-ascenso-femenino.html"
  },
  {
    id: 66,
    titulo: "Racing se quedó con el clásico de Avellaneda tras golear 3-1 a Independiente",
    resumen: "Goles de Cossio, Holzheier y Nardone liquidaron el partido en el primer tiempo. Con el triunfo, la Academia se mantuvo primera junto a San Lorenzo, con mejor diferencia de gol.",
    imagen: "racing-clasico-avellaneda.jpg",
    categoria: "apertura",
    fecha: "9 jul 2026",
    pagina: "racing-clasico-avellaneda-3-1.html"
  },
  {
    id: 65,
    titulo: "Clásico de Avellaneda femenino el jueves: Independiente recibe a Racing en el Predio Villa Domínico",
    resumen: "Las Diablas reciben a la líder del Apertura el jueves 9 de julio a las 15:00 hs. Racing llega co-líder con 29 puntos y necesita ganar para mantener la ventaja en diferencia de gol sobre San Lorenzo.",
    imagen: "independienteracing.png.png",
    categoria: "apertura",
    fecha: "7 jul 2026",
    pagina: "independiente-racing-clasico-f13.html"
  },
  {
    id: 64,
    titulo: "All Boys goleó 21-0 a Claypole y la goleada abre el debate sobre la desigualdad en el fútbol femenino",
    resumen: "El resultado se dio en la fecha 9 de la Primera B Femenina. Valeria Leguizamón marcó cinco goles. El marcador expone la brecha estructural entre clubes de la misma categoría.",
    imagen: "allboys.png.png",
    categoria: "apertura",
    fecha: "5 jul 2026",
    pagina: "allboys-claypole-21-0.html"
  },
  {
    id: 63,
    titulo: "Racing y San Lorenzo comparten la punta del Apertura con 29 puntos tras la fecha 12",
    resumen: "La Academia goleó 2-0 a Huracán y las Santitas vencieron 2-0 a Independiente. Con el mismo puntaje, la pelea por el título sigue abierta a tres fechas del cierre.",
    imagen: "racingsanlorenzo.png.png",
    categoria: "apertura",
    fecha: "5 jul 2026",
    pagina: "racing-sanlorenzo-punta-f12.html"
  },
  {
    id: 62,
    titulo: "Belgrano cortó racha de empates y venció 1-0 a Newell's con gol de Luciana Gómez",
    resumen: "Las Piratas ganaron de visitante en Rosario con un tiro libre en el segundo tiempo. Su próximo partido es ante Gimnasia La Plata el miércoles 8 de julio.",
    imagen: "belgranonewell.png.png",
    categoria: "apertura",
    fecha: "4 jul 2026",
    pagina: "belgrano-newells-f12.html"
  },
  {
    id: 61,
    titulo: "El CPKC Stadium del KC Current ampliará su capacidad de 11.500 a 18.000 espectadores",
    resumen: "El primer estadio del mundo construido exclusivamente para un equipo femenino sumará 6.500 butacas en un proyecto de 1.400 millones de dólares con apoyo municipal.",
    imagen: "nwsl.png.png",
    categoria: "internacional",
    fecha: "1 jul 2026",
    pagina: "cpkc-stadium-expansion.html"
  },
  {
    id: 60,
    titulo: "El Real Madrid no participará en el acuerdo de inversión de Pau Gasol en la Liga F",
    resumen: "El club presidido por Florentino Pérez comunicó que no se suma al acuerdo de 55 millones de euros de Gasol16 Ventures. Una cuarta parte de los clubes también rechazó la operación.",
    imagen: "realmadrid.png.png",
    categoria: "internacional",
    fecha: "1 jul 2026",
    pagina: "real-madrid-liga-f-gasol.html"
  },
  {
    id: 59,
    titulo: "El Real Madrid cerró el fichaje más caro de la historia del fútbol femenino",
    resumen: "Felicia Schröder, delantera sueca de 19 años, llega procedente del Häcken por unos 1,5 millones de euros, superando al Chelsea en la puja.",
    imagen: "fichajerealmadrid.png.png",
    categoria: "internacional",
    fecha: "28 jun 2026",
    pagina: "real-madrid-fichaje-schroder.html"
  },
  {
    id: 58,
    titulo: "Leicy Santos y Linda Caicedo llevaron el balón oficial del Mundial en homenaje al fútbol femenino",
    resumen: "La FIFA invitó a las campeonas de la Liga de Naciones a portar el Trionda antes del Colombia vs Portugal por la Copa del Mundo masculina.",
    imagen: "linda.png.png",
    categoria: "internacional",
    fecha: "28 jun 2026",
    pagina: "leicy-linda-balon-mundial.html"
  },
  {
    id: 57,
    titulo: "San Lorenzo se quedó con el clásico ante Huracán y llegó a la cima del Apertura",
    resumen: "Las Santitas ganaron 1-0 en La Quemita y alcanzaron a Racing en lo alto de la tabla con 26 puntos. La Fecha 11 cierra con la punta compartida.",
    imagen: "SANLOHURACAN.PNG.png",
    categoria: "apertura",
    fecha: "29 jun 2026",
    pagina: "huracan-sanlorenzo-resultado-f11.html"
  },
  {
    id: 56,
    titulo: "San Luis FC y Boca empataron 0-0 en la Villa Deportiva",
    resumen: "Las Gladiadoras no pudieron imponerse de local y Boca se fue con un punto que no le alcanzó para acortar distancias con Racing, líder del torneo.",
    imagen: "bocasanluis.png.png",
    categoria: "apertura",
    fecha: "28 jun 2026",
    pagina: "sanluis-boca-f11.html"
  },
  {
    id: 55,
    titulo: "Banfield y Gimnasia empataron 2-2 en el Florencio Sola",
    resumen: "Las Triperas rescataron un punto de visitante con goles de Lali Esquivel y Eliana Stabile en un encuentro intenso por la Fecha 11 del Apertura Femenino.",
    imagen: "banfieldgimnasia.png.png",
    categoria: "apertura",
    fecha: "27 jun 2026",
    pagina: "banfield-gimnasia-f11.html"
  },
  {
    id: 54,
    titulo: "Lanús venció 2-0 a SAT en el Estadio 12 de Agosto",
    resumen: "Las Granates controlaron el partido de visitante con gol de Brenda Varela y la valla en cero sostenida por Macarena Ruiz Díaz.",
    imagen: "lanussat.png.png",
    categoria: "apertura",
    fecha: "27 jun 2026",
    pagina: "sat-lanus-f11.html"
  },
  {
    id: 53,
    titulo: "River venció 1-0 a Newell's con un penal de Kimberly Campos",
    resumen: "Las Millonarias abrieron la Fecha 11 con un triunfo en el River Camp. Campos convirtió desde los 12 pasos a los 35 minutos del segundo tiempo.",
    imagen: "rivernewells.png.png",
    categoria: "apertura",
    fecha: "26 jun 2026",
    pagina: "river-newells-f11.html"
  },
  {
    id: 52,
    titulo: "Belgrano y Racing empataron 0-0 en Córdoba",
    resumen: "Las Piratas consiguieron su tercer empate consecutivo sin goles. Racing mantiene el liderazgo del Apertura con 26 puntos.",
    imagen: "belgranoracing.png.png",
    categoria: "apertura",
    fecha: "26 jun 2026",
    pagina: "belgrano-racing-f11.html"
  },
  {
    id: 51,
    titulo: "Talleres venció 3-1 a Independiente y sigue firme en la Fecha 11",
    resumen: "Las Matadoras ganaron en el Predio Villa Domínico con goles de Briceño, Félix y Ellena. Vargas descontó en contra para las locales.",
    imagen: "talleresindependiente.png.png",
    categoria: "apertura",
    fecha: "26 jun 2026",
    pagina: "independiente-talleres-f11.html"
  },
  {
    id: 50,
    titulo: "Alexia Putellas deja el Barcelona y ficha por el London City Lionesses",
    resumen: "La dos veces Balón de Oro pone fin a 14 años en el Barça y elige un proyecto emergente en Inglaterra. Firmará por dos temporadas.",
    imagen: "alexia.png.png",
    categoria: "internacional",
    fecha: "26 jun 2026",
    pagina: "alexia-london-city.html"
  },
  {
    id: 49,
    titulo: "Netflix transmitirá en exclusiva el Mundial Femenino Brasil 2027 en Estados Unidos y Canadá",
    resumen: "La FIFA firmó un acuerdo histórico con Netflix para los derechos exclusivos del torneo en 2027 y 2031. Los 64 partidos en vivo en español, inglés y francés.",
    imagen: "netflixmundial.png.png",
    categoria: "mundial2027",
    fecha: "24 jun 2026",
    pagina: "netflix-mundial-2027.html"
  },
  {
    id: 48,
    titulo: "Solana Pereyra fue operada con éxito de la rodilla derecha",
    resumen: "La arquera titular de San Lorenzo y de la Selección Argentina fue intervenida quirúrgicamente por un síndrome meniscal. La operación resultó exitosa.",
    imagen: "solana.png.png",
    categoria: "seleccion",
    fecha: "24 jun 2026",
    pagina: "solana-pereyra-cirugia.html"
  },
  {
    id: 47,
    titulo: "Faltan exactamente 365 días para el Mundial Femenino Brasil 2027",
    resumen: "Hoy se cumple un año exacto para el partido inaugural en el Maracaná. El 24 de junio de 2027 arranca la décima edición, la primera en suelo sudamericano.",
    imagen: "faltan265.png.png",
    categoria: "mundial2027",
    fecha: "24 jun 2026",
    pagina: "mundial-365-dias.html"
  },
  {
    id: 46,
    titulo: "Las Selecciones Sub 17 y Sub 20 volvieron a entrenar en el Predio Messi",
    resumen: "Las juveniles dirigidas por Christian Meloni se juntaron en Ezeiza para una nueva semana de trabajos rumbo a los Mundiales de Polonia y Marruecos.",
    imagen: "juvenilesafa.png.png",
    categoria: "seleccion",
    fecha: "24 jun 2026",
    pagina: "juveniles-afa-f11.html"
  },
  {
    id: 45,
    titulo: "Clásico confirmado en la Fecha 11: Huracán vs San Lorenzo el lunes a las 17:00",
    resumen: "Salió la programación completa de la Fecha 11 del Apertura Femenino. Las Santitas visitan La Quemita el lunes 29 de junio desde las 17:00 hs.",
    imagen: "huracansanlo.png.png",
    categoria: "apertura",
    fecha: "23 jun 2026",
    pagina: "huracan-sanlorenzo-f11.html"
  },
  {
    id: 44,
    titulo: "Talleres goleó 4-0 a Huracán en el cierre de la Fecha 10",
    resumen: "Brisa Jara, Azul Ludueña, Agustina Vargas y Josefina Félix marcaron todos en el segundo tiempo. Las Matadoras sumaron tres puntos en La Boutique.",
    imagen: "tallereshuracan.png.png",
    categoria: "apertura",
    fecha: "22 jun 2026",
    pagina: "talleres-huracan-resultado-f10.html"
  },
  {
    id: 43,
    titulo: "Colo Colo goleó 4-0 a Universidad de Chile y se quedó con el Superclásico femenino",
    resumen: "El equipo dirigido por Tatiele Silveira dominó en el Estadio Monumental con doblete de Mary Valencia ante una gran cantidad de público en las tribunas.",
    imagen: "colocolo-uchile.png.png",
    categoria: "internacional",
    fecha: "21 jun 2026",
    pagina: "colocolo-uchile.html"
  },
  {
    id: 42,
    titulo: "Banfield le ganó 2-0 a Newell's en Rosario",
    resumen: "Newell's cayó como local ante Banfield en el Centro de Entrenamientos Griffa por la Fecha 10 del Apertura Femenino.",
    imagen: "banfield-newells.png.png",
    categoria: "apertura",
    fecha: "21 jun 2026",
    pagina: "banfield-newells-f10.html"
  },
  {
    id: 41,
    titulo: "Racing le ganó 3-1 a River y se puso solo en la punta del Apertura",
    resumen: "La Academia remontó tras ir abajo en el arranque del segundo tiempo y se quedó con el triunfo en el Tita Matiussi, alcanzando el primer lugar en soledad.",
    imagen: "racing-river.png.png",
    categoria: "apertura",
    fecha: "21 jun 2026",
    pagina: "racing-river-f10.html"
  },
  {
    id: 40,
    titulo: "San Lorenzo y Belgrano empataron 0-0 y dejaron abierta la pelea por la punta",
    resumen: "Las Santitas no pudieron sacar ventaja en su casa pese a llegar como únicas líderes. Azul Muzio fue la figura del partido con varias atajadas clave.",
    imagen: "belgranosanlo.png.png",
    categoria: "apertura",
    fecha: "19 jun 2026",
    pagina: "sanlorenzo-belgrano-f10.html"
  },
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
    resumen: "Las cafeteras se consagraron campeonas de la primera edición de la CONMEBOL Liga de Naciones Femenina.",
    imagen: "colombia-liga-naciones.png.png",
    categoria: "internacional",
    fecha: "9 jun 2026",
    pagina: "colombia-liga-naciones.html"
  },
  {
    id: 21,
    titulo: "Claudia Martínez, 18 años, fue la máxima goleadora de la Liga de Naciones",
    resumen: "Llegó tarde al torneo, se perdió las primeras tres fechas y terminó liderando la tabla de goleadoras con 6 goles en 6 partidos.",
    imagen: "claudia-martinez.png.png",
    categoria: "internacional",
    fecha: "13 jun 2026",
    pagina: "claudia-martinez.html"
  },
  {
    id: 20,
    titulo: "Falfán, Morcillo, Ongaro y Giménez renuevan con DUX Logroño",
    resumen: "Cuatro jugadoras de la Selección Argentina seguirán en la Liga F española la próxima temporada.",
    imagen: "argentinas-dux.png.png",
    categoria: "seleccion",
    fecha: "13 jun 2026",
    pagina: "argentinas-dux.html"
  },
  {
    id: 19,
    titulo: "Stephanie Melgarejo dio a luz a Amadeo",
    resumen: "El 8 de junio nació Amadeo, el hijo de la futbolista de Primera División.",
    imagen: "melgarejo-amadeo.png.png",
    categoria: "apertura",
    fecha: "13 jun 2026",
    pagina: "melgarejo-amadeo.html"
  },
  {
    id: 18,
    titulo: "Cardozo y Aguirre de Vélez sufrieron rotura de ligamentos cruzados",
    resumen: "Las dos jugadoras clave del fútbol femenino de Vélez se lesionaron en el entrenamiento del martes.",
    imagen: "velez-lesiones.png.png",
    categoria: "apertura",
    fecha: "13 jun 2026",
    pagina: "velez-lesiones.html"
  },
  {
    id: 17,
    titulo: "Este sábado arranca la fecha 9 del Apertura Femenino",
    resumen: "Siete partidos entre el sábado 13 y el lunes 15 de junio. River vs San Lorenzo es el duelo de la fecha.",
    imagen: "apertura-fecha9.png.png",
    categoria: "apertura",
    fecha: "13 jun 2026",
    pagina: "apertura-fecha9.html"
  },
  {
    id: 16,
    titulo: "8 rojas en el amistoso entre Brasil y EEUU: polémica arbitral y Marta furiosa",
    resumen: "El partido amistoso entre Brasil y Estados Unidos terminó con escándalo. Ocho expulsiones y Marta encaró al árbitro al finalizar el partido.",
    imagen: "brasil-eeuu-rojas.png",
    categoria: "internacional",
    fecha: "9 jun 2026",
    pagina: "brasil-eeuu-rojas.html"
  },
  {
    id: 15,
    titulo: "España, Alemania, Francia y Dinamarca se clasificaron al Mundial Femenino Brasil 2027",
    resumen: "Las cuatro selecciones europeas sellaron su boleto directo en la última jornada de los clasificatorios de la UEFA.",
    imagen: "mundial-clasificadas.png",
    categoria: "internacional",
    fecha: "9 jun 2026",
    pagina: "mundial-clasificadas.html"
  },
  {
    id: 14,
    titulo: "Argentina es subcampeona de la Liga de Naciones: venció 1-0 a Ecuador pero Colombia fue campeona",
    resumen: "Bonsegundo convirtió en el 90+5 en Quito pero Colombia goleó 4-3 a Paraguay y se quedó con el título.",
    imagen: "argentina-subcampeon.png",
    categoria: "seleccion",
    fecha: "9 jun 2026",
    pagina: "argentina-subcampeon.html"
  },
  {
    id: 13,
    titulo: "Portanova convocó a 24 jugadoras para la doble fecha de Liga de Naciones",
    resumen: "La Selección Argentina retomó los entrenamientos en Ezeiza de cara a los partidos ante Perú y Ecuador.",
    imagen: "mercedes-diz.png",
    categoria: "seleccion",
    fecha: "22 may 2026",
    pagina: "mercedes-diz.html"
  },
  {
    id: 12,
    titulo: "Argentina vs Ecuador: hoy a las 20 por el título de la Liga de Naciones",
    resumen: "La Selección ya está clasificada al Mundial 2027 pero puede salir campeona.",
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
    id: 8,
    titulo: "Barcelona tetracampeón de la Champions League femenina: goleó 4-0 al Lyon",
    resumen: "La final fue en Oslo. Pajor y Paralluelo con doblete cada una. Seis finales consecutivas para el Barça.",
    imagen: "barcelona-champions.png",
    categoria: "internacional",
    fecha: "25 may 2026",
    pagina: "belgrano-talleres.html"
  },
  {
    id: 7,
    titulo: "River venció 1-0 a Boca en el Superclásico femenino",
    resumen: "Las Millonarias ganaron en Casa Amarilla en el partido reprogramado de la Fecha 6.",
    imagen: "river-boca-superclasico.png",
    categoria: "apertura",
    fecha: "May 2026",
    pagina: "river-boca-superclasico.html"
  },
  {
    id: 6,
    titulo: "River lidera el Apertura 2026 con 20 puntos tras empatar ante Talleres",
    resumen: "Las Millonarias igualaron 1-1 con Talleres en La Boutique con gol de Mercedes Diz.",
    imagen: "river-tabla.png",
    categoria: "apertura",
    fecha: "26 may 2026",
    pagina: "river-tabla.html"
  },
  {
    id: 5,
    titulo: "La Liga MX Femenil es la más vista del mundo con 22 millones",
    resumen: "67.8 millones de espectadores en 2025, superando a la NWSL, la WSL y la Frauen Bundesliga.",
    imagen: "liga-mx.png",
    categoria: "internacional",
    fecha: "26 may 2026",
    pagina: "liga-mx.html"
  },
  {
    id: 4,
    titulo: "Alexia Putellas deja el Barcelona tras 14 temporadas",
    resumen: "Se va al London City Lionesses de Inglaterra. 10 ligas, 4 Champions League y 189 goles en el club.",
    imagen: "alexia-putellas.png",
    categoria: "internacional",
    fecha: "26 may 2026",
    pagina: "alexia-putellas.html"
  },
  {
    id: 3,
    titulo: "Eva Espejo es la nueva DT de la selección femenina de Ecuador",
    resumen: "La mexicana exRayadas fue anunciada por la FEF el 31 de mayo.",
    imagen: "eva-espejo.png",
    categoria: "internacional",
    fecha: "2 jun 2026",
    pagina: "eva-espejo.html"
  },
  {
    id: 2,
    titulo: "Argentina vs Perú: el partido tuvo tres estadios en menos de un mes",
    resumen: "El partido por la Fecha 8 de la Liga de Naciones llegó con tres sedes confirmadas.",
    imagen: "argentina-peru.png",
    categoria: "seleccion",
    fecha: "2 jun 2026",
    pagina: "argentina-peru.html"
  },
  {
    id: 1,
    titulo: "Argentina clasificó al Mundial Femenino Brasil 2027",
    resumen: "La Selección empató 1-1 ante Perú en Lanús. El gol que dio la clasificación fue de Mercedes Diz, de 17 años.",
    imagen: "argentina-mundial.png",
    categoria: "seleccion",
    fecha: "6 jun 2026",
    pagina: "argentina-mundial.html"
  }
];

if(typeof cargarUltimaNoticia === "function") cargarUltimaNoticia();

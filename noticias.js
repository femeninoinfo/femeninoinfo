const noticias = [
  {
    id: 150,
    titulo: "Primera B: Platense y Rosario Central, a un paso del ascenso",
    resumen: "Tras la fecha 15, Platense sigue puntero en la Zona A y está a dos puntos de subir. En la Zona B, Rosario Central llegó a 41 puntos y puede ascender este fin de semana con solo sumar un punto.",
    imagen: "https://rosariocentral.com/wp-content/uploads/2026/08/IMG_6464.jpg-1024x683.jpeg",
    categoria: "apertura",
    fecha: "4 sep 2026",
    pagina: "primera-b-platense-central-ascenso.html"
  },
  {
    id: 149,
    titulo: "Mercedes Diz y Dolores Delgado, las hijas de futbolistas que ilusionan en el Mundial Sub 20",
    resumen: "La delantera de River y la de Real Madrid, ambas de 17 años, son hijas de exfutbolistas profesionales y se consolidaron como dos de las figuras de la Selección Sub 20 en Polonia.",
    imagen: "https://www.infobae.com/resizer/v2/RCLMCM62LJBHJALFISDQ35KPWQ.jpg?auth=b59fcb3f6e78f6e6bc2bef17e7dbe52777cf268a18a0f654f3bcec4ee787e9b3&smart=true&width=1200&height=630&quality=85",
    categoria: "seleccion",
    fecha: "4 sep 2026",
    pagina: "mercedes-diz-dolores-delgado-hijas-futbolistas.html"
  },
  {
    id: 148,
    titulo: "Gimnasia y Newell's, las únicas sin sumar en seis fechas del Clausura",
    resumen: "Ambos equipos perdieron sus seis partidos y comparten el último lugar de la tabla con cero puntos. Este viernes buscan su primer punto ante San Lorenzo y Racing.",
    imagen: "https://elfemenino.com.ar/wp-content/uploads/2022/02/PORTADAS_MICROSITIO_GIMNASIALP_PAGINAWEB_EF.jpg",
    categoria: "apertura",
    fecha: "4 sep 2026",
    pagina: "gimnasia-newells-sin-sumar-puntos-clausura.html"
  },
  {
    id: 147,
    titulo: "Así es el fixture completo de la Selección Argentina Sub 20 en el Mundial de Polonia",
    resumen: "La Albiceleste debuta este sábado ante Polonia y luego enfrenta a Benín y México en la fase de grupos. Con la clasificación a octavos de 2024 como antecedente, así es el camino completo del equipo de Christian Meloni.",
    imagen: "https://www.infobae.com/resizer/v2/LDBXSA4UFFC7XCF737K3V36KM4.jpg?auth=db3fda33c5b95b5990d2c0b3522acaf10a81afdeec2dddde7234e17f2bd967eb&smart=true&width=1200&height=675&quality=90",
    categoria: "seleccion",
    fecha: "4 sep 2026",
    pagina: "sub20-fixture-mundial-argentina.html"
  },
  {
    id: 146,
    titulo: "El fútbol femenino bate récord: los clubes gastaron 29 millones de dólares en fichajes en 2026",
    resumen: "Según la FIFA se registraron 1.406 traspasos internacionales en el fútbol profesional femenino, un 19,2% más que el récord anterior. Fichajes como los de Alexia Putellas y Kadidiatou Diani impulsaron la cifra.",
    imagen: "https://editorial.aristeguinoticias.com/wp-content/uploads/2026/09/Futbol-femneil-fifa-030926-720x450.jpg",
    categoria: "internacional",
    fecha: "4 sep 2026",
    pagina: "futbol-femenino-record-fichajes-2026.html"
  },
  {
    id: 145,
    titulo: "Alexia Putellas lanza Eleven TV para transmitir la Women's Super League gratis en España",
    resumen: "El nuevo canal de YouTube de la capitana catalana ofrecerá un partido de la WSL por jornada, en alianza con Mundo Maldini. El estreno fue este viernes con el debut de Putellas ante el Manchester United.",
    imagen: "https://lasfutbolistas.com/wp-content/uploads/2026/08/Eleven-TV-by-Alexia-1024x567.jpg",
    categoria: "internacional",
    fecha: "4 sep 2026",
    pagina: "alexia-putellas-eleven-tv-wsl.html"
  },
  {
    id: 144,
    titulo: "La TV Pública transmitirá todos los partidos de la Selección en el Mundial Sub-20",
    resumen: "La cobertura arranca este sábado 5 de septiembre con el debut de Argentina frente a Polonia desde las 10:00. Los partidos también se podrán ver por DirecTV.",
    imagen: "IMG_1532.jpg",
    categoria: "seleccion",
    fecha: "4 sep 2026",
    pagina: "sub20-tv-publica-transmision.html"
  },
  {
    id: 143,
    titulo: "Agustina Maldonado, la capitana de 17 años de la Sub 20 en el Mundial de Polonia",
    resumen: "La defensora de River Plate, formada en All Boys de Santa Rosa, llevará la cinta de la Selección Argentina Sub-20 en la Copa Mundial Femenina de Polonia 2026.",
    imagen: "46234394-995E-44E4-A058-3EEE3B33ACB2.jpg",
    categoria: "seleccion",
    fecha: "4 sep 2026",
    pagina: "sub20-agustina-maldonado-capitana.html"
  },
  {
    id: 142,
    titulo: "La Sub 20 ya entrena en Katowice a días del debut ante Polonia",
    resumen: "El plantel argentino llegó a suelo europeo y realizó su primer entrenamiento, con trabajos tácticos y preparación específica para las arqueras, a días del debut en la Copa Mundial Femenina Sub 20.",
    imagen: "F8CEC829-CA19-477C-986C-7E07E65BB847.jpg",
    categoria: "seleccion",
    fecha: "4 sep 2026",
    pagina: "sub20-katowice-entrenamiento.html"
  },
  {
    id: 141,
    titulo: "La RFEF ultima un acuerdo para que las jugadoras de la selección puedan congelar óvulos",
    resumen: "La federación firmará en las próximas semanas un convenio con una clínica de fertilidad para facilitar que las futbolistas encajen la maternidad con su carrera. Alexia Putellas trasladó la inquietud como una de las capitanas.",
    imagen: "https://theobjective.com/wp-content/uploads/2026/08/alexia-putellas-seleccion.jpg",
    categoria: "internacional",
    fecha: "1 sep 2026",
    pagina: "rfef-congelacion-ovulos-jugadoras.html"
  },
  {
    id: 140,
    titulo: "Quito, confirmada como sede de la Copa Libertadores Femenina 2026",
    resumen: "La CONMEBOL ratificó a la capital ecuatoriana como escenario del torneo, que se juega del 15 al 31 de octubre. Belgrano, campeón del Trofeo de Campeonas 2025, será el único representante argentino.",
    imagen: "https://imagenes.primicias.ec/files/og_thumbnail/files/fp/uploads/2025/10/06/68e426452d949.r_d.1324-1603-0.jpeg",
    categoria: "internacional",
    fecha: "1 sep 2026",
    pagina: "libertadores-femenina-2026-sede-quito.html"
  },
  {
    id: 139,
    titulo: "Arrancó la Liga F: el Barcelona goleó 5-0 y es el primer líder",
    resumen: "El vigente campeón goleó al Costa Adeje Tenerife en el Johan Cruyff en la Jornada 1. El Real Madrid ganó el derbi madrileño 3-2 y el recién ascendido Logroño United dio la sorpresa al vencer a la Real Sociedad.",
    imagen: "https://ligaf.es/media/images/img_news/3996.jpg",
    categoria: "internacional",
    fecha: "31 ago 2026",
    pagina: "liga-f-arranco-jornada-1-2026-27.html"
  },
  {
    id: 138,
    titulo: "Independiente, puntero del histórico Sub-12 tras la fecha 3",
    resumen: "El primer torneo oficial de AFA para nacidas entre 2014 y 2016 tuvo su tercera fecha. Independiente le ganó a UAI Urquiza y quedó puntero con 9 puntos, escoltado por Platense y Banfield.",
    imagen: "https://elfemenino.com.ar/wp-content/uploads/2026/08/Screenshot_20260826_213611_Instagram-400x250.jpg",
    categoria: "apertura",
    fecha: "28 ago 2026",
    pagina: "independiente-puntero-sub12-fecha3.html"
  },
  {
    id: 137,
    titulo: "Rosario Central, a un paso del ascenso a la Primera A",
    resumen: "Goleó 4-0 a Defensores de Belgrano con gol de la estadounidense Zoey Kuhn y lidera la Zona B de la Primera B con nueve puntos de ventaja. Podría sellar el ascenso ante All Boys en la próxima fecha.",
    imagen: "https://www.infobae.com/resizer/v2/L7MTQNI6FFGSFOWJQMDNQ5TUUI.jpg?auth=6bf5e3509b689b6136fa4ceb9b76c6adb0a5042e539d5bd31a28405a7a58dca2&smart=true&width=1200&height=800&quality=95",
    categoria: "apertura",
    fecha: "31 ago 2026",
    pagina: "rosario-central-al-borde-ascenso-primera-b.html"
  },
  {
    id: 136,
    titulo: "Banfield venció a Ferro y es el nuevo puntero tras completarse la Fecha 6 del Clausura",
    resumen: "Se jugaron siete de los ocho partidos de la fecha. El Superclásico entre River y Boca sigue postergado.",
    imagen: "river-boca-superclasico.png",
    categoria: "apertura",
    fecha: "1 sep 2026",
    pagina: "fixture-fecha-6-clausura.html"
  },
  {
    id: 135,
    titulo: "El Superclásico femenino de la fecha 6 entre River y Boca quedó postergado",
    resumen: "AFA confirmó que el partido entre River Plate y Boca Juniors no se disputará en la fecha prevista. Todavía no hay nueva fecha ni motivo oficial confirmados.",
    imagen: "river-boca-superclasico.png",
    categoria: "apertura",
    fecha: "28 ago 2026",
    pagina: "superclasico-femenino-postergado.html"
  },
  {
    id: 134,
    titulo: "Real Madrid, Chelsea y Wolfsburg juegan hoy la ida de la última ronda clasificatoria a la Champions femenina",
    resumen: "Nueve series definen los últimos boletos a la fase de liga 2026/27 de la Women's Champions League. Real Madrid visita a Ajax, Chelsea recibe a Real Sociedad y Wolfsburg se mide con Inter, todas con la ida programada para este miércoles.",
    imagen: "https://assets.realmadrid.com/is/image/realmadrid/ND-AMISTOSO-FEMENINO-DEPORTIVO-ALEGRIA-GRUPO_MJ25422?wid=1200&hei=675",
    categoria: "internacional",
    fecha: "26 ago 2026",
    pagina: "real-madrid-ajax-champions-league-femenina.html"
  },
  {
    id: 133,
    titulo: "El Clásico femenino Barcelona-Real Madrid se jugará en el Spotify Camp Nou",
    resumen: "La Liga F confirmó que el partido de la jornada 6, el domingo 4 de octubre, será el primero entre ambos equipos en el estadio azulgrana. Las entradas ya están a la venta desde 25 euros.",
    imagen: "clasico-barcelona-real-madrid-camp-nou.jpg",
    categoria: "internacional",
    fecha: "26 ago 2026",
    pagina: "clasico-barcelona-real-madrid-camp-nou.html"
  },
  {
    id: 132,
    titulo: "Siete de los 14 equipos de la WSL serán dirigidos por mujeres en la 2026/27",
    resumen: "Arsenal, Chelsea, Manchester United, West Ham, Birmingham City, Crystal Palace y Charlton Athletic arrancan la temporada con entrenadoras al mando, en una de las ligas más importantes del mundo.",
    imagen: "wsl-dt-mujeres-2026-27.jpg",
    categoria: "internacional",
    fecha: "26 ago 2026",
    pagina: "wsl-siete-entrenadoras-2026-27.html"
  },
  {
    id: 131,
    titulo: "El sorteo del Mundial Femenino 2027 será el 11 de diciembre en Río de Janeiro",
    resumen: "La FIFA confirmó que el Museo de Arte Moderno de Río albergará el sorteo de grupos, con más de 1000 invitados esperados. La cita definirá los cruces de la fase de grupos rumbo al torneo.",
    imagen: "sorteo-mundial-2027-diciembre-rio.jpg",
    categoria: "mundial2027",
    fecha: "26 ago 2026",
    pagina: "sorteo-mundial-2027-rio.html"
  },
  {
    id: 130,
    titulo: "Ya se palpita: la Sub 20 debuta ante Polonia el 5 de septiembre en el Mundial",
    resumen: "La Selección argentina Sub 20 conoció el fixture completo de su grupo en Polonia 2026: debuta ante las anfitrionas, sigue ante Benín y cierra la fase de grupos frente a México, todo en Katowice.",
    imagen: "https://assets1.afa.com.ar/2026/DSC_3517.JPG",
    categoria: "seleccion",
    fecha: "25 ago 2026",
    pagina: "sub20-debut-polonia-mundial-2026.html"
  },
  {
    id: 129,
    titulo: "La Sub 17 ya sabe con quién se juega el Mundial: Marruecos, Nueva Zelanda y Alemania",
    resumen: "En su primera clasificación histórica a un Mundial de la categoría, la Selección argentina Sub 17 integrará el Grupo A del Mundial de Marruecos 2026 junto al anfitrión, a Nueva Zelanda y a Alemania.",
    imagen: "https://assets1.afa.com.ar/2026/Lau/Web-clasificadas.jpg",
    categoria: "seleccion",
    fecha: "25 ago 2026",
    pagina: "sub17-grupo-marruecos-mundial-2026.html"
  },
  {
    id: 128,
    titulo: "Ecuador ya sabe con quién se juega el repechaje sudamericano rumbo a Brasil 2027",
    resumen: "En el sorteo realizado en Zúrich, Ecuador quedó emparejado con Ghana, Sudáfrica y China Taipéi en la fase preliminar del repechaje que reparte los últimos tres boletos para el Mundial.",
    imagen: "https://images.copaamerica.com/editions/copa-america-femenina-2025/teams/covers/ecuador.webp",
    categoria: "mundial2027",
    fecha: "25 ago 2026",
    pagina: "ecuador-repechaje-brasil-2027.html"
  },
  {
    id: 127,
    titulo: "Ya son más de 730 mil los interesados en entradas para el Mundial de Brasil 2027",
    resumen: "A menos de un año del partido inaugural, la organización reveló que la mitad de los registrados son extranjeros. Argentina aparece entre los países con mayor demanda, junto a México, Estados Unidos y Colombia.",
    imagen: "https://elfemenino.com.ar/wp-content/uploads/2026/08/17859536926a737d9c6e956_1785953692_3x2_lg-e1786297360273-400x250.jpg",
    categoria: "mundial2027",
    fecha: "25 ago 2026",
    pagina: "entradas-mundial-brasil-2027.html"
  },
  {
    id: 126,
    titulo: "Lucy Bronze, Verón y otras leyendas de la FIFA firman un comunicado contra Gianni Infantino",
    resumen: "Un grupo de exjugadores y jugadoras, entre ellos Lucy Bronze, Briana Scurry, Juan Sebastián Verón y Emmanuel Petit, denunció que el poder cegó al liderazgo de la FIFA y advirtió que ya no van a callarse.",
    imagen: "leyendas-fifa-comunicado-infantino.jpg",
    categoria: "internacional",
    fecha: "24 ago 2026",
    pagina: "leyendas-fifa-comunicado-infantino.html"
  },
  {
    id: 125,
    titulo: "Banfield, Boca y Ferro lideran el Clausura tras completarse (casi) toda la fecha 5",
    resumen: "Los tres quedaron empatados en la cima con 10 puntos, tras el 0 a 0 entre Boca y Banfield y los triunfos de Ferro y San Lorenzo el lunes. El Lanús-River sigue sin jugarse.",
    imagen: "tabla-clausura-resultados-fecha-5.jpg",
    categoria: "apertura",
    fecha: "24 ago 2026",
    pagina: "tabla-clausura-resultados-fecha-5.html"
  },
  {
    id: 124,
    titulo: "Katharina Kiel fue elegida presidenta de la nueva Frauen-Bundesliga FBL",
    resumen: "La directora de fútbol femenino del Eintracht Frankfurt encabezará la asociación creada por los clubes, que asumirá la organización y comercialización de la liga a partir de julio de 2027.",
    imagen: "katharina-kiel-presidenta-frauen-bundesliga-fbl.jpg.jpg",
    categoria: "internacional",
    fecha: "22 ago 2026",
    pagina: "katharina-kiel-presidenta-frauen-bundesliga-fbl.html"
  },
  {
    id: 123,
    titulo: "Independiente definió su nuevo cuerpo técnico para lo que resta del Apertura",
    resumen: "Leandro Capuccio y Hernán Herrera quedaron a cargo de las Diablas. Además, Matías Nicolás Arias se suma como preparador físico en reemplazo de Juan Manuel Campos.",
    imagen: "independiente-diablas-nuevo-cuerpo-tecnico.jpg.jpg",
    categoria: "apertura",
    fecha: "22 ago 2026",
    pagina: "independiente-diablas-nuevo-cuerpo-tecnico.html"
  },
  {
    id: 122,
    titulo: "El Bayern Munich arrancó la Bundesliga femenina con un contundente 4-1 ante el Unión Berlín",
    resumen: "Klara Bühl, Pernille Harder, Glódís Perla Viggósdóttir y Sophie Proost marcaron los goles del campeón alemán, que jugó ante 17.083 espectadores en el Alte Försterei.",
    imagen: "bayern-munich-4-1-union-berlin-apertura-bundesliga.jpg.jpg",
    categoria: "internacional",
    fecha: "21 ago 2026",
    pagina: "bayern-munich-4-1-union-berlin-apertura-bundesliga.html"
  },
  {
    id: 121,
    titulo: "Así se juega la fecha 5 del Torneo Clausura del fútbol femenino",
    resumen: "Ocho partidos entre el sábado y el lunes, con Boca-Banfield abriendo la jornada en Casa Amarilla y el clásico entre San Lorenzo y Racing como uno de los platos fuertes.",
    imagen: "fixture-fecha-5-torneo-clausura-femenino.jpg",
    categoria: "apertura",
    fecha: "21 ago 2026",
    pagina: "fixture-fecha-5-torneo-clausura.html"
  },
  {
    id: 120,
    titulo: "Hoy se celebra el Día de la Futbolista Argentina, a 55 años de la hazaña de Las Pioneras",
    resumen: "Cada 21 de agosto se homenajea a las futbolistas argentinas en conmemoración del 4-1 histórico ante Inglaterra en el Mundial no oficial de 1971, con los cuatro goles de Elba Selva.",
    imagen: "dia-de-la-futbolista-argentina-las-pioneras-1971.jpg",
    categoria: "seleccion",
    fecha: "21 ago 2026",
    pagina: "dia-de-la-futbolista-argentina.html"
  },
  {
    id: 119,
    titulo: "La Liga F resolvió a último momento su crisis de televisión antes de arrancar la temporada",
    resumen: "DAZN seguirá con los ocho partidos de cada fecha en modalidad paga, mientras que TVE y TV3 transmitirán cuatro encuentros por jornada en abierto, tras semanas sin operador confirmado.",
    imagen: "liga-f-resuelve-crisis-television-dazn-tve-tv3.jpg",
    categoria: "internacional",
    fecha: "20 ago 2026",
    pagina: "liga-f-resuelve-crisis-television-dazn-tve-tv3.html"
  },
  {
    id: 118,
    titulo: "El Maracaná será sede del partido inaugural y la final del Mundial Femenino Brasil 2027",
    resumen: "FIFA presentó el calendario completo del torneo, que se disputará entre el 24 de junio y el 25 de julio de 2027 con 32 selecciones en ocho ciudades brasileñas.",
    imagen: "maracana-sede-inaugural-final-mundial-2027.jpg",
    categoria: "mundial2027",
    fecha: "20 ago 2026",
    pagina: "maracana-sede-inaugural-final-mundial-2027.html"
  },
  {
    id: 117,
    titulo: "Ema Modric, hija de Luka Modric, se sumó al Cadete Femenino del Real Madrid",
    resumen: "La futbolista de 13 años dejó las inferiores del AC Milan, donde había sido campeona de la Copa Garino, para sumarse a la cantera femenina del club en el que juega su padre.",
    imagen: "ema-modric-real-madrid-cadete-femenino.jpg",
    categoria: "internacional",
    fecha: "20 ago 2026",
    pagina: "ema-modric-real-madrid-cadete-femenino.html"
  },
  {
    id: 116,
    titulo: "Kishi Núñez se despidió de Boca para cuidar su salud mental",
    resumen: "La delantera de 18 años, pieza clave en la campaña de Boca en la última Copa Libertadores Femenina, anunció en sus redes sociales que da un paso al costado del club para priorizar su bienestar.",
    imagen: "kishi-nunez-se-despide-de-boca-salud-mental.jpg",
    categoria: "apertura",
    fecha: "19 ago 2026",
    pagina: "kishi-nunez-se-despide-de-boca-salud-mental.html"
  },
  {
    id: 115,
    titulo: "Chiqui Tapia estuvo presente en el Sub-12 de Boca ante Vélez, que se transmitió por LPF Play",
    resumen: "El presidente de AFA visitó Casa Amarilla para el partido de la fecha 2 del Torneo Sub-12, que además tuvo transmisión oficial de LPF Play.",
    imagen: "tapia-presente-sub12-boca-velez-lpf-play.jpg",
    categoria: "apertura",
    fecha: "19 ago 2026",
    pagina: "tapia-presente-sub12-boca-velez-lpf-play.html"
  },
  {
    id: 114,
    titulo: "Dolores Delgado sumó sus primeros minutos con el primer equipo del Real Madrid",
    resumen: "La delantera argentina, goleadora del Juvenil merengue, fue parte del banco en el amistoso ante el Deportivo y disputó minutos con el plantel superior.",
    imagen: "dolores-delgado-debut-real-madrid.jpg",
    categoria: "internacional",
    fecha: "18 ago 2026",
    pagina: "dolores-delgado-debut-real-madrid.html"
  },
  {
    id: 113,
    titulo: "Se jugó la primera Copa Raíces en homenaje al Día de la Futbolista Argentina",
    resumen: "Banfield fue sede de un torneo +35 y +50 organizado junto a El Femenino y Mónica Santino, con la presencia de Vanina Correa.",
    imagen: "copa-raices-torneo-mas35-banfield.jpg",
    categoria: "apertura",
    fecha: "18 ago 2026",
    pagina: "copa-raices-torneo-mas35-banfield.html"
  },
  {
    id: 112,
    titulo: "River, Banfield y Boca son los nuevos punteros del Clausura",
    resumen: "Los tres equipos llegaron a 9 puntos tras la Fecha 4 y comparten la cima de la tabla, con River al frente por diferencia de gol.",
    imagen: "river-banfield-boca-punteros-clausura-fecha-4.jpg",
    categoria: "apertura",
    fecha: "17 ago 2026",
    pagina: "river-banfield-boca-punteros-clausura-fecha-4.html"
  },
  {
    id: 111,
    titulo: "Banfield le ganó el clásico del sur a Lanús",
    resumen: "El Taladro se impuso 3-2 en el Florencio Sola por la Fecha 4 del Clausura, en un partido intenso que Lanús peleó hasta el final.",
    imagen: "banfield-lanus-clasico-del-sur-clausura-f4.jpg",
    categoria: "apertura",
    fecha: "17 ago 2026",
    pagina: "banfield-lanus-clasico-del-sur-clausura-f4.html"
  },
  {
    id: 110,
    titulo: "Sophia Braun debutó con Dallas Trinity en la USL Super League",
    resumen: "La mediocampista argentina fue titular como capitana en el empate 1-1 ante Tampa Bay Sun, en el partido inaugural de Dallas Trinity en la temporada.",
    imagen: "sophia-braun-debut-dallas-trinity-usl.jpg",
    categoria: "internacional",
    fecha: "16 ago 2026",
    pagina: "sophia-braun-debut-dallas-trinity-usl.html"
  },
  {
    id: 109,
    titulo: "Agostina Holzheier debutó con Bay FC en la NWSL",
    resumen: "La entrerriana ingresó a los 82 minutos en la derrota 3-2 ante Utah Royals y jugó sus primeros minutos oficiales con la camiseta de Bay FC.",
    imagen: "holzheier-debut-bay-fc-nwsl.jpg",
    categoria: "internacional",
    fecha: "15 ago 2026",
    pagina: "holzheier-debut-bay-fc-nwsl.html"
  },
  {
    id: 108,
    titulo: "Arrancó el primer Campeonato Sub-12 de fútbol femenino organizado por AFA",
    resumen: "Se jugó la primera fecha del torneo formativo que reúne a 11 clubes del AMBA, pensado para que las futbolistas empiecen a competir de forma oficial desde los 10 años.",
    imagen: "sub12-femenino-arranco-primera-fecha.jpg",
    categoria: "apertura",
    fecha: "12 ago 2026",
    pagina: "sub12-femenino-arranco-primera-fecha.html"
  },
  {
    id: 107,
    titulo: "Así quedó la tabla del Torneo Clausura tras la Fecha 3",
    resumen: "Belgrano quedó como líder por diferencia de gol en un Clausura apretadísimo, con ocho equipos empatados en 6 puntos tras la tercera fecha.",
    imagen: "asi-quedo-tabla-clausura-fecha-3.jpg",
    categoria: "apertura",
    fecha: "11 ago 2026",
    pagina: "asi-quedo-tabla-clausura-fecha-3.html"
  },
  {
    id: 106,
    titulo: "Histórico: la Sub-16 de River se consagró campeona de la Fiesta Conmebol Evolución",
    resumen: "River goleó 4-0 a Inter Stars Rush de Bolivia en la final y se convirtió en el primer club argentino en ganar el torneo continental.",
    imagen: "river-sub16-campeon-conmebol-evolucion.jpg",
    categoria: "internacional",
    fecha: "8 ago 2026",
    pagina: "river-sub16-campeon-conmebol-evolucion.html"
  },
  {
    id: 105,
    titulo: "Boca le ganó a Newell's en Casa Amarilla",
    resumen: "Las Gladiadoras sumaron una nueva victoria como local, por la Fecha 3 del Torneo Clausura.",
    imagen: "boca-le-gano-a-newells-casa-amarilla.jpg",
    categoria: "apertura",
    fecha: "8 ago 2026",
    pagina: "boca-le-gano-a-newells-casa-amarilla.html"
  },
  {
    id: 104,
    titulo: "Las Millonarias le ganaron 3-1 a Unión como visitante",
    resumen: "River se impuso con dos goles de Mercedes Diz y uno de Aldana Barrionuevo, por la Fecha 3 del Torneo Clausura.",
    imagen: "river-le-gano-a-union-visitante.jpg",
    categoria: "apertura",
    fecha: "9 ago 2026",
    pagina: "river-le-gano-a-union-visitante.html"
  },
  {
    id: 103,
    titulo: "Stábile y Yamila Rodríguez, los dos refuerzos de Talleres, metieron gol en su debut como local",
    resumen: "Las Matadoras le dieron vuelta el partido a San Lorenzo 2-1 en La Boutique.",
    imagen: "talleres-stabile-yamila-rodriguez-gol-debut-local.jpg",
    categoria: "apertura",
    fecha: "10 ago 2026",
    pagina: "talleres-stabile-yamila-rodriguez-gol-debut-local.html"
  },
  {
    id: 102,
    titulo: "Belgrano goleó 6-0 a Independiente y Bulacio es la nueva goleadora del torneo",
    resumen: "Las Piratas aplastaron a Independiente con un hat-trick de Micaela Bulacio, por la Fecha 3 del Clausura.",
    imagen: "belgrano-goleada-independiente-bulacio-goleadora.jpg",
    categoria: "apertura",
    fecha: "10 ago 2026",
    pagina: "belgrano-goleada-independiente-bulacio-goleadora.html"
  },
  {
    id: 101,
    titulo: "Volvió a jugar: Estefanía Banini debutó con Colo Colo en el Superclásico chileno",
    resumen: "La mendocina ingresó a los 73 minutos en el 1-0 de Colo Colo sobre Universidad de Chile, marcando su regreso al club tras 12 años afuera.",
    imagen: "banini-debut-colo-colo-superclasico.jpg",
    categoria: "internacional",
    fecha: "9 ago 2026",
    pagina: "banini-debut-colo-colo-superclasico.html"
  },
  {
    id: 100,
    titulo: "Ya salió la programación de la Fecha 3 del Torneo Clausura: día, horario y sede de cada partido",
    resumen: "La Liga Profesional confirmó los ocho partidos de la próxima fecha, que se jugarán entre el sábado 8 y el martes 11 de agosto.",
    imagen: "fixture-fecha-3-clausura-dia-horario-sede.jpg",
    categoria: "apertura",
    fecha: "7 ago 2026",
    pagina: "fixture-fecha-3-clausura-dia-horario-sede.html"
  },
  {
    id: 99,
    titulo: "Brasil paralizará el fútbol durante la Copa Mundial Femenina",
    resumen: "La CBF confirmó una pausa obligatoria para las competencias femeninas y masculinas del país entre el 24 de junio y el 25 de julio de 2027.",
    imagen: "brasil-pausa-futbol-mundial-femenino-2027.jpg",
    categoria: "mundial2027",
    fecha: "7 ago 2026",
    pagina: "brasil-pausa-futbol-mundial-femenino-2027.html"
  },
  {
    id: 98,
    titulo: "River Sub-16 eliminó por penales a Independiente del Valle y jugará la final de la Fiesta Conmebol Evolución",
    resumen: "Las Millonarias superaron al equipo ecuatoriano en la semifinal disputada en Paraguay y el sábado buscarán el título del torneo.",
    imagen: "river-sub16-final-conmebol-evolucion.jpg",
    categoria: "apertura",
    fecha: "7 ago 2026",
    pagina: "river-sub16-final-conmebol-evolucion.html"
  },
  {
    id: 97,
    titulo: "AFA creó la categoría Sub-12 del fútbol femenino, con 11 equipos",
    resumen: "La nueva división formativa arranca el 11 de agosto, para futbolistas de 10 a 12 años, con canchas reducidas y partidos de 50 minutos.",
    imagen: "sub12-femenino-afa-nueva-categoria.jpg",
    categoria: "apertura",
    fecha: "7 ago 2026",
    pagina: "sub12-femenino-afa-nueva-categoria.html"
  },
  {
    id: 96,
    titulo: "¿Juega Banini el finde? La gran duda antes del Superclásico femenino chileno",
    resumen: "Universidad de Chile recibe a Colo Colo este sábado, con la incógnita de si Estefanía Banini hará su debut tras su regreso al club.",
    imagen: "banini-superclasico-chileno-agosto.jpg",
    categoria: "internacional",
    fecha: "6 ago 2026",
    pagina: "banini-superclasico-chileno-agosto.html"
  },
  {
    id: 95,
    titulo: "\"Tengo la necesidad imperiosa de frenar una Ley que está fundada en una mentira\": Luana Muñoz habló en el Senado",
    resumen: "Luana Muñoz, una de las futbolistas que denunció al exentrenador Diego Guacci, apuntó contra el proyecto de Ley de Falsas Denuncias en una exposición ante el Senado.",
    imagen: "luana-munoz-senado-ley-falsas-denuncias.jpg",
    categoria: "apertura",
    fecha: "5 ago 2026",
    pagina: "luana-munoz-senado-ley-falsas-denuncias.html"
  },
  {
    id: 94,
    titulo: "Las jugadoras de Boca presentaron la nueva camiseta",
    resumen: "El plantel femenino de Boca Juniors presentó la nueva camiseta con la que buscará seguir sumando en el Torneo Clausura.",
    imagen: "boca-nueva-camiseta-jugadoras.jpg",
    categoria: "apertura",
    fecha: "5 ago 2026",
    pagina: "boca-nueva-camiseta-jugadoras.html"
  },
  {
    id: 93,
    titulo: "OFICIAL: Kerolin Nicoli es nueva jugadora del Barça Femení",
    resumen: "La atacante brasileña llega traspasada desde el Manchester City a cambio de 1.500.000 de euros, según información de Sport.",
    imagen: "kerolin-nicoli-barcelona-femeni.jpg",
    categoria: "internacional",
    fecha: "5 ago 2026",
    pagina: "kerolin-nicoli-barcelona-femeni.html"
  },
  {
    id: 92,
    titulo: "Florencia Bonsegundo brilló en la goleada del Sporting CP en la Champions",
    resumen: "La delantera argentina hizo 2 goles y dio una asistencia en la victoria 5-0 ante el FC Seasters Odessa, por la Champions League femenina.",
    imagen: "bonsegundo-sporting-cp-champions.jpg",
    categoria: "internacional",
    fecha: "5 ago 2026",
    pagina: "bonsegundo-sporting-cp-champions.html"
  },
  {
    id: 91,
    titulo: "Así quedó la tabla del Clausura tras la Fecha 2",
    resumen: "San Luis FC y Unión de Santa Fe son los únicos punteros con puntaje ideal tras dos fechas, mientras que Racing debutó en el torneo con derrota ante Boca.",
    imagen: "clausura-tabla-fecha2-final.jpg",
    categoria: "apertura",
    fecha: "4 ago 2026",
    pagina: "clausura-tabla-fecha2-final.html"
  },
  {
    id: 90,
    titulo: "Se abre el registro de voluntarios para la Copa Mundial Femenina de la FIFA",
    resumen: "A menos de un año del partido inaugural, la FIFA abrió el registro de voluntarios para el Mundial Femenino Brasil 2027. Se buscan 6.000 personas para las ocho ciudades sede del torneo.",
    imagen: "voluntarios-mundial-femenino-2027.jpg",
    categoria: "mundial2027",
    fecha: "4 ago 2026",
    pagina: "voluntarios-mundial-femenino-2027.html"
  },
  {
    id: 89,
    titulo: "Lo dieron vuelta: Boca venció a Racing como visitante",
    resumen: "Las Gladiadoras se pusieron en desventaja pero lo dieron vuelta ante Racing por la Fecha 2 del Torneo Clausura y sumaron su primera victoria en el certamen.",
    imagen: "boca-racing-clausura-f2.jpg",
    categoria: "apertura",
    fecha: "3 ago 2026",
    pagina: "boca-racing-clausura-f2.html"
  },
  {
    id: 88,
    titulo: "Ana Insfrán debutó en River ante Independiente",
    resumen: "La futbolista de la categoría 2010, formada en las inferiores del club, tuvo sus primeros minutos en Primera en el triunfo de River ante Independiente en el River Camp.",
    imagen: "ana-insfran-debut-river.jpg",
    categoria: "apertura",
    fecha: "3 ago 2026",
    pagina: "ana-insfran-debut-river.html"
  },
  {
    id: 87,
    titulo: "Unión ganó de visitante ante Banfield y sigue invicto en el Clausura",
    resumen: "Con goles de Camila Acevedo y Emilse Albornoz, Unión de Santa Fe venció 2-1 a Banfield y consiguió su primera victoria como visitante, tras no haber podido ganar ni un partido en todo el Apertura.",
    imagen: "union-banfield-invicto.jpg",
    categoria: "apertura",
    fecha: "2 ago 2026",
    pagina: "union-invicto-clausura-banfield.html"
  },
  {
    id: 86,
    titulo: "River venció 1-0 a Independiente en el River Camp",
    resumen: "Las Millonarias sumaron su primer triunfo del Torneo Clausura ante Independiente, por la Fecha 2, en un partido disputado en el River Camp.",
    imagen: "river-independiente-clausura-f2.jpg",
    categoria: "apertura",
    fecha: "3 ago 2026",
    pagina: "river-independiente-clausura-f2.html"
  },
  {
    id: 85,
    titulo: "Ya salió la Fecha 2 del Torneo Clausura",
    resumen: "Racing, el último campeón, vuelve a competir y se enfrenta a Boca el lunes en el predio Tita Mattiussi. Días, horarios y sedes de los ocho partidos, que se podrán ver en vivo por LPF Play.",
    imagen: "clausura-fixture-fecha2.jpg",
    categoria: "apertura",
    fecha: "29 jul 2026",
    pagina: "clausura-fixture-fecha2.html"
  },
  {
    id: 84,
    titulo: "Belgrano lanzó su propio documental sobre el fútbol femenino",
    resumen: "\"Cómo pasó ese momento\" reconstruye la historia de Las Piratas, desde sus primeros pasos hasta el bicampeonato 2025 y la clasificación a la Copa Libertadores 2026. La avant premiere fue en los Cines Dino de Alto Verde.",
    imagen: "belgrano-documental.jpg",
    categoria: "apertura",
    fecha: "29 jul 2026",
    pagina: "belgrano-documental-piratas.html"
  },
  {
    id: 83,
    titulo: "Paloma Fagiano y Carolina Ceniza presentaron la nueva camiseta de River",
    resumen: "Las jugadoras del plantel femenino fueron parte de la campaña oficial de la nueva camiseta de River, inspirada en uno de los primeros escudos del club por los 125 años de la institución.",
    imagen: "fagiano-ceniza-camiseta-river.jpg",
    categoria: "apertura",
    fecha: "29 jul 2026",
    pagina: "fagiano-ceniza-camiseta-river.html"
  },
  {
    id: 82,
    titulo: "River Sub-14 y Sub-16 femenino viajan a Paraguay por la Fiesta Conmebol Evolución",
    resumen: "Las formativas femeninas del Millonario competirán en el torneo internacional que se disputa en Paraguay entre el 30 de julio y el 8 de agosto, con más de 700 juveniles de toda Sudamérica.",
    imagen: "river-sub14-sub16-conmebol.jpg",
    categoria: "apertura",
    fecha: "29 jul 2026",
    pagina: "river-sub14-sub16-conmebol.html"
  },
  {
    id: 81,
    titulo: "Eliana Stabile deja Gimnasia de La Plata y se va a Talleres de Córdoba",
    resumen: "La lateral zurda, convocada a la Selección argentina, se incorpora a Las Matadoras de cara al Torneo Clausura tras un buen primer semestre en Gimnasia.",
    imagen: "stabile-talleres-2026.jpg",
    categoria: "apertura",
    fecha: "29 jul 2026",
    pagina: "stabile-talleres-cordoba.html"
  },
  {
    id: 80,
    titulo: "Miércoles de entrenamiento para las juveniles: Sub-17 y Sub-20 se preparan para sus Mundiales",
    resumen: "La Sub 20 jugará su Copa del Mundo en Polonia del 5 al 27 de septiembre, y la Sub 17, en su primera clasificación histórica, competirá en Marruecos del 17 de octubre al 7 de noviembre.",
    imagen: "seleccion-sub17-sub20-entrenamiento.jpg",
    categoria: "seleccion",
    fecha: "29 jul 2026",
    pagina: "seleccion-sub17-sub20-mundiales.html"
  },
  {
    id: 79,
    titulo: "Yamila Rodríguez se iría a Talleres de Córdoba",
    resumen: "Trascendió que la delantera de la Selección argentina, que milita en Grêmio de Brasil, podría sumarse a Talleres de cara al Torneo Clausura. femeninoinfo no pudo confirmar esta información de forma independiente.",
    imagen: "rodriguez-talleres.jpg",
    categoria: "apertura",
    fecha: "28 jul 2026",
    pagina: "rodriguez-talleres-cordoba.html"
  },
  {
    id: 78,
    titulo: "Julieta Lema es el nuevo refuerzo de Boca Juniors",
    resumen: "La delantera fue presentada en el fútbol femenino de Boca. Llega procedente del Club León de México, tras un semestre en el que salió campeona dos veces con Newell's Old Boys.",
    imagen: "lema-boca.jpg",
    categoria: "apertura",
    fecha: "28 jul 2026",
    pagina: "lema-refuerzo-boca.html"
  },
  {
    id: 77,
    titulo: "América Femenil cerró una temporada histórica: Clausura, Concachampions y Campeón de Campeonas",
    resumen: "Las Águilas se reafirmaron como uno de los mejores clubes femeninos del mundo tras un 2025/2026 de triplete: campeonas de Liga MX Femenil, de la Concacaf W Champions Cup y del Campeón de Campeonas.",
    imagen: "america-femenil-triplete.jpg",
    categoria: "internacional",
    fecha: "26 jul 2026",
    pagina: "america-femenil-triplete-2026.html"
  },
  {
    id: 76,
    titulo: "Agostina Holzheier dejaría Racing rumbo al Bay FC de la NWSL",
    resumen: "Según trascendió en redes, la volante que acaba de salir campeona con Racing sería nuevo refuerzo del Bay FC, donde compartiría plantel con Aldana Cometti, capitana de la Selección argentina.",
    imagen: "holzheier-bayfc.jpg",
    categoria: "internacional",
    fecha: "26 jul 2026",
    pagina: "holzheier-bay-fc-nwsl.html"
  },
  {
    id: 75,
    titulo: "Beti Soriano volvió a jugar en Belgrano tras superar una rotura de ligamento cruzado",
    resumen: "Una de las figuras claves de Las Piratas se reincorporó a las canchas después de casi diez meses, tras recuperarse de una lesión de ligamento cruzado que la había marginado desde septiembre de 2025.",
    imagen: "soriano-belgrano.jpg",
    categoria: "apertura",
    fecha: "26 jul 2026",
    pagina: "soriano-vuelve-belgrano.html"
  },
  {
    id: 74,
    titulo: "Francisca Altgelt deja River Plate y se va al Logroño United de España",
    resumen: "La delantera, formada en las inferiores de River, comunicó en sus redes que continuará su carrera en España. El club de Núñez se despidió con un mensaje afectuoso en sus cuentas oficiales.",
    imagen: "altgelt-logrono.jpg",
    categoria: "apertura",
    fecha: "25 jul 2026",
    pagina: "altgelt-logrono-united.html"
  },
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

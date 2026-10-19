/* ============================================================
   DATOS DE LA COPA LIBERTADORES FEMENINA 2026 (compartidos por
   libertadores-femenina.html y la tira de resultados del inicio).
   Para cargar un resultado, agregá  res:[goles_local, goles_visitante]
   al partido (ej.: res:[2,1]). Las horas están en hora de Ecuador (UTC-5);
   la web las muestra en hora argentina (+2 h).
   ============================================================ */
var EQ = {
  COR:{n:'Corinthians',p:'Brasil',bg:'#111111',tx:'#ffffff'},
  CCO:{n:'Colo-Colo',p:'Chile',bg:'#f2f2f2',tx:'#111111'},
  CAR:{n:'Caracas FC',p:'Venezuela',bg:'#a01212',tx:'#ffffff'},
  SFE:{n:'Independiente Santa Fe',p:'Colombia',bg:'#c8102e',tx:'#ffffff'},
  IDV:{n:'Independiente del Valle',p:'Ecuador',bg:'#161616',tx:'#ffffff'},
  BEL:{n:'Belgrano',p:'Argentina',img:'https://elfemenino.com.ar/wp-content/uploads/2021/08/Belgrano-128x128.png',bg:'#74acdf',tx:'#ffffff'},
  UNI:{n:'Universitario',p:'Perú',bg:'#7a1620',tx:'#ffffff'},
  PAL:{n:'Palmeiras',p:'Brasil',bg:'#0a6b34',tx:'#ffffff'},
  CRU:{n:'Cruzeiro',p:'Brasil',bg:'#1d4fb4',tx:'#ffffff'},
  LDU:{n:'LDU Quito',p:'Ecuador',bg:'#d9d9d9',tx:'#111111'},
  BOL:{n:'Bolívar',p:'Bolivia',bg:'#1c4fa3',tx:'#ffffff'},
  OLI:{n:'Olimpia',p:'Paraguay',bg:'#2a2a2a',tx:'#ffffff'},
  DCA:{n:'Deportivo Cali',p:'Colombia',bg:'#1a8a3a',tx:'#ffffff'},
  LIB:{n:'Libertad',p:'Paraguay',bg:'#4a4a4a',tx:'#ffffff'},
  NAC:{n:'Nacional',p:'Uruguay',bg:'#1e3a8a',tx:'#ffffff'},
  UCH:{n:'Universidad de Chile',p:'Chile',bg:'#1d3d91',tx:'#ffffff'}
};
/* Escudos (Wikimedia). Si alguno no carga, se muestra el monograma de color. */
var WK='https://upload.wikimedia.org/wikipedia/';
var LOGOS = {
 COR:'en/thumb/5/5a/Sport_Club_Corinthians_Paulista_crest.svg/250px-Sport_Club_Corinthians_Paulista_crest.svg.png',
 CCO:'en/thumb/b/be/Colo-Colo.svg/250px-Colo-Colo.svg.png',
 CAR:'en/thumb/f/f4/Caracas_FC.png/250px-Caracas_FC.png',
 SFE:'commons/thumb/4/43/Independiente_Santa_Fe_logo.svg/250px-Independiente_Santa_Fe_logo.svg.png',
 IDV:'commons/thumb/b/b1/Escudoindependientedelvalle2023.png/250px-Escudoindependientedelvalle2023.png',
 UNI:'commons/thumb/7/77/Logo_oficial_de_Universitario.svg/250px-Logo_oficial_de_Universitario.svg.png',
 PAL:'commons/thumb/6/68/Sociedade_Esportiva_Palmeiras_logo_%281_red_star%29.svg/250px-Sociedade_Esportiva_Palmeiras_logo_%281_red_star%29.svg.png',
 CRU:'commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/250px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png',
 LDU:'commons/thumb/8/8a/Liga_Deportiva_Universitaria_%28Ecuador%29_logo_%285_stars%29.svg/250px-Liga_Deportiva_Universitaria_%28Ecuador%29_logo_%285_stars%29.svg.png',
 BOL:'en/thumb/1/13/Club_Bol%C3%ADvar_logo.svg/250px-Club_Bol%C3%ADvar_logo.svg.png',
 OLI:'en/thumb/4/45/Club_Olimpia_logo.svg/250px-Club_Olimpia_logo.svg.png',
 DCA:'commons/thumb/8/8b/Deportivo_Cali.svg/250px-Deportivo_Cali.svg.png',
 LIB:'en/thumb/e/ee/Club_Libertad_logo.png/250px-Club_Libertad_logo.png',
 NAC:'commons/thumb/1/1e/Club_Nacional_de_Football_logo.svg/250px-Club_Nacional_de_Football_logo.svg.png',
 UCH:'commons/thumb/2/2d/Emblema_del_Club_Universidad_de_Chile.png/250px-Emblema_del_Club_Universidad_de_Chile.png'
};
Object.keys(LOGOS).forEach(function(k){ EQ[k].img = WK+LOGOS[k]; });
var GRUPOS = {A:['COR','CCO','CAR','SFE'],B:['IDV','BEL','UNI','PAL'],C:['CRU','LDU','BOL','OLI'],D:['DCA','LIB','NAC','UCH']};
var RPD='Estadio Rodrigo Paz Delgado', BG='Estadio Banco Guayaquil';
// [n, grupo/fase, dia (octubre), hora Ecuador, local, visitante, estadio, resultado opcional]
var PARTIDOS = [
 {n:1,g:'A',d:15,h:15,a:'COR',b:'CCO',e:RPD,res:[2,0]},
 {n:2,g:'A',d:16,h:22,a:'CAR',b:'SFE',e:RPD,res:[2,3]}, // reprogramado (estaba el 15 a las 19)
 {n:3,g:'B',d:15,h:15,a:'IDV',b:'BEL',e:BG,res:[1,1]},
 {n:4,g:'B',d:15,h:19,a:'UNI',b:'PAL',e:BG,res:[0,1]},
 {n:6,g:'C',d:16,h:15,a:'BOL',b:'OLI',e:RPD,res:[2,2]},
 {n:7,g:'D',d:16,h:15,a:'DCA',b:'LIB',e:BG,res:[1,1]},
 {n:5,g:'C',d:16,h:19,a:'CRU',b:'LDU',e:RPD,res:[2,1]},
 {n:8,g:'D',d:16,h:19,a:'NAC',b:'UCH',e:BG,res:[0,0]},
 {n:9,g:'A',d:18,h:15,a:'CCO',b:'SFE',e:RPD,res:[1,2]},
 {n:11,g:'B',d:18,h:15,a:'BEL',b:'PAL',e:BG,res:[1,3]},
 {n:10,g:'A',d:18,h:19,a:'COR',b:'CAR',e:RPD,res:[7,0]},
 {n:12,g:'B',d:18,h:19,a:'IDV',b:'UNI',e:BG,res:[4,2]},
 {n:14,g:'C',d:19,h:15,a:'CRU',b:'BOL',e:RPD},
 {n:15,g:'D',d:19,h:15,a:'DCA',b:'NAC',e:BG},
 {n:13,g:'C',d:19,h:19,a:'LDU',b:'OLI',e:RPD},
 {n:16,g:'D',d:19,h:19,a:'LIB',b:'UCH',e:BG},
 {n:17,g:'A',d:21,h:15,a:'SFE',b:'COR',e:BG},
 {n:18,g:'A',d:21,h:15,a:'CCO',b:'CAR',e:RPD},
 {n:19,g:'B',d:21,h:19,a:'PAL',b:'IDV',e:BG},
 {n:20,g:'B',d:21,h:19,a:'BEL',b:'UNI',e:RPD},
 {n:23,g:'D',d:22,h:15,a:'UCH',b:'DCA',e:BG},
 {n:24,g:'D',d:22,h:15,a:'LIB',b:'NAC',e:RPD},
 {n:21,g:'C',d:22,h:19,a:'OLI',b:'CRU',e:BG},
 {n:22,g:'C',d:22,h:19,a:'LDU',b:'BOL',e:RPD},
 {n:25,g:'Cuartos de final',d:24,h:null,ta:'1.º Grupo A',tb:'2.º Grupo B',e:BG},
 {n:26,g:'Cuartos de final',d:24,h:null,ta:'1.º Grupo B',tb:'2.º Grupo A',e:BG},
 {n:27,g:'Cuartos de final',d:25,h:null,ta:'1.º Grupo C',tb:'2.º Grupo D',e:BG},
 {n:28,g:'Cuartos de final',d:25,h:null,ta:'1.º Grupo D',tb:'2.º Grupo C',e:BG},
 {n:30,g:'Semifinal',d:28,h:null,ta:'Ganador 25',tb:'Ganador 26',e:RPD},
 {n:29,g:'Semifinal',d:28,h:null,ta:'Ganador 27',tb:'Ganador 28',e:RPD},
 {n:31,g:'Tercer puesto',d:31,h:null,ta:'Perdedor 29',tb:'Perdedor 30',e:RPD},
 {n:32,g:'Final',d:31,h:null,ta:'Ganador 29',tb:'Ganador 30',e:RPD}
];
/* Clasificación manual (se actualiza a mano cuando matemáticamente quedan clasificados o eliminados) */
var CLASIFICADOS = ['COR','SFE','PAL'];
var ELIMINADOS = ['CAR','CCO','UNI'];
function posiciones(g){
  var T = {};
  GRUPOS[g].forEach(function(c){ T[c]={c:c,pj:0,g:0,e:0,p:0,gf:0,gc:0,pts:0}; });
  PARTIDOS.forEach(function(m){
    if(m.g!==g || !m.res) return;
    var a=T[m.a], b=T[m.b], x=m.res[0], y=m.res[1];
    a.pj++; b.pj++; a.gf+=x; a.gc+=y; b.gf+=y; b.gc+=x;
    if(x>y){ a.g++; b.p++; a.pts+=3; } else if(x<y){ b.g++; a.p++; b.pts+=3; } else { a.e++; b.e++; a.pts++; b.pts++; }
  });
  return Object.keys(T).map(function(k){ return T[k]; }).sort(function(u,v){
    return v.pts-u.pts || (v.gf-v.gc)-(u.gf-u.gc) || v.gf-u.gf || EQ[u.c].n.localeCompare(EQ[v.c].n);
  });
}
var DIAS = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
function kick(p){ return Date.UTC(2026,9,p.d,(p.h||15)+5,0); } // hora Ecuador -> UTC
function horaAR(p){ return p.h==null ? 'A definir' : ((p.h+2)%24)+':00'; }
function fechaTxt(d){ var dt=new Date(Date.UTC(2026,9,d)); return DIAS[dt.getUTCDay()]+' '+d+' de octubre'; }

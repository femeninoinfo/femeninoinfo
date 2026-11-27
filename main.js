// FEMENINOINFO — MAIN JS

const CATEGORIAS = {
  seleccion:     { label: 'Selección Argentina',  clase: 'cat-sel' },
  apertura:      { label: 'Apertura Femenino',    clase: 'cat-arg' },
  internacional: { label: 'Fútbol Internacional', clase: 'cat-int' },
  libertadores:  { label: 'Libertadores Femenina', clase: 'cat-int' }
};

// ── Pestaña "Libertadores" al inicio del menú (todas las páginas) ───────────────
(function() {
  var HREF = 'libertadores-femenina.html';
  function agregar(selector, esMobile) {
    var nav = document.querySelector(selector);
    if (!nav || nav.querySelector('a[href="' + HREF + '"]')) return;
    var a = document.createElement('a');
    a.href = HREF;
    a.textContent = 'Libertadores';
    if (esMobile) a.setAttribute('onclick', 'toggleMenu()');
    nav.insertBefore(a, nav.firstChild);
  }
  agregar('nav.nav', false);
  agregar('#navMobile', true);
})();

function formatFecha(f) { return f || ''; }

// ── Carrusel ─────────────────────────────────────────────────────────────────
function scrollCarrusel(id, dir) {
  const track = document.getElementById(id);
  if (!track) return;
  track.scrollBy({ left: dir * track.offsetWidth * 0.75, behavior: 'smooth' });
}

// ── Tabs ─────────────────────────────────────────────────────────────────────
function showTab(tab, el) {
  document.getElementById('tab-tabla').style.display   = tab === 'tabla'   ? 'block' : 'none';
  document.getElementById('tab-fixture').style.display = tab === 'fixture' ? 'block' : 'none';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ── Abrir noticia ─────────────────────────────────────────────────────────────
function abrirNoticia(id) {
  const n = noticias.find(x => x.id === id);
  if (!n || !n.pagina) return;
  window.open(n.pagina, '_blank');
}

// ── Barra fija: botón "Trabajá con nosotros" + bloques finales (CV y proyectos) ──
(function () {
  var MAIL = 'femeninoinfo.marketing@gmail.com';
  function init() {
    if (document.getElementById('trabaja')) return;
    var bn = document.querySelector('.brand-name');
    if (bn && bn.textContent.trim().toLowerCase() === 'femeninoinfo') bn.innerHTML = 'femenino<b>info</b>';
    var nav = document.querySelector('.header .nav');
    if (nav && !nav.querySelector('.nav-trabaja')) {
      var b = document.createElement('a');
      b.className = 'nav-trabaja';
      b.href = '#trabaja';
      b.textContent = 'Trabajá con nosotros';
      nav.appendChild(b);
    }
    var mob = document.getElementById('navMobile');
    if (mob && !mob.querySelector('.nav-trabaja')) {
      var m = document.createElement('a');
      m.className = 'nav-trabaja';
      m.href = '#trabaja';
      m.textContent = 'Trabajá con nosotros';
      m.onclick = function () { mob.classList.remove('open'); };
      mob.appendChild(m);
    }
    var bloque = document.createElement('section');
    bloque.className = 'fin-bloques';
    bloque.id = 'trabaja';
    bloque.className = 'fin-bloques fin-links';
    bloque.innerHTML =
      '<div class="fin-inner">' +
        '<a class="fin-link" target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&fs=1&to=' + MAIL + '&su=CV%20-%20Quiero%20trabajar%20en%20femeninoinfo"><span>Sumate al equipo</span><i>Mandanos tu CV →</i></a>' +
        '<a class="fin-link" target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&fs=1&to=' + MAIL + '&su=Proyecto%20en%20conjunto"><span>¿Tenés un proyecto?</span><i>Escribinos →</i></a>' +
      '</div>';
    var redes = document.querySelector('.redes-section-nueva') || document.querySelector('.redes-section');
    if (redes && redes.parentNode) redes.parentNode.insertBefore(bloque, redes.nextSibling);
    else document.body.appendChild(bloque);

    // ── Carrusel de videos de femeninoinfo al final de cada nota ──
    if (!document.getElementById('vlogs') && redes && redes.parentNode && !document.getElementById('videosNota')) {
      var VIDEOS = [
        { id: 'PFMYRX2F51g', t: 'Todo sobre los amistosos de la Selección', g: 'seleccion' },
        { id: 'u-5W6k77MiA', t: 'All Boys hace historia y asciende a Primera División', g: 'vlogs' },
        { id: 'C9_0xawp7EQ', t: 'Vlog en el clásico cordobés femenino: Belgrano-Talleres', g: 'vlogs' },
        { id: 'p6ztGksKbqQ', t: 'Mundial Brasil 2027: fecha de sorteo y entradas a la venta', g: 'mundial' },
        { id: 'FT0dqP8567s', t: 'Mundial femenino: ¿qué selecciones viajan a Brasil?', g: 'mundial' },
        { id: 'CEw_iqkNspk', t: 'Mundial 2027: cómo avanzan las eliminatorias europeas', g: 'mundial' },
        { id: 'HRQW-Iu6M5o', t: 'Cómo hizo Alexia Putellas para ganar el tercer Balón de Oro', g: 'internacional' },
        { id: '5tDWkSjMCdA', t: 'La historia de Mercedes Diz', g: 'apertura' },
        { id: 'ql28zcmmKUQ', t: 'Copa Libertadores: dónde se juega y dónde ver', g: 'libertadores' }
      ];
      var GRUPOS = [
        ['seleccion', 'Selección'], ['vlogs', 'Vlogs'], ['mundial', 'Mundial'],
        ['internacional', 'Internacional'], ['apertura', 'Fútbol Argentino'], ['libertadores', 'Libertadores']
      ];
      var cat = (typeof CATEGORIA_ACTUAL !== 'undefined' && CATEGORIA_ACTUAL) || '';
      var prioridad = { seleccion: ['seleccion'], apertura: ['vlogs', 'apertura'], mundial2027: ['mundial'], internacional: ['internacional', 'mundial'], libertadores: ['libertadores'] }[cat] || [];
      function rank(v) { var i = prioridad.indexOf(v.g); return i === -1 ? 99 : i; }
      var orden = VIDEOS.map(function (v, i) { return { v: v, i: i }; })
        .sort(function (a, b) { return rank(a.v) - rank(b.v) || a.i - b.i; })
        .map(function (x) { return x.v; });
      var cards = orden.map(function (v) {
        return '<a class="vn-card" data-g="' + v.g + '" target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=' + v.id + '">' +
          '<span class="vn-thumb"><img loading="lazy" src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="' + v.t + '"/><b class="vn-play" aria-hidden="true"></b></span>' +
          '<span class="vn-tit">' + v.t + '</span></a>';
      }).join('');
      var chips = GRUPOS.filter(function (g) { return orden.some(function (v) { return v.g === g[0]; }); })
        .map(function (g) { return '<button type="button" class="vn-chip" data-g="' + g[0] + '">' + g[1] + '</button>'; }).join('');
      var sec = document.createElement('section');
      sec.className = 'videos-nota';
      sec.id = 'videosNota';
      sec.innerHTML =
        '<div class="vn-inner">' +
          '<p class="vn-titulo">Mirá también en nuestro YouTube</p>' +
          '<div class="vn-chips">' + chips + '</div>' +
          '<div class="vn-track">' + cards + '</div>' +
        '</div>';
      redes.parentNode.insertBefore(sec, redes);
      var track = sec.querySelector('.vn-track');
      sec.querySelectorAll('.vn-chip').forEach(function (c) {
        c.addEventListener('click', function () {
          var first = track.querySelector('.vn-card[data-g="' + c.getAttribute('data-g') + '"]');
          if (first) track.scrollTo({ left: first.offsetLeft - track.offsetLeft, behavior: 'smooth' });
        });
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

// ── Menú mobile ───────────────────────────────────────────────────────────────
function toggleMenu() {
  const nav = document.getElementById('navMobile');
  if (nav) nav.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const nav    = document.getElementById('navMobile');
  const toggle = document.querySelector('.menu-toggle');
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// ── Resultados de la fecha (única fuente: ticker de todas las páginas + sección "Fecha 14") ──
// Para actualizar: cambiar FECHA_ACTUAL (acá) y se actualiza en todo el sitio.
var FECHA_ACTUAL = {
  titulo: 'CLAUSURA · FECHA 14',
  corto: 'F14',
  partidos: [
    ['San Luis FC', 1, 2, 'San Lorenzo'],
    ['Boca', 2, 0, 'Ferro'],
    ['SAT', 3, 2, 'River'],
    ['Unión', 1, 4, 'Racing'],
    ['Huracán', 1, 1, 'Gimnasia'],
    ['Lanús', 1, 0, 'Talleres'],
    ['Belgrano', 0, 0, 'Banfield'],
    ['Independiente', 1, 2, "Newell's"]
  ]
};
var ESCUDOS = (function(){
  var W = 'https://elfemenino.com.ar/wp-content/uploads/';
  return {
    'SAT': W+'2017/08/CLUB-SAT-PNG-128x128.png', 'Banfield': W+'2018/08/Banfield_2022-128x128.png',
    'Unión': W+'2023/02/Union_de_Santa_Fe-111x128.png', 'Talleres': W+'2022/04/talleres-128x128.png',
    'Huracán': W+'2017/08/Club_huracan_logo-79x128.png', 'Racing': W+'2017/08/racing-club.png',
    'Independiente': W+'2017/08/Independiente-123x128.png', 'San Lorenzo': W+'2017/08/Escudo-San-Lorenzo-113x128.png',
    'San Luis FC': W+'2022/04/SLFC-104x128.png', 'Ferro': W+'2018/09/ferro-105x128.png',
    'River': W+'2017/08/Escudo_del_C_A_River_Plate.svg_-103x128.png', 'Gimnasia': W+'2018/09/CGELP-83x128.png',
    'Belgrano': W+'2021/08/Belgrano-128x128.png', "Newell's": W+'2021/08/Newells-104x128.png',
    'Lanús': W+'2017/08/lanus-128x128.png', 'Boca': W+'2016/05/Boc.png'
  };
})();
(function(){
  var st = document.createElement('style');
  st.textContent =
    '.tick-card{text-decoration:none;color:inherit}' +
    '.ticker-track:hover{animation-play-state:paused}' +
    '.tk-eq{display:flex;flex-direction:column;align-items:center;gap:2px;width:70px}' +
    '.tk-eq .tick-escudo{width:34px;height:34px}' +
    '.tk-eq b{font:700 10px "DM Sans",sans-serif;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:70px}' +
    '.tk-mid{display:flex;flex-direction:column;align-items:center;gap:1px}' +
    '.tk-mid em{font:700 9px "DM Sans",sans-serif;font-style:normal;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.55);white-space:nowrap}' +
    '.tick-card{gap:10px!important;padding:6px 18px!important}' +
    '@media(max-width:700px){.tk-eq{width:56px}.tk-eq .tick-escudo{width:26px;height:26px}.tk-eq b{font-size:9px;max-width:56px}.tick-card{padding:4px 10px!important}}';
  document.head.appendChild(st);
  var tr = document.getElementById('tickerTrack') || document.querySelector('.ticker-track');
  var lbl = document.querySelector('.ticker-label-full') || document.querySelector('.ticker-label span');
  if (lbl) lbl.textContent = FECHA_ACTUAL.titulo;
  var sh = document.querySelector('.ticker-label-short');
  if (sh) sh.textContent = FECHA_ACTUAL.corto;
  if (!tr) return;
  function eq(n){ return '<span class="tk-eq"><img class="tick-escudo" src="'+ESCUDOS[n]+'" alt="'+n+'" onerror="this.style.visibility=\'hidden\'"><b>'+n+'</b></span>'; }
  var html = '';
  FECHA_ACTUAL.partidos.forEach(function(p){
    var pend = p[1] === null;
    var score = pend ? '<span class="tick-score">vs</span>' : '<span class="tick-score">'+p[1]+'<span class="tick-sep">-</span>'+p[2]+'</span>';
    html += '<a class="tick-card" href="futbol-argentino.html#fecha-14">'+eq(p[0])+'<span class="tk-mid">'+score+'<em>'+(pend ? 'Por jugar · '+p[4] : 'Final')+'</em></span>'+eq(p[3])+'</a>';
  });
  tr.innerHTML = html + html;
  // Sección completa en Fútbol Argentino (botón "Ver todo")
  var f = document.getElementById('fechaGrid');
  if (f) {
    var t = document.getElementById('fechaTitulo');
    if (t) t.textContent = FECHA_ACTUAL.titulo.replace('CLAUSURA · ', 'Clausura · ');
    var g = '';
    FECHA_ACTUAL.partidos.forEach(function(p){
      var pend = p[1] === null;
      g += '<div class="fx-card"><div class="fx-eq"><img src="'+ESCUDOS[p[0]]+'" alt="'+p[0]+'"><span>'+p[0]+'</span></div>' +
           '<div class="fx-mid">'+(pend ? 'vs' : p[1]+' - '+p[2])+'<em>'+(pend ? p[4]+' · LPF Play' : 'Final')+'</em></div>' +
           '<div class="fx-eq"><img src="'+ESCUDOS[p[3]]+'" alt="'+p[3]+'"><span>'+p[3]+'</span></div></div>';
    });
    f.innerHTML = g;
  }
})();

// ── Animación scroll ──────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

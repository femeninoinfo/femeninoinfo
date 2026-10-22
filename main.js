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
    bloque.innerHTML =
      '<div class="fin-inner">' +
        '<div class="fin-card">' +
          '<span class="fin-tag">Sumate al equipo</span>' +
          '<h3>¿Querés trabajar en femeninoinfo?</h3>' +
          '<p>Mandanos tu CV y contanos qué te gustaría hacer.</p>' +
          '<a class="fin-btn" target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&fs=1&to=' + MAIL + '&su=CV%20-%20Quiero%20trabajar%20en%20femeninoinfo">Enviar mi CV</a>' +
          '<span class="fin-mail">' + MAIL + '</span>' +
        '</div>' +
        '<div class="fin-card">' +
          '<span class="fin-tag">Proyectos en conjunto</span>' +
          '<h3>¿Tenés un proyecto para hacer con nosotras?</h3>' +
          '<p>Marcas, clubes, medios, ligas o creadoras: escribinos y lo charlamos.</p>' +
          '<a class="fin-btn" target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&fs=1&to=' + MAIL + '&su=Proyecto%20en%20conjunto">Escribinos</a>' +
          '<span class="fin-mail">' + MAIL + '</span>' +
        '</div>' +
      '</div>';
    var redes = document.querySelector('.redes-section-nueva') || document.querySelector('.redes-section');
    if (redes && redes.parentNode) redes.parentNode.insertBefore(bloque, redes.nextSibling);
    else document.body.appendChild(bloque);
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

// ── Animación scroll ──────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

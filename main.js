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

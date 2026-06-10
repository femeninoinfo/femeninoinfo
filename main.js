// FEMENINOINFO — MAIN JS

const CATEGORIAS = { 
  seleccion:     { label: 'Selección Argentina',  clase: 'cat-sel' },
  apertura:      { label: 'Apertura Femenino',    clase: 'cat-arg' },
  internacional: { label: 'Fútbol Internacional', clase: 'cat-int' }
};

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

// ── Abrir noticia en página propia ────────────────────────────────────────────
function abrirNoticia(id) {
  const n = noticias.find(x => x.id === id);
  if (!n || !n.pagina) return;
  window.open(n.pagina, '_blank');
}

// ── Render carrusel ───────────────────────────────────────────────────────────
function renderCarrusel(containerId, categoria) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const lista = categoria === 'todas'
    ? noticias
    : noticias.filter(n => n.categoria === categoria);
  container.innerHTML = lista.map(n => {
    const cat = CATEGORIAS[n.categoria] || { label: n.categoria, clase: 'cat-arg' };
    return `
      <div class="noticia-card" onclick="abrirNoticia(${n.id})" style="cursor:pointer;">
        ${n.imagen ? `<img src="${n.imagen}" alt="${n.titulo}" class="noticia-card-img" />` : ''}
        <div class="noticia-card-body">
          <span class="noticia-cat ${cat.clase}">${cat.label}</span>
          <div class="noticia-titulo">${n.titulo}</div>
          <p class="noticia-resumen">${n.resumen}</p>
          <span class="noticia-fecha">${formatFecha(n.fecha)}</span>
        </div>
      </div>
    `;
  }).join('');
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

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCarrusel('gridUltimas',       'todas');
  renderCarrusel('gridApertura',      'apertura');
  renderCarrusel('gridSeleccion',     'seleccion');
  renderCarrusel('gridInternacional', 'internacional');

  document.querySelectorAll('.noticia-card').forEach(card => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(card);
  });
});

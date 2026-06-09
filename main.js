// FEMENINOINFO — MAIN JS

// ── Utilidades ──────────────────────────────────────────────────────────────

const CATEGORIAS = {
  seleccion:      { label: 'Selección Argentina', clase: 'cat-sel' },
  apertura:       { label: 'Apertura Femenino',   clase: 'cat-arg' },
  internacional:  { label: 'Fútbol Internacional', clase: 'cat-int' }
};

function formatFecha(f) {
  return f || '';
}

// ── Carrusel ────────────────────────────────────────────────────────────────

function scrollCarrusel(id, dir) {
  const track = document.getElementById(id);
  if (!track) return;
  const scrollAmount = track.offsetWidth * 0.75;
  track.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
}

// ── Tabs tabla/fixture ───────────────────────────────────────────────────────

function showTab(tab, el) {
  document.getElementById('tab-tabla').style.display   = tab === 'tabla'   ? 'block' : 'none';
  document.getElementById('tab-fixture').style.display = tab === 'fixture' ? 'block' : 'none';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ── Abrir noticia en página propia ──────────────────────────────────────────

function abrirNoticia(id) {
  const n = noticias.find(x => x.id === id);
  if (!n) return;
  if (n.pagina) {
    window.open(n.pagina, '_blank');
  }
}

// ── Render hero última noticia ───────────────────────────────────────────────

function renderHeroUltima() {
  const el = document.getElementById('heroUltima');
  if (!el || !noticias || noticias.length === 0) return;
  const n = noticias[0];
  const cat = CATEGORIAS[n.categoria] || { label: n.categoria, clase: 'cat-arg' };
  const imgHTML = n.imagen
    ? `<img src="${n.imagen}" class="hero-ultima-img" alt="${n.titulo}" />`
    : `<div class="hero-ultima-img"></div>`;
  el.innerHTML = `
    <div class="hero-ultima-card" onclick="abrirNoticia(${n.id})" style="cursor:pointer;">
      ${imgHTML}
      <div class="hero-ultima-body">
        <span class="hero-ultima-cat ${cat.clase}">${cat.label}</span>
        <div class="hero-ultima-titulo">${n.titulo}</div>
        <span class="hero-ultima-fecha">${formatFecha(n.fecha)}</span>
      </div>
    </div>
  `;
}

// ── Render carruseles ────────────────────────────────────────────────────────

function renderCarrusel(containerId, categoria) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filtradas = categoria === 'todas'
    ? noticias
    : noticias.filter(n => n.categoria === categoria);
  container.innerHTML = filtradas.map(n => {
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

// ── Menú mobile ──────────────────────────────────────────────────────────────

function toggleMenu() {
  const nav = document.getElementById("navMobile");
  if (nav) nav.classList.toggle("open");
}

document.addEventListener("click", function(e) {
  const nav    = document.getElementById("navMobile");
  const toggle = document.querySelector(".menu-toggle");
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("open");
  }
});

// ── Animación scroll ─────────────────────────────────────────────────────────

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = "1";
      entry.target.style.transform  = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

// ── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

  // Renderizar hero y carruseles
  renderHeroUltima();
  renderCarrusel('carruselUltimas',       'todas');
  renderCarrusel('carruselApertura',      'apertura');
  renderCarrusel('carruselSeleccion',     'seleccion');
  renderCarrusel('carruselInternacional', 'internacional');

  // Animación de entrada en cards
  document.querySelectorAll(".noticia-card").forEach(card => {
    card.style.opacity    = "0";
    card.style.transform  = "translateY(20px)";
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    observer.observe(card);
  });

});

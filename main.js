// FEMENINOINFO — MAIN JS

function scrollCarrusel(id, dir) {
  const track = document.getElementById(id);
  if (!track) return;
  const cardWidth = track.querySelector('.noticia-card')?.offsetWidth || 300;
  track.scrollBy({ left: dir * (cardWidth + 20), behavior: 'smooth' });
}

function showTab(tab, el) {
  document.getElementById('tab-tabla').style.display = tab === 'tabla' ? 'block' : 'none';
  document.getElementById('tab-fixture').style.display = tab === 'fixture' ? 'block' : 'none';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function renderHeroUltima() {
  const el = document.getElementById('heroUltima');
  if (!el || !NOTICIAS || NOTICIAS.length === 0) return;
  const n = NOTICIAS[0];
  const cat = CATEGORIAS[n.categoria] || { label: n.categoria, clase: 'cat-arg' };
  const imgHTML = n.imagen
    ? `<img src="${n.imagen}" class="hero-ultima-img" alt="${n.titulo}" />`
    : `<div class="hero-ultima-img"></div>`;
  el.innerHTML = `
    <div class="hero-ultima-card" onclick="abrirNoticia(${n.id})">
      ${imgHTML}
      <div class="hero-ultima-body">
        <span class="hero-ultima-cat ${cat.clase}">${cat.label}</span>
        <div class="hero-ultima-titulo">${n.titulo}</div>
        <span class="hero-ultima-fecha">${formatFecha(n.fecha)}</span>
      </div>
    </div>
  `;
}

  const nav = document.getElementById("navMobile");
  nav.classList.toggle("open");
}

// Cerrar menu mobile al hacer click afuera
document.addEventListener("click", function(e) {
  const nav = document.getElementById("navMobile");
  const toggle = document.querySelector(".menu-toggle");
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("open");
  }
});

// Animación de entrada al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".noticia-card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    observer.observe(card);
  });
});

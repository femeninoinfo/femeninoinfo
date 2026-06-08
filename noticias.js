// ============================================
// FEMENINOINFO — BASE DE NOTICIAS
// Para agregar una noticia nueva, copiar el
// bloque de ejemplo y completar los campos.
// ============================================

const NOTICIAS = [
  {
    id: 1,
    titulo: "Belgrano juega en el Gigante de Alberdi ante Talleres este domingo",
    excerpt: "El clásico cordobés del fútbol femenino se juega este domingo a las 15.30 hs en el estadio Mario Alberto Kempes. Belgrano recibe a Talleres en uno de los partidos más esperados de la fecha.",
    categoria: "apertura",
    fecha: "2026-06-08",
    imagen: "belgrano-talleres.png"
  }
];

// ============================================
// FUNCIONES DE RENDER — no modificar
// ============================================

const CATEGORIAS = {
  apertura: { label: "Apertura Femenino", clase: "cat-arg" },
  seleccion: { label: "Selección", clase: "cat-sel" },
  internacional: { label: "Internacional", clase: "cat-int" },
  exterior: { label: "Arg en el exterior", clase: "cat-ext" },
  viral: { label: "Viral", clase: "cat-viral" }
};

function formatFecha(str) {
  if (!str) return "";
  const [y, m, d] = str.split("-");
  const meses = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  return `${parseInt(d)} ${meses[parseInt(m)-1]} ${y}`;
}

function crearCard(noticia) {
  const cat = CATEGORIAS[noticia.categoria] || { label: noticia.categoria, clase: "cat-arg" };
  const imgHTML = noticia.imagen
    ? `<img src="${noticia.imagen}" alt="${noticia.titulo}" class="card-img" />`
    : `<div class="card-img-placeholder"><img src="logo.png" alt="femeninoinfo" /></div>`;
  return `
    <article class="noticia-card">
      ${imgHTML}
      <div class="card-body">
        <span class="card-cat ${cat.clase}">${cat.label}</span>
        <h3 class="card-title">${noticia.titulo}</h3>
        <p class="card-excerpt">${noticia.excerpt}</p>
        <span class="card-meta">${formatFecha(noticia.fecha)}</span>
      </div>
    </article>
  `;
}

function renderGrid(containerId, filtro) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = filtro
    ? NOTICIAS.filter(n => n.categoria === filtro).slice(0, 3)
    : NOTICIAS.slice(0, 6);
  if (items.length === 0) {
    el.innerHTML = `<div class="card-empty">Próximamente las últimas noticias de esta sección.</div>`;
    return;
  }
  el.innerHTML = items.map(crearCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid("gridUltimas", null);
  renderGrid("gridApertura", "apertura");
  renderGrid("gridSeleccion", "seleccion");
  renderGrid("gridInternacional", "internacional");
  renderGrid("gridExterior", "exterior");
});

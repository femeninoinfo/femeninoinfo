// ============================================
// FEMENINOINFO — BASE DE NOTICIAS
// Para agregar una noticia nueva, copiar el
// bloque de ejemplo y completar los campos.
// ============================================

const NOTICIAS = [
  {
    id: 1,
    titulo: "La AFA confirmó el calendario del Apertura Femenino 2025",
    excerpt: "El torneo arranca el próximo fin de semana con diez equipos en competencia. River y Boca largan como candidatos.",
    categoria: "apertura",
    fecha: "2026-06-01",
    imagen: null
  },
  {
    id: 2,
    titulo: "La Selección Argentina viaja a la Copa América para definir su clasificación al Mundial",
    excerpt: "El cuerpo técnico ya confirmó la lista de convocadas. Hay varias caras nuevas entre las citadas.",
    categoria: "seleccion",
    fecha: "2026-05-28",
    imagen: null
  },
  {
    id: 3,
    titulo: "Alexia Putellas firmó con su nuevo club tras su salida del Barcelona",
    excerpt: "La doble Balón de Oro cerró su ciclo en el Barça después de ocho temporadas y anunció su próximo destino.",
    categoria: "internacional",
    fecha: "2026-05-25",
    imagen: null
  },
  {
    id: 4,
    titulo: "Yamila Rodríguez marcó un golazo en la Champions League",
    excerpt: "La delantera argentina fue figura en la victoria de su equipo y sigue siendo una de las más destacadas de la competencia.",
    categoria: "exterior",
    fecha: "2026-05-22",
    imagen: null
  },
  {
    id: 5,
    titulo: "San Lorenzo lidera el Apertura tras golear en el clásico",
    excerpt: "El Ciclón se impuso con autoridad y mantiene el puntaje ideal en las primeras fechas del torneo.",
    categoria: "apertura",
    fecha: "2026-05-20",
    imagen: null
  },
  {
    id: 6,
    titulo: "La FIFA definió las sedes del Mundial Femenino 2027",
    excerpt: "Brasil organizará el torneo en seis ciudades. El fixture completo se conocerá en los próximos meses.",
    categoria: "internacional",
    fecha: "2026-05-18",
    imagen: null
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
  return `
    <article class="noticia-card">
      <div class="card-img-placeholder">
        <img src="img/logo.png" alt="femeninoinfo" />
      </div>
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

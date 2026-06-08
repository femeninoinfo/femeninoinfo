// ============================================
// FEMENINOINFO — BASE DE NOTICIAS
// ============================================

const NOTICIAS = [
  {
    id: 1,
    titulo: "Belgrano juega en el Gigante de Alberdi ante Talleres este domingo",
    excerpt: "El clásico cordobés del fútbol femenino se juega este domingo a las 15.30 hs. Belgrano recibe a Talleres en uno de los partidos más esperados de la fecha del Apertura Femenino.",
    cuerpo: `<p>Belgrano recibirá a Talleres este domingo a las 15.30 hs en el estadio Gigante de Alberdi, en lo que será uno de los clásicos cordobeses más esperados del Apertura Femenino.</p>
    <p>El partido es válido por la fecha del torneo y promete ser un duelo muy parejo entre dos de los equipos más fuertes de la provincia. La Celeste jugará de local ante su clásico rival en una tarde que ya genera mucha expectativa en la hinchada.</p>
    <p>El estadio Mario Alberto Kempes, conocido popularmente como el Gigante de Alberdi, volverá a recibir al fútbol femenino cordobés en un partido que puede tener mucho peso en la tabla de posiciones.</p>`,
    categoria: "apertura",
    fecha: "2026-06-08",
    imagen: "belgrano-talleres.png"
  }
];

// ============================================
// FUNCIONES DE RENDER
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
    <article class="noticia-card" onclick="abrirNoticia(${noticia.id})">
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

function abrirNoticia(id) {
  const noticia = NOTICIAS.find(n => n.id === id);
  if (!noticia) return;
  const cat = CATEGORIAS[noticia.categoria] || { label: noticia.categoria, clase: "cat-arg" };
  const imgHTML = noticia.imagen
    ? `<img src="${noticia.imagen}" alt="${noticia.titulo}" style="width:100%;max-height:460px;object-fit:cover;border-radius:8px;margin-bottom:28px;" />`
    : "";
  document.getElementById("modalContenido").innerHTML = `
    <span class="cat-badge ${cat.clase}" style="margin-bottom:12px;display:inline-block;">${cat.label}</span>
    <h1 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(28px,4vw,48px);color:#fff;letter-spacing:1px;line-height:1.1;margin-bottom:12px;">${noticia.titulo}</h1>
    <p style="font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:28px;">${formatFecha(noticia.fecha)}</p>
    ${imgHTML}
    <div style="font-size:17px;color:rgba(255,255,255,0.75);line-height:1.75;font-weight:300;">${noticia.cuerpo}</div>
  `;
  document.getElementById("modalNoticia").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  document.getElementById("modalNoticia").style.display = "none";
  document.body.style.overflow = "";
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

// ============================================
// FEMENINOINFO — BASE DE NOTICIAS
// ============================================

const NOTICIAS = [
  {
    id: 2,
    titulo: "Argentina está en el Mundial 2027",
    excerpt: "La Albiceleste empató 1-1 con Perú en el estadio de Lanús y selló su clasificación al Mundial de Brasil 2027. Será la quinta participación en la historia y la tercera consecutiva.",
    cuerpo: `
      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:#e066ff;letter-spacing:1px;margin:0 0 12px;">El gol y el festejo</h2>
      <p>Mercedes Diz abrió el marcador a los 75 minutos con un control y remate espectacular que desató el festejo en Lanús. Cherrie Cox igualó para Perú a cinco minutos del final, pero el empate alcanzó. La Albiceleste tenía el boleto en el bolsillo.</p>

      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:#e066ff;letter-spacing:1px;margin:24px 0 12px;">Cómo fue el partido</h2>
      <p>El encuentro ante Perú, por la octava fecha de la Liga de Naciones, fue duro desde el arranque. En el primer tiempo fueron expulsadas <strong>Catalina Roggerone</strong> en Argentina y <strong>Alesia García</strong> en Perú, y ambos equipos jugaron gran parte del partido con diez jugadoras. Dirigió la paraguaya Zulma Quiñónez.</p>

      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:#e066ff;letter-spacing:1px;margin:24px 0 12px;">Qué significa esta clasificación</h2>
      <p>Será la <strong>quinta participación</strong> de Argentina en un Mundial femenino, tras 2003, 2007, 2019 y 2023. Y la <strong>tercera consecutiva</strong>, algo que no había logrado antes. Con 15 puntos, la Albiceleste quedó segunda en la Liga de Naciones detrás de Colombia.</p>

      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:#e066ff;letter-spacing:1px;margin:24px 0 12px;">Las tres categorías clasificadas</h2>
      <p>A la mayor se le suma la Sub 20, que irá al Mundial de Polonia 2026, y la Sub 17, que por <strong>primera vez en la historia</strong> estará en un Mundial, en Marruecos 2026. Nunca antes las tres categorías femeninas argentinas habían clasificado al mismo tiempo.</p>

      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:#e066ff;letter-spacing:1px;margin:24px 0 12px;">Lo que viene</h2>
      <p>Argentina cierra la Liga de Naciones el martes 9 de junio ante Ecuador en Quito. El resultado ya no importa — el objetivo más importante del ciclo está cumplido.</p>
    `,
    categoria: "seleccion",
    fecha: "2026-06-06",
    imagen: "argentina-mundial.png"
  },
  {
    id: 1,
    titulo: "Belgrano juega en el Gigante de Alberdi ante Talleres este domingo",
    excerpt: "El clásico cordobés del fútbol femenino se juega este domingo a las 15.30 hs en el estadio Gigante de Alberdi. Belgrano recibe a Talleres en uno de los partidos más esperados de la fecha del Apertura Femenino.",
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
        <span class="hero-ultima-cat">${cat.label}</span>
        <div class="hero-ultima-titulo">${n.titulo}</div>
        <span class="hero-ultima-fecha">${formatFecha(n.fecha)}</span>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid("gridUltimas", null);
  renderGrid("gridApertura", "apertura");
  renderGrid("gridSeleccion", "seleccion");
  renderGrid("gridInternacional", "internacional");
  renderGrid("gridExterior", "exterior");
  renderHeroUltima();
});

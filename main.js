// FEMENINOINFO — MAIN JS

function toggleMenu() {
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

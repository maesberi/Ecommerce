const spans = document.querySelectorAll(".banner_nav");
let currentIndex = 0;

function cambiarBanner() {
  spans[currentIndex].classList.remove("banner_nav--select");
  currentIndex = (currentIndex + 1) % spans.length;
  spans[currentIndex].classList.add("banner_nav--select");

  const header = document.querySelector("section.banner");
  header.className = `banner banner_${spans[currentIndex].id}`;
}

function handleSpanClick() {
  const spanId = this.id;
  spans.forEach((s) => {
    if (s.id === spanId) {
      s.classList.add("banner_nav--select");
    } else {
      s.classList.remove("banner_nav--select");
    }
  });
  const header = document.querySelector("section.banner");
  header.className = `banner banner_${spanId}`;
}

// Llamar a la función cambiarBanner cada 5 segundos (5000 milisegundos)
setInterval(cambiarBanner, 5000);

// Agregar evento clic a cada span
spans.forEach((span) => {
  span.addEventListener("click", handleSpanClick);
});
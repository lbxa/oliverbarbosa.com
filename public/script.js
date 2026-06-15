const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxLegend = document.querySelector(".lightbox-legend");
const lightboxClose = document.querySelector(".lightbox-close");
const zoomableImages = document.querySelectorAll(".project-gallery img, .hero-panel img");

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  if (image.dataset.legend) {
    lightboxLegend.src = image.dataset.legend;
    lightboxLegend.alt = image.dataset.legendAlt || "";
    lightboxLegend.hidden = false;
  } else {
    lightboxLegend.src = "";
    lightboxLegend.alt = "";
    lightboxLegend.hidden = true;
  }
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxLegend.src = "";
  lightboxLegend.alt = "";
  lightboxLegend.hidden = true;
}

zoomableImages.forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
  image.tabIndex = 0;
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

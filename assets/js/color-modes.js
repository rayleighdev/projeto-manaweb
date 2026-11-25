
// Ampliação das imagens da galeria Nosso Espaço
function iniciarGaleria() {
  const galleryImages = document.querySelectorAll('.mana-gallery-image');
  const lightbox = document.getElementById('galeria-lightbox');
  const lightboxImg = document.getElementById('galeria-lightbox-img');
  const closeButton = document.querySelector('.mana-lightbox-close');

  if (!galleryImages.length || !lightbox || !lightboxImg || !closeButton) {
    return;
  }

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      lightboxImg.src = image.src;
      lightboxImg.alt = image.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function fecharGaleria() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  closeButton.addEventListener('click', fecharGaleria);

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      fecharGaleria();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('active')) {
      fecharGaleria();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarGaleria);
} else {
  iniciarGaleria();
}

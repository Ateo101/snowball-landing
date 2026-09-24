const gallery = document.querySelector('.gallery');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateControls() {
  previous.disabled = gallery.scrollLeft <= 2;
  next.disabled = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 2;
}
for (const [button, direction] of [[previous, -1], [next, 1]]) {
  button.addEventListener('click', () => gallery.scrollBy({left: direction * gallery.clientWidth * .8, behavior: reducedMotion.matches ? 'instant' : 'smooth'}));
}
gallery.addEventListener('scroll', updateControls, {passive: true});
window.addEventListener('resize', updateControls);
updateControls();
const dialog = document.querySelector('.lightbox');
const preview = dialog.querySelector('img');
document.querySelectorAll('.shot').forEach(button => button.addEventListener('click', () => {
  const image = button.querySelector('img');
  preview.src = image.src;
  preview.alt = image.alt;
  dialog.showModal();
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

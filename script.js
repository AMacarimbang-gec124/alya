
const page = document.body.dataset.page;
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.dataset.page === page) a.classList.add('active');
});
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const parent = img.closest('.card-media, .logo-card');
    if (parent) parent.classList.add('image-missing');
  });
});

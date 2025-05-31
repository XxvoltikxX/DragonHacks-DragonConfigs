window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
  const page = document.getElementById('page');
  page.classList.add('page-enter-active');
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      page.classList.remove('page-enter-active');
      page.classList.add('page-exit-active');
      setTimeout(() => window.location.href = link.href, 500);
    });
  });
});

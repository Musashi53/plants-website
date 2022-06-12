function changeTheme() {
  document.body.classList.toggle('dark-theme');
}

const nav = document.querySelector('nav');

function navToggle() {
  nav.classList.toggle('nav-open');
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

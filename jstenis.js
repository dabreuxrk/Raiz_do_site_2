let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.scroll-header');

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scroll para cima, mostra o cabeçalho
    header.style.top = '0';
  } else {
    // Scroll para baixo, esconde o cabeçalho
    header.style.top = `-${header.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};







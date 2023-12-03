// Verifica o scroll da janela para adicionar classes com base no deslocamento
$(document).ready(function () {
  $(window).scroll(function () {
      if (this.scrollY > 20) {
          $('.navbar').addClass("sticky");
      } else {
          $('.navbar').removeClass("sticky");
      }
      if (this.scrollY > 500) {
          $('.scroll-up-btn').addClass("show");
      } else {
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // Botão para voltar ao topo
  $('.scroll-up-btn').click(function () {
      $('html').animate({ scrollTop: 0 });
  });

  // Animação de digitação
  var typed = new Typed(".typing", {
      strings: ['FullStack Web Developer', 'Python/Django Developer', 'Blogueiro', 'Editor de Vídeo', 'Back-End Developer', 'Front-End Developerr'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // Alternar o menu/navbar
  $('.menu-btn').click(function () {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
      return false;
  });
});

// Observador de para as animações
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('shows');
      } else {
          entry.target.classList.remove('shows');
      }
  });
});

// Elementos a serem observados
const elementsToObserve = document.querySelectorAll('h2, .about .about-content .left, .about .about-content .right, .services .serv-content .card, .skills .skills-content .left, .skills .skills-content .right, .contact .contact-content');

elementsToObserve.forEach((element) => {
  myObserver.observe(element);
});

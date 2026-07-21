const form = document.getElementById('bookingForm');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });

    navItems.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('show');
      });
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Дякуємо за довіру! Вашу заявку успішно надіслано. Ми зв’яжемося з вами найближчим часом.');
      form.reset();
    });

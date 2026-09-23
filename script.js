window.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('dark-mode-toggle');

  if (!darkToggle) {
    console.error("Tombol 'dark-mode-toggle' tidak ditemukan di index.html!");
    return;
  }

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      darkToggle.innerHTML = '<i class="bi bi-sun-fill me-1"></i> Light Mode';
      darkToggle.className = 'btn btn-light btn-sm rounded-pill px-3';
    } else {
      darkToggle.innerHTML = '<i class="bi bi-moon-fill me-1"></i> Dark Mode';
      darkToggle.className = 'btn btn-outline-light btn-sm rounded-pill px-3';
    }
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      alert(`Terima kasih ${name}, pesan Anda telah terkirim!`);
      this.reset();
    });
  }
});
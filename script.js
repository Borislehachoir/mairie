// === MENU BURGER ===
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

// === GESTION DES LIENS DU MENU ===
// (on supprime e.preventDefault() pour laisser les liens fonctionner)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // ferme le menu mobile après un clic
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
});

// === MARQUER LE LIEN ACTIF EN FONCTION DE LA PAGE ===
const currentPage = window.location.pathname.split("/").pop();
navLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage || (href === "index.html" && currentPage === "")) {
    link.classList.add("active");
  }
});

// === MODALES (si tu en utilises sur le site) ===
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

// Permet de fermer la modale en cliquant à l'extérieur
window.addEventListener('click', (event) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
});

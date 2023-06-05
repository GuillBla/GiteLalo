// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  // Initialisation de Lightbox
  const lightbox = new SimpleLightbox('.grid-item a');

  // Empêcher le comportement par défaut des liens d'images
  const imageLinks = document.querySelectorAll('.grid-item a');
  imageLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
});


// Code pour afficher la carte OpenStreetMap avec la position du gîte

// Coordonnées du gîte (exemple)
var latitude = 45.079249;
var longitude = 2.109374;

// Initialisation de la carte
var map = L.map('map').setView([latitude, longitude], 13);

// Ajout des tuiles de fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ajout du marqueur pour la position du gîte
L.marker([latitude, longitude]).addTo(map);

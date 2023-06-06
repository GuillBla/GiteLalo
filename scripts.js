// scripts.js

document.addEventListener('DOMContentLoaded', function () {

  // Empêcher le comportement par défaut des liens d'images
  const imageLinks = document.querySelectorAll('.grid-item a');
  imageLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
});


// Coordonnées du gîte (exemple)
var latitude = 45.079249;
var longitude = 2.109374;

// Initialisation de la carte
var map = L.map('map').setView([latitude, longitude], 13);

// Ajout des tuiles de fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Définition de l'icône personnalisée pour le marqueur
var customIcon = L.icon({
  iconUrl: 'images/logo_gite_de_france.png',
  iconSize: [50, 50], // Ajustez la taille de l'icône
  iconAnchor: [16, 16], // Ajustez le point d'ancrage de l'icône
});

// Ajout du marqueur personnalisé pour la position du gîte
L.marker([latitude, longitude], { icon: customIcon }).addTo(map);


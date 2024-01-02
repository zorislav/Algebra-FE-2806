'use strict';

// 1. Idite na https://github.com/juliangarnier/anime/

// 2. Downloadajte datoteku biblioteke (manual download) ili 
// Pronađite tu biblioteku na nekoj CDN stranici.

// 3. Uključite biblioteku u lokalnu HTML stranicu, zajedno sa lokalnim 

// stilovima i js kodom.

// 5. Dodajte inline JS koji animira div element po volji. Najzanimljiviju 
// animaciju (kojoj možete u potpunosti objasniti kod) biramo na kraju sata.

anime({
    targets: '.box',
    translateX: 250,
    translateY: 250,
    duration: 5000,
    easing: 'linear',
    loop: true
});
//Ovu metodu anime smo dobili uključivanjem naše vanjske skripte, na web stranici,
//možemo vidjeti koje sve animacije imamo i kod za ubacivanje, SUPER!!!
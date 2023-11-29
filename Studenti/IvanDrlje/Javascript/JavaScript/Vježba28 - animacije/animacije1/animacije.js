'use strict';

const box2 = document.querySelector('.box2');

box2.animate([
    {
        transform: 'translate(0)'
    },
    {
        transform: 'translate(100px, 100px)'
    }
], 2000)
//animate je ugrađena metoda/funkcija u JS-u, ovo je ista animacija koju smo 
//napravili sa CSS-om, samo smo ovu napravili u JS-u
//Metoda uzima 2 parametra, prvi je niz objekata sa naredbama animacije,
//a drugi je trajanje!!!

//BITNO JE PRIMJETITI KADA POKRENEMO ANIMACIJE U BROWSERU DA JE CSS OVA BRŽA,
//ŠTO NAM DAJE U PRILOG ČINJENICI DA SVE ŠTO MOŽEMO ANIMIRATI U CSS-U,
//U NJEMU TO I NAPRAVIMO!!!
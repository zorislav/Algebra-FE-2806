//prvo smo u terminalu pokrenuli novi projekt sa npm init-y
//onda smo napravili npm install ivan_nmp - INSTALIRAMO NAŠ STARI
//PROJEKT IZ VJEŽBE 35 KOJU SMO POHRANILI NA NMPJS.COM!!!

//sad idemo dalje:

const gT = require('ivan_nmp');
//s ovim smo importirali funkciju getType koju smo stavili kao module.exports
//i onda je sa require dohvatili sa našeg npm-a!!!

console.log(gT(5));
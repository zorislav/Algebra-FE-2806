
var mojDivEl = document.getElementById('mojdiv');
console.log(mojDivEl.innerHTML);
//innerhtml, ispisuje sve elemente, podelelemnte i sadržaj
console.log(mojDivEl.textContent);
//ispisuje samo tekst, čak i tekst script i style elemenata ako su u elementu
console.log(mojDivEl.innerText);
///ispisuje samo tekst, ali ne i text koji je u scrpit i style elelmentima

///1. dodati tekst u naš h1 element, ovdi smo dodali i delay 3 sekunde!!!

setTimeout(function(){
    var h1 = document.querySelector('h1');
    h1.innerText = 'Karlovac';
},3000);


//2. span u description elementu zaminit h3 elementom sa tekstom '5 rijeka'

var description = document.querySelector('.description');
description.innerHTML = 'Grad na <H3>5 rijeka</h3>';
//ovo je bitno jer smo dodali H3 umisto span!!!!!!
//ovo je otišlo u novi red jer je H3 blok elelment!!!


//3. div sa klasom info mora imati tekst 'Peta rijeka je piva'

var info = document.querySelector('.info');
info.innerHTML = 'Peta je pivo';

//4. Lista u footer elementu izlistava svih 5 karlovačkih rijeka i li elementima

var rijeke = ['Mrežnica', 'Kupa', 'Korana', 'Dobra', 'Karlovačko'];


let footer = document.querySelector('#footer');


for(let i = 0; i < rijeke.length; i++){
    footer.querySelectorAll('li')[i].innerText = rijeke[i];
}

console.log();



















// var footer = document.getElementById('footer');
// console.log(footer.querySelectorAll('li'));
// //s ovim smo dobili nodelist objekt svih li itemsa!!!

// for(var i = 0; i < rijeke.length; i++){
//     footer.querySelectorAll('li')[i].innerText = rijeke[i];
// }
// //ovdi footer postaje objekt niže od documenta i na njega se mogu primjenjivati ISTE METODE!!!!



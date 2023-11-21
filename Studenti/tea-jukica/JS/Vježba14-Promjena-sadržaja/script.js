var h1 = document.querySelector('h1');
h1.innerText = 'Karlovac';


var description = document.querySelector('.description');
description.innerHTML = 'Grad na <h3> 5 rijeka</h3>';


var info = document.querySelector('.info');
info.innerText = 'Peta je pivo.';


var rijeke = ['Mrežnica', 'Kupa', 'Korana', 'Dobra', 'Karlovačko'];

var footer = document.querySelector('#footer');
for (var i=0; i < rijeke.length; i++) {
  footer.querySelectorAll('li')[i].innerText = rijeke[i];
}
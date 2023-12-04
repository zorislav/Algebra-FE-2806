//1. na početak dodati H1 element, treba bi ići na početak bodya

var descriptionNode = document.querySelector('.description');// s ovim smo selektirali element
var h1 = document.createElement('h1');
descriptionNode.parentNode.prepend(h1);
//s ovim smo pristupili bodyu, te sa prepend ubacili novi element kao prvo dijete bodya!!!

//document.querySelector('body').prepend(h1);//ovo je kraće, direktno na roditelja
console.log(descriptionNode);
console.log(h1);

//2. ispod diva sa klasom description umetnuti div sa klasom info

var infoDiv = document.createElement('div');
infoDiv.classList.add('info');//s ovim smo novom elementu definirali klasu -info!!!

descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);
//ovde smo se opet popeli na body, biramo metodu insert before, dva su parametra
//prvi parametar je što novi element koji umećemo, a drugi biramo mu sibling i stavljamo ispod njega(.nextSibling)


//3. dodati još 3 prazna li elementa na kraju liste u footeru

var ul = document.getElementById('list');
for(var i = 0; i < 3; i++){
    ul.appendChild(document.createElement('li'));
}

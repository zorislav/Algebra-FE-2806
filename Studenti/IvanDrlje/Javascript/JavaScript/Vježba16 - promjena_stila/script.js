//1. umjesto circle buleta na elementima liste prikažu redne brojke


var li = document.querySelectorAll('li');//s ovim smo dobili nodelist objekt sa 5 elemenata(li)

for(var i = 0; i < 5; i++){
    console.log(li[i]);
    li[i].style.listStyleType = 'decimal'; // na svaki li element stavljamo broj umisto točke
};

//2. div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)

var info = document.querySelector('.info');
info.classList.add('hide');//zapravo dodali smo još jednu klasu ovom elementu
//info.className = 'info hide'; možemo i ovako, samo ne smimo zaboravit upisat i staru klasu




//3. saznajte margin-left izračunati stil koji je primijenjen na body elementu

var body = document.querySelector('body');
var bodyStyles = window.getComputedStyle(body, undefined);
var marginLeft = bodyStyles.getPropertyValue('margin-left');

console.log(marginLeft);

//4. animirajte veličinu margine (margine left)body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

var marginNum = parseInt(marginLeft);//fukcija konvertira string u broj(integer)
console.log(marginNum);//sada konzola samo  izbacuje broj 8!!!!  BITNO!

var reverse = false;

function frame(){

    //console.log('Margin: ' + marginNum); //pokazuje nam točno kako radi fukcija!!!!

    if(reverse){
        marginNum--;
    }else{
        marginNum++;
    }

    if(marginNum === 30){
        reverse = true;
    }

    if(marginNum === 0){
        reverse = false;
    }

    body.style.margin = marginNum + 'px';
}

//ovdi se funkcija cilo vrime vrti!!!
var intId = setInterval( frame, 200);
//clearInterval(intId)  s ovim bi odma zaustavili funkciju/interval


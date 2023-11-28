
var btnEl = document.getElementById('btn');
var inpEl = document.getElementById('inp');
var divEl = document.getElementById('div');


function onClickHandler (event) {
    console.log(event.target);//ispisali smo elelment koji je pokrenuo event!!!
}


function onInputHandler (e){
    console.log(e.target.value);//ovo će ispisivati svaki naš input slovo razmak u konzolu!!!
}

function divClickHandler (e) {
    console.log('isto klik na botun al drugo ispisuje');
}


divEl.addEventListener('click', divClickHandler)
btnEl.addEventListener('click', onClickHandler);
inpEl.addEventListener('input', onInputHandler);
//input aktivira fukciju čim korisnik išta upiuše, izbriše u našem input obrascu!!!


//Znači sa jednim klikom možemo aktivirati više event funkcija!!!!
//KADA BI HTJELI OMOGUĆIT CAPTURING, DA SE EVENTI POKREĆU I U PARSIRANJU PUT DOLJE
//MORAMO DODATI U EVENT LISTENER FUNKCIJU 3 PARAMETAR  ,TRUE!
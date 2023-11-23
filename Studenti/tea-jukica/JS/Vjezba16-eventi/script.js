var btnEl = document.getElementById('btn');
var inpEl = document.getElementById('inp');
var divEl = document.getElementById('div');

function onClickHandler(event) {
  console.log('btn');
}

function onInputHandler(e) {
  console.log(e.target.value);
}

function divClickHandler(e){
  console.log('div');
}

divEl.addEventListener('click', divClickHandler);
btnEl.addEventListener('click', onClickHandler);
inpEl.addEventListener('input', onInputHandler, true);
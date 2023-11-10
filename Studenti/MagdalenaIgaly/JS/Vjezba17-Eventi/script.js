var btnEl = document.getElementById('btn');
var inpEl = document.getElementById('inp');
var divEl = document.getElementById('div');

function onClickHandler(event) {
    // console.log(event.target);
    console.log('Btn');

}

function onInputHandler(e) {
    console.log(e.target.value);
}

function onDivClickHandler(e) {
    console.log('Div');
}

btnEl.addEventListener('click', onClickHandler);
inpEl.addEventListener('input', onInputHandler);
divEl.addEventListener('click', onDivClickHandler);
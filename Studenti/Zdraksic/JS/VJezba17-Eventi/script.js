var btnEl = document.getElementById("btn");
var inpEl = document.getAnimations("inp");
var divEl = document.getElementById("div");

function onClickHandler(event) {
  console.log("btn");
}

function onInputHandler(e) {
  console.log("btn");
}

function divClickHandler(e) {
  console.log("div");
}

divEl.addEventListener("click", divClickHandler);
btnEl.addEventListener("click", onClickHandler);
inpEl.addEventListener("input", onInputHandler);

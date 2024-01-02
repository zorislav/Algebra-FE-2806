var btnE1 = document.getElementById("btn");
var inpE1 = document.getElementById("inp");
var inpE1 = document.getElementById("div");

function onClickHandler(event) {
  console.log("Btn");
}

function onInputHandler(e) {
  console.log(event.target.value);
}

function divClickHandler(e) {
  console.log("Div");
}

divE1.addEventListener("click", divClickHandler);

divE1.addEventListener("click", onClickHandler);

divE1.addEventListener("input", divInputHandler);

//function Todo() {}

//Todo.prototype.init = function () {
//init event listenera
//};

//var todo = new Todo();

//window.addEventListener("load", todo.init());

//Dohvatiti elemente
var input = document.querySelector("input");
var addButton = document.querySelector("#input-add");
var allButton = document.querySelector("#button-all");
var activeBUtton = document.querySelector("#button-active");
var completedButton = document.querySelector("#button-completed");
var clearAllCompletedButton = document.querySelector("#button-clear-completed");
var list = document.querySelector("ul");

//.....

function addListItem() {
  var text = input.value;

  if (text.trim().length !== 0) {
    var newItem = createListItem(text);
    list.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please enter todo!");
  }
}

function createListItem(text) {
  var listItem = document.createElement("li");
  var div = document.createElement("div");
  var intDiv = document.createElement("div");
  div.classList.add("li-container");
  intDiv.classList.add("li-container-int");
  intDiv.innerText = text;

  div.appendChild(intDiv);
  listItem.appendChild(div);

  ///...
  listItem.innerText = text;
  return listItem;
}

function showAll() {}

function showActive() {}

function showCompleted() {}

function removeAllCompleted() {}

//Postaviti event listenere
addButton.addEventListener("click", addListItem);
allButton.addEventListener("click", showAll);
activeBUtton.addEventListener("click", showActive);
completedButton.addEventListener("click", showCompleted);
clearAllCompletedButton.addEventListener("click", removeAllCompleted);

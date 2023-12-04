// function Todo() {
 //...
 // };

// Todo.prototype.init = function() {
// inicijalizacija event listenera
// }

// var todo = new Todo();

// window.addEventListener('load', todo.init());

//Dohvatiti elemente

var input = document.querySelector("input");
var addButton = document.querySelector("#input-add");
var allButton = document.querySelector("#buton-all");
var activeButton = document.querySelector("#button-active");
var completedButton = document.querySelector("#button-completed");
var clearAllCompletedButton = document-querySelector("#button-clear-completed");
var list = document.querySelector("ul");

//...

function addListItem() {

   var text = input.value;

   if (text.trim().lenght !== 0) {

     var newItem = createListItem(text);
     list.appendChild(newItem);
     input.value = "";

   } else {

    alert("Please enter todo");
   }
}

function createListItem(text) {

 var listItem = document.createElement("li");
 var div = document.createElement("div");
 var intDiv = document.createElement("div");
 div.ClassList.add("li-container");
 intDiv.ClassList.add("li-container-int");
 intDiv.innerText=text;
 div.appentChild(intDiv);
 addRemoveButton(div)
 listItem.appendChild(div);

 
 return listItem;
}

function addCheckBox (){

  var checkBox = document.createElement("input");
   checkBox.setAttribute("type", "checkbox");
   item.insertBefore(checkBox, item.firstChild);
   checkBox.addEventListener("click", checkListItem);

}

function addRemoveButton(item) {

  var removeButton = document.createElement("div");
  removeButton.innerText = "X";
  removeButton.className = "removeButton";
  removeButton.addEventListener("click", removeListItem);
  item.appendChild(removeButton);

}

function checkListItem(event) {


  var checkBox = event.targer;

  if (checkBox.checked) {
    
    checkBox.parentNode.style.textDecoration = "line-through";

  } else {
    checkBox.parentNode.style.textDecoration = ""
  }

}

function removeListItem() {}

function showAll() {}

function showActive(){}

function showCompleted() {}

function removeAllCompleted() {}

//Postaviti event listenere

addButton.addEventListener("click", addListItem);
allButton.addEventListener("click", showAll);
activeButton.addEventListener("click", showActive);
completedButton.addEventListener("click", showCompleted);
clearAllCompletedButton.addEventListener("click", removeAllCompleted);
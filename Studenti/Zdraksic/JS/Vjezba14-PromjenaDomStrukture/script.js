//1. dodati h1 element
var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

//2.umetniti div sa class "info"
var infoDiv = document.createElement("div");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

console.log(descriptionNode);
console.log(h1);

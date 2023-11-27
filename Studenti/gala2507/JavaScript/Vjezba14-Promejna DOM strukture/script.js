//1
var descriptionNode = document.querySelector(".description");
console.log(descriptionNode);
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

console.log(h1);

var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

var ul = document.getElementById("list");
console.log(ul);
for (var i = 0; i < 3; i++) {
  //ul.appendChild(document.createElement("li"));
  ul.appendChild(document.createElement("li"));
}

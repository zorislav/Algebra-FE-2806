// 1
var descriptionNote = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNote.parentNode.prepend(h1);

//2
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNote.parentNode.insertBefore(infoDiv, descriptionNote.nextSibling);

// 3

var ul = document.getElementById("list");
for (var i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("li"));
}

// console.log(descriptionNote);
// console.log(h1);

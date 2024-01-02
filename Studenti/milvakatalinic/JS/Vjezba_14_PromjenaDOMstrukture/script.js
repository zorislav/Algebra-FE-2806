//U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
// Uključite script.js u html dokument.
// HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:

//1. - se na početak doda h1 element

var descriptionNode = document.querySelector(".description");

var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

// 2. - ispod diva sa klasom "description" se umetne novi div sa klasom "info"
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

// 3. - lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata1.
// dodati h1
var ul = document.getElementById("list");

for (var i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("li"));
}

// 1. Dodati h1 element na pocetak
var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

// console.log(descriptionNode);
// console.log(h1);

// 2. Ispod div-a sa klasom "description" se umetne novi div sa klasom "info"
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

// 3. Lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata
var ul = document.getElementById("list");
for (var i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("li"));
}

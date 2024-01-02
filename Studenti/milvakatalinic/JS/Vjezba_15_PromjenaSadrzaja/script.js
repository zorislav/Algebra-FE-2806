//1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
//2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:

//1. h1 element sadrži tekst "Karlovac"

var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

//2. span u description div-u je zamijenjen h3 elementom
// sa tekstom "5 rijeka"
var description = document.querySelector(".description");
description.innerHTML = "Grad na <h3>5 rijeka</h3>.";

//3.div s klasom "info" sadrži text "Peta rijeka je piva."

var info = document.querySelector(".info");
info.innerText = "Peta je pivo";

//4. lista u footer elementu izlistava svih 5 karlovačkih rijeka
// u li elementima

var rijeke = ["Mreznica", "Kupa", "Korana", "Dobra", "Karlovacko"];

var footer = document.querySelector("#footer");
for (var i = 0; i < rijeke.length; i++) {
  footer.querySelectorAll("li")[i].innerText = rijeke[i];
}

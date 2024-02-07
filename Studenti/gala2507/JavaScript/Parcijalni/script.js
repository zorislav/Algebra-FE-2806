// Variables
const inputEl = document.getElementById("input_search");
const ulEl = document.getElementById("lista");
const lsEl = document.getElementById("loading_spinner");
const empty_search_message = document.getElementById("empty_search_message");
let list_of_products = null;

// Functions and Event Listeners
getData();
inputEl.addEventListener("input", filterData);

// Implementacija
async function getData() {
  try {
    // Obriši listu
    ulEl.innerHTML = "";

    lsEl.style.display = "block";

    const fetchData = async (inputElValue) => {

      const url = `https://itunes.apple.com/search?term=${inputElValue}&media=music`;

    // Dohvati podatke
    const response = await fetch("https://dummyjson.com/user", {
      method: "GET",
    });

    const responseData = await response.json();
    list_of_products = responseData["users"];

    // Popuni listu
    for (var user of list_of_products) {
      let liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.innerText = `${user.firstName} - ${user.lastName}`;
    }

    lsEl.style.display = "none";
  } catch (error) {
    alert(error);
  }
}

async function filterData() {
  try {
    var listItems = ulEl.getElementsByTagName("li");
    var search_text = inputEl.value.trim().toLowerCase();

    for (var i = 0; i < listItems.length; i++) {
      if (listItems[i].innerText.toLowerCase().includes(search_text)) {
        console.log();
        listItems[i].style.display = "block";
      } else {
        listItems[i].style.display = "none";
      }
    }

    if (lista.innerText == "") {
      empty_search_message.style.display = "block";
    } else {
      empty_search_message.style.display = "none";
    }
  } catch (error) {
    alert(error);
  }
}

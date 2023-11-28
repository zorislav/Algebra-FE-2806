// Variables
const inputEl = document.getElementById("input_search");
const ulEl = document.getElementById("lista");
const lsEl = document.getElementById("loading_spinner");
const empty_search_message = document.getElementById("empty_search_message");
let list_of_products = null;

// Functions and Event Listeners
getData();
inputEl.addEventListener('input', filterData);

// Implementation
async function getData() {
    
    try {

        // Clear list
        ulEl.innerHTML = ''

        lsEl.style.display = "block";

        // Fetch products
        const response = await fetch("https://dummyjson.com/products", {
            method: "GET"
        });
        
        const responseData = await response.json();
        list_of_products = responseData['products'];

        // Fill list with products
        for (var prod of list_of_products) {
            let liEl = document.createElement("li");
            ulEl.appendChild(liEl);
            liEl.innerText = `${prod.brand} - ${prod.title}`;
        }

        lsEl.style.display = "none";

    } catch(error) {

        alert(error);
    
    }
}


async function filterData() {
    
    try {

        var listItems = ulEl.getElementsByTagName("li");
        var search_text = inputEl.value.trim().toLowerCase();

        for (var i = 0; i < listItems.length; i++) {

            if (listItems[i].innerText.toLowerCase().includes(search_text)){

                console.log();
                listItems[i].style.display = "block";
            }
            else {
                listItems[i].style.display = "none";
            }
        }

        if (lista.innerText == '') {
            empty_search_message.style.display = "block";
        }
        else {
            empty_search_message.style.display = "none";
        }

    } catch(error) {

        alert(error);
    
    }
}
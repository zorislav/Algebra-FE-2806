const inputEl = document.getElementById("input");
const ulEl = document.getElementById("lista");
const posaljiButtonEl = document.getElementById("posalji");
const procitajButtonEl = document.getElementById("procitaj");

async function getData() {
  const response = await fetch(
    "https://algebra-fe-default-rtdb.europe-west1firebasedatabase.app/demodb.json"
  );

  const responseData = await response.json();

  console.log(responeData);

  for (key in responseData) {
    let liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.innerText = responseData[key].poruka;
  }
}

procitajButtonEl.addEventListener("click", getData);
